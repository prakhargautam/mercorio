import {describe,expect,it} from 'vitest';
import {moveProject,type Project} from '../src/model';
const items:Project[]=[{id:'a',name:'A'},{id:'b',name:'B'}];
describe('project ordering',()=>{
 it('moves the same project identity to the requested position',()=>expect(moveProject(items,0,1).map(x=>x.id)).toEqual(['b','a']));
 it('leaves the list unchanged when moving beyond its bounds',()=>expect(moveProject(items,0,-1)).toEqual(items));
});
