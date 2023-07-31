<template>
  <div class="headerContainer">
    <div class="headerLeft" @click="toggleCollapse">
      <i v-if="isCollapse" class="el-icon-s-unfold"></i>
      <i v-else class="el-icon-s-fold"></i>
    </div>

    <div class="headerLeftPhone" @click="openAside">
      <i class="el-icon-menu"></i>
    </div>

    <div class="headerRight">
      <ul>
        <li>
          <i class="el-icon-warning-outline"></i>
          <span>文档</span>
        </li>
        <li @click="goLock">
          <i class="el-icon-lock"></i>
          <span>锁屏</span>
        </li>
        <li @click="fullScreen">
          <i class="el-icon-full-screen"></i>
          <span>全屏</span>
        </li>
        <li>
          <img src="@/assets/img/avatar.jpg" alt="">
          <span>社畜猫</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'indexHeader',
  props: {
    isCollapse: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    // 折叠菜单栏
    toggleCollapse () {
      this.$emit('toggleCollapse')
    },
    // 全屏
    fullScreen () {
      const elem = document.documentElement
      if (!document.fullscreenElement && !document.mozFullScreenElement &&
        !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (elem.requestFullscreen) {
          elem.requestFullscreen()
        } else if (elem.mozRequestFullScreen) { // Firefox
          elem.mozRequestFullScreen()
        } else if (elem.webkitRequestFullscreen) { // Chrome, Safari and Opera
          elem.webkitRequestFullscreen()
        } else if (elem.msRequestFullscreen) { // IE/Edge
          elem.msRequestFullscreen()
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.mozCancelFullScreen) { // Firefox
          document.mozCancelFullScreen()
        } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
          document.webkitExitFullscreen()
        } else if (document.msExitFullscreen) { // IE/Edge
          document.msExitFullscreen()
        }
      }
    },
    // 点击后跳转到锁屏页面
    goLock () {
      this.$router.replace('/lock')
      this.$store.commit('setLock', true)
    },
    // 打开侧边栏
    openAside () {
      this.isOpenAside = !this.isOpenAside
      console.log(this.isOpenAside)
      // console.log(this.isOpenAside)
      this.$emit('openAside', this.isOpenAside)
    }
  }
}
</script>

<style lang="less" scoped>
.headerContainer {
  width: 100%;
  height: 100%;
  background: #3c8dbc;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .headerLeft,
  .headerLeftPhone {
    color: #fff;
    font-size: 20px;
    cursor: pointer;
  }

  .headerLeftPhone {
    display: none;
  }

  @media screen and (max-width:700px) {
    .headerLeft {
      display: none;
    }

    .headerLeftPhone {
      display: block;
    }
  }

  .headerRight {
    transition: all 1s ease;

    ul {
      width: 300px;
      display: flex;
      justify-content: space-around;

      li {
        cursor: pointer;
        color: #fff;
        font-size: 14px;

        img {
          vertical-align: middle;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          margin-right: 5px;
        }
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .headerRight {
      display: none;
    }
  }

}
</style>
