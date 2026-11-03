import React from 'react';
import { createRoot } from 'react-dom/client';
import { ChatDemo } from './chat-demo';
import './style.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><ChatDemo /></React.StrictMode>);
