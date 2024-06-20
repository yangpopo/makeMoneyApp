import instance from '@/request/axios'

/**
 * 收益记录
*/
export const earningsRecord = (): any => {
  return instance({
    method: 'get',
    url: 'res/income',
  })
}

/**
 * 任务记录
*/
export const taskRecord = (): any => {
  return instance({
    method: 'get',
    url: 'ad/schedule',
  })
}


/**
 * 广告赚钱
*/
export const adMakeMoney = (): any => {
  return instance({
    method: 'get',
    url: 'ad/showAd',
  })
}
