const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: ['./src/index.ts'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.[contenthash].js'
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
					loader: 'awesome-typescript-loader'
				}
			}
		]
	},
	optimization: {
		minimizer: [new TerserPlugin()]
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, 'dist/index.html'),
			inject: true,
			minify: {
				collapseWhitespace: true
			}
		}),
		new CleanWebpackPlugin()
	],
	devtool: 'source-map',
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	}
};
