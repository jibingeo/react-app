import express from 'express';
import ReactDOMServer from 'react-dom/server';
import app from './app';

let router = express.Router();

router.get('/', (req, res) => {
  res.send(ReactDOMServer.renderToString(app));
});

export default router;
