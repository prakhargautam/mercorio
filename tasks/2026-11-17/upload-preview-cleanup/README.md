# Upload preview cleanup task

Synthetic React + TypeScript image preview picker.

## Task brief

Replacing or removing an image preview leaves its prior browser object URL allocated. Add a safe cleanup path for replaced and removed previews, and ensure component teardown does not leak the active preview.

## Run

Requires Node.js 20+.

```sh
npm install
npm run dev
npm test
```

Choose multiple images in succession and remove the last one. Use browser dev tools if helpful to observe object URL cleanup.

## Work plan

1. Reproduce replacement and removal flows.
2. Trace object URL creation and every path that discards a URL.
3. Revoke the previous URL when replacing it and revoke the active URL on removal/unmount.
4. Avoid revoking the newly selected URL.
5. Run unit tests and verify replacement, removal, and teardown.

## Completion checks

- A previous URL is revoked when the preview changes.
- The active URL is revoked when the preview is removed or the component unmounts.
- The current preview remains usable after replacement.
- Unit tests cover null and non-null prior URLs.

## Narration script

"I'll trace each preview URL from creation through replacement and removal. I'll add cleanup at the points where a URL is discarded, make sure the current preview remains valid, and verify teardown as well as the unit tests."

## Odin note

Synthetic image selection only. Check the official Writer Guidelines before recording.
