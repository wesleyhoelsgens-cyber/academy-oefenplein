# Project Health Checklist

**Module version:** 1.0.0

## Installation

- [ ] Every required module file and folder exists.
- [ ] All `CONFIG.md` keys resolve inside the intended project.
- [ ] Exactly one VS Code task is labelled `Project Health Check`.
- [ ] Existing VS Code tasks remain unchanged.

## Required checks

- [ ] Launcher, catalog, README, AI Factory, Module Standard, modules, scripts and `.vscode` tested.
- [ ] CHANGELOG, ROADMAP and Module Catalog Standard tested.
- [ ] Duplicate module ids tested.
- [ ] Missing registered HTML file tested.
- [ ] Unregistered physical HTML module tested.
- [ ] Configured inbox exclusion tested.

## Scenarios

- [ ] Empty project returns unhealthy.
- [ ] Complete project returns healthy.
- [ ] Missing registered module returns unhealthy.
- [ ] Missing README returns unhealthy.
- [ ] Duplicate module id returns unhealthy.

## Safety and release

- [ ] Script parses successfully.
- [ ] Checks perform filesystem reads only.
- [ ] No file is created, repaired, moved, deleted or reformatted by the checker.
- [ ] No Git or network command is invoked.
- [ ] Exit codes 0, 1 and 2 are documented and tested where applicable.
- [ ] Limitations and unexecuted checks are reported honestly.
- [ ] Human release approval is recorded separately.
