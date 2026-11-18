import { useState } from 'react';
import { shouldConfirmDiscard } from './model';
export function SettingsDemo(){
 const [open,setOpen]=useState(true),[saved,setSaved]=useState('Default'),[draft,setDraft]=useState('Default'),[notice,setNotice]=useState('');
 function close(){if(shouldConfirmDiscard(draft!==saved)){setNotice('You have unsaved changes.');return;}setOpen(false);}
 function save(){setSaved(draft);setNotice('Settings saved.');setOpen(false);}
 return <main className="page"><p className="eyebrow">WORKSPACE SETTINGS</p><h1>Notification preferences</h1><p>Saved preference: <b>{saved}</b></p><button onClick={()=>{setOpen(true);setDraft(saved);setNotice('');}}>Open settings</button>
 {open&&<section className="drawer" role="dialog" aria-modal="true" aria-labelledby="title"><h2 id="title">Email updates</h2><label><input type="radio" checked={draft==='Default'} onChange={()=>setDraft('Default')}/>Default</label><label><input type="radio" checked={draft==='Weekly digest'} onChange={()=>setDraft('Weekly digest')}/>Weekly digest</label><div className="actions"><button onClick={close}>Close</button><button className="primary" onClick={save}>Save changes</button></div></section>}
 {notice&&<p role="status">{notice}</p>}
 </main>;
}
