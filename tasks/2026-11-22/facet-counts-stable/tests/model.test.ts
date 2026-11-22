import {describe,expect,it} from 'vitest';
import {categoryCounts,visibleItems,type Item} from '../src/model';
const items:Item[]=[{name:'A',category:'Lighting',team:'Design'},{name:'B',category:'Lighting',team:'Research'},{name:'C',category:'Furniture',team:'Design'}];
describe('catalog facets',()=>{
 it('filters visible results',()=>expect(visibleItems(items,'Lighting','All')).toHaveLength(2));
 it('keeps counts based on the full result set while another facet is active',()=>expect(categoryCounts(items)).toEqual({Lighting:2,Furniture:1}));
});
