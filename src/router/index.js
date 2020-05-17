import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Content1 from '@/components/content1'
import Content2 from '@/components/content2'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/content1',
      name: 'Content1',
      component: Content1
    },
    {
      path: '/content2',
      name: 'Content2',
      component: Content2
    },
  ]
})
