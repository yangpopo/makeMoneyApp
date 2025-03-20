<template>
  <div class="common-problem-list">
    <navBox class="nav-box">
      <NavBar left-arrow title="常见问题" @click-left="pageReturn">
      </NavBar>
    </navBox>
    <div class="container-box">
      <ul class="menu-box">
        <li :class="menuIndex == 0 ? 'selected' : ''" @click="switchMenu(0)">软件问题</li>
        <li :class="menuIndex == 1 ? 'selected' : ''" @click="switchMenu(1)">硬件问题</li>
      </ul>
      <div class="list-box">
        <div class="list-item" v-for="item in 10" :key="item" @click="skiPage('commonProblemDetails')">
          <img class="cover" src="@/assets/image/callCenter/service-icon.png" alt="">
          <dl class="synopsis">
            <dt>asdfsadfsaasdfsadfsaasdfsadfsaasdfsadfsaasdfsadfsaasdfsadfsaasdfsadfsa</dt>
            <dd>asdfsadfsaasdfsadfsaasdfsadfsaasdfsadfsaasdfsadfsaasdfsadfsaasdfsadfsa</dd>
          </dl>
          <van-icon name="arrow" size="20" color="#b4b4b4" />
        </div>
      </div>


    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'commonProblemList'
}
</script>

<script setup lang="ts">
import navBox from '@/components/navBox.vue';
import { NavBar, Icon as vanIcon, showToast, Cell as vanCell } from 'vant';
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


let menuIndex = ref(0); // 菜单选项
/* 切换菜单 */
const switchMenu = (index: number): void => {
  menuIndex.value = index;
}


</script>

<style lang="scss" scoped>
.common-problem-list {
  width: 100vw;
  min-height: 100vh;
  // background-color: rgb(245, 245, 245);
  background-color: #fff;
  .container-box {
    width: 100vw;
    height: calc(100vh - 22.3vw);
    overflow-y: auto;
    box-sizing: border-box;
    padding: 5vw;
    .menu-box {
      width: 100%;
      box-shadow: 0 0 1.5vw #ebebeb;
      box-sizing: border-box;
      padding: 2vw;
      border-radius: 2vw;
      display: flex;
      justify-content: center;
      margin-bottom: 5vw;
      li {
        width: 20vw;
        margin: 0 2vw;
        text-align: center;
        position: relative;
        font-size: 3vw;
        color: #9d9d9d;
        box-sizing: border-box;
        padding: 1vw 0;
        &.selected {
          font-size: 3.2vw;
          color: #000;
          &:before {
            content: "";
            display: block;
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%);
            background-color: #0050bf;
            width: 6vw;
            height: 2px;
          }
        }
      }
    }
    .list-box{
      width: 100%;
      
      .list-item {
        width: 100%;
        box-sizing: border-box;
        padding: 3vw 0;
        display: flex;
        justify-content: start;
        align-items: center;
        border-bottom: 1px solid #f0f0f0;
        &:last-child {
          border-bottom: none;
        }
        .cover {
          width: 12vw;
          height: 12vw;
          object-fit: fill;
          margin-right: 3vw;
        }
        .synopsis {
          width: calc(100% - 20vw - 3vw - 3vw);
          margin-right: 3vw;
          dt {
            width: 100%;
            font-size: 3.5vw;
            color: #000;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;

          }
          dd {
            font-size: 3vw;
            color: #b4b4b4;
            width: 100%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }

    }
  }
}
</style>
