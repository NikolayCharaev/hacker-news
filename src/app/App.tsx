import { MuiProvider, ReduxProvider } from './providers/index';
import AppRouter from './providers/routes/app.router'; // маршрутизатор
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

function App() {
  return (
    <MuiProvider>
      <ReduxProvider>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <AppRouter />
      </ReduxProvider>
    </MuiProvider>
  );
}

export default App;
