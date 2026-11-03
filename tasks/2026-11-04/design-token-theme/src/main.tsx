import React from 'react';
import { createRoot } from 'react-dom/client';
import { TokenDemo } from './token-demo';
import './style.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><TokenDemo /></React.StrictMode>);
