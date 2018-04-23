import request from '../assets/js/request'
//参数说明
// url:后端接口地址url
// data:接口入参
// option:axios options
//查询
export async function queryApi(url,params) {
  return request(url,{
    body:{
      ...params
    }
  });
}
//新增
export async function addApi(url,params) {
  return request(url,{
    body:{
      ...params
    }
  });
}
//删除
export async function removeApi(url,params) {
  return request(url,{
    body:{
      ...params
    }
  });
}
//更新
export async function updateApi(url,params) {
  return request(url,{
    body:{
      ...params
    }
  });
}
//请求菜单
export async function queryMenu(params) {
  return request('menu');
}

export async function queryTest(params) {
  return request('test',{
    mock:true,
    body:{
      ...params
    }
  });
}
export async function queryPerms(params) {
  return request('havePerms',{
    body:{
      method:'GET',
      ...params
    }
  });
}
