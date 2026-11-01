# Product catalog render performance task

A synthetic React + TypeScript catalog with 240 products, search, and shortlist toggles. The starter intentionally re-renders all visible rows as the query changes.

## Task brief

Investigate why typing in the search field causes every visible product row to render again. Reduce unnecessary row work while keeping filtering and shortlist toggling correct. Use the render counter in the browser console as a simple observation aid.

## Run locally

Requires Node.js 20+.

```sh
npm install
npm run dev
```

Open the Vite URL, open the browser console, and type into the search field.

## Suggested work plan

1. Establish the current behavior by typing a short query and observing row renders.
2. Trace which props change when the query changes.
3. Choose a focused optimization that preserves selection and search behavior.
4. Repeat the same interaction and compare render behavior.
5. Check empty results, matching results, and toggling an item.

## Completion checks

- Search returns the same matching products as before.
- Changing the query avoids rendering rows whose relevant props did not change.
- Add/Added toggles remain correct for multiple items.
- Empty results are handled clearly.
- Explain the observed before/after behavior while recording.

## Recording outline

"I'll reproduce the render behavior first by typing into search and watching the console counter. Then I'll identify which row props are unstable or unnecessarily tied to the search state. I'll make a targeted change, compare the same interaction again, and verify filtering and shortlist toggles still behave correctly."

## Odin note

Synthetic app and data only. This idea has not been checked against the full Writer Guidelines. Confirm task approval and recording rules before using it.
