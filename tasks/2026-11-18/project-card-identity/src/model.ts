export type Project = { id: string; name: string };
export function moveProject(items: Project[], from: number, to: number): Project[] {
  if (to < 0 || to >= items.length) return items;
  const next = [...items];
  const [moved] = next.splice(from, 1);
  next.splice(to, 0, moved);
  return next;
}
