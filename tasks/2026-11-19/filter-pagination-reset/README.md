# Filter and pagination reset task

Synthetic React + TypeScript project directory with team filters and pagination.

## Task brief

If a user moves to a later page and then chooses a team with fewer results, the list can show an empty page even though matching projects exist. Reset pagination when the filter changes.

## Run

Requires Node.js 20+.

```sh
npm install
npm run dev
npm test
```

Move to page 3, then filter by a team.

## Work plan and checks

1. Go to a later page and select a narrow team filter.
2. Reproduce the empty result page while the result count is non-zero.
3. Trace the filter and page state transition.
4. Reset the page when the filter changes.
5. Run unit tests and verify pagination in both directions.

Done when changing filters returns to a valid page and matching results are visible immediately.

## Narration

"I'll move to a later page, apply a smaller team filter, and reproduce the empty page. Then I'll inspect how filter and page state interact, reset the page on filter changes, and verify the result count and navigation controls."

## Odin note

Synthetic project data only. Confirm the official Writer Guidelines before recording.
