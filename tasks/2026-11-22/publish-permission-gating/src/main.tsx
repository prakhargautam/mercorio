import React from 'react';
import { createRoot } from 'react-dom/client';
import { PublishSettings } from './publish-settings';
import './style.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><PublishSettings /></React.StrictMode>);
