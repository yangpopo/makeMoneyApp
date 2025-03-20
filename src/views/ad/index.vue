<template>
  <div class="call-center">
    <navBox class="nav-box">
      <NavBar left-arrow title="广告列表" @click-left="pageReturn">
      </NavBar>
    </navBox>
    <!-- 下拉刷新上拉加载 -->
    <PullRefresh class="container-box" v-model="refreshState" @refresh="onRefresh">
      <List v-model:loading="loadingState" :finished="isFinished" finished-text="没有更多了" @load="onLoad">
        <VanImage class="list-item" v-for="item in 20" :key="item" width="100vw" height="40vw" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" @click="skiPage('adDetails')" />
      </List>
    </PullRefresh>
  </div>
</template>

<script lang="ts">
export default {
  name: 'callCenter'
}
</script>

<script setup lang="ts">
import navBox from '@/components/navBox.vue';
import { NavBar, Icon as vanIcon, showToast, showSuccessToast, PullRefresh, List, Image as VanImage } from 'vant';
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

/* 下拉刷新 */
const refreshState = ref(false); // 加载状态
const onRefresh = () => {
  setTimeout(() => {
    showSuccessToast('刷新成功');
    refreshState.value = false;
  }, 1000);
};
/* 上拉加载 */
const loadingState = ref(false); // 加载状态
const isFinished = ref(true); // 是否加载完成
const onLoad = () => {
  setTimeout(() => {
    // showToast('加载成功');
    loadingState.value = false;
  }, 1000);
};



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
