// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import axios from './assets/js/http.js'
import iView from 'iview'
import lodash from 'lodash'
import moment from 'moment'
import './assets/css/layout.scss'
import 'iview/dist/styles/iview.css'
import './mock/mocks'
import conf from './assets/js/config.js'

console.log(iView);

Vue.config.productionTip = false
window.axios = axios
window.moment = moment
window.conf = conf
window._ = lodash
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
