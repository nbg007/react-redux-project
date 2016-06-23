const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const open = require('open');

new WebpackDevServer(webpack(config), config.devServer)
    .listen(config.port, '0.0.0.0', (err) => {
        if (err) {
            console.log(err);
        }
<<<<<<< HEAD
        console.log('Listening at 0.0.0.0:' + config.port);
        console.log('🌎正在启动浏览器...');
        open('http://localhost:' + config.port);
=======
        console.log('Listening at localhost:' + config.port);
<<<<<<< HEAD
        console.log('Opening your system browser...');
        open('http://localhost:' + config.port + '/webpack-dev-server/');
=======
        console.log('正在启动浏览器 🌍...');
        open('http://localhost:' + config.port);
>>>>>>> 40b89d3edaa758328c886e9511658c1ee5d15924
>>>>>>> 975b42c3ec6bdc12d2a5d8e27d769d540e4552c0
    });
