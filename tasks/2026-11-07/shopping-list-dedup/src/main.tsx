import React from 'react';
import { createRoot } from 'react-dom/client';
import { ShoppingList } from './shopping-list';
import './style.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><ShoppingList /></React.StrictMode>);
