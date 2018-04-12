import Vue from 'vue'
import Router from 'vue-router'
import BoyliBg from '@/components/boyliBg'
import CheckSex from '@/components/checkSex'
import Home from '@/components/home'
import ZZJB from '@/components/content/zz-jb'
import History from '@/components/content/history'
import TiZheng from '@/components/content/tizheng'
import Onset from '@/components/content/onset'
import Auxi from '@/components/content/auxi'

Vue.use(Router)

export default new Router({
  scrollBehavior: (to, from, savedPosition) => {
    return savedPosition || {x: 0, y: 0}
  },
  routes: [
    {
      path: '/',
      name: 'BoyliBg',
      component: BoyliBg
    },
    {
      path: '/checkSex',
      name: 'CheckSex',
      component: CheckSex
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
          path: '/home',
          component: ZZJB,
          name: 'Home',
        },
        {
          path: '/history',
          name: 'History',
          component: History
        },
        {
          path: '/home/tizheng',
          name: 'tizheng',
          component: TiZheng
        },
        {
          path: '/home/onset',
          name: 'onset',
          component: Onset
        },
        {
          path: '/home/auxi',
          name: 'auxi',
          component: Auxi
        }
      ]
    }
  ]
})
