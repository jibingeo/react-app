var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var precss       = require('precss');
var autoprefixer = require('autoprefixer');

const isProd = process.env.NODE_ENV==='production';
const isDev = !isProd;

const chunkHash = isProd ? '.[chunkhash:8]' : '';

module.exports ={
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "dist"),
		filename: `[name]${chunkHash}.js`,
		chunkFilename: `[name]${chunkHash}.js`
	},
	module: {
		rules: [
			{
				test: /\.js/,
				loader: "babel-loader?compact=false"
			},
			{
				test: /\.css/,
				loader:  "style-loader!css-loader?modules&localIdentName=[name]-[local]-[hash:base64:5]!postcss-loader"
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "src/index.html"),
			minify: isProd && { collapseWhitespace: true }
		}),
		new webpack.LoaderOptionsPlugin({
			options: {
				context: __dirname,
				postcss: [
					autoprefixer,
					precss
				]
			}
		})
	]
};
