<template>
  <div class="course-item">
    <vanCheckbox v-if="props.isAdminPattern" checked-color="rgb(0, 52, 239)"  v-model="checked" class="check-box" icon-size="18px" />
    <VanImage class="cover-img" fit="cover" width="34vw" height="21vw" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
    <div class="course-info">
      <div class="title">阿斯蒂芬噶水电费阿斯顿发山东</div>
      <div class="more-box">
        <span class="left-box">免费</span>
        <span class="right-box" @click="skiPage('educationDetail')">去学习</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'courseItem'
}
</script>

<script setup lang="ts">
// @ts-ignore
import { showToast, Image as VanImage, Checkbox as vanCheckbox } from 'vant';
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

/* 选中状态 */
const checked = ref(false);

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
  .check-box {
    margin-right: 2vw;
    flex-shrink: 0;
  }
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
      justify-content: space-between;
      align-items: center;
      .left-box {
        font-size: 4.2vw;
        font-weight: bold;
        color: rgb(0, 52, 239);
      }
      .right-box {
        font-size: 3.5vw;
        color: #fff;
        background-color: rgb(0, 52, 239);
        box-sizing: border-box;
        padding: 1vw 3.2vw;
        border-radius: 4vw;
      }
    }
  }
}
</style>
