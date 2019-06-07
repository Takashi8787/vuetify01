import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Addresses from './views/Addresses.vue'
import About from './views/About.vue'
import Sub from './views/Sub.vue'
import ToDoTool from './views/ToDoTool.vue'
import Table from './views/Table.vue'
import Layout from './views/Layout.vue'
import ToDoSub from './views/ToDoSub.vue'
import AccountCreation from './views/AccountCreation.vue'
import AddTask from './components/AddTask.vue'


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
      path: '/addtask',
      name: 'addtask',
      component: AddTask
    },
    {
      path: '/account-creation',
      name: 'accountcreation',
      component: AccountCreation
    },
    {
      path: '/sub',
      name: 'sub',
      component: Sub
    },
    {
      path: '/todosub',
      name: 'todosub',
      component: ToDoSub
    },
    {
      path: '/layout',
      name: 'layout',
      component: Layout
    },
    {
      path: '/todolist',
      name: 'todolist',
      component: ToDoTool
    },
    {
      path: '/table',
      name: 'table',
      component: Table
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
