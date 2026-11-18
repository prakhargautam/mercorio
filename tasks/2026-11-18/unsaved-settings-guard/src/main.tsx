import React from 'react';
import { createRoot } from 'react-dom/client';
import { SettingsDemo } from './settings-demo';
import './style.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><SettingsDemo /></React.StrictMode>);
