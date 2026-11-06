import { describe, expect, it } from 'vitest';
import { projectAfterWorkspaceChange, type Workspace } from '../src/model';

const next: Workspace = { id: 'pine', name: 'Pine Labs', projects: [{ id: 'pine-dashboard', name: 'Analytics dashboard' }] };

describe('workspace project selection', () => {
  it('keeps a project that belongs to the next workspace', () => {
    expect(projectAfterWorkspaceChange('pine-dashboard', next)).toBe('pine-dashboard');
  });
  it('selects a valid fallback when the previous project is absent', () => {
    expect(projectAfterWorkspaceChange('atlas-redesign', next)).toBe('pine-dashboard');
  });
});
