import { request } from "./request";

// 登录
export function login(data) {
    return request ({
        url: '/tab/auth/login',
        method: 'post',
        data: data
    })
}

// 获取验证码
export function getVerificationCodeImage(params) {
    return request ({
        url: '/tab/auth/randomImage',
        method: 'get',
        params: params
    })
}

// 微信登录授权获取token
export function wxLogin(params) {
    return request ({
        url: '/tab/auth/wx/login',
        method: 'get',
        params: params
    })
}