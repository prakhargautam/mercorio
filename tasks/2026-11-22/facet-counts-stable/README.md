# Stable catalog facet counts task

Synthetic React + TypeScript catalog with category and team filters.

## Task brief

Selecting a category makes other category counts drop to zero because counts are derived from the already-filtered items. Keep category counts stable against the active category filter while still applying all selected filters to the visible list.

## Run

Requires Node.js 20+.

```sh
npm install
npm run dev
npm test
```

Select Lighting, then inspect the other category counts.

## Work plan and checks

1. Observe facet counts before and after selecting a category.
2. Trace the data source used for visible rows and counts.
3. Calculate category counts from the appropriate unfiltered set.
4. Preserve intersection behavior for visible results.
5. Run tests and verify counts under category and team filters.

Done when available facet counts remain useful while visible results obey active filters.

## Narration

"I'll select a category and observe how the other facet counts change. Then I'll inspect the filtering pipeline, separate the count source from the displayed rows, and verify both stable counts and the filtered result set."

## Odin note

Synthetic catalog entries only. Check the official Writer Guidelines before recording.
