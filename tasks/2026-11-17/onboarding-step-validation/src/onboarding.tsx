import { useState } from 'react';
import { canContinue, type Profile } from './model';

export function Onboarding() {
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState<Profile>({ name: '', email: '' });
  const [message, setMessage] = useState('');
  function next() {
    if (!canContinue(profile)) { setMessage('Complete the required fields before continuing.'); return; }
    setMessage('');
    setStep(1);
  }
  return <main className="card"><p className="eyebrow">NEW WORKSPACE</p><h1>Set up your profile</h1><p>Step {step + 1} of 2</p>
    {step === 0 ? <section><label>Name<input value={profile.name} onChange={(e) => setProfile({...profile,name:e.target.value})}/></label><label>Email<input value={profile.email} onChange={(e) => setProfile({...profile,email:e.target.value})}/></label></section>
    : <section><h2>Review</h2><p>{profile.name || '(name missing)'}</p><p>{profile.email || '(email missing)'}</p><button onClick={() => setStep(0)}>Back</button></section>}
    {message && <p role="alert">{message}</p>}
    {step === 0 && <button onClick={next}>Continue</button>}
    <div className="progress"><span style={{width: step ? '100%' : '50%'}}/></div>
  </main>;
}
