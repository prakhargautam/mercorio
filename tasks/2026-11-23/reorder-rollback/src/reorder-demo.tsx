import { useState } from 'react';
import {orderAfterFailure,reorder,type Task} from './model';
const initial:Task[]=[{id:'a',title:'Review onboarding flow'},{id:'b',title:'Prepare usability script'},{id:'c',title:'Share prototype'}];
function persist():Promise<void>{return new Promise((_,reject)=>window.setTimeout(()=>reject(new Error('Could not save order.')),700));}
export function ReorderDemo(){const [items,setItems]=useState(initial),[message,setMessage]=useState('');
async function move(index:number){const before=items,optimistic=reorder(items,index,index+1);setItems(optimistic);setMessage('Saving order...');try{await persist();setMessage('Order saved.')}catch{setItems(orderAfterFailure(before,optimistic));setMessage('Save failed. The list order may be out of date.');}}
return <main className="card"><p className="eyebrow">PLAYTEST TASKS</p><h1>Task order</h1><p>Move an item and observe behavior when the save fails.</p><ol>{items.map((item,index)=><li key={item.id}><span>{item.title}</span><button disabled={index===items.length-1} onClick={()=>void move(index)}>Move down</button></li>)}</ol><p role="status">{message}</p></main>}
