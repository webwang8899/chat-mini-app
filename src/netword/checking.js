import { request } from "./request";

// 查询考勤列表
export function registerList(params) {
    return request ({
        url: '/tab/course/find/register/list',
        method: 'get',
        params: params
    })
}

// 学生考勤签到
export function studentRegister(data) {
    return request ({
        url: '/tab/course/update/student/register',
        method: 'post',
        data: data
    })
}