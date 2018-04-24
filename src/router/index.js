import Vue from 'vue'
import Router from 'vue-router'
import BoyliBg from '@/components/boyliBg'
import Home from '@/components/home'

Vue.use(Router)

export default new Router({
  scrollBehavior: (to, from, savedPosition) => {
    return savedPosition || {x: 0, y: 0}
  },
  routes: [
    {
      path: '/',
      name: 'boyliBg',
      meta:{
        title:"博医理自诊"
      },
      component: BoyliBg
    },
    {
      path: '/checkSex',
      name: 'checkSex',
      meta:{
        title:"选择性别"
      },
      component: resolve => require(['@/components/checkSex'],resolve)
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
          path: '/home',
          name: 'home',
          meta:{
            title:"主症疾病选择"
          },
          component: resolve => require(['@/components/content/zz-jb'],resolve)
        },
        {
          path: '/history',
          name: 'history',
          meta:{
            title:"历史记录"
          },
          component: resolve => require(['@/components/content/history'],resolve)
        },
        {
          path: '/home/tizheng',
          name: 'tizheng',
          meta:{
            title:"生命体征"
          },
          component: resolve => require(['@/components/content/tizheng'],resolve)
        },
        {
          path: '/home/onset',
          name: 'onset',
          meta:{
            title:"发病特点"
          },
          component: resolve => require(['@/components/content/onset'],resolve)
        },
        {
          path: '/home/auxi',
          name: 'auxi',
          meta:{
            title:"辅助症状"
          },
          component: resolve => require(['@/components/content/auxi'],resolve)
        },
        {
          path: '/home/disease',
          name: 'disease',
          meta: {
            title: "疑似疾病"
          },
          component: resolve => require(['@/components/content/disease'], resolve)
        },
        {
          path: '/home/disease/info',
          name: 'info',
          meta:{
            title:"疑似疾病解释"
          },
          component: resolve => require(['@/components/commonSub/diseaseInfo'],resolve)
        },
        {
          path: '/home/syndrome',
          name: 'syndrome',
          meta:{
            title:"中医证型"
          },
          component: resolve => require(['@/components/content/syndrome'],resolve)
        }
      ]
    }
  ]
})
