[CmdletBinding()]
param(
    [string]$ProjectRoot
)

$ErrorActionPreference = "Stop"
$script:SymbolOk = [char]0x2713
$script:SymbolWarning = [char]0x26A0
$script:SymbolError = [char]0x2717

function Stop-HealthCheck {
    param([string]$Message)
    Write-Host "[FOUT] $Message" -ForegroundColor Red
    exit 2
}

function Get-ConfigValue {
    param([string]$Content, [string]$Key)
    $match = [regex]::Match($Content, "(?m)^\s*" + [regex]::Escape($Key) + '\s*:\s*"([^\"]*)"\s*$')
    if (-not $match.Success) { Stop-HealthCheck "Configuratieveld ontbreekt: $Key" }
    $match.Groups[1].Value
}

function Resolve-ConfiguredPath {
    param([string]$Root, [string]$RelativePath)
    if ([IO.Path]::IsPathRooted($RelativePath) -or $RelativePath -match '(^|[\\/])\.\.([\\/]|$)') {
        Stop-HealthCheck "Onveilig relatief pad in CONFIG.md: $RelativePath"
    }
    [IO.Path]::GetFullPath((Join-Path $Root $RelativePath))
}

function Write-Result {
    param([string]$Level, [string]$Label)
    switch ($Level) {
        "ok"      { Write-Host "$script:SymbolOk $Label" -ForegroundColor Green }
        "warning" { Write-Host "$script:SymbolWarning $Label" -ForegroundColor Yellow }
        "error"   { Write-Host "$script:SymbolError $Label" -ForegroundColor Red }
    }
}

function Get-CatalogModules {
    param([string]$CatalogPath)
    $content = Get-Content -LiteralPath $CatalogPath -Raw
    $pattern = '(?s)\{[^{}]*?\bid\s*:\s*["'']([^"'']+)["''][^{}]*?\bbestand\s*:\s*["'']([^"'']+\.html)["''][^{}]*?\}'
    @([regex]::Matches($content, $pattern) | ForEach-Object {
        [PSCustomObject]@{
            Id = $_.Groups[1].Value
            File = $_.Groups[2].Value.Replace("\", "/")
        }
    })
}

$moduleRoot = Split-Path -Parent $PSScriptRoot
$configPath = Join-Path $moduleRoot "CONFIG.md"
if (-not (Test-Path -LiteralPath $configPath -PathType Leaf)) {
    Stop-HealthCheck "CONFIG.md ontbreekt bij de Project Health-module."
}

$config = Get-Content -LiteralPath $configPath -Raw
$configuredRoot = Get-ConfigValue $config "projectRoot"
if ([string]::IsNullOrWhiteSpace($ProjectRoot)) {
    if ($configuredRoot -eq "projectroot") {
        $ProjectRoot = [IO.Path]::GetFullPath((Join-Path $moduleRoot "..\..\.."))
    } else {
        $ProjectRoot = Resolve-ConfiguredPath ([IO.Path]::GetFullPath((Join-Path $moduleRoot "..\..\.."))) $configuredRoot
    }
} else {
    $ProjectRoot = [IO.Path]::GetFullPath($ProjectRoot)
}

if (-not (Test-Path -LiteralPath $ProjectRoot -PathType Container)) {
    Stop-HealthCheck "Projectmap bestaat niet: $ProjectRoot"
}

$launcherFile = Get-ConfigValue $config "launcherFile"
$catalogFile = Get-ConfigValue $config "catalogFile"
$modulesDirectory = Get-ConfigValue $config "modulesDirectory"
$scriptsDirectory = Get-ConfigValue $config "scriptsDirectory"
$vscodeDirectory = Get-ConfigValue $config "vscodeDirectory"
$aiFactoryDirectory = Get-ConfigValue $config "aiFactoryDirectory"
$moduleStandardFile = Get-ConfigValue $config "moduleStandardFile"
$documentationFiles = (Get-ConfigValue $config "documentationFiles").Split(";", [StringSplitOptions]::RemoveEmptyEntries)
$excludedModuleDirectories = (Get-ConfigValue $config "excludedModuleDirectories").Split(";", [StringSplitOptions]::RemoveEmptyEntries)

$paths = @{
    Launcher = Resolve-ConfiguredPath $ProjectRoot $launcherFile
    Catalog = Resolve-ConfiguredPath $ProjectRoot $catalogFile
    Modules = Resolve-ConfiguredPath $ProjectRoot $modulesDirectory
    Scripts = Resolve-ConfiguredPath $ProjectRoot $scriptsDirectory
    VSCode = Resolve-ConfiguredPath $ProjectRoot $vscodeDirectory
    AIFactory = Resolve-ConfiguredPath $ProjectRoot $aiFactoryDirectory
    ModuleStandard = Resolve-ConfiguredPath $ProjectRoot $moduleStandardFile
}

$errorCount = 0
$warningCount = 0

Write-Host "==============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "AI FACTORY PROJECT HEALTH" -ForegroundColor Cyan
Write-Host ""
Write-Host "==============================================" -ForegroundColor Cyan
Write-Host ""

$foundationChecks = @(
    @{ Label = "Launcher"; Path = $paths.Launcher; Type = "Leaf" },
    @{ Label = "app.js"; Path = $paths.Catalog; Type = "Leaf" },
    @{ Label = "AI Factory"; Path = $paths.AIFactory; Type = "Container" },
    @{ Label = "MODULE_STANDARD"; Path = $paths.ModuleStandard; Type = "Leaf" },
    @{ Label = "Modules-map"; Path = $paths.Modules; Type = "Container" },
    @{ Label = "Scripts-map"; Path = $paths.Scripts; Type = "Container" },
    @{ Label = ".vscode"; Path = $paths.VSCode; Type = "Container" }
)

foreach ($check in $foundationChecks) {
    if (Test-Path -LiteralPath $check.Path -PathType $check.Type) {
        Write-Result "ok" $check.Label
    } else {
        Write-Result "error" "$($check.Label) ontbreekt"
        $errorCount++
    }
}

$missingDocumentation = @()
foreach ($document in $documentationFiles) {
    $documentPath = Resolve-ConfiguredPath $ProjectRoot $document
    if (-not (Test-Path -LiteralPath $documentPath -PathType Leaf)) { $missingDocumentation += $document }
}
if ($missingDocumentation.Count -eq 0) {
    Write-Result "ok" "Documentatie"
} else {
    Write-Result "error" ("Documentatie ontbreekt: " + ($missingDocumentation -join ", "))
    $errorCount += $missingDocumentation.Count
}

$catalogModules = @()
if (Test-Path -LiteralPath $paths.Catalog -PathType Leaf) {
    $catalogText = Get-Content -LiteralPath $paths.Catalog -Raw
    if ($catalogText -match '\bacademyData\b') {
        Write-Result "ok" "Catalogus aanwezig"
        $catalogModules = @(Get-CatalogModules $paths.Catalog)
    } else {
        Write-Result "error" "Catalogusmarkering academyData ontbreekt in $catalogFile"
        $errorCount++
    }
} else {
    Write-Result "error" "Catalogus ontbreekt"
    $errorCount++
}

$duplicateIds = @($catalogModules | Group-Object Id | Where-Object Count -gt 1)
if ($duplicateIds.Count -eq 0) {
    Write-Result "ok" "Geen dubbele module-ID's"
} else {
    Write-Result "error" ("Dubbele module-ID's: " + (($duplicateIds | ForEach-Object Name) -join ", "))
    $errorCount += $duplicateIds.Count
}

$missingRegisteredFiles = @()
foreach ($module in $catalogModules) {
    $registeredPath = Resolve-ConfiguredPath $ProjectRoot $module.File
    if (-not (Test-Path -LiteralPath $registeredPath -PathType Leaf)) {
        $missingRegisteredFiles += "$($module.Id) -> $($module.File)"
    }
}
if ($missingRegisteredFiles.Count -eq 0) {
    Write-Result "ok" "Geen ontbrekende geregistreerde HTML-bestanden"
} else {
    Write-Result "error" ("Geregistreerde modules ontbreken: " + ($missingRegisteredFiles -join "; "))
    $errorCount += $missingRegisteredFiles.Count
}

$physicalModuleFiles = @()
if (Test-Path -LiteralPath $paths.Modules -PathType Container) {
    $physicalModuleFiles = @(Get-ChildItem -LiteralPath $paths.Modules -Recurse -File -Filter "*.html" -ErrorAction SilentlyContinue | Where-Object {
        $relativeToModules = $_.FullName.Substring($paths.Modules.Length).TrimStart("\", "/")
        $firstDirectory = ($relativeToModules -split '[\\/]')[0]
        $firstDirectory -notin $excludedModuleDirectories
    } | ForEach-Object {
        $_.FullName.Substring($ProjectRoot.Length).TrimStart("\", "/").Replace("\", "/")
    })
}

$registeredPaths = @($catalogModules | ForEach-Object { $_.File.ToLowerInvariant() } | Select-Object -Unique)
$unregisteredFiles = @($physicalModuleFiles | Where-Object { $_.ToLowerInvariant() -notin $registeredPaths })
if ($unregisteredFiles.Count -eq 0) {
    Write-Result "ok" "Alle fysieke modules zijn geregistreerd"
} else {
    Write-Result "warning" ("$($unregisteredFiles.Count) module(s) ontbreken in catalogus")
    foreach ($file in $unregisteredFiles) { Write-Host "  - $file" -ForegroundColor Yellow }
    $warningCount += $unregisteredFiles.Count
}

Write-Host ""
Write-Host "==============================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "PROJECT STATUS" -ForegroundColor Cyan
Write-Host ""
if ($errorCount -gt 0) {
    Write-Host "Ongezond - $errorCount fout(en), $warningCount waarschuwing(en)" -ForegroundColor Red
    $exitCode = 2
} elseif ($warningCount -gt 0) {
    Write-Host "Aandacht nodig - $warningCount waarschuwing(en)" -ForegroundColor Yellow
    $exitCode = 1
} else {
    Write-Host "Gezond" -ForegroundColor Green
    $exitCode = 0
}
Write-Host ""
Write-Host "Alle controles waren read-only. Er is niets gewijzigd." -ForegroundColor DarkGray
Write-Host "==============================================" -ForegroundColor Cyan
exit $exitCode
