/*
 * @Author: xiaofan 
 * @Date: 2018-12-07 23:49:29 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-08 00:22:27
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/app.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.jsx'
	},
	module: {
		rules: [{
				test: /\.m?jsx$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react']
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	],

};