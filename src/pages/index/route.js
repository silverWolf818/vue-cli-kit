const Index =()=>import('./index')
const Advform =()=>import('../template/advForm')
export default {
  path:'/index',
  name:'index',
  component:Index,
  children:[{
    path: 'advForm',
    name: 'advForm',
    component: Advform
  }]

}
