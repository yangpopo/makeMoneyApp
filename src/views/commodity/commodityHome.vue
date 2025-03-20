<template>
  <div class="call-center">
    <navBox class="nav-box">
      <NavBar left-arrow title="全部小说" right-text="书架" @click-left="pageReturn" @click-right="skiPage('commodityCollect')">
      </NavBar>
    </navBox>
    <vanSearch v-model="keySearch" shape="round" background="#f5f5f5" placeholder="请输入搜索内容" @search="submitSearch" />
    <!-- 整个菜单 -->
    <van-tabs v-model:active="active" animated swipeable class="tabs-style" title-active-color="#e55000" title-inactive-color="#5c5c5c">
      <van-tab :title="tabItem.name" v-for="(tabItem) in tabList" :key="tabItem.value">
        <!-- 下拉刷新上拉加载 -->
        <PullRefresh class="content-box" v-model="refreshState" @refresh="onRefresh">
          <List v-model:loading="loadingState" :finished="isFinished" finished-text="没有更多了" @load="onLoad">
            <bookItem v-for="item in 10" :key="item" />
          </List>
        </PullRefresh>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
export default { name: 'commodityHome' }
</script>

<script setup lang="ts">
import navBox from '@/components/navBox.vue';
import bookItem from '@/components/bookItem.vue';

import { RouterLink } from 'vue-router';

import { NavBar, Icon as vanIcon, showToast, Search as vanSearch, Tab as vanTab, Tabs as vanTabs, PullRefresh, List } from 'vant';


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


/* 搜索关键字 */
let keySearch = ref('');
/**
 * 提交搜索
 * @param keyVal 搜索关键字
*/
const submitSearch = (keyVal: string): void => {
  console.log('搜索关键字', keyVal);
}
const tabList = reactive([
  {
    name: '全部',
    value: 0
  }, {
    name: '穿越',
    value: 1
  }, {
    name: '科幻',
    value: 2
  }, {
    name: '玄幻',
    value: 3
  }, {
    name: '恐怖',
    value: 4
  }, {
    name: '言情',
    value: 5
  }, {
    name: '历史',
    value: 6
  }, {
    name: '游戏',
    value: 7
  }, {
    name: '武侠',
    value: 8
  }, {
    name: '体育',
    value: 9
  }
])
const active = ref(0);



/* 下拉刷新 */
const refreshState = ref(false); // 加载状态
const onRefresh = () => {
  setTimeout(() => {
    showToast('刷新成功');
    // refreshState.value = false;
  }, 1000);
};
/* 上拉加载 */
const loadingState = ref(false); // 加载状态
const isFinished = ref(false); // 是否加载完成
const onLoad = () => {
  setTimeout(() => {
    showToast('加载成功');
    loadingState.value = false;
    isFinished.value = true;
  }, 1000);
};



</script>

<style lang="scss" scoped>
.call-center {
  width: 100vw;
  min-height: 100vh;
  // background-color: rgb(245, 245, 245);
  background-color: #fff;
  .nav-box {
    width: 100%;
    background-color: #f5f5f5;
    :deep(.van-nav-bar) {
      --van-nav-bar-background: rgb(245, 245, 245);
    }
    :deep(.van-hairline--bottom:after) {
      border-bottom-width: 0;
    }
    // :deep(.van-nav-bar__title) {
    //   --van-nav-bar-title-text-color: #fff;
    // }
    // :deep(.van-nav-bar .van-icon) {
    //   --van-nav-bar-icon-color: #fff;
    // }
  }
  .tabs-style {
    width: 100vw;
    height: calc(100vh - 36.9vw);
    box-sizing: border-box;
    position: relative;
    :deep(.van-tabs__nav--line) {
      --van-tabs-nav-background: rgb(245, 245, 245);
      color: #5c5c5c;
    }
    :deep(.van-swipe) {
      box-sizing: border-box;
      height: calc(100vh - 48.6vw);
      overflow-y: auto;
    }
    .content-box {
      box-sizing: border-box;
      padding: 0 3vw;
    }
  }
  :deep(.van-tabs__line) {
    display: none;
  }
}



</style>
