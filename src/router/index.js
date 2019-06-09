/**
 * 路由器模块
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from  '../views/Admin.vue'
import Announcement from  '../views/Announcement.vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/admin',
      component:Admin
    },
    {
      path: '.announcement',
      component: Announcement

    }

  ]

})
