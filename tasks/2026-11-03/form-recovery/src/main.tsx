import React from 'react';
import { createRoot } from 'react-dom/client';
import { PlaytestForm } from './playtest-form';
import './style.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PlaytestForm />
  </React.StrictMode>,
);

