import axios, { AxiosError } from 'axios'
import { showLoadingToast, closeToast, showToast } from 'vant';

import { useUserInfo } from '@/stores/userInfo'

import router from '@/router/index';

/* 初始化用户信息 */
const userInfoPinia = useUserInfo()
let tokenCache = localStorage.getItem("token") || '';
let userInfoCache;
if (localStorage.getItem("userInfo")) {
  userInfoCache = JSON.parse(localStorage.getItem("userInfo") as string)
} else {
  userInfoCache = '';
}

userInfoPinia.updateToken(tokenCache)
userInfoPinia.updateUserInfo(userInfoCache)


console.log('当前环境:', import.meta.env.VITE_ENV_VALUE == 'develop' ? '开发环境': '生产环境');
console.log('请求地址:', import.meta.env.VITE_ENV_VALUE == 'develop' ? '本地模拟': import.meta.env.VITE_REQUEST_PATH);

 
const instance:any = axios.create({
  baseURL: import.meta.env.VITE_REQUEST_PATH,
  timeout: 10000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    'Authorization': localStorage.getItem("token") || ''
  }
});
 
// 添加请求拦截器
instance.interceptors.request.use(function (config:any) {
    config.headers.Authorization = localStorage.getItem("token") || ''; // 添加token
    // 在发送请求之前做些什么
    showLoadingToast({
      message: '加载中...',
      forbidClick: true,
      duration: 0
    })
    return config;
  }, function (error: AxiosError) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });
 
// 添加响应拦截器
instance.interceptors.response.use(function (response:any) {
    closeToast(); // 关闭提示
    
    if (response.data.code == 0) {
      return response.data;
    } else if (response.data.code == 401) {
      showToast('登录失效,请重新登录!')
      /* 清除失效token和用户信息 */
      userInfoPinia.updateToken('');
      userInfoPinia.updateUserInfo('');
      /* 跳转去登录 */
      router.replace({
        name: 'logon', 
        params: { 
          'parentName': router.options.history.state.current == '/userAccount/logon' ? '' : router.options.history.state.current
        }
      }); 
      return response.data
    } else {
      /* 清除失效token和用户信息 */
      userInfoPinia.updateToken('');
      userInfoPinia.updateUserInfo('');
      /* 跳转去登录 */
      router.replace({
        name: 'logon', 
        params: { 
          'parentName': router.options.history.state.current == '/userAccount/logon' ? '' : router.options.history.state.current
        }
      }); 
    }
    
    showToast(response?.data?.msg || '系统错误,请稍后再试!')
    return
  }, function (error:AxiosError) {
    closeToast(); // 关闭提示
    showToast(error?.message || '系统错误,请稍后再试!')
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    console.log(error);
    return Promise.reject(error);
  });
 
export default instance
