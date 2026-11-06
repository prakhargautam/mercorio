# Shopping list duplicate item task

Synthetic React + TypeScript product picker and shopping list with a pure cart update function.

## Task brief

Adding the same product twice creates two separate lines. Update the cart behavior so repeated additions merge into one line and increase quantity, keeping total calculations correct.

## Run locally

Requires Node.js 20+.

```sh
npm install
npm run dev
npm test
```

Add Breakfast tea twice and inspect the list and total.

## Work plan

1. Reproduce duplicate rows by adding one product twice.
2. Inspect the cart update model and how the total is derived.
3. Merge additions by product identity and increment quantity.
4. Verify different products stay separate and repeated items merge.
5. Run unit tests and manually check totals.

## Completion checks

- One row exists per product ID.
- Repeated additions increase that row's quantity.
- Different product IDs remain separate.
- Total reflects unit price multiplied by quantity.
- Unit tests cover first add and repeated add.

## Narration

"I'll add the same item twice to reproduce duplicate rows, then trace the cart model's identity handling. I'll update the model to increment an existing line, keep other products separate, and verify both the resulting quantities and total."

## Odin note

Synthetic product data only. Confirm this task against the official Writer Guidelines before recording.
