import { describe, expect, it } from 'vitest';
import { shouldApplySearchResult } from '../src/model';

describe('async search response ordering', () => {
  it('applies the latest response', () => {
    expect(shouldApplySearchResult(4, 4)).toBe(true);
  });
  it('ignores a response from an older request', () => {
    expect(shouldApplySearchResult(2, 4)).toBe(false);
  });
});
