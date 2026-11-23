import {describe,expect,it} from 'vitest';
import {canSubmit} from '../src/model';
describe('submit action availability',()=>{
 it('allows a changed form when idle',()=>expect(canSubmit(false,true)).toBe(true));
 it('blocks duplicate submissions while saving',()=>expect(canSubmit(true,true)).toBe(false));
 it('blocks unchanged forms',()=>expect(canSubmit(false,false)).toBe(false));
});
