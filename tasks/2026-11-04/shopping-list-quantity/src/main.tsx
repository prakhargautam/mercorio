import React from 'react';
import { createRoot } from 'react-dom/client';
import { GroceryList } from './grocery-list';
import './style.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><GroceryList /></React.StrictMode>);
