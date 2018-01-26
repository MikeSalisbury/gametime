import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

import App from './components/App';

const root = document.getElementById('root');

const store = createStore(rootReducer, {}, applyMiddleware() );

ReactDOM.render(<Provider store={store}><App /></Provider>, root);
