import { request } from "./request";

// 获取学生课程
export function getCourseList() {
  return request({
    url: '/tab/homework/getStudentCourseList',
    method: 'get',
  })
}

// 获取作业列表
export function getHomeworkList(params) {
  return request({
    url: '/tab/homework/list/v2',
    method: 'get',
    params: params
  })
}

// 获取作业详情
export function getHomeworkInfo(params) {
  return request({
    url: '/tab/homework/getGuidingPracticeDetail',
    method: 'get',
    params: params
  })
}
// 全部已读
export function readAll(params) {
  return request({
    url: '/tab/notice/student/readAll',
    method: 'get',
    params: params
  })
}
// 提交作业
export function submitHomework(data) {
  return request({
    url: '/tab/homework/submitGuidingPractise',
    method: 'post',
    data: data
  })
}

// 获取学生答案
export function getMyGuidingPractise(params) {
  return request({
    url: '/tab/homework/getMyGuidingPractise',
    method: 'get',
    params: params
  })
}

// 获取作品详情
export function getWorksShowInfoe(params) {
  return request({
    url: '/tab/teach/activity/get/works/show/detail',
    method: 'get',
    params: params
  })
}

// 获取所有作品
export function getWorksShowAll(params) {
  return request({
    url: '/tab/teach/activity/get/works/show',
    method: 'get',
    params: params
  })
}

// 提交作品展示
export function submitWorksShow(data) {
  return request({
    url: '/tab/teach/activity/submit/works/show',
    method: 'post',
    data: data
  })
}

// 作品点赞
export function likes(params) {
  return request({
    url: '/tab/teach/activity/add/report',
    method: 'get',
    params: params
  })
}
// 检查是否可以跳转去查看详情
export function isJump(params) {
  return request({
    url: '/web/common/check/workOrTestSkip',
    method: 'get',
    params: params
  })
}