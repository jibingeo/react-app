var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'babel-loader?compact=false',
      },
      {
        test: /\.css/,
        loader: 'style-loader!css-loader?modules&localIdentName=[name]-[local]-[hash:base64:5]!postcss-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      CLIENT: JSON.stringify(true),
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [autoprefixer, precss],
      },
    }),
  ],
};
