<template>
  <div class="indexAside">
    <!-- MrNobody -->
    <div class="nobody" :class="{ hide: isCollapse }">Nobody</div>
    <!-- 头像区域 -->
    <div v-if="!isCollapse" class="avatarBox">
      <div class="avatar">
        <img src="@/assets/img/avatar.jpg" alt="">
      </div>
      <div class="userBox">
        <div class="userBoxTop">
          Cat
        </div>
        <div class="userBoxBottom">
          <span><i style="color:#1c84c6;" class="el-icon-success"></i>在线</span>
          <span @click="quit" v-loading.fullscreen.lock="fullscreenLoading"><i style="color:#ed5565;"
              class="el-icon-circle-close"></i>
            注销</span>
        </div>
      </div>
    </div>
    <!-- 如果折叠了就显示这个头像 -->
    <div class="anotherAvatar" v-else>
      <img src="@/assets/img/avatar.jpg" alt="">
    </div>
    <!-- 菜单栏 -->
    <el-menu :collapse="isCollapse" router default-active="2" class="el-menu-vertical-demo" background-color="#2f4050"
      text-color="#a7b1c2" :collapse-transition="false" active-text-color="#fff">
      <el-menu-item index="1" route="/index/welcome">
        <i class="el-icon-s-home"></i>
        <span slot="title">welcome</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-tools"></i>
          <span>系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" route="/index/users">用户管理</el-menu-item>
          <el-menu-item index="1-2" route="/index/role">角色管理</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group>
          <el-menu-item index="1-3" route="/index/menu">菜单管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">系统监控</span>
      </el-menu-item>
      <el-menu-item index="4" route="/index/eat">
        <i class="el-icon-setting"></i>
        <span slot="title">系统工具</span>
      </el-menu-item>
      <el-menu-item index="5" route="/index/eat">
        <i class="el-icon-chicken"></i>
        <span slot="title">给我掰点</span>
      </el-menu-item>
      <el-menu-item index="6" route="/index/eat">
        <i class="el-icon-potato-strips"></i>
        <span slot="title">吃吃吃吃</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import loginMixins from '@/mixins/loginMixins'
export default {
  name: 'indexAside',
  mixins: [loginMixins],
  props: {
    isCollapse: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      fullscreenLoading: false
    }
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
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
</style>
