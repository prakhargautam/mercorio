# Chat response retry state task

Synthetic React + TypeScript conversation UI with a deterministic mock stream failure.

## Task brief

After a response stream is interrupted, retrying should recover the assistant's response for the same user turn. The starter creates another assistant message on every retry, leaving duplicate interrupted responses. Repair the state model and keep retry behavior clear to the user.

## Run locally

Requires Node.js 20+.

```sh
npm install
npm run dev
```

Send any message and wait for the simulated interruption. Select Retry response more than once to observe the duplicate-message issue.

## Work plan and checks

1. Reproduce the interruption and retry sequence.
2. Trace how user turns and assistant response IDs are created.
3. Reuse or update the failed response entry during retry.
4. Prevent overlapping requests and preserve the original user message.
5. Verify retry success/failure messaging and that repeated retries do not duplicate turns.

Done when one user turn has one assistant response slot through retries, with a clear recoverable status.

## Narration script

"I'll reproduce an interrupted response and retry it a couple of times to see how the conversation state changes. Then I'll trace how message IDs and retry actions are managed, update the existing assistant turn instead of appending duplicates, and verify repeated failures and recovery stay attached to the same user message."

## Odin note

Synthetic app and messages only. Verify this idea against the official Writer Guidelines before recording.
