import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';

import App from './components/App';


document.addEventListener("DOMContentLoaded", () => {
  // let preconfiguredStore;
  let store;
  // if (window.cloudinary_options) {
  //   preconfiguredStore = { cloudinary: window.cloudinary_options };
  //   store = configureStore(preconfiguredStore);
  //   delete window.cloudinary_options;
  // } else {
    store = configureStore();
  // }

  const root = document.getElementById('root');
  ReactDOM.render(<Provider store={store}><App /></Provider>, root);
});
