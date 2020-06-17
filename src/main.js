import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'

import fastclick from 'fastclick'
import 'common/iconfont/iconfont.css'
fastclick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
