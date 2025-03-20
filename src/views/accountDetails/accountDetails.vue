<template>
  <div class="account-details">
    <navBox class="head">
      <NavBar left-arrow title="账户" @click-left="pageReturn">
      </NavBar>
    </navBox>

    <PullRefresh class="container-box" v-model="refreshState" @refresh="onRefresh">
      <List v-model:loading="loadingState" :finished="isFinished" finished-text="没有更多了" @load="onLoad">
        <div class="balance-box">
          <dl class="total">
            <dt>
              <b class="title-box">当前账户可用金额(元) <van-icon v-if="isShowMone" @click="isShowMone = false" class="eye-icon" name="eye-o" color="#fff" size="15" /><van-icon v-else @click="isShowMone = true" class="eye-icon" name="closed-eye" color="#fff" size="15" /></b>
              <van-icon name="question-o" color="#fff" size="15" />
            </dt>
            <dd>{{ isShowMone ? '0.00' : '****' }}</dd>
          </dl>
          <div class="balance-detail">
            <div class="balance-item">
              <span class="title">直播金额</span>
              <span class="val">0.00</span>
              <RouterLink :to="{ name: 'withdraw' }" class="withdraw-but">提现</RouterLink>
            </div>
            <div class="balance-item">
              <span class="title">广告金额</span>
              <span class="val">0.00</span>
              <RouterLink :to="{ name: 'withdraw' }" class="withdraw-but">提现</RouterLink>
            </div>
          </div>
        </div>
        <ul class="nav-column">
          <li :class="{ 'selected': columnType == 0 }" @click="switchColumnType(0)">金额明细</li>
          <li :class="{ 'selected': columnType == 1 }" @click="switchColumnType(1)">积分明细</li>
        </ul>
        <ul class="screen-column">
          <li class="selected">全部</li>
          <li>收入</li>
          <li>支出</li>
          <li @click="screenPopupRef.isShow = true">筛选<van-icon name="arrow-down" /></li>
        </ul>
        <div class="date-title" @click="timePopupRef.isShow = true">
          <b class="date">02</b>月<van-icon name="arrow-down" />
        </div>
        <ul class="total-box">
          <li>收入¥0.00</li>
          <li>支出¥0.00</li>
        </ul>
        <div class="detail-item" v-for="item in 10" :key="item">
          <img class="integral-icon" src="@/assets/image/accountDetails/integral-icon.png" alt="">
          <dl class="explain">
            <dt>签到积分</dt>
            <dd>2021-02-02 20:20:20</dd>
          </dl>
          <span class="val">+2.00</span>
        </div>
      </List>
    </PullRefresh>
    <popupBox ref="screenPopupRef" :option="{position:'bottom', round: true}">
      <vanPicker @cancel="screenPopupRef.isShow = false" title="筛选" :columns="screenOption" @confirm="screenConfirm" />
    </popupBox>
    <popupBox ref="timePopupRef" :option="{position:'bottom', round: true}">
      <vanPicker @cancel="screenPopupRef.isShow = false" title="筛选" :columns="yearsOption" @confirm="screenConfirm" />
    </popupBox>
  </div>
</template>

<script lang="ts">
export default {
  name: 'accountDetails'
}
</script>

<script setup lang="ts">
import navBox from '@/components/navBox.vue';
import popupBox from '@/components/popupBox.vue';
import { zeroReplenish } from '@/assets/js/public'

import { NavBar, Icon as vanIcon, PullRefresh, List, showToast, Picker as vanPicker } from 'vant';
// @ts-ignore
import { RouterLink, useRouter } from 'vue-router';
import { ref, reactive } from 'vue';

const router = useRouter(); // 路由对象

/* 返回上一页面 */
const pageReturn = ():void => {
  router.go(-1);
}

/* 是否显示金额 */
const isShowMone = ref(true);


/* 类型 */
let columnType = ref(0);
const switchColumnType = (index: number):void => {
  columnType.value = index;
}

/* 下拉刷新 */
const refreshState = ref(false); // 加载状态
const onRefresh = () => {
  setTimeout(() => {
    showToast('刷新成功');
    refreshState.value = false;
  }, 1000);
};
/* 上拉加载 */
const loadingState = ref(false); // 加载状态
const isFinished = ref(true); // 是否加载完成
const onLoad = () => {
  setTimeout(() => {
    showToast('加载成功');
    loadingState.value = false;
  }, 1000);
};

let screenPopupRef = ref(); // 筛选弹窗对象

/* 查询筛选 */
const screenOption = reactive([
  { text: '直播', value: 'Hangzhou' },
  { text: '广告', value: 'Ningbo' }
]);
const screenConfirm = (value:any):void => {
  console.log(value.selectedOptions[0].text, '-*-**--*');
  screenPopupRef.value.isShow = false; /* 关闭弹窗 */
}

const timePopupRef = ref(); // 日期选择弹窗
/* 日期选项 */
const yearsData = ():any => {
  let yearsData:any[] = [];
  let currentTime = new Date(); // 获取当前时间
  let currentTimeYear = currentTime.getFullYear(); // 年
  let currentTimeMonth = currentTime.getMonth() + 1; // 月

  /* 添加年份 */
  for (let i = 4; i > 0; i--) {
    yearsData.push(({
      text: (currentTimeYear - i).toString(),
      value: (currentTimeYear - i).toString(),
      children: []
    }));
  }
  /* 添加月 */
  for (let k = 0; k < yearsData.length; k++) {
    for (let j = 1; j <= 12; j++) {
      yearsData[k].children.push({
        text: zeroReplenish(j).toString(),
        value: zeroReplenish(j).toString(),
      })
    }
  }
  /* 添加当前年份 */
  yearsData.push({
    text: currentTimeYear,
    value: currentTimeYear,
    children : []
  })
  for (let i = 0; i < currentTimeMonth; i++){
    yearsData[yearsData.length - 1].children.push({
      text: zeroReplenish(i + 1),
      value: zeroReplenish(i + 1),
    })
  }
  return yearsData
}

const yearsOption = reactive(yearsData());



</script>

<style lang="scss" scoped>
:deep(.van-nav-bar__title) {
 
  --van-nav-bar-title-text-color: #fff;
  --van-border-width: 0;  
}
:deep(.van-nav-bar .van-icon){
  --van-nav-bar-icon-color: #fff !important;
}
:deep(.van-hairline--bottom:after) {
  --van-border-width: 0;
}
.account-details {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background-color: rgb(0, 52, 239);
  .head {
    background-color: transparent;
    :deep(.van-nav-bar) {
      background-color: transparent;
    }
  }
  .container-box {
    width: 100vw;
    height: calc(100% - 22.3vw);
    overflow-y: auto;
    box-sizing: border-box;
    padding: 5vw;
    background-color: #fff;
    border-radius: 3vw 3vw 0 0;
    .balance-box {
      width: 100%;
      box-sizing: border-box;
      background-color: rgb(0, 52, 239);
      border-radius: 3vw;
      padding: 4vw;
      margin-bottom: 3vw;
      .total {
        position: relative;
        box-sizing: border-box;
        padding: 2vw 0 2vw 5vw;

        &:before {
          content: "";
          position: absolute;
          width: 3px;
          height: 100%;
          top: 0;
          left: 0;
          background-color: aquamarine;
          border-radius: 3px;
        }
        dt {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5vw;
          .title-box {
            display: flex;
            align-items: center;
            font-size: 3.2vw;
            color: #fff;
            .eye-icon {
              margin-left: 3vw;
            }
          }
        }
        dd {
          color: #fff;
          font-size: 8vw;
          font-weight: bold;
        }
      }
      .balance-detail {
        width: 100%;
        box-sizing: border-box;
        margin-top: 5vw;
        padding-top: 3vw;
        border-top: 1px solid rgba(255, 255, 255, .5);
        .balance-item {
          box-sizing: border-box;
          padding: 2vw 0;
          display: flex;
          font-size: 3.2vw;
          color: #fff;
          .title {
            width: 25%;
          }
          .val {
            width: 55%;
            text-align: center;
          }
          .withdraw-but {
            background-color: #fff;
            color: rgb(0, 52, 239);
            box-sizing: border-box;
            padding: 0.5vw 2.5vw;
            border-radius: 5vw;
          }
        }
      }
    }
    .nav-column {
      display: flex;
      align-items: center;
      margin-bottom: 5vw;
      li {
        position: relative;
        font-size: 3.8vw;
        font-weight: bold;
        color: #000;
        box-sizing: border-box;
        padding: 3vw 0 1vw 0;
        margin-right: 5vw;
        &.selected {
          &:before {
            content: "";
            position: absolute;
            left: 0;
            bottom: 0.3vw;
            width: 100%;
            height: 4px;
            background-image: linear-gradient(90deg, rgba(0, 52, 239, 1), rgba(0, 52, 239, 0));
          }
        }
      }
    }
    .screen-column {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 2.5vw 6vw;
      border-radius: 2vw;
      box-shadow: 0 0 2vw #ebebeb;
      margin-bottom: 5vw;
      li {
        font-size: 3.5vw;
        color: #000;
        &.selected {
          color: rgb(0, 52, 239);
        }
      }
    }
    .date-title {
      width: 100%;
      display: flex;
      align-items: baseline;
      // margin-bottom: 2vw;
      .date {
        font-size: 5vw;
        font-weight: bold;
        margin-right: 1vw;
      }
    }
    .total-box {
      width: 100%;
      display: flex;
      align-items: baseline;
      box-sizing: border-box;
      padding: 2vw 0;
      margin-bottom: 2vw;
      border-bottom: 1px solid #e6e6e6;
      li {
        font-size: 3vw;
        color: #000;
        margin-right: 3.2vw;
      }
    }
    .detail-item {
      width: 100%;
      box-sizing: border-box;
      padding: 3vw 0;
      display: flex;
      align-items: stretch;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0;
        width: 82%;
        height: 1px;
        background-color: #f2f2f2;
      }
      .integral-icon {
        width: 12vw;
        height: 12.5vw;
        margin-right: 5vw;
      }
      .explain {
        width: 50vw;
        font-size: 3.2vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        dt {
          color: #000;
        }
        dd {
          color: #b5b5b5;
        }
      }
      .val {
        width: calc(100% - 12vw - 5vw - 50vw);
        color: #000;
        font-size: 5vw;
        font-weight: bold;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
