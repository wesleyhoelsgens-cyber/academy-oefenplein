# Project Health Workflow

**Normative:** yes  
**Workflow version:** 1.0.0

## Scope

This workflow reads configured project paths, catalog text and module filenames. It has no
authority to create, repair, register, move, delete or reformat anything.

## Inputs

- project-specific paths from `CONFIG.md`;
- a JavaScript catalog containing `academyData`;
- physical HTML modules below the configured modules directory.

## Procedure

1. Validate configuration and project root.
2. Check launcher, catalog, AI Factory, Module Standard, modules, scripts and VS Code directories.
3. Check every configured documentation file.
4. Extract registered module ids and HTML paths from catalog objects.
5. Report duplicate ids and registered files that are absent.
6. Compare physical HTML files with registered paths, excluding configured intake directories.
7. Print one overall status and confirm that nothing changed.

## Status rules

| Status | Exit code | Meaning |
|---|---:|---|
| `Gezond` | 0 | No errors or warnings |
| `Aandacht nodig` | 1 | Only review warnings, such as an unregistered physical module |
| `Ongezond` | 2 | A required path, document, catalog contract or registered file is missing, or ids are duplicated |

## Stop conditions

- missing or invalid `CONFIG.md`;
- unsafe absolute or parent-relative configured path;
- missing or invalid project root;
- unexpected read failure.

## Output

A Dutch terminal report with individual results, details for mismatches, overall project status
and an explicit read-only confirmation.

## Actions outside this workflow

All repairs, catalog updates, file moves, Git actions, commits and pushes are outside this module.
