import Vue from 'vue'
import Router from 'vue-router'
import Common from '@/components/Common';
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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Common',
      redirect:'/information',
      component: Common,
      children: [
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
        {path:'/ReleaseBaby', name: 'ReleaseBaby',component:ReleaseBaby},
    ]
    },
    
  ]
})
