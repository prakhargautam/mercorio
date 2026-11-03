import { useState } from 'react';

type Item = { id: number; name: string; price: number; quantity: number };
const initial: Item[] = [
  { id: 1, name: 'Organic bananas', price: 2.49, quantity: 1 },
  { id: 2, name: 'Oat milk', price: 3.79, quantity: 2 },
  { id: 3, name: 'Sourdough loaf', price: 4.25, quantity: 1 },
];

export function GroceryList() {
  const [items, setItems] = useState(initial);
  const [subtotal, setSubtotal] = useState(initial.reduce((sum, item) => sum + item.price * item.quantity, 0));

  function changeQuantity(id: number, delta: number) {
    const updated = items.map((item) => item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item);
    setItems(updated);
    // Intentional bug: subtotal is not recalculated when quantities change.
  }

  return (
    <main className="card">
      <p className="eyebrow">NORTHSTAR GROCERY</p><h1>Weekend list</h1><p>Adjust quantities before adding these items to your cart.</p>
      <section aria-label="Shopping list">
        {items.map((item) => <article key={item.id}>
          <div><b>{item.name}</b><span>${item.price.toFixed(2)} each</span></div>
          <div className="quantity" aria-label={item.name + ' quantity'}>
            <button aria-label={'Decrease ' + item.name} onClick={() => changeQuantity(item.id, -1)}>-</button>
            <output>{item.quantity}</output>
            <button aria-label={'Increase ' + item.name} onClick={() => changeQuantity(item.id, 1)}>+</button>
          </div>
          <strong>${(item.price * item.quantity).toFixed(2)}</strong>
        </article>)}
      </section>
      <footer><span>Subtotal</span><strong>${subtotal.toFixed(2)}</strong></footer>
    </main>
  );
}
