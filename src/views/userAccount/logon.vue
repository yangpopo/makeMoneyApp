<template>
  <div class="logon">
    <div class="title-h1">欢迎使用中联e家</div>
    <div class="phone input-box">
      <!-- <div class="code">+86</div> -->
      <input class="input-obj" v-model="logoData.username" maxlength="25" placeholder="请输入登录账号" type="text" >
    </div>
    <div class="password input-box">
      <input class="input-obj" v-model="logoData.password" maxlength="16" type="password" placeholder="请输入登录密码">
      <RouterLink :to="{ name: 'retrievePassword' }" class="button">忘记密码?</RouterLink>
    </div>
    <div class="more-box">
      <div class="describe">
        <svg class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15526"><path d="M867.584 160.192c-149.632-16.928-262.208-57.408-334.592-120.352l-19.04-16.544-20.544 14.656C379.968 118.944 267.776 160 160 160H128v448c0 137.344 121.088 261.92 370.208 380.864l13.088 6.24 13.344-5.728C771.072 883.52 896 755.232 896 608V163.424l-28.416-3.232zM832 608c0 116.8-107.392 223.36-319.328 316.8C299.872 821.024 192 714.464 192 608V222.976c104.672-6.784 211.584-46.688 318.496-118.944C587.232 162.528 695.168 201.536 832 220.256V608zM359.776 468.672a32 32 0 1 0-47.968 42.4l121.792 137.824c12.608 14.24 30.176 21.568 47.904 21.568a64.384 64.384 0 0 0 49.696-23.52l197.6-242.72a32 32 0 0 0-49.632-40.416l-197.6 242.688-121.792-137.824z" p-id="15527"></path></svg>
        账号登录保护中
      </div>
      <RouterLink :to="{name: 'register'}" class="register-but">注册</RouterLink>
    </div>
    <div class="submit-but" @click="submitLogin">登录</div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'inletPage'
}
</script>

<script setup lang="ts">
import { logon } from '@/api/userAccount'
import { ref, reactive, onMounted } from 'vue';
import { showToast } from 'vant';
import { useUserInfo } from '@/stores/userInfo'
// @ts-ignore
import { RouterLink, useRoute, useRouter} from 'vue-router';
import { resIndex } from '@/api/getResource';
import { earningsRecord, taskRecord } from '@/api/ad';

import { useMoneyIntegral } from '@/stores/moneyIntegral';

/* 钱信息 */
const moneyIntegralData = useMoneyIntegral();

const route = useRoute(); // 路由参数
const router = useRouter(); // 路由对象

/* 跳转页面 */
const skiPage = (name: string):void => {
  router.replace({name})
}

/* 登录数据 */
let logoData = reactive({
  // username: 'test',
  // password: '123456',
  username: '',
  password: '',
});


/* 初始化用户信息 */
const userInfoPinia = useUserInfo()
/* 如果已经登录了,就跳转首页 */
if (userInfoPinia.token) {
  skiPage('important')
}


/**
 * 提交登录
*/
const submitLogin = () => {
  /* 验证登录账号 */
  if (logoData.username.length <= 0) {
    showToast('请输入登录账号!')
    return
  }

  /* 验证登录密码 */
  if (logoData.password.length <= 0) {
    showToast('请输入登录密码!')
    return
  }
  logon(logoData).then((res:any) => {
    if (res.code == 0) {
      userInfoPinia.updateToken(res.data.token);
      userInfoPinia.updateUserInfo(res.data.user_info);

      /* 初始化钱和积分 */
      resIndex().then((res: any) => {
        if (res.code == 0) {
          moneyIntegralData.money = res.data.money;
          moneyIntegralData.score = res.data.score;
        }
      })
      
      // 获取收益记录
      earningsRecord().then((res:any) => {
        if (res.code == 0){
          Object.assign(moneyIntegralData.earningsRecordData, res.data);
        }
      })

      // 获取任务进度
      taskRecord().then((res:any) => {
        if (res.code == 0){
          Object.assign(moneyIntegralData.taskRecordData, res.data);
        }
      })

      // 登录成功调整页面
      if (route.query.parentName) {
        skiPage(route.query.parentName.toString()); // 跳转
      } else {
        skiPage('important'); // 跳转主页
      }
    }
  })
}


// onMounted(() => {
//   logon(logoData)
// })
</script>

<style lang="scss" scoped>
.logon{
  width: 100vw;
  height: 100vh;
  background-image: url("@/assets/image/logon/bg.png");
  background-size: 100% auto;
  background-position: top;
  padding: 30vw 12vw 0 12vw;
  box-sizing: border-box;
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
    &.password{
      .input-obj{
        width: 52vw;
        margin-right: 3vw;
        // letter-spacing: 3vw;
      }
    }
    .code {
      font-size: 4.5vw;
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
      color: #000;
      .icon {
        width: 4vw;
        height: 4vw;
        vertical-align: middle;
        fill: rgb(0, 33, 167);
        overflow: hidden;
        margin-right: 2vw;
      }
    }
    .register-but {
      display: block;
      font-size: 3.5vw;
      color: #000;
    }
  }
  .submit-but{
    background-color: rgb(0, 52, 239);
    text-align: center;
    box-sizing: border-box;
    padding: 3vw 4vw;
    font-size: 4.5vw;
    color: #fff;
    border-radius: 2vw;
  }
}
input::-ms-reveal {
  display: none;
}
</style>
