// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import iView from 'iview'
import lodash from 'lodash'
import moment from 'moment'
// import TreeTable from 'vue-table-with-tree-grid'
import './assets/css/theme.less'
import './assets/css/custom.less'

import plugin from './plugin'

Vue.config.productionTip = false
window.moment = moment
window._ = lodash
Vue.use(plugin)
Vue.use(iView)

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  if (to.matched.length === 0) {
    next('/');
  } else {
    next();
  }
});

router.afterEach(route => {
  iView.LoadingBar.finish();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
Vue.component('treeselect', VueTreeselect.Treeselect)
