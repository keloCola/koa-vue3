/**
 @name: index.js
 @description: 环境配置封装
 @author: kelo
 @time: 2021-08-31 15:59:57
 @path:D:\00learnning00\Project\[koa]\fe\src\config\index.js
 */
// 获取环境变量 默认生产环境
const env = import.meta.env.MODE || 'prod';
const EnvConfig = {
    //  开发
    development: {
        baseApi: '/api',
        mockApi: 'https://www.fastmock.site/mock/79bd8925843fae088b562aaa24a6918c/api/'
    },
    //  测试
    test: {
        baseApi: '//test.futurefe.com/api',
        mockApi: 'https://www.fastmock.site/mock/79bd8925843fae088b562aaa24a6918c/api/'
    },
    //  生产
    prod: {
        baseApi: '//futurefe.com/api',
        mockApi: 'https://www.fastmock.site/mock/79bd8925843fae088b562aaa24a6918c/api/'
    }
}
export default {
    env,
    mock: true,
    namespace: 'manager',
    ...EnvConfig[env]//解构出来api地址
}