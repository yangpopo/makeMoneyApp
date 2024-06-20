<template>
  <div class="call-center">
    <navBox class="nav-box">
      <NavBar left-arrow title="修改密码" @click-left="pageReturn">
      </NavBar>
    </navBox>
    <div class="container-box">
      <input class="input-password-obj" v-model="formData.pw" type="password" placeholder="请输入旧密码" maxlength="16" />
      <div class="input-password-box">
        <input class="input-obj" maxlength="16" v-model="formData.password" :type="isShowPassword ? 'password' : 'text'" placeholder="请输入新密码(8~20位数字和字母)" >
        <van-icon v-if="isShowPassword == false" name="eye-o" color="#c0c0c0" size="5vw" @click="isShowPassword = true"/>
        <van-icon v-else name="closed-eye" color="#c0c0c0" size="5vw" @click="isShowPassword = false"/>
      </div>
      <div class="input-password-box">
        <input class="input-obj" maxlength="16" v-model="formData.passwordRepetition" :type="isShowRepetitionPassword ? 'password' : 'text'" placeholder="请重复输入新密码" >
        <van-icon v-if="isShowRepetitionPassword == false" name="eye-o" color="#c0c0c0" size="5vw" @click="isShowRepetitionPassword = true"/>
        <van-icon v-else name="closed-eye" color="#c0c0c0" size="5vw" @click="isShowRepetitionPassword = false"/>
      </div>
      <RouterLink class="retrieve-password" :to="{name: 'retrievePasswordSafety'}">忘记旧密码?</RouterLink>
      <div class="confirm-modify-but" @click="saveNewPassword">确定</div>
      
    </div>
  </div>
</template>

<script lang="ts">
export default { name: 'callCenter' }
</script>

<script setup lang="ts">
import navBox from '@/components/navBox.vue';
import { RouterLink } from 'vue-router';

import { NavBar, Icon as vanIcon, showToast, CellGroup as vanCellGroup,  Cell as vanCell } from 'vant';

// @ts-ignore
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

import { changePassword } from '@/api/userAccount';


/* 表单数据 */
interface useFormData {
  pw: string;
  password: string;
  passwordRepetition: string;
}
const formData = reactive<useFormData>({
  pw: '',
  password: '',
  passwordRepetition: ''
})

/* 返回上一页面 */
const pageReturn = ():void => {
  router.go(-1);
}

const router = useRouter(); /* 路由对象 */

/* 跳转页面 */
const skiPage = (name: string):void => {
  router.push({name})
}

/* 是否显示密码 */
let isShowPassword = ref(true);
let isShowRepetitionPassword = ref(true);



/* 保存新手机号 */
const saveNewPassword = () => {
  if (formData.pw.length < 6) {
    showToast('请输入旧密码并不少于6位!')
    return
  }
  if (formData.password.length < 6) {
    showToast('请输入新密码并不少于6位!')
    return
  }
  if (formData.password !== formData.passwordRepetition) {
    showToast('两次密码不一致!')
    return
  }
  changePassword(formData).then((res:any) => {
    if (res.code == 0) {
      showToast('密码修改成功');
      pageReturn();
    }
  })
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
    input {
      font-size: 3.2vw;
      color: #000;
    }
    .input-password-obj {
      width: 100%;
      box-sizing: border-box;
      background-color: rgb(243, 243, 243);
      padding: 3vw 4vw;
      border-radius: 6vw;
      margin-bottom: 3vw;
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
    .retrieve-password {
      display: block;
      width: 21vw;
      margin-left: auto;
      font-size: 3.2vw;
      color: rgb(0, 52, 239);
      text-decoration: underline;
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
  }
}
input::-ms-reveal {
  display: none;
}
</style>
