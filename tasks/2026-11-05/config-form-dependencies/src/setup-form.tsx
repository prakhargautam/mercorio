import { useState } from 'react';

const fields = [
  { name: 'title', label: 'Playtest title', required: true },
  { name: 'hasSponsor', label: 'This playtest has a sponsor', type: 'checkbox' },
  { name: 'sponsorName', label: 'Sponsor name', required: true, when: { field: 'hasSponsor', equals: true } },
] as const;

export function SetupForm() {
  const [values, setValues] = useState<Record<string, string | boolean>>({ title: '', hasSponsor: false, sponsorName: '' });
  const [status, setStatus] = useState('');

  function submit(event: React.FormEvent) {
    event.preventDefault();
    const missing = fields.find((field) => field.required && !values[field.name]);
    if (missing) { setStatus(missing.label + ' is required.'); return; }
    setStatus('Playtest saved.');
  }

  return <main className="card"><p className="eyebrow">PLAYTEST SETTINGS</p><h1>New playtest</h1>
    <form onSubmit={submit}>
      {fields.map((field) => {
        const visible = !('when' in field) || Boolean(values[field.when.field]) === field.when.equals;
        if (!visible) return null;
        return <label key={field.name} className="field">{field.label}
          {('type' in field && field.type === 'checkbox')
            ? <input type="checkbox" checked={Boolean(values[field.name])} onChange={(e) => setValues({ ...values, [field.name]: e.target.checked })} />
            : <input value={String(values[field.name] ?? '')} onChange={(e) => setValues({ ...values, [field.name]: e.target.value })} />}
        </label>;
      })}
      <button>Save playtest</button>{status && <p role="status">{status}</p>}
    </form>
  </main>;
}
