import React from 'react';
import { createRoot } from 'react-dom/client';
import { MetricsTable } from './metrics-table';
import './style.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><MetricsTable /></React.StrictMode>);
