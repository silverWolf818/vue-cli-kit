import Vue from 'vue'
import Router from 'vue-router'
const Menu =()=>import('@/template/index')
const List =()=>import('@/template/list')
const TabList =()=>import('@/template/tabList')
const Cart =()=>import('@/template/cart')
const Forms =()=>import('@/template/forms')
const Navigation =()=>import('@/template/navigation')
const Store =()=>import('@/template/store')
const Test =()=>import('@/template/test')
const Index2 =()=>import('@/template/index2')
const Index3 =()=>import('@/template/index3')
const Home =()=>import('@/pages/home')
const Index =()=>import('@/pages/index/index')
const Baseform =()=>import('@/template/form/baseForm')
const Advform =()=>import('@/template/form/advForm')
const Basequery =()=>import('@/template/query/baseQuery')
const Tabquery =()=>import('@/template/query/tabQuery')
const BaseDetail =()=>import('@/template/detail/baseDetail')
const Test11 =()=>import('@/template/test1/test11')
const Test12 =()=>import('@/template/test1/test12')
const Test21 =()=>import('@/template/test1/test21')
const Test22 =()=>import('@/template/test1/test22')
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '*',
      redirect: '/'
    },{
      path:'/test',
      name:'test',
      component:Test
    },{
      path:'/',
      name:'index',
      component:Index,
      children:[{
        path: 'home',
        name: 'home',
        component: Home
      },{
        path: 'form/baseForm',
        name: 'baseForm',
        component: Baseform
      },{
        path:'form/advForm',
        name:'advForm',
        component:Advform
      },{
        path: 'query/baseQuery',
        name: 'baseQuery',
        component: Basequery
      },{
        path:'query/tabQuery',
        name:'tabQuery',
        component:Tabquery
      },{
        path:'detail/baseDetail',
        name:'baseDetail',
        component:BaseDetail
      },{
        path:'test/test11',
        name:'test11',
        component:Test11
      },{
        path:'test/test12',
        name:'test12',
        component:Test12
      },{
        path:'test/test21',
        name:'test21',
        component:Test21
      },{
        path:'test/test22',
        name:'test22',
        component:Test22
      },{
        path:'tabList',
        name:'tabList',
        component:TabList
      }]
    },{
      path:'/index2',
      name:'index2',
      component:Index2
    },{
      path:'/index3',
      name:'index3',
      component:Index3
    },{
      path:'/menu',
      name:'menu',
      component:Menu
    },{
      path:'/cart',
      name:'cart',
      component:Cart
    },{
      path:'/navigation',
      name:'navigation',
      component:Navigation
    },{
      path:'/store',
      name:'store',
      component:Store
    }
  ]
})
