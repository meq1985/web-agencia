import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Servicios from '../views/Servicios.vue'
import Nosotros from '../views/Nosotros.vue'
import Blog from '../views/Blog.vue'
import Contacto from '../views/Contacto.vue'
import LandingPymes from '../views/LandingPymes.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/servicios', component: Servicios },
  { path: '/nosotros', component: Nosotros },
  { path: '/blog', component: Blog },
  { path: '/contacto', component: Contacto },
  { path: '/soluciones-para-pymes', component: LandingPymes }
]

export default createRouter({
  history: createWebHistory(),
  routes
})