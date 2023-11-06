import Vue from 'vue'
import VueRouter from 'vue-router'

// 登录
const LoginPage = () => import('../views/LoginPage.vue')

// 首页-文档
const HomeWork = () => import('../views/HomeWork/HomeWork.vue')
const FileChat = () => import('../views/HomeWork/FileChat.vue')

// 我的记录
const MyRecords = () => import('../views/MyRecords/MyRecords.vue')

// 个人中心
const Personal = () => import('../views/Personal/PersonalInfo.vue')


// end

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/HomeWork'
  },
  {
    path: '/LoginPage',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/HomeWork',
    name: 'HomeWork',
    component: HomeWork
  },
  {
    path: '/FileChat',
    name: 'FileChat',
    component: FileChat
  },
  {
    path: '/MyRecords',
    name: 'MyRecords',
    component: MyRecords
  },
  {
    path: '/Personal',
    name: 'Personal',
    component: Personal
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// // 路由守卫
// router.beforeEach((to, from, next) => {
//   // to 将要访问的路径
//   // from 代表从哪个路径跳转而来
//   // next 是一个函数，表示放行
//   //     next()  放行    next('/login')  强制跳转

//   if (to.path === '/LoginPage') return next()
//   // 其他页面则要有token才能放行 之后的网络请求中要拿这个token放入请求头中
//   const tokenStr = window.localStorage.getItem('token')
//   if (!tokenStr) return next('/LoginPage') /* 没有用else if */
//   router.app.$options.store.dispatch("getWebSocketURL")
//   next()
// })

export default router
