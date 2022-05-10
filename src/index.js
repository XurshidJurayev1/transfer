import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { DarkModeContextProvider } from './context/darkModeContext';
import { store } from './reducers';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <DarkModeContextProvider>
      <App />
    </DarkModeContextProvider>
  </Provider>,
);
