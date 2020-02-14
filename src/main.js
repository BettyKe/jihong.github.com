// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Tabbar, TabItem} from 'mint-ui'
import '@/style/normalize.less'
import '@/style/style.less'
import router from './router'
import 'lib-flexible'
import App from './App'

Vue.config.productionTip = false  

Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name,TabItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
