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
				loader: "babel",
        query: {compact: false}
			},
			{
				test: /\.css/,
				loader:  "style-loader!css-loader?modules&importLoaders=1!postcss-loader?sourceMap=inline"
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		}),
		new webpack.LoaderOptionsPlugin({
			postcss: function () {
				return [autoprefixer, precss];
			}
		})
	]
}
