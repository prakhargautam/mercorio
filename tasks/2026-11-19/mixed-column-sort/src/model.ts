export type Row = { name: string; sessions: number | string };
export function sortBySessions(rows: Row[]): Row[] {
  // Intentional bug: numbers are converted to strings, so 12 sorts before 3.
  return [...rows].sort((a,b)=>String(a.sessions).localeCompare(String(b.sessions)));
}
