# Shopping list quantity and subtotal task

Synthetic React + TypeScript shopping list with quantity controls and line totals.

## Task brief

The line totals update as quantities change, but the subtotal remains stale. Make the subtotal consistently reflect the items and quantities. Preserve the minimum quantity of one and ensure repeated increment/decrement actions do not lose updates.

## Run locally

Requires Node.js 20+.

```sh
npm install
npm run dev
```

## Work plan and checks

1. Record the initial subtotal and each line total.
2. Increase and decrease different item quantities and observe the mismatch.
3. Trace how item state and subtotal state are maintained.
4. Make the subtotal derive from the current item list or update it reliably.
5. Verify line totals, subtotal, minimum quantity, and multiple items.

Done when the subtotal always equals the sum of current line totals and quantity controls never reduce an item below one.

## Narration script

"I'll reproduce the stale subtotal by changing a few quantities and comparing it with the line totals. Then I'll inspect how the list and aggregate state are maintained, make the smallest reliable change, and verify the total after several increases and decreases, including the minimum quantity case."

## Odin note

Synthetic app and product data only. Verify this idea against the official Writer Guidelines before recording.
