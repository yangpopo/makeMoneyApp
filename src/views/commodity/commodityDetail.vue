<template>
  <div class="commodity-collect">
    <navBox class="nav-box">
      <NavBar left-arrow title="文章标题" @click-left="pageReturn" >
      </NavBar>
    </navBox>
    <div class="container-box">
      <h1 class="h1-title">文章标题文章标题文章标题文章标题文章标题文章标题文章标题</h1>
      <div class="describe">
        <span class="item">
          <van-icon class="icon" name="eye-o" color="#9f9f9f" size="15" />5454
        </span>
        <span class="item">
          <van-icon class="icon" name="notes-o" color="#9f9f9f" size="15" />2024/03/11
        </span>
      </div>
      <div class="html-box">富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本富文本</div>
    </div>
  </div>
</template>

<script lang="ts">
export default { name: 'commodityHome' }
</script>

<script setup lang="ts">
import navBox from '@/components/navBox.vue';

import { NavBar, showToast, Icon as vanIcon } from 'vant';
// @ts-ignore
import { ref, reactive } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

/* 返回上一页面 */
const pageReturn = ():void => {
  router.go(-1);
}

const router = useRouter(); /* 路由对象 */

/* 跳转页面 */
const skiPage = (name: string):void => {
  router.push({name})
}



</script>

<style lang="scss" scoped>
.commodity-collect {
  width: 100vw;
  min-height: 100vh;
  // background-color: rgb(245, 245, 245);
  background-color: #fff;
  .nav-box {
    width: 100%;
    // :deep(.van-nav-bar) {
    //   --van-nav-bar-background: rgb(245, 245, 245);
    // }
    // :deep(.van-hairline--bottom:after) {
    //   border-bottom-width: 0;
    // }
    // :deep(.van-nav-bar__title) {
    //   --van-nav-bar-title-text-color: #fff;
    // }
    // :deep(.van-nav-bar .van-icon) {
    //   --van-nav-bar-icon-color: #fff;
    // }
  }
  .container-box {
    width: 100vw;
    height: calc(100vh - 22.3vw);
    overflow-y: auto;
    box-sizing: border-box;
    padding: 5vw 3vw 25vw 3vw;
    position: relative;
    .h1-title {
      width: 100%;
      font-size: 4.2vw;
      font-weight: bold;
      margin-bottom: 2vw;
    }
    .describe {
      width: 100%;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      padding: 2vw 0;
      margin-bottom: 3vw;
      .item{
        display: flex;
        align-items: center;
        color: #9f9f9f;
        .icon {
          margin-right: 2vw;
        }
      }
    }
    .html-box {
      width: 100%;

    }
  }
}



</style>
