import Vue from 'vue'
import Router from 'vue-router'
const Index =()=>import('@/pages/index')
const Detail =()=>import('@/template/detail')
const List =()=>import('@/template/list')
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/'
    },{
      path:'/',
      name:'index',
      component:Index
    },{
      path:'/list',
      name:'list',
      component:List
    },{
      path:'/detail',
      name:'detail',
      component:Detail
    }
  ]
})
