import { useState } from 'react';

const products = [{ id: 1, name: 'Aurora desk lamp' }, { id: 2, name: 'Field notebook set' }, { id: 3, name: 'Studio chair' }];

function mockSave(): Promise<void> {
  return new Promise((_, reject) => window.setTimeout(() => reject(new Error('Could not sync saved items.')), 500));
}

export function Favorites() {
  const [saved, setSaved] = useState<number[]>([2]);
  const [error, setError] = useState('');

  async function toggle(id: number) {
    const wasSaved = saved.includes(id);
    setSaved(wasSaved ? saved.filter((item) => item !== id) : [...saved, id]);
    setError('');
    try { await mockSave(); }
    catch { setError('Change was not synced. Try again.'); /* Intentional bug: optimistic state is never rolled back. */ }
  }

  return <main className="card"><p className="eyebrow">NORTHSTAR SHOPPING</p><h1>Saved items</h1><p>Save products to revisit later.</p>
    <section>{products.map((product) => <article key={product.id}><span>{product.name}</span>
      <button aria-pressed={saved.includes(product.id)} onClick={() => void toggle(product.id)}>{saved.includes(product.id) ? 'Saved' : 'Save'}</button>
    </article>)}</section>
    {error && <p role="alert">{error}</p>}
    <p className="hint">Demo sync always fails after a short delay.</p>
  </main>;
}
