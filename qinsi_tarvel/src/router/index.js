import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/Home'
import City from '@/components/city/City'
import Details from '@/components/details/Detail'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: false // 不需要缓存
      }
    },
    {
      path: '/city',
      name: 'City',
      component: City,
      meta: {
        keepAlive: false // 不需要缓存
      }
    },
    {
      path:'/details/:id',
      name: 'Details',
      component: Details,
      meta: {
        keepAlive: true  // 需要缓存
      }
    }
  ]
})
