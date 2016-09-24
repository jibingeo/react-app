var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var precss       = require('precss');
var autoprefixer = require('autoprefixer');

module.exports ={
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "dist"),
		filename: "bundle.js"
	},
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.js/,
				loader: "babel?compact=false"
			},
			{
				test: /\.css/,
				loader:  "style!css?modules&sourceMap&localIdentName=[name]-[local]-[hash:base64:5]!postcss?sourceMap=inline"
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
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
}
