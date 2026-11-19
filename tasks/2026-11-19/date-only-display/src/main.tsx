import React from 'react';
import { createRoot } from 'react-dom/client';
import { ScheduleDemo } from './schedule-demo';
import './style.css';
createRoot(document.getElementById('root')!).render(<React.StrictMode><ScheduleDemo /></React.StrictMode>);
