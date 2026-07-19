# Install [Module Name]

## Before installation

- Confirm the target project: `[project]`.
- Confirm the module version: `[version]`.
- Read `CONFIG.md` and identify every unresolved placeholder.

## Install

1. Copy this complete directory to `AI_FACTORY/MODULES/[module-id]/`.
2. Replace only the placeholders documented in `CONFIG.md`.
3. Validate all configured paths before creating or changing files.
4. If tasks are needed, merge selected objects from `vscode/tasks.json.fragment` into the existing
   `.vscode/tasks.json`. Do not overwrite existing tasks.
5. Run the installation section of `CHECKLIST.md`.

## Upgrade

`[Describe compatible upgrade steps and configuration migrations.]`

## Remove

1. Remove only files listed here: `[exact installed files outside the module directory]`.
2. Remove only task objects installed for `[module-id]`.
3. Remove `AI_FACTORY/MODULES/[module-id]/` after confirming no project workflow still uses it.

## Verification

`[List commands or manual checks that prove installation and removal work.]`
