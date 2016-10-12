module.exports = {
	entry: "./src/entryPoint.js",
	output: {
		path: __dirname,
		filename: "./app/bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" }
			{ test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader" }
		]
	}
}
