const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	entry: ['./src/index.ts'],
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'app.js'
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'ts-loader'
				}
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader'
			}
		]
	},
	optimization: {
		minimizer: [new TerserPlugin()]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: './public/index.html',
			inject: true
		})
	]
};
