import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from "@/views/index.vue"
// import theme from 'muse-ui/lib/theme';

// theme.use('dark');
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: "index",
    component: () => import('@/views/index/index.vue'),
  },
  {
    path: '/rain',
    name: "rain",
    component: () => import('@/views/rain/rain.vue'),
  },
  {
    path: '/article',
    name: "article",
    component: () => import('@/views/article/article.vue'),
  },
  // {
  //   path: '/index',
  //   name: "index",
  //   component: () => import('@/views/index.vue'),
  // },
  // {
  //   path: '/m.index',
  //   name: "m.index",
  //   component: () => import('@/views/m.index.vue'),
  // },
  // {
  //   path: '/details',
  //   name: "details",
  //   component: () => import('@/views/details/details.vue'),
  // }

]

const router = new VueRouter({
  routes
})

export default router
