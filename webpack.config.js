var webpack = require("webpack");

module.exports = {
	entry: "./src/index.jsx",
	output: {
		path: __dirname + "/public/js/",
		filename: "dist.js"
	},
	mode: "development",
	module: {
		rules: [{
			test: /\.jsx?$/,
			loader: "babel-loader",
			query: {
				cacheDirectory: true,
				presets: [ "env", "react" ]
			}
		}]
	},
	resolve: {
		extensions: [".js", ".jsx"]
	}
};