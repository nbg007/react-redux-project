const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');
const APP_PATH = path.resolve(ROOT_PATH, 'src');
<<<<<<< HEAD
const PORT = 3050;

module.exports = {
    port: PORT,
=======
<<<<<<< HEAD
const port = 3020;

module.exports = {
    port: port,
=======
const PORT = 3020;

module.exports = {
    port: PORT,
>>>>>>> 40b89d3edaa758328c886e9511658c1ee5d15924
>>>>>>> 975b42c3ec6bdc12d2a5d8e27d769d540e4552c0
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        colors: true
    },
    entry: [
<<<<<<< HEAD
        'webpack-dev-server/client?http://0.0.0.0:' + PORT,
=======
<<<<<<< HEAD
        'webpack-dev-server/client?http://0.0.0.0:' + port,
=======
        'webpack-dev-server/client?http://0.0.0.0:' + PORT,
>>>>>>> 40b89d3edaa758328c886e9511658c1ee5d15924
>>>>>>> 975b42c3ec6bdc12d2a5d8e27d769d540e4552c0
        'webpack/hot/dev-server',
        path.resolve(APP_PATH, 'index.js')
    ],
    output: {
        path: BUILD_PATH,
        filename: '[name].js'
    },
<<<<<<< HEAD
=======
<<<<<<< HEAD
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlwebpackPlugin({
            filename: 'index.html',
            hash: false,
            inject: 'body',
            template: './src/index.html',
            showErrors: false
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    module: {
        preLoaders: [{
            test: /\.js?/,
            loader: 'eslint',
            include: APP_PATH
        }],
        loaders: [{
=======
>>>>>>> 975b42c3ec6bdc12d2a5d8e27d769d540e4552c0
    module: {
        preLoaders: [{
            test: /\.jsx?$/,
            loader: 'eslint',
            exclude: /node_modules/
        }],
        loaders: [{
            test: /\.(css|scss)$/,
            loader: 'style!css?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]!autoprefixer!sass'
        }, {
            test: /\.(jpg|jpeg|gif|png)$/,
            loader: 'url?limit=4000&name=images/[name].[ext]'
        }, {
<<<<<<< HEAD
=======
>>>>>>> 40b89d3edaa758328c886e9511658c1ee5d15924
>>>>>>> 975b42c3ec6bdc12d2a5d8e27d769d540e4552c0
            test: /\.jsx?$/,
            loader: 'babel',
            include: APP_PATH
        }, {
<<<<<<< HEAD
=======
<<<<<<< HEAD
            test: /\.scss$/,
            loader: 'style!css?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]!sass'
        }, {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            exclude: /node_modules/,
            loader: 'url?limit=1024&name=fonts/[name].[ext]'
        }, {
            test: /\.(jpg|jpeg|gif|png)$/,
            loader: 'file?name=/img/[name].[ext]'
        }]
    }
=======
>>>>>>> 975b42c3ec6bdc12d2a5d8e27d769d540e4552c0
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            exclude: /node_modules/,
            loader: 'url?limit=1024&name=fonts/[name].[ext]'
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlwebpackPlugin({
            filename: 'index.html',
            hash: false,
            inject: 'body',
            template: './src/index.html',
            favicon: path.resolve(APP_PATH, 'static', 'favicon.ico'),
            showErrors: false
        }),
        new webpack.DefinePlugin({
<<<<<<< HEAD
            'process.env.NODE_ENV': JSON.stringify('development'),
            'process.env.SERVER_ENV': JSON.stringify(process.env.SERVER_ENV)
        })
    ]
=======
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
>>>>>>> 40b89d3edaa758328c886e9511658c1ee5d15924
>>>>>>> 975b42c3ec6bdc12d2a5d8e27d769d540e4552c0
};
