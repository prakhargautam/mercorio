import React from 'react';
import { createRoot } from 'react-dom/client';
import { PriceDemo } from './price-demo';
import './style.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><PriceDemo /></React.StrictMode>);
