import React from 'react';
import { createRoot } from 'react-dom/client';
import { ProjectBoard } from './project-board';
import './style.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><ProjectBoard /></React.StrictMode>);
