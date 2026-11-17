# Onboarding step validation task

Synthetic React + TypeScript two-step workspace profile setup.

## Task brief

The Continue button advances to review even when the required name and email fields are blank. Implement validation that blocks incomplete data and gives the user a useful error, while preserving values when moving back and forward.

## Run

Requires Node.js 20+.

```sh
npm install
npm run dev
npm test
```

## Work plan

1. Continue with empty fields and reproduce the issue.
2. Inspect the step transition and profile validation.
3. Add required-field checks and useful validation feedback.
4. Navigate back and confirm entered values remain.
5. Run unit tests and manually verify empty, partial, and valid profiles.

## Completion checks

- Empty and partial profiles cannot advance.
- A complete name and valid email can advance.
- Error feedback is clear.
- Back navigation preserves entered values.
- Unit tests pass.

## Narration script

"I'll try to advance with empty fields to reproduce the issue, then inspect how validation is connected to the step transition. I'll add the missing checks, keep draft values when navigating, and verify empty, partial, and complete profiles."

## Odin note

Synthetic details only. Check the official Writer Guidelines before recording.
