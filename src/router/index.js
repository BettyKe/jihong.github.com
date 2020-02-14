import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/tabbar/index'
import classify from '@/pages/tabbar/classify'
import cart from '@/pages/tabbar/cart'
import my from '@/pages/tabbar/my'
import information from '@/pages/my/information'
import goodsList from '@/pages/goods/goods-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: index
    },
    {
      path: '/classify/goodsList',
      component: goodsList
    },
    {
      path: '/classify',
      component: classify
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/my',
      component: my
    },
    {
      path:'/my/information',
      component: information
    }
  ]
})
