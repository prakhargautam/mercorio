# Mixed numeric column sorting task

Synthetic React + TypeScript analytics table with numeric values represented as numbers or numeric strings.

## Task brief

Sorting sessions currently compares text, so values such as 12 can appear before 3. Implement numeric-aware sorting while preserving the input rows and handling numeric strings.

## Run

Requires Node.js 20+.

```sh
npm install
npm run dev
npm test
```

Click the Sessions sort button.

## Work plan and checks

1. Sort the table and compare 3, 8, 12, and 27.
2. Inspect how mixed number/string values are compared.
3. Normalize values to numbers for comparison.
4. Keep the original data array unchanged.
5. Run unit tests and check the rendered order.

Done when counts sort by numeric magnitude regardless of whether the source value is a number or numeric string.

## Narration

"I'll sort the table and inspect the ordering of single- and double-digit counts. Then I'll trace the comparator, normalize mixed values for numeric comparison, and verify correct order without mutating source rows."

## Odin note

Synthetic metrics only. Check the official Writer Guidelines before recording.
