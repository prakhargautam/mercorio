import { useState } from 'react';
import { pageAfterFilterChange, pageItems } from './model';
const projects=Array.from({length:18},(_,i)=>({name:['Aurora','Studio','Field'][i%3]+' project '+(i+1),team:['Design','Research','Engineering'][i%3]}));
export function ProjectList(){const [team,setTeam]=useState('All'),[page,setPage]=useState(1);const pageSize=5;const filtered=projects.filter(p=>team==='All'||p.team===team);const shown=pageItems(filtered,page,pageSize);
function filter(value:string){setTeam(value);setPage((current)=>pageAfterFilterChange(current));}
return <main className="card"><p className="eyebrow">WORKSPACE PROJECTS</p><h1>Project directory</h1><label>Team<select value={team} onChange={(e)=>filter(e.target.value)}>{['All','Design','Research','Engineering'].map(x=><option key={x}>{x}</option>)}</select></label><p aria-live="polite">{filtered.length} projects - page {page}</p><ul>{shown.map(p=><li key={p.name}><b>{p.name}</b><span>{p.team}</span></li>)}</ul><div className="actions"><button disabled={page===1} onClick={()=>setPage(page-1)}>Previous</button><button disabled={page*pageSize>=filtered.length} onClick={()=>setPage(page+1)}>Next</button></div></main>}
