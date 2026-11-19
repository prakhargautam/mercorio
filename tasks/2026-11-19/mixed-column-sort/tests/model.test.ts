import {describe,expect,it} from 'vitest';
import {sortBySessions,type Row} from '../src/model';
describe('mixed numeric metric sorting',()=>{
 it('sorts numeric values by magnitude, not as text',()=>{const rows:Row[]=[{name:'Twelve',sessions:12},{name:'Three',sessions:3}];expect(sortBySessions(rows).map(r=>r.sessions)).toEqual([3,12]);});
 it('does not mutate the source rows',()=>{const rows:Row[]=[{name:'B',sessions:2},{name:'A',sessions:1}];sortBySessions(rows);expect(rows.map(r=>r.name)).toEqual(['B','A']);});
});
