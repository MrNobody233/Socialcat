import Vue from 'vue'
import VueRouter from 'vue-router'
import { Message } from 'element-ui'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  {
    path: '/index',
    name: 'index',
    component: () => import(/* webpackChunkName: "index" */ '@/views/home/index.vue'),
    children: [
      { name: 'welcome', path: 'welcome', component: () => import(/* webpackChunkName: "welcome" */ '@/views/home/welcome.vue') },
      { name: 'eat', path: 'eat', component: () => import(/* webpackChunkName: "eat" */ '@/views/home/eat.vue') },
      { name: 'menu', path: 'menu', component: () => import(/* webpackChunkName: "menu" */ '@/views/home/menu.vue') },
      { name: 'role', path: 'role', component: () => import(/* webpackChunkName: "role" */ '@/views/home/role.vue') },
      { name: 'users', path: 'users', component: () => import(/* webpackChunkName: "users" */ '@/views/home/users.vue') }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/login.vue')
  },
  {
    path: '/lock',
    name: 'lock',
    component: () => import(/* webpackChunkName: "lock" */ '@/views/lock/lock.vue')
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, form, next) => {
  if (to.path === '/login') return next()
  // 获取token
  const userInfo = JSON.parse(localStorage.getItem('UserInfo'))
  const token = userInfo.token
  const isLock = JSON.parse(localStorage.getItem('IsLock'))

  // 如果 token 是空值，则返回login页面
  if (!token) {
    Message.warning('先去登录吧')
    return next('/login')
  }

  if (isLock && to.path !== '/lock') {
    Message.warning('请输入密码！')
    next('/lock')
  }
  next()
})

/* router.beforeEach((to, form, next) => {
  // 获取token
  const token = store.getters.token
  // 是否锁屏
  const isLock = store.state.isLock
  // 如果去 login页面 放行
  if (to.path === '/login') return next()

  // 如果 token 是空值，则返回login页面
  if (!token) {
    Message.info('先去登录吧')
    return next('/login')
  }
  // 如果开启锁屏了就无法跳转到其他页面
  if (isLock && to.path !== '/lock') {
    Message.warning('请输入密码！')
    next('/lock')
  }
  next()
}) */

export default router
