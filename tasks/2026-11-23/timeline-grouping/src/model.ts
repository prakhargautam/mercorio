export function groupDay(timestamp:string,timeZone:string):string {
  // Intentional bug: this groups by UTC date rather than the user's timezone.
  return timestamp.slice(0,10);
}
