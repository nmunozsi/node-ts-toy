---
id: T10
title: 'add gitmoji smoke constant'
role: coder
status: pending
quality:
  format: required
  lint: required
  typecheck: required
  test: required
  coverage: { min: 80, delta: any }
  security: warn
  commit_msg: conventional
  reviewer_required: false
---

> **Location:** `.arandano/specs/gitmoji-smoke/plans/smoke/T10-gitmoji-smoke.md`

## What

Add a new exported constant `GITMOJI_SMOKE_OK = true` to `src/index.ts` and a colocated test that asserts it equals `true`.

All commits you produce MUST follow the `:emoji: type(scope): subject` format described in `/opt/arandano/skills/gitmoji-commits/SKILL.md`.

## Acceptance

- `src/index.ts` exports `GITMOJI_SMOKE_OK`
- The new test passes (`npx vitest run`)
- Each commit subject in the PR starts with one of the 16 curated emoji shortcodes
