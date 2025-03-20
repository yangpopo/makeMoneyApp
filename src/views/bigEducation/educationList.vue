<template>
  <div class="education-list">
    <navBox class="nav-box">
      <NavBar left-arrow title="课程列表" @click-left="pageReturn">
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
        <!-- 课程分类 -->
        <div class="course-type" @click="courseTypePopupRef.isShow = true">
          课程分类:{{ selectedCourseType }}
        </div>
        <!-- 课程部分 -->
        <div class="course-list">
          <courseItem v-for="item in 20" :key="item" />
        </div>
      </List>
    </PullRefresh>

    <!-- 课程分类 -->
    <popupBox ref="courseTypePopupRef" :option="{ position: 'bottom', round: true }">
      <vanPicker title="请选择课程分类" :columns="courseClassData" @cancel="courseTypePopupRef.isShow = false"
        @confirm="courseTypeConfirm" />
    </popupBox>
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
import { NavBar, Icon as vanIcon, Picker as vanPicker, showToast, showSuccessToast, PullRefresh, List, Search as vanSearch } from 'vant';

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


/* 课程分类 */
const courseTypePopupRef = ref(); /* 课程类型弹窗分类 */
const courseClassData = reactive([
  {
    text: '全部',
    value: 'Zhejian34g全部',
    children: [],
  },
  {
    text: '教育',
    value: 'Zhejia34ng教育',
    children: [
      {
        text: '全部',
        value: 'Han45gzhou',
        children: [],
      },{
        text: '语言',
        value: 'Hangsdfzhou',
        children: [
          { text: '英语', value: '1231' },
        ],
      },
      {
        text: '艺术',
        value: 'Wenzhou',
        children: [
          { text: '简笔画', value: 'Luch212454eng' },
        ],
      },
      {
        text: '学科',
        value: 'Wenzhasdgqou',
        children: [
          { text: '数学', value: 'Luch343eng' },
          { text: '成语', value: 'Luch3433eng' },
        ],
      },
    ],
  },
  {
    text: '农业',
    value: 'Fujiasdga343an',
    children: [
      {
        text: '全部',
        value: 'Fuzh34ads3ou',
        children: [],
      },
      {
        text: '种植技术',
        value: 'Fuqwrgzhou',
        children: [
          { text: '水稻', value: 'Gulqgrou' },
          { text: '玉米', value: 'Taijidfqwang' },
          { text: '小麦', value: 'Taijiaasdsng' },
          { text: '油菜', value: 'Taijixcvang' },
          { text: '红薯', value: 'Taijasdfiang' },
          { text: '苹果', value: 'Taijzxcviang' },
          { text: '芒果', value: 'Taijicxvxang' },
          { text: '葡萄', value: 'Taijivbcxang' },
          { text: '土豆', value: 'Taijizxvang' },
          { text: '猕猴桃', value: 'Taijzxcviang' },
        ],
      },
      {
        text: '农学教育',
        value: 'Xiazxbvzxmen',
        children: [
          { text: '聚焦三农', value: 'Simizvzxng' },
        ],
      },
    ],
  },
  {
    text: '科普',
    value: 'Fujisdghdan',
    children: [
    {
        text: '全部',
        value: 'Fuzhsdfgdsfou',
        children: [],
      },
      {
        text: '传统知识',
        value: 'Fuzhsdgsdfou',
        children: [
          { text: '节气', value: 'Gulsdgsdou' },
          { text: '地理', value: 'Taisdfgjiang' },
        ],
      },
      {
        text: '科学知识',
        value: 'Xiaeryhwethmen',
        children: [
          { text: '百科', value: 'Simhsdrting' },
          { text: '天文', value: 'Haeghwericang' },
        ],
      },
      {
        text: '人文历史',
        value: 'Xiamyweryen',
        children: [
          { text: '国学经典', value: 'Simrtyretying' },
        ],
      },
      {
        text: '神话故事',
        value: 'Xiameertyertn',
        children: [
          { text: '希腊神话', value: 'Simiertyerng' },
        ],
      },
    ],
  },
  {
    text: '生活',
    value: 'Fujiertyeran',
    children: [
      {
        text: '全部',
        value: 'Fuzhoeryeru',
        children: [],
      },
      {
        text: '居家生活',
        value: 'Xiameasgdan',
        children: [
          { text: '家常菜谱', value: 'Siqwerqwming' },
        ],
      },
    ],
  },
]);

/* 选中的课程类型 */
const selectedCourseType = ref('全部');

/**
 * 确认课程选择
 */ 
const courseTypeConfirm = (data: any) => {
  data.selectedOptions.forEach((item: any, index: number) => {
    if (item) {
      if (index == 0) {
        selectedCourseType.value = item.text;
      } else {
        selectedCourseType.value = selectedCourseType.value + '->' + item.text;
      }
    }
  })
  courseTypePopupRef.value.isShow = false;
}


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
  background-color: rgb(245, 245, 245);

  // background-color: #fff;
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
    padding: 3vw 0vw;

    .course-type {
      width: 100%;
      font-size: 3.6vw;
      color: #000;
      background-color: #fff;
      box-sizing: border-box;
      padding: 3vw;
      margin-bottom: 3vw;
    }

    .course-list {
      width: 100%;
      background-color: #fff;
      box-sizing: border-box;
      padding: 3vw;
    }
  }
}
</style>
