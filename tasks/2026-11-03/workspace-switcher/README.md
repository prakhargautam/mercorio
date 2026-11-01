# Workspace project switcher accessibility task

A synthetic React + TypeScript app with a workspace/project switcher. The starter has intentional keyboard and accessibility gaps. Diagnose and improve the interaction yourself while recording.

## Task brief

The project switcher works with a pointer, but keyboard users cannot easily start using it or move predictably through projects. The active project is also not exposed as a selected item to assistive technology. Improve the interaction while keeping pointer selection intact.

## Run locally

Requires Node.js 20+.

```sh
npm install
npm run dev
```

## Suggested work plan

1. Explore the switcher state and reproduce its keyboard behavior.
2. Decide the expected focus, arrow-key, Escape, and selection behavior.
3. Implement semantic state and predictable keyboard navigation.
4. Keep the active project visibly and programmatically identifiable.
5. Verify the full flow with keyboard only and confirm pointer use still works.

## Completion checks

- Keyboard opens and dismisses the switcher.
- Arrow keys move among project options and Enter selects one.
- Focus is visible and placed in a useful location when opening.
- The current selection and expanded state are conveyed accessibly.
- Pointer selection continues to update the project.

## Recording outline

"I'll first reproduce the current keyboard interaction and inspect how selection is represented. Then I'll choose a focus model that fits this menu, implement keyboard movement and dismissal, and expose the active project state. I'll finish by checking the interaction with only the keyboard and confirming pointer selection still works."

## Odin note

Synthetic app and data only. This idea has not been checked against the full Writer Guidelines. Confirm task approval and recording rules before using it.
