# Git Assistent

**Module id:** `git-assistent`  
**Version:** 1.2.0  
**Status:** review  
**Standard:** AI Factory Module Standard 1.0

## Purpose

Git Assistent is a reusable, read-only AI Factory module with an interactive Dutch Git Dashboard.
It keeps running until the user chooses `0` or `Q`, explains the current state and recommends at
most one safe next workflow. It is designed for users who are still learning Git.

## Capabilities

- verifies that Git and a repository are available;
- reports the current branch and whether it is the configured default branch;
- counts modified, new, deleted, renamed, staged, unstaged and conflicted files;
- detects detached HEAD, merge and rebase states;
- detects remotes, missing upstream, ahead and behind counts when locally available;
- prints short explanations for recommended commands;
- offers status, differences, workflow advice, refresh, Git explanations and a repository scan;
- warns about temporary, backup, system, unusual and unknown root files;
- turns the current state into one short, color-coded answer to “Wat moet ik nu doen?”;
- changes no Git state and writes no project files.

## Scope and safety

The production script only invokes read-only Git commands: `rev-parse`, `symbolic-ref`, `status`,
`remote`, `rev-list`, `git --no-pager diff` and, for large output, `git diff --stat`. Commands such
as add, commit, push, pull and switch are displayed only as advice and are never executed.

Git inspection runs with `GIT_OPTIONAL_LOCKS=0` so status checks do not perform optional index
refresh writes.

The module never creates or switches a branch, stages files, commits, pushes, pulls, merges,
rebases, resets, restores or deletes files. Conflict and detached-HEAD states stop the normal
advice flow.

## Structure

| Path | Purpose |
|---|---|
| `CONFIG.md` | Project-specific values |
| `INSTALL.md` | Reusable installation and removal instructions |
| `WORKFLOW.md` | Normative decision logic |
| `CHECKLIST.md` | Installation, scenario and release checks |
| `PROMPTS/01_GIT_ASSISTENT.md` | Functional AI assignment |
| `scripts/Show-GitAssistant.ps1` | Read-only PowerShell implementation |
| `vscode/tasks.json.fragment` | One reusable `Git Assistent` task object |
| `WESLEY/` | Simple daily user guidance in Dutch |

## Installation

Follow [INSTALL.md](INSTALL.md). Copy the complete module, fill [CONFIG.md](CONFIG.md), merge the
single task object without replacing existing tasks and run [CHECKLIST.md](CHECKLIST.md).

## Configuration

All project values live in [CONFIG.md](CONFIG.md). `repositoryRoot: "projectroot"` resolves from
the module location, not from the current shell directory. The script supports an optional
`-RepositoryRoot` parameter for isolated validation and diagnostics.

The Markdown configuration reader intentionally supports only simple quoted, one-line YAML
values. The project name falls back to `Git-project`; invalid repository paths stop safely.

## Use

In VS Code choose **Terminal > Run Task... > Git Assistent**. Choose a menu option and decide
yourself whether to run displayed advice. Choose `0` or `Q` to close the dashboard.

| Choice | Function |
|---:|---|
| 1 | Show the full Git status |
| 2 | Show unstaged and staged differences without a pager |
| 3 | Show one recommended workflow as text only |
| 4 | Refresh all dashboard data |
| 5 | Explain common Git terms |
| 6 | Scan the repository for suspicious files and unknown root files |
| 7 | Show one situation-specific next-step advice in simple Dutch |
| 0 / Q | Exit without changes |

Direct PowerShell use:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File "AI_FACTORY/MODULES/git-assistent/scripts/Show-GitAssistant.ps1"
```

## Limitations

- Version 1 supports Windows PowerShell and Dutch output.
- Ahead/behind uses existing local remote-tracking data and performs no network fetch; counts may
  be stale until the user updates Git separately.
- The assistant does not inspect whether a commit message is meaningful.
- It does not resolve conflicts or decide which files belong in a commit.
- It assumes the remote name `origin` only when suggesting the first upstream command.
- The repository scan is heuristic: review every warning before removing or ignoring a file.
