import {describe,expect,it} from 'vitest';
import {formatDateOnly} from '../src/model';
describe('calendar date display',()=>{
 it('preserves the date-only value at the start of the year',()=>expect(formatDateOnly('2026-01-01')).toBe('Jan 1, 2026'));
 it('preserves the date-only value at year end',()=>expect(formatDateOnly('2026-12-31')).toBe('Dec 31, 2026'));
});
