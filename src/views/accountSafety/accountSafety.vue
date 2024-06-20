<template>
  <div class="call-center">
    <navBox class="nav-box">
      <NavBar left-arrow title="账号安全" @click-left="pageReturn">
      </NavBar>
    </navBox>
    <div class="container-box">
      <vanCellGroup class="cell-box">
        <vanCell title="手机号" value="13333333333" is-link @click="skiPage('modifyPhone')"/>
        <vanCell title="设备编号" value="56465464564"/>
      </vanCellGroup>
      <vanCellGroup class="cell-box">
        <vanCell title="修改密码" is-link @click="skiPage('modifyPassword')"/>
      </vanCellGroup>
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

/* 昵称弹窗 */
let isShowNickname = ref(false);
const modifyNicknameConfirm = () => {
  console.log('完成昵称修改');
  isShowNickname.value = false;
}

/* 性别弹窗 */
let isShowSex = ref(false);
const setSexData = reactive([
  { name: '男', value: 1 },
  { name: '女', value: 2 },
])
const selectSetSex = (data: any): void => {
  console.log(data);
  isShowSex.value = false;
}

/* 年龄弹窗 */
const agePopupRef = ref(); // 年龄弹窗
const setAgeDate = ref([
  { text: '15~20', value: '15~20' },
  { text: '21~30', value: '21~30' },
])
const ageConfirm = (data:any): void => {
  console.log(data, '-*-*-*-');
}

/* 提交用户信息 */
const submitUserInfo = () => {
  pageReturn();
}



</script>

<style lang="scss" scoped>
.call-center {
  width: 100vw;
  min-height: 100vh;
  background-color: rgb(245, 245, 245);
  // background-color: #fff;
  .nav-box {
    width: 100%;
  }
  .container-box {
    width: 100vw;
    height: calc(100vh - 22.3vw);
    overflow-y: auto;
    box-sizing: border-box;
    padding: 5vw 0vw;
    .title-h1{
      width: 100%;
      font-size: 3.5vw;
      color: #000;
      box-sizing: border-box;
      margin-bottom: 3vw;
    }
    .cell-box {
      width: 100%;
      margin-bottom: 5vw;
    }
  }
}
</style>
