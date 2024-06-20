<template>
  <div class="call-center">
    <navBox class="nav-box">
      <NavBar left-arrow title="找回密码" @click-left="pageReturn">
      </NavBar>
    </navBox>
    <div class="container-box">
      <dl class="title-h1">
        <dd>检测到您当前登录的手机号为:</dd>
      </dl>
      <dl class="title-h2">
        <dt>13333333333</dt>
        <dd>请验证身份</dd>
      </dl>
      <div class="code-box">
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4000"><path d="M834.869 175.034c-7.668 0.278-15.222 0.385-22.612 0.385h-0.032c-194.413 0-280.058-89.102-280.771-89.87L512.027 64.28l-19.454 21.268c-0.848 0.932-91.22 96.715-303.444 89.486l-27.255-0.93v403.924c0 105.752 35.307 260.001 340.618 378.013l9.509 3.68 9.504-3.68C826.815 838.03 862.123 683.78 862.123 578.028V174.104l-27.254 0.93zM477.186 697.78L273.372 517.181l54.153-43.882 108.368 79.957s149.63-154.798 294.097-227.034l20.636 23.245s-180.57 149.635-273.44 348.312z" p-id="4001"></path></svg>
        <input class="input-obj" v-model="phone" type="text" placeholder="请输入验证码" maxlength="6" />
        <span class="send-phone-code" v-if="codeState.countDown == 60" @click="getCode">发送验证码</span>
        <span class="count-down" v-else>{{ codeState.countDown }}s</span>
      </div>
      <div class="input-password-box">
        <input class="input-obj" maxlength="16" :type="isShowPassword ? 'password' : 'text'" placeholder="请输入新密码(8~20位数字和字母)" >
        <van-icon v-if="isShowPassword == false" name="eye-o" color="#c0c0c0" size="5vw" @click="isShowPassword = true"/>
        <van-icon v-else name="closed-eye" color="#c0c0c0" size="5vw" @click="isShowPassword = false"/>
      </div>
      <div class="input-password-box">
        <input class="input-obj" maxlength="16" :type="isShowRepetitionPassword ? 'password' : 'text'" placeholder="请重复输入新密码" >
        <van-icon v-if="isShowRepetitionPassword == false" name="eye-o" color="#c0c0c0" size="5vw" @click="isShowRepetitionPassword = true"/>
        <van-icon v-else name="closed-eye" color="#c0c0c0" size="5vw" @click="isShowRepetitionPassword = false"/>
      </div>
      <div class="note">如果原手机收不到验证码,请联系客服进行修改手机号操作</div>
      <div class="confirm-modify-but" @click="submitPassword">确定</div>
     
      
    </div>
  </div>
</template>

<script lang="ts">
export default { name: 'callCenter' }
</script>

<script setup lang="ts">
import navBox from '@/components/navBox.vue';

import { NavBar, Icon as vanIcon, showToast, CellGroup as vanCellGroup,  Cell as vanCell } from 'vant';


// @ts-ignore
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

/* 返回上一页面 */
const pageReturn = ():void => {
  router.go(-1);
}

const router = useRouter(); /* 路由对象 */

/* 跳转页面 */
const skiPage = (name: string):void => {
  router.push({name})
}




/* 获取code状态 */
let codeState = reactive({
  isSendCode: false, // 是否发送了code
  countDown: 60, // 倒计时值
})

/* 手机号 */
let phone = ref('');

/* 获取验证码 */
const getCode = ():void => {
  codeState.isSendCode = true;
  /* 校验手机号 */
  const phoneReg = /^1[2,3,4,5,6,7,8,9][0-9]{9}$/; // 手机号正则
  if (!phoneReg.test(phone.value)) {
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

/* 是否显示密码 */
let isShowPassword = ref(true);
let isShowRepetitionPassword = ref(true);

/* 提交密码 */
const submitPassword = () => {
  pageReturn();
  console.log('提交密码');
}




</script>

<style lang="scss" scoped>
.call-center {
  width: 100vw;
  min-height: 100vh;
  // background-color: rgb(245, 245, 245);
  background-color: #fff;
  .nav-box {
    width: 100%;
  }
  .container-box {
    width: 100vw;
    height: calc(100vh - 22.3vw);
    overflow-y: auto;
    box-sizing: border-box;
    padding: 5vw 5vw 10vw 5vw;
    position: relative;
    .title-h1 {
      width: 100%;
      text-align: center;
      margin-bottom: 4vw;
      dt {
        font-size: 4.2vw;
        font-weight: bold;
        color: #000;
        margin-bottom: 2vw;
      }
      dd {
        font-size: 3.2vw;
        color: #8f8f8f;
      }
    }
    .title-h2 {
      width: 100%;
      text-align: center;
      margin-bottom: 3vw;
      dt {
        font-size: 4.2vw;
        font-weight: bold;
        color: #000;
        margin-bottom: 2vw;
      }
      dd {
        font-size: 3.2vw;
        color: #8f8f8f;
      }
    }
    .code-box {
      box-sizing: border-box;
      padding: 3vw;
      background-color: rgb(243, 243, 243);
      border-radius: 5vw;
      display: flex;
      align-items: center;
      margin-bottom: 2vw;
      svg.icon {
        width: 5vw;
        height: 5vw;
        vertical-align: middle;
        overflow: hidden;
        fill: #7f7f7f;
        margin-right: 3vw;
      }
      .input-obj {
        height: 5vw;
        line-height: 5vw;
        background-color: transparent;
        border: none;
        font-size: 3.2vw;
        color: #000;
        width: 50vw;
        border-right: 1px solid #bbbbbb;
      }
      .send-phone-code, .count-down {
        width: 30vw;
        font-size: 3.5vw;
        color: rgb(0, 52, 239);
        text-align: center;
      }
    }

    .input-password-box {
      width: 100%;
      box-sizing: border-box;
      background-color: rgb(243, 243, 243);
      padding: 3vw 4vw;
      border-radius: 6vw;
      margin-bottom: 3vw;
      display: flex;
      align-items: center;
      .input-obj {
        width: 75vw;
      }
    }

    .note {
      width: 100%;
      font-size: 2.8vw;
      color: #4e4e4e;
      text-align: center;
    }
    .confirm-modify-but {
      width: calc(100% - 5vw - 5vw);
      position: absolute;
      bottom: 10vw;
      font-size: 4vw;
      color: #fff;
      box-sizing: border-box;
      padding: 3vw;
      border-radius: 6vw;
      background-color: rgb(0, 52, 239);
      text-align: center;
    }
    .input-phone-obj {
      width: 100%;
      box-sizing: border-box;
      background-color: rgb(243, 243, 243);
      padding: 3vw 4vw;
      border-radius: 6vw;
      margin-bottom: 3vw;
    }
  }
}
input::-ms-reveal {
  display: none;
}
</style>
