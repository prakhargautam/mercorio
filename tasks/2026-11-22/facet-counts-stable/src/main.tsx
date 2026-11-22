import React from 'react';
import { createRoot } from 'react-dom/client';
import { FacetDemo } from './facet-demo';
import './style.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><FacetDemo /></React.StrictMode>);
