> **Location:** `.arandano/specs/gitmoji-smoke/spec.md`

# Gitmoji smoke test

A trivial spec used once to validate the new commit convention end-to-end.

## Goal

Confirm the worker can produce a passing commit under the new gitmoji + Conventional Commits rule.

## Acceptance

- Worker opens a PR with gitmoji-prefixed commit subjects.
- Local `commitlint` accepts every commit in the PR head.
