import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index', component: () => import('../components/index/Index.vue'),
      children: [
        {path: '/dashboard', component: () => import('../components/dashboard/Dashboard.vue')},
        {path: '/user', component: () => import('../components/user/User.vue')},
        {path: '/logQuery', component:  () => import('../components/log/LogQuery.vue')},
        {path: '/logWatch', component: () => import('../components/log/Watch.vue')},
        {path: '/business', component:  () => import('../components/business/Business.vue')}]
    },
    {path: '/login', component:  import('../components/user/Login.vue')}
  ]
})
