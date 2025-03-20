import instance from '@/request/axios'

/* 用户信息 */
interface logonInfo {
  username: string;
  password: string
}

/**
 * 用户登录
 * @param data 登录信息
*/
export const logon = (data: logonInfo): any => {
  return instance({
    method: 'post',
    url: 'login/index',
    data
  })
}


interface userInfo {
  user_name: string;
  sex: number;
  age: number;
}

/**
 * 修改资料
 * @param data.user_name 昵称 必需
 * @param data.sex 性别，0女1男
 * @param data.age 年龄索引
*/

export const changeInfo = (data: userInfo): any => {
  return instance({
    method: 'post',
    url: 'user/changeInfo',
    data
  })
}

interface passwordInfo {
  pw: string;
  password: string;
  passwordRepetition?: string;
}
/**
 * 修改密码
 * @param pw 旧密码
 * @param password 新密码
*/

export const changePassword = (data: passwordInfo): any => {
  return instance({
    method: 'post',
    url: 'user/changePW',
    data
  })
}