import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Loginview.vue'
import NotFound from '../views/NotFoundView.vue'
import Register from '../views/RegisterView.vue'
import UserList from '../views/userList.vue'
import UserProfile from '../views/UserProfile.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/UserList',
    name: 'userlist',
    component: UserList
  },
  {
    /**path不区分大小写，name区分大小写 */
    path: '/UserProfile',
    name: 'userprofile',
    component: UserProfile
  },
  {
    path: '/Login',
    name: 'login',
    component: Login
  },
  {
    path: '/Register',
    name: 'register',
    component: Register
  },
  {
    path: '/NotFound',
    name: 'notfound',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
