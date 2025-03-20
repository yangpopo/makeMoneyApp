<template>
  <div class="call-center">
    <navBox class="nav-box">
      <NavBar left-arrow title="个人资料" @click-left="pageReturn">
      </NavBar>
    </navBox>
    <div class="container-box">
      <h1 class="title-h1">基本资料</h1>
      <vanCellGroup class="cell-box">
        <vanCell title="昵称" :value="modifyUserData.user_name" @click="isShowNickname = true"/>
        <vanCell title="性别" :value="modifyUserData.sex == 0 ? '女' : '男'" is-link @click="isShowSex = true"/>
        <vanCell title="年龄" :value="ageIndexKey[modifyUserData.age].text" is-link @click="agePopupRef.isShow = true"/>
      </vanCellGroup>
      <div class="save-but" @click="submitUserInfo">保存</div>
    </div>

    <vanDialog :show="isShowNickname" title="修改昵称" show-cancel-button @cancel="isShowNickname = false" @confirm="modifyNicknameConfirm">
      <vanField v-model="modifyUserData.user_name" label="昵称" placeholder="请输入昵称" />
    </vanDialog>
    <!-- 性别 -->
    <van-action-sheet teleport="body" v-model:show="isShowSex" :actions="setSexData" @select="selectSetSex" cancel-text="取消" />
    <!-- 年龄 -->
    <popupBox ref="agePopupRef" :option="{position:'bottom', round: true}">
      <vanPicker title="选择年龄" :columns="setAgeDate" @confirm="ageConfirm" @cancel="agePopupRef.isShow = false"></vanPicker>
    </popupBox>
  </div>
</template>

<script lang="ts">
export default { name: 'callCenter' }
</script>

<script setup lang="ts">
import navBox from '@/components/navBox.vue';
import popupBox from '@/components/popupBox.vue';

import { NavBar, Icon as vanIcon, showToast, CellGroup as vanCellGroup,  Cell as vanCell, Dialog  as vanDialog , Field as vanField, ActionSheet as vanActionSheet, Picker as vanPicker } from 'vant';


// @ts-ignore
import { ref, reactive } from 'vue';
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router';
import { useUserInfo } from '@/stores/userInfo';

import { changeInfo } from '@/api/userAccount';


const userInfoData = useUserInfo()
const { userInfo, ageIndexKey } = storeToRefs(userInfoData);

console.log(ageIndexKey.value, '*-*---*-*-*');

/**
 * 修改用用户数据
*/
const modifyUserData = reactive({
  user_name: userInfo.value.username,
  sex: userInfo.value.sex,
  age: userInfo.value.age
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

/* 昵称弹窗 */
let isShowNickname = ref(false);
const modifyNicknameConfirm = () => {
  isShowNickname.value = false;
}

/* 性别弹窗 */
let isShowSex = ref(false);
const setSexData = reactive([
  { name: '男', value: 1 },
  { name: '女', value: 0 },
])
const selectSetSex = (data: any): void => {
  modifyUserData.sex = data.value;
  isShowSex.value = false;
}

/* 年龄弹窗 */
const agePopupRef = ref(); // 年龄弹窗
const setAgeDate = reactive(ageIndexKey.value);
/**
 * 年龄确定
 * @param data 选中数据
*/
const ageConfirm = (data:any): void => {
  modifyUserData.age = data.selectedValues[0];
  agePopupRef.value.isShow = false
}

/* 提交用户信息 */
const submitUserInfo = () => {
  changeInfo(modifyUserData).then((res:any) => {
    if (res.code == 0) {
      showToast('修改成功')
      userInfoData.updateUserInfo({
        username: modifyUserData.user_name,
        sex: modifyUserData.sex,
        age: modifyUserData.age,
        user_acc: userInfo.value.user_acc,
      })
      pageReturn();
    }
  })
  
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
    padding: 5vw 5vw;
    .title-h1{
      width: 100%;
      font-size: 3.5vw;
      color: #000;
      box-sizing: border-box;
      margin-bottom: 3vw;
    }
    .cell-box {
      width: 100%;
      border-radius: 3vw;
      overflow: hidden;
      margin-bottom: 5vw;
    }
    .save-but {
      display: block;
      text-align: center;
      box-sizing: border-box;
      padding: 2vw 3vw;
      width: 15vw;
      color: #fff;
      font-size: 3.5vw;
      font-weight: bold;
      background-color: rgb(0, 52, 239);
      margin: 0 auto 5vw auto;
      border-radius: 5vw;
    }
  }
}
</style>
