import { describe, expect, it, vi } from 'vitest';
import { cleanupPreviousPreview } from '../src/model';

describe('preview URL lifecycle', () => {
  it('releases a prior URL when replacing the preview', () => {
    const revoke = vi.fn();
    cleanupPreviousPreview('blob:old-preview', revoke);
    expect(revoke).toHaveBeenCalledWith('blob:old-preview');
  });
  it('does nothing when there is no prior URL', () => {
    const revoke = vi.fn();
    cleanupPreviousPreview(null, revoke);
    expect(revoke).not.toHaveBeenCalled();
  });
});
