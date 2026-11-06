export type Workspace = { id: string; name: string; projects: { id: string; name: string }[] };

export function projectAfterWorkspaceChange(currentProjectId: string, next: Workspace): string {
  // Intentional bug: the current project's ID may not exist in the next workspace.
  return currentProjectId;
}
