---
id: T1
title: Add a greet helper with a test
role: coder
tdd: strict
tests:
  - 'src/greet.test.ts exists'
  - 'greet("world") === "hello, world"'
acceptance:
  - 'PR opened'
---

## Context

Add a small `greet` function in `src/greet.ts` that returns `"hello, <name>"`. There's already a stub — write a test first, make it pass, refactor, and commit.

## Files likely to change

- src/greet.ts
- src/greet.test.ts

## Done when

The `tests:` and `acceptance:` items are satisfied and the PR is opened with all required gates green.
