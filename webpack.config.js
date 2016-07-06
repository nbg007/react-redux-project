const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlwebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const BUILD_PATH = path.resolve(ROOT_PATH, 'build');
const APP_PATH = path.resolve(ROOT_PATH, 'src');
const PORT = 3050;
const includePaths = [
    fs.realpathSync(__dirname + '/src'),
    fs.realpathSync(__dirname + '/node_modules/pinyin/lib'),
];

module.exports = {
    port: PORT,
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        colors: true
    },
    entry: [
        'webpack-dev-server/client?http://0.0.0.0:' + PORT,
        'webpack/hot/dev-server',
        path.resolve(APP_PATH, 'index.js')
    ],
    output: {
        path: BUILD_PATH,
        filename: '[name].js'
    },
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
            test: /\.jsx?$/,
            loader: 'babel',
            include: includePaths
        }, {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            exclude: /node_modules/,
            loader: 'url?limit=4000&name=images/[name].[hash:base64:5].[ext]'
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
            showErrors: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            'process.env.SERVER_ENV': JSON.stringify(process.env.SERVER_ENV)
        })
    ]
};
