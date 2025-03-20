<template>
  <div class="call-center">
    <navBox class="nav-box">
      <NavBar left-arrow title="我的卡券" @click-left="pageReturn" right-text="管理" @click-right="adminCoupon">
      </NavBar>
    </navBox>
    <div class="container-box">
      <van-tabs v-model:active="active" class="tabs-box">
        <van-tab title="可用(2)">
          <PullRefresh class="content-box" v-model="refreshState" @refresh="onRefresh">
            <List v-model:loading="loadingState" :finished="isFinished" finished-text="没有更多了" @load="onLoad" style="padding-bottom: 15vw;">
              <div class="van-coupon" v-for="item in 10" :key="item">
                <div class="van-coupon__content">
                  <div class="van-coupon__head">
                    <h2 class="van-coupon__amount">1.5<span>元</span></h2>
                    <p class="van-coupon__condition">无门槛<br/>最多优惠12元</p>
                  </div>
                  <div class="van-coupon__body">
                    <p class="van-coupon__name">优惠券名称</p>
                    <p class="van-coupon__valid">2017.03.10 - 2017.12.30</p>
                    <div role="checkbox" class="van-checkbox van-coupon__corner" tabindex="0" aria-checked="false">
                      <vanCheckbox v-if="isAdminCoupon" v-model="checked" />
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </PullRefresh>
        </van-tab>
        <van-tab title="不可用(2)">
          <PullRefresh class="content-box" v-model="refreshState" @refresh="onRefresh">
            <List v-model:loading="loadingState" :finished="isFinished" finished-text="没有更多了" @load="onLoad">
              <div class="van-coupon" v-for="item in 10" :key="item">
                <div class="van-coupon__content">
                  <div class="van-coupon__head">
                    <h2 class="van-coupon__amount">1.5<span>元</span></h2>
                    <p class="van-coupon__condition">无门槛<br/>最多优惠12元</p>
                  </div>
                  <div class="van-coupon__body">
                    <p class="van-coupon__name">优惠券名称</p>
                    <p class="van-coupon__valid">2017.03.10 - 2017.12.30</p>
                    <div role="checkbox" class="van-checkbox van-coupon__corner" tabindex="0" aria-checked="false">
                      <vanCheckbox v-if="isAdminCoupon" v-model="checked" />
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </PullRefresh>
        </van-tab>
      </van-tabs>
      <div class="delete-but" v-if="isAdminCoupon">删除</div>
    </div>
  </div>
</template>

<script lang="ts">
export default { name: 'callCenter' }
</script>

<script setup lang="ts">
import navBox from '@/components/navBox.vue';
import popupBox from '@/components/popupBox.vue';

import { NavBar, Icon as vanIcon, showToast, showSuccessToast, Tab as vanTab, Tabs as vanTabs, PullRefresh, List, Checkbox as vanCheckbox } from 'vant';


// @ts-ignore
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

/* 返回上一页面 */
const pageReturn = ():void => {
  router.go(-1);
}

const router = useRouter(); /* 路由对象 */

const active = ref(0);

const coupons = reactive([{
  available: 1,
  condition: '无门槛\n最多优惠12元',
  reason: '',
  value: 150,
  name: '优惠券名称',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '1.5',
  unitDesc: '元',
}]);


/* 下拉刷新 */
const refreshState = ref(false); // 加载状态
const onRefresh = () => {
  setTimeout(() => {
    showSuccessToast('刷新成功');
    refreshState.value = false;
  }, 1000);
};
/* 上拉加载 */
const loadingState = ref(false); // 加载状态
const isFinished = ref(true); // 是否加载完成
const onLoad = () => {
  setTimeout(() => {
    // showToast('加载成功');
    loadingState.value = false;
  }, 1000);
};

/* 选择状态 */
const checked = ref(false);


/* 管理卡片 */
const isAdminCoupon = ref(false); // 是否是管理模式
const adminCoupon = () => {
  isAdminCoupon.value = !isAdminCoupon.value;
  console.log('管理卡片');
}


</script>

<style lang="scss" scoped>
.call-center {
  width: 100vw;
  min-height: 100vh;
  background-color: rgb(245, 245, 245);
  // background-color: #fff;
  .nav-box {
    width: 100%;
  }
  .container-box {
    width: 100vw;
    height: calc(100vh - 22.5vw);
    box-sizing: border-box;
    padding: 0;
    position: relative;
    .tabs-box {
      height: calc(100vh - 22.5vw);
      overflow-y: auto;
      box-sizing: border-box;
    }
    .delete-but {
      position: fixed;
      width: calc(100vw - 6vw);
      left: 3vw;
      bottom: 5vw;
      text-align: center;
      font-size: 4vw;
      color: #fff;
      box-sizing: border-box;
      padding: 3vw;
      border-radius: 6vw;
      background-color: rgb(0, 52, 239);
    }
  }
  .content-box {
    width: 100vw;
    height: calc(100vh - 34.5vw);
    overflow-y: auto;
    box-sizing: border-box;
    padding: 3vw 0;
  }
  :deep(.van-tabs__line) {
    --van-tabs-bottom-bar-color: rgb(0, 52, 239);
  }
  .van-coupon__head {
    --van-coupon-amount-color: rgb(0, 52, 239);
  }
}
</style>
