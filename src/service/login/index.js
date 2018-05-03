import request from '../../assets/js/request'

export async function login(params) {
  return request('login',{
    mock:true,
    body:{
      ...params
    }
  });
}
