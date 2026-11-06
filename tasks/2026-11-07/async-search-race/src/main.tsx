import React from 'react';
import { createRoot } from 'react-dom/client';
import { SearchDemo } from './search-demo';
import './style.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><SearchDemo /></React.StrictMode>);
