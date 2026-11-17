import React from 'react';
import { createRoot } from 'react-dom/client';
import { UploadDemo } from './upload-demo';
import './style.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><UploadDemo /></React.StrictMode>);
