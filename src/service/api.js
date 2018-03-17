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
//查询
export async function query(url,params) {
  return request(config.api() + url,params);
}
//新增
export async function add(url,params) {
  return request(config.api() + url,params);
}
//删除
export async function remove(url,params) {
  return request(config.api() + url,params);
}
//更新
export async function update(url,params) {
  return request(config.api() + url,params);
}

