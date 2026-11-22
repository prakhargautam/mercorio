# Publish permission gating task

Synthetic React + TypeScript workspace role picker.

## Task brief

The publish action is shown for viewers and editors, while admins are incorrectly denied. Correct the role gate and keep the explanatory status for users without permission.

## Run

Requires Node.js 20+.

```sh
npm install
npm run dev
npm test
```

## Work plan and checks

1. Select each role and reproduce the incorrect publish action.
2. Trace the role helper and the UI gate.
3. Correct the mapping for admin, editor, and viewer.
4. Run unit tests and verify the UI for all roles.

Done when only admins see the publish action and other roles see a clear explanation.

## Narration

"I'll inspect the publish action under each workspace role, then trace the permission helper that drives its visibility. I'll correct the role mapping and verify the allowed and denied states in both the tests and UI."

## Odin note

Synthetic roles and interface only. Confirm the Writer Guidelines before recording.
