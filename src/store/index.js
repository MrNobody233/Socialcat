import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 是否锁屏
    isLock: JSON.parse(localStorage.getItem('IsLock')) || false
  },
  getters: {
    token (state) {
      // 获取user模块中的token
      return state.user.userInfo.token
    }
  },
  mutations: {
    setLock (state, val) {
      localStorage.setItem('IsLock', val)
      state.isLock = val
    }
  },
  actions: {
  },
  modules: {
    user
  }
})
