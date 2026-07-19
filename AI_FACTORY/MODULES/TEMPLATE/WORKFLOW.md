# [Module Name] Workflow

**Normative:** yes  
**Workflow version:** `[0.1.0]`

## Scope

`[State what this workflow controls and what remains outside its authority.]`

## Roles

| Role | Responsibility |
|---|---|
| `[role]` | `[responsibility]` |

## Inputs

- `[required input]`

## Status model

```text
[start] -> [review] -> [approved] -> [complete]
```

## Procedure

1. `[Read and validate configuration.]`
2. `[Perform read-only analysis.]`
3. `[Present an exact proposal and approval question.]`
4. `[Execute only after explicit approval.]`
5. `[Validate and report evidence.]`

## Stop conditions

- `[missing configuration]`
- `[ambiguous approval]`
- `[changed source or unsafe target]`

## Outputs

- `[expected report or artifact]`

## Actions outside this workflow

`[For example: commit, push, release or publication.]`
