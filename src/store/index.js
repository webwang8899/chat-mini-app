import Vue from 'vue'
import Vuex from 'vuex'
import * as webSoketApi from "@/netword/webSoketInit";
import * as personalApi from "@/netword/personal";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
    badge: 0,
    isDefaultPassword: false,
    moduleId: "0",
    type: "0",
    webSocketURL: "",
    preemAnswerShow: false,
    // 题型
    MyAnswershow: false,
    MyAnswerid: '',
    MyAnswerObj: {},
    // 列表
    SqureList: []
  },
  getters: {
    getModuleId(state) {
      return state.moduleId
    },
    getType(state) {
      return state.type
    },
    webSocketURL(state) {
      return state.webSocketURL;
    },
    preemAnswerShow(state) {
      return state.preemAnswerShow;
    },
  },
  mutations: {
    // 打开题型弹框
    MyAnswerShow(state, data) {
      state.MyAnswershow = data
      console.log(state.MyAnswershow, 'state.MyAnswershow');
    },
    //题型弹框的id
    MyAnswerIdShow(state, data) {
      state.MyAnswerid = data
    },
    MyAnswerObjSave(state, data) {
      state.MyAnswerObj = JSON.parse(data)
    },
    // 更新列表
    TEXT_LIST(state, data) {
      state.SqureList = JSON.parse(data)
    },
    // 获取用户信息方法
    getUserInfo(state, data) {
      state.userInfo = data
      window.localStorage.setItem('userInfo', JSON.stringify(data))
    },
    // 获取消息数量
    getMsgBadge(state, data) {
      state.badge = data
    },
    // 修改是否使用默认密码
    changeDefaultPassword(state, data) {
      state.isDefaultPassword = data
    },
    changeModuleId(state, payload) {
      state.moduleId = payload
    },
    changeType(state, payload) {
      state.type = payload
    },
    getWebSocketURL(state, item) {
      state.webSocketURL = item;
    },
    preemAnswerShow(state, item) {
      state.preemAnswerShow = item;
    },
  },
  actions: {
    getWebSocketURL(ctx, item) {
      return new Promise((resolve, reject) => {
        webSoketApi.webSocketURL().then(res => {
          if (res.status) {
            ctx.commit('getWebSocketURL', res.data.webSocketURL)
            resolve(res)
          }
        }).catch(err => {
          reject()
        })
      })
    },
    getUserInfo(ctx, item) {
      return new Promise((resolve, reject) => {
        personalApi.getUserInfo().then(res => {
          if (res.status) {
            ctx.commit('getUserInfo', res.data)
            resolve(res)
          }
        }).catch(err => {
          reject()
        })
      })
    },
    getPreemAnswerShow({ commit }, item) {
      commit('preemAnswerShow', item)
    },
  },
  modules: {
  }
})
