<template>
  <!-- 财产模块 -->
  <div class="property-box">
    <div class="property-info">
      <dl class="money item">
        <dt>账户余额(元)</dt>
        <dd><b class="val">¥0.00</b><RouterLink :to="{ name: 'accountDetails' }" class="operate-but">提现</RouterLink></dd>
      </dl>
      <dl class="integral item">
        <dt>账户积分</dt>
        <dd><b class="val">0</b><span class="operate-but">使用</span></dd>
      </dl>
    </div>
    <swipe class="ad-swipe" :autoplay="3000" indicator-color="white">
      <swipe-item>1</swipe-item>
      <swipe-item>2</swipe-item>
      <swipe-item>3</swipe-item>
      <swipe-item>4</swipe-item>
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
import { Swipe, SwipeItem, showToast } from 'vant';
// @ts-ignore
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

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
    background-color: aqua;
    border-radius: 3vw;
    height: 40vw;
  }
}
</style>
