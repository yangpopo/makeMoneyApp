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
              <b class="title-box">当前账户可用金额(元) <van-icon v-if="isShowMone" @click="isShowMone = false" class="eye-icon"
                  name="eye-o" color="#fff" size="15" /><van-icon v-else @click="isShowMone = true" class="eye-icon"
                  name="closed-eye" color="#fff" size="15" /></b>
              <van-icon name="question-o" color="#fff" size="15" @click="isShowRule(true)" />
            </dt>
            <dd>{{ isShowMone ? currencyFormat(moneyIntegralData.money) : '****' }}</dd>
            <RouterLink :to="{ name: 'withdraw' }" class="withdraw-but">提现</RouterLink>
          </dl>
          <!-- <div class="balance-detail">
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
          </div> -->
        </div>
        <ul class="nav-column">
          <li :class="{ 'selected': columnType == 0 }" @click="switchColumnType(0)">金额明细</li>
          <li :class="{ 'selected': columnType == 1 }" @click="switchColumnType(1)">积分明细</li>
        </ul>
        <ul class="screen-column">
          <li :class="{ 'selected': queryDetail.type === 0 }" @click="switchQueryType(0)">全部</li>
          <li :class="{ 'selected': queryDetail.type === 1 }" @click="switchQueryType(1)">收入</li>
          <li :class="{ 'selected': queryDetail.type === -1 }" @click="switchQueryType(-1)">支出</li>
          <!-- <li @click="screenPopupRef.isShow = true">筛选<van-icon name="arrow-down" /></li> -->
        </ul>
        <div class="date-title" @click="timePopupRef.isShow = true">
          <b class="date">{{ checkedYearMonth.year }}</b>年<b class="date">{{ checkedYearMonth.month }}</b>月<van-icon name="arrow-down" />
        </div>
        <ul class="total-box">
          <li>收入¥{{ currencyFormat(queryIncomeExpendSum.income) }}</li>
          <li>支出¥{{ currencyFormat(queryIncomeExpendSum.expend) }}</li>
        </ul>
        <div class="detail-item" v-for="item in detailList" :key="item.add_time">
          <img class="integral-icon" src="@/assets/image/accountDetails/integral-icon.png" alt="">
          <dl class="explain">
            <dt>{{ item.desc }}</dt>
            <dd>{{ item.timeFormat }}</dd>
          </dl>
          <span class="val">
            {{ item.add_type == 1 ? '+' : '-' }}
            <template v-if="columnType == 0">{{ item.money_num }}</template>
            <template v-else>{{ item.score_num }}</template>
          </span>
        </div>
      </List>
    </PullRefresh>
    <!-- <popupBox ref="screenPopupRef" :option="{position:'bottom', round: true}">
      <vanPicker @cancel="screenPopupRef.isShow = false" title="筛选" :columns="screenOption" @confirm="screenConfirm" />
    </popupBox> -->
    <popupBox ref="timePopupRef" :option="{ position: 'bottom', round: true }">
      <vanPicker @cancel="timePopupRef.isShow = false" title="筛选" :columns="yearsOption" @confirm="timeConfirm" />
    </popupBox>
    <overlayBox ref="rulePopupRef">
      <div class="rule-box" @click.stop>
        <img class="icon-logo" src="@/assets/image/find/logo.png" alt="">
        <h1 class="title">收益说明</h1>
        <div class="content-box">
          asdfasdfasdfasdfasdfasdfasdfasdfsadfasdf阿斯顿发生大区分啥地方阿斯顿发送到发阿斯顿发送到发阿斯顿发是打发斯蒂芬阿斯顿发送到发阿斯顿发送到发沙发as</div>
        <div class="close-but" @click="isShowRule(false)">我知道了</div>
      </div>
    </overlayBox>
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
import overlayBox from '@/components/overlayBox.vue';
import { zeroReplenish, moneyFormat, formatDate } from '@/assets/js/public'

import { NavBar, Icon as vanIcon, PullRefresh, List, showToast, showSuccessToast, Picker as vanPicker } from 'vant';
// @ts-ignore
import { RouterLink, useRouter } from 'vue-router';
import { ref, reactive, onMounted } from 'vue';
import { resMoney, resScore } from '@/api/getResource'
import { useMoneyIntegral } from '@/stores/moneyIntegral'


const moneyIntegralData = useMoneyIntegral()

const router = useRouter(); // 路由对象

// 选中的月
let checkedYearMonth = reactive({
  year: '2024',
  month: '02'
});


/**
 * 优化货比格式
*/
function currencyFormat(val: number | string): string {
  return moneyFormat(val)
}

// 请求参数明细
const queryDetail = reactive({
  start: 0, // 开始时间戳
  end: 0, // 结束时间戳
  type: 0, // 类型 0所有，1收入，-1支出
})


/* 栏目类型 */
let columnType = ref(0);
/**
 * 切换栏目类型
 * @param index 栏目索引
*/
const switchColumnType = (index: number): void => {
  columnType.value = index;
  queryDetail.type = 0; // 初始化->切换查询类型
  detailList.splice(0, detailList.length); // 清空数据
  getPageData();
}

/**
 * 切换查询类型
 * @param val 类型值 0所有，1收入，-1支出
*/
function switchQueryType(val: number): void {
  queryDetail.type = val;
  detailList.splice(0, detailList.length); // 清空数据
  getPageData();
}

/* 返回上一页面 */
const pageReturn = (): void => {
  router.go(-1);
}


/* 是否显示金额 */
const isShowMone = ref(true);

interface useDetailList {
  score_num?: number;
  money_num?: string;
  add_type: number;
  add_time: number | string,
  desc: string;
  timeFormat: string;
}

/* 明细列表 */
let detailList = reactive<useDetailList[] | any[]>([]);

/* 查询的收入支出和 */
const queryIncomeExpendSum = reactive({
  income: 0,
  expend: 0
})

/**
 * 获取页面信息
*/
async function getPageData() {
  let queryMethod: any[] = [];
  if (columnType.value == 0) {
    // 查询现金
    queryMethod = [resMoney(queryDetail)];
  } else if (columnType.value == 1) {
    // 查询积分
    queryMethod = [resScore(queryDetail)];
  }
  await Promise.all(queryMethod).then((res: any) => {
    // 处理金额
    if (res[0].code == 0) {
      Object.assign(detailList, res[0].data);
      if (queryDetail.type == 0) {
        // 归零总收入和支出
        queryIncomeExpendSum.income = 0;
        queryIncomeExpendSum.expend = 0;
      }
      // 求总的收入支出
      if (columnType.value == 0) {
        detailList.forEach((item:any) => {
          item['timeFormat'] = formatDate((Number.parseInt(item.add_time) * 1000).toString());
          if (queryDetail.type == 0) {
            if (item.add_type == 1) {
              // 收入
              queryIncomeExpendSum.income = (queryIncomeExpendSum.income * 100 + Number.parseFloat(item?.money_num || '0') * 100) / 100
            } else {
              // 支出
              queryIncomeExpendSum.expend = (queryIncomeExpendSum.expend * 100 + Number.parseFloat(item?.money_num || '0') * 100) / 100
            }
          }
        })
      } else if (columnType.value == 1) {
        detailList.forEach(item => {
          item['timeFormat'] = formatDate((Number.parseInt(item.add_time) * 1000).toString());
          if (queryDetail.type == 0) {
            if (item.add_type == 1) {
              // 收入
              queryIncomeExpendSum.income = (queryIncomeExpendSum.income * 100 + Number.parseFloat(item?.score_num || '0') * 100) / 100
            } else {
              // 支出
              queryIncomeExpendSum.expend = (queryIncomeExpendSum.expend * 100 + Number.parseFloat(item?.score_num || '0') * 100) / 100
            }
          }
        })
      }
    }
  })
}

/* 下拉刷新 */
const refreshState = ref(false); // 加载状态
const onRefresh = async () => {
  detailList.splice(0, detailList.length); // 清空数据
  await getPageData();
  showSuccessToast('刷新成功');
  refreshState.value = false;
};
/* 上拉加载 */
const loadingState = ref(false); // 加载状态
const isFinished = ref(false); // 是否加载完成
const onLoad = async () => {
  setTimeout(async () => {
    // showToast('加载成功');
    await getPageData();
    loadingState.value = false;
    isFinished.value = true
  }, 1000);
};



/* 查询筛选 */
// let screenPopupRef = ref(); // 筛选弹窗对象
// const screenOption = reactive([
//   { text: '直播', value: 'Hangzhou' },
//   { text: '广告', value: 'Ningbo' }
// ]);
// const screenConfirm = (value:any):void => {
//   console.log(value.selectedOptions[0].text, '-*-**--*');
//   screenPopupRef.value.isShow = false; /* 关闭弹窗 */
// }

const timePopupRef = ref(); // 日期选择弹窗
/* 日期选项 */
const yearsData = (): any => {
  let yearsData: any[] = [];
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
    children: []
  })
  for (let i = 0; i < currentTimeMonth; i++) {
    yearsData[yearsData.length - 1].children.push({
      text: zeroReplenish(i + 1),
      value: zeroReplenish(i + 1),
    })
  }
  return yearsData
}

const yearsOption = reactive(yearsData()); // 创建日历数据

/**
 * 确认时间选择
*/
function timeConfirm(data: any) {
  countQueryStartEnd(data.selectedValues[0], data.selectedValues[1]);
  checkedYearMonth.year = data.selectedValues[0];
  checkedYearMonth.month = data.selectedValues[1];
  timePopupRef.value.isShow = false;
  detailList.splice(0, detailList.length); // 清空数据
  getPageData();
}

/**
 * 计算查询开始和结束时间
 * @param year 年
 * @param month 月
*/
function countQueryStartEnd(year = null, month = null) {
  let currentTime;
  if (!year || !month) {
    currentTime = new Date(); // 获取当前时间
  } else {
    currentTime = new Date(`${year}/${month}/1`); // 获取当前时间
  }
  // 初始化时间
  currentTime.setDate(1); // 设置当前时间的日期为1号
  queryDetail.start = currentTime.getTime() / 1000; // 设置开始时间
  currentTime.setMonth(currentTime.getMonth() + 1);
  queryDetail.end = currentTime.getTime() / 1000;
}

const rulePopupRef = ref();
// 显示规则
const isShowRule = (val: boolean) => {
  rulePopupRef.value.isShow = val;
}

/* 创建完成 */
onMounted(() => {
  // 初始化日期
  checkedYearMonth.year = zeroReplenish(new Date().getFullYear());
  checkedYearMonth.month = zeroReplenish(new Date().getMonth() + 1);
  countQueryStartEnd();
})

</script>

<style lang="scss" scoped>
:deep(.van-nav-bar__title) {

  --van-nav-bar-title-text-color: #fff;
  --van-border-width: 0;
}

:deep(.van-nav-bar .van-icon) {
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

        .withdraw-but {
          position: absolute;
          right: 0;
          bottom: 1vw;
          background-color: #fff;
          color: rgb(0, 52, 239);
          box-sizing: border-box;
          padding: 0.5vw 2.5vw;
          border-radius: 5vw;
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
