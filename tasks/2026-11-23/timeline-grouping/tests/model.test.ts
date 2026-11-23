import {describe,expect,it} from 'vitest';
import {groupDay} from '../src/model';
describe('timeline day grouping',()=>{
 it('uses the configured timezone when a UTC timestamp falls on the prior local date',()=>expect(groupDay('2026-11-23T01:15:00Z','America/Los_Angeles')).toBe('2026-11-22'));
 it('keeps the local date when the timestamp is midday UTC',()=>expect(groupDay('2026-11-23T18:30:00Z','America/Los_Angeles')).toBe('2026-11-23'));
});
