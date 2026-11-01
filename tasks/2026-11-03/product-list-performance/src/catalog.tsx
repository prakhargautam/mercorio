import { useState } from 'react';

type Product = { id: number; name: string; category: string; price: number };
const products: Product[] = Array.from({ length: 240 }, (_, index) => ({
  id: index + 1,
  name: ['Aurora lamp', 'Studio chair', 'Field notebook', 'Canvas tote'][index % 4] + ' ' + (index + 1),
  category: ['Lighting', 'Furniture', 'Stationery', 'Accessories'][index % 4],
  price: 12 + ((index * 17) % 180),
}));

function ProductRow({ product, selected, onToggle }: { product: Product; selected: boolean; onToggle: (id: number) => void }) {
  console.count('Product row rendered');
  return (
    <article className="row">
      <div><strong>{product.name}</strong><span>{product.category}</span></div>
      <span>${product.price.toFixed(2)}</span>
      <button aria-pressed={selected} onClick={() => onToggle(product.id)}>{selected ? 'Added' : 'Add'}</button>
    </article>
  );
}

export function Catalog() {
  const [query, setQuery] = useState('');
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const visibleProducts = products.filter((product) => product.name.toLowerCase().includes(query.toLowerCase()));

  function toggle(id: number) {
    setSelectedIds((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  return (
    <main className="shell">
      <header><p className="eyebrow">NORTHSTAR / CATALOG</p><h1>Products</h1><p>Search and add products to your workspace shortlist.</p></header>
      <label className="search">Search products<input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try lamp or chair" /></label>
      <p className="count" aria-live="polite">{visibleProducts.length} products shown · {selectedIds.length} added</p>
      <section className="list" aria-label="Products">
        {visibleProducts.map((product) => <ProductRow key={product.id} product={product} selected={selectedIds.includes(product.id)} onToggle={toggle} />)}
      </section>
    </main>
  );
}
