const Index =()=>import('./index')
const Advform =()=>import('../../template/advForm')
const Baseform =()=>import('../../template/baseForm')
const Basequery =()=>import('../../template/baseQuery')
const Basequery1 =()=>import('../../template/baseQuery1')
const Form1 =()=>import('../../template/form1')
const Tabquery =()=>import('../../template/tabQuery')
const BaseDetail =()=>import('../../template/baseDetail')
const Input =()=>import('../../template/input')
const Radio =()=>import('../../template/radio')
const Checkbox =()=>import('../../template/checkbox')
const Select =()=>import('../../template/select')
const Date =()=>import('../../template/date')
const Cascader =()=>import('../../template/cascader')
const Area =()=>import('../../template/area')
const Upload =()=>import('../../template/upload')
const Texteditor =()=>import('../../template/textEditor')
export default [{
  path:'/index',
  name:'index',
  component:Index,
  children:[{
    path: 'baseForm',
    name: 'baseForm',
    component: Baseform
  },{
    path: 'advForm',
    name: 'advForm',
    component: Advform
  },{
    path: 'baseQuery',
    name: 'baseQuery',
    component: Basequery
  },{
    path: 'baseQuery1',
    name: 'baseQuery1',
    component: Basequery1
  },{
    path: 'form1',
    name: 'form1',
    component: Form1
  },{
    path:'tabQuery',
    name:'tabQuery',
    component:Tabquery
  },{
    path:'baseDetail',
    name:'baseDetail',
    component:BaseDetail
  },{
    path:'input',
    name:'input',
    component:Input
  },{
    path:'radio',
    name:'radio',
    component:Radio
  },{
    path:'checkbox',
    name:'checkbox',
    component:Checkbox
  },{
    path:'select',
    name:'select',
    component:Select
  },{
    path:'date',
    name:'date',
    component:Date
  },{
    path:'cascader',
    name:'cascader',
    component:Cascader
  },{
    path:'area',
    name:'area',
    component:Area
  },{
    path:'upload',
    name:'upload',
    component:Upload
  },{
    path:'textEditor',
    name:'textEditor',
    component:Texteditor
  }]
}]
