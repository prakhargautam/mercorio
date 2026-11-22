import React from 'react';
import { createRoot } from 'react-dom/client';
import { FilterDialog } from './filter-dialog';
import './style.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><FilterDialog /></React.StrictMode>);
