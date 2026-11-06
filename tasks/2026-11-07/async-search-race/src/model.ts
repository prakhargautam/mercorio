export function shouldApplySearchResult(requestId: number, latestRequestId: number): boolean {
  // Intentional bug: late responses are allowed to replace newer search results.
  return true;
}
