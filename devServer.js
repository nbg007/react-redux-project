const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');

new WebpackDevServer(webpack(config), config.devServer)
    .listen(config.port, '0.0.0.0', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('Listening at localhost:' + config.port);
        console.log('正在启动浏览器 🌍...');
        open('http://localhost:' + config.port);
    });
