# Filter dialog focus return task

Synthetic React + TypeScript catalog filter dialog.

## Task brief

After the dialog closes, keyboard focus is lost instead of returning to the button that opened it. Implement focus restoration for close button and Escape dismissal, while keeping focus visible.

## Run

Requires Node.js 20+.

```sh
npm install
npm run dev
npm test
```

Use keyboard navigation to open and close the dialog.

## Work plan and checks

1. Tab to Open filters and activate it.
2. Close the dialog and observe where focus goes.
3. Restore focus to the opening control after dismissal.
4. Ensure initial focus enters the dialog and visible focus styling remains.
5. Run the unit tests and verify keyboard close paths manually.

Done when focus enters the dialog on open, returns to the trigger on close, and remains visible throughout.

## Narration

"I'll use the keyboard to open and close the filter dialog and observe focus after dismissal. Then I'll trace the trigger and close flow, return focus to the opener, and verify the interaction with visible focus styling."

## Odin note

Synthetic UI only. Confirm the Writer Guidelines before recording.
