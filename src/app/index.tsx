import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MuiProvider, ReduxProvider } from './providers/index';
import AppRouter from './providers/routes/app.router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MuiProvider>
      <AppRouter />
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </MuiProvider>
  </React.StrictMode>,
);
