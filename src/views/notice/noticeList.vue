<template>
  <div class="notice-list">
    <navBox>
      <NavBar left-arrow title="公告" @click-left="pageReturn">
      </NavBar>
    </navBox>
    <PullRefresh class="container-box" v-model="refreshState" @refresh="onRefresh">
      <List v-model:loading="loadingState" :finished="isFinished" finished-text="没有更多了" @load="onLoad">
        <img class="none-data" src="@/assets/image/notice/none-data.png" alt="">
        <dl class="container-item" v-for="item in 10" :key="item" @click="skiPage('noticeDetail')">
          <dt>公告标题</dt>
          <dd>2020-02-02 20:20:20</dd>
        </dl>
      </List>
    </PullRefresh>
  </div>
</template>

<script lang="ts">
export default {
  name: 'noticeIndex'
}
</script>

<script setup lang="ts">
import navBox from '@/components/navBox.vue';
import { NavBar, Icon as vanIcon, PullRefresh, List, showToast, Picker as vanPicker } from 'vant';
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

/* 下拉刷新 */
const refreshState = ref(false); // 加载状态
const onRefresh = () => {
  setTimeout(() => {
    showToast('刷新成功');
    refreshState.value = false;
  }, 1000);
};
/* 上拉加载 */
const loadingState = ref(false); // 加载状态
const isFinished = ref(true); // 是否加载完成
const onLoad = () => {
  setTimeout(() => {
    showToast('加载成功');
    loadingState.value = false;
  }, 1000);
};



</script>

<style lang="scss" scoped>
.notice-list {
  width: 100vw;
  min-height: 100vh;
  background-color: rgb(245, 245, 245);
  .container-box {
    width: 100vw;
    height: calc(100vh - 22.3vw);
    overflow-y: auto;
    box-sizing: border-box;
    padding: 3vw;
    
    .none-data {
      width: 50vw;
      display: block;
      margin: 5vw auto;
    }
    .container-item {
      width: 100%;
      background-color: #fff;
      box-sizing: border-box;
      padding: 3vw 4vw;
      border-radius: 3vw;
      margin-bottom: 3vw;
      dt {
        font-size: 3.5vw;
        font-weight: bold;
        color: #000;
        margin-bottom: 1vw;
      }
      dd {
        font-size: 3vw;
        color: #bbbbbb;
      }
    }
  }
}
</style>
