// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './assets/js/http.js'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '@/mock/mocks'
import test from 'ty-vue-component-base1'

Vue.config.productionTip = false
window.axios = axios
Vue.use(iView)
Vue.use(test)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
