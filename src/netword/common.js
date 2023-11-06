// import {
// 	get,
// 	post,
// 	postDisplay
// } from './http'
// const api = {
// 	// /web/file/upload/getTemporaryInfo 获取oss上传临时凭证
// 	getTemporaryInfo: data => get("file/upload/getTemporaryInfo", data),
// 	// /web/file/alicodec/mp4 阿里云视频转码
// 	alicodecMedia: data => get("file/alicodec/media", data,{isHideLoading:true}),
// 	// /web/file/alicodec/job/detail 视频转码进度查询接口
// 	alicodecPer: data => get("file/alicodec/job/detail", data,{isHideLoading:true}),

// 	// /web/file/ossfile/metadata 阿里云文件Meta信息获取(文件大小)
// 	ossfileMeta: data => get("file/ossfile/metadata", data,{isHideLoading:true}),
// }
// export default api
import { request } from "./request";

// /web/file/upload/getTemporaryInfo 获取oss上传临时凭证
export function getTemporaryInfo(params) {
  return request({
      url: `/tab/file/upload/getTemporaryInfo?ios=' + '${new Date().getTime() + Math.floor(Math.random() * 10000)}'+'`,
      method: 'get',
      params: params
  })
}

// /web/file/alicodec/mp4 阿里云视频转码
export function alicodecMedia(params) {
  return request({
      url: '/tab/file/alicodec/media',
      method: 'get',
      params: params
  })
}
// /web/file/alicodec/job/detail 视频转码进度查询接口
export function alicodecPer(params) {
	return request({
		url: '/tab/file/alicodec/job/detail',
		method: 'get',
		params: params
	})
  }
  
// /web/file/ossfile/metadata 阿里云文件Meta信息获取(文件大小)
  export function ossfileMeta(params) {
	return request({
		url: '/tab/file/ossfile/metadata',
		method: 'get',
		params: params
	})
  }