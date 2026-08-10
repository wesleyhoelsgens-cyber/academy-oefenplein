# Install Project Health

## Prerequisites

- Windows with `powershell.exe`;
- an existing target project;
- permission to merge one VS Code task.

## Install

1. Copy the complete directory to `AI_FACTORY/MODULES/project-health/`.
2. Set every project-specific path in `CONFIG.md`.
3. Merge the one object from `vscode/tasks.json.fragment` into the existing `tasks` array in
   `.vscode/tasks.json`; never replace other tasks.
4. Start **Terminal > Run Task... > Project Health Check**.
5. Complete `CHECKLIST.md` and record actual evidence.

## Upgrade

Compare versions and configuration keys. Replace only module-owned files. Re-merge the task only
when its command or arguments changed.

## Remove

1. Remove only the task labelled `Project Health Check`.
2. Remove `AI_FACTORY/MODULES/project-health/` after checking that no documentation links use it.
3. Preserve every unrelated task and project file.

## Verification

- the PowerShell script parses;
- `.vscode/tasks.json` remains valid JSON;
- exactly one `Project Health Check` task exists;
- a check changes no project file or Git state.
