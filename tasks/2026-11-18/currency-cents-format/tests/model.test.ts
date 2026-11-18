import {describe,expect,it} from 'vitest';
import {formatPrice} from '../src/model';
describe('price formatting from cents',()=>{
 it('formats dollars and cents without scaling the amount',()=>expect(formatPrice(12999,'en-US','USD')).toBe('$129.99'));
 it('formats a sub-dollar amount',()=>expect(formatPrice(875,'en-US','USD')).toBe('$8.75'));
});
