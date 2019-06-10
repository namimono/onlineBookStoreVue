/**
 * 路由器模块
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/admin-view/AdminView.vue'
import Announcement from '../views/announcement-view/AnnouncementView.vue'
import MainView from '../views/main-view/MainView.vue'
import RankView from '../views/rank-view/RankView.vue'
import AnnonceContent from '../views/admin-view/children-view/AnnonceContentView.vue'
import UserContentView from '../views/admin-view/children-view/UserContentView.vue'
import AdvertiseContentView from '../views/admin-view/children-view/AdvertiseContentView.vue'
import EditAnnoncementView from '../views/admin-view/children-view/EditAnnoncementView.vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/adminView',
      component: Admin,
      children:[
        {path:'announceContentView',component: AnnonceContent},
        {path:'UserContentView',component: UserContentView},
        {path:'AdvertiseContentView',component: AdvertiseContentView},
        {path:'EditAnnoncementView/:id',component: EditAnnoncementView},
      ]
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
