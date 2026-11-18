export function formatPrice(cents: number, locale = 'en-US', currency = 'USD'): string {
  // Intentional bug: cents are passed as whole currency units.
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(cents);
}
