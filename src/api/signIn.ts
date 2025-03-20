import instance from '@/request/axios'


/**
 * 获取签到信息
*/
export const signinInfo = (): any => {
  return instance({
    method: 'get',
    url: 'signin/index',
  })
}

/**
 * 完成签到
*/
export const completionSignin = (): any => {
  return instance({
    method: 'post',
    url: 'signin/signin',
  })
}
