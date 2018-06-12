/** 2018/2/23 17:42
 *  作者:周志豪
 *  功能:封装请求方法
 *  备注:
 */

import axios from 'axios'
import qs from 'qs'
import { Modal } from 'iview'

//mock地址
const mockUrl = 'http://39.107.52.108:8001/app/mock/20/';

const serverUrl = '';
//axios默认参数配置
axios.defaults.timeout = 1000 * 50;
//添加一个请求拦截器
axios.interceptors.request.use(function (config) {
  if(config.method === "post") {
    config.data = qs.stringify(config.data);
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});
//添加一个响应拦截器
axios.interceptors.response.use(function (res) {
  let data = res.data;
  if (data.code === 0) {
    return data.data;
  }else{
    Modal.error({
      title: '错误',
      content: data.message ? data.message :'网络繁忙！'
    });
  }
}, function (error) {
  return Promise.reject(error);
});

export default function request(url,option) {
  const httpUrl = option.mock ? mockUrl + url : serverUrl;
  let reqUrl = '';
  if(option.body.method === 'GET' && option.body.data){
    reqUrl = httpUrl + '?' + qs.stringify(option.body.data);
  }else{
    reqUrl = httpUrl;
  }
  const defaultOptions = {
    method:'POST',
    url:reqUrl
  };
  const newOptions = { ...defaultOptions, ...option.body };
  return axios({
    ...newOptions
  }).then(res => {
    return res
  })
}

