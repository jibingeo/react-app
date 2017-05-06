import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import root from './root';
import Html from './Html';
import AppProvider from './AppProvider';

let router = express.Router();

router.get('/', (req, res) => {
  let css = {};
  let context = {
    insertCss(styles) {
      styles._getContent().forEach((style, i) => {
        let [moduleId, context] = style;
        css[`s${moduleId}-${i}`] = context;
      });
    },
  };

  let html = ReactDOMServer.renderToString(
    <AppProvider context={context}>
      {root}
    </AppProvider>
  );
  css = Object.keys(css).map(key => [key, css[key]]);

  res.send(ReactDOMServer.renderToStaticMarkup(<Html css={css} html={html} />));
});

export default router;
