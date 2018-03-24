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
const Input =()=>import('@/template/formComponent/input')
const Radio =()=>import('@/template/formComponent/radio')
const Checkbox =()=>import('@/template/formComponent/checkbox')
const Select =()=>import('@/template/formComponent/select')
const Date =()=>import('@/template/formComponent/date')
const Cascader =()=>import('@/template/formComponent/cascader')
const Area =()=>import('@/template/formComponent/area')
const Upload =()=>import('@/template/formComponent/upload')
const Texteditor =()=>import('@/template/formComponent/textEditor')
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
        path:'formComponent/input',
        name:'input',
        component:Input
      },{
        path:'formComponent/radio',
        name:'radio',
        component:Radio
      },{
        path:'formComponent/checkbox',
        name:'checkbox',
        component:Checkbox
      },{
        path:'formComponent/select',
        name:'select',
        component:Select
      },{
        path:'formComponent/date',
        name:'date',
        component:Date
      },{
        path:'formComponent/cascader',
        name:'cascader',
        component:Cascader
      },{
        path:'formComponent/area',
        name:'area',
        component:Area
      },{
        path:'formComponent/upload',
        name:'upload',
        component:Upload
      },{
        path:'formComponent/textEditor',
        name:'textEditor',
        component:Texteditor
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
