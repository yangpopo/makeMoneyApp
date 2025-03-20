import axios, { AxiosError } from 'axios'
import { showToast } from 'vant';

console.log('当前环境:', import.meta.env.VITE_ENV_VALUE == 'develop' ? '开发环境': '生产环境');
console.log('请求地址:', import.meta.env.VITE_ENV_VALUE == 'develop' ? '本地模拟': import.meta.env.VITE_REQUEST_PATH);

 
const instance:any = axios.create({
  baseURL: import.meta.env.VITE_ENV_VALUE == 'develop' ? './api-data/' : import.meta.env.VITE_REQUEST_PATH,//配置baseURL
  timeout: 10000,
});
 
// 添加请求拦截器
instance.interceptors.request.use(function (config:any) {
  /* 如果是开发环境请求后面加.json */
  if (import.meta.env.VITE_ENV_VALUE == 'develop') {
    config.url = config.url + '.json'
  }
  
    // 在发送请求之前做些什么
    return config;
  }, function (error: AxiosError) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
 
// 添加响应拦截器
instance.interceptors.response.use(function (response:any) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.data.code == 0) {
      return response.data;
    } else {
      showToast(response.data.msg)
      return response.data;
    }
    
  }, function (error:AxiosError) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  });
 
export default instance
