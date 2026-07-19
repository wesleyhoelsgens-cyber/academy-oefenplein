# Git Assistent Checklist

**Module version:** 1.0.0

## Module and installation

- [ ] All required module files and WESLEY documents exist.
- [ ] `CONFIG.md` contains all required project values.
- [ ] `scripts/Show-GitAssistant.ps1` exists and parses successfully.
- [ ] `vscode/tasks.json.fragment` is valid under the documented fragment convention.
- [ ] Exactly one workspace task is visible as `Git Assistent`.
- [ ] Existing VS Code tasks remain unchanged.

## Required scenarios

- [ ] Git availability tested.
- [ ] Valid Git repository tested.
- [ ] Clean repository tested.
- [ ] Modified file tested.
- [ ] Untracked file tested.
- [ ] Staged change tested.
- [ ] Staged and unstaged changes together tested.
- [ ] Local commit ahead of upstream tested.
- [ ] Branch without upstream tested.
- [ ] Development branch with upstream tested.
- [ ] Development branch without upstream tested.
- [ ] Repository without remote tested where safely practical.
- [ ] Invalid or missing repository tested.
- [ ] Conflict warning tested or safely simulated.
- [ ] Detached HEAD tested or safely simulated.
- [ ] Active merge or rebase tested or safely simulated when practical.

## Output quality

- [ ] Visible output is simple Dutch.
- [ ] Counts for modified, new, deleted and renamed files are correct.
- [ ] Staged and unstaged states are clearly separated.
- [ ] At most one recommended workflow is shown.
- [ ] No remote URL is invented.
- [ ] Development branches are explained without unnecessary alarm.

## Safety

- [ ] Production script invokes only read-only Git inspection commands.
- [ ] Script performs no add, commit, push, pull, branch, switch, merge, rebase or reset action.
- [ ] Conflict, merge, rebase and detached HEAD stop ordinary commit/push advice.
- [ ] Test scenarios use isolated temporary repositories where project changes would be unsafe.
- [ ] The real project remains unchanged by scenario tests.

## Release

- [ ] Documentation links resolve.
- [ ] Installation and removal instructions are reproducible.
- [ ] Known limitations and unexecuted tests are reported.
- [ ] Human release approval is recorded.
