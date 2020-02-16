import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
let routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: () => import('@/pages/tabbar/index')
  },
  {
    path: '/classify/goodsList',
    component: () => import('@/pages/goods/goods-list')
  },
  {
    path: '/classify',
    component: () => import('@/pages/tabbar/classify')
  },
  {
    path: '/cart',
    component: () => import('@/pages/tabbar/cart')
  },
  {
    path: '/my',
    component: () => import('@/pages/tabbar/my')
  },
  {
    path:'/my/information',
    component: () => import('@/pages/my/information')
  },
  {
    path:'/my/changeName',
    component: () => import('@/pages/my/changeName')
  },
  {
    path:'/my/changeTel',
    component: () => import('@/pages/my/changeTel')
  },
  {
    path:'/my/changePwd',
    component: () => import('@/pages/my/changePwd')
  },
  {
    path:'/my/setting',
    component: () => import('@/pages/my/setting')
  },
  {
    path:'/my/feedback',
    component: () => import('@/pages/my/feedback')
  },
]
let router = new Router({routes});
router.beforeEach((to, from, next) => {
  console.log(from.path,'to', to.path)
  next();
})
export default router;
