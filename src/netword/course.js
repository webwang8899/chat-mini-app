import { request } from "./request";

// 获取学年列表
export function getSelections() {
  return request({
    url: '/tab/course/find/schoolYear/selections',
    method: 'get',
  })
}

// 获取智学包列表
export function getCourseList(data) {
  return request({
    url: '/tab/course/find/course/list/by/yearAndKey',
    method: 'post',
    data: data
  })
}
// 学生提交测验
export function postQuizSave(data) {
  return request({
    url: '/web/student/quiz/save',
    method: 'post',
    data: data
  })
}
// 系统通知列表
export function postManagelist(data) {
  return request({
    url: '/tab/manage/message/list',
    method: 'post',
    data: data
  })
}
// 查询学生端测验详情
export function getQuizDetail(params) {
  return request({
    url: '/web/student/quiz/detail',
    method: 'get',
    params: params
  })
}
// 排序
export function getTopCourse(params) {
  return request({
    url: '/tab/course/top/current/course',
    method: 'get',
    params: params
  })
}
// 获取智学包列表
export function getCourseTree(params) {
  return request({
    url: '/tab/studyPackage/find/textbook/tree', // 
    method: 'get',
    params: params
  })
}

// 获取智学包内容
export function getCoursePPT(params) {
  return request({
    url: '/tab/ppt/queryPptImageListInTab',
    method: 'get',
    params: params
  })
}

// 获取智学包附件列表
export function getCourseAnnex(params) {
  return request({
    url: '/tab/ppt/list',
    method: 'get',
    params: params
  })
}

// 获取智学包ppt动画阿里云信息
export function getPreviewPptdh(data) {
  return request({
    url: '/tab/studyPackage/preview/studyPackage/ppt',
    method: 'post',
    params: {
      path: data
    }
  })
}

// 获取学生随堂测详情数据
export function getQuestionList(params) {
  return request({
    url: '/tab/homework/getHomeworkQuestionList',
    method: 'get',
    params: params
  })
}

// 获取学生作业详情数据
export function getIntestQuestionList(params) {
  return request({
    url: '/tab/homework/getIntestHomeworkQuestionList',
    method: 'get',
    params: params
  })
}
// 获取测试详情
export function getTestQuestionList(params) {
  return request({
    url: '/tab/homework/test/detail',
    method: 'get',
    params: params
  })
}

// 学生提交作业
export function submitHomework(params) {
  return request({
    url: '/tab/homework/submitHomework',
    method: 'post',
    data: params
  })
}

// 学生交卷后的批改结果
export function queryHomeworkCheckResult(params) {
  return request({
    url: '/tab/homework/queryHomeworkCheckResult',
    method: 'get',
    params: params
  })
}

// 获取课程简介
export function introduction(params) {
  return request({
    url: '/tab/course/find/course/introduction',
    method: 'get',
    params: params
  })
}

// 查询课时列表
export function courseList(params) {
  return request({
    url: '/tab/course/find/course/module/list',
    method: 'get',
    params: params
  })
}
// 交作业
export function submitWorks(data) {
  return request({
    url: '/tab/score/student/submit',
    method: 'post',
    data: data
  })
}
// 成绩列表
export function scoreList(data) {
  return request({
    url: '/tab/score/homeworkList',
    method: 'post',
    data: data
  })
}
// 选择课程
export function selectCourseTime(params) {
  return request({
    url: '/tab/score/class/list',
    method: 'get',
    params: params
  })
}
// 作业详情
export function detail(params) {
  return request({
    url: '/tab/score/homework/detail',
    method: 'get',
    params: params
  })
}
// 批阅和未批阅
export function isReadOver(params) {
  return request({
    url: '/tab/score/student/answer',
    method: 'get',
    params: params
  })
}
// 重新提交作业
export function reSubmitWorks(data) {
  return request({
    url: '/tab/score/student/reSubmit',
    method: 'post',
    data: data
  })
}

// 点击课程
export function courseContent(params) {
  return request({
    url: '/tab/course/find/course/content',
    method: 'post',
    data: params
  })
}
// 学期项目列表
export function projectList(params) {
  return request({
    url: '/tab/project/list',
    method: 'get',
    params: params
  })
}
// 学期项目详情
export function projectDetail(params) {
  return request({
    url: '/tab/project/contentList',
    method: 'get',
    params: params
  })
}

// 作业提交情况
export function submitStatus(params) {
  return request({
    url: '/tab/project/detail',
    method: 'get',
    params: params
  })
}
// 发布项目
export function projectPublish(data) {
  return request({
    url: '/tab/project/submit/answer',
    method: 'post',
    data: data
  })
}

// 通知列表
export function noticeList(data) {
  return request({
    url: '/tab/notice/student/list',
    method: 'post',
    data: data
  })
}
// 通知列表
export function noticeRead(params) {
  return request({
    url: '/tab/notice/student/read',
    method: 'get',
    params: params
  })
}
// 获取全部课程
export function currentSemester() {
  return request({
    url: '/tab/course/find/course/current/semester',
    method: 'get'
  })
}
// 获取未读的通知列表
export function unreadCount() {
  return request({
    url: '/tab/notice/unread/count',
    method: 'get'
  })
}
// 综合成绩
export function CompreScore(params) {
  return request({
    url: '/web/score/percent/find/student/score',
    method: 'get',
    params: params
  })
}
// 小组列表
export function GroupList(params) {
  return request({
    url: '/tab/group/list',
    method: 'get',
    params: params
  })
}
// 获取当前学生id
export function mineId(params) {
  return request({
    url: '/tab/group/my',
    method: 'get',
    params: params
  })
}
// 加入小组
export function joinGroup(data) {
  return request({
    url: '/tab/group/join',
    method: 'post',
    data: data
  })
}
// 退出小组
export function exitGroup(data) {
  return request({
    url: '/tab/group/quit',
    method: 'post',
    data: data
  })
}
// 测验列表
export function TestList(params) {
  return request({
    url: '/web/student/quiz/page',
    method: 'get',
    params: params
  })
}
// 查看成员分工

export function partDetail(params) {
  return request({
    url: '/tab/score/find/divide/work',
    method: 'get',
    params: params
  })
}
// 保存成员分工
export function savePartDetail(data) {
  return request({
    url: '/tab/score/save/divide/work',
    method: 'post',
    data: data
  })
}
// 修改成员分工
export function updataPartDetail(data) {
  return request({
    url: '/tab/score/update/divide/work',
    method: 'post',
    data: data
  })
}
// 更新学习次数
export function learnMonitorCount(data) {
  return request({
    url: '/tab/course/update/learnMonitorCount',
    method: 'post',
    data: data
  })
}
// 更新学习进度
export function learnMonitorProgress(data) {
  return request({
    url: '/tab/course/update/learnMonitorProgress',
    method: 'post',
    data: data
  })
}
// 查询提交记录
export function recodeDetail(params) {
  return request({
    url: '/tab/score/find/group/submit',
    method: 'get',
    params: params
  })
}

// 综合成绩版本2
export function totalScore(params) {
  return request({
    url: '/web/score/percent/find/student/score/v2',
    method: 'get',
    params: params
  })
}



