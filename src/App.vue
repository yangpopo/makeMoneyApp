<template>
  <RouterView class="inlet-box" v-slot="{ Component }">
    <transition name="ranimate">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>



<style lang="scss" scoped>
// 进入
.ranimate-enter-active {
  animation: fadeInLeft 1s;
}
// 离开
.ranimate-leave-active {
  animation: fadeOutLeftBig 0.5s;
}
</style>
<style lang="scss">

#app {
  position: relative;
}
:root {
  --van-nav-bar-text-color: rgb(50, 50, 50) !important;
  --van-nav-bar-icon-color: rgb(50, 50, 50) !important;
}
</style>