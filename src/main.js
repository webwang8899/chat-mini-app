import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts';
import './utils/preventReClick' //防多次点击，重复提交
import './plugins/vant' // 导入vant全局组件配置
// 引入全部样式
import 'vant/lib/index.less';
import '@vant/touch-emulator';

// import vConsole from './utils/vconsole'
// Vue.use(echarts)

// iconfont
import '@/assets/iconfont/iconfont.css'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
