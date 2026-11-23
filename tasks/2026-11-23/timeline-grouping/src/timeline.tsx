import { groupDay } from './model';
const events=[{title:'Review notes shared',at:'2026-11-23T01:15:00Z'},{title:'Design review',at:'2026-11-23T18:30:00Z'},{title:'Prototype approved',at:'2026-11-24T01:10:00Z'}];
const zone='America/Los_Angeles';
export function Timeline(){return <main className="card"><p className="eyebrow">WORKSPACE ACTIVITY</p><h1>Recent activity</h1><p>Events are grouped by the workspace timezone: {zone}.</p>{events.map(e=><article key={e.title}><time>{groupDay(e.at,zone)}</time><span>{e.title}</span><small>{new Date(e.at).toLocaleTimeString('en-US',{timeZone:zone,hour:'numeric',minute:'2-digit'})}</small></article>)}</main>}
