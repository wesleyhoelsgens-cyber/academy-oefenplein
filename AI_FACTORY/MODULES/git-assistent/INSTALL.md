# Install Git Assistent

## Prerequisites

- Windows with `powershell.exe`;
- Git available on `PATH`;
- an existing target project;
- permission to add one VS Code task.

## Install in another project

1. Copy the complete directory `git-assistent` to:

   ```text
   AI_FACTORY/MODULES/git-assistent/
   ```

2. Update only the project-specific values in `CONFIG.md`.
3. Copy the single task object from `vscode/tasks.json.fragment` into the existing `tasks` array
   in `.vscode/tasks.json`.
4. Keep all existing tasks and confirm that the script path uses `${workspaceFolder}`.
5. Confirm that `scriptPath` points to
   `AI_FACTORY/MODULES/git-assistent/scripts/Show-GitAssistant.ps1`.
6. Start **Terminal > Run Task... > Git Assistent**.
7. Complete `CHECKLIST.md` and record actual test evidence.

## Upgrade

Read the module release notes, compare configuration keys and replace only module-owned files.
Re-merge the task fragment only when its command or arguments changed.

## Remove

1. Remove only the task with label `Git Assistent` from `.vscode/tasks.json`.
2. Remove `AI_FACTORY/MODULES/git-assistent/` after confirming no documentation links use it.
3. Do not remove or rewrite unrelated VS Code tasks.

The module installs no dependencies and creates no files outside its directory and the one merged
task object.

## Verification

- the module script exists at the configured project-relative path;
- `.vscode/tasks.json` remains valid JSON;
- exactly one task has label `Git Assistent`;
- the task runs from `${workspaceFolder}`;
- the script reports status but leaves repository state unchanged.
