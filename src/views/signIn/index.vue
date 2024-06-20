<template>
  <div class="signIn">
    <navBox class="head">
      <NavBar left-arrow title="签到有礼" @click-left="pageReturn">
      </NavBar>
    </navBox>
    <div class="container-box">
      <div class="head-box">
        <div class="total-info">
          <div class="val"><b>{{ addWeekIntegral }}.00</b>积分</div>
          <img class="signin-but" src="@/assets/image/signIn/signIn-but.png" alt="" @click="fulfilSignIn">
        </div>
        <img class="icon" src="@/assets/image/signIn/icon.png" alt="">
      </div>
      <div class="calendar-box">
        <div class="tilte-h1">已连续签到{{ continuityDayQuantity }}天</div>
        <div class="calendar">
          <dl class="record-item" :class="{'is-fulfil': date.score}" v-for="date in dateData" :key="date.week">
            <dt>
              <span class="val">{{ date.score > 0 ? '+' + date.score : 0 }}</span>
              <span class="date" v-if="!date.score">{{ date.dateFormat }}</span>
              <span class="icon" v-else><van-icon name="success" size="10" color="#fff" /></span>
            </dt>
            <dd class="week">{{ date.week }}</dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'signIn'
}
</script>

<script setup lang="ts">
import navBox from '@/components/navBox.vue';
import { NavBar, Icon as vanIcon, showToast } from 'vant';
import { zeroReplenish } from '@/assets/js/public';
// @ts-ignore
import { RouterLink, useRouter } from 'vue-router';
import { ref, reactive, onMounted } from 'vue';

import { signinInfo, completionSignin } from '@/api/signIn';

const router = useRouter(); // 路由对象

let dateData = reactive([]); // 生成签到日历
let addWeekIntegral = ref(0); // 一周的累计积分
let continuityDayQuantity = ref(0); // 连续签到天数

/**
 * 获取签到记录
*/
function signinRecord() {
  signinInfo().then((res: any) => {
    if (res.code == 0) {
      addWeekIntegral.value = 0;
      let signinDayQuantity = 0; 
      let currentTime = new Date(res.data.day_date).getTime();
      res.data.weeks.forEach((item:any) => {
        item['dateFormat'] = item.date.slice(5, item.date.length).replaceAll('-', '.');
        addWeekIntegral.value = addWeekIntegral.value + item.score;
        if (item.score > 0) {
          signinDayQuantity++
        } else {
          if (currentTime >= new Date(item.date).getTime()) {
            signinDayQuantity = 0;
          }
        }
      })
      continuityDayQuantity.value = signinDayQuantity;
      Object.assign(dateData, res.data.weeks)
    }
  })
}

/**
 * 完成签到
*/
const fulfilSignIn = ():void => {
  completionSignin().then((res: any) => {
    if (res.code == 0) {
      showToast('签到成功!')
      signinRecord();
    }
  })
}

/* 返回上一页面 */
const pageReturn = ():void => {
  router.go(-1);
}


/* 创建完成 */
onMounted(() => {
  signinRecord(); // 获取签到记录
})

</script>

<style lang="scss" scoped>
.signIn {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background-image: url('@/assets/image/signIn/bg.png');
  background-size: 100% auto;
  background-repeat: no-repeat;
  .head {
    background-color: transparent;
    :deep(.van-nav-bar) {
      background-color: transparent;
    }
  }
  .container-box {
    width: 100vw;
    height: calc(100% - 23vw);
    overflow-y: auto;
    box-sizing: border-box;
    padding: 5vw;
    .head-box{
      width: 100%;
      height: 30vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .total-info{
        width: 40%;
        .val {
          font-size: 3vw;
          color: #000;
          font-weight: bold;
          text-align: center;
          margin-bottom: 2vw;
          b {
            font-size: 10vw;
            font-weight: bold;
          }
        }
        .signin-but {
          width: 25vw;
          height: auto;
          display: block;
          margin: 0 auto;
        }
      }
      .icon {
        width: 20vw;
        margin: 0 10vw 0 0;
      }
    }
    .calendar-box {
      width: 100%;
      box-sizing: border-box;
      padding: 5vw 3vw;
      border-radius: 3vw;
      background-color: #fff;
      margin-top: -2vw;
      .tilte-h1 {
        width: 100%;
        font-size: 4vw;
        font-weight: bold;
        margin-bottom: 3vw;
      }
      .calendar {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .record-item {
          width: 15%;
          box-sizing: border-box;
          width: 12.5%;
          &.is-fulfil {
            dt {
              background-color: #e0e7fa;
              .val {
                color: #3a78f3;
              }
            }
            
          }
          dt {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #f6f6f6;
            box-sizing: border-box;
            padding: 2.5vw 1vw;
            border-radius: 1vw;
            margin-bottom: 2vw;
            .val {
              font-size: 3.5vw;
              font-weight: bold;
              text-align: center;
              color: #000;
              margin-bottom: 1vw;
            }
            .date {
              font-size: 3vw;
              color: #adadad;
              text-align: center;
              transform: scale(0.9);
            }
            .icon {
              width: 4.5vw;
              height: 4.5vw;
              border-radius: 1vw;
              display: flex;
              justify-content: center;
              align-items: center;
              background-color: #3a78f3;
            }
          }
          dd.week {
            width: 100%;
            text-align: center;
            color: #ababab;
            font-size: 3.2vw;
          }
        }
      }
    }
  }
  :deep(.van-hairline--bottom:after) {
    border-bottom-width: inherit;
  }
}
</style>
