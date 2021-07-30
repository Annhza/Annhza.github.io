// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'

import FastClick from 'fastclick'
// 使用
FastClick.attach(document.body);
import './assets/css/iconfont.css'
// 引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper);

//引入axios
import axios from 'axios'
Vue.prototype.$http=axios;

//引入store
import store from './store'

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,  //挂载（注册）store
  components: { App },
  template: '<App/>'
})
