<template>
  <div class="property-box">
    <!-- 财产模块 -->
    <div class="property-info">
      <dl class="money item">
        <dt>账户余额(元)</dt>
        <dd><b class="val">¥{{ currencyFormat(moneyIntegralData.money) }}</b><RouterLink :to="{ name: 'accountDetails' }" class="operate-but">提现</RouterLink></dd>
      </dl>
      <dl class="integral item">
        <dt>账户积分</dt>
        <dd><b class="val">{{ moneyIntegralData.score }}</b><span class="operate-but">使用</span></dd>
      </dl>
    </div>
    <swipe class="ad-swipe" :autoplay="3000" indicator-color="white">
      <swipe-item><img class="ad-swipe-item" src="@/assets/image/campus/ad-cover.png" alt="" /></swipe-item>
    </swipe>
  </div>
</template>

<script lang="ts">
export default {
  name: 'property'
}
</script>

<script setup lang="ts">
// @ts-ignore
import { Swipe, SwipeItem, showToast, RollingText as vanRollingText } from 'vant';
// @ts-ignore
import { reactive, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

import { moneyFormat } from '@/assets/js/public'
import { useMoneyIntegral } from '@/stores/moneyIntegral'


const moneyIntegralData = useMoneyIntegral()

/**
 * 优化货比格式
*/
function currencyFormat(val:number | string): string {
  return moneyFormat(val)
}


/* 创建完成 */
onMounted(() => {
})
</script>

<style lang="scss" scoped>
.property-box {
  width: 100vw;
  box-sizing: border-box;
  padding: 3vw 3vw 8vw 3vw;
  background-color: #fff;
  margin-bottom: 3vw;

  .property-info {
    width: 100%;
    border-radius: 3vw;
    background-color: rgb(244, 244, 244);
    box-sizing: border-box;
    padding: 4vw 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3vw;

    .item {
      width: 50%;
      box-sizing: border-box;
      padding: 0 3vw;
      &:nth-child(1) {
        border-right: 1px solid rgb(225, 225, 225);
      }
      dt {
        font-size: 3.5vw;
        margin-bottom: 4vw;
      }
      dd {
        display: flex;
        align-items: center;
        .val {
          font-size: 7vw;
          font-weight: bold;
          margin-right: 1vw;
        }
        .operate-but {
          display: block;
          box-sizing: border-box;
          padding: 1.5vw 4vw;
          border-radius: 4vw;
          font-size: 3.5vw;
          color: rgb(0, 100, 249);
          background-color: #fff;
        }
      }
    }
  }
  .ad-swipe {
    width: 100%;
    border-radius: 3vw;
    height: 40vw;
    .ad-swipe-item {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
}
</style>
