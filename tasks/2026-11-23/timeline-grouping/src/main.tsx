import React from 'react';
import { createRoot } from 'react-dom/client';
import { Timeline } from './timeline';
import './style.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><Timeline /></React.StrictMode>);
