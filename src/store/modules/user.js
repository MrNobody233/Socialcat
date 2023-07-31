
export default {
  namespaced: true,
  state () {
    return {
      userInfo: JSON.parse(localStorage.getItem('UserInfo')) || {}
    }
  },
  mutations: {
    updateUserInfo (state, obj) {
      state.userInfo = obj
      // 本地存储
      localStorage.setItem('UserInfo', JSON.stringify(obj))
    }
  },
  getters: {
  }
}
