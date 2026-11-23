# Optimistic reorder rollback task

Synthetic React + TypeScript task list with a mock persistence request that always fails.

## Task brief

The list reorders immediately, but when saving fails it leaves the optimistic order in place and reports only that the order may be stale. Restore the previous order after failure and give the user clear feedback.

## Run

Requires Node.js 20+.

```sh
npm install
npm run dev
npm test
```

Move any task down and wait for the simulated failure.

## Work plan and checks

1. Record the initial order and move a task.
2. Observe the optimistic update and the failure state.
3. Trace how the previous and optimistic orders are stored.
4. Restore the previous order on failure and keep the status clear.
5. Run tests and repeat multiple moves.

Done when a failed save restores the last confirmed ordering and success preserves the new order.

## Narration

"I'll move one task and observe the list after the mock save fails. Then I'll trace the optimistic state and rollback path, restore the last confirmed order on failure, and verify both failure and success behavior."

## Odin note

Synthetic task data. Confirm the official Writer Guidelines before recording.
