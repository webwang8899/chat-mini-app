import { request } from "./request";

// webSocketURL
export function webSocketURL(params) {
    return request ({
        url: '/web/config/init',
        method: 'get',
        params: params
    })
}
// 学生抢答
export function studentAnswerAsk(data) {
    return request ({
        url: '/web/teach/lesson/answerAsk',
        method: 'post',
        data: data
    })
}
// 判断学生手动能否抢答
export function checkStudentAnswerAsk(data) {
    return request ({
        url: '/web/teach/lesson/check/answerAsk',
        method: 'post',
        data: data
    })
}