# Disabled submit semantics task

Synthetic React + TypeScript settings form with an asynchronous save action.

## Task brief

The Save button remains enabled during an in-flight save, allowing duplicate requests. Make submit availability reflect both whether there are changes and whether a request is already running. Keep native disabled semantics so keyboard and assistive technology users get the same behavior.

## Run

Requires Node.js 20+.

```sh
npm install
npm run dev
npm test
```

Edit the title and click Save repeatedly while the button says Saving.

## Work plan and checks

1. Reproduce duplicate requests by clicking during the pending state.
2. Inspect the submit guard and button disabled prop.
3. Block submission when saving or when there are no changes.
4. Verify mouse and keyboard activation cannot submit twice.
5. Run unit tests and manually check enabled/disabled states.

Done when a changed idle form can submit once and remains natively disabled until the request finishes.

## Narration

"I'll edit the title and trigger repeated saves while the first request is pending. Then I'll trace the availability helper and button semantics, block duplicate submission, and verify the idle, saving, and unchanged states."

## Odin note

Synthetic form only. Confirm the official Writer Guidelines before recording.
