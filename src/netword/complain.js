import { request } from "./request";
// 添加考勤申诉课程
export function addComCourse(params){
    return request({
      url:'/tab/register/appeal/selectRegister',
      method: 'get',
      params: params
    })
}
// 发起申诉
export function submitCom(data){
    return request({
      url:'/tab/register/appeal/create',
      method: 'post',
      data: data
    })
}
// 申诉记录
export function comRecord(data){
    return request({
      url:'/tab/register/appeal/registerList',
      method: 'post',
      data: data
    })
}
// 查看申诉记录
export function readComRecord(params){
    return request({
      url:'/tab/register/appeal/details',
      method: 'get',
      params: params
    })
}
