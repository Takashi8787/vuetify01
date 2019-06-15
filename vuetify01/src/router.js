import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index.vue'
import Home from './views/Home.vue'
import AddSmoothie from './components/AddSmoothie.vue'
import EditSmoothie from './components/EditSmoothie.vue'
import Top from './components/Top.vue'
import TaskLists from './components/TaskLists.vue'


Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/add-smoothie',
      name: 'AddSmoothie',
      component: AddSmoothie
    },
    {
      path: '/edit-smoothie/:smoothie_slug',
      name: 'EditSmoothie',
      component: EditSmoothie
    },
    // {
    //   path: '/tasklists',
    //   name: 'TaskLists',
    //   component: TaskLists
    // },
    {
      path: '/tasklists/:boardtitle_slug',
      name: 'TaskLists',
      component: TaskLists
    },
  ]
})
