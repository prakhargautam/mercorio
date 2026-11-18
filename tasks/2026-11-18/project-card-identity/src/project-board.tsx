import { useState } from 'react';
import { moveProject, type Project } from './model';
const initial: Project[] = [{id:'p1',name:'Workspace refresh'},{id:'p2',name:'Mobile launch'},{id:'p3',name:'Design system'}];

function ProjectCard({project,onMove}:{project:Project;onMove:(direction:number)=>void}) {
  const [note,setNote]=useState('');
  return <article><div><b>{project.name}</b><label>Private note<input value={note} onChange={(e)=>setNote(e.target.value)} placeholder="Add a note"/></label></div>
    <div className="actions"><button aria-label={'Move '+project.name+' up'} onClick={()=>onMove(-1)}>Up</button><button aria-label={'Move '+project.name+' down'} onClick={()=>onMove(1)}>Down</button></div>
  </article>;
}
export function ProjectBoard(){
 const [projects,setProjects]=useState(initial);
 function reorder(index:number,direction:number){setProjects((items)=>moveProject(items,index,index+direction));}
 return <main className="card"><p className="eyebrow">WORKSPACE / PROJECTS</p><h1>Project board</h1><p>Reorder cards and keep each private note with its project.</p>
  <section>{projects.map((project,index)=><ProjectCard key={index} project={project} onMove={(direction)=>reorder(index,direction)}/>)}</section>
 </main>;
}
