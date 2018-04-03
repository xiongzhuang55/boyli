import Vue from 'vue'
import Router from 'vue-router'
import BoyliBg from '@/components/boyliBg'
import CheckSex from '@/components/checkSex'
import Home from '@/components/home'
import ZZJB from '@/components/content/zz-jb'
import History from '@/components/content/history'
import zzSearch from '@/components/content/zz-search'
import jbSearch from '@/components/content/jb-search'

Vue.use(Router)

export default new Router({

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
          path: '/',
          component: ZZJB,
        },
        {
          path: '/history',
          name: 'History',
          component: History
        }
      ]
    }
  ]
})
