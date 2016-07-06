const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const APP_PATH = path.resolve(__dirname, 'src');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlwebpackPlugin = require('html-webpack-plugin');
const includePaths = [
    fs.realpathSync(__dirname + '/src'),
    fs.realpathSync(__dirname + '/node_modules/pinyin/lib'),
];

module.exports = {
    entry: {
        app: './src/index',
        vendors: [
            'babel-polyfill',
            'react',
            'react-dom',
            'react-router',
            'redux',
            'react-redux',
            'redux-thunk',
            'isomorphic-fetch',
            'moment',
            'qrcode.react',
            'query-string',
            'react-tap-event-plugin'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.[hash].js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
            include: includePaths
        }, {
            test: /\.(css|scss)$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules&importLoaders=1&localIdentName=[hash:base64:5]!autoprefixer!sass-loader")
        }, {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            exclude: /node_modules/,
            loader: 'url?limit=1024&name=fonts/[name].[ext]'
        }, {
            test: /\.(jpg|jpeg|gif|png)$/,
            loader: 'url?limit=4000&name=images/[name].[hash:base64:5].[ext]'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new ExtractTextPlugin("[name].[hash].css"),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
        new HtmlwebpackPlugin({
            filename: 'index.html',
            hash: false,
            inject: 'body',
            template: './src/index.html',
            showErrors: false,
            favicon: path.resolve(APP_PATH, 'static', 'favicon.ico'),
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
            'process.env.SERVER_ENV': JSON.stringify(process.env.SERVER_ENV)
        })
    ]
};
