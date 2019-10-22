import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import HelloWorld from '@/components/HelloWorld.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes:[
    {
      path: '/hello',
      name: 'hello',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
