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
            <bookItem v-for="bookData in bookListData" :key="bookData.title" :bookData="bookData" />
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

import { NavBar, Icon as vanIcon, showToast, showSuccessToast, Search as vanSearch, Tab as vanTab, Tabs as vanTabs, PullRefresh, List } from 'vant';


// @ts-ignore
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

import * as book01 from '@/assets/js/bookData/book01.js';
import * as book02 from '@/assets/js/bookData/book02.js';
import * as book03 from '@/assets/js/bookData/book03.js';
import * as book04 from '@/assets/js/bookData/book04.js';
import * as book05 from '@/assets/js/bookData/book05.js';
import * as book06 from '@/assets/js/bookData/book06.js';



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
    showSuccessToast('刷新成功');
    refreshState.value = false;
  }, 1000);
};
/* 上拉加载 */
const loadingState = ref(false); // 加载状态
const isFinished = ref(false); // 是否加载完成
const onLoad = () => {
  setTimeout(() => {
    // showToast('加载成功');
    loadingState.value = false;
    isFinished.value = true;
  }, 1000);
};


/* 书数据 */
const bookListData = reactive([
  {
    id: 0,
    title: '澳大利亚学者：澳中两国合作共赢是必由之路丨世界观',
    cover: 'https://i2.chinanews.com.cn/simg/cmshd/2024/03/22/34a51ceae055432db92e634a69958d4a.jpg',
    createTime: '2024年03月21日 17:29',
    author: '中国新闻网',
    synopsis:'3月21日至24日，由中国人民大学等主办的首届武夷论坛在福建南平举行。以“‘两个结合’与中华民族现代文明”为主题，中外嘉宾齐聚武夷山朱熹园，畅谈中华文脉，共话多元文明。',
    html: book01.default
  }, {
    id: 1,
    title: '国务院办公厅印发《关于坚定不移推进长江十年禁渔工作的意见》',
    cover: 'http://v2.webcast.china.com.cn/livephoto/2020/1931/21-2020-11-19-15-07-46.jpg',
    createTime: '2024年03月21日 21:23',
    author: '央视新闻客户端',
    synopsis:'日前，国务院办公厅印发《关于坚定不移推进长江十年禁渔工作的意见》(以下简称《意见》)。',
    html: book02.default
  }, {
    id: 2,
    title: '报告：我国网民规模达10.92亿人 互联网普及率达77.5%',
    cover: 'http://img.zjol.com.cn/mlf/dzw/zjxw/zjnews/zjxw/201904/W020190409226508364671.jpg',
    createTime: '2024年03月22日 14:35',
    author: '中国新闻网',
    synopsis:'3月22日电 据中国互联网络信息中心微信公众号消息，3月22日，中国互联网络信息中心(CNNIC)在京发布第53次《中国互联网络发展状况统计报告》(以下简称《报告》)。',
    html: book03.default
  }, {
    id: 3,
    title: '习言道｜让种粮也能够致富',
    cover: 'https://www.tongcheng.gov.cn/tcnews/uploads/image/2024/03/15/7a3e9a6d59313202eca0dc9278baad79.jpg',
    createTime: '2024年03月22日 13:55',
    author: '中国新闻网',
    synopsis:'中共中央总书记、国家主席、中央军委主席习近平近日在湖南考察。他强调——',
    html: book04.default
  }, {
    id: 4,
    title: '中新健康｜你听说过“睡眠离婚”吗？',
    cover: 'https://p4.itc.cn/q_70/images03/20230206/1215c42744ed4807b6796160d84e2d8a.jpeg',
    createTime: '2024年03月21日 22:21',
    author: '中国新闻网',
    synopsis:'北京3月21日(韦香惠 常新宇 臧赫)一个打鼾，呼噜声震得房顶似乎都在晃；一个体热，挨着实在睡不着；一个晚上要听音频博客才能睡，一个总是凌晨3点上厕所，偶尔还会梦游……这样的睡眠矛盾，出现在不止一个家庭的夜间。',
    html: book05.default
  }, {
    id: 5,
    title: '“我家‘门口’依然在签收我快递” 快递新规该如何落实？',
    cover: 'https://topfile2.huashangtop.com/news_hswspider_1707987510_nOBSPHrjUD.png',
    createTime: '2024年03月22日 07:26',
    author: '法治日报',
    synopsis:'快递新规实施半月有余 有收件人抱怨',
    html: book06.default
  },
]);

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
