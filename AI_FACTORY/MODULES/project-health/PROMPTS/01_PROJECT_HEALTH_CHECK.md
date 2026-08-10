# 01 — Project Health Check

## Purpose

Read-only assess the configured project foundation, documentation and module registration.

## When to use

Use before a release or after structural work when the user wants a health report without repairs.

## Variables

- `[Optional project root override]`
- `[Additional read-only checks explicitly requested]`

## Prompt

```text
Read CONFIG.md and WORKFLOW.md completely. Run the Project Health Check against
[Optional project root override]. Perform [Additional read-only checks explicitly requested] only
when they remain read-only.

Report required paths, documentation, duplicate module ids, registered HTML files that are absent
and physical HTML modules that are not registered. Respect configured exclusions. Apply the exact
status and exit-code rules from WORKFLOW.md.

Do not create, repair, register, move, delete, rename or reformat any file. Do not run Git or
network commands. End by confirming that the check changed nothing.
```

## Example

An otherwise complete project with one unregistered HTML module reports `Aandacht nodig`, names
the file and performs no repair.

## Expected output

- Individual Dutch health results.
- Exact mismatch paths or ids.
- One overall status.
- Explicit confirmation that no files were changed.
