<template>
  <div class="campus">
    <navBox class="head">
      <search v-model="searchKey" :clearable="false" maxlength="16" show-action inputmode="search" placeholder="请输入搜索内容"
        @search="submitSearch">
        <template #action>
          <RouterLink :to="{ name: 'signIn' }" class="sign-but">
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
          <bookItem v-for="bookData in bookListData" :key="bookData.title" :bookData="bookData" />
        </div>
      </List>
    </PullRefresh>
  </div>
</template>

<script lang="ts">
export default { name: 'campus' }
</script>

<script setup lang="ts">
import navBox from '@/components/navBox.vue';
import property from './components/campus/property.vue';
import bookItem from '@/components/bookItem.vue';
// @ts-ignore
import { Search, PullRefresh, List, showToast, showSuccessToast } from 'vant';
// @ts-ignore
import { ref, reactive, onMounted } from 'vue'
import { RouterLink, useRouter } from 'vue-router';


const router = useRouter(); /* 路由对象 */

/* 跳转页面 */
const skiPage = (name: string): void => {
  router.push({ name })
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

/* 书数据 */
const bookListData = reactive([
  {
    id: 0,
    title: '澳大利亚学者：澳中两国合作共赢是必由之路丨世界观',
    cover: 'https://i2.chinanews.com.cn/simg/cmshd/2024/03/22/34a51ceae055432db92e634a69958d4a.jpg',
    createTime: '2024年03月21日 17:29',
    author: '中国新闻网',
    synopsis:'3月21日至24日，由中国人民大学等主办的首届武夷论坛在福建南平举行。以“‘两个结合’与中华民族现代文明”为主题，中外嘉宾齐聚武夷山朱熹园，畅谈中华文脉，共话多元文明。',
  }, {
    id: 1,
    title: '国务院办公厅印发《关于坚定不移推进长江十年禁渔工作的意见》',
    cover: 'http://v2.webcast.china.com.cn/livephoto/2020/1931/21-2020-11-19-15-07-46.jpg',
    createTime: '2024年03月21日 21:23',
    author: '央视新闻客户端',
    synopsis:'日前，国务院办公厅印发《关于坚定不移推进长江十年禁渔工作的意见》(以下简称《意见》)。',
  }, {
    id: 2,
    title: '报告：我国网民规模达10.92亿人 互联网普及率达77.5%',
    cover: 'http://img.zjol.com.cn/mlf/dzw/zjxw/zjnews/zjxw/201904/W020190409226508364671.jpg',
    createTime: '2024年03月22日 14:35',
    author: '中国新闻网',
    synopsis:'3月22日电 据中国互联网络信息中心微信公众号消息，3月22日，中国互联网络信息中心(CNNIC)在京发布第53次《中国互联网络发展状况统计报告》(以下简称《报告》)。',
  }, {
    id: 3,
    title: '习言道｜让种粮也能够致富',
    cover: 'https://www.tongcheng.gov.cn/tcnews/uploads/image/2024/03/15/7a3e9a6d59313202eca0dc9278baad79.jpg',
    createTime: '2024年03月22日 13:55',
    author: '中国新闻网',
    synopsis:'中共中央总书记、国家主席、中央军委主席习近平近日在湖南考察。他强调——',
  }, {
    id: 4,
    title: '中新健康｜你听说过“睡眠离婚”吗？',
    cover: 'https://p4.itc.cn/q_70/images03/20230206/1215c42744ed4807b6796160d84e2d8a.jpeg',
    createTime: '2024年03月21日 22:21',
    author: '中国新闻网',
    synopsis:'北京3月21日(韦香惠 常新宇 臧赫)一个打鼾，呼噜声震得房顶似乎都在晃；一个体热，挨着实在睡不着；一个晚上要听音频博客才能睡，一个总是凌晨3点上厕所，偶尔还会梦游……这样的睡眠矛盾，出现在不止一个家庭的夜间。',
  }, {
    id: 5,
    title: '“我家‘门口’依然在签收我快递” 快递新规该如何落实？',
    cover: 'https://topfile2.huashangtop.com/news_hswspider_1707987510_nOBSPHrjUD.png',
    createTime: '2024年03月22日 07:26',
    author: '法治日报',
    synopsis:'快递新规实施半月有余 有收件人抱怨',
  },
]);



/* 创建完成 */
onMounted(() => {
})
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

    .read-suggest {
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
}</style>
