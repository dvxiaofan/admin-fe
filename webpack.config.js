/*
 * @Author: DevZhang 
 * @Date: 2019-04-29 16:16:09 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-04-30 16:56:08
 */

const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

let config = {
    entry: './src/app.jsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'js/app.js'
    },
    module: {
        rules: [
            // react 语法 文件处理
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            // css 文件处理
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            // sass 文件处理
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            },
            // 图片处理
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'resource/[name].[ext]'
                    }
                }]
            },
            // 字体处理
            {
                test: /\.(svg|eot|ttf|woff|woff2|otf)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'resource/[name].[ext]'
                    }
                }]
            },
        ]
    },
    plugins: [
        // 处理HTML文件
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // 独立CSS文件
        new ExtractTextPlugin('css/[name].css'),
        // 提出公共模块
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'js/base.js'
        })
    ],
    devServer: {
        // contentBase: './dist'
        port: 8090
    }
}

module.exports = config;