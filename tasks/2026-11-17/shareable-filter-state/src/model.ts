export function readFilters(search: string): string[] {
  const params = new URLSearchParams(search);
  // Intentional bug: shared category values in the URL are ignored on page load.
  return [];
}
export function writeFilters(categories: string[]): string {
  const params = new URLSearchParams();
  categories.forEach((category) => params.append('category', category));
  return params.toString();
}
