# API cents to currency formatting task

Synthetic React + TypeScript checkout summary. API prices are integer cents.

## Task brief

Prices are displayed 100 times too high because integer cents are formatted as whole currency units. Correct the currency boundary and keep locale-aware formatting.

## Run

Requires Node.js 20+.

```sh
npm install
npm run dev
npm test
```

## Work plan and checks

1. Compare displayed values with the cents values in the product data.
2. Trace the formatting helper and define its input unit.
3. Convert minor units to the amount expected by the currency formatter.
4. Verify a whole-dollar amount, fractional amount, and sub-dollar amount.
5. Run unit tests and inspect the rendered checkout summary.

Done when cents are converted exactly once and locale formatting remains intact.

## Narration

"I'll compare the displayed prices with the API's integer cents and reproduce the scaling error. I'll make the formatting helper explicit about its input unit, correct the conversion at that boundary, and verify whole, fractional, and sub-dollar values."

## Odin note

Synthetic data only. Check Writer Guidelines before recording.
