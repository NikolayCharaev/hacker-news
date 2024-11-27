import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MuiProvider } from './providers/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MuiProvider>
      <App />
    </MuiProvider>
  </React.StrictMode>,
);
