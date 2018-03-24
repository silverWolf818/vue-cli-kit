import request from '../assets/js/request'
const config = {
  type:ENV_TYPE,
  serverUrl () {
    switch (this.type) {
      case 'dev'://开发
        return 'http://47.94.134.239:8080/';
      case 'test'://测试
        return 'http://www.neepp.net/';
    }
  },
  api (type) {
    let url = this.serverUrl();
    switch (type) {
      case 'menu':
        return url + 'pages/user/menus';
      case 'upload':
        return url + 'rest/upload/uploadfiletooss';
      case 'down':
        return url + 'rest/download';
      default:
        return url + 'rest/service/routing/';
    }
  },
};
//参数说明
// url:后端接口地址url
// data:接口入参
// option:axios options
//查询
async function queryApi(url,data,option) {
  return request(config.api() + url,data,option);
}
//新增
async function addApi(url,data,option) {
  return request(config.api() + url,data,option);
}
//删除
async function removeApi(url,data,option) {
  return request(config.api() + url,data,option);
}
//更新
async function updateApi(url,data,option) {
  return request(config.api() + url,data,option);
}
//请求菜单
async function queryMenu(option) {
  return request(config.api('menu'),{},option);
}
export {
  queryApi,
  addApi,
  removeApi,
  updateApi,
  queryMenu
}
