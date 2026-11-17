import React from 'react';
import { createRoot } from 'react-dom/client';
import { Onboarding } from './onboarding';
import './style.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><Onboarding /></React.StrictMode>);
