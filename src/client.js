import ReactDOM from 'react-dom';
import React from 'react';
import root from './root';
import AppProvider from './AppProvider';

let context = {
  insertCss(styles) {
    styles._insertCss();
  },
};

ReactDOM.render(
  <AppProvider context={context}>{root}</AppProvider>,
  document.getElementById('root')
);
