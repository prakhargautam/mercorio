import { useState } from 'react';
import { projectAfterWorkspaceChange, type Workspace } from './model';

const workspaces: Workspace[] = [
  { id: 'atlas', name: 'Atlas Studio', projects: [{ id: 'atlas-redesign', name: 'Studio redesign' }, { id: 'atlas-mobile', name: 'Mobile launch' }] },
  { id: 'pine', name: 'Pine Labs', projects: [{ id: 'pine-dashboard', name: 'Analytics dashboard' }, { id: 'pine-onboarding', name: 'Customer onboarding' }] },
];

export function WorkspaceDemo() {
  const [workspace, setWorkspace] = useState(workspaces[0]);
  const [projectId, setProjectId] = useState(workspaces[0].projects[0].id);
  const project = workspace.projects.find((item) => item.id === projectId);

  function switchTo(next: Workspace) {
    setProjectId(projectAfterWorkspaceChange(projectId, next));
    setWorkspace(next);
  }

  return <main className="card"><p className="eyebrow">WORKSPACE SETTINGS</p><h1>Project switcher</h1>
    <label>Workspace<select value={workspace.id} onChange={(e) => switchTo(workspaces.find((item) => item.id === e.target.value)!)}>{workspaces.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select></label>
    <p className="crumb">{workspace.name} / {project?.name ?? 'Project unavailable'}</p>
    {!project && <p role="alert">The selected project is not part of this workspace.</p>}
    <p className="hint">Switch workspaces to check that the breadcrumb stays valid.</p>
  </main>;
}
