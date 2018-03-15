import request from '../assets/js/request'

export async function query() {
  return request('http://47.94.134.239:8080/rest/service/routing/nouser/SelectUserInfoBusiService')
}
