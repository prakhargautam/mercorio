# Optimistic saved items recovery task

Synthetic React + TypeScript saved-items list with a mock API that always fails.

## Task brief

The UI updates immediately when a user saves or unsaves a product. When the mock API fails, the UI keeps the optimistic change and only shows an error, leaving the visible state inconsistent with the server. Implement a clear failure recovery strategy.

## Run locally

Requires Node.js 20+.

```sh
npm install
npm run dev
```

Toggle any product and wait for the simulated sync error.

## Work plan

1. Reproduce save and unsave failures.
2. Decide whether to roll back optimistic state or retain it with an explicit pending state.
3. Implement the chosen recovery behavior without losing other saved items.
4. Verify repeated toggles and error clearing.
5. Explain the tradeoff and resulting user feedback.

## Completion checks

- Failed saves do not silently present unsynced state as confirmed.
- The user receives a useful error or pending state.
- Retrying or toggling again produces predictable behavior.
- Saving one product does not overwrite other saved items.

## Narration outline

"I'll reproduce the failed save and observe how the UI represents the item afterward. Then I'll trace the optimistic update and failure handling, choose a recovery behavior that keeps the state honest, and verify the user can retry without affecting other items."

## Odin note

Synthetic app and products only. Check the official Writer Guidelines before recording.
