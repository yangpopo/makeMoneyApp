<template>
  <div class="course-item">
    <VanImage class="cover-img" fit="cover" width="34vw" height="21vw" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
    <div class="course-info">
      <div class="title">阿斯蒂芬噶水电费阿斯顿发山东</div>
      <div class="more-box">
        <div class="progress-box">
          <span class="progress-val"></span>
        </div>
        <span class="describe">已观看1%</span>
      </div>
    </div>
    <vanIcon class="arrow-style" name="arrow" size="25" color="#bcbcbc" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'courseItem'
}
</script>

<script setup lang="ts">
// @ts-ignore
import { showToast, Image as VanImage, Icon as vanIcon } from 'vant';
// @ts-ignore
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'

import { moneyFormat } from '@/assets/js/public'

const router = useRouter(); /* 路由对象 */

/* 跳转页面 */
const skiPage = (name: string): void => {
  router.push({ name })
}

/* 接收父组件参数 */
const props = defineProps(['isAdminPattern'])


/**
 * 优化货比格式
*/
function currencyFormat(val:number | string): string {
  return moneyFormat(val)
}


/* 创建完成 */
onMounted(() => {
  
})
</script>

<style lang="scss" scoped>
.course-item {
  width: 100%;
  box-sizing: border-box;
  padding: 3vw 0vw;
  background-color: #fff;
  margin-bottom: 3vw;
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid #f0f0f0;
  position: relative;
  .cover-img {
    margin-right: 3vw;
    border-radius: 2vw;
    overflow: hidden;
    flex-shrink: 0;
  }
  .course-info {
    width: calc(100% - 36vw - 3vw);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      width: 100%;
      font-size: 3.5vw;
      color: #000;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .more-box {
      display: flex;
      align-items: center;
      .progress-box {
        width: 68%;
        height: 2.5vw;
        background-color: #d9d9d9;
        border-radius: 5vw;
        margin-right: 1vw;
        position: relative;
        .progress-val {
          width: 50%;
          height: 2.5vw;
          border-radius: 5vw;
          background-color: rgb(0, 52, 239);
          display: block;
        }
      }
      .describe {
        width: calc(100% - 68% - 1vw);
        text-align: center;
        font-size: 3vw;
        color: rgb(0, 52, 239);
      }
    }
  }
  .arrow-style {
    flex-shrink: 0;
    margin: auto 0 auto 2vw;
  }
}
</style>
