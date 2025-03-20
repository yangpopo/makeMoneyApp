<template>
  <div class="commodity-collect">
    <navBox class="nav-box">
      <NavBar left-arrow title="书架" right-text="管理" @click-left="pageReturn" @click-right="adminCommodity">
      </NavBar>
    </navBox>
    <div class="container-box">
      <div class="container-item" v-for="item in 10" :key="item">
        <vanCheckbox class="check-style" checked-color="rgb(0, 52, 239)" icon-size="18px" v-if="isEditPattern" v-model="asdfsad" />
        <VanImage class="book-cover" width="29vw" height="38vw" radius="0" fit="cover" position="center" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
        <dl class="info-data">
          <dt>名称名称名称名称名称名称名称</dt>
          <dd>已阅读0.01%</dd>
        </dl>
      </div>
      <div class="bottom-box" v-if="isEditPattern">
        <vanCheckbox v-model="asdfsad" checked-color="rgb(0, 52, 239)" icon-size="18px" >全选</vanCheckbox>
        <div class="delete-but">移除</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default { name: 'commodityHome' }
</script>

<script setup lang="ts">
import navBox from '@/components/navBox.vue';
import bookItem from '@/components/bookItem.vue';

import { RouterLink } from 'vue-router';

import { NavBar, Icon as vanIcon, showToast, Image as VanImage, Checkbox as vanCheckbox } from 'vant';


// @ts-ignore
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter(); /* 路由对象 */

/* 返回上一页面 */
const pageReturn = ():void => {
  router.go(-1);
}



/* 跳转页面 */
const skiPage = (name: string):void => {
  router.push({name})
}


/* 是否是编辑模式 */
const isEditPattern = ref(false);
/**
 * 管理商品
*/
const adminCommodity = () => {
  isEditPattern.value = !isEditPattern.value;
}


const asdfsad = ref('');



</script>

<style lang="scss" scoped>
.commodity-collect {
  width: 100vw;
  min-height: 100vh;
  // background-color: rgb(245, 245, 245);
  background-color: #fff;
  .nav-box {
    width: 100%;
    // :deep(.van-nav-bar) {
    //   --van-nav-bar-background: rgb(245, 245, 245);
    // }
    // :deep(.van-hairline--bottom:after) {
    //   border-bottom-width: 0;
    // }
    // :deep(.van-nav-bar__title) {
    //   --van-nav-bar-title-text-color: #fff;
    // }
    // :deep(.van-nav-bar .van-icon) {
    //   --van-nav-bar-icon-color: #fff;
    // }
  }
  .container-box {
    width: 100vw;
    height: calc(100vh - 22.3vw);
    overflow-y: auto;
    box-sizing: border-box;
    padding: 5vw 3vw 25vw 3vw;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .container-item {
      width: 29vw;
      margin-right: 3vw;
      margin-bottom: 3vw;
      position: relative;
      &:nth-child(3n) {
        margin-right: 0vw;
      }
      .check-style {
        position: absolute;
        top: 1vw;
        right: 1vw;
        z-index: 2;
      }
      .info-data {
        width: 100%;
        text-align: center;
        dt {
          font-size: 3vw;
          color: #000;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: normal;
          margin-bottom: 1vw;
        }
        dd {
          font-size: 2.8vw;
          color: #4f4f4f;
        }
      }
    }
    .bottom-box {
      width: 100%;
      background-color: #fff;
      position: fixed;
      left: 0;
      bottom: 0;
      box-sizing: border-box;
      padding: 3vw 3vw 5vw 3vw;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .delete-but {
        font-size: 3.4vw;
        color: #fff;
        background-color: rgb(0, 52, 239);
        border-radius: 1.5vw;
        box-sizing: border-box;
        padding: 1.5vw 4vw;
      }
    }
  }
  :deep(.van-checkbox__icon .van-icon) {
    // --van-white
    --van-checkbox-checked-icon-color: #ffffff7a;
    background-color: var(--van-checkbox-checked-icon-color);
  }
}



</style>
