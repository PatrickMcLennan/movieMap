const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	entry: ['./src/index.ts'],
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'app.js'
	},

	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				loader: 'source-map-loader'
			},
			{
				test: /\.tsx?$/,
				use: {
					loader: 'awesome-typescript-loader',
					options: {
						reportFiles: ['src/**/*.{ts,tsx}']
					}
				}
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
	],
	devtool: 'source-map',
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	}
};
