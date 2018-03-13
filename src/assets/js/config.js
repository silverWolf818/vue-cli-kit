const config = {
  serverUrl () {
    switch (ENV_TYPE) {
      case 1:
        return 'http://39.107.71.15:8080/';
      case 2:
        return 'http://127.0.0.1:9081/';
      case 3:
        return 'http://39.107.71.15:8080/';
    }
  },
  api (service, type) {
    switch (type) {
      case 'menu':
        return this.serverUrl() + 'pages/user/menus';
      case 'upload':
        return this.serverUrl() +'rest/upload/uploadfiletooss'
      case 'down':
        return this.serverUrl() +'rest/download'+ service
      default:
        return this.serverUrl() + 'rest/service/routing/' + service
    }
  },
}
export default config
