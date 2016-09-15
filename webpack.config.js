module.exports = {
	entry: "./src/baseline-working.js",
	output: {
		path: __dirname,
		filename: "./app/bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" }
		]
	}
}