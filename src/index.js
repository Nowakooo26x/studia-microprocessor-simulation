import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css'

import { SnackbarProvider } from 'notistack';
import { store } from './app-redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}>
        <App />
      </SnackbarProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
