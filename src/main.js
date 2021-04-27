import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入Element
import ElemntUI from 'element-ui'
// 引入Element 的主题文件
// import 'element-ui/lib/theme-chalk/index.css'
// 引入自定义的全局样式文件
import './styles/index.scss'

// 将Element 注册为Vue插件
Vue.use(ElemntUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
