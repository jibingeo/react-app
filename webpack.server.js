var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var precss = require('precss');
var autoprefixer = require('autoprefixer');
var fs = require('fs');

var nodeModules = {
  'react-dom/server': 'commonjs react-dom/server',
  'isomorphic-style-loader/lib/withStyles': 'commonjs isomorphic-style-loader/lib/withStyles',
};
fs
  .readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  entry: './src/server.js',
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist/server'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  externals: nodeModules,
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader?compact=false',
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        loader: 'isomorphic-style-loader!css-loader?modules&localIdentName=[name]-[local]-[hash:base64:5]!postcss-loader',
      },
    ],
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.DefinePlugin({
      SERVER: JSON.stringify(true),
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [autoprefixer, precss],
      },
    }),
  ],
};
