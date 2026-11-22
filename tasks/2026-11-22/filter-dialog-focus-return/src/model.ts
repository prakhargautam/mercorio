export function shouldRestoreTriggerFocus(closedByEscapeOrButton: boolean): boolean {
  // Intentional bug: focus is never sent back to the control that opened the dialog.
  return false;
}
