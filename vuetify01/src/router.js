import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Addresses from './views/Addresses.vue'
import About from './views/About.vue'
import Sub from './views/Sub.vue'
import ToDoTool from './views/ToDoTool.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/sub',
      name: 'sub',
      component: Sub
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: ToDoTool
    },
    {
      path: '/addresses',
      name: 'addresses',
      component: Addresses
    },
    {
      path: '/about',
      name: 'about',
      component: About
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
