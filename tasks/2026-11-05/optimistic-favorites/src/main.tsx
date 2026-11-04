import React from 'react';
import { createRoot } from 'react-dom/client';
import { Favorites } from './favorites';
import './style.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><Favorites /></React.StrictMode>);
