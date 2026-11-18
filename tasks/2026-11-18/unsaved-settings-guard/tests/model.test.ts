import {describe,expect,it} from 'vitest';
import {shouldConfirmDiscard} from '../src/model';
describe('unsaved changes guard',()=>{
 it('asks for confirmation when the draft differs from saved settings',()=>expect(shouldConfirmDiscard(true)).toBe(true));
 it('does not ask when there are no unsaved changes',()=>expect(shouldConfirmDiscard(false)).toBe(false));
});
