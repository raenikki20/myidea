import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/Views/Home/Home'
import Login from '@/Views/Login/Login'
import SignUp from '@/Views/SignUp/SignUp'
import Dashboard from '@/Views/Dashboard/Dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
