import Vue from 'vue'
import Router from 'vue-router'
const Index =()=>import('@/pages/index')
const Menu =()=>import('@/template/index')
const Detail =()=>import('@/template/detail')
const List =()=>import('@/template/list')
const TabList =()=>import('@/template/tabList')
const Cart =()=>import('@/template/cart')
const Forms =()=>import('@/template/forms')
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
      name:'Menu',
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
    }
  ]
})
