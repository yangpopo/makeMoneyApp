import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inletPage',
      // redirect: '/important/campus', // 重定向
      redirect: '/userAccount/logon', // 重定向
      // @ts-ignore
      component: () => import('@/views/inletPage/inletPage.vue'),
      children:[]
    },
    {
      path: '/important',
      name: 'important',
      redirect: '/important/campus', // 重定向
      // @ts-ignore
      component: () => import('@/views/important/important.vue'),
      children: [
        {
          /* 校园 */
          name:'campus',
          path:'campus',
          // @ts-ignore
          component: () => import('@/views/important/campus.vue'),
        },
        {
          /* 发现 */
          name:'find',
          path:'find',
          // @ts-ignore
          component: () => import('@/views/important/find.vue'),
        },
        {
          /* 首页 */
          name:'home',
          path:'home',
          // @ts-ignore
          component: () => import('@/views/important/home.vue'),
        },
        {
          /* 我的 */
          name:'my',
          path:'my',
          // @ts-ignore
          component: () => import('@/views/important/my.vue'),
        }
      ]
    },
    /* 我的有关 */
    {
      path: '/userAccount',
      name: 'myPage',
      redirect: '/userAccount/logon', // 重定向
      // @ts-ignore
      component: () => import('@/views/entrance.vue'),
      children:[{
        /* 登录 */
        name:'logon',
        path:'logon',
        // @ts-ignore
        component: () => import('@/views/userAccount/logon.vue'),
      }, {
        /* 注册 */
        name:'register',
        path:'register',
        // @ts-ignore
        component: () => import('@/views/userAccount/register.vue'),
      }, {
        /* 找回密码 */
        name:'retrievePassword',
        path:'retrievePassword',
        // @ts-ignore
        component: () => import('@/views/userAccount/retrievePassword.vue'),
      }]
    },
    /* 签到 */
    {
      path: '/signIn',
      name: 'signIn',
      // @ts-ignore
      component: () => import('@/views/signIn/index.vue'),
    },
    /* 账户明细 */
    {
      path: '/accountDetails',
      name: 'accountDetails',
      redirect: '/accountDetails/index', // 重定向
      // @ts-ignore
      component: () => import('@/views/entrance.vue'),
      children: [{
        /* 账户信息 */
        path: 'index',
        name: 'accountDetailsIndex',
        // @ts-ignore
        component: () => import('@/views/accountDetails/accountDetails.vue'),
      }, {
        /* 提现 */
        path: 'withdraw',
        name: 'withdraw',
        // @ts-ignore
        component: () => import('@/views/accountDetails/withdraw.vue'),
      }, {
        /* 银行卡 */
        path: 'bankCard',
        name: 'bankCard',
        // @ts-ignore
        component: () => import('@/views/accountDetails/bankCard.vue'),
      }]
    },
    /* 公告 */
    {
      path: '/notice',
      name: 'notice',
      redirect: '/notice/index', // 重定向
      // @ts-ignore
      component: () => import('@/views/entrance.vue'),
      children: [{
        /* 公告列表 */
        path: 'index',
        name: 'noticeIndex',
        // @ts-ignore
        component: () => import('@/views/notice/noticeList.vue'),
      }, {
        /* 公告详情 */
        path: 'noticeDetail',
        name: 'noticeDetail',
        // @ts-ignore
        component: () => import('@/views/notice/noticeDetail.vue'),
      }]
    },
    /* 客服中心 */
    {
      path: '/callCenter',
      name: 'callCenter',
      redirect: '/callCenter/index', // 重定向
      // @ts-ignore
      component: () => import('@/views/entrance.vue'),
      children: [{
        /* 客服中心 */
        path: 'index',
        name: 'callCenterIndex',
        // @ts-ignore
        component: () => import('@/views/callCenter/callCenter.vue'),
      }, {
        /* 常见问题列表 */
        path: 'commonProblemList',
        name: 'commonProblemList',
        // @ts-ignore
        component: () => import('@/views/callCenter/commonProblemList.vue'),
      }, {
        /* 常见问题详情 */
        path: 'commonProblemDetails',
        name: 'commonProblemDetails',
        // @ts-ignore
        component: () => import('@/views/callCenter/commonProblemDetails.vue'),
      }]
    },
    /* 隐私条例 */
    {
      path: '/privacyPolicy',
      name: 'privacyPolicy',
      // @ts-ignore
      component: () => import('@/views/privacyPolicy/privacyPolicyDetails.vue'),
      children:[]
    },
    /* 个人资料 */
    {
      path: '/userInfo',
      name: 'userInfo',
      // @ts-ignore
      component: () => import('@/views/userInfo/userInfo.vue'),
      children:[]
    },
    /* 账号安全 */
    {
      path: '/accountSafety',
      name: 'accountSafety',
      redirect: '/accountSafety/index', // 重定向
      // @ts-ignore
      component: () => import('@/views/entrance.vue'),
      children:[{
        /* 账号安全 */
        path: 'index',
        name: 'accountSafetyIndex',
        // @ts-ignore
        component: () => import('@/views/accountSafety/accountSafety.vue'),
      }, {
        /* 修改手机号 */
        path: 'modifyPhone',
        name: 'modifyPhone',
        // @ts-ignore
        component: () => import('@/views/accountSafety/modifyPhone.vue'),
      }, {
        /* 修改密码 */
        path: 'modifyPassword',
        name: 'modifyPassword',
        // @ts-ignore
        component: () => import('@/views/accountSafety/modifyPassword.vue'),
      }, {
        /* 找回密码 */
        path: 'retrievePasswordSafety',
        name: 'retrievePasswordSafety',
        // @ts-ignore
        component: () => import('@/views/accountSafety/retrievePassword.vue'),
      }]
    },
    /* 商品 */
    {
      path: '/commodity',
      name: 'commodity',
      redirect: '/commodity/index', // 重定向
      // @ts-ignore
      component: () => import('@/views/entrance.vue'),
      children:[{
        /* 商品首页 */
        path: 'index',
        name: 'commodityIndex',
        // @ts-ignore
        component: () => import('@/views/commodity/commodityHome.vue'),
      }, {
        /* 商品收藏 */
        path: 'commodityCollect',
        name: 'commodityCollect',
        // @ts-ignore
        component: () => import('@/views/commodity/commodityCollect.vue'),
      }, {
        /* 商品详情 */
        path: 'commodityDetail',
        name: 'commodityDetail',
        // @ts-ignore
        component: () => import('@/views/commodity/commodityDetail.vue'),
      }]
    },
    /* 我的卡券 */
    {
      path: '/coupon',
      name: 'coupon',
      redirect: '/coupon/index', // 重定向
      // @ts-ignore
      component: () => import('@/views/entrance.vue'),
      children:[{
        /* 卡券 */
        path: 'index',
        name: 'couponIndex',
        // @ts-ignore
        component: () => import('@/views/coupon/coupon.vue'),
      }]
    },
    /* 合伙人 */
    {
      path: '/partner',
      name: 'partner',
      // @ts-ignore
      component: () => import('@/views/partner/index.vue'),
      children:[]
    },
    /* 搜索 */
    {
      path: '/search',
      name: 'search',
      // @ts-ignore
      component: () => import('@/views/search/index.vue'),
      children:[]
    },
  ]
})

export default router
