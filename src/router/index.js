import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'Recommend'
    },
    {
      name: 'Recommend',
      path: '/Recommend',
      component: () => import('components/recommend/Recommend')
    },
    {
      name: 'Rank',
      path: '/Rank',
      component: () => import('components/rank/Rank')
    },
    {
      name: 'Singer',
      path: '/Singer',
      component: () => import('components/singer/Singer')
    },
    {
      name: 'Search',
      path: '/Search',
      component: () => import('components/search/Search')
    }
  ]
})
