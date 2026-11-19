export function pageAfterFilterChange(currentPage: number): number {
  // Intentional bug: changing the result set keeps the old page index.
  return currentPage;
}
export function pageItems<T>(items:T[],page:number,pageSize:number):T[]{const start=(page-1)*pageSize;return items.slice(start,start+pageSize);}
