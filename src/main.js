// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//解决移动端点击事件延迟300ms的问题
import fastClick from 'fastclick'
//兼容所有移动端设被
import './assets/styles/reset.css'
//解决2，3倍屏幕设置边框像素成倍显示的问题
import './assets/styles/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
