<template>
  <div class="education-list">
    <navBox class="nav-box">
      <NavBar left-arrow title="课程收藏" @click-left="pageReturn">
      </NavBar>
    </navBox>
    <div class="search-box">
      <vanSearch class="van-search-box" shape="round" placeholder="请输入搜索关键词" />
      <div class="subjoin-but" @click="isAdminPattern = !isAdminPattern">{{ isAdminPattern ? '完成' : '管理' }}</div>
    </div>
    <!-- 下拉刷新上拉加载 -->
    <PullRefresh class="container-box" v-model="refreshState" @refresh="onRefresh">
      <List v-model:loading="loadingState" :finished="isFinished" finished-text="没有更多了" @load="onLoad" style="padding-bottom: 15vw;">
        <courseItem v-for="item in 20" :key="item" :isAdminPattern="isAdminPattern" />
      </List>
    </PullRefresh>
    <div class="bottom-box" v-if="isAdminPattern">
      <vanCheckbox v-model="asdfsad" checked-color="rgb(0, 52, 239)" icon-size="18px" >全选</vanCheckbox>
      <div class="delete-but">删除</div>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: 'educationList'
}
</script>

<script setup lang="ts">
import navBox from '@/components/navBox.vue';
import popupBox from '@/components/popupBox.vue';
import courseItem from './components/courseItem.vue';
import { NavBar, Icon as vanIcon, showToast, showSuccessToast, PullRefresh, List, Search as vanSearch, Checkbox as vanCheckbox } from 'vant';

// @ts-ignore
import { ref, reactive, onMounted } from 'vue';
import { RouterLink, useRouter } from 'vue-router';


const router = useRouter(); /* 路由对象 */

/* 返回上一页面 */
const pageReturn = (): void => {
  router.go(-1);
}

/* 跳转页面 */
const skiPage = (name: string): void => {
  router.push({ name })
}

const isAdminPattern = ref(false); /* 是否管理模式 */

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

const asdfsad = ref('');


/**
 * 创建完成
*/
onMounted(() => {
  // courseTypePopupRef.value.isShow = true;
  console.log('26456464564564');

})


</script>

<style lang="scss" scoped>
.education-list {
  width: 100vw;
  min-height: 100vh;
  // background-color: rgb(245, 245, 245);

  background-color: #fff;
  .nav-box {
    width: 100%;

    :deep(.van-hairline--bottom:after) {
      border-bottom-width: inherit;
    }
  }

  .search-box {
    width: 100%;
    height: 12vw;
    display: flex;
    text-align: center;
    background-color: #fff;

    .van-search-box {
      width: 85vw;
    }

    .subjoin-but {
      width: 10vw;
      font-size: 3.6vw;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #a6a6a6;
    }
  }

  .container-box {
    width: 100vw;
    height: calc(100vh - 22.3vw - 12vw);
    overflow-y: auto;
    box-sizing: border-box;
    padding: 3vw 3vw;
  }
  .bottom-box {
    width: 100%;
    background-color: #fff;
    position: fixed;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    padding: 3vw 3vw 5vw 3vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .delete-but {
      font-size: 3.4vw;
      color: #fff;
      background-color: rgb(0, 52, 239);
      border-radius: 1.5vw;
      box-sizing: border-box;
      padding: 1.5vw 4vw;
    }
  }
}
</style>
