var webpack = require("webpack");

module.exports = {
	entry: "./src/entryPoint.js",
	output: {
		path: __dirname,
		filename: "./app/bundle.min.js"
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			mangle: true,
		})
	],
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" },
			{ test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader" }
		]
	}
};
