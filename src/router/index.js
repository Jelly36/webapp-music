import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
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
      path: '/Singer',
      component: () => import('components/singer/Singer'),
    },
    {
      path:"/Singer/:id",
      component: () => import('components/singer-detail/SingerDetail')
    },
    {
      name: 'Search',
      path: '/Search',
      component: () => import('components/search/Search')
    }
  ]
})

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
