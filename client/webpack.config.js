const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const HTMLWebpackRootPlugin = require('html-webpack-root-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ScriptExtHTmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = {
	entry: ['./src/index.ts'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.[hash].js'
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
		minimizer: [
			new TerserPlugin({
				parallel: 4,
				sourceMap: true
			})
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HTMLWebpackPlugin({
			hash: true,
			filename: path.resolve(__dirname, 'dist/index.[hash].html'),
			inject: 'head',
			meta: {
				'application-name': 'movieMap',
				charset: 'utf-8',
				viewport: 'width=device-width,initial-scale=1',
				description: "You'll never be bored again",
				robots: 'index,follow',
				googlebot: 'index,follow',
				rating: 'general'
			},
			minify: {
				collapseWhitespace: true,
				removeComments: true
			},
			title: 'movieMap'
		}),
		new ScriptExtHTmlWebpackPlugin({
			defaultAttribute: 'defer'
		}),
		new HTMLWebpackRootPlugin()
	],
	devtool: 'source-map',
	resolve: {
		extensions: ['.ts', '.tsx', '.js']
	}
};
