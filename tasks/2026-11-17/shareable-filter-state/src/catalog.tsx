import { useState } from 'react';
import { readFilters, writeFilters } from './model';

const categories = ['Lighting', 'Furniture', 'Stationery'];
const products = [{name:'Aurora lamp',category:'Lighting'},{name:'Studio chair',category:'Furniture'},{name:'Field notebook',category:'Stationery'},{name:'Reading light',category:'Lighting'}];

export function Catalog() {
  const [selected, setSelected] = useState(() => readFilters(window.location.search));
  const visible = products.filter((item) => !selected.length || selected.includes(item.category));
  function toggle(category: string) {
    const next = selected.includes(category) ? selected.filter((item) => item !== category) : [...selected, category];
    setSelected(next);
    const query = writeFilters(next);
    window.history.replaceState({}, '', query ? '?' + query : window.location.pathname);
  }
  return <main className="card"><p className="eyebrow">NORTHSTAR CATALOG</p><h1>Browse products</h1><p>Select categories, copy the URL, then reload to restore the same view.</p>
    <section className="filters">{categories.map((category) => <label key={category}><input type="checkbox" checked={selected.includes(category)} onChange={() => toggle(category)}/>{category}</label>)}</section>
    <p aria-live="polite">{visible.length} products</p><ul>{visible.map((item) => <li key={item.name}>{item.name} <span>{item.category}</span></li>)}</ul>
  </main>;
}
