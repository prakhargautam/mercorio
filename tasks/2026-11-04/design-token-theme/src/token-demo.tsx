import { useState } from 'react';

const semantic = {
  success: 'var(--green-700)',
  warning: 'var(--amber-700)',
  error: 'var(--green-700)', // Intentional bug: error maps to the success color token.
};

export function TokenDemo() {
  const [dark, setDark] = useState(false);
  return (
    <main className={dark ? 'app dark' : 'app'}>
      <header><span className="brand">NORTHSTAR DLS</span><button onClick={() => setDark(!dark)}>Toggle theme</button></header>
      <section>
        <p className="eyebrow">DESIGN LANGUAGE SYSTEM</p>
        <h1>Semantic color tokens</h1>
        <p>These components share semantic tokens across product surfaces.</p>
        <div className="sample success" style={{ color: semantic.success }}>Payment saved successfully.</div>
        <div className="sample warning" style={{ color: semantic.warning }}>Review this workspace setting.</div>
        <div className="sample error" role="alert" style={{ color: semantic.error }}>Unable to save changes.</div>
      </section>
    </main>
  );
}
