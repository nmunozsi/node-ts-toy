---
id: T6
title: 'add titlecase helper'
role: coder
depends_on: [T4, T5]
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
inject_context:
  - src/greet.ts
---

## What

Add `src/titlecase.ts` that exports a function `titlecase(s: string): string` that capitalises the first letter of each word using the `uppercase` and `lowercase` helpers from T4 and T5.

## Acceptance criteria

- `titlecase("hello world")` returns `"Hello World"`
- `titlecase("")` returns `""`
- Covered by a colocated `titlecase.test.ts`
- Imports from `./uppercase.js` and `./lowercase.js`
