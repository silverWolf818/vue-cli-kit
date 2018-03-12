// initial state
const state = {
    count:3
};

// getters
const getters = {
    getCount:state => state.count
};

// mutations
const mutations = {
  increment(state) {
    state.count++
  }
};

// actions
const actions = {
  increment ({ commit }) {
    commit('increment')
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
