// import { store } from './app/store'
import { Provider } from 'react-redux';
import { store } from '../../shared/model';

const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
