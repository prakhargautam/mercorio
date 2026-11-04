# Mobile catalog filter state task

Synthetic React + TypeScript catalog with a responsive filter sheet that behaves like a mobile bottom drawer.

## Task brief

Selecting a category and dismissing the filter sheet with the close button clears the selection. Preserve the user's draft filters when the sheet is dismissed and reopened, while keeping Apply as the action that updates the catalog results.

## Run locally

Requires Node.js 20+.

```sh
npm install
npm run dev
```

Resize the browser to a narrow viewport to inspect the bottom-sheet interaction.

## Work plan

1. Select a category, close the sheet, reopen it, and observe selection.
2. Trace draft filter state and the separate applied product list.
3. Preserve draft selection when dismissing the sheet.
4. Keep Apply and any explicit Reset behavior clear.
5. Verify narrow and wide layouts, cancel/reopen, apply, and product counts.

## Completion checks

- Close and reopen preserves draft selections.
- Apply updates the visible catalog.
- Dismiss does not unexpectedly apply filters or erase draft state.
- Dialog controls remain usable at mobile and desktop widths.

## Narration outline

"I'll reproduce the filter loss by selecting a category, closing the sheet, and reopening it. Then I'll inspect how draft selection and applied results are represented, preserve the draft when dismissing, and verify both cancel and apply flows at mobile and desktop sizes."

## Odin note

Synthetic catalog only. Check the official Writer Guidelines before recording.
