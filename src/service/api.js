import request from '../assets/js/request'

//通用请求方法，一般用于组件使用

//查询
export async function queryApi(url,params,mock) {
  return request(url,{
    mock:mock ? mock : false,
    body:{
      ...params
    }
  });
}
//新增
export async function addApi(url,params,mock) {
  return request(url,{
    mock:mock ? mock : false,
    body:{
      ...params
    }
  });
}
//删除
export async function removeApi(url,params,mock) {
  return request(url,{
    mock:mock ? mock : false,
    body:{
      ...params
    }
  });
}
//更新
export async function updateApi(url,params,mock) {
  return request(url,{
    mock:mock ? mock : false,
    body:{
      ...params
    }
  });
}

//自定义请求接口
export async function menu(params) {
  return request('menu',{
    mock:true,
    body:{
      ...params
    }
  });
}

export async function menu2(params) {
  return request('menu2',{
    mock:true,
    body:{
      method:'GET',
      ...params
    }
  });
}

export async function user(params) {
  return request('user',{
    mock:true,
    body:{
      ...params
    }
  });
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
