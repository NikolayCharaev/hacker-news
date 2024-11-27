import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MuiProvider, ReduxProvider } from './providers/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MuiProvider>
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </MuiProvider>
  </React.StrictMode>,
);
