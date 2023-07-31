<template>
  <div id="lockContainer" v-loading="lockLoading">
    <div class="mainBox">
      <!-- 当前时间 -->
      <div class="currentTime ">{{ sday }}</div>
      <!-- 用户名称 -->
      <div class="userName">CAT</div>
      <!-- 对话框 -->
      <div class="iptContainer">
        <img src="@/assets/img/avatar.jpg" alt="">
        <div class="inputBox">
          <div class="seizeASeatBox"></div>
          <input type="password" placeholder="密码" v-model.trim="lockPassword" @keyup.enter="goIndex">
          <i @click="goIndex" class="el-icon-right"></i>
        </div>
      </div>
      <!-- 退出重新登陆 -->
      <div class="lockBottom">
        <span>系统锁屏,请输入密码登陆</span>
        <span> <el-link @click="quit" v-loading.fullscreen.lock="fullscreenLoading" type="primary">退出重新登陆</el-link></span>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import loginMixins from '@/mixins/loginMixins'
import { throttle } from 'lodash'
export default {
  mixins: [loginMixins],
  name: 'lockScreen',
  data () {
    return {
      timeId: null,
      sday: '',
      lockLoading: false,
      fullscreenLoading: false,
      lockPassword: ''
    }
  },
  methods: {
    goIndex: throttle(function () {
      // 如果表单为空则弹出消息提示用户输入密码
      if (this.lockPassword === '') {
        return this.$message.warning('请输入密码')
      } else if (this.lockPassword === '123') {
        this.$store.commit('setLock', false)
        this.$router.push('/index')
      } else {
        this.$message.warning('请输入正确密码')
      }
    }, 1000)
  },
  created () {
    this.lockLoading = true
    setTimeout(() => {
      this.lockLoading = false
    }, 1000)
    // 当前时间
    this.timeId = setInterval(() => {
      this.sday = dayjs().format('HH:mm:ss')
    }, 1000)
    localStorage.setItem('IsLock', true)
  },
  // 组件销毁前清除定时器
  beforeDestroy () {
    clearTimeout(this.timeId)
  }
}
</script>

<style lang="less" scoped>
#lockContainer {
  width: 100%;
  height: 100%;
  background: #d2d6de;

  .mainBox {
    width: 400px;
    height: 320px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    flex-direction: column;

    // background: #fff;
    .currentTime {
      color: #fff;
      font-size: 60px;
      display: inline-block;
      text-align: center;
      font-family: 'Open Sans', sans-serif;
      font-weight: 300;
    }

    .userName {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 14px;
      line-height: 1.42857143;
      color: #333;
      font-weight: 600;
      margin-top: 60px;
    }

    .iptContainer {
      display: flex;
      height: 70px;
      width: 80%;
      // background: #fff;
      align-items: center;
      position: relative;

      img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 3px solid #fff;
        z-index: 1;
      }

      .inputBox {
        width: 230px;
        height: 34px;
        right: 23px;
        position: absolute;
        background: #fff;
        display: flex;
        align-items: center;

        .seizeASeatBox {
          width: 10px;
          height: 100%;
        }

        input {
          padding: 0;
          width: 190px;
          height: 100%;
          outline: none;
          border: none;
        }

        i {
          font-weight: bold;
          cursor: pointer;
        }
      }
    }

    .lockBottom {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;

      span:nth-child(1) {
        color: #737373;
        font-size: 10px;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
