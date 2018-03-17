// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import iView from 'iview'
import lodash from 'lodash'
import moment from 'moment'
import './assets/css/layout.scss'
import 'iview/dist/styles/iview.css'
import './mock/mocks'

Vue.config.productionTip = false
window.moment = moment
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
