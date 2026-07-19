# AI Factory Module Standard

**Version:** 1.0.0  
**Status:** Normative  
**Applies to:** Every reusable module stored under `AI_FACTORY/MODULES/`

## 1. Purpose

An AI Factory module is a reusable, self-contained package for one bounded workflow or capability.
It combines instructions, configuration, prompts, validation and optional local tooling without
becoming part of the consuming project's runtime.

Every module must be understandable, installable, testable and removable independently. A module
must never require hidden knowledge from the project in which it was first created.

## 2. Required module structure

```text
AI_FACTORY/MODULES/[module-id]/
├── README.md
├── INSTALL.md
├── WORKFLOW.md
├── CHECKLIST.md
├── CONFIG.md
├── PROMPTS/
├── scripts/
├── vscode/
│   └── tasks.json.fragment
└── WESLEY/
    ├── START_HIER.md
    ├── SNELSTART.md
    ├── STAPPENPLAN.md
    └── VEELGESTELDE_VRAGEN.md
```

`PROMPTS/`, `scripts/` and `vscode/` may remain empty placeholders until the module needs those
capabilities. Do not add executable tooling merely to fill the structure.

## 3. Required documents

| File | Required content |
|---|---|
| `README.md` | Purpose, scope, contents, prerequisites, quick usage and limitations |
| `INSTALL.md` | Reversible installation, configuration, upgrade and removal steps |
| `WORKFLOW.md` | Normative states, roles, inputs, decisions, outputs and stop conditions |
| `CHECKLIST.md` | Verifiable checks for installation, use, testing and release |
| `CONFIG.md` | The only module-local source for project-specific values |
| `WESLEY/*.md` | Short user guidance in simple Dutch, without technical implementation detail |

Each normative document states its version or the module version it belongs to. Avoid copying the
same rule into multiple files. Link to the normative source instead.

## 4. Naming rules

- Module directory ids use lowercase kebab-case, for example `inbox-workflow`.
- Technical Markdown filenames use uppercase snake case only where established by this standard;
  prompt files use a two-digit prefix and uppercase snake case.
- Script names use an action-oriented name and a conventional extension, for example
  `Invoke-ModuleCheck.ps1`.
- Configuration keys use clear English camelCase names.
- User documentation in `WESLEY/` uses clear Dutch uppercase snake-case filenames.
- Paths must not differ only by letter case because deployment may be case-sensitive.
- Published module ids are stable and are not renamed without a migration plan.

## 5. Configuration

All values that vary per consuming project belong in the module's `CONFIG.md` or in a documented
config file explicitly referenced from it. Examples include project roots, catalog paths,
classification fields and filenames.

Rules:

- Do not duplicate project values in prompts, scripts or workflow documents.
- Use visible placeholders in the template; never ship example values as active configuration.
- Validate configured paths before any write.
- Keep secrets, credentials and personal data out of Markdown configuration.
- Fail clearly when a required setting is absent; do not silently invent a default.

## 6. Prompts

Every prompt is directly usable and contains these sections:

1. Purpose;
2. When to use;
3. Variables;
4. Prompt;
5. Example;
6. Expected output.

Prompts must reference `CONFIG.md` instead of embedding project-specific paths. Separate read-only
analysis from mutation. A prompt may not weaken approval, safety or testing rules from `WORKFLOW.md`.

## 7. Scripts

Scripts are optional. When present they must:

- use only documented platform capabilities or declared dependencies;
- resolve the project root safely;
- read project-specific paths from configuration;
- support non-destructive validation before mutation;
- return a non-zero exit code on failure;
- print concise, actionable messages;
- avoid Git, network or publication actions unless the module explicitly owns and gates them;
- be testable without changing production content where practical.

## 8. VS Code Tasks

A module may provide task definitions only as `vscode/tasks.json.fragment`. The fragment is an
installation source, not an automatically active workspace task.

Task rules:

- Prefix labels with a stable module name when collision is possible.
- Invoke a module script instead of duplicating workflow logic in JSON.
- Use `${workspaceFolder}` and configuration-driven paths.
- Keep read-only and mutating tasks visibly distinct.
- A mutating task must preserve every approval gate from `WORKFLOW.md`.
- Installation merges selected task objects into the project's `.vscode/tasks.json`; never replace
  unrelated project tasks.
- Document Windows, macOS and Linux support explicitly.

## 9. Installation and removal

Installation must be explicit and reversible:

1. copy the complete module directory;
2. fill only the documented configuration placeholders;
3. validate prerequisites and paths;
4. optionally merge the VS Code task fragment;
5. run installation tests;
6. record the installed module version.

`INSTALL.md` must also list every file added outside the module directory and explain how to remove
those files without deleting unrelated project content.

## 10. Project independence

A reusable module:

- contains no hardcoded Academy, customer, education or repository values outside `CONFIG.md`;
- does not depend on the runtime architecture of its source project unless that dependency is an
  explicit configurable adapter;
- does not assume a specific Git remote, branch, user, editor extension or AI model;
- uses placeholders and capability descriptions instead of copied project content;
- keeps framework governance separate from project truth;
- documents platform-specific behavior and provides a safe unsupported-platform message.

## 11. Documentation model

Technical documentation explains contracts, structure and evidence. `WESLEY/` explains what the
daily user should do next. Do not put architecture decisions, schemas or implementation details in
the WESLEY documents.

Use professional Markdown, relative links, short examples and exact filenames. Every module must
have one clear starting point for technical users (`README.md`) and one for daily users
(`WESLEY/START_HIER.md`).

## 12. Testing

Testing is proportional to the module but covers at least:

- required files and folders exist;
- configuration is complete and invalid values fail safely;
- all relative documentation links resolve;
- prompts contain all required sections and retain approval boundaries;
- scripts parse and return expected exit codes;
- read-only actions leave the workspace unchanged;
- mutating actions affect only approved targets;
- task fragments are valid for their documented merge method;
- installation and removal instructions are reproducible;
- no project-specific value exists outside configuration.

Record commands, environment, results and checks not performed. Never report an unexecuted test as
passed.

## 13. Versioning and release

Modules follow Semantic Versioning:

- `PATCH`: documentation correction or compatible internal fix;
- `MINOR`: backward-compatible capability or optional file;
- `MAJOR`: incompatible contract, configuration or workflow change.

A module is releasable only when:

- all required documents and folders conform to this standard;
- placeholders and configuration have been reviewed;
- the checklist is complete with evidence;
- install, primary workflow and removal have been tested;
- limitations and supported platforms are documented;
- release notes identify migrations and breaking changes;
- a human has made the explicit release decision.

Git commit, tag, push and publication are separate human-controlled release actions unless a future
approved module defines a stricter, explicit workflow for them.

## 14. Conformance

A module may claim **AI Factory Module Standard 1.0 compliant** only when every mandatory rule is
met. Deviations are written in the module `README.md`, include a reason and receive explicit owner
approval before release.
