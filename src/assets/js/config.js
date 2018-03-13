const config = {
  serverUrl () {
    switch (ENV_TYPE) {
      case 1://开发
        return 'http://47.94.134.239:8080/';
      case 2://测试
        return 'http://www.neepp.net/';
    }
  },
  api (service, type) {
    let url = this.serverUrl();
    switch (type) {
      case 'menu':
        return url + 'pages/user/menus';
      case 'upload':
        return url + 'rest/upload/uploadfiletooss';
      case 'down':
        return url + 'rest/download'+ service;
      default:
        return url + 'rest/service/routing/' + service;
    }
  },
}
export default config
