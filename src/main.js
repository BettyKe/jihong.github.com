// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import '@/style/normalize.less'
import '@/style/style.less'
import imageTool from './js/imageTool.js'
import { Area, Popup, Toast, List, Lazyload, Swipe, SwipeItem, Calendar, Picker, Dialog,Tab, Tabs, } from 'vant';
import router from './router'
import store from "./store/index"
import 'lib-flexible'
import transitionBox from '@/components/transition-box'
import headerBox from '@/components/header-box'
import App from './App'

Vue.config.productionTip = false  

Vue.component('transitionBox',transitionBox)
Vue.component('headerBox',headerBox)
Vue.use(imageTool)
Vue.use(Area);
Vue.use(Popup);
Vue.use(Toast);
Vue.use(List)
.use(Lazyload)
.use(Swipe)
.use(SwipeItem)
.use(Calendar)
.use(Picker)
.use(Dialog)
.use(Tab)
.use(Tabs)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
