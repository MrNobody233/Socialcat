import request from '@/utils/request'

// 获取用户列表
export const getUser = () => {
  return request.get('/user')
}
// 新增用户列表
export const addUser = (obj) => {
  return request.post('/user', obj)
}
// 修改用户列表
export const editUser = (id, obj) => {
  return request.put(`/user/${id}`, obj)
}
// 删除用户列表
export const delUser = (id) => {
  return request.delete(`/user/${id}`)
}

// 修改用户状态
export const setUserStatus = (id, userStatus) => {
  return request.patch(`/user/${id}`, {
    userStatus: userStatus
  })
}
