var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
				loader:  "style-loader!css-loader"
			}
		]
	},
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}
