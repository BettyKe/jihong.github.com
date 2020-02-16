import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
let routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/login',
    meta: {
      title: '登录',
      needLogin: false
    },
    component: () => import('@/pages/login/login')
  },
  {
    path: '/register',
    meta: {
      title: '注册',
      needLogin: false
    },
    component: () => import('@/pages/login/register')
  },
  {
    path: '/retrievePassword',
    meta: {
      title: '找回密码',
      needLogin: false
    },
    component: () => import('@/pages/login/retrievePassword')
  },
  {
    path: '/setPassword',
    meta: {
      title: '设置密码',
      needLogin: false
    },
    component: () => import('@/pages/login/setPassword')
  },
  {
    path: '/loginPhone',
    meta: {
      title: '登录手机号',
      needLogin: false
    },
    component: () => import('@/pages/login/loginPhone')
  },
  {
    path: '/index',
    meta: {
      title: '首页',
      needLogin: true
    },
    component: () => import('@/pages/tabbar/index')
  },
  {
    path: '/classify/search',
    meta: {
      title: '搜索',
      needLogin: true
    },
    component: () => import('@/pages/goods/search')
  },
  {
    path: '/classify/goodsList',
    meta: {
      title: '搜索列表',
      needLogin: true
    },
    component: () => import('@/pages/goods/goods-list')
  },
  {
    path: '/classify',
    meta: {
      title: '分类',
      needLogin: true
    },
    component: () => import('@/pages/tabbar/classify')
  },
  {
    path: '/cart',
    meta: {
      title: '购物车',
      needLogin: true
    },
    component: () => import('@/pages/tabbar/cart')
  },
  {
    path: '/my',
    meta: {
      title: '我的',
      needLogin: true
    },
    component: () => import('@/pages/tabbar/my')
  },
  {
    path:'/my/information',
    meta: {
      title: '个人资料',
      needLogin: true
    },
    component: () => import('@/pages/my/information')
  }
]
let router = new Router({routes});
router.beforeEach((to, from, next) => {
  console.log(from.path,'to', to.path)
  next();
})
export default router;
