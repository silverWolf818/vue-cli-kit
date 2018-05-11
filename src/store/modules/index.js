import { INITMENU2,CHANGESUBMENU,CHANGEITEM,RESET } from '../mutation-types'
import { menu2 } from '../../service/api'

// initial state
const state = {
  isCollapsed: false,
  activeNav:'',
  activeName:'',
  openName:'',
  menu:[],
  subMenu:[],
  step:[{
    menuName:'',
    menuUrl:'/'
  },{
    menuName:'',
    menuUrl:'/'
  },{
    menuName:'',
    menuUrl:'/'
  }],
  temp:''
};

const activeName = sessionStorage.getItem('activeName');

// getters
const getters = {
  getMenu2:state => state.menu,
  getSubMenu:state => state.subMenu,
  getOpenName:state => state.openName,
  getActiveName: state => state.activeName,
  getActiveNav:state => state.activeNav,
  getCrumbs:state => {
    if(state.menu.length){
      let active = state.activeName;
      let l1 = level1(active);
      let l2 = level2(active);
      let l3 = level3(active);

      console.log(l1);
    }
    // let data = [],
    //     id = '';
    // if(state.menu.length !== 0 && state.item1){
    //   state.step[0].name = state.menu.filter(item => item.menuCode === state.item1)[0].menuName;
    //   state.item2 && state.subMenu.forEach(value => {
    //     data = value.subMenus.filter(item => item.menuCode === state.item2)[0];
    //     if(data && value.autoId === data.parentId){
    //       state.step[1].name = value.menuName;
    //       state.step[1].route = '/';
    //       state.step[2].name = data.menuName;
    //       state.step[2].route = '/';
    //     }
    //   });
    //   return state.flag ? state.step.filter((item,index) => index === 0) : state.step;
    // }
  }
};

// mutations
const mutations = {
  INITMENU2(state,payload){
    state.menu = payload;
    state.activeName = activeName || '';
  },
  CHANGESUBMENU(state,payload){
    if(payload.initialize && activeName){//初始化执行
      payload.data = level1(activeName).menuCode;
    }
    //过滤左侧菜单
    state.subMenu = state.menu.filter(item => item.menuCode === payload.data)[0].subMenus;
    //激活头部导航
    state.activeNav = payload.data;
    //激活展开菜单
    state.openName = state.subMenu[0].menuCode;
    if(payload.initialize && activeName){//初始化执行
      state.openName = level2(activeName).menuCode
    }else{
      level1(state.activeName) === payload.data && (state.openName = level2(state.activeName).menuCode);
    }
  },
  CHANGEITEM(state,payload){
    //缓存点击菜单
    sessionStorage.setItem('activeName',payload);
    //激活头部导航
    state.activeNav = level1(payload).menuCode;
    //点击菜单赋值
    state.activeName = payload;
  },
  RESET(state,payload){
    sessionStorage.removeItem('activeName');
    state.openName = '';
    state.activeNav = '';
    state.activeName = '';
  }
};

// actions
const actions = {
  initMenu2({ commit },payload){
    menu2({}).then(res => {
      commit(INITMENU2,res);
      commit(CHANGESUBMENU,{
        data:res[0].menuCode,
        initialize:true
      });
      payload.$nextTick(()=> {
        payload.$refs.sub.updateOpened();
        payload.$refs.sub.updateActiveName();
        payload.$refs.menu.updateActiveName();
      });
    });
  },
  changeSubMenu({ commit },payload){
    commit(CHANGESUBMENU,{
      data:payload,
      initialize:false
    });
  },
  changeItem({ commit },payload){
    commit(CHANGEITEM,payload);
  },
  reset({ commit }){
    commit(RESET);
  }
};

function level1(data){
  queryCode(state.menu,'menuCode',data);
  queryCode(state.menu,'autoId',state.temp.parentId);
  queryCode(state.menu,'autoId',state.temp.parentId);
  return state.temp;
}

function level2(data) {
  queryCode(state.menu,'menuCode',data);
  queryCode(state.menu,'autoId',state.temp.parentId);
  return state.temp;
}

function level3(data){
  queryCode(state.menu,'menuCode',data);
  return state.temp;
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
