import Vue from 'vue'
import Vuex from 'vuex'
import test from './modules/test'
import app from './modules/app'
import project from './modules/project'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    test,
    app,
    project
  }
})
