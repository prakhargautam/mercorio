# Unsaved settings guard task

Synthetic React + TypeScript notification preferences dialog.

## Task brief

Changing a setting and closing the dialog discards the draft without warning. Add a guard so closing with unsaved edits presents a clear discard choice; closing an unchanged dialog should remain immediate.

## Run

Requires Node.js 20+.

```sh
npm install
npm run dev
npm test
```

## Work plan and checks

1. Change the preference, then close the dialog to reproduce silent loss.
2. Inspect the saved and draft values and the close handler.
3. Detect dirty state and ask whether to discard or continue editing.
4. Keep Save behavior separate from discard behavior.
5. Run unit tests and manually verify dirty and unchanged close paths.

Done when unsaved edits cannot disappear without a clear choice, while unchanged settings close normally.

## Narration

"I'll change the preference and close the dialog to reproduce the lost draft. Then I'll trace how saved and draft values are compared, add a clear discard decision for dirty settings, and verify both the changed and unchanged paths."

## Odin note

Synthetic settings only. Check Writer Guidelines before recording.
