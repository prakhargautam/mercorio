import {describe,expect,it} from 'vitest';
import {canPublish} from '../src/model';
describe('publish permission',()=>{
 it('allows admins',()=>expect(canPublish('admin')).toBe(true));
 it('denies editors',()=>expect(canPublish('editor')).toBe(false));
 it('denies viewers',()=>expect(canPublish('viewer')).toBe(false));
});
