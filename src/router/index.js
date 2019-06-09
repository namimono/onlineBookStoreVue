/**
 * 路由器模块
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/admin-view/AdminView.vue'
import Announcement from '../views/announcement-view/AnnouncementView.vue'
import MainView from '../views/main-view/MainView.vue'
import RankView from '../views/rank-view/RankView.vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/adminView',
      component: Admin
    },
    {
      path: '/announcementView/:id',
      component: Announcement

    },
    {
      path: '/mainView',
      component: MainView
    },
    {
      path:'/rankView',
      component:RankView
    },
    {
      path: '/',
      redirect:'/mainView'

    }

  ]

})
