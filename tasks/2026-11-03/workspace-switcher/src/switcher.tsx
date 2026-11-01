import { useState } from 'react';

const projects = ['Aurora redesign', 'Checkout refresh', 'Mobile onboarding'];

export function Switcher() {
  const [selected, setSelected] = useState(projects[0]);
  const [open, setOpen] = useState(false);

  return (
    <main className="page">
      <nav className="topbar" aria-label="Workspace navigation">
        <span className="brand">northstar</span>
        <div className="switcher">
          <button className="trigger" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span className="workspace">Northstar Studio</span>
            <span aria-hidden="true"> / </span>
            <span>{selected}</span>
            <span aria-hidden="true"> v</span>
          </button>
          {open && (
            <div className="menu" role="menu" aria-label="Projects">
              {projects.map((project) => (
                <button key={project} role="menuitem" className="option" onClick={() => { setSelected(project); setOpen(false); }}>
                  <span>{project}</span>
                  {selected === project && <span className="check" aria-hidden="true">Selected</span>}
                </button>
              ))}
            </div>
          )}
        </div>
        <button className="avatar" aria-label="Account menu">RC</button>
      </nav>
      <section className="content">
        <p className="eyebrow">WORKSPACE / PROJECTS</p>
        <h1>{selected}</h1>
        <p>Use the project switcher to move between active product work.</p>
        <p className="hint">Try opening the switcher with a keyboard and moving through the options.</p>
      </section>
    </main>
  );
}
