import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
      path: '/index',//首页
      name: 'index',
      component: () => import('@/views/index.vue')
    },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.VUE_APP_ENV == "local" ? process.env.BASE_URL : process.env.VUE_APP_BASE_URL,
  routes
})

export default router