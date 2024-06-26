import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.querySelector('#root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
