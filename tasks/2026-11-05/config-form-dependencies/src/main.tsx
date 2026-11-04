import React from 'react';
import { createRoot } from 'react-dom/client';
import { SetupForm } from './setup-form';
import './style.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><SetupForm /></React.StrictMode>);
