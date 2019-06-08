import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import AddSmoothie from './components/AddSmoothie.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/addsmoothie',
      name: 'AddSmoothie',
      component: AddSmoothie
    },
  ]
})
