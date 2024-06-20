<template>
  <!-- 书籍项 -->
  <div class="book-item" @click="skiPage('commodityDetail')">
    <VanImage class="book-cover" width="26vw" height="34vw" radius="8" fit="cover" position="center" :src="props.bookData.cover" />
    <dl class="describe-info">
      <dt>{{ props.bookData.title }}</dt>
      <dd>{{ props.bookData.synopsis }}</dd>
      <dd>作者:{{ props.bookData.author }}</dd>
    </dl>
  </div>
</template>

<script lang="ts">
export default {
  name: 'bookItem'
}
</script>

<script setup lang="ts">
// @ts-ignore
import { Image as VanImage, showToast } from 'vant';
// @ts-ignore
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router';

const props = defineProps(['bookData'])

const router = useRouter(); /* 路由对象 */

/* 跳转页面 */
const skiPage = (name: string):void => {
  router.push({name, query: {id: props.bookData.id}})
}
onMounted(() => {
  
})
</script>

<style lang="scss" scoped>
.book-item {
  width: 100%;
  box-sizing: border-box;
  padding: 3vw 0;
  border-bottom: 1px solid rgb(225, 225, 225);
  display: flex;
  align-items: stretch;
  .book-cover {
    margin-right: 5vw;
    flex-shrink: 0;
  }
  .describe-info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: calc(100% - 26vw - 5vw);
    dt {
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 4.5vw;
      color: #000;
    }
    dd {
      width: 100%;
      font-size: 3.5vw;
      color: rgb(179, 179, 179);
      &:nth-child(2) {
        overflow: hidden;
        text-overflow: ellipsis;  /* 超出部分省略号 */
        word-break: break-all;  /* break-all(允许在单词内换行。) */  
        display: -webkit-box; /* 对象作为伸缩盒子模型显示 */
        -webkit-box-orient: vertical; /* 设置或检索伸缩盒对象的子元素的排列方式 */
        -webkit-line-clamp: 2; /* 显示的行数 */
      }
    }
  }
}
</style>
