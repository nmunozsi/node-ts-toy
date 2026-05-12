---
id: T3
title: "add titlecase helper"
role: coder
depends_on: [T1, T2]
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

Add `src/titlecase.ts` that exports a function `titlecase(s: string): string` that capitalises the first letter of each word using the `uppercase` and `lowercase` helpers from T1 and T2.

## Acceptance criteria

- `titlecase("hello world")` returns `"Hello World"`
- `titlecase("")` returns `""`
- Covered by a colocated `titlecase.test.ts`
- Imports from `./uppercase.js` and `./lowercase.js`
