/*
 * @Date: 2020-11-19 15:58:08
 * @LastEditors: lujunpeng
 * @LastEditTime: 2020-11-19 16:01:09
 * @FilePath: /public-security-template/Users/lujunpeng/Documents/Code/7b/data-system/src/router/index.js
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
