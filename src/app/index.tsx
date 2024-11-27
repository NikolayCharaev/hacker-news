import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MuiProvider, ReduxProvider } from './providers/index';
import AppRouter from './providers/routes/app.router'; // маршрутизатор
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MuiProvider>
      <ReduxProvider>
        {/* Убираем Router, так как маршрутизация уже будет осуществляться в AppRouter */}
        <AppRouter /> 
        {/* <App/> */}
      </ReduxProvider>
    </MuiProvider>
  </React.StrictMode>,
);
