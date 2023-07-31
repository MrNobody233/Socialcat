<template>
  <div class="loginContainer">
    <div class="loginBox">
      <div class="title">登陆</div>
      <div class="loginInput">
        <el-input @keyup.enter.native="login()" placeholder="请输入账号" clearable prefix-icon="el-icon-user-solid"
          v-model.trim="username">
        </el-input>
        <el-input @keyup.enter.native="login()" placeholder="请输入密码" clearable show-password prefix-icon="el-icon-lock"
          v-model.trim="password">
        </el-input>
        <el-button size="small" type="primary" @click="login" v-loading.fullscreen.lock="loading">登陆</el-button>
        <div class="loginBottom">
          <span @click="register"><a href="#">注册账号</a></span>
          <span style="font-size: 10px;">|</span>
          <span><a href="#">忘记密码</a></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { throttle } from 'lodash'
export default {
  name: 'myLogin',
  data () {
    return {
      username: 'admin',
      password: '123',
      loading: false
    }
  },
  methods: {
    login: throttle(function () {
      // 判断表单是否有数据，如果有就跳转首页，没有就弹出消息框提示用户
      if (!this.username || !this.password) {
        return this.$message.warning('请输入用户名和密码')
      } else if (this.username === 'admin' && this.password === '123') {
        // 打开loading动画
        this.loading = true
        // 延时1秒后触发
        setTimeout(() => {
          // 假装登陆成功，将用户数据存储到vuex中
          this.$store.commit('user/updateUserInfo', { token: 'xxx', userId: 123 })
          // 弹出对话框
          this.$message.success('登陆成功')
          // 跳转到首页
          this.$router.push('/index/welcome')
          // 关闭loading动画
          this.loading = false
        }, 1000)
      } else {
        return this.$message.error('账号或者密码错误')
      }
    }, 2000),
    register: throttle(function () {
      this.$message.info('当前系统未开启注册功能QWQ')
    }, 2000)
  }
}
</script>

<style lang="less" scoped>
.loginContainer {
  height: 100%;
  background: #d6e9ff;

  .loginBox {
    width: 400px;
    height: 300px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      margin-top: 20px;
      font-size: 22px;
    }

    .loginInput {
      width: 60%;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      margin-top: 10px;

      .el-button {
        width: 100%;
      }
    }

    .loginBottom {
      width: 100%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
}
</style>
