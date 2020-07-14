import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import fastclick from 'fastclick'
import 'common/iconfont/iconfont.css'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad,{
  loading: require("common/image/default.jpg"),
  error: require("common/image/default.jpg")
})
fastclick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
