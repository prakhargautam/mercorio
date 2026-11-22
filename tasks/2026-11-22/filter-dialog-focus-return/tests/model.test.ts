import {describe,expect,it} from 'vitest';
import {shouldRestoreTriggerFocus} from '../src/model';
describe('filter dialog focus return',()=>{
 it('restores focus after closing from the close button',()=>expect(shouldRestoreTriggerFocus(true)).toBe(true));
 it('restores focus after dismissal',()=>expect(shouldRestoreTriggerFocus(false)).toBe(true));
});
