import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../components/landing-pages/Home/Home.vue')
const User = () => import('../components/userPage/Index.vue')
// const Society = () => import('../components/user/Index.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
