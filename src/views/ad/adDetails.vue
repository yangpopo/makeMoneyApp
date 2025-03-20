<template>
  <div class="call-center">
    <navBox class="nav-box">
      <NavBar left-arrow title="广告详情" @click-left="pageReturn">
      </NavBar>
    </navBox>
    <div class="container-box"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'callCenter'
}
</script>

<script setup lang="ts">
import navBox from '@/components/navBox.vue';
import { NavBar, Icon as vanIcon, showToast, PullRefresh, List, Image as VanImage } from 'vant';
// @ts-ignore
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter(); /* 路由对象 */

/* 返回上一页面 */
const pageReturn = ():void => {
  router.go(-1);
}

/* 跳转页面 */
const skiPage = (name: string):void => {
  router.push({name})
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
    padding: 3vw 0vw;
    .list-item {
      margin-bottom: 2vw;
    }
  }
}
</style>
