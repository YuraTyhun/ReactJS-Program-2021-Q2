const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: path.resolve(__dirname, '..', 'src/index.jsx'),
	devtool: 'source-map',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, '..', 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({ template: path.resolve(__dirname, '..', 'src/index.html') }),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].css',
			chunkFilename: '[name].css'
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, '..', 'src/assets'), 
					to: 'assets',
					noErrorOnMissing: true
				}
			]
		})
	],
	resolve: {
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: [path.resolve(__dirname, '..', 'src')],
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				include: [path.resolve(__dirname, '..', 'src')],
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
                test: /\.(png|jpe?g|svg)$/i,
                use: ['file-loader'],
            },
		]
	}
};