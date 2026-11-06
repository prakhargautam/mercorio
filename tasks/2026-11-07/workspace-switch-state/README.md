# Workspace switch state task

Synthetic React + TypeScript workspace/project switcher with a pure model function and focused unit tests.

## Task brief

Switching from Atlas Studio to Pine Labs can leave the previous workspace's project ID selected. Repair the selection transition so the breadcrumb always points to a project in the active workspace, while preserving the current project when it exists in both workspaces.

## Run locally

Requires Node.js 20+.

```sh
npm install
npm run dev
npm test
```

## Work plan

1. Switch between the two workspaces and reproduce the unavailable project breadcrumb.
2. Inspect the workspace model and project selection helper.
3. Choose a fallback project when the current project is not in the destination workspace.
4. Preserve the current selection when it is valid in the destination.
5. Run the unit tests and manually verify both transitions.

## Completion checks

- The selected project always belongs to the selected workspace.
- A valid shared project selection is retained.
- A missing selection falls back to the first project or another deliberate empty state.
- Unit tests and manual switching checks pass.

## Narration

"I'll reproduce the stale breadcrumb by switching workspaces, then trace how the selected project ID is carried forward. I'll preserve it when the destination contains that project and choose a valid fallback when it does not, then verify both cases."

## Odin note

All names and data are synthetic. Confirm this task against the official Writer Guidelines before recording.
