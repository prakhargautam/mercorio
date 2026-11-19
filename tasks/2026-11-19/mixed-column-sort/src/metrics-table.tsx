import { useState } from 'react';
import { sortBySessions, type Row } from './model';
const rows:Row[]=[{name:'Aurora',sessions:12},{name:'Studio',sessions:3},{name:'Field',sessions:27},{name:'Canvas',sessions:'8'}];
export function MetricsTable(){const [sorted,setSorted]=useState(rows);return <main className="card"><p className="eyebrow">PLAYTEST ANALYTICS</p><h1>Project metrics</h1><p>Sort session counts from lowest to highest.</p><table><thead><tr><th>Project</th><th><button onClick={()=>setSorted(sortBySessions(rows))}>Sessions: sort</button></th></tr></thead><tbody>{sorted.map((row)=><tr key={row.name}><td>{row.name}</td><td>{row.sessions}</td></tr>)}</tbody></table></main>}
