import { createRouter, createWebHashHistory } from 'vue-router'
import EventsList from '../views/EventsList.vue'
import LinksView from '../views/LinksView'
import About from '../views/AboutView'


const routes = [
  {
    path: '/',
    name: 'EventsList',
    component: EventsList
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/links',
    name: 'links',
    component: LinksView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
