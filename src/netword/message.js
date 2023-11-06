import { request } from "./request";

// 获取学年列表
export function getMsgList(params) {
  return request({
      url: '/tab/notice/studyPackageNotice',
      method: 'get',
      params: params
  })
}

// 标记消息已读
export function msgClick(params) {
  return request({
      url: '/tab/notice/update/num',
      method: 'get',
      params: params
  })
}
// 消息弹出
export function messagePop(data) {
    return request ({
        url: '/tab/manage/message/pop',
        method: 'post',
        data: data
    })
}