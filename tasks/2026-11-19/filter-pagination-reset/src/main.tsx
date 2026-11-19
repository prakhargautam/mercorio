import React from 'react';
import { createRoot } from 'react-dom/client';
import { ProjectList } from './project-list';
import './style.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><ProjectList /></React.StrictMode>);
