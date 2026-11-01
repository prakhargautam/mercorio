# Playtest form recovery â€” task starter

This is a synthetic React + TypeScript app for a Project Odin task idea. It contains intentional bugs. Do not read the solution from elsewhere; investigate the behavior, make the changes yourself, and narrate your decisions while recording.

## Task

The configuration-driven playtest form accepts malformed secure URLs, and it clears the user's input after the mock API rejects a submission. Diagnose and fix both defects while retaining the current form structure.

## Run locally

Requires Node.js 20+.

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. To simulate a failed save, include `server error` in the title.

## Suggested work plan

1. Explore the field configuration, validation, and submit flow.
2. Reproduce malformed URL acceptance and lost values after API failure.
3. Fix URL normalization/validation and preserve values on failed requests.
4. Add or repair regression tests for invalid URL input and recoverable server errors.
5. Verify field errors, retry behavior, and a successful submission.

## Completion criteria

- Whitespace and malformed URLs are rejected with a useful field-level error.
- A failed save keeps all entered values available for retry.
- Valid data can still be submitted successfully.
- Regression tests cover both defects.

## Recording outline

â€œIâ€™ll inspect how this form is configured and submitted before changing anything. First Iâ€™ll reproduce the two reported problems: invalid URL input getting through and form values disappearing after a server error. Iâ€™ll follow each behavior to the validation and error-handling code, make the smallest fix that fits the existing pattern, add regression coverage, and verify the failure and retry paths.â€

## Odin note

This task has not been checked against the full Writer Guidelines yet. Confirm task approval, recording rules, and allowed tools before using it for a submission. The app and data are synthetic and contain no employer or customer information.

