var express = require('express');
var chokidar = require('chokidar');

const app = express();

var watcher = chokidar.watch('./dist/server').on('all', function() {
  console.log('Clearing /dist/ module cache from server');
  Object.keys(require.cache).forEach(function(id) {
    if (/node_modules/.test(id)) return;
    delete require.cache[id];
  });
});

app.use(function(req, res, next) {
  require('./dist/server/index.js').default(req, res, next);
});

app.listen(8000, () => {
  console.log('Server started');
});
