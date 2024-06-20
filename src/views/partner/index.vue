<template>
  <div class="notice-detail">
    <navBox>
      <NavBar left-arrow title="返利合伙人" @click-left="pageReturn">
      </NavBar>
    </navBox>
    <div class="container-box">
      <template v-if="pageState == 1">
        <h1 class="title">趁我返利合伙人<br />他买东西你赚钱</h1>
        <div class="submit-but" @click="pageState = 2">成为合伙人</div>
      </template>
      <template v-else-if="pageState == 2">
        <div class="form-box">
          <div class="form-title">基本信息</div>
          <div class="input-box">
            <span>登录信息</span>
            <input placeholder="请填写验证码"/>
          </div>
          <div class="input-box">
            <span>设备编号</span>
            <input placeholder="请填写设备号"/>
          </div>
        </div>
        <div class="submit-but" @click="pageReturn">提交信息</div>
      </template>
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


const router = useRouter(); /* 路由对象 */
/* 返回上一页面 */
const pageReturn = (): void => {
  router.go(-1);
}

/* 跳转页面 */
const skiPage = (name: string): void => {
  router.push({ name })
}

/**
  * 页面状态 1: 介绍 2:提交
  */ 
const pageState = ref(2);

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
    position: reactive;
    padding: 5vw 3vw;
    font-size: 3.5vw;

    h1.title {
      width: 100%;
      font-size: 5vw;
      font-weight: bold;
      text-align: center;
      line-height: 9vw;
      color: #000;
    }

    .content-box {
      width: 100%;
      word-wrap: anywhere;
    }
    .form-box {
      width: 100%;
      background-color: #fff;
      box-sizing: border-box;
      padding: 4vw 4vw;
      border-radius: 3vw;
      .form-title {
        font-size: 4vw;
        font-weight: bold;
        color: #000;
        margin-bottom: 3vw;
      }
      .input-box {
        box-sizing: border-box;
        padding: 2vw 0;
        font-size: 3.2vw;
        color: rgb(159, 159, 159);
        display: flex;
        align-items: center;
        span {
          width: 20vw;
        }
      }
    }
    .submit-but{
      position: fixed;
      width: calc(100% - 6vw);
      left: 3vw;
      bottom: 5vw;
      font-size: 4vw;
      text-align: center;
      background-color: rgb(0, 52, 239);
      color: #fff;
      padding: 3vw;
      box-sizing: border-box;
      border-radius: 6vw;
    }
  }
}
</style>
