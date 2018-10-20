import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import vip from '@/components/vip'
import cart from '@/components/cart'
import search from '@/components/search'
import newsList from '@/components/news/newsList'
import picture from '@/components/news/picture'
import commodity from '@/components/news/commodity'
import feedback from '@/components/news/feedback'
import video from '@/components/news/video'
import relation from '@/components/news/relation'
import newsInfo from '@/components/news/newsInfo'

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
      path:'/Home/newsList',
      component: newsList
    },
    {
      path:'/Home/picture',
      component: picture
    },
    {
      path:'/Home/commodity',
      component: commodity
    },
    {
      path: '/Home/feedback',
      component: feedback
    },
    {
      path:'/Home/video',
      component: video
    },
    {
      path: '/Home/relation',
      component: relation
    },
    {
      path:'/Home/newsInfo/:id',
      component: newsInfo
    },
    {
      path: '*',
      component: home
    },
  ],
  linkActiveClass:'mui-active'
})
