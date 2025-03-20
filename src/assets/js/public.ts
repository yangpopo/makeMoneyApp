/**
 * 零位补齐
 */
export const zeroReplenish = (num: string | number, length = 2):string => {
  if (num) {
    num = num.toString();
    return num.padStart(length, "0");
  }
  return num.toString()
}

/**
 * 金额格式
 * @param val 金额数字或数字格式的字符串
*/
export const moneyFormat = (val: number | string): string => {
  if ((typeof val == 'string') || typeof val == 'number') {
    let data = val.toString();
    let dataArr = data.split('.');
    if (dataArr.length == 1) {
      data = data + '.00';
    } else if (dataArr[1].length == 1) {
      data = dataArr[0] + '.' + dataArr[1] + '0'
    } else {
      data = dataArr[0] + '.' + dataArr[1].slice(0, 2);
    }
    return data
  }
  return '0'
}

/**
 * 数字转化带千分号
 * @param {*} value
 *
 * 输入：123456
 * 输出：123.456
 */
// function formatNum1000 (value:any) {
//   let strs = (value / 1000).toString().split('.')
//   if (strs.length === 2) {
//     return formatNum(value / 1000) + '.' + strs[1]
//   } else {
//     return formatNum(value / 1000) + '.00'
//   }
// }


/**
 * 时间格式转化
*/
export const formatDate = function(timestamp: string | number, fmt: string = 'yyyy-MM-dd hh:mm:ss'): string {
  
  if (Number.parseInt(<string>timestamp).toString() == 'NaN') {
    return <string>timestamp
  }
  timestamp = Number.parseInt(<string>timestamp);
  //时间戳转换
  const date = new Date(timestamp)
  
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero(str:string):string {
  return ('00' + str).substr(str.length)
}
