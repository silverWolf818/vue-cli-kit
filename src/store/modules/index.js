import { INITMENU } from '../mutation-types'
import { menu } from  '../../service/api'
// initial state
const state = {
  menu:[]
};

// getters
const getters = {

};

// mutations
const mutations = {
  [INITMENU](state,payload){
    state.menu = payload;
  }
};

// actions
const actions = {
  initMenu( { commit } ,payload) {
    menu({},true).then(res => {
      commit(INITMENU ,res);
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
