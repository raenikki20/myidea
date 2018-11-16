import Vue from 'vue'
import Router from 'vue-router'
/******************************************************************
 * HOME PAGES
 *****************************************************************/
import Home from '@/Views/Home/Home'
import Subscribe from '@/Views/Home/RightPanel/Subscribe/Subscribe'
import Login from '@/Views/Home/RightPanel/Login/Login'
import SignUp from '@/Views/Home/RightPanel/SignUp/SignUp'
import ResetPassword from '@/Views/Home/RightPanel/ResetPassword/ResetPassword'
/******************************************************************
 * DASHBOARD PAGES
 *****************************************************************/
import Dashboard from '@/Views/Dashboard/Dashboard'
import Profile from '@/Views/Dashboard/MainPanel/Profile/Profile'
import Projects from '@/Views/Dashboard/MainPanel/Projects/Projects'
import NewSetup from '@/Views/Dashboard/MainPanel/CreateProject/NewSetup'
import NewContent from '@/Views/Dashboard/MainPanel/CreateProject/NewContent'
import Review from '@/Views/Dashboard/MainPanel/CreateProject/Review'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: 'subscribe',
      name: 'Subscribe',
      component: Subscribe
    },
    {
      path: 'login',
      name: 'Login',
      component: Login
    },
    {
      path: 'signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: 'resetpassword',
      name: 'ResetPassword',
      component: ResetPassword
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: '/profile',
          name: 'Profile',
          component: Profile
        },
        {
          path: '/projects',
          name: 'Projects',
          component: Projects
        },
        {
          path: '/newsetup',
          name: 'NewSetup',
          component: NewSetup
        },
        {
          path: '/newcontent',
          name: 'NewContent',
          component: NewContent
        },
        {
          path: '/review',
          name: 'Review',
          component: Review
        }
      ]
    }
  ]
})
