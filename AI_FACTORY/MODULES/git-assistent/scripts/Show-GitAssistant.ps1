[CmdletBinding()]
param(
    [string]$RepositoryRoot,
    [string]$ChoiceSequence,
    [string]$StateFixturePath
)

$ErrorActionPreference = "Stop"

function Stop-Safely {
    param([string]$Message)

    Write-Host ""
    Write-Host "FOUT: $Message" -ForegroundColor Red
    Write-Host "Er is niets gewijzigd." -ForegroundColor DarkGray
    exit 1
}

function Get-ConfigValue {
    param([string]$Text, [string]$Key, [string]$Fallback = "")

    $pattern = '(?m)^{0}:\s*"([^"]*)"\s*$' -f [regex]::Escape($Key)
    $match = [regex]::Match($Text, $pattern)
    if ($match.Success) { return $match.Groups[1].Value }
    return $Fallback
}

function Invoke-GitReadOnly {
    param(
        [string]$WorkingDirectory,
        [string[]]$Arguments,
        [switch]$AllowFailure
    )

    $previousErrorAction = $ErrorActionPreference
    $previousOptionalLocks = $env:GIT_OPTIONAL_LOCKS
    $ErrorActionPreference = "Continue"
    $env:GIT_OPTIONAL_LOCKS = "0"
    try {
        $output = @(& git -C $WorkingDirectory @Arguments 2>$null)
        $exitCode = $LASTEXITCODE
    } finally {
        $ErrorActionPreference = $previousErrorAction
        if ($null -eq $previousOptionalLocks) {
            Remove-Item Env:GIT_OPTIONAL_LOCKS -ErrorAction SilentlyContinue
        } else {
            $env:GIT_OPTIONAL_LOCKS = $previousOptionalLocks
        }
    }

    if ($exitCode -ne 0 -and -not $AllowFailure) {
        Stop-Safely "Git kon de repository niet uitlezen."
    }

    [PSCustomObject]@{ ExitCode = $exitCode; Output = $output }
}

function ConvertFrom-PorcelainStatus {
    param([string[]]$StatusLines)

    $counts = [ordered]@{
        Modified = 0
        New = 0
        Deleted = 0
        Renamed = 0
        Staged = 0
        Unstaged = 0
        Conflicted = 0
    }
    $conflictFiles = [System.Collections.Generic.List[string]]::new()
    $conflictCodes = @("DD", "AU", "UD", "UA", "DU", "AA", "UU")

    foreach ($line in @($StatusLines)) {
        if ([string]::IsNullOrEmpty($line) -or $line.Length -lt 3) { continue }
        $code = $line.Substring(0, 2)
        $path = $line.Substring(3)

        if ($code -eq "??") {
            $counts.New++
            $counts.Unstaged++
            continue
        }
        if ($conflictCodes -contains $code) {
            $counts.Conflicted++
            $conflictFiles.Add($path)
            continue
        }

        $indexState = $code.Substring(0, 1)
        $workTreeState = $code.Substring(1, 1)
        if ($indexState -ne " ") { $counts.Staged++ }
        if ($workTreeState -ne " ") { $counts.Unstaged++ }

        if ($code.Contains("R")) {
            $counts.Renamed++
        } elseif ($code.Contains("D")) {
            $counts.Deleted++
        } elseif ($code.Contains("A")) {
            $counts.New++
        } else {
            $counts.Modified++
        }
    }

    [PSCustomObject]@{ Counts = [PSCustomObject]$counts; ConflictFiles = @($conflictFiles) }
}

function Get-RepositoryState {
    param([string]$WorkingDirectory, [string]$ProjectName, [string]$DefaultBranch)

    $repositoryResult = Invoke-GitReadOnly $WorkingDirectory @("rev-parse", "--show-toplevel")
    $repositoryPath = ($repositoryResult.Output | Select-Object -First 1).Trim()
    $gitDirectoryResult = Invoke-GitReadOnly $WorkingDirectory @("rev-parse", "--absolute-git-dir")
    $gitDirectory = ($gitDirectoryResult.Output | Select-Object -First 1).Trim()

    $branchResult = Invoke-GitReadOnly $WorkingDirectory @("symbolic-ref", "--quiet", "--short", "HEAD") -AllowFailure
    $isDetached = $branchResult.ExitCode -ne 0
    $branchName = if ($isDetached) { "Geen normale branch (detached HEAD)" } else { ($branchResult.Output | Select-Object -First 1).Trim() }

    $statusResult = Invoke-GitReadOnly $WorkingDirectory @("status", "--porcelain=v1", "--untracked-files=all")
    $statusLines = @($statusResult.Output | Where-Object { $_ -ne "" })
    $parsedStatus = ConvertFrom-PorcelainStatus $statusLines

    $mergeActive = Test-Path -LiteralPath (Join-Path $gitDirectory "MERGE_HEAD")
    $rebaseActive = (Test-Path -LiteralPath (Join-Path $gitDirectory "rebase-merge")) -or
        (Test-Path -LiteralPath (Join-Path $gitDirectory "rebase-apply"))

    $remoteResult = Invoke-GitReadOnly $WorkingDirectory @("remote") -AllowFailure
    $remotes = @($remoteResult.Output | Where-Object { -not [string]::IsNullOrWhiteSpace($_) })
    $hasRemote = $remotes.Count -gt 0
    $hasUpstream = $false
    $upstreamName = ""
    $ahead = 0
    $behind = 0

    if (-not $isDetached) {
        $upstreamResult = Invoke-GitReadOnly $WorkingDirectory @("rev-parse", "--abbrev-ref", "--symbolic-full-name", "@{upstream}") -AllowFailure
        if ($upstreamResult.ExitCode -eq 0) {
            $hasUpstream = $true
            $upstreamName = ($upstreamResult.Output | Select-Object -First 1).Trim()
            $distanceResult = Invoke-GitReadOnly $WorkingDirectory @("rev-list", "--left-right", "--count", "HEAD...@{upstream}") -AllowFailure
            if ($distanceResult.ExitCode -eq 0) {
                $distance = (($distanceResult.Output -join " ").Trim() -split "\s+")
                if ($distance.Count -ge 2) {
                    $ahead = [int]$distance[0]
                    $behind = [int]$distance[1]
                }
            }
        }
    }

    [PSCustomObject]@{
        ProjectName = $ProjectName
        RepositoryPath = $repositoryPath
        DefaultBranch = $DefaultBranch
        BranchName = $branchName
        IsDetached = $isDetached
        GitAvailable = $true
        RepositoryFound = $true
        StatusLines = $statusLines
        Counts = $parsedStatus.Counts
        ConflictFiles = $parsedStatus.ConflictFiles
        MergeActive = $mergeActive
        RebaseActive = $rebaseActive
        HasRemote = $hasRemote
        HasUpstream = $hasUpstream
        UpstreamName = $upstreamName
        Ahead = $ahead
        Behind = $behind
    }
}

function Import-StateFixture {
    param([string]$Path)

    if (-not (Test-Path -LiteralPath $Path -PathType Leaf)) {
        Stop-Safely "De statusfixture bestaat niet: $Path"
    }
    $state = Get-Content -Raw -LiteralPath $Path | ConvertFrom-Json
    if (-not $state.Counts) { Stop-Safely "De statusfixture mist Counts." }
    $state
}

function Show-Dashboard {
    param([object]$State)

    Write-Host "========================================================" -ForegroundColor DarkCyan
    Write-Host "AI FACTORY - GIT DASHBOARD" -ForegroundColor Cyan
    Write-Host "========================================================" -ForegroundColor DarkCyan
    Write-Host ""
    Write-Host "Project:"
    Write-Host $State.ProjectName -ForegroundColor White
    Write-Host ""
    Write-Host "Branch:"
    Write-Host $State.BranchName -ForegroundColor White
    if (-not $State.IsDetached -and $State.BranchName -ne $State.DefaultBranch) {
        Write-Host "Aparte ontwikkelbranch; dit is normaal tijdens bouwen of testen." -ForegroundColor DarkGray
    }
    Write-Host ""
    Write-Host "Status:"
    Write-Host "[OK] Repository gevonden" -ForegroundColor Green
    Write-Host "[OK] Git beschikbaar" -ForegroundColor Green
    Write-Host ""
    Write-Host ("Gewijzigd: {0}" -f $State.Counts.Modified)
    Write-Host ("Nieuw:      {0}" -f $State.Counts.New)
    Write-Host ("Verwijderd: {0}" -f $State.Counts.Deleted)
    Write-Host ("Hernoemd:   {0}" -f $State.Counts.Renamed)
    Write-Host ("Staged:     {0}" -f $State.Counts.Staged)
    Write-Host ("Unstaged:   {0}" -f $State.Counts.Unstaged)
    Write-Host ("Ahead:      {0}" -f $State.Ahead)
    Write-Host ("Behind:     {0}" -f $State.Behind)
    Write-Host ("Conflicten: {0}" -f $State.Counts.Conflicted)
    if ($State.MergeActive) { Write-Host "[!] Merge actief" -ForegroundColor Red }
    if ($State.RebaseActive) { Write-Host "[!] Rebase actief" -ForegroundColor Red }
    if ($State.IsDetached) { Write-Host "[!] Detached HEAD" -ForegroundColor Red }
    Write-Host ""
    Write-Host "========================================================" -ForegroundColor DarkCyan
    Write-Host "Kies een optie" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "1  Bekijk Git-status"
    Write-Host "2  Bekijk wijzigingen"
    Write-Host "3  Aanbevolen workflow"
    Write-Host "4  Vernieuw dashboard"
    Write-Host "5  Git uitleg"
    Write-Host "6  Repository controle"
    Write-Host "7  Wat moet ik nu doen?"
    Write-Host "0  Afsluiten"
    Write-Host "========================================================" -ForegroundColor DarkCyan
}

function Show-RawStatus {
    param([string]$WorkingDirectory, [bool]$FixtureMode)

    Write-Host ""
    Write-Host "GIT-STATUS" -ForegroundColor Cyan
    if ($FixtureMode) {
        Write-Host "Statusfixtures voeren geen Git-opdracht uit." -ForegroundColor Yellow
        return
    }
    $result = Invoke-GitReadOnly $WorkingDirectory @("status")
    $result.Output | ForEach-Object { Write-Host $_ }
}

function Show-Differences {
    param([string]$WorkingDirectory, [object]$State, [bool]$FixtureMode)

    Write-Host ""
    Write-Host "WIJZIGINGEN" -ForegroundColor Cyan
    if ($FixtureMode) {
        Write-Host "Statusfixtures voeren geen Git-opdracht uit." -ForegroundColor Yellow
        return
    }

    $unstaged = Invoke-GitReadOnly $WorkingDirectory @("--no-pager", "diff")
    if ($unstaged.Output.Count -gt 220) {
        Write-Host "De gewone diff is groot. Daarom volgt een kort overzicht." -ForegroundColor Yellow
        (Invoke-GitReadOnly $WorkingDirectory @("diff", "--stat")).Output | ForEach-Object { Write-Host $_ }
    } elseif ($unstaged.Output.Count -eq 0) {
        Write-Host "Geen unstaged inhoudelijke wijzigingen."
    } else {
        $unstaged.Output | ForEach-Object { Write-Host $_ }
    }

    if ($State.Counts.Staged -gt 0) {
        Write-Host ""
        Write-Host "STAGED WIJZIGINGEN" -ForegroundColor Cyan
        $staged = Invoke-GitReadOnly $WorkingDirectory @("--no-pager", "diff", "--staged")
        if ($staged.Output.Count -gt 220) {
            Write-Host "De staged diff is groot. Daarom volgt een kort overzicht." -ForegroundColor Yellow
            (Invoke-GitReadOnly $WorkingDirectory @("diff", "--staged", "--stat")).Output | ForEach-Object { Write-Host $_ }
        } else {
            $staged.Output | ForEach-Object { Write-Host $_ }
        }
    }
}

function Get-RecommendedWorkflow {
    param([object]$State)

    if ($State.MergeActive -or $State.RebaseActive -or $State.Counts.Conflicted -gt 0) {
        $files = if (@($State.ConflictFiles).Count) { " Conflicten: " + (@($State.ConflictFiles) -join ", ") } else { "" }
        return @("Er is een merge, rebase of conflict actief.$files", "Los dit eerst op. Voer nu geen commit of push uit.")
    }
    if ($State.IsDetached) {
        return @("Je werkt niet op een normale branch.", "Vraag eerst hulp of keer terug naar een bekende branch.")
    }

    $hasChanges = @($State.StatusLines).Count -gt 0
    if (-not $hasChanges -and $State.Ahead -gt 0) {
        return @("git push", "Stuurt de lokale commits naar de gekoppelde remote branch.")
    }
    if (-not $hasChanges -and $State.Behind -gt 0) {
        return @("git pull", "Haalt nieuwere commits van de gekoppelde branch op. Het dashboard voert dit niet uit.")
    }
    if (-not $hasChanges -and -not $State.HasUpstream -and $State.HasRemote) {
        return @("git push -u origin $($State.BranchName)", "Koppelt deze branch aan origin en stuurt de commits naar GitHub.")
    }
    if (-not $hasChanges -and -not $State.HasRemote) {
        return @("Geen Git-commando aanbevolen.", "Controleer eerst de juiste repository-URL voor een remote.")
    }
    if (-not $hasChanges) {
        return @("Geen actie nodig.", "De working tree is clean en de lokale branch loopt gelijk.")
    }
    if ($State.Counts.Staged -gt 0 -and $State.Counts.Unstaged -eq 0) {
        return @("git --no-pager diff --staged", "Controleer wat in de commit komt.", 'git commit -m "Korte omschrijving"', "Maakt een lokaal herstelpunt.", "git push", "Stuurt de commit naar GitHub.")
    }
    if ($State.Counts.Staged -gt 0 -and $State.Counts.Unstaged -gt 0) {
        return @("git status", "Laat staged en unstaged bestanden zien.", "git --no-pager diff", "Toont wat nog niet staged is.", "git --no-pager diff --staged", "Toont wat al in de commit komt.")
    }
    @("git status", "Laat zien welke bestanden zijn gewijzigd.", "git --no-pager diff", "Laat de inhoudelijke wijzigingen zien zonder pager.", "git add .", "Zet gecontroleerde wijzigingen klaar.", 'git commit -m "Korte omschrijving"', "Maakt een lokaal herstelpunt.", "git push", "Stuurt de commit naar GitHub.")
}

function Show-Workflow {
    param([object]$State)

    Write-Host ""
    Write-Host "AANBEVOLEN WORKFLOW" -ForegroundColor Cyan
    $steps = @(Get-RecommendedWorkflow $State)
    for ($index = 0; $index -lt $steps.Count; $index += 2) {
        Write-Host ""
        Write-Host $steps[$index] -ForegroundColor Yellow
        if ($index + 1 -lt $steps.Count) { Write-Host $steps[$index + 1] }
        if ($index + 2 -lt $steps.Count) { Write-Host "  |"; Write-Host "  v" }
    }
    Write-Host ""
    Write-Host "Dit is alleen advies. Er is niets uitgevoerd." -ForegroundColor DarkGray
}

function Get-SmartAdvice {
    param([object]$State)

    if (-not $State.GitAvailable) {
        return [PSCustomObject]@{ Color = "Red"; Lines = @("Git is niet beschikbaar.", "De status kan niet veilig worden gecontroleerd.", "Volgende stap:", "Vraag hulp bij de Git-installatie.") }
    }
    if (-not $State.RepositoryFound) {
        return [PSCustomObject]@{ Color = "Red"; Lines = @("Deze map is geen Git-repository.", "De Git-status kan daarom niet worden bepaald.", "Volgende stap:", "Open de juiste projectmap of vraag hulp.") }
    }
    if ($State.MergeActive -or $State.RebaseActive -or $State.Counts.Conflicted -gt 0) {
        return [PSCustomObject]@{ Color = "Red"; Lines = @("Er is een merge conflict.", "Los dit eerst op.", "Maak daarna pas een commit.") }
    }
    if ($State.IsDetached) {
        return [PSCustomObject]@{ Color = "Red"; Lines = @("Je werkt momenteel niet op een normale branch.", "Vraag eerst hulp voordat je verder gaat.") }
    }
    if ($State.Behind -gt 0) {
        return [PSCustomObject]@{ Color = "Yellow"; Lines = @("Je lokale branch loopt achter op GitHub.", "Haal eerst de laatste wijzigingen op.", "Vraag eventueel hulp wanneer je twijfelt.") }
    }

    $hasChanges = @($State.StatusLines).Count -gt 0
    if ($State.Counts.Unstaged -gt 0) {
        return [PSCustomObject]@{ Color = "Yellow"; Lines = @("Je bent nog aan het ontwikkelen.", "Er zijn wijzigingen die nog niet zijn opgeslagen.", "Aanbevolen stap:", "Bekijk eventueel de wijzigingen.", "Daarna:", "git add .", "Wanneer je tevreden bent:", 'git commit -m "Korte omschrijving"', "Daarna:", "git push") }
    }
    if ($State.Counts.Staged -gt 0) {
        return [PSCustomObject]@{ Color = "Yellow"; Lines = @("Alle wijzigingen staan klaar.", "De volgende logische stap is:", 'git commit -m "Korte omschrijving"', "Daarna:", "git push") }
    }
    if (-not $hasChanges -and $State.Ahead -gt 0) {
        return [PSCustomObject]@{ Color = "Yellow"; Lines = @("Je commit is lokaal opgeslagen.", "De volgende stap is:", "git push") }
    }
    if (-not $State.HasUpstream -and $State.HasRemote) {
        return [PSCustomObject]@{ Color = "Yellow"; Lines = @("Deze branch is nog niet gekoppeld aan GitHub.", "Daardoor is normaal pushen nog niet mogelijk.", "Volgende stap:", "Vraag hulp om de upstream veilig in te stellen.") }
    }
    if (-not $State.HasRemote) {
        return [PSCustomObject]@{ Color = "Yellow"; Lines = @("Er is geen GitHub-koppeling gevonden.", "Daardoor kan deze branch niet worden gepusht.", "Volgende stap:", "Vraag naar de juiste repository-URL.") }
    }

    [PSCustomObject]@{ Color = "Green"; Lines = @("Er zijn geen wijzigingen gevonden.", "Je repository is schoon.", "Je kunt gewoon verder ontwikkelen.") }
}

function Show-SmartAdvice {
    param([object]$State)

    $advice = Get-SmartAdvice $State
    Write-Host ""
    Write-Host "========================================" -ForegroundColor $advice.Color
    Write-Host ""
    Write-Host "AI ADVIES" -ForegroundColor $advice.Color
    Write-Host ""
    foreach ($line in $advice.Lines) {
        Write-Host $line -ForegroundColor $advice.Color
        Write-Host ""
    }
    Write-Host "========================================" -ForegroundColor $advice.Color
    Write-Host ""
    Write-Host "Dit is alleen advies. Er is geen Git-opdracht uitgevoerd." -ForegroundColor DarkGray
}

function Show-GitExplanation {
    Write-Host ""
    Write-Host "GIT UITLEG" -ForegroundColor Cyan
    $items = @(
        @("Working tree clean", "Er zijn geen losse wijzigingen om te committen."),
        @("Branch", "Een aparte werklijn in Git."),
        @("Stage", "De plek waar wijzigingen klaarstaan voor een commit."),
        @("Commit", "Een lokaal herstelpunt met een omschrijving."),
        @("Push", "Stuurt lokale commits naar de remote."),
        @("Pull", "Haalt commits van de gekoppelde remote branch op."),
        @("Repository", "De projectmap die Git volgt."),
        @("Origin", "De gebruikelijke naam van de gekoppelde remote repository."),
        @("Upstream", "De remote branch die aan je lokale branch is gekoppeld.")
    )
    foreach ($item in $items) {
        Write-Host ""
        Write-Host $item[0] -ForegroundColor Yellow
        Write-Host $item[1]
    }
}

function Get-RepositoryWarnings {
    param([string]$WorkingDirectory, [string[]]$KnownRootFiles)

    $warnings = [System.Collections.Generic.List[object]]::new()
    $files = Get-ChildItem -LiteralPath $WorkingDirectory -Recurse -File -Force -ErrorAction SilentlyContinue |
        Where-Object { $_.FullName -notlike (Join-Path $WorkingDirectory ".git\*") }

    foreach ($file in $files) {
        $relative = $file.FullName.Substring($WorkingDirectory.Length).TrimStart("\", "/")
        $name = $file.Name
        $reason = $null
        if ($name -match '(?i)\.(tmp|bak|swp|swo)$' -or $name -match '~$' -or $name -match '^(\.?#.*#|\.#[^\\/]+)$') {
            $reason = "Editor- of backupbestand"
        } elseif ($name -in @("Thumbs.db", ".DS_Store", "desktop.ini")) {
            $reason = "Systeembestand"
        } elseif ($name.Length -gt 180 -or $name -match '[\x00-\x1F\uFFFD]') {
            $reason = "Mogelijk onleesbare naam"
        } elseif ($name -match '[^\p{L}\p{Nd}\s._()\-&]') {
            $reason = "Vreemd teken in bestandsnaam"
        }
        if ($reason) { $warnings.Add([PSCustomObject]@{ Reden = $reason; Pad = $relative }) }
    }

    $known = @($KnownRootFiles | ForEach-Object { $_.ToLowerInvariant() })
    Get-ChildItem -LiteralPath $WorkingDirectory -File -Force | ForEach-Object {
        if ($known -notcontains $_.Name.ToLowerInvariant() -and
            -not ($warnings | Where-Object Pad -eq $_.Name)) {
            $warnings.Add([PSCustomObject]@{ Reden = "Onbekend bestand in projectroot"; Pad = $_.Name })
        }
    }
    @($warnings | Sort-Object Pad, Reden -Unique)
}

function Show-RepositoryCheck {
    param([string]$WorkingDirectory, [string[]]$KnownRootFiles)

    Write-Host ""
    Write-Host "REPOSITORY CONTROLE" -ForegroundColor Cyan
    $warnings = @(Get-RepositoryWarnings $WorkingDirectory $KnownRootFiles)
    if ($warnings.Count -eq 0) {
        Write-Host "Geen vreemde bestanden gevonden." -ForegroundColor Green
    } else {
        Write-Host "$($warnings.Count) aandachtspunt(en) gevonden:" -ForegroundColor Yellow
        foreach ($warning in $warnings) {
            Write-Host "- $($warning.Reden): $($warning.Pad)" -ForegroundColor Yellow
        }
    }
    Write-Host "Er is niets verwijderd of aangepast." -ForegroundColor DarkGray
}

$moduleRoot = Split-Path -Parent $PSScriptRoot
$configPath = Join-Path $moduleRoot "CONFIG.md"
if (-not (Test-Path -LiteralPath $configPath -PathType Leaf)) { Stop-Safely "CONFIG.md ontbreekt: $configPath" }
$configText = Get-Content -Raw -LiteralPath $configPath
$projectName = Get-ConfigValue $configText "projectName" "Git-project"
$defaultBranch = Get-ConfigValue $configText "defaultBranch" "main"
$configuredRoot = Get-ConfigValue $configText "repositoryRoot" "projectroot"
$language = Get-ConfigValue $configText "language" "nl-NL"
$knownRootFiles = @((Get-ConfigValue $configText "knownRootFiles" "") -split ";" | Where-Object { $_ })

if ($language -ne "nl-NL") { Write-Host "LET OP: De uitvoer blijft Nederlands." -ForegroundColor Yellow }
$modulesRoot = Split-Path -Parent $moduleRoot
$factoryRoot = Split-Path -Parent $modulesRoot
$projectRoot = Split-Path -Parent $factoryRoot
if ([string]::IsNullOrWhiteSpace($RepositoryRoot)) {
    $RepositoryRoot = if ($configuredRoot -eq "projectroot") { $projectRoot } else { Join-Path $projectRoot $configuredRoot }
}
try { $RepositoryRoot = [System.IO.Path]::GetFullPath($RepositoryRoot) } catch { Stop-Safely "Het repositorypad is ongeldig." }

$fixtureMode = -not [string]::IsNullOrWhiteSpace($StateFixturePath)
if ($fixtureMode) {
    $state = Import-StateFixture $StateFixturePath
} else {
    if (-not (Test-Path -LiteralPath $RepositoryRoot -PathType Container)) { Stop-Safely "De repositorymap bestaat niet: $RepositoryRoot" }
    if (-not (Get-Command git -ErrorAction SilentlyContinue)) { Stop-Safely "Git is niet beschikbaar. Installeer Git en start VS Code opnieuw." }
    $inside = Invoke-GitReadOnly $RepositoryRoot @("rev-parse", "--is-inside-work-tree") -AllowFailure
    if ($inside.ExitCode -ne 0 -or ($inside.Output -join "").Trim() -ne "true") { Stop-Safely "Deze map is geen Git-repository: $RepositoryRoot" }
    $state = Get-RepositoryState $RepositoryRoot $projectName $defaultBranch
}

$automated = -not [string]::IsNullOrWhiteSpace($ChoiceSequence)
$choices = [System.Collections.Generic.Queue[string]]::new()
if ($automated) { $ChoiceSequence.Split(",") | ForEach-Object { $choices.Enqueue($_.Trim()) } }

while ($true) {
    if (-not $automated) { Clear-Host }
    Show-Dashboard $state
    $choice = if ($automated) {
        if ($choices.Count -eq 0) { "0" } else { $choices.Dequeue() }
    } else {
        Read-Host "Keuze"
    }
    Write-Host "Keuze: $choice" -ForegroundColor DarkGray

    switch ($choice.ToUpperInvariant()) {
        "0" { Write-Host "Git Dashboard afgesloten. Er is niets gewijzigd." -ForegroundColor Green; exit 0 }
        "Q" { Write-Host "Git Dashboard afgesloten. Er is niets gewijzigd." -ForegroundColor Green; exit 0 }
        "1" { Show-RawStatus $RepositoryRoot $fixtureMode }
        "2" { Show-Differences $RepositoryRoot $state $fixtureMode }
        "3" { Show-Workflow $state }
        "4" {
            $state = if ($fixtureMode) { Import-StateFixture $StateFixturePath } else { Get-RepositoryState $RepositoryRoot $projectName $defaultBranch }
            Write-Host "Dashboard vernieuwd." -ForegroundColor Green
            continue
        }
        "5" { Show-GitExplanation }
        "6" { Show-RepositoryCheck $RepositoryRoot $knownRootFiles }
        "7" { Show-SmartAdvice $state }
        default { Write-Host "Onbekende keuze. Kies 0 tot en met 7, of Q." -ForegroundColor Yellow }
    }

    if (-not $automated) { $null = Read-Host "Druk op Enter om terug te gaan" }
    Write-Host ""
}
