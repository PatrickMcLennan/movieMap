const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin');
const ScriptExtHTmlWebpackPlugin = require('script-ext-html-webpack-plugin');

module.exports = {
	entry: ['./src/index.ts'],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 3000
	},
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
			filename: path.resolve(__dirname, 'dist/index.html'),
			template: './template.html',
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
		new ResourceHintWebpackPlugin()
	],
	devtool: 'source-map',
	resolve: {
		extensions: ['.ts', '.tsx', '.js'],

		alias: {
			Component: path.resolve(__dirname, 'src/components/'),
			Context: path.resolve(__dirname, 'src/contexts/'),
			Dictionary: path.resolve(__dirname, './clientDictionary.ts'),
			Hook: path.resolve(__dirname, 'src/hooks/'),
			Layout: path.resolve(__dirname, 'src/layout/'),
			Page: path.resolve(__dirname, 'src/pages/'),
			Utility: path.resolve(__dirname, 'src/utils/')
		}
	}
};
