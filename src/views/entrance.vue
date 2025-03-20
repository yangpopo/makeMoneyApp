<template>
  <RouterView class="inlet-box" v-slot="{ Component }">
    <transition name="ranimate">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>

<script lang="ts">
export default {
  name: 'callCenterIndex'
}
</script>

<script setup lang="ts">
// @ts-ignore
import { RouterView } from 'vue-router';
</script>

<style lang="scss" scoped>
// 进入
.ranimate-enter-active {
  // animation: fadeInLeft 1s;
}
// 离开
.ranimate-leave-active {
  // animation: fadeOutLeftBig 0.5s;
}

.inlet-box {
  width: 100vw;
  min-height: 100vh;
  overflow-y: auto;
}
</style>
