import { INITMENU,USERINFO,CRUMBINFO } from '../mutation-types'
import { menu,user } from  '../../service/api'

// initial state
const state = {
  menu:[],
  user:{},
  openNames:'',
  activeName:'',
  active:'',
  step:[{
    name:'我的首页'
  },{
    name:''
  },{
    name:''
  }],
  temp:''
};

// getters
const getters = {
  getOpenNames:state => state.openNames,
  getActiveName: state => state.activeName,
  getMenu:state => state.menu,
  getUser:state => state.user,
  getCrumb:state => state.step

};

// mutations
const mutations = {
  [INITMENU](state,payload){
    let activeName = sessionStorage.getItem('activeName');
    state.menu = payload;
    state.activeName = activeName ? activeName : payload[0].subMenus[0].menuCode;
    changeMenu();
  },
  [USERINFO](state,payload){
    state.user = payload;
  },
  [CRUMBINFO](state,payload){
    state.activeName = payload;
    changeMenu();
  }
};

// actions
const actions = {
  initMenu( { commit } ,payload) {
    menu().then(res => {
      commit(INITMENU ,res);
      payload.$nextTick(()=> {
        payload.$refs.menu.updateOpened();
        payload.$refs.menu.updateActiveName();
      });
    });
  },
  crumbInfo( { commit } ,payload) {
    commit(CRUMBINFO ,payload);
  },
  userInfo( { commit } ){
    user().then(res => {
      commit(USERINFO ,res);
    });
  }
};

function changeMenu(){
    queryCode(state.menu,'menuCode',state.activeName);//查询当前菜单信息
    state.step[2].name = state.temp.menuName;//面包屑三级
    queryCode(state.menu,'autoId',state.temp.parentId);//查询当前父级节点菜单信息
    state.step[1].name = state.temp.menuName;//面包屑二级
    state.openNames = state.temp.menuCode;//当前展开的菜单
}

function queryCode(menu,code,active){
  menu.forEach(item => {
    if(item[code] === active){
      state.temp = item;
      return item;
    }else if(item.subMenus.length > 0){
      queryCode(item.subMenus,code,active);
    }
  });
}

export default {
  state,
  getters,
  actions,
  mutations
}
