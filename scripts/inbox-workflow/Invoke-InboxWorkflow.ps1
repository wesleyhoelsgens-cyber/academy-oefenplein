[CmdletBinding()]
param(
    [Parameter(Mandatory = $true)]
    [ValidateSet("Analyze", "Register", "Status")]
    [string]$Mode
)

$ErrorActionPreference = "Stop"

function Write-Heading {
    param([string]$Text)

    Write-Host ""
    Write-Host $Text -ForegroundColor Cyan
    Write-Host ("-" * $Text.Length) -ForegroundColor DarkCyan
}

function Stop-WithError {
    param([string]$Message)

    Write-Host "FOUT: $Message" -ForegroundColor Red
    exit 1
}

$projectRoot = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot "..\.."))
$workflowPath = Join-Path $projectRoot "AI_FACTORY\MODULES\inbox-workflow"
$configPath = Join-Path $workflowPath "CONFIG.md"
$analysisPrompt = Join-Path $workflowPath "PROMPTS\01_ANALYSE_INBOX.md"
$registrationPrompt = Join-Path $workflowPath "PROMPTS\02_REGISTREER_MODULES.md"
$approvalPrompt = Join-Path $workflowPath "PROMPTS\03_GOEDKEURING.md"
$reportsPath = Join-Path $workflowPath "REPORTS"

if (-not (Test-Path -LiteralPath $configPath -PathType Leaf)) {
    Stop-WithError "De workflowconfiguratie ontbreekt: $configPath"
}

$configText = Get-Content -Raw -LiteralPath $configPath
$inboxMatch = [regex]::Match($configText, '(?m)^inboxPath:\s*"([^"]+)"\s*$')
if (-not $inboxMatch.Success) {
    Stop-WithError "CONFIG.md bevat geen geldige inboxPath-instelling."
}

$configuredInboxPath = $inboxMatch.Groups[1].Value.Replace("/", [System.IO.Path]::DirectorySeparatorChar)
$inboxPath = [System.IO.Path]::GetFullPath((Join-Path $projectRoot $configuredInboxPath))
if (-not $inboxPath.StartsWith($projectRoot + [System.IO.Path]::DirectorySeparatorChar, [System.StringComparison]::OrdinalIgnoreCase)) {
    Stop-WithError "De geconfigureerde inbox valt buiten de projectroot: $inboxPath"
}

Write-Heading "Academy Inbox Workflow"
Write-Host "Modus:       $Mode"
Write-Host "Projectroot: $projectRoot"

if (-not (Test-Path -LiteralPath $inboxPath -PathType Container)) {
    Stop-WithError "De inboxmap ontbreekt: $inboxPath"
}

$inboxFiles = @(
    Get-ChildItem -LiteralPath $inboxPath -Recurse -File -Filter "*.html" |
        Sort-Object FullName
)

Write-Host "Inbox:       $inboxPath"
Write-Host "HTML-bestanden: $($inboxFiles.Count)"

switch ($Mode) {
    "Analyze" {
        if (-not (Test-Path -LiteralPath $analysisPrompt -PathType Leaf)) {
            Stop-WithError "De analyseprompt ontbreekt: $analysisPrompt"
        }

        Write-Heading "Volgende handmatige stap in Codex"
        Write-Host "Prompt: 01_ANALYSE_INBOX.md" -ForegroundColor Green
        Write-Host "Pad:    $analysisPrompt"

        if ($inboxFiles.Count -eq 0) {
            Write-Host "LET OP: De inbox bevat geen HTML-modules om te analyseren." -ForegroundColor Yellow
        } else {
            Write-Host "Open de prompt in VS Code en laat Codex de read-only analyse uitvoeren."
        }

        Write-Host "Deze taak heeft geen bestanden gewijzigd." -ForegroundColor DarkGray
    }

    "Register" {
        foreach ($prompt in @($approvalPrompt, $registrationPrompt)) {
            if (-not (Test-Path -LiteralPath $prompt -PathType Leaf)) {
                Stop-WithError "Een vereiste workflowprompt ontbreekt: $prompt"
            }
        }

        Write-Heading "Goedkeuring en registratie in Codex"
        Write-Host "Actuele gebruikersprompt: 03_GOEDKEURING.md" -ForegroundColor Green
        Write-Host "Pad:                   $approvalPrompt"
        Write-Host "Interne uitvoeringsprompt: 02_REGISTREER_MODULES.md"
        Write-Host "Pad:                       $registrationPrompt"
        Write-Host ""
        Write-Host "Deze VS Code Task registreert zelf niets." -ForegroundColor Yellow
        Write-Host "Gebruik in dezelfde Codex-conversatie het actieve registratierapport en antwoord 'Ja'."
        Write-Host "Codex controleert dan opnieuw de hash en voert het goedgekeurde plan intern uit."
        Write-Host "Zonder actief rapport en expliciet 'Ja' mogen geen bestanden worden gewijzigd."
    }

    "Status" {
        Write-Heading "Inboxbestanden"

        if ($inboxFiles.Count -eq 0) {
            Write-Host "Geen HTML-bestanden aanwezig." -ForegroundColor Yellow
        } else {
            $inboxFiles | ForEach-Object {
                [PSCustomObject]@{
                    Bestandsnaam = $_.Name
                    GrootteBytes = $_.Length
                    LaatstGewijzigd = $_.LastWriteTime.ToString("yyyy-MM-dd HH:mm:ss")
                }
            } | Format-Table -AutoSize
        }

        Write-Heading "Registratierapporten"
        $reports = if (Test-Path -LiteralPath $reportsPath -PathType Container) {
            @(Get-ChildItem -LiteralPath $reportsPath -File -Filter "*.md" | Sort-Object LastWriteTime -Descending)
        } else {
            @()
        }

        if ($reports.Count -eq 0) {
            Write-Host "Rapport aanwezig: Nee" -ForegroundColor Yellow
        } else {
            Write-Host "Rapport aanwezig: Ja ($($reports.Count))" -ForegroundColor Green
            $reports | ForEach-Object {
                $content = Get-Content -Raw -LiteralPath $_.FullName
                $kind = if ($content -match "(?im)^\|\s*Status\s*\|\s*geregistreerd\s*\|") {
                    "Registratierapport"
                } elseif ($content -match "(?im)wacht op goedkeuring|registratievoorstel|status\s*\|\s*analyse") {
                    "Analyserapport"
                } else {
                    "Rapport (status onbekend)"
                }

                [PSCustomObject]@{
                    Type = $kind
                    Bestandsnaam = $_.Name
                    GrootteBytes = $_.Length
                    LaatstGewijzigd = $_.LastWriteTime.ToString("yyyy-MM-dd HH:mm:ss")
                }
            } | Format-Table -AutoSize
        }

        Write-Host "Deze statuscontrole is volledig read-only." -ForegroundColor DarkGray
    }
}
