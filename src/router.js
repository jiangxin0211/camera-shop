import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import Category from './views/Category.vue'
// import Cart from './views/Cart.vue'
// import Profile from './views/Profile.vue'
// 组件懒加载
let Home = ()=> import('./views/Home.vue');
let Category = ()=> import('./views/Category.vue');
let Cart = ()=> import('./views/Cart.vue');
let Profile = ()=> import('./views/Profile.vue');

import Detail from './views/Detail.vue'
import FooterBar from './components/FooterBar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      // component: Home
      components: {
        default: Home,
        'footer-bar': FooterBar
      },
      meta:{
        keepAlive: true
      }
    }, {
      path: '/category',
      name: 'category',
      // component: Category
      components: {
        default: Category,
        'footer-bar': FooterBar
      },
      meta:{
        keepAlive: true
      }
    }, {
      path: '/cart',
      name: 'cart',
      // component: Cart
      components: {
        default: Cart,
        'footer-bar': FooterBar
      },
      meta:{
        keepAlive: true
      }
    }, {
      path: '/profile',
      name: 'profile',
      component: Profile,
      components: {
        default: Profile,
        'footer-bar': FooterBar
      },
      meta:{
        keepAlive: false
      }
    },{
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }, {
      path: '*',
      component: Error
    }
  ]
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/Category.vue')
    // }

})
