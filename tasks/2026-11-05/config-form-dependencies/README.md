# Configuration-driven conditional form task

Synthetic React + TypeScript playtest setup form. Fields are described by a configuration array.

## Task brief

When the sponsor checkbox is turned off, the sponsor name field disappears, but the form still treats that hidden field as required. Fix conditional validation so only visible, applicable fields block submission. Preserve the configuration-driven pattern.

## Run locally

Requires Node.js 20+.

```sh
npm install
npm run dev
```

## Work plan

1. Submit with sponsor off and reproduce the hidden-field validation failure.
2. Inspect how visibility and required validation are evaluated.
3. Make validation follow the active field configuration.
4. Verify both sponsor-off and sponsor-on flows, including a blank sponsor name.
5. Check that saved state does not include stale hidden values unless the product behavior requires it.

## Completion checks

- With sponsor off, title alone can be saved.
- With sponsor on, sponsor name is required.
- Toggling the condition does not create misleading errors.
- The form remains configuration-driven.

## Narration outline

"I'll reproduce the case where a hidden sponsor field blocks submission, then compare the rendering condition with the validation rule. I'll make validation use the active fields and check both branches of the conditional flow."

## Odin note

Synthetic UI and data. Check the official Writer Guidelines before recording.
