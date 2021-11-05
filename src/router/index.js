import { createRouter, createWebHashHistory } from 'vue-router'
import Widget from '../components/Widget.vue'

const routes = [
  {
    path: '/',
    name: 'Widget',
    component: Widget
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router