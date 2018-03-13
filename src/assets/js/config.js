const config = {
  type: SERVICE_URL,
  apiUrl () {
    switch (this.type) {
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
        return this.apiUrl() + 'pages/user/menus';
      case 'upload':
        return this.apiUrl() +'rest/upload/uploadfiletooss'
      case 'down':
        return this.apiUrl() +'rest/download'+ service
      default:
        return this.apiUrl() + 'rest/service/routing/' + service
    }
  },
}
export default config
