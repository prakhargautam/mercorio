import {describe,expect,it} from 'vitest';
import {orderAfterFailure,reorder,type Task} from '../src/model';
const items:Task[]=[{id:'a',title:'A'},{id:'b',title:'B'}];
describe('optimistic order persistence',()=>{
 it('moves an item optimistically',()=>expect(reorder(items,0,1).map(x=>x.id)).toEqual(['b','a']));
 it('restores the previous order when persistence fails',()=>expect(orderAfterFailure(items,reorder(items,0,1))).toEqual(items));
});
