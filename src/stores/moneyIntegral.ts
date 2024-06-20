import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

import { resIndex } from '@/api/getResource'
import { earningsRecord, taskRecord } from '@/api/ad'


export const useMoneyIntegral= defineStore('moneyIntegral', () => {
  const money = ref(0); // 钱
  const score = ref(0); // 积分
  interface useEarningsRecordData {
    ye_money: number;
    ye_score: number;
    all_money: number;
    all_score: number;
  }
  /* 收益记录 */
  const earningsRecordData = reactive<useEarningsRecordData>({
    ye_money: 0,
    ye_score: 0,
    all_money: 0,
    all_score: 0
  })

  interface useTaskRecordData {
    max_times: number;
    curr_times: number;
    valid_times: number;
  }
  /* 任务记录 */
  const taskRecordData = reactive<useTaskRecordData>({
    max_times: 0, // 最大次数
    curr_times: 0, // 当前次数
    valid_times: 0, // 有效次数
  })

  /* 重置金额积分 */
  function resetMoneyIntegral(val: number): void {
    money.value = val;
    score.value = val;
    earningsRecordData.ye_money = val;
    earningsRecordData.ye_score = val;
    earningsRecordData.all_money = val;
    earningsRecordData.all_score = val;
    taskRecordData.max_times = val;
    taskRecordData.curr_times = val;
    taskRecordData.valid_times = val;
  }
  
  return { money, score, earningsRecordData, taskRecordData, resetMoneyIntegral}
})


let tokenVal = localStorage.getItem("token") || '';
if (tokenVal) {
  /* 初始化钱和积分 */
  resIndex().then((res: any) => {
    if (res.code == 0) {
      const moneyIntegralData = useMoneyIntegral()
      moneyIntegralData.money = res.data.money;
      moneyIntegralData.score = res.data.score;
    }
  })
  /* 获取收益记录 */
  earningsRecord().then((res:any) => {
    if (res.code == 0){
      const moneyIntegralData = useMoneyIntegral()
      Object.assign(moneyIntegralData.earningsRecordData, res.data);
    }
  })

  /* 获取任务进度 */
  taskRecord().then((res:any) => {
    if (res.code == 0){
      const moneyIntegralData = useMoneyIntegral()
      Object.assign(moneyIntegralData.taskRecordData, res.data);
    }
  })
}
