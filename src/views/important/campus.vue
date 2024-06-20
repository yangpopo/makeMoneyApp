<template>
  <div class="campus">
    <navBox class="head">
      <search v-model="searchKey" :clearable="false" maxlength="20" show-action inputmode="search" placeholder="请输入搜索内容" @search="submitSearch">
        <template #action>
          <RouterLink :to="{ name: 'signIn' }" class="sign-but" >
            <img class="icon-sign" src="@/assets/image/campus/icon-sign.png" alt="">
            <span>签到</span>
          </RouterLink>
        </template>
      </search>
    </navBox>
    <!-- 下拉刷新上拉加载 -->
    <PullRefresh class="container-box" v-model="refreshState" @refresh="onRefresh">
      <List v-model:loading="loadingState" :finished="isFinished" finished-text="没有更多了" @load="onLoad">
        <!-- 财产模块 -->
        <property />
        <!-- 阅读推荐 -->
        <div class="read-suggest">
          <dl class="head-box">
            <dt>阅读推荐</dt>
            <dd @click="skiPage('commodity')">查看更多&gt;</dd>
          </dl>
          <bookItem v-for="item in 10" :key="item" />
        </div>
      </List>
    </PullRefresh>
  </div>
</template>

<script lang="ts">
export default {
  name: 'campus'
}
</script>

<script setup lang="ts">
import navBox from '@/components/navBox.vue';
import property from './components/campus/property.vue';
import bookItem from '@/components/bookItem.vue';
// @ts-ignore
import { Search, PullRefresh, List, showToast } from 'vant';
// @ts-ignore
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter(); /* 路由对象 */

/* 跳转页面 */
const skiPage = (name: string):void => {
  router.push({name})
}

/* 搜索关键字 */
let searchKey = ref('');

/* 提交搜索 */
let submitSearch = (): void => {
  if (searchKey.value == '') {
    showToast('请输入搜索关键字!');
    return
  }
  skiPage('search');
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
.campus {
  width: 100vw;
  .head {
    width: 100vw;
    height: 24.5vw;
    box-sizing: border-box;
    .sign-but {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 2.6vw;
      color: #000;
      box-sizing: border-box;
      padding: 0 2vw;

      .icon-sign {
        width: 4.5vw;
        height: 5vw;
        margin-bottom: 0.5vw;
      }
      span {
        line-height: normal;
      }
    }
  }

  .container-box {
    width: 100vw;
    height: calc(100% - 24.5vw);
    overflow-y: auto;
    .read-suggest{
      width: 100vw;
      box-sizing: border-box;
      padding: 5vw 3vw;
      background-color: #fff;
      .head-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 3vw;
        dt {
          font-size: 4.5vw;
          font-weight: bold;
          color: #000;
        }
        dd {
          font-size: 3vw;
          font-weight: normal;
          color: rgb(175, 175, 175);
        }
      }
    }
  }
}

:deep(.van-search__action) {
  background-color: transparent;
}
</style>
