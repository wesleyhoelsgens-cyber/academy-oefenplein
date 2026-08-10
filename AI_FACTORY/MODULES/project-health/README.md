# Project Health

**Module id:** `project-health`  
**Version:** 1.0.0  
**Status:** review  
**Standard:** AI Factory Module Standard 1.0

## Purpose

Project Health is a reusable, read-only module that checks whether a project foundation,
documentation, module catalog and physical HTML modules are consistent.

## Scope

- Included: required-path checks, documentation checks, duplicate module ids, missing registered
  HTML files and unregistered physical HTML modules.
- Not included: creating, repairing, moving, deleting, registering or reformatting files.

## Contents

| Path | Purpose |
|---|---|
| `CONFIG.md` | Project-specific paths and exclusions |
| `WORKFLOW.md` | Normative checks and status rules |
| `CHECKLIST.md` | Installation, scenario and release checks |
| `INSTALL.md` | Reusable installation and removal |
| `PROMPTS/01_PROJECT_HEALTH_CHECK.md` | Directly usable read-only assignment |
| `scripts/Test-ProjectHealth.ps1` | Windows PowerShell checker |
| `vscode/tasks.json.fragment` | Reusable `Project Health Check` task |
| `WESLEY/` | Simple Dutch daily instructions |

## Prerequisites

- Windows PowerShell 5.1 or newer;
- an existing project structure configured in `CONFIG.md`.

## Quick use

Choose **Terminal > Run Task... > Project Health Check**. Exit code `0` means healthy, `1` means
warnings need review and `2` means one or more required checks failed.

## Limitations

- The catalog adapter recognizes JavaScript module objects containing both `id` and `bestand`.
- The check validates file registration, not educational content or browser behavior.
- Inbox directories configured as exclusions are not production modules.
- Version 1 supplies a Windows PowerShell implementation only.
