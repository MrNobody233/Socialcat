export default {
  methods: {
    quit () {
      // 打开loading动画
      this.fullscreenLoading = true
      setTimeout(() => {
        // 关闭loading动画
        this.fullscreenLoading = true
        // 清除本地数据
        window.localStorage.clear()
        // 跳转到登录页面
        this.$router.push('/login')
        this.$message.info('退出登录')
      }, 1000)
    }
  }
}
