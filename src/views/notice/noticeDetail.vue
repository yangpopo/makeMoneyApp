<template>
  <div class="notice-detail">
    <navBox>
      <NavBar left-arrow @click-left="pageReturn">
      </NavBar>
    </navBox>
    <div class="container-box">
      <dl class="title-box">
        <dt>
          公告标题
        </dt>
        <dd>2020-02-02 20:20:20</dd>
      </dl>
      <div class="content-box">啊啊撒旦法撒旦法阿斯顿发斯蒂芬阿斯顿发斯蒂芬阿斯蒂芬啊啊撒旦法撒旦法阿斯顿发斯蒂芬阿斯顿发斯蒂芬阿斯蒂芬啊啊撒旦法撒旦法阿斯顿发斯蒂芬阿斯顿发斯蒂芬阿斯蒂芬啊啊撒旦法撒旦法阿斯顿发斯蒂芬阿斯顿发斯蒂芬阿斯蒂芬啊啊撒旦法撒旦法阿斯顿发斯蒂芬阿斯顿发斯蒂芬阿斯蒂芬啊啊撒旦法撒旦法阿斯顿发斯蒂芬阿斯顿发斯蒂芬阿斯蒂芬啊啊撒旦法撒旦法阿斯顿发斯蒂芬阿斯顿发斯蒂芬阿斯蒂芬啊啊撒旦法撒旦法阿斯顿发斯蒂芬阿斯顿发斯蒂芬阿斯蒂芬</div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'noticeDetail'
}
</script>
00
<script setup lang="ts">
import navBox from '@/components/navBox.vue';
import { NavBar, showToast } from 'vant';
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


</script>

<style lang="scss" scoped>
.notice-detail {
  width: 100vw;
  min-height: 100vh;
  background-color: rgb(245, 245, 245);
  .container-box {
    width: 100vw;
    height: calc(100vh - 22.3vw);
    overflow-y: auto;
    box-sizing: border-box;
    padding: 5vw 3vw;
    font-size: 3.5vw;
    .title-box {
      width: 100%;
      margin-bottom: 3vw;
      dt {
        font-size: 4vw;
        font-weight: bold;
        color: #000;
        margin-bottom: 1vw;
      }
      dd {
        font-size: 3.2vw;
        color: #9a9a9a;
      }
    }
    .content-box {
      width: 100%;
      word-wrap: anywhere;
    }
  }
}
</style>
