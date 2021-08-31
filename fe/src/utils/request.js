/**
@name: request.js
@description:  axios二次封装
@author: kelo
@time: 2021-08-31 16:20:03
@path:D:\00learnning00\Project\[koa]\fe\src\utils\request.js
*/
import axios from 'axios'
import config from './../config'
import { ElMessage } from 'element-plus'
import router from './../router'
// import storage from './storage'

const TOKEN_INVALID = 'Token认证失败，请重新登录'
const NETWORK_ERROR = '网络请求异常，请稍后重试'

// 创建axios实例对象，添加全局配置
const service = axios.create({
    baseURL: config.baseApi,
    timeout: 8000//超时时间
})

// 请求拦截
service.interceptors.request.use((req) => {

    const headers = req.headers;
    // TODO
    // const { token } = storage.getItem('userInfo');
    // if (!headers.Authorization) headers.Authorization = 'Bearer ' + token;
    if(!headers.Authorization) headers.Authorization= 'Bearer + kelo'
    return req;
})

// 响应拦截
service.interceptors.response.use((res) => {
    const { code, data, msg } = res.data;
    if (code === 200) {
        //成功
        return data;
    } else if (code === 500001) {
        //登录过期
        ElMessage.error(TOKEN_INVALID)
        setTimeout(() => {
            router.push('/login')
        }, 1500)
        //抛出异常
        return Promise.reject(TOKEN_INVALID)
    } else {
        //纯粹的报错
        ElMessage.error(msg || NETWORK_ERROR)
        return Promise.reject(msg || NETWORK_ERROR)
    }
})
/**
 * 请求核心函数
 * @param {*} options 请求配置
 */
function request(options) {
    //没传默认给get
    options.method = options.method || 'get'
    if (options.method.toLowerCase() === 'get') {
        options.params = options.data;
    }
    //判断是否使用mock 数据
    let isMock = config.mock;
    if (typeof options.mock != 'undefined') {
        isMock = options.mock;
    }
    //生产环境
    if (config.env === 'prod') {
        //防止使用mock api
        service.defaults.baseURL = config.baseApi
    } else {
        service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
    }

    return service(options)
}

['get', 'post', 'put', 'delete', 'patch'].forEach((item) => {
    request[item] = (url, data, options) => {
        return request({
            url,
            data,
            method: item,
            ...options
        })
    }
})

export default request;
