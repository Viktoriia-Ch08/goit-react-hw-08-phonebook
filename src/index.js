import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from 'components/App';
import { Provider } from 'react-redux';
import { persistor, store } from 'redux/store';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <PersistGate persistor={persistor}>
        <Provider store={store}>
          <App />
          <ToastContainer />
        </Provider>
      </PersistGate>
    </BrowserRouter>
  </React.StrictMode>
);
