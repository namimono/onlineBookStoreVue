/**
 * 路由器模块
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/AdminView.vue'
import Announcement from '../views/AnnouncementView.vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/adminView',
      component:Admin
    },
    {
      path: '/announcementView',
      component: Announcement

    }

  ]

})
