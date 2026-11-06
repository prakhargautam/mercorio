# Async product search race task

Synthetic React + TypeScript search screen with intentionally out-of-order mock network responses.

## Task brief

A slow response for an earlier query can arrive after a newer query and replace its results. Make the UI ignore stale responses while keeping the loading indicator accurate.

## Run locally

Requires Node.js 20+.

```sh
npm install
npm run dev
npm test
```

Type a short query and quickly replace it with a longer query; the short query is intentionally slower.

## Work plan

1. Reproduce results changing back to an older query after fast typing.
2. Inspect request sequencing and the result-application guard.
3. Ensure only the latest request updates results.
4. Ensure older requests cannot clear the latest request's loading state.
5. Run unit tests and repeat the fast typing scenario.

## Completion checks

- Older responses are ignored after a newer request starts.
- The latest response updates results.
- Loading state belongs to the latest request.
- Unit tests cover current and stale request IDs.

## Narration

"I'll trigger two searches quickly and watch the slower earlier response overwrite the newer one. Then I'll inspect the request ordering guard, make result and loading updates depend on the current request, and verify both response orders."

## Odin note

Synthetic catalog data. Confirm this task against the official Writer Guidelines before recording.
