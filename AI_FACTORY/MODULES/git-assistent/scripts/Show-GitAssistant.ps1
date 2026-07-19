[CmdletBinding()]
param(
    [string]$RepositoryRoot
)

$ErrorActionPreference = "Stop"

function Write-Section {
    param([string]$Title)

    Write-Host ""
    Write-Host "${Title}:" -ForegroundColor Cyan
}

function Stop-Safely {
    param([string]$Message)

    Write-Host ""
    Write-Host "FOUT: $Message" -ForegroundColor Red
    Write-Host "Er is niets gewijzigd." -ForegroundColor DarkGray
    exit 1
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

    return [PSCustomObject]@{
        ExitCode = $exitCode
        Output = $output
    }
}

function Get-ConfigValue {
    param(
        [string]$Text,
        [string]$Key,
        [string]$Fallback = ""
    )

    $pattern = '(?m)^{0}:\s*"([^"]*)"\s*$' -f [regex]::Escape($Key)
    $match = [regex]::Match($Text, $pattern)
    if ($match.Success) { return $match.Groups[1].Value }
    return $Fallback
}

function Show-Command {
    param(
        [string]$Command,
        [string]$Explanation
    )

    Write-Host $Command -ForegroundColor Yellow
    Write-Host $Explanation
    Write-Host ""
}

$moduleRoot = Split-Path -Parent $PSScriptRoot
$configPath = Join-Path $moduleRoot "CONFIG.md"
if (-not (Test-Path -LiteralPath $configPath -PathType Leaf)) {
    Stop-Safely "CONFIG.md ontbreekt: $configPath"
}

$configText = Get-Content -Raw -LiteralPath $configPath
$projectName = Get-ConfigValue -Text $configText -Key "projectName" -Fallback "Git-project"
$defaultBranch = Get-ConfigValue -Text $configText -Key "defaultBranch" -Fallback "main"
$configuredRoot = Get-ConfigValue -Text $configText -Key "repositoryRoot" -Fallback "projectroot"
$language = Get-ConfigValue -Text $configText -Key "language" -Fallback "nl-NL"

if ($language -ne "nl-NL") {
    Write-Host "LET OP: Taal '$language' wordt nog niet ondersteund. De uitvoer blijft Nederlands." -ForegroundColor Yellow
}

$modulesRoot = Split-Path -Parent $moduleRoot
$factoryRoot = Split-Path -Parent $modulesRoot
$projectRoot = Split-Path -Parent $factoryRoot

if ([string]::IsNullOrWhiteSpace($RepositoryRoot)) {
    if ($configuredRoot -eq "projectroot") {
        $RepositoryRoot = $projectRoot
    } else {
        $RepositoryRoot = Join-Path $projectRoot $configuredRoot
    }
}

try {
    $RepositoryRoot = [System.IO.Path]::GetFullPath($RepositoryRoot)
} catch {
    Stop-Safely "Het repositorypad is ongeldig."
}

if (-not (Test-Path -LiteralPath $RepositoryRoot -PathType Container)) {
    Stop-Safely "De repositorymap bestaat niet: $RepositoryRoot"
}

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Stop-Safely "Git is niet beschikbaar. Installeer Git en start VS Code opnieuw."
}

$insideRepository = Invoke-GitReadOnly -WorkingDirectory $RepositoryRoot -Arguments @("rev-parse", "--is-inside-work-tree") -AllowFailure
if ($insideRepository.ExitCode -ne 0 -or ($insideRepository.Output -join "").Trim() -ne "true") {
    Stop-Safely "Deze map is geen Git-repository: $RepositoryRoot"
}

$repositoryResult = Invoke-GitReadOnly -WorkingDirectory $RepositoryRoot -Arguments @("rev-parse", "--show-toplevel")
$repositoryPath = ($repositoryResult.Output | Select-Object -First 1).Trim()
$gitDirectoryResult = Invoke-GitReadOnly -WorkingDirectory $RepositoryRoot -Arguments @("rev-parse", "--absolute-git-dir")
$gitDirectory = ($gitDirectoryResult.Output | Select-Object -First 1).Trim()

$branchResult = Invoke-GitReadOnly -WorkingDirectory $RepositoryRoot -Arguments @("symbolic-ref", "--quiet", "--short", "HEAD") -AllowFailure
$isDetached = $branchResult.ExitCode -ne 0
$branchName = if ($isDetached) { "Geen normale branch (detached HEAD)" } else { ($branchResult.Output | Select-Object -First 1).Trim() }

$statusResult = Invoke-GitReadOnly -WorkingDirectory $RepositoryRoot -Arguments @("status", "--porcelain=v1", "--untracked-files=all")
$statusLines = @($statusResult.Output | Where-Object { $_ -ne "" })

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

foreach ($line in $statusLines) {
    if ($line.Length -lt 3) { continue }
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

$mergeActive = Test-Path -LiteralPath (Join-Path $gitDirectory "MERGE_HEAD")
$rebaseActive = (Test-Path -LiteralPath (Join-Path $gitDirectory "rebase-merge")) -or
    (Test-Path -LiteralPath (Join-Path $gitDirectory "rebase-apply"))

$remoteResult = Invoke-GitReadOnly -WorkingDirectory $RepositoryRoot -Arguments @("remote") -AllowFailure
$remotes = @($remoteResult.Output | Where-Object { -not [string]::IsNullOrWhiteSpace($_) })
$hasRemote = $remotes.Count -gt 0

$hasUpstream = $false
$upstreamName = ""
$ahead = 0
$behind = 0
if (-not $isDetached) {
    $upstreamResult = Invoke-GitReadOnly -WorkingDirectory $RepositoryRoot -Arguments @("rev-parse", "--abbrev-ref", "--symbolic-full-name", "@{upstream}") -AllowFailure
    if ($upstreamResult.ExitCode -eq 0) {
        $hasUpstream = $true
        $upstreamName = ($upstreamResult.Output | Select-Object -First 1).Trim()
        $distanceResult = Invoke-GitReadOnly -WorkingDirectory $RepositoryRoot -Arguments @("rev-list", "--left-right", "--count", "HEAD...@{upstream}") -AllowFailure
        if ($distanceResult.ExitCode -eq 0) {
            $distance = (($distanceResult.Output -join " ").Trim() -split "\s+")
            if ($distance.Count -ge 2) {
                $ahead = [int]$distance[0]
                $behind = [int]$distance[1]
            }
        }
    }
}

Write-Host "========================================" -ForegroundColor DarkCyan
Write-Host "AI FACTORY - GIT ASSISTENT" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor DarkCyan

Write-Section "Project"
Write-Host $projectName
Write-Host $repositoryPath -ForegroundColor DarkGray

Write-Section "Huidige branch"
Write-Host $branchName
if (-not $isDetached -and $branchName -ne $defaultBranch) {
    Write-Host "Dit is waarschijnlijk een aparte ontwikkelbranch."
    Write-Host "Dat is normaal tijdens het bouwen of testen van een wijziging."
}

Write-Section "Status"
Write-Host "Gewijzigd:  $($counts.Modified)"
Write-Host "Nieuw:      $($counts.New)"
Write-Host "Verwijderd: $($counts.Deleted)"
Write-Host "Hernoemd:   $($counts.Renamed)"
Write-Host "Staged:     $($counts.Staged)"
Write-Host "Unstaged:   $($counts.Unstaged)"
Write-Host "Conflicten: $($counts.Conflicted)"

if ($mergeActive -or $rebaseActive -or $counts.Conflicted -gt 0 -or $isDetached) {
    Write-Section "Waarschuwing"

    if ($mergeActive) {
        Write-Host "Er is een merge bezig." -ForegroundColor Red
        Write-Host "Rond deze eerst zorgvuldig af voordat je commit of pusht."
    }
    if ($rebaseActive) {
        Write-Host "Er is een rebase bezig." -ForegroundColor Red
        Write-Host "Rond deze eerst zorgvuldig af voordat je commit of pusht."
    }
    if ($counts.Conflicted -gt 0) {
        Write-Host "Er is een merge conflict." -ForegroundColor Red
        Write-Host "Los dit eerst op voordat je commit of pusht."
        Write-Host "Conflicterende bestanden:"
        $conflictFiles | ForEach-Object { Write-Host "- $_" }
    }
    if ($isDetached) {
        Write-Host "Je werkt momenteel niet op een normale branch." -ForegroundColor Red
        Write-Host "Committen kan in deze situatie verwarrend worden."
        Write-Host "Vraag eerst hulp of keer terug naar een bekende branch."
    }

    Write-Section "Advies"
    Write-Host "Voer nu geen commit of push uit. Los eerst de waarschuwing op."
    Write-Host "De Git Assistent heeft niets gewijzigd." -ForegroundColor DarkGray
    exit 0
}

if (-not $hasRemote) {
    Write-Section "Remote"
    Write-Host "Deze repository heeft nog geen gekoppelde GitHub-remote." -ForegroundColor Yellow
    Write-Host "Je hebt eerst de juiste repository-URL nodig."
}

if ($hasRemote -and -not $hasUpstream) {
    Write-Section "Upstream"
    Write-Host "Deze branch is nog niet gekoppeld aan een branch op GitHub." -ForegroundColor Yellow
}

if ($hasUpstream) {
    Write-Section "Koppeling"
    Write-Host "Upstream: $upstreamName"
    Write-Host "Lokale commits voor: $ahead"
    Write-Host "Lokale commits achter: $behind"
}

$hasChanges = $statusLines.Count -gt 0
Write-Section "Advies"

if (-not $hasChanges) {
    Write-Host "Alles is lokaal opgeslagen in Git."
    Write-Host "Er zijn geen niet-gecommitte wijzigingen."

    if ($hasUpstream -and $ahead -gt 0) {
        Write-Host "Er staan $ahead lokale commit(s) klaar die nog niet naar GitHub zijn gestuurd."
        Write-Host ""
        Show-Command -Command "git push" -Explanation "Stuurt de lokale commits naar de gekoppelde remote branch."
    } elseif ($hasUpstream -and $behind -gt 0) {
        Write-Host "De gekoppelde remote branch bevat $behind nieuwere commit(s)."
        Write-Host ""
        Show-Command -Command "git pull" -Explanation "Haalt de nieuwste commits van de gekoppelde branch op."
    } elseif ($hasUpstream) {
        Write-Host "Je lokale repository loopt gelijk met de gekoppelde remote branch."
        Write-Host "Geen actie nodig. Je kunt verder ontwikkelen."
    } elseif ($hasRemote) {
        Show-Command -Command "git push -u origin $branchName" -Explanation "Koppelt deze branch aan origin en stuurt de commits naar GitHub."
    } else {
        Write-Host "Koppel pas een remote nadat je de juiste repository-URL hebt gecontroleerd."
    }
} elseif ($counts.Staged -gt 0 -and $counts.Unstaged -eq 0) {
    Write-Host "Deze wijzigingen staan klaar voor een commit."
    Write-Host ""
    Show-Command -Command "git diff --staged" -Explanation "Laat zien wat in de volgende commit komt."
    Show-Command -Command 'git commit -m "Korte omschrijving"' -Explanation "Maakt een lokaal herstelpunt met de klaargezette wijzigingen."
    if ($hasRemote) {
        $pushCommand = if ($hasUpstream) { "git push" } else { "git push -u origin $branchName" }
        Show-Command -Command $pushCommand -Explanation "Stuurt de commit naar GitHub."
    }
} elseif ($counts.Staged -gt 0 -and $counts.Unstaged -gt 0) {
    Write-Host "Een deel staat klaar voor een commit, maar nog niet alles."
    Write-Host "Controleer eerst beide groepen."
    Write-Host ""
    Show-Command -Command "git status" -Explanation "Laat zien wat staged en nog niet staged is."
    Show-Command -Command "git diff" -Explanation "Laat de wijzigingen zien die nog niet klaarstaan."
    Show-Command -Command "git diff --staged" -Explanation "Laat zien wat al in de volgende commit komt."
} else {
    Write-Host "Controleer eerst welke wijzigingen zijn gemaakt."
    Write-Host ""
    Show-Command -Command "git status" -Explanation "Laat zien welke bestanden gewijzigd, nieuw, verwijderd of hernoemd zijn."
    Show-Command -Command "git diff" -Explanation "Laat de inhoudelijke wijzigingen zien."
    Show-Command -Command "git add ." -Explanation "Zet de gecontroleerde wijzigingen klaar voor de commit."
    Show-Command -Command 'git commit -m "Korte omschrijving"' -Explanation "Maakt een lokaal herstelpunt."
    if ($hasRemote) {
        $pushCommand = if ($hasUpstream) { "git push" } else { "git push -u origin $branchName" }
        Show-Command -Command $pushCommand -Explanation "Stuurt de commit naar GitHub."
    }
}

Write-Host "De Git Assistent heeft niets gewijzigd." -ForegroundColor DarkGray
