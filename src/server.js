import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Root from './Root';
import Html from './Html';

let router = express.Router();

router.get('/', (req, res) => {
  let html = ReactDOMServer.renderToString(Root);
  res.send(ReactDOMServer.renderToStaticMarkup(<Html html={html} />));
});

export default router;
