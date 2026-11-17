import { describe, expect, it } from 'vitest';
import { readFilters, writeFilters } from '../src/model';

describe('shareable category filters', () => {
  it('reads repeated category parameters from a shared URL', () => {
    expect(readFilters('?category=Lighting&category=Furniture')).toEqual(['Lighting','Furniture']);
  });
  it('writes selected categories as repeated parameters', () => {
    expect(writeFilters(['Lighting','Furniture'])).toBe('category=Lighting&category=Furniture');
  });
  it('returns no filters for an empty query', () => expect(readFilters('')).toEqual([]));
});
