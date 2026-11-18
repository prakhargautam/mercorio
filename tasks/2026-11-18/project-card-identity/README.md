# Project card identity task

Synthetic React + TypeScript project board with reorder controls and editable per-card notes.

## Task brief

Enter a note on the first card, move cards, and observe that the note can appear under a different project. The list uses array indexes as React keys. Fix identity handling so each card's local state stays with its project after reordering.

## Run

Requires Node.js 20+.

```sh
npm install
npm run dev
npm test
```

## Work plan and checks

1. Enter distinct notes on two cards.
2. Move one card up or down and observe which note appears under each project.
3. Inspect the rendered list keys and project identity.
4. Use stable project IDs for list keys.
5. Reorder in both directions and verify notes remain attached to their project.
6. Run the model tests and manually check the UI.

Done when reordering changes only order, not project identity or its local input state.

## Narration

"I'll add notes to two cards and reorder them to reproduce the state mismatch. Then I'll trace how React identifies each rendered card, switch the list to stable project IDs, and verify the notes stay with their projects after moves."

## Odin note

Synthetic project data only. Check the Writer Guidelines before recording.
