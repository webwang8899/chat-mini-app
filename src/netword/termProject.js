import { request } from "./request";

// 成员分工列表
export function partList(params) {
    return request ({
        url: '/tab/project/group/work',
        method: 'get',
        params: params
    })
}
// 保存成员分工
export function savePart(data) {
    return request ({
        url: '/tab/project/group/save/work',
        method: 'post',
        data: data
    })
}
// 提交记录
export function submitRecored(params) {
    return request ({
        url: '/tab/project/group/submit/list',
        method: 'get',
        params: params
    })
}
//获取小组项目id
export function getGroupId(params) {
    return request ({
        url: '/tab/project/group/info',
        method: 'get',
        params: params
    })
}
