<template>
  <div class="important">
    <RouterView class="inlet-box"></RouterView>
    <div class="nav-box">
      <RouterLink class="link-tag" :to="{ name: 'campus' }">
        <img src="@/assets/image/tabNav/campus-00.png" alt="" class="icon not-activate">
        <img src="@/assets/image/tabNav/campus-01.png" alt="" class="icon activate">
        校园
      </RouterLink>
      <RouterLink class="link-tag" :to="{ name: 'find' }">
        <img src="@/assets/image/tabNav/find-00.png" alt="" class="icon not-activate">
        <img src="@/assets/image/tabNav/find-01.png" alt="" class="icon activate">
        发现
      </RouterLink>
      <RouterLink class="link-tag" :to="{ name: 'home' }">
        <img src="@/assets/image/tabNav/home-00.png" alt="" class="icon not-activate">
        <img src="@/assets/image/tabNav/home-01.png" alt="" class="icon activate">
        首页
      </RouterLink>
      <RouterLink class="link-tag" :to="{ name: 'my' }">
        <img src="@/assets/image/tabNav/my-00.png" alt="" class="icon not-activate">
        <img src="@/assets/image/tabNav/my-01.png" alt="" class="icon activate">
        我的
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'important'
}
</script>

<script setup lang="ts">
// @ts-ignore
import { RouterLink, RouterView } from 'vue-router';
</script>

<style lang="scss" scoped>
.important {
  width: 100vw;
  height: 100vh;
}
.inlet-box {
  width: 100vw;
  height: calc(100vh - 18vw);
  background-color: rgb(245, 245, 245);
  box-sizing: border-box;
  position: relative;
  z-index: 1;
}

.nav-box {
  position: relative;
  z-index: 2;
  width: 100vw;
  height: 18vw;
  box-sizing: border-box;
  padding: 3vw 5vw 0 5vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #fff;

  .link-tag {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 3.5vw;
    color: #afb8cb;

    &.router-link-active {
      color: #5b6cff !important;

      .activate {
        display: block !important;
      }

      .not-activate {
        display: none !important;
      }
    }

    .icon {
      width: 6vw;
      height: 6vw;
      margin-bottom: 1vw;

      &.activate {
        display: none;
      }

      &.not-activate {
        display: block;
      }
    }
  }
}</style>
