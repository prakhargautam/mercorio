# Timezone-aware activity grouping task

Synthetic React + TypeScript activity timeline with UTC event timestamps.

## Task brief

Events are labeled with the UTC calendar date even though the timeline says it uses the workspace timezone. Group each event by its calendar day in the configured timezone while preserving the displayed local time.

## Run

Requires Node.js 20+.

```sh
npm install
npm run dev
npm test
```

Compare events near midnight UTC.

## Work plan and checks

1. Inspect the events and the displayed timezone.
2. Reproduce events grouping under the wrong date near UTC midnight.
3. Update the day formatter to use the selected timezone.
4. Verify events near midnight and midday.
5. Run tests and compare labels with local times.

Done when day grouping and time labels use the same configured timezone.

## Narration

"I'll inspect the timestamps and the workspace timezone, then compare the date labels with the local times. I'll update the grouping function to format dates in the configured timezone and verify timestamps on both sides of UTC midnight."

## Odin note

Synthetic activity data. Check the official Writer Guidelines before recording.
