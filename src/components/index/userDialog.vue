<template>
  <el-dialog @close="closeDialog" title="新增用户" :visible.sync="dialogVisible" width="50%">
    <el-form ref="form" :model="form" label-width="100px" :rules="rules">
      <el-form-item label="登陆名称:" prop="username">
        <el-input v-model="form.username" size="small"></el-input>
      </el-form-item>
      <el-form-item label="用户名称:" prop="name">
        <el-input v-model="form.name" size="small"></el-input>
      </el-form-item>
      <el-form-item label="所在部门:" prop="department">
        <el-select v-model="form.department" placeholder="科研部" size="small">
          <el-option label="研发一部" value="研发一部"></el-option>
          <el-option label="研发二部" value="研发二部"></el-option>
          <el-option label="人事部" value="人事部"></el-option>
          <el-option label="财务部" value="财务部"></el-option>
          <el-option label="工程部" value="工程部"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="手机号:" prop="phone">
        <el-input v-model="form.phone" size="small" oninput="value=value.replace(/[^0-9]/g,'')"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="upload">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { addUser, editUser } from '@/api/user'
export default {
  name: 'userDialog',
  data () {
    return {
      // 是否打开对话框
      dialogVisible: false,
      // 表单
      form: {
        department: '',
        name: '',
        phone: '',
        username: '',
        userStatus: true,
        type: ''
      },
      // 表单验证
      rules: {
        name: [
          { required: true, message: '请输入用户名称', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        username: [
          { required: true, message: '请输入登陆名称', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入用户电话号码', trigger: 'blur' },
          { min: 11, max: 11, message: '必须输入正确号码', trigger: 'blur' }
        ],
        department: [
          { required: true, message: '必须选择部门 ', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    // 初始化
    init (type, val) {
      // 打开对话框
      this.dialogVisible = true
      this.type = type
      // 如果是编辑就给表单赋值
      if (type === '编辑') {
        this.$nextTick(() => {
          this.form = { ...val }
          this.$refs.form.resetFields()
        })
      } else {
        this.$nextTick(() => {
          this.$refs.form.resetFields()
        })
      }
    },
    // 上传
    upload () {
      // 判断表单校验规则，如果正确就发送请求
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          // 如果类型是新增
          if (this.type === '新增') {
            const res = await addUser(this.form)
            if (res.status === 201) {
              this.dialogVisible = false
              this.$emit('updateList')
              this.$message.success('添加用户成功')
            }
          } else {
            // 如果类型是编辑
            const res = await editUser(this.form.id, this.form)
            if (res.status === 200) {
              this.dialogVisible = false
              this.$emit('editList')
              this.$message.success('编辑用户成功')
            }
          }
        } else {
          return false
        }
      })
    },
    // 关闭对话框触发事件
    closeDialog () {
      // 关闭对话框清空表单数据
      this.$nextTick(() => {
        this.$refs.form.resetFields()
      })
    }
  }

}
</script>

<style lang="less" scoped>
.el-select {
  width: 100%;
}
</style>
