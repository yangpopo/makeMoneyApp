<template>
  <div class="call-center">
    <navBox class="nav-box">
      <NavBar left-arrow title="客服中心" @click-left="pageReturn">
      </NavBar>
    </navBox>
    <div class="container-box">
      <div class="bubble">
        <img class="service-icon" src="@/assets/image/callCenter/service-icon.png" alt="">
        <div class="voice">Hi~很高兴为您服务</div>
      </div>
      <ul class="channel-box">
        <li>
          <div class="icon-box">
            <img src="@/assets/image/callCenter/staff-service.png" alt="">
          </div>
          <span>人工客服</span>
        </li>
        <li>
          <div class="icon-box">
            <img src="@/assets/image/callCenter/opinion.png" alt="">
          </div>
          <span>意见反馈</span>
        </li>
        <li>
          <div class="icon-box">
            <img src="@/assets/image/callCenter/opinion-record.png" alt="">
          </div>
          <span>反馈记录</span>
        </li>
      </ul>
      <div class="common-problem">
        <div class="head">
          <span class="title">常见问题</span>
          <RouterLink :to="{ name: 'commonProblemList' }" class="more-but">更多&gt;&gt;</RouterLink>
        </div>
        <van-cell class="cell-box" title="单元格单元格单元格单元格单元格单元格单元格单元格单元格" is-link @click="skiPage('commonProblemDetails')" />
        <van-cell class="cell-box" title="单元格" is-link @click="skiPage('commonProblemDetails')" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'callCenter'
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
.call-center {
  width: 100vw;
  min-height: 100vh;
  // background-color: rgb(245, 245, 245);
  background-color: #fff;
  .nav-box {
    width: 100%;
    background-color: rgb(0, 52, 239);
    :deep(.van-nav-bar) {
      --van-nav-bar-background: rgb(0, 52, 239);
    }
    :deep(.van-nav-bar__title) {
      --van-nav-bar-title-text-color: #fff;
    }
    :deep(.van-nav-bar .van-icon) {
      --van-nav-bar-icon-color: #fff;
    }
  }
  .container-box {
    width: 100vw;
    height: calc(100vh - 22.3vw);
    overflow-y: auto;
    box-sizing: border-box;
    padding: 5vw 7vw;
    .bubble {
      width: 100%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      margin-bottom: 5vw;
      .service-icon {
        width: 15vw;
        height: 15vw;
        margin-right: 5vw;
      }
      .voice {
        width: 70vw;
        box-sizing: border-box;
        background-color: rgb(245, 245, 245);
        padding: 4vw 3vw;
        font-size: 3.5vw;
        border-radius: 2vw;
      }
    }
    .channel-box {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 5vw;
      li {
        box-sizing: border-box;
        background-color: #fff;
        padding: 4vw;
        border-radius: 2vw;
        box-shadow: 0 0 1.5vw #ebebeb;
        .icon-box {
          width: 11.5vw;
          height: 11.5vw;
          background-color: #9ac9ff;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 3vw;
          img {
            width: 50%;
            height: 50%;
          }
        }
        span {
          width: 100%;
          text-align: center;
          font-size: 3.2vw;
        }
      }
    }
    .common-problem {
      width: 100%;
      background-color: #fff;
      border-radius: 2vw;
      padding: 5vw;
      box-sizing: border-box;
      box-shadow: 0 0 1.5vw #ebebeb;
      .head {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 5vw;
        .title {
          font-size: 3.2vw;
          color: #000;
        }
        .more-but {
          display: block;
          font-size: 3vw;
          color: #b8b8b8;
        }
      }
      .cell-box {
        width: 100%;
      }
    }
  }
  :deep(.van-cell) {
    --van-cell-font-size: 3.2vw;
    --van-cell-horizontal-padding: 0;

  }
  :deep(.van-cell:after) {
    width: 100%;
    left: 0;
    --van-cell-border-color: #dcdcdc;
  }
}
</style>
