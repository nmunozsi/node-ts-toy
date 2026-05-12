---
id: T4
title: 'add uppercase helper'
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

## What

Add `src/uppercase.ts` that exports a function `uppercase(s: string): string` that returns the input string in all uppercase.

## Acceptance criteria

- `uppercase("hello")` returns `"HELLO"`
- `uppercase("")` returns `""`
- Covered by a colocated `uppercase.test.ts`
