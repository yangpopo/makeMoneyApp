<template>
  <div class="search-index">
    <navBox>
      <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch" @cancel="pageReturn" />
    </navBox>
    <PullRefresh class="container-box" v-model="refreshState" @refresh="onRefresh">
      <List v-model:loading="loadingState" :finished="isFinished" finished-text="没有更多了" @load="onLoad">
        <div class="search-item" v-for="item in 10" :key="item">
          <VanImage class="search-cover" width="26vw" height="26vw" radius="8" fit="cover" position="center" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
          <div class="search-info">
            <dl class="describe">
              <dt>标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题</dt>
              <dd>描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</dd>
            </dl>
            <div class="info">
              <span class="item">
                <van-icon class="icon" name="eye-o" color="#9f9f9f" size="15" />5454
              </span>
              <span class="item">
                <van-icon class="icon" name="notes-o" color="#9f9f9f" size="15" />2024/03/11
              </span>
            </div>
          </div>
        </div>
      </List>
    </PullRefresh>
  </div>
</template>

<script lang="ts">
export default {
  name: 'searchIndex'
}
</script>
00
<script setup lang="ts">
import navBox from '@/components/navBox.vue';
import { Search as vanSearch, showToast, Image as VanImage, Icon as vanIcon, PullRefresh, List } from 'vant';
// @ts-ignore
import { ref } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter(); /* 路由对象 */
/**
 * 返回上一页面
*/
const pageReturn = (): void => {
  router.go(-1);
}

/**
 * 跳转页面
*/
const skiPage = (name: string): void => {
  router.push({ name })
}


/**
 * 下拉刷新
*/
const refreshState = ref(false); // 加载状态
const onRefresh = () => {
  setTimeout(() => {
    showToast('刷新成功');
    refreshState.value = false;
  }, 1000);
};
/**
 * 上拉加载
*/
const loadingState = ref(false); // 加载状态
const isFinished = ref(true); // 是否加载完成
const onLoad = () => {
  setTimeout(() => {
    showToast('加载成功');
    loadingState.value = false;
  }, 1000);
};


const value = ref('')

const onSearch = () => {
  console.log('搜索');
  
}
</script>

<style lang="scss" scoped>
.search-index {
  width: 100vw;
  min-height: 100vh;
  background-color: rgb(245, 245, 245);

  .container-box {
    width: 100vw;
    height: calc(100vh - 22.3vw);
    overflow-y: auto;
    box-sizing: border-box;
    position: reactive;
    padding: 5vw 3vw;
    font-size: 3.5vw;
    .search-item {
      width: 100%;
      background-color: #fff;
      box-sizing: border-box;
      padding: 3vw;
      border-radius: 2vw;
      display: flex;
      margin-bottom: 3vw;
      .search-cover {
        margin-right: 3vw;
        flex-shrink: 0;
      }
      .search-info {
        width: calc(100% - 26vw - 3vw - 3vw);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .describe {
          width: 100%;
          dt {
            width: 100%;
            font-size: 4vw;
            font-weight: bold;
            color: #000;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            margin-bottom: 1vw;
          }
          dd {
            width: 100%;
            font-size: 3.2vw;
            color: rgb(175, 175, 175);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 3vw;
          color: #9f9f9f;
          .item {
            display: flex;
            align-items: center;
            .icon {
              margin-right: 2vw;
            }
          }
        }
      }
    }
  }
}
</style>
