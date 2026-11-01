import { useState, type FormEvent } from 'react';

type Field = { name: 'title' | 'url'; label: string; required?: boolean; kind: 'text' | 'url' };
const fields: Field[] = [
  { name: 'title', label: 'Playtest title', required: true, kind: 'text' },
  { name: 'url', label: 'Build URL', required: true, kind: 'url' },
];
type Values = { title: string; url: string };

function mockCreatePlaytest(values: Values): Promise<void> {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      if (values.title.toLowerCase().includes('server error')) reject(new Error('The server could not save this playtest.'));
      else resolve();
    }, 350);
  });
}

export function PlaytestForm() {
  const [values, setValues] = useState<Values>({ title: '', url: '' });
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [status, setStatus] = useState('');

  function update(name: keyof Values, value: string) {
    setValues((current) => ({ ...current, [name]: value }));
    setStatus('');
  }

  function validate(): boolean {
    const next: typeof errors = {};
    if (!values.title.trim()) next.title = 'Enter a playtest title.';
    // Intentional defect: raw input is checked before trimming and URL() is not used.
    if (!values.url) next.url = 'Enter a build URL.';
    else if (!values.url.startsWith('https://')) next.url = 'Use a secure https URL.';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function submit(event: FormEvent) {
    event.preventDefault();
    setStatus('');
    if (!validate()) return;
    try {
      await mockCreatePlaytest(values);
      setStatus('Playtest created successfully.');
      setValues({ title: '', url: '' });
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Something went wrong.');
      // Intentional defect: values are cleared after a failed server request.
      setValues({ title: '', url: '' });
    }
  }

  return (
    <main className="shell">
      <header><span className="eyebrow">WORKSPACE / PLAYTESTS</span><h1>Create a playtest</h1><p>Configure a build for your next participant session.</p></header>
      <form onSubmit={submit} noValidate>
        {fields.map((field) => (
          <label className="field" key={field.name}>
            <span>{field.label}{field.required && <b aria-hidden="true"> *</b>}</span>
            <input
              aria-invalid={Boolean(errors[field.name])}
              aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
              type={field.kind}
              value={values[field.name]}
              onChange={(event) => update(field.name, event.target.value)}
            />
            {errors[field.name] && <small id={`${field.name}-error`}>{errors[field.name]}</small>}
          </label>
        ))}
        <p className="hint">Demo behavior: enter â€œserver errorâ€ in the title to simulate a failed save.</p>
        <button type="submit">Create playtest</button>
        {status && <p role="status" className="status">{status}</p>}
      </form>
    </main>
  );
}

