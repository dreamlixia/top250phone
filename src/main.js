// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import App from './App.vue'
import router from './router/index.js'

import 'mint-ui/lib/style.css'
import './main.scss'


Vue.config.productionTip = false

Vue.use(MintUI)
//router.beforeEach( (to, from, next) => {
//	console.log("to",to)
//	console.log("from",from)
//	next()
//})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
