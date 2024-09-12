import { createMemoryHistory, createRouter } from 'vue-router'

import Home from './Home.vue'
import Mentions from './Mentions.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/mentions', component: Mentions },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router