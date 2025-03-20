<template>
  <div class="common-problem-list">
    <navBox class="nav-box">
      <NavBar left-arrow title="问题详情" @click-left="pageReturn">
      </NavBar>
    </navBox>
    <div class="container-box">
      <div class="title">
        <img class="icon" src="@/assets/image/callCenter/question-icon.png" alt="">阿斯顿发斯蒂芬阿斯顿发斯蒂芬阿萨德阿斯顿发斯蒂芬阿斯顿发斯蒂芬阿萨德阿斯顿发斯蒂芬阿斯顿发斯蒂芬阿萨德阿斯顿发斯蒂芬阿斯顿发斯蒂芬阿萨德阿斯顿发斯蒂芬阿斯顿发斯蒂芬阿萨德
      </div>
      <div class="content">阿斯顿发斯蒂芬阿斯顿发斯蒂芬阿萨德阿斯顿发斯蒂芬阿斯顿发斯蒂芬阿萨德阿斯顿发斯蒂芬阿斯顿发斯蒂芬阿萨德阿斯顿发斯蒂芬阿斯顿发斯蒂芬阿萨德阿斯顿发斯蒂芬阿斯顿发斯蒂芬阿萨德aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>

    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'commonProblemList'
}
</script>

<script setup lang="ts">
import navBox from '@/components/navBox.vue';
import { NavBar, Icon as vanIcon, showToast, Cell as vanCell } from 'vant';
// @ts-ignore
import { ref } from 'vue';
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


let menuIndex = ref(0); // 菜单选项
/* 切换菜单 */
const switchMenu = (index: number): void => {
  menuIndex.value = index;
}


</script>

<style lang="scss" scoped>
.common-problem-list {
  width: 100vw;
  min-height: 100vh;
  // background-color: rgb(245, 245, 245);
  background-color: #fff;
  .container-box {
    width: 100vw;
    height: calc(100vh - 22.3vw);
    overflow-y: auto;
    box-sizing: border-box;
    padding: 5vw;
    .title {
      width: 100%;
      font-size: 3.2vw;
      font-weight: bold;
      color: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 5vw;
      .icon {
        width: 4vw;
        height: 4vw;
        margin-right: 2vw;
      }
    }
    .content {
      width: 100%;
      box-sizing: border-box;
      border-radius: 3vw;
      background-color: #e9e9e9;
      font-size: 3vw;
      color: #515151;
      padding: 3vw;
      word-break: break-all;
    }
  }
}
</style>
