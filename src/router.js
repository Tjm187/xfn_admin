import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue'
import Main from './views/main.vue'
import NotFound from './views/notFound.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect: '/login'},
    {path:'/login',component: Login},
    {path:'/main',component: Main},
    {path:'*',component: NotFound}
  ]
})
