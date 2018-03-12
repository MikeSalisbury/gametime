import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';

import App from './components/App';


document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();


  const root = document.getElementById('root');
  ReactDOM.render(<Provider store={store}><App /></Provider>, root);
});
