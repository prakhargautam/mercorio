# Mobile catalog filter state task

Synthetic React + TypeScript catalog with a responsive filter sheet that behaves like a mobile bottom drawer.

## Task brief

Selecting a category and dismissing the filter sheet with the close button clears the selection. Preserve the user's category selection when the sheet is closed and reopened. Keep the existing behavior where selected filters update the product list and the Apply button closes the sheet.

## Run locally

Requires Node.js 20+.

```sh
npm install
npm run dev
```

Resize the browser to a narrow viewport to inspect the bottom-sheet interaction.

## Work plan

1. Select a category, close the sheet, reopen it, and observe the selection.
2. Trace how selection state is handled by close and apply actions.
3. Preserve the selected categories when dismissing the sheet.
4. Verify that Apply closes the sheet and the list reflects the selection.
5. Check narrow and wide layouts and the resulting product counts.

## Completion checks

- Close and reopen preserves category selections.
- Selected categories filter the visible catalog.
- Apply closes the sheet without clearing the selection.
- Dialog controls remain usable at mobile and desktop widths.

## Narration outline

"I'll reproduce the filter loss by selecting a category, closing the sheet, and reopening it. Then I'll inspect how close and apply actions manage selection state, preserve the selection on dismissal, and verify the flow at mobile and desktop sizes."

## Odin note

Synthetic catalog only. Check the official Writer Guidelines before recording.
