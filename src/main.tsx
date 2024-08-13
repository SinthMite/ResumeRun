import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { LogInProvider } from './State/State'; // Adjust the path as needed

import App from './App.tsx';
import './index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LogInProvider>
    <Router>
      <App />
    </Router>
    </LogInProvider>
  </StrictMode>
);