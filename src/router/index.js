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
      name: 'Recommend', //推荐页
      path: '/Recommend',
      component: () => import('components/recommend/Recommend')
    },
    {
      name: 'Rank', //排行榜
      path: '/Rank',
      component: () => import('components/rank/Rank')
    },
    {
      name: 'Singer', //歌手列表页
      path: '/Singer',
      component: () => import('components/singer/Singer')
    },
    {
      path:'/Singer/:id', //歌手详情页
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
