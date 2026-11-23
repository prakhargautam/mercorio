export function canSubmit(isSubmitting:boolean,hasChanges:boolean):boolean {
  // Intentional bug: submit remains available while a request is already in progress.
  return hasChanges;
}
