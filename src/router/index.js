import Vue from 'vue'
import Router from 'vue-router'
import Common from '@/components/Common';

import Login from '../page/login/login.vue'
import Register from '../page/login/register.vue'
import Edit from '../page/login/edit.vue'

import Information from '@/page/Information';
import WarehourseGoods from '@/page/WarehourseGoods';
import ReleaseBaby from '../page/ReleaseBaby.vue'

import CarOrderAdmin from '../page/car/OrderAdmin.vue'
import CarOrderAdminDetail from '../page/car/OrderAdminDetail.vue'
import CarProductRelease from '../page/car/ProductRelease.vue'

import UsedOrderAdmin from '../page/used/OrderAdmin.vue'
import UsedOrderAdminDetail from '../page/used/OrderAdminDetail.vue'
import UsedProductRelease from '../page/used/ProductRelease.vue'

import IntegralOrderAdmin from '../page/integral/OrderAdmin.vue'
import IntegralOrderAdminDetail from '../page/integral/OrderAdminDetail.vue'
import IntegralProductRelease from '../page/integral/ProductRelease.vue'

import SecureProductRelease from '../page/Secure/ProductRelease.vue'

import CarLoanProductRelease from '../page/CarLoan/ProductRelease.vue'

import Release from '../components/Release.vue'
import ReleaseCar from '../page/Release/ReleaseCar.vue'
import ReleaseUsed from '../page/Release/ReleaseUsed.vue'
import ReleaseIntegral from '../page/Release/ReleaseIntegral.vue'
import ReleaseSecure from '../page/Release/ReleaseSecure.vue'
import ReleaseFund from '../page/Release/ReleaseFund.vue'
import ReleaseLoan from '../page/Release/ReleaseLoan.vue'
import ReleaseCoupon from '../page/Release/ReleaseCoupon.vue'

import Echarts from '../page/charts/echarts.vue'
import OrderCensus from '../page/charts/ordercensus.vue'

import Indexs from '../page/index.vue'


// 无用的
import Delete from '../components/delete.vue'


// 字典管理
import Dictionary from '../page/dictionary/dictionary.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Common',
      redirect: '/login',
      component: Common,
      children: [
        { path: 'index', name: 'Indexs', component: Indexs },
        { path: 'information', name: 'Information', component: Information },
        { path: 'WarehourseGoods', name: 'WarehourseGoods', component: WarehourseGoods },

        { path: 'CarOrderAdmin', name: 'CarOrderAdmin', component: CarOrderAdmin },
        { path: 'CarOrderAdminDetail', name: 'CarOrderAdminDetail', component: CarOrderAdminDetail },
        { path: 'CarProductRelease', name: 'CarProductRelease', component: CarProductRelease },

        { path: 'UsedOrderAdmin', name: 'UsedOrderAdmin', component: UsedOrderAdmin },
        { path: 'UsedOrderAdminDetail', name: 'UsedOrderAdminDetail', component: UsedOrderAdminDetail },
        { path: 'UsedProductRelease', name: 'UsedProductRelease', component: UsedProductRelease },

        { path: 'IntegralOrderAdmin', name: 'IntegralOrderAdmin', component: IntegralOrderAdmin },
        { path: 'IntegralOrderAdminDetail', name: 'IntegralOrderAdminDetail', component: IntegralOrderAdminDetail },
        { path: 'IntegralProductRelease', name: 'IntegralProductRelease', component: IntegralProductRelease },

        { path: 'SecureProductRelease', name: 'SecureProductRelease', component: SecureProductRelease },

        { path: 'CarLoanProductRelease', name: 'CarLoanProductRelease', component: CarLoanProductRelease },
        { path: 'ReleaseBaby', name: 'ReleaseBaby', component: ReleaseBaby },

        { path: 'ReleaseCar', name: 'ReleaseCar', component: ReleaseCar },
        { path: 'ReleaseUsed', name: 'ReleaseUsed', component: ReleaseUsed },
        { path: 'ReleaseIntegral', name: 'ReleaseIntegral', component: ReleaseIntegral },
        { path: 'ReleaseSecure', name: 'ReleaseSecure', component: ReleaseSecure },
        { path: 'ReleaseFund', name: 'ReleaseFund', component: ReleaseFund },
        { path: 'ReleaseLoan', name: 'ReleaseLoan', component: ReleaseLoan },
        { path: 'ReleaseCoupon', name: 'ReleaseCoupon', component: ReleaseCoupon },
        { path: 'dictionary', name: 'Dictionary', component: Dictionary },
        {path: 'echarts',name: 'echarts',component: Echarts}, 
        {path: 'ordercensus',name: 'ordercensus',component: OrderCensus},
      ]
    },
    { path: "/login", name: "Login", component: Login },
    { path: "/register", name: "Register", component: Register },
    { path: "/edit", name: "Edit", component: Edit },
    { path: "/delete", name: "Delete", component: Delete }
  ]
})
