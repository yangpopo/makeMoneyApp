<template>
  <div class="home">
    <div class="head-box">
      <swipe class="ad-swipe" :autoplay="3000" indicator-color="white">
        <swipe-item><img class="swipe-cover" src="@/assets/image/home/001.png" alt="" /></swipe-item>
        <swipe-item><img class="swipe-cover" src="@/assets/image/home/002.png" alt="" /></swipe-item>
        <swipe-item><img class="swipe-cover" src="@/assets/image/home/003.png" alt="" /></swipe-item>
        <swipe-item><img class="swipe-cover" src="@/assets/image/home/004.png" alt="" /></swipe-item>
      </swipe>
      <div class="notice-box">
        <div class="title-h1">公告</div>
        <swipe class="notice" :autoplay="3000" vertical :show-indicators="false">
          <swipe-item>
            <div class="swipe-item-box"></div>
          </swipe-item>
          <swipe-item>
            <div class="swipe-item-box"></div>
          </swipe-item>
          <swipe-item>
            <div class="swipe-item-box"></div>
          </swipe-item>
          <swipe-item>
            <div class="swipe-item-box"></div>
          </swipe-item>
        </swipe>
      </div>
      <div class="item-box">
        <dl class="item" @click="skiPage('find')">
          <dt><img src="@/assets/image/home/icon-task.png" alt=""></dt>
          <dd>广告任务</dd>
        </dl>
        <!-- <dl class="item">
          <dt><img src="@/assets/image/home/icon-mall.png" alt=""></dt>
          <dd>优选商城</dd>
        </dl> -->
        <dl class="item">
          <dt><img src="@/assets/image/home/icon-study.png" alt=""></dt>
          <dd>学习强国</dd>
        </dl>
      </div>
    </div>
    <div class="sell-box">
      <div class="title-h1">热门推荐</div>
      <div class="sell-item">
        <div class="classroom-item">
          <img class="icon-item" src="@/assets/image/home/classroom.png" alt="">
        </div>
        <div class="two-layers">
          <div to="/" class="help-item">
            <img class="icon-item" src="@/assets/image/home/help.png" alt="">
          </div>
          <div to="/" class="tutorial-item">
            <img class="icon-item" src="@/assets/image/home/tutorial.png" alt="">
          </div>
        </div>
        <!-- <RouterLink :to="{ name: 'bigEducation' }" class="classroom-item">
          <img class="icon-item" src="@/assets/image/home/classroom.png" alt="">
        </RouterLink>
        <div class="two-layers">
          <RouterLink :to="{ name: 'instructions' }" class="help-item">
            <img class="icon-item" src="@/assets/image/home/help.png" alt="">
          </RouterLink>
          <RouterLink to="/" class="tutorial-item">
            <img class="icon-item" src="@/assets/image/home/tutorial.png" alt="">
          </RouterLink>
        </div> -->
      </div>
    </div>
    
  </div>
</template>

<script lang="ts">
export default {
  name: 'home'
}
</script>

<script setup lang="ts">
// @ts-ignore
import { Swipe, SwipeItem, showToast } from 'vant';
import { RouterLink, useRouter} from 'vue-router';

const router = useRouter(); /* 路由对象 */
const skiPage = (name: string):void => {
  router.push({name})
}

</script>

<style lang="scss" scoped>
.home {
  width: 100vw;
  overflow-y: auto;
  .head-box {
    width: 100%;
    box-sizing: border-box;
    padding: 12vw 5vw 5vw 5vw;
    background-color: #fff;
    margin-bottom: 5vw;
    .ad-swipe {
      width: 100%;
      border-radius: 3vw;
      height: 40vw;
      margin-bottom: 5vw;
      .swipe-cover {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .notice-box{
      width: 100%;
      box-sizing: border-box;
      border-radius: 2vw;
      box-shadow: 0 0 2vw rgb(231, 231, 231);
      padding: 2vw 4vw;
      display: flex;
      align-items: center;
      margin-bottom: 5vw;
      .title-h1 {
        width: 12vw;
        font-size: 4vw;
        flex-shrink: 0;
        box-sizing: border-box;
        padding-right: 3vw;
        margin-right: 3vw;
        border-right: 1px solid rgb(221, 221, 221);
        color: #000;
      }
      .notice {
        width: calc(100% - 12vw - 3vw);
        height: 8vw;
        .swipe-item-box {
          width: 100%;
          line-height: 8vw;
          font-size: 4vw;
          color: #000;
          overflow: hidden; //超出的文本隐藏
          text-overflow: ellipsis; //溢出用省略号显示
          white-space: nowrap;  // 默认不换行；
        }
      }
    }
    .item-box {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .item {
        width: 20%;
        dt {
          margin-bottom: 2vw;
          img {
            width: 12vw;
            height: 12vw;
            display: block;
            margin: 0 auto;
          }
        }
        dd {
          text-align: center;
          font-size: 3.5vw;
          color: #000;
        }
      }
    }
  }
  .sell-box {
    width: 100vw;
    box-sizing: border-box;
    padding: 5vw;
    background-color: #fff;
    margin-bottom: 5vw;
    .title-h1 {
      font-size: 4.2vw;
      font-weight: bold;
      margin-bottom: 5vw;
    }
    .sell-item {
      width: 100%;
      display: flex;
      .classroom-item {
        width: 42vw;
        height: 50vw;
        margin-right: 3vw;
        flex-shrink: 0;
        .icon-item {
          width: 100%;
          height: 100%;
        }
      }
      .two-layers {
        width: 45vw;
        height: 23.5vw;
        flex-shrink: 0;
        .help-item {
          width: 100%;
          height: 100%;
          margin-bottom: 3vw;
          display: block;
        }
        .tutorial-item {
          width: 100%;
          height: 100%;
          display: block;
        }
        .icon-item {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
    }
  }
}
</style>
