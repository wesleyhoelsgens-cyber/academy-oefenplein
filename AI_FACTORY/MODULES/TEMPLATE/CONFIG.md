# [Module Name] Configuration

**Configuration version:** `[0.1.0]`

This is the only module-local source for values that differ between projects. Replace every
required placeholder during installation. Do not copy these values into prompts or scripts.

```yaml
moduleId: "[module-id]"
projectRoot: "[relative-project-root]"

paths:
  input: "[relative-input-path]"
  output: "[relative-output-path]"
  documentation: "[relative-documentation-path]"

platforms:
  - "[windows/macos/linux]"

options:
  dryRunDefault: true
  requireExplicitApproval: true
```

## Validation rules

- `[List required keys.]`
- `[Define safe path boundaries.]`
- `[Define allowed values.]`
- `[State what must happen when configuration is incomplete.]`
