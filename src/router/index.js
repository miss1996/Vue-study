import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home.vue'
import vip from '@/components/vip'
import cart from '@/components/cart'
import search from '@/components/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: home
    },
    {
      path:'/vip',
      component: vip
    },
    { 
      path: '/cart',
      component: cart
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '*',
      component: home
    }
  ],
  linkActiveClass:'mui-active'
})
