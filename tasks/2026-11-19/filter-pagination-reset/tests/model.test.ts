import {describe,expect,it} from 'vitest';
import {pageAfterFilterChange,pageItems} from '../src/model';
describe('pagination after filtering',()=>{
 it('returns to page one when filters change',()=>expect(pageAfterFilterChange(4)).toBe(1));
 it('returns an empty first-page slice when the filtered set is empty',()=>expect(pageItems(['a','b'],1,5)).toEqual(['a','b']));
});
