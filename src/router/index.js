import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NavMenu from '../views/NavMenu.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/NavMenu',
    name: 'NavMenu',
    component: NavMenu
  },
  {
    path: '/a',
    name: 'About',
    component:About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
