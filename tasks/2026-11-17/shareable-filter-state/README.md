# Shareable catalog filter state task

Synthetic React + TypeScript catalog with category filters encoded in the URL.

## Task brief

Selecting categories updates the URL, but reloading or opening a copied URL does not restore the selected categories. Make filter initialization read the query string so the catalog view can be shared and restored.

## Run

Requires Node.js 20+.

```sh
npm install
npm run dev
npm test
```

Select two categories, reload, and observe that the checks and results do not match the URL.

## Work plan

1. Select categories and inspect the resulting URL.
2. Reload or open the copied query string and reproduce the lost filter state.
3. Parse repeated category parameters during initial state setup.
4. Keep URL updates in sync when categories are changed.
5. Run unit tests and manually verify reload and copied-link behavior.

## Completion checks

- Repeated category parameters restore all selected categories.
- Empty query loads the unfiltered catalog.
- Changing selections updates the URL.
- Unit tests cover multiple values and empty input.

## Narration script

"I'll select a few categories and reload to reproduce the mismatch between the URL and the visible filters. Then I'll inspect how the initial state is derived, parse the shared query values, and verify that both reload and in-session updates stay in sync."

## Odin note

Synthetic catalog data. Check the official Writer Guidelines before recording.
