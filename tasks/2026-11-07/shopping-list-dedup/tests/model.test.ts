import { describe, expect, it } from 'vitest';
import { addProduct, type CartLine, type Product } from '../src/model';

const tea: Product = { productId: 'tea', name: 'Breakfast tea', unitPrice: 5.5 };
const oneTea: CartLine = { ...tea, quantity: 1 };

describe('shopping list product identity', () => {
  it('adds a product that is not already in the list', () => {
    expect(addProduct([], tea)).toEqual([oneTea]);
  });
  it('increments quantity when adding the same product again', () => {
    expect(addProduct([oneTea], tea)).toEqual([{ ...tea, quantity: 2 }]);
  });
});
