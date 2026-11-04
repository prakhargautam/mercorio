import { useState } from 'react';

const products = [
  { id: 1, name: 'Aurora lamp', category: 'Lighting' },
  { id: 2, name: 'Studio chair', category: 'Furniture' },
  { id: 3, name: 'Reading light', category: 'Lighting' },
  { id: 4, name: 'Field desk', category: 'Furniture' },
];

export function Catalog() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const visible = products.filter((product) => !selected.length || selected.includes(product.category));

  function closeFilters() {
    setOpen(false);
    setSelected([]); // Intentional bug: dismissing the mobile filter sheet discards the chosen filters.
  }

  return <main className="page"><header><span className="brand">NORTHSTAR</span><button onClick={() => setOpen(true)}>Filters {selected.length ? '(' + selected.length + ')' : ''}</button></header>
    <h1>Catalog</h1><p>{visible.length} products</p>
    <section className="grid">{visible.map((product) => <article key={product.id}><b>{product.name}</b><span>{product.category}</span></article>)}</section>
    {open && <div className="scrim"><section className="sheet" role="dialog" aria-modal="true" aria-labelledby="filter-title">
      <button className="close" aria-label="Close filters" onClick={closeFilters}>×</button><h2 id="filter-title">Filter products</h2>
      {['Lighting', 'Furniture'].map((category) => <label key={category}><input type="checkbox" checked={selected.includes(category)} onChange={() => setSelected(selected.includes(category) ? selected.filter((item) => item !== category) : [...selected, category])} />{category}</label>)}
      <button className="apply" onClick={() => setOpen(false)}>Show {visible.length} products</button>
    </section></div>}
  </main>;
}
