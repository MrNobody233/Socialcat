<template>
  <div class="container">
    <div class="phoneBox">
      <div class="left">
        <span>登录名称</span>
        <span>用户名称</span>
        <span>部门</span>
        <span>手机号</span>
        <span>用户状态</span>
        <span>操作</span>
      </div>
      <div class="right">
        <span>{{ obj.username }}</span>
        <span>{{ obj.name }}</span>
        <span>{{ obj.department }}</span>
        <span>{{ obj.phone }}</span>
        <span> <el-switch active-color="#3c8dbc" v-model="list.userStatus" @change="setUserStatus
          "></el-switch></span>
        <span>
          <el-button size="mini" icon="el-icon-edit" style="margin-right: 10px;"
            @click="openDialog('编辑', obj)">编辑</el-button>
          <el-popconfirm title="确定删除吗？" @confirm="removeUser(obj.id)">
            <el-button icon="el-icon-delete" slot="reference" size="mini" type="danger">删除</el-button>
          </el-popconfirm>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    obj: {
      type: Object
    }
  },
  data () {
    return {
      list: {}
    }
  },
  mounted () {
    this.list = { ...this.obj }
  },
  methods: {
    // 删除用户
    removeUser (id) {
      this.$emit('removeUser', id)
    },
    // 打开对话框
    openDialog (type, obj) {
      this.$emit('openDialog', type, obj)
    },
    setUserStatus (val) {
      console.log(val)
    }

  }
}
</script>

<style lang="less" scoped>
.container {
  display: none;
}

@media screen and (max-width: 572px) {
  .container {
    display: block;
  }
}

.phoneBox {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 2px solid #f5f5f5;
  margin: 10 auto;

  .left {

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
  }

  .left {
    width: 40%;
  }

  .right {
    margin-left: 10px;
    flex: 1;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: flex-start;
  }

  .left span {
    margin: 5px 0;
    font-size: 13px;
    font-weight: 700;
    color: #676a6c;
  }

  .right span {

    margin: 5px 0;
    font-size: 13px;
    color: #676a6c;
  }
}
</style>
