const path = require('path');
const webpack = require('webpack');
<<<<<<< HEAD
const APP_PATH = path.resolve(__dirname, 'src');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
=======
<<<<<<< HEAD
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var autoprefixer = require('autoprefixer');
var postcssImport = require('postcss-import');
=======
const APP_PATH = path.resolve(__dirname, 'src');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
>>>>>>> 40b89d3edaa758328c886e9511658c1ee5d15924
>>>>>>> 975b42c3ec6bdc12d2a5d8e27d769d540e4552c0
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index',
        vendors: [
<<<<<<< HEAD
            'babel-polyfill',
            'react',
            'react-dom',
            'react-router',
            'redux',
=======
<<<<<<< HEAD
            'react',
            'react-dom',
=======
            'babel-polyfill',
            'react',
            'react-dom',
            'redux',
>>>>>>> 40b89d3edaa758328c886e9511658c1ee5d15924
>>>>>>> 975b42c3ec6bdc12d2a5d8e27d769d540e4552c0
            'react-redux',
            'redux-thunk'
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.[hash].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.(css|scss)$/,
<<<<<<< HEAD
            loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules&importLoaders=1&localIdentName=[hash:base64:5]!autoprefixer!sass-loader")
=======
<<<<<<< HEAD
            loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules&importLoaders=1&localIdentName=[hash:base64:5]!postcss-loader!sass-loader")
=======
            loader: ExtractTextPlugin.extract("style-loader", "css-loader?modules&importLoaders=1&localIdentName=[hash:base64:5]!autoprefixer!sass-loader")
>>>>>>> 40b89d3edaa758328c886e9511658c1ee5d15924
>>>>>>> 975b42c3ec6bdc12d2a5d8e27d769d540e4552c0
        }, {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            exclude: /node_modules/,
            loader: 'url?limit=1024&name=fonts/[name].[ext]'
        }, {
            test: /\.(jpg|jpeg|gif|png)$/,
<<<<<<< HEAD
            loader: 'url?limit=4000&name=images/[name].[ext]'
        }]
    },
=======
<<<<<<< HEAD
            loader: 'file?name=/img/[name].[ext]'
        }]
    },
    postcss: function(webpack) {
        return [
            autoprefixer({
                browsers: ['last 2 versions'],
            }),
            postcssImport({
                addDependencyTo: webpack,
            })
        ]
    },
=======
            loader: 'url?limit=4000&name=images/[name].[ext]'
        }]
    },
>>>>>>> 40b89d3edaa758328c886e9511658c1ee5d15924
>>>>>>> 975b42c3ec6bdc12d2a5d8e27d769d540e4552c0
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
<<<<<<< HEAD
            favicon: path.resolve(APP_PATH, 'static', 'favicon.ico'),
=======
<<<<<<< HEAD
=======
            favicon: path.resolve(APP_PATH, 'static', 'favicon.ico'),
>>>>>>> 40b89d3edaa758328c886e9511658c1ee5d15924
>>>>>>> 975b42c3ec6bdc12d2a5d8e27d769d540e4552c0
            minify: {
                collapseWhitespace: true,
                removeComments: true
            }
        }),
        new webpack.DefinePlugin({
<<<<<<< HEAD
            'process.env.NODE_ENV': JSON.stringify('production'),
            'process.env.SERVER_ENV': JSON.stringify(process.env.SERVER_ENV)
=======
            'process.env.NODE_ENV': JSON.stringify('production')
>>>>>>> 975b42c3ec6bdc12d2a5d8e27d769d540e4552c0
        })
    ]
};
