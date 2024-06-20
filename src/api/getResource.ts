import instance from '@/request/axios'


/**
 * 用户登录
 * @param data 登录信息
*/
export const resIndex = (): any => {
  return instance({
    method: 'get',
    url: 'res/index',
  })
}


interface useMoney {
  start: number;
  end: number;
  type: number;
}
/**
 * 获取金额明细
 * @param query 请求参数
*/
export const resMoney = (query: useMoney): any => {
  return instance({
    method: 'get',
    url: 'res/money',
    params: {
      ...query
    }
  })
}

interface useScore {
  start: number;
  end: number;
  type: number;
}
/**
 * 获取积分明细
 * @param query 请求参数
*/
export const resScore = (query: useScore): any => {
  return instance({
    method: 'get',
    url: 'res/score',
    params: {
      ...query
    }
  })
}