<template>
  <div id="home">
    <el-container v-loading="loading">
      <!-- 左边 -->
      <el-aside :width="isCollapse ? '65px' : '200px'" :style="{ display: isShowAside }">
        <indexAside :isCollapse="isCollapse"></indexAside>
      </el-aside>

      <el-container>
        <!-- 头部 -->
        <el-header height="50px">
          <indexHeader :isCollapse="isCollapse" @toggleCollapse="toggleCollapse" @openAside="openAside"></indexHeader>
        </el-header>
        <!-- 主体 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
  <!-- 痛痛快快拉屎 -->
</template>

<script>
import indexHeader from '@/components/index/indexHeader.vue'
import indexAside from '@/components/index/indexAside.vue'
export default {
  components: { indexHeader, indexAside },
  name: 'myHome',
  data () {
    return {
      // 是否折叠
      isCollapse: false,
      // 加载动画
      loading: false,
      // 是否显示侧边栏
      isShowAside: ''
    }
  },
  methods: {
    // 触发折叠事件
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    },
    // 打开侧边栏
    openAside (val) {
      if (val) {
        this.isShowAside = 'block'
      } else {
        this.isShowAside = 'none'
      }
    }
  },
  created () {
  },
  mounted () {
    window.onresize = () => {
      return (() => {
        this.$nextTick(() => {
          if (window.innerWidth >= 700) {
            this.isShowAside = 'block'
          } else {
            this.isShowAside = 'none'
          }
        })
      })()
    }
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        console.log(val)
      },
      // 深度观察监听
      deep: true
    }
  }
}
</script>

<style lang="less" scoped>
#home {
  height: 100%;

  .el-container {
    height: 100%;
  }

  .el-header {
    background-color: #3c8dbc;
    color: #333;
  }

  /*   @media screen and(max-width: 700px) {
    .el-aside {
      display: none;
    }
  } */

  .el-aside {
    overflow-x: hidden;
    background-color: #2f4050;
    color: #333;
    text-align: center;

    .nobody {
      height: 50px;
      background: #367fa9;
      color: #fff;
      font-size: 20px;
      text-align: center;
      line-height: 50px;
    }

    .hide {
      display: none;
    }

    .avatarBox {
      margin: 10px auto;
      width: 100%;
      height: 75px;
      display: flex;
      align-items: center;
      justify-content: center;

      .avatar {
        img {
          width: 45px;
          height: 45px;
          border-radius: 50%;
        }
      }
    }

    .anotherAvatar {
      margin-top: 10px;
      width: 65px;
      height: 65px;

      img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
      }
    }

    .userBox {
      height: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      margin-left: 15px;

      .userBoxTop {
        font-weight: 600;
        color: #fff;
        font-size: 12px;
      }

      .userBoxBottom {
        font-size: 12px;
        color: #fff;

        span {
          margin-right: 9px;
        }

        span:nth-child(2) {
          margin-right: 5px;
          cursor: pointer;
        }
      }
    }

    .el-menu {
      border: none;
    }
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
}
</style>
