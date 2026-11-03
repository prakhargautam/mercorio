# Semantic design token mapping task

Synthetic React + TypeScript component gallery for a small design system.

## Task brief

The error alert is styled with the success color. Trace the semantic token mapping and correct it so success, warning, and error components use the intended shared tokens in both light and dark themes. Avoid adding one-off component colors.

## Run locally

Requires Node.js 20+.

```sh
npm install
npm run dev
```

## Work plan and checks

1. Inspect semantic aliases and palette variables.
2. Reproduce the incorrect error color and compare the other states.
3. Correct the token relationship at the design-system layer.
4. Verify all three states in both themes and check text contrast remains readable.
5. Explain why a semantic alias is preferable to a local styling override.

Done when the error alert uses the error token, success and warning stay unchanged, and both themes remain legible.

## Narration script

"I'll compare each semantic state against the token definitions and reproduce the error styling issue. I'll fix the alias at the shared design-system layer rather than patching the alert itself, then inspect all three states in both themes to make sure the change is consistent."

## Odin note

Synthetic UI and data. Verify this idea against the official Writer Guidelines before recording.
