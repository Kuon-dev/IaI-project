import { createRouter, createWebHistory } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
import Home from './views/home.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'homepg',
      component: Home,
      props: true,
    }
  ]
})