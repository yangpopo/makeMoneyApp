<template>
  <div class="withdraw">
    <navBox class="head">
      <NavBar left-arrow title="提现" @click-left="pageReturn">
      </NavBar>
    </navBox>

    <div class="container-box">
      <div class="card-box">
        <div class="card">
          <img class="card-bg" src="@/assets/image/accountDetails/card-bg.png" alt="">
          <div class="card-number" @click="operationBankCard">点击绑定银行卡</div>
          <div class="edit-but"><van-icon name="records-o" color="#fff" size="15" />编辑</div>
        </div>
        <dl class="illustrate">
          <dt>提现至:</dt>
          <dd  @click="bankCardRef.isShow = true" >切换</dd>
        </dl>
      </div>
      <div class="withdraw-info">
        <div class="title-h1">可提现余额: ¥0.00</div>
        <div class="input-box sum">
          <span class="title">¥</span>
          <input v-model="withdrawDepositData.sum" readonly class="input-obj" type="text" placeholder="请输入提现金额" @click="isShowNumberKeyboard = true">
        </div>
        <div class="input-box code">
          <span class="title">验证码</span>
          <input v-model="withdrawDepositData.code" maxlength="6" class="input-obj" type="text" placeholder="短信验证码">
          <span class="send-code" v-if="codeState.countDown == 60" @click="getCode">发送验证码</span>
          <span class="count-down" v-else>{{ codeState.countDown }}s</span>
        </div>
        <div class="input-box cost">
          <span class="title">提现费用:</span>
          <span class="val">0.00</span>
        </div>
        <div class="withdraw-deposit-but" @click="withdrawDeposit">提现</div>
        <div class="hint">温馨提示：系统处理可能存在时间差，请耐心等待</div>
      </div>
    </div>
    <popupBox ref="bankCardRef" :option="{position:'bottom', round: true}">
      <vanPicker @cancel="bankCardRef.isShow = false" title="选择银行卡" :columns="bankCardData" @confirm="bankCardConfirm" />
    </popupBox>
    <vanNumberKeyboard :show="isShowNumberKeyboard" @blur="isShowNumberKeyboard = false" extra-key="." @input="phoneInput" @delete="phoneDelete"></vanNumberKeyboard>
  </div>
</template>

<script lang="ts">
export default {
  name: 'withdraw'
}
</script>

<script setup lang="ts">
import navBox from '@/components/navBox.vue';
import popupBox from '@/components/popupBox.vue';

import { NavBar, Icon as vanIcon, showToast,  NumberKeyboard as vanNumberKeyboard, Picker as vanPicker, } from 'vant';
// @ts-ignore
import { RouterLink, useRouter } from 'vue-router';
import { ref, reactive } from 'vue';

const router = useRouter(); // 路由对象

/* 返回上一页面 */
const pageReturn = (): void => {
  router.go(-1);
}

/* 是否显示提现键盘 */
let isShowNumberKeyboard = ref(false);
/* 键盘更新手机号 */
const phoneInput = (data: any): void => {
  if (Number.parseFloat(withdrawDepositData.sum) > 99999) {
    showToast('超过了最大数值!')
    return
  }
  if (!withdrawDepositData.sum.includes('.')) {
    withdrawDepositData.sum += data.toString();
  } else {
    if (!data.toString().includes('.')) {
      let splitNumber = withdrawDepositData.sum.split('.');
      if (splitNumber[1].length < 2) {
        withdrawDepositData.sum += data.toString();
      }
    }
  }
}
/* 键盘删除手机号 */
const phoneDelete = (data: any): void => {
  if (withdrawDepositData.sum) {
    withdrawDepositData.sum = withdrawDepositData.sum.substr(0, (withdrawDepositData.sum.length - 1));
  }
}

/* 操作银行卡 */
const operationBankCard = ():void => {
  router.push({ name: 'bankCard' });
}

/* 银行弹窗有关 */
const bankCardRef = ref();
let bankCardData = reactive([
  { text: '工商银行', value: '工商银行' },
  { text: '建设银行', value: '建设银行' },
  { text: '农业银行', value: '农业银行' },
  { text: '中国银行', value: '中国银行' },
])
/* 确认银行卡 */
const bankCardConfirm = (value:any): void => {
  console.log(value.selectedValues[0], '-*-*-*-*');
  bankCardRef.value.isShow = false;
}

/* 提现参数 */
let withdrawDepositData = reactive({
  sum: '',
  code: ''
})

/* 获取code状态 */
let codeState = reactive({
  isSendCode: false, // 是否发送了code
  countDown: 60, // 倒计时值
})

/* 获取验证码 */
const getCode = ():void => {
  codeState.isSendCode = true;
  codeCountDown(); // 开始倒计时
}

/* 验证码倒计时 */
let codeCountDownObj:number;
const codeCountDown = () => {
  clearInterval(codeCountDownObj);
  codeState.countDown -= 1;
  codeCountDownObj = setInterval(() => {
    codeState.countDown--;
    if (codeState.countDown <= 0) {
      codeState.countDown = 60;
      clearInterval(codeCountDownObj)
    }
  }, 1000)
}

/* 提现 */
const withdrawDeposit = () => {
  withdrawDepositData.sum = Number.parseFloat(withdrawDepositData.sum).toString() == 'NaN' ? '0' : Number.parseFloat(withdrawDepositData.sum).toString();
  let sumNumber = Number.parseFloat(withdrawDepositData.sum);
  if (sumNumber <= 0) {
    showToast('请输入正确的提现金额!')
    return
  }
}

</script>

<style lang="scss" scoped>
.withdraw {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background-color: rgb(245, 245, 245);

  .head {}

  .container-box {
    width: 100vw;
    height: calc(100vh - 22.3vw);
    overflow-y: auto;
    box-sizing: border-box;
    border-radius: 3vw 3vw 0 0;
    padding-bottom: 10vw;

    .card-box {
      width: 100%;
      position: relative;
      box-sizing: border-box;
      padding: 5vw 3vw;
      background-color: #fff;
      border-radius: 0 0 3vw 3vw;
      margin-bottom: 3vw;

      .card {
        width: 100%;
        position: relative;
        box-sizing: border-box;
        margin-bottom: 3vw;

        .card-bg {
          width: 100%;
          height: auto;
          position: relative;
          z-index: 0;
          display: block;
        }

        .card-number {
          position: absolute;
          font-size: 5.2vw;
          font-weight: bold;
          color: #fff;
          z-index: 1;
          top: 50%;
          left: 7%;
        }

        .edit-but {
          position: absolute;
          font-size: 3.5vw;
          font-weight: bold;
          color: #fff;
          z-index: 1;
          top: 10%;
          right: 7%;
          display: flex;
          align-items: center;
        }
      }

      .illustrate {
        width: 100%;
        box-sizing: border-box;
        padding: 0 2vw;
        display: flex;
        justify-content: space-between;
        font-size: 3.5vw;
      }
    }

    .withdraw-info {
      width: 100%;
      background-color: #fff;
      box-sizing: border-box;
      padding: 5vw 3vw;
      border-radius: 3vw;

      .title-h1 {
        width: 100%;
        font-size: 3.2vw;
      }

      .input-box {
        box-sizing: border-box;
        padding: 5vw 2vw;
        border-bottom: 1px solid rgb(227, 227, 227);
        display: flex;
        align-items: center;

        &.sum {
          .title {
            font-size: 8vw;
            margin-right: 3vw;
            line-height: initial;
          }

          .input-obj {
            width: 70%;
            font-size: 8vw;
          }
        }

        &.code {
          .title {
            font-size: 4vw;
            margin-right: 3vw;
          }

          .input-obj {
            width: 60%;
            font-size: 4vw;
          }

          .send-code, .count-down {
            width: 20vw;
            font-size: 4vw;
            text-align: center;
            color: rgb(0, 52, 239);
          }
        }

        &.cost {
          justify-content: space-between;

          .title {
            font-size: 3vw;
            color: rgb(161, 161, 161);
          }

          .val {
            font-size: 3vw;
            color: rgb(161, 161, 161);
          }
        }
      }
      .withdraw-deposit-but {
        width: 100%;
        font-size: 4vw;
        background-color: rgb(0, 52, 239);
        color: #fff;
        box-sizing: border-box;
        padding: 3vw;
        border-radius: 2vw;
        text-align: center;
        margin: 5vw 0 3vw 0;
      }
      .hint {
        width: 100%;
        font-size: 3.2vw;
        color: #cfcfcf;
      }
    }
  }
}</style>
