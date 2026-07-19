# Git Assistent Workflow

**Normative:** yes  
**Workflow version:** 1.0.0

## Scope

This workflow reads local Git metadata and produces Dutch advice. It has no authority to modify
the index, working tree, branches, commits, remotes or network state.

## Inputs

- module configuration from `CONFIG.md`;
- a repository root;
- local working-tree, index, branch and remote-tracking metadata.

## Decision order

The order is normative because a warning state must not be hidden by ordinary status advice.

1. Verify PowerShell prerequisites, Git and repository membership.
2. Resolve the repository root and read the current branch.
3. Read porcelain status and count file states.
4. Detect merge, rebase, conflicts and detached HEAD.
5. Detect remotes, upstream and local ahead/behind counts without fetching.
6. Show the first matching decision below.

## Decisions

| Priority | Situation | Required result |
|---:|---|---|
| 1 | Git unavailable or no repository | Clear Dutch error, non-zero exit, no advice workflow |
| 2 | Merge, rebase or conflict | Warning, list conflicts when available, no commit/push advice |
| 3 | Detached HEAD | Explain risk and advise asking for help or returning to a known branch |
| 4 | Staged and unstaged | Explain partial staging; show status, ordinary diff and staged diff |
| 5 | Staged only | Show staged diff, commit and appropriate push advice; no repeated add |
| 6 | Unstaged or untracked | Show one status, diff, add, commit and push workflow |
| 7 | Clean and ahead | Explain that local commits still need push; show only push |
| 8 | Clean and behind | Explain that the remote-tracking branch is newer; show pull |
| 9 | Clean with no upstream | Explain missing link; show `git push -u origin <branch>` only when a remote exists |
| 10 | No remote | Ask for the correct repository URL; never invent or add one |
| 11 | Clean and synchronized | Confirm clean and synchronized state; no long command list |

When the current branch differs from `defaultBranch`, the assistant adds a neutral explanation
that a development branch is normal.

## Counting rules

- `New` includes untracked and staged-added files.
- `Modified`, `Deleted` and `Renamed` use the two porcelain status columns.
- `Staged` counts non-conflict index changes.
- `Unstaged` counts work-tree changes and untracked files.
- conflict codes are counted separately and take priority over normal advice.

## Safety contract

The production script may execute only read-only Git inspection commands. Suggested commands are
plain terminal text. It must never invoke add, commit, push, pull, switch, checkout, branch
creation, reset, clean, restore, merge, rebase or remote modification.

The workflow never gives destructive reset, clean or force-push commands as standard advice.

## Output

- project and repository path;
- current branch and development-branch note;
- counts by working-tree and staging category;
- remote/upstream state when available;
- one warning or one safe next workflow;
- explicit confirmation that the assistant changed nothing.

## Stop conditions

- missing or invalid configuration file;
- invalid repository path;
- Git unavailable;
- directory is not a repository;
- Git inspection command unexpectedly fails.

## Outside this workflow

The user remains responsible for every command they choose to run. Commit, push, pull, branch
changes, conflict resolution and release decisions are outside this module.
