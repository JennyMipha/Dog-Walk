import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

const container = document.getElementById('app');
// createRoot(container!) if you use TypeScript
const root = createRoot(container);
root.render(<App />);
