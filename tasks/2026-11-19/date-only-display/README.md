# Date-only schedule display task

Synthetic React + TypeScript session list. The API supplies ISO calendar dates such as 2026-01-01, with no time or timezone.

## Task brief

Some date-only values display as the previous calendar day for users west of UTC. Fix the formatting boundary so a calendar date stays the same date in every timezone.

## Run

Requires Node.js 20+.

```sh
npm install
npm run dev
npm test
```

## Work plan and checks

1. Inspect the first and last dates in the list.
2. Trace how date-only strings become JavaScript Date values.
3. Format calendar components without applying a timezone shift.
4. Test year-start and year-end dates.
5. Run unit tests and compare displayed dates with the source values.

Done when date-only values remain the same calendar day across timezone settings.

## Narration

"I'll compare the displayed schedule dates with the API values and reproduce the day shift. Then I'll inspect how date-only strings are parsed, fix the formatting so these values stay calendar dates, and verify year-boundary cases."

## Odin note

Synthetic schedule data. Confirm the official Writer Guidelines before recording.
