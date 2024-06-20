
<template>
  <teleport to='body'>
    <van-overlay :show="isShow" @click="isShow = false" z-index="100">
      <slot></slot>
    </van-overlay>
  </teleport>
  
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Overlay as vanOverlay } from 'vant';

// 显示规则
let isShow = ref(false); // 是否显示规则

defineExpose({
  isShow
})
</script>

<style lang="scss" scoped>
.nav-box {
  background-color: #fff;
  box-sizing: border-box;
  padding: 10vw 0 0 0;
  width: 100vw;
}
</style>
