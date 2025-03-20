import instance from '@/request/axios'

interface logonInfo {
  username: string;
  password: string
}

/**
 * 用户登录
*/
export const logon = (data: logonInfo): any => {
  return instance({
    method: 'post',
    url: 'login/index',
    params: {
      username: data.username,
      password: data.password,
    }
  })
}