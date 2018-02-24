/** 2018/2/23 17:42
 *  作者:周志豪
 *  功能:封装请求方法
 *  备注:
 */

import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 1000 * 50;
//添加一个请求拦截器
axios.interceptors.request.use(function (config) {
    if (config.method === "post"){
      config.data = qs.stringify(config.data);
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    }
    return config;
  }, function (error) {
    //Do something with request error
    return Promise.reject(error);
  });
//添加一个响应拦截器
axios.interceptors.response.use(function (res) {
    let result;
    switch (res.status) {
      case 404:
        console.log("404");
        break;
      case 500:
        console.log("服务器出错");
        break;
      case 401:
        console.log("401");
        break;
      case 200:
        if (res.data.respCode === '0000') {
          result = res.data.data;
        }
        break;
    }
    //在这里对返回的数据进行处理
    return result;
  }, function (error) {
    return Promise.reject(error);
  });

export default axios
