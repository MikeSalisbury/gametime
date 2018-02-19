import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import { createGame } from './actions/actions';

import App from './components/App';


document.addEventListener("DOMContentLoaded", () => {
  let store = configureStore();
  // window.createGame = createGame();
  // window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Provider store={store}><App /></Provider>, root);
});
