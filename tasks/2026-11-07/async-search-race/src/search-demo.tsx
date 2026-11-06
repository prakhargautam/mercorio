import { useRef, useState } from 'react';
import { shouldApplySearchResult } from './model';

const catalog = ['Aurora lamp', 'Studio chair', 'Reading light', 'Field desk', 'Canvas tote', 'Desk organizer'];
const wait = (ms: number) => new Promise((resolve) => window.setTimeout(resolve, ms));

async function search(query: string): Promise<string[]> {
  // Shorter queries are slower to simulate network responses arriving out of order.
  await wait(query.length < 2 ? 900 : 180);
  return catalog.filter((name) => name.toLowerCase().includes(query.toLowerCase()));
}

export function SearchDemo() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>(catalog);
  const [loading, setLoading] = useState(false);
  const latestRequestId = useRef(0);

  async function updateQuery(value: string) {
    setQuery(value);
    const requestId = ++latestRequestId.current;
    setLoading(true);
    const found = await search(value);
    if (shouldApplySearchResult(requestId, latestRequestId.current)) setResults(found);
    if (requestId === latestRequestId.current) setLoading(false);
  }

  return <main className="card"><p className="eyebrow">NORTHSTAR CATALOG</p><h1>Search products</h1>
    <label>Product name<input value={query} onChange={(e) => void updateQuery(e.target.value)} placeholder="Type to search..." /></label>
    <p aria-live="polite">{loading ? 'Searching...' : results.length + ' results'}</p>
    <ul>{results.map((name) => <li key={name}>{name}</li>)}</ul>
  </main>;
}
