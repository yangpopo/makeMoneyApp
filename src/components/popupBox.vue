
<template>
  <van-popup :show="isShow" teleport="body" :round="option.round || false" :position="option.position || 'bottom'" z-index="100" :safe-area-inset-bottom="true">
    <slot></slot>
  </van-popup>
  
</template>

<script setup lang="ts">
import { ref, toRefs } from 'vue'
import { Popup as vanPopup } from 'vant';

/* 接收配置参数 */
const props = defineProps(['option'])
let {option} = toRefs(props);


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
