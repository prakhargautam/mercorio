export function formatDateOnly(value: string, locale = 'en-US'): string {
  // Intentional bug: date-only API strings are parsed as UTC midnight, then rendered in Pacific time.
  return new Date(value).toLocaleDateString(locale, { timeZone: 'America/Los_Angeles', month: 'short', day: 'numeric', year: 'numeric' });
}
