# Project Health Configuration

**Configuration version:** 1.0.0

This is the only source for project-specific paths used by the module.

```yaml
projectName: "Academy Oefenplein"
projectRoot: "projectroot"
launcherFile: "index.html"
catalogFile: "app.js"
modulesDirectory: "modules"
scriptsDirectory: "scripts"
vscodeDirectory: ".vscode"
aiFactoryDirectory: "AI_FACTORY"
moduleStandardFile: "AI_FACTORY/MODULES/MODULE_STANDARD.md"
documentationFiles: "README.md;AI_FACTORY/CHANGELOG.md;AI_FACTORY/ROADMAP.md;AI_FACTORY/MODULES/MODULE_STANDARD.md;AI_FACTORY/MODULE_CATALOG_STANDARD.md"
excludedModuleDirectories: "_inbox"
```

## Validation rules

- Every key is required and uses one quoted, single-line value.
- `projectroot` resolves to the project containing `AI_FACTORY/`.
- All configured paths are project-relative and may not contain `..`.
- `documentationFiles` and `excludedModuleDirectories` use semicolon-separated values.
- Excluded module directories are intentionally not treated as registered production modules.
- Invalid configuration stops with a clear error and never changes the project.
