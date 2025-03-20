<template>
  <div class="bank-card">
    <navBox class="head">
      <van-icon class="cross-but" name="cross" color="#000" size="25px" @click="pageReturn" />
    </navBox>

    <div class="container-box">
      <dl class="title-h1">
        <dt>添加银行卡</dt>
        <dd>请绑定持卡人本人的银行卡</dd>
      </dl>
      <van-form @submit="submitBankCardData" class="form-box">
        <van-cell-group inset>
          <van-field v-model="creditCardData.name" name="name" label="持卡人" placeholder="请输入姓名" :rules="[{ required: true, message: '请输入姓名' }]" />
          <van-field v-model="creditCardData.IDnumber" name="IDnumber" label="身份证号" maxlength="18" placeholder="请输入身份证号" :rules="[{ required: true, message: '请输入正确的身份证号', pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/ }]" />
          <van-field v-model="creditCardData.creditCardNumbers" name="creditCardNumbers" label="卡号" placeholder="请输入银行卡卡号" maxlength="19" :rules="[{ required: true, message: '请输入正确的银行卡卡号', pattern: /^\d{16,19}$/ }]" />
          <van-field v-model="creditCardData.creditCard" is-link readonly name="开户银行" label="开户银行" placeholder="请选择开户银行" :rules="[{ required: true, message: '请选择开户银行' }]" @click="bankCardRef.isShow = true" />
          <div class="hint-box">
            <div class="title">支持绑定15家银行</div>
            <div class="bank-box">
              <img class="icon-bank" src="@/assets/image/accountDetails/bank-01.png" alt="">
              <img class="icon-bank" src="@/assets/image/accountDetails/bank-02.png" alt="">
              <img class="icon-bank" src="@/assets/image/accountDetails/bank-03.png" alt="">
              <img class="icon-bank" src="@/assets/image/accountDetails/bank-04.png" alt="">
              <img class="icon-bank" src="@/assets/image/accountDetails/bank-05.png" alt="">
              <van-icon name="ellipsis" size="20" color="#cbcbcb" />
            </div>
          </div>
          <van-field v-model="creditCardData.phone" name="phone" label="手机号" maxlength="11" placeholder="请填写本人实名银行预留的手机号" :rules="[{ required: true, message: '请填写本人实名银行预留的手机号', pattern: /^1[2,3,4,5,6,7,8,9][0-9]{9}$/ }]"/>
          <van-field name="验证码" label="验证码" :error-message="errorInfoCode" >
            <template #input>
              <input v-model="creditCardData.code" type="text" class="phone-code" placeholder="请填写验证码">
              <span class="send-phone-code" v-if="codeState.countDown == 60" @click="getCode">发送验证码</span>
              <span class="count-down" v-else>{{ codeState.countDown }}s</span>
            </template>
          </van-field>
          <van-field name="password" label="密码" placeholder="请填写登录密码" :error-message="errorInfoPassword">
            <template #input>
              <input v-model="creditCardData.password" :type="isShowPassword ? 'text' : 'password'" class="login-password" placeholder="请填写登录密码" maxlength="16" />
              <van-icon v-if="!isShowPassword" class="eye-icon" name="eye-o" size="18" color="#000" @click="isShowPassword = true" />
              <van-icon v-else class="eye-icon" name="closed-eye" size="18" color="#000" @click="isShowPassword = false" />
            </template>
          </van-field>
        </van-cell-group>
        <input>
        <van-button class="submit-binding" round block type="primary" native-type="submit">提交绑定</van-button>
      </van-form>


    </div>
    <popupBox ref="bankCardRef" :option="{position:'bottom', round: true}">
      <vanPicker @cancel="bankCardRef.isShow = false" title="选择银行卡" :columns="bankCardData" @confirm="bankCardConfirm" />
    </popupBox>
  </div>
</template>

<script lang="ts">
export default {
  name: 'bankCard'
}
</script>

<script setup lang="ts">
import navBox from '@/components/navBox.vue';
import popupBox from '@/components/popupBox.vue';

import { Icon as vanIcon, showToast, Picker as vanPicker, Form as vanForm, Field as vanField, CellGroup as vanCellGroup } from 'vant';
// @ts-ignore
import { RouterLink, useRouter } from 'vue-router';
import { ref, reactive } from 'vue';

const router = useRouter(); // 路由对象

/* 返回上一页面 */
const pageReturn = (): void => {
  router.go(-1);
}

/* 银行卡信息 */
let creditCardData = reactive({
  name: '', // 持卡人姓名
  IDnumber: '', // 身份证号
  creditCardNumbers: '', // 银行卡号
  creditCard: '', // 银行
  phone: '', // 手机号
  code: '', // 验证码
  password: '', // 密码
})

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
  creditCardData.creditCard = value.selectedValues[0];
  bankCardRef.value.isShow = false;
}

/* 是否显示密码 */
let isShowPassword = ref(false);

/* 获取code状态 */
let codeState = reactive({
  isSendCode: false, // 是否发送了code
  countDown: 60, // 倒计时值
})

/* 获取验证码 */
const getCode = ():void => {
  codeState.isSendCode = true;
  /* 校验手机号 */
  const phoneReg = /^1[2,3,4,5,6,7,8,9][0-9]{9}$/; // 手机号正则
  if (!phoneReg.test(creditCardData.phone)) {
    showToast('请输入正确的手机号!')
    return
  }
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

/* code错误信息 */
let errorInfoCode = ref('');

/* 登录密码错误信息 */
let errorInfoPassword = ref('');


/* 提交银行卡信息 */
const submitBankCardData = () => {
  if (creditCardData.code == '') {
    errorInfoCode.value = '请输入验证码';
    return
  }
  if (creditCardData.password == '') {
    errorInfoPassword.value = '请输入登录密码';
    return
  }
}

</script>

<style lang="scss" scoped>
.bank-card {
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background-color: rgb(245, 245, 245);

  .cross-but {
    margin-left: 3vw;
  }


  .container-box {
    width: 100vw;
    height: calc(100vh - 17.6vw);
    overflow-y: auto;
    box-sizing: border-box;
    border-radius: 3vw 3vw 0 0;
    background-color: #fff;
    padding: 3vw 3vw 10vw 3vw;

    > .title-h1 {
      width: 100%;
      text-align: center;
      color: #000;
      margin-bottom: 4vw;
      box-sizing: border-box;
      padding-bottom: 5vw;
      border-bottom: 1px solid rgb(242, 242, 242);

      dt {
        font-size: 4.5vw;
        font-weight: bold;
        line-height: 10vw;
      }

      dd {
        font-size: 3.4vw;
      }
    }
    .form-box {
      width: 100%;
      :deep(.van-cell-group--inset) {
        margin: 0;
      }
      :deep(.van-cell) {
        padding-left: 0;
        padding-right: 0;
      }
      :deep(.van-cell:after) {
        transform: scaleY(1);
        border-bottom: 1px solid rgb(242, 242, 242);
        width: 100%;
        left: 0;
      }
      :deep(.van-field__label) {
        font-weight: bold;
      }
      :deep(.van-cell--clickable:active) {
        background-color: transparent;
      }
      .hint-box {
        width: 100%;
        box-sizing: border-box;
        margin: 3vw 0;
        background-color: rgb(240, 240, 240);
        padding: 4vw;
        border-radius: 3vw;
        .title {
          font-size: 3.5vw;
          color: #000;
          margin-bottom: 2vw;
        }
        .bank-box {
          width: 100%;
          display: flex;
          align-items: center;
          .icon-bank {
            width: 5vw;
            height: 5vw;
            display: block;
            margin-right: 2vw;
          }
        }
      }
      .phone-code, .login-password {
        font-size: 4vw;
        
        margin-right: 10%;
        &::placeholder {
          color: var(--van-field-placeholder-text-color);
          font-size: 3.5vw;
        }
      }
      .phone-code {
        width: 60%;
      }
      .login-password {
        width: 75%;
      }
      .send-phone-code, .count-down {
        width: 20vw;
        font-size: 3.5vw;
        color: rgb(0, 52, 239);
        text-align: center;
      }
    }
    .submit-binding {
      width: 100%;
      color: #fff;
      background-color: rgb(0, 52, 239);
      text-align: center;
      border-radius: 2vw;
      padding: 3vw;
      box-sizing: border-box;
      font-size: 3.5vw;
      margin-top: 5vw;
    }
  }
}
</style>
