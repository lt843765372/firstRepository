import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Skip from '@/components/Skip'
import Skipp from '@/components/Skipp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/skip',
      name: 'skip',
      component: Skip
    },
    {
      path: '/skipp',
      name: 'skipp',
      component: Skipp
    }
  ]
})
