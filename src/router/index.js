import Vue from 'vue'
import Router from 'vue-router'
const Index =()=>import('@/pages/index')
const Menu =()=>import('@/template/index')
const Detail =()=>import('@/template/detail')
const List =()=>import('@/template/list')
const Cart =()=>import('@/template/cart')
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
      component:Menu
    },{
      path:'/list',
      name:'list',
      component:List
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
