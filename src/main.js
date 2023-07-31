import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 按需引入element ui
import '@/utils/elementui.js'
// 引入全局样式
import '@/assets/css/common.css'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
