import Vue from 'vue'
import Router from 'vue-router'
const Index =()=>import('@/pages/index')
const Menu =()=>import('@/template/index')
const Detail =()=>import('@/template/detail')
const List =()=>import('@/template/list')
const TabList =()=>import('@/template/tabList')
const Cart =()=>import('@/template/cart')
const Forms =()=>import('@/template/forms')
const Navigation =()=>import('@/template/navigation')
const Entinvinfo =()=>import('@/template/entinvinfo')
const Entusermgr =()=>import('@/template/entusermgr')
const Ideinfomgr =()=>import('@/template/ideinfomgr')

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
      path:'/menu',
      name:'menu',
      component:Menu,
      children:[{
        path: 'forms',
        name: 'forms',
        component: Forms
      },{
        path:'list',
        name:'list',
        component:List
      },{
        path:'tabList',
        name:'tabList',
        component:TabList
      }]
    },{
      path:'/detail',
      name:'detail',
      component:Detail
    },{
      path:'/cart',
      name:'cart',
      component:Cart
    },{
      path:'/navigation',
      name:'navigation',
      component:Navigation,
      children:[
        {
          path:'entinvinfo',
          name:'entinvinfo',
          component:Entinvinfo
        },{
          path:'entusermgr',
          name:'entusermgr',
          component:Entusermgr
        },{
          path:'ideinfomgr',
          name:'ideinfomgr',
          component:Ideinfomgr
        }
      ]
    }
  ]
})
