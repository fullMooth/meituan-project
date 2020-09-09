import Vue from 'vue'
import VueRouter from 'vue-router'
import defaultPage from '../views/default.vue'
import Index from '../views/index.vue'
import changeCity from '../views/changeCity.vue'
import goodList from '../views/goodList.vue'
import blank from '../views/blank.vue'
import login from '../views/login.vue'
import register from '../views/register.vue';


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'defaultPage',
    component: defaultPage,
    children:[
      {
        path:'/index',
        name:"index",
        component:Index
      },
      {
        path:'/changeCity',
        name:'changeCity',
        component:changeCity
      },
      {
        path:'s/:name',
        name:'goods',
        component:goodList,
      }
    ]
  },
  {
    path:'/blank',
    name:'blank',
    component:blank,
    children:[
      {
        path:'login',
        name:'login',
        component:login,
      },{
        path:'register',
        name:'register',
        component:register
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
