import { useState } from 'react';
import { cleanupPreviousPreview } from './model';

export function UploadDemo() {
  const [preview, setPreview] = useState<string | null>(null);
  const [name, setName] = useState('');
  function choose(file?: File) {
    if (!file) return;
    cleanupPreviousPreview(preview, URL.revokeObjectURL);
    const nextUrl = URL.createObjectURL(file);
    setPreview(nextUrl);
    setName(file.name);
  }
  return <main className="card"><p className="eyebrow">PLAYTEST ASSETS</p><h1>Upload a cover image</h1>
    <label className="drop">Choose an image<input type="file" accept="image/*" onChange={(e) => choose(e.target.files?.[0])}/></label>
    {preview && <section><img src={preview} alt="Selected cover preview"/><div><b>{name}</b><button onClick={() => { cleanupPreviousPreview(preview, URL.revokeObjectURL); setPreview(null); setName(''); }}>Remove image</button></div></section>}
    <p className="hint">Choose several images in a row and remove the final preview.</p>
  </main>;
}
