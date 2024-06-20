<template>
  <div class="call-center">
    <navBox class="nav-box">
      <NavBar left-arrow title="检查更新" @click-left="pageReturn">
      </NavBar>
    </navBox>
    <!-- 下拉刷新上拉加载 -->
    <PullRefresh class="container-box" v-model="refreshState" @refresh="onRefresh">
      <List class="container-list-box" v-model:loading="loadingState" :finished="isFinished" finished-text="没有更多了" @load="onLoad">
        <div class="current-state">当前版本为:1.0.0</div>
        <div class="save-interspace-state">当前设备总存储:462.0GB，可用存储:303.0GB</div>
        <div class="update-box" v-for="item in 10" :key="item">
          <div class="left">
            <VanImage class="logo-image" fit="cover" width="15vw" height="15vw" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
            <dl class="describe">
              <dt>名称名称名称</dt>
              <dd>1.0.0</dd>
            </dl>
          </div>
          <div class="right">
            <div class="update-but">更新</div>
            <div class="downloading-but"><van-loading class="loading-icon" size="3vw" />下载中</div>
            <div class="complete-but">已完成</div>
          </div>
        </div>
      </List>
    </PullRefresh>
  </div>
</template>

<script lang="ts">
export default {
  name: 'checkUpdates'
}
</script>

<script setup lang="ts">
import navBox from '@/components/navBox.vue';
import { NavBar, showSuccessToast, PullRefresh, List, Image as VanImage, Loading as VanLoading } from 'vant';
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
  // background-color: rgb(245, 245, 245);
  // background-color: #fff;
  .nav-box {
    width: 100%;
  }
  .container-box {
    width: 100vw;
    height: calc(100vh - 22.3vw);
    overflow-y: auto;
    box-sizing: border-box;
    padding: 0;
    position: relative;
    .container-list-box {
      box-sizing: border-box;
      padding-bottom: 18vw;
    }
    .current-state {
      width: 100%;
      padding: 1.5vw;
      box-sizing: border-box;
      background-color: #efefef;
      color: #000;
      text-align: center;
    }
    .save-interspace-state {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      padding: 1.5vw 1.5vw 6vw 1.5vw;
      box-sizing: border-box;
      background-color: #efefef;
      color: #000;
      text-align: center;
      z-index: 2;
    }
    .update-box {
      width: 95%;
      box-sizing: border-box;
      padding: 3vw 2vw;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 1px;
          background-color: #e9e9e9;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
      .left {
        display: flex;
        align-items: center;
        .logo-image {
          margin-right: 2vw;
        }
        .describe {
          dt {
            font-size: 3.8vw;
            font-weight: bold;
            margin-bottom: 2vw;
            color: #000;
          }
          dd {
            font-size: 3.2vw;
            color: #767676;
          }
        }
      }
      .right {
        display: flex;
        justify-content: flex-end;
        .update-but {
          width: 15vw;
          box-sizing: border-box;
          padding: 0.8vw 0.8vw;
          font-size: 3vw;
          color: #fff;
          background-color: rgb(0, 52, 239);
          text-align: center;
          border-radius: 4vw;
        }
        .downloading-but {
          width: 18vw;
          box-sizing: border-box;
          padding: 0.8vw 0.8vw;
          font-size: 3vw;
          color: #fff;
          background-color: rgb(0, 155, 239);
          text-align: center;
          border-radius: 4vw;
          display: flex;
          align-items: center;
          justify-content: center;
          .loading-icon {
            margin-right: 1vw;
          }
        }
        .complete-but {
          width: 15vw;
          box-sizing: border-box;
          padding: 0.8vw 0.8vw;
          font-size: 3vw;
          color: #fff;
          background-color: rgb(182, 182, 182);
          text-align: center;
          border-radius: 4vw;
        }
      }
    }
  }
}
</style>
