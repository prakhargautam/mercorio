import React from 'react';
import { createRoot } from 'react-dom/client';
import { ReorderDemo } from './reorder-demo';
import './style.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><ReorderDemo /></React.StrictMode>);
