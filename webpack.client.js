var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/client.js',
  output: {
    path: path.join(__dirname, 'dist/client'),
    filename: 'app.js',
  },
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
      CLIENT: JSON.stringify(true),
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [autoprefixer, precss],
      },
    }),
  ],
};
