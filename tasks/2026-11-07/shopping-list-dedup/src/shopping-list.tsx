import { useState } from 'react';
import { addProduct, type CartLine, type Product } from './model';

const products: Product[] = [
  { productId: 'tea', name: 'Breakfast tea', unitPrice: 5.5 },
  { productId: 'mug', name: 'Stoneware mug', unitPrice: 12 },
  { productId: 'honey', name: 'Wildflower honey', unitPrice: 8.25 },
];

export function ShoppingList() {
  const [lines, setLines] = useState<CartLine[]>([]);
  const total = lines.reduce((sum, line) => sum + line.unitPrice * line.quantity, 0);

  return <main className="card"><p className="eyebrow">NORTHSTAR GROCERY</p><h1>Shopping list</h1>
    <section><h2>Products</h2>{products.map((product) => <article key={product.productId}><span>{product.name} - ${product.unitPrice.toFixed(2)}</span><button onClick={() => setLines((current) => addProduct(current, product))}>Add</button></article>)}</section>
    <section><h2>Your list</h2>{lines.length === 0 ? <p>No items yet.</p> : lines.map((line, index) => <article key={line.productId + index}><span>{line.name} x {line.quantity}</span><strong>${(line.unitPrice * line.quantity).toFixed(2)}</strong></article>)}</section>
    <footer><span>Total</span><strong>${total.toFixed(2)}</strong></footer>
  </main>;
}
