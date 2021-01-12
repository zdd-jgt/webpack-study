const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const schedule = require('node-schedule');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

let testJob = schedule.scheduleJob('42 * * * *', function(){
  console.log('将在未来的每个时刻的42分时执行此代码, 比如22:42, 23:42');
});

作者：徐小夕
链接：https://juejin.cn/post/6914245886042341389
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
// 告知 express 使用 webpack-dev-middleware，
// 以及将 webpack.config.js 配置文件作为基础配置。
app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    })
)
app.get('/*', (req, res) => {
    res.send(`<div id="root">hello world!</div>`);
});
app.listen(3000, function () {
    console.log('端口号为 3000')
})