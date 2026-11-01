import React from 'react';
import { createRoot } from 'react-dom/client';
import { Switcher } from './switcher';
import './style.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><Switcher /></React.StrictMode>);
