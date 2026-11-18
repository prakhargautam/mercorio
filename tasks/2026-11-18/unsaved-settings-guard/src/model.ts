export function shouldConfirmDiscard(isDirty: boolean): boolean {
  // Intentional bug: dirty settings never trigger a discard confirmation.
  return false;
}
