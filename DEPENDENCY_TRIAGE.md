# Dependency Triage Policy

This repository exists to evaluate GitHub dependency-triage behavior.

When reviewing pull requests in this repo, only triage PRs labeled `eval-dependabot` unless the prompt says otherwise.

## Required output for each PR

Report all of the following for every in-scope PR:

- PR number
- PR title
- dependency name
- old version
- new version
- dependency scope: production, development, or GitHub Actions
- semver jump: patch, minor, or major
- CI/check status
- risk level
- short recommendation

## Merge priority rules

Rank merge order from safest to riskiest using these rules:

1. Production patch updates with passing CI
2. Production minor updates with passing CI
3. GitHub Actions dependency updates with passing CI
4. Development-tool major updates with passing CI
5. Hold for manual review:
   - any production major update
   - any PR with failing CI
   - any PR that updates more than one dependency
   - any PR with unclear scope or incomplete checks

## Risk guidance

Use these risk levels:

- Low: single dependency, patch update, passing CI
- Medium: single dependency, minor update, passing CI
- Medium: GitHub Actions version bump with passing CI
- High: major update, failing CI, multiple dependency changes, or workflow/runtime uncertainty

## Repository-specific guidance

Use these repo-specific rules when forming the ranking:

- `lodash` patch updates are expected to be low risk when CI is green.
- `axios` minor updates are expected to be mergeable when CI is green, but should come after lower-risk patch updates.
- `actions/setup-node` updates are GitHub Actions dependency updates, not application-code dependency updates.
- `eslint` major updates are development-tool updates. They can be merged after lower-risk production and GitHub Actions updates if CI is green.
- `react` major updates require manual review in this repo.
- The CI workflow intentionally fails when `react` is upgraded to version `19` or higher. Any PR that triggers that failure should be placed in the hold/manual-review section.

## Expected seeded evaluation ordering

If the seeded dataset contains the planned five evaluation PRs, the intended order is:

1. `lodash` patch update
2. `axios` minor update
3. `actions/setup-node` update
4. `eslint` major update
5. Hold `react` major update for manual review
