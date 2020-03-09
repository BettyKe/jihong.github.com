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
    path: '/goods/goodsList',
    meta: {
      title: '搜索列表',
      needLogin: true
    },
    component: () => import('@/pages/goods/goods-list')
  },
  {
    path: '/goods/goodsDetail',
    meta: {
      title: '商品详情',
      needLogin: true
    },
    component: () => import('@/pages/goods/goods-detail')
  },
  {
    path: '/goods/storeIndex',
    meta: {
      title: '店铺首页',
      needLogin: true
    },
    component: () => import('@/pages/goods/storeIndex')
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
    path: '/order/checkout',
    meta: {
      title: '订单结算',
      needLogin: true
    },
    component: () => import('@/pages/order/checkout')
  },
  {
    path: '/order/pay',
    meta: {
      title: '支付',
      needLogin: true
    },
    component: () => import('@/pages/order/pay')
  },
  {
    path: '/order/wechatPay',
    meta: {
      title: '微信支付',
      needLogin: true
    },
    component: () => import('@/pages/order/wechatPay')
  },
  {
    path: '/order/payResult',
    meta: {
      title: '支付成功',
      needLogin: true
    },
    component: () => import('@/pages/order/payResult')
  },
  {
    path: '/order/logistics',
    meta: {
      title: '选择物流',
      needLogin: true
    },
    component: () => import('@/pages/order/logistics')
  },
  {
    path: '/order/addLogistics',
    meta: {
      title: '新建物流',
      needLogin: true
    },
    component: () => import('@/pages/order/addLogistics')
  },
  {
    path: '/order/addressList',
    meta: {
      title: '选择收货地址',
      needLogin: true
    },
    component: () => import('@/pages/order/addressList')
  },
  {
    path: '/order/editAddress',
    meta: {
      title: '编辑收货地址',
      needLogin: true
    },
    component: () => import('@/pages/order/editAddress')
  },
  {
    path: '/order/orderList',
    meta: {
      title: '订单列表',
      needLogin: true
    },
    component: () => import('@/pages/order/orderList')
  },
  {
    path: '/order/goodsOrderList',
    meta: {
      title: '订单汇总',
      needLogin: true
    },
    component: () => import('@/pages/order/goodsOrderList')
  },
  {
    path: '/order/orderDetail',
    meta: {
      title: '订单详情',
      needLogin: true
    },
    component: () => import('@/pages/order/orderDetail')
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
  },
  {
    path:'/my/collect',
    meta: {
      title: '我的收藏',
      needLogin: true
    },
    component: () => import('@/pages/my/collect')
  },
  {
    path:'/my/myBill',
    meta: {
      title: '我的账单',
      needLogin: true
    },
    component: () => import('@/pages/my/myBill')
  },
  {
    path:'/my/myAccount',
    meta: {
      title: '我的账户',
      needLogin: true
    },
    component: () => import('@/pages/my/myAccount')
  },
  {
    path:'/my/withdraw',
    meta: {
      title: '提现',
      needLogin: true
    },
    component: () => import('@/pages/my/withdraw')
  },
  {
    path:'/my/accountList',
    meta: {
      title: '提现列表',
      needLogin: true
    },
    component: () => import('@/pages/my/accountList')
  },
  {
    path:'/my/accountDetail',
    meta: {
      title: '提现明细',
      needLogin: true
    },
    component: () => import('@/pages/my/accountDetail')
  },
  {
    path:'/my/returnOrderDetail',
    meta: {
      title: '退货单详情',
      needLogin: true
    },
    component: () => import('@/pages/my/returnOrderDetail')
  },
  {
    path:'/my/addOrderDetail',
    meta: {
      title: '补充发货单详情',
      needLogin: true
    },
    component: () => import('@/pages/my/addOrderDetail')
  },
  {
    path:'/my/changeName',
    meta: {
      title: '修改昵称',
      needLogin: true
    },
    component: () => import('@/pages/my/changeName')
  },
  {
    path:'/my/changeTel',
    meta: {
      title: '修改绑定手机号',
      needLogin: true
    },
    component: () => import('@/pages/my/changeTel')
  },
  {
    path:'/my/changePwd',
    meta: {
      title: '修改密码',
      needLogin: true
    },
    component: () => import('@/pages/my/changePwd')
  },
  {
    path:'/my/setting',
    meta: {
      title: '设置',
      needLogin: true
    },
    component: () => import('@/pages/my/setting')
  },
  {
    path:'/my/page',
    meta: {
      title: '文章详情',
      needLogin: true
    },
    component: () => import('@/pages/my/page')
  },
  {
    path:'/my/feedback',
    meta: {
      title: '意见反馈',
      needLogin: true
    },
    component: () => import('@/pages/my/feedback')
  },
]
let router = new Router({routes});
router.beforeEach((to, from, next) => {
  // console.log(from,'to', to)
  next();
})
export default router;
