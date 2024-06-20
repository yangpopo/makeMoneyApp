<template>
  <div class="find">
    <navBox class="nav-box">
      <nav-bar title="广告" right-text="规则" @click-right="isShowRule(true)" />
    </navBox>
    <div class="main">
      <!-- 收益 -->
      <div class="income-box">
        <div class="box">
          <dl>
            <dt>昨日预估收益:</dt>
            <dd>金额<b>¥{{ currencyFormat(moneyIntegralData.earningsRecordData.ye_money) }}</b></dd>
            <dd>积分<b>{{ moneyIntegralData.earningsRecordData.ye_score }}</b></dd>
          </dl>
          <dl>
            <dt>待结算收益: <img class="icon-tip" src="@/assets/image/find/tip.png" alt="" @click="openIncomeTip"></dt>
            <dd>金额<b>¥{{ currencyFormat(moneyIntegralData.earningsRecordData.all_money) }}</b></dd>
            <dd>积分<b>{{ moneyIntegralData.earningsRecordData.all_score }}</b></dd>
          </dl>
        </div>
        <RouterLink :to="{ name: 'accountDetails' }" class="view-but">查看</RouterLink>
      </div>
      <div class="title-h1">
        看广告&nbsp;赚取收益
      </div>
      <div class="task-box">
        <div class="title-h1">正在给您匹配广告内容</div>
        <div class="title-h2">请您点击下方按钮开始浏览</div>
        <div class="schedule">
          <div class="chart-box">
            <span class="title">进度</span>
            <div class="schedule-box">
              <span class="figure" :style="{ width: (moneyIntegralData.taskRecordData.curr_times/moneyIntegralData.taskRecordData.max_times) * 100 + '%' }"></span>
              <span class="val">{{ moneyIntegralData.taskRecordData.curr_times }}/{{ moneyIntegralData.taskRecordData.max_times }}</span>
            </div>
          </div>
          <div class="number-box"><img class="icon-tip" src="@/assets/image/find/count.png" alt=""
              @click="openBrowseTip">当日有效浏览:<b class="val">{{ moneyIntegralData.taskRecordData.valid_times }}</b></div>
        </div>
        <div class="go-lucrative" @click="skipAd">去赚钱</div>
      </div>
    </div>
    <overlayBox ref="rulePopupRef">
      <div class="rule-box" @click.stop>
        <img class="icon-logo" src="@/assets/image/find/logo.png" alt="">
        <h1 class="title">规则</h1>
        <div class="content-box">
          asdfasdfasdfasdfasdfasdfasdfasdfsadfasdf阿斯顿发生大区分啥地方阿斯顿发送到发阿斯顿发送到发阿斯顿发是打发斯蒂芬阿斯顿发送到发阿斯顿发送到发沙发as</div>
        <div class="close-but" @click="isShowRule(false)">我知道了</div>
      </div>
    </overlayBox>
  </div>
</template>

<script lang="ts">
export default {
  name: 'find'
}
</script>

<script setup lang="ts">
import navBox from '@/components/navBox.vue';
import overlayBox from '@/components/overlayBox.vue';
import { NavBar, showToast } from 'vant';
import { moneyFormat } from '@/assets/js/public';
// @ts-ignore
import { RouterLink } from 'vue-router';
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router';
import { taskRecord, adMakeMoney } from '@/api/ad'
import {useUserInfo} from '@/stores/userInfo'
import {useMoneyIntegral} from '@/stores/moneyIntegral'

const userInfoData = useUserInfo();

const moneyIntegralData = useMoneyIntegral();


const router = useRouter(); /* 路由对象 */

/**
 * 优化货比格式
*/
function currencyFormat(val: number | string): string {
  return moneyFormat(val)
}

/* 打开收益提示 */
const openIncomeTip = () => {
  showToast('因广告体系处于基础评估阶段，当前数值仅代表尚未结算入账的预估收益')
}

/* 打开浏览提示 */
const openBrowseTip = () => {
  showToast('完整浏览一组广告，直至出现“好的，我知道了”，计为1次有效浏览。浏览过程包含开头视频（需手动点x）+结尾视频（需手动点x）+中间广告位（自动滚动）。')
}
/* 规则有关 */
let rulePopupRef = ref(); // 规则组件
// 显示规则
const isShowRule = (val: boolean) => {
  rulePopupRef.value.isShow = val;
}

/* 跳转页面 */
const skiPage = (name: string):void => {
  router.push({name})
}



/**
 * 跳转广告
*/
function skipAd() {
  adMakeMoney().then((res: any) => {
    if (res.code == 0) {
      document.addEventListener('visibilitychange', monitorPageIsShow);
      console.log(userInfoData.token, userInfoData.userInfo.user_id);
      toSystemActivity.toActivity([userInfoData.token, userInfoData.userInfo.user_id]);
      console.log('跳转广告页面!');
    }
  })
}

/**
 * 监听页面显示隐藏
*/
const monitorPageIsShow = () => {
  if (document.visibilityState === 'hidden') {
    console.log('窗口->隐藏');
  } else if (document.visibilityState === 'visible') {
    console.log('窗口->可见');
    // 获取任务进度
    taskRecord().then((res:any) => {
      if (res.code == 0){
        Object.assign(moneyIntegralData.taskRecordData, res.data);
      }
    })

  }
}

/**
 * 创建完成
*/
onMounted(() => {
  
})
/**
 * 销毁前
*/
onBeforeUnmount(() => {
  document.removeEventListener('visibilitychange', monitorPageIsShow);
})
</script>

<style lang="scss" scoped>
.find {
  .nav-box {
    width: 100%;
    height: 22vw;
  }

  .main {
    width: 100vw;
    height: calc(100% - 22vw);
    overflow-y: auto;
    box-sizing: border-box;
    padding: 5vw;
  }

  .income-box {
    width: 100%;
    background-color: #fff;
    box-shadow: 0 0 2vw rgb(202, 202, 202);
    box-sizing: border-box;
    padding: 5vw;
    border-radius: 3vw;
    margin-bottom: 6vw;

    .box {
      width: 100%;
      box-sizing: border-box;
      padding: 3.5vw 5vw;
      border-radius: 3vw;
      background-color: rgb(243, 243, 243);
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 3vw;

      dl {
        width: 50%;

        dt {
          font-size: 4vw;
          font-weight: bold;
          line-height: 8vw;
          color: #000;
          display: flex;
          align-items: center;

          .icon-tip {
            width: 4vw;
            height: 4vw;
            display: block;
            margin-left: 2vw;
          }
        }

        dd {
          font-size: 4vw;
          line-height: 8vw;
          color: rgb(164, 164, 164);

          b {
            font-size: 4.3vw;
            font-weight: bold;
            color: #000;
            margin-left: 2vw;
          }
        }
      }
    }

    .view-but {
      display: block;
      margin-left: auto;
      font-size: 4.2vw;
      color: #fff;
      box-sizing: border-box;
      background-color: rgb(0, 52, 239);
      padding: 2vw 3vw;
      border-radius: 5vw;
      width: 16vw;
      text-align: center;
    }
  }

  .title-h1 {
    width: 100%;
    font-size: 5vw;
    font-weight: bold;
    margin-bottom: 6vw;
  }

  .task-box {
    width: 100%;
    background-color: #fff;
    box-shadow: 0 0 2vw rgb(202, 202, 202);
    box-sizing: border-box;
    padding: 5vw;
    border-radius: 3vw;
    margin-bottom: 6vw;

    .title-h1 {
      width: 100%;
      font-size: 4.2vw;
      line-height: 8vw;
    }

    .title-h2 {
      width: 100%;
      font-size: 3.5vw;
      color: rgb(142, 142, 142);
      line-height: 8vw;
    }

    .schedule {
      width: 100%;
      box-sizing: border-box;
      background-color: rgb(243, 243, 243);
      padding: 4vw;
      border-radius: 3vw;
      margin-bottom: 4vw;

      .chart-box {
        width: 100%;
        display: flex;
        align-items: center;
        margin-bottom: 3vw;

        >.title {
          font-size: 3.5vw;
          margin-right: 2vw;
        }

        >.schedule-box {
          width: calc(100% - 9vw);
          height: 4.5vw;
          position: relative;
          background-color: rgb(190, 190, 190);
          border-radius: 3vw;
          overflow: hidden;

          .figure {
            position: absolute;
            width: 20%;
            height: 4.5vw;
            border-radius: 3vw;
            background-color: rgb(109, 137, 238);
            top: 50%;
            left: 0;
            transform: translateY(-50%);
          }

          .val {
            position: absolute;
            top: 50%;
            right: 1%;
            transform: translateY(-50%);
            font-size: 3.5vw;
            font-weight: bolder;
            color: rgb(0, 52, 239);
          }
        }
      }

      .number-box {
        margin-left: auto;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 3.5vw;
        font-weight: bolder;

        >.icon-tip {
          width: 3.5vw;
          height: 3.5vw;
          margin-right: 2vw;
        }

        >.val {
          font-size: 3.5vw;
          font-weight: bold;
          color: rgb(0, 52, 239);
        }
      }
    }

    .go-lucrative {
      width: 100%;
      box-sizing: border-box;
      background-color: rgb(0, 52, 239);
      font-size: 4vw;
      font-weight: bold;
      padding: 3vw;
      border-radius: 3vw;
      color: #fff;
      text-align: center;
    }
  }
}

.rule-box {
  position: absolute;
  top: 57%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85vw;
  height: 120vw;
  background-color: #fff;
  box-sizing: border-box;
  padding: 5vw 5vw 5vw 5vw;
  border-radius: 5vw;

  .icon-logo {
    width: 29vw;
    height: 33.5vw;
    margin: -18vw auto 5vw auto;
    display: block;
  }

  .title {
    width: 100%;
    text-align: center;
    font-size: 5vw;
    color: #000;
    position: relative;
    box-sizing: border-box;
    padding-bottom: 4vw;
    margin-bottom: 3vw;

    &:before {
      content: "";
      position: absolute;
      width: 8vw;
      height: 0.5vw;
      background-color: rgb(233, 233, 233);
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
  }

  .content-box {
    width: 100%;
    height: 60vw;
    background-color: aqua;
    overflow-y: auto;
    font-size: 3.5vw;
    line-height: 5vw;
    margin-bottom: 5vw;
  }

  .close-but {
    font-size: 4vw;
    color: #fff;
    background-color: rgb(0, 52, 239);
    padding: 3vw 5vw;
    text-align: center;
    width: 40vw;
    margin: 0 auto;
    border-radius: 3vw;
  }
}
</style>
