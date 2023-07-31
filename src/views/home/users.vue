<template>
  <div class="userContainer">
    <el-card>
      <div class="cardTop">
        <el-button type="primary" size="small" icon="el-icon-plus" @click="openDialog('新增')">新增</el-button>
        <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
          :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed"
          :file-list="fileList">
          <el-button type="success" size="small" icon="el-icon-upload2"> 导入</el-button>
        </el-upload>
        <el-button type="info" size="small" icon="el-icon-download">导出</el-button>
      </div>
      <div class="cardMain">
        <el-table :data="userList" stripe style="width: 100%;    font-size: 10px; height: 100%;">
          <el-table-column align="center" type="index" label="#">
          </el-table-column>
          <el-table-column align="center" prop="username" label="登录名称">
          </el-table-column>
          <el-table-column align="center" prop="name" label="用户名称">
          </el-table-column>
          <el-table-column align="center" prop="department" label="部门">
          </el-table-column>
          <el-table-column align="center" prop="phone" label="手机号码" width="180">
          </el-table-column>
          <el-table-column align="center" prop="userStatus" label="用户状态">
            <template slot-scope="scope">
              <el-switch active-color="#3c8dbc" v-model="scope.row.userStatus"
                @change="(val) => statusChange(scope.row, val)"></el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="200px">
            <template slot-scope="scope">
              <el-button size="mini" icon="el-icon-edit" @click="openDialog('编辑', scope.row)"
                style="margin-right: 10px;">编辑</el-button>
              <el-popconfirm title="确定删除吗？" @confirm="removeUser(scope.row.id)">
                <el-button icon="el-icon-delete" slot="reference" size="mini" type="danger">删除</el-button>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
        <phoneTable v-for="(item, index) in userList" :obj="item" :key="index" @removeUser="removeUser"
          @openDialog="openDialog"></phoneTable>
      </div>
    </el-card>
    <userDialog ref="userDialog" @updateList="updateList" @editList="editList"></userDialog>
  </div>
</template>

<script>
import { getUser, delUser, setUserStatus } from '@/api/user'
export default {
  components: {
    userDialog: () => import('@/components/index/userDialog.vue'),
    phoneTable: () => import('@/components/index/phoneTable.vue')
  },
  name: 'myUser',
  data () {
    return {
      userList: [],
      fileList: []
    }
  },
  methods: {
    // 获取用户数据
    async getUser () {
      const res = await getUser()
      this.userList = res.data
    },
    // 打开对话框
    openDialog (type, val) {
      // 触发子组件事件
      this.$refs.userDialog.init(type, val)
    },
    // 更新列表
    updateList () {
      this.getUser()
    },
    editList () {
      this.getUser()
    },
    // 修改用户状态
    async statusChange (obj, val) {
      const res = await setUserStatus(obj.id, val)
      if (res.status === 200) {
        this.$message.success('修改成功')
      }
    },
    // 删除用户
    async removeUser (id) {
      const res = await delUser(id)
      if (res.status === 200) {
        this.getUser()
        this.$message.success('删除成功')
      }
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  },
  created () {
    this.getUser()
  }
}
</script>

<style lang="less" scoped>
.userContainer {
  height: 100%;

  .el-card {
    height: 95%;
    overflow: auto;
  }

  .cardTop {
    display: flex;

    .el-button {
      margin: 0 10px;
    }
  }

  .cardMain {
    margin-top: 20px;

    @media screen and (max-width: 572px) {
      .el-table {
        display: none;
      }
    }

  }
}
</style>
