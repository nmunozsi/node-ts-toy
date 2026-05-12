---
id: T2
title: "add lowercase helper"
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

Add `src/lowercase.ts` that exports a function `lowercase(s: string): string` that returns the input string in all lowercase.

## Acceptance criteria

- `lowercase("HELLO")` returns `"hello"`
- `lowercase("")` returns `""`
- Covered by a colocated `lowercase.test.ts`
