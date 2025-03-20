<template>
  <div class="big-education">
    <navBox class="nav-box">
      <NavBar left-arrow title="大课堂" @click-left="pageReturn">
      </NavBar>
    </navBox>
    <div class="search-box">
      <vanSearch class="van-search-box" shape="round" placeholder="请输入搜索关键词" />
      <div class="subjoin-but" @click="skiPage('educationFavorite')">
        <van-icon class="icon-style" name="star" size="5vw" />
        我的收藏
      </div>
    </div>
    <!-- 下拉刷新上拉加载 -->
    <PullRefresh class="container-box" v-model="refreshState" @refresh="onRefresh">
      <List v-model:loading="loadingState" :finished="isFinished" finished-text="没有更多了" @load="onLoad">
        <!-- 广告部分 -->
        <swipe class="ad-swipe" :autoplay="3000" indicator-color="white">
          <swipe-item><img class="swipe-cover" src="@/assets/image/home/001.png" alt="" /></swipe-item>
          <swipe-item><img class="swipe-cover" src="@/assets/image/home/002.png" alt="" /></swipe-item>
          <swipe-item><img class="swipe-cover" src="@/assets/image/home/003.png" alt="" /></swipe-item>
          <swipe-item><img class="swipe-cover" src="@/assets/image/home/004.png" alt="" /></swipe-item>
        </swipe>
        <!-- 课程部分 -->
        <div class="course-box">
          <h1 class="title-h1">
            <span class="head">课程推荐</span>
            <RouterLink :to="{ name: 'educationList' }" class="foot">更多课程>></RouterLink>
          </h1>
          <courseItem v-for="item in 20" :key="item" />
        </div>
      </List>
    </PullRefresh>
  </div>
</template>

<script lang="ts">
export default {
  name: 'bigEducation'
}
</script>

<script setup lang="ts">
import navBox from '@/components/navBox.vue';
import courseItem from './components/courseItem.vue';
import { NavBar, Icon as vanIcon, Swipe, SwipeItem, showToast, showSuccessToast, PullRefresh, List, Image as VanImage, Search as vanSearch } from 'vant';

// @ts-ignore
import { ref, onMounted } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

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
.big-education {
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
    .van-search-box {
      width: 75vw;
    }
    .subjoin-but {
      .icon-style {
        margin-right: 1vw;
      }
      font-size: 3.6vw;
      display: flex;
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
    .ad-swipe {
      width: 100%;
      border-radius: 3vw;
      height: 38vw;
      margin-bottom: 2vw;
      .swipe-cover {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .course-box {
      width: 100%;
      box-sizing: border-box;
      padding: 2vw 0 3vw 0;
      .title-h1{
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 2vw 0;
        .head {
          font-size: 3.6vw;
          color: #000;
        }
        .foot {
          font-size: 3.6vw;
          color: rgb(0, 52, 239);
        }
      }
    }
  }
}
</style>
