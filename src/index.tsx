import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import './normalize.css';
import './style.css';
import onload from './onload';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);

window.onload = onload;
