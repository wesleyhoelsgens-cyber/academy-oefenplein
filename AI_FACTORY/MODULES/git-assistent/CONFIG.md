# Git Assistent Configuration

**Configuration version:** 1.0.0

This is the only module-local source for values that differ between projects.

```yaml
projectName: "Academy Oefenplein"
defaultBranch: "main"
repositoryRoot: "projectroot"
scriptPath: "AI_FACTORY/MODULES/git-assistent/scripts/Show-GitAssistant.ps1"
taskLabel: "Git Assistent"
language: "nl-NL"
```

## Validation rules

- `projectName`, `defaultBranch`, `repositoryRoot`, `scriptPath`, `taskLabel` and `language` are required.
- `repositoryRoot: "projectroot"` resolves to the project containing the `AI_FACTORY` directory.
- Another relative `repositoryRoot` is resolved from that project root and must exist.
- `scriptPath` is project-relative and must point to the installed PowerShell script.
- Version 1 supports Dutch terminal output (`nl-NL`) and Windows PowerShell.
- When `projectName` cannot be read, the script safely displays `Git-project`.
- The lightweight Markdown parser supports one-line YAML values in double quotes. Invalid or
  unsupported configuration produces a clear warning or safe error; it is not silently executed.
