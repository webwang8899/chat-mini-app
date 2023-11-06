// 引入axios
import axios from 'axios'
import router from '../router'
import { Toast } from 'vant';

export function request(config) {

    // 创建axios实例
    const instance = axios.create({
        baseURL: '/api',
        // timeout: 10000
    })

    // 请求拦截器
    instance.interceptors.request.use(config => {

        const token = localStorage.getItem("token")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config

    })

    // 响应拦截器
    instance.interceptors.response.use(res => {
        switch (res.data.code) {
            case 200:
                return res.data
            case 402:
                Toast({
                    message: res.data.msg,
                    position: 'top',
                })
                // 清空sessionStorage中的token
                window.localStorage.clear()
                // 跳转到登录页面
                router.push('/LoginPage')
                return
            default:
                return res.data
        }
    }, err => {
        console.log(err);
        Toast({
            message: '连接服务器超时',
            position: 'top',
        })
    })
    return instance(config)
}