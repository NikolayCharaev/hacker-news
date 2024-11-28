import { MuiProvider, ReduxProvider } from './providers/index';
import AppRouter from './providers/routes/app.router'; // маршрутизатор
import './index.css';

function App() {
  return (
    <MuiProvider>
      <ReduxProvider>
        <AppRouter />
      </ReduxProvider>
    </MuiProvider>
  );
}

export default App;
