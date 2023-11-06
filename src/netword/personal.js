import { request } from "./request";

// 获取用户信息
export function getUserInfo() {
    return request({
        url: '/tab/student/indexStudentInfo',
        method: 'get',
    })
}
// 上传头像
export function upAver (data) {
    return request({
        url: '/web/common/upload/file',
        method: 'post',
        data:data
    })
}

// 修改用户头像
export function upDateAvator (params) {
    return request({
        url: '/tab/student/update/avator',
        method: 'post',
        params: params
    })
}

// 校验原密码
export function checkPassword (studentNumber, oldPassword, newPassword) {
    return request({
        url: '/tab/account/check/password',
        method: 'post',
        params: {
            studentNumber: studentNumber,
            oldPassword: oldPassword,
            newPassword: newPassword
        }
    })
}

// 修改密码
export function modifyPassword (studentNumber, oldPassword, newPassword2) {
    return request({
        url: '/tab/account/modify/password',
        method: 'post',
        params: {
            studentNumber: studentNumber,
            oldPassword: oldPassword,
            newPassword: newPassword2
        }
    })
}
// 获取验证码
export function getCode(params) {
    return request({
        url: '/tab/sms/getCode',
        method: 'get',
        params: params
    })
}
// 获取验证码
export function updateUserPhone(data) {
    return request({
        url: '/tab/student/change/phone',
        method: 'post',
        data: data
    })
}
