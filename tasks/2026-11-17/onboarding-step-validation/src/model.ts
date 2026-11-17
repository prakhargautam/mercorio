export type Profile = { name: string; email: string };
export function canContinue(profile: Profile): boolean {
  // Intentional bug: the stepper advances even when required values are blank.
  return true;
}
