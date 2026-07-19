# 01 — Git Assistent

## Purpose

Read a local Git repository without changing it and explain the safest next step in simple Dutch.

## When to use

Use this prompt when a user wants to understand branch, working-tree, staging, upstream or remote
state before deciding whether to commit or push.

## Variables

- `[Repository root from CONFIG.md]`
- `[Default branch from CONFIG.md]`
- `[Project name from CONFIG.md]`

## Prompt

```text
Read CONFIG.md and WORKFLOW.md completely. Inspect only the configured local Git repository.
Use read-only Git commands. Report the current branch; counts of modified, new, deleted, renamed,
staged, unstaged and conflicted files; remote and upstream state; and local ahead/behind counts
when available without fetching.

Apply the exact priority order from WORKFLOW.md. Show all visible output in simple Dutch. Recommend
at most one workflow. Explain each displayed command in one short sentence.

Never run add, commit, push, pull, branch creation, switch, checkout, restore, reset, clean, merge,
rebase or remote modification. Never invent a remote URL. In conflict, active merge/rebase or
detached HEAD state, stop ordinary commit/push advice and tell the user to resolve or ask for help.

End by confirming that no Git state or project file was changed.
```

## Example

An ordinary modified file produces a short status summary followed by `git status`, `git diff`,
`git add .`, `git commit -m "Korte omschrijving"` and the appropriate push command as advice only.

## Expected output

- A readable Dutch status summary.
- One situation-specific safe workflow or warning.
- No automatic Git or filesystem mutation.
- Honest notice when upstream counts cannot be determined from local data.
