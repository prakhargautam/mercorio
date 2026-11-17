export function cleanupPreviousPreview(previousUrl: string | null, revoke: (url: string) => void): void {
  // Intentional bug: replacing a preview never releases its previous object URL.
}
