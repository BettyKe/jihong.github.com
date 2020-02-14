import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/tabbar/index'
import classify from '@/pages/tabbar/classify'
import cart from '@/pages/tabbar/cart'
import my from '@/pages/tabbar/my'
import information from '@/pages/my/information'

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
      path: '/classify',
      component: classify
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/my',
      name: 'my',
      component: my,
      children:[
        {
          path:'/information',
          name: 'information',
          component:information
        }
      ]
    }
  ]
})
