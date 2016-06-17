const path = require('path');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');
const APP_PATH = path.resolve(ROOT_PATH, 'src');
<<<<<<< HEAD
const port = 3020;

module.exports = {
    port: port,
=======
const PORT = 3020;

module.exports = {
    port: PORT,
>>>>>>> 40b89d3edaa758328c886e9511658c1ee5d15924
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
        'webpack-dev-server/client?http://0.0.0.0:' + port,
=======
        'webpack-dev-server/client?http://0.0.0.0:' + PORT,
>>>>>>> 40b89d3edaa758328c886e9511658c1ee5d15924
        'webpack/hot/dev-server',
        path.resolve(APP_PATH, 'index.js')
    ],
    output: {
        path: BUILD_PATH,
        filename: '[name].js'
    },
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
>>>>>>> 40b89d3edaa758328c886e9511658c1ee5d15924
            test: /\.jsx?$/,
            loader: 'babel',
            include: APP_PATH
        }, {
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
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
>>>>>>> 40b89d3edaa758328c886e9511658c1ee5d15924
};
