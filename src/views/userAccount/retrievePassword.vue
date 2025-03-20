<template>
  <div class="logon">
    <div class="title-h1">欢迎使用DATER</div>
    <div class="phone input-box">
      <!-- <div class="country-code">+86</div> -->
      <input class="input-obj" v-model="accountData.phone" maxlength="11" placeholder="请输入登录账号" type="text">
    </div>
    <div class="code input-box">
      <input class="input-obj" v-model="accountData.code" maxlength="30" type="test" placeholder="邮件验证码">
      <div class="get-code-but" v-if="codeState.countDown == 60" @click="getCode">发送验证码</div>
      <div class="get-count-down" v-else>{{ codeState.countDown }}s</div>
    </div>
    <div class="password input-box">
      <input class="input-obj" v-model="accountData.password" maxlength="20" :type="isShowPassword ? 'password' : 'text'" placeholder="输入新密码" >
      <van-icon v-if="isShowPassword == false" name="eye-o" color="#0034ef" size="6vw" @click="isShowPassword = true"/>
      <van-icon v-else name="closed-eye" color="#0034ef" size="6vw" @click="isShowPassword = false"/>
    </div>
    <div class="more-box">
      <div class="describe">
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15526"><path d="M867.584 160.192c-149.632-16.928-262.208-57.408-334.592-120.352l-19.04-16.544-20.544 14.656C379.968 118.944 267.776 160 160 160H128v448c0 137.344 121.088 261.92 370.208 380.864l13.088 6.24 13.344-5.728C771.072 883.52 896 755.232 896 608V163.424l-28.416-3.232zM832 608c0 116.8-107.392 223.36-319.328 316.8C299.872 821.024 192 714.464 192 608V222.976c104.672-6.784 211.584-46.688 318.496-118.944C587.232 162.528 695.168 201.536 832 220.256V608zM359.776 468.672a32 32 0 1 0-47.968 42.4l121.792 137.824c12.608 14.24 30.176 21.568 47.904 21.568a64.384 64.384 0 0 0 49.696-23.52l197.6-242.72a32 32 0 0 0-49.632-40.416l-197.6 242.688-121.792-137.824z" p-id="15527"></path></svg>
        账号登录保护中
      </div>
      <RouterLink :to="{name: 'logon'}" class="logon-but">前往登录</RouterLink>
    </div>
    <div class="determine-but">确定</div>
    <van-checkbox v-model="accountData.isAgree" icon-size="20px" checked-color="#0034ef" class="checkbox">已阅读并同意<RouterLink to="/" class="register-but">《用户服务协议》</RouterLink></van-checkbox>
  </div>
</template>

<script lang="ts">
export default {
  name: 'inletPage'
}
</script>

<script setup lang="ts">
// @ts-ignore
import { ref, reactive } from 'vue'
import { RouterLink, RouterView} from 'vue-router';
import { Icon as vanIcon, Checkbox as vanCheckbox, showToast } from 'vant';

/* 是否显示密码 */
let isShowPassword = ref(true);

/* 账户信息 */
let accountData = reactive({
  phone: '',
  code: '',
  password: '',
  isAgree: false
})

/* 获取code状态 */
let codeState = reactive({
  isSendCode: false, // 是否发送了code
  countDown: 60, // 倒计时值
})

/* 获取验证码 */
const getCode = ():void => {
  codeState.isSendCode = true;
  // /* 校验手机号 */
  // const phoneReg = /^1[2,3,4,5,6,7,8,9][0-9]{9}$/; // 手机号正则
  // if (!phoneReg.test(accountData.phone)) {
  //   showToast('请输入正确的手机号!')
  //   return
  // }
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


</script>

<style lang="scss" scoped>
.logon{
  width: 100vw;
  height: 100vh;
  background-image: url("@/assets/image/logon/bg.png");
  background-size: 100% auto;
  background-position: top;
  box-sizing: border-box;
  padding: 30vw 12vw 0 12vw;
  .title-h1 {
    width: 100%;
    text-align: center;
    font-size: 8vw;
    font-weight: bold;
    margin-bottom: 20vw;
  }
  .input-box {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 4vw 0 4vw 0;
    border-bottom: 1px solid rgb(211, 211, 211);
    align-items: center;
    margin-bottom: 5vw;
    &.phone {
      .input-obj{
        width: 60vw;
      }
    }
    &.code {
      .input-obj{
        width: 48vw;
        margin-right: 3vw;
      }
      .get-code-but, .get-count-down{
        width: 25vw;
        text-align: center;
        font-size: 4.5vw;
        color: rgb(0, 52, 239)
      }
    }
    &.password{
      .input-obj{
        width: 62vw;
        margin-right: 3vw;
        // letter-spacing: 3vw;
      }
    }
    .country-code {
      font-size: 4.2vw;
      box-sizing: border-box;
      padding: 0 3vw 0 0;
      margin-right: 3vw;
      border-right: 2px solid #000;
    }
    .input-obj {
      font-size: 4.5vw;
      color: #000;
    }
    .button{
      text-align: center;
      font-size: 4.2vw;
      color: #000;
    }
  }
  .more-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10vw;
    .describe {
      display: flex;
      align-items: center;
      font-size: 3.5vw;
      color: rgb(162, 162, 162);
      .icon {
        width: 4vw;
        height: 4vw;
        vertical-align: middle;
        fill: rgb(0, 33, 167);
        overflow: hidden;
        margin-right: 2vw;
      }
    }
    .logon-but {
      display: block;
      font-size: 3.5vw;
      color: rgb(0, 52, 239);
    }
  }
  .determine-but{
    background-color: rgb(0, 52, 239);
    text-align: center;
    box-sizing: border-box;
    padding: 3vw 4vw;
    font-size: 4.5vw;
    color: #fff;
    border-radius: 2vw;
    margin-bottom: 3vw;
  }
  .checkbox {
    :deep(.van-checkbox__label) {
      color: rgb(141, 141, 141);
    }
    .register-but {
      font-size: 3.5vw;
      color: #0034ef;
    }
  }
}
input::-ms-reveal {
  display: none;
}
</style>
