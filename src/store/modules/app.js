import { queryMenu } from "../../service/api"
// initial state
const state = {
  isCollapsed: false,
  active:'',
  subActive:'',
  openName:'',
  menu:[],
  subMenu:[],
  step1:'',
  step2:'',
  step3:'',
};

// getters
const getters = {

};

// mutations
const mutations = {
  initMenu(state,param){
    console.log(param);
    state.menu = param;
  },
  changeSubMenu(state,param){
    state.subMenu = state.menu.filter(item => item.menuCode === param)[0].subMenus;
  }
};

// actions
const actions = {
  initMenu({ commit }){
    queryMenu({ method:'GET' }).then((res)=>{
      commit('initMenu',res);
    });
  },
  changeSubMenu({ commit },param){
    commit('changeSubMenu',param);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
}
