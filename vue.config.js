// vue.config.js
const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {

	chainWebpack: config => {
        config.resolve.alias
            .set('@',resolve('src'))
            .set('@assets',resolve('src/assets'))
            .set('components', resolve('src/components'))
            .set('common',resolve('src/common'))
            .set('base',resolve('src/base'))
            .set('api',resolve('src/api')),
        config.resolve.symlinks(true)
    },
    // webpack-dev-server 相关配置  
    devServer: {
        // 调试端口
        // port: 8989
    }
    //其他配置....
}