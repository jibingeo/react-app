import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import App from './components/App';
import reducers from './reducers';

let middlewares = [];
let storeEnhancer = applyMiddleware(...middlewares);

if (process.env.NODE_ENV !== 'production') {
  storeEnhancer = compose(storeEnhancer);
}

if (process.env.CLIENT) {
  storeEnhancer = compose(
    storeEnhancer,
    window.devToolsExtension && window.devToolsExtension()
  );
}

let store = createStore(reducers, storeEnhancer);

let component = (
  <Provider store={store}>
    <App />
  </Provider>
);

export default component;
