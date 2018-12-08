/*
 * @Author: xiaofan 
 * @Date: 2018-12-07 23:49:29 
 * @Last Modified by: xiaofan
 * @Last Modified time: 2018-12-08 20:12:57
 */

const path 							= require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack 					= require('webpack');

module.exports = {
	entry: './src/app.jsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath:	'/dist/',
		filename: 'js/app.js'
	},
	module: {
		rules: [
			// React(jsx) 处理
			{
				test: /\.m?jsx$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env', 'react']
					}
				}
			},
			// css 处理
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        }),
			},
			// sass 处理
			{
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
			},
			// 图片 处理
			{
        test: /\.(png|jpg|gif|)$/,
        use: [
          {
            loader	: 'url-loader',
            options	: {
							limit	: 8192,
							name	: 'resource/[name].[ext]'
            }
          }
        ]
			},
			// 字体 处理
			{
				test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
				use: [
					{
						loader	: 'file-loader',
						options	: {
							limit	: 8192,
							name	:	'resource/[name].[ext]'
						}
					}
				]
			},
		]
	},
	plugins: [
		// 处理html
		new HtmlWebpackPlugin({
			template: './src/index.html'
		}),
		// 处理CSS
		new ExtractTextPlugin("css/[name].css"),
		// 提出公共模块
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			filename: 'js/base.js'
		})
	],
	devServer: {
		port: 8086,
    inline: true,
	},

};