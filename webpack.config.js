var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;
const PORT = process.env.PORT || 8080;
const chunkHash = isProd ? '[chunkhash:8]' : '[name]';

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: `${chunkHash}.js`,
		chunkFilename: `${chunkHash}.js`,
	},
	module: {
		rules: [
			{
				test: /\.js/,
				use: ['babel-loader?compact=false'],
			},
			{
				test: /\.css/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: { importLoaders: 1 },
					},
					'postcss-loader',
				],
			},
			{
				test: /\.jade$/,
				use: ['jade-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'src/index.jade'),
		}),
	],
	devServer: {
		port: PORT,
		host: '0.0.0.0',
	},
};
