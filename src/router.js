import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Category from './views/Category.vue'
import Cart from './views/Cart.vue'
import Profile from './views/Profile.vue'
import Test from './views/Test.vue'
import Detail from './views/Detail.vue'
import FooterBar from './components/FooterBar.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/',
      name: 'home',
      // component: Home
      components: {
        default: Home,
        'footer-bar': FooterBar
      }
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/Category.vue')
    // }
    {
      path: '/category',
      name: 'category',
      components: {
        default: Category,
        'footer-bar': FooterBar
      }
    },
    {
      path: '/cart',
      name: 'cart',
      components: {
        default: Cart,
        'footer-bar': FooterBar
      }
    },
    {
      path: '/profile',
      name: 'profile',
      components: {
        default: Profile,
        'footer-bar': FooterBar
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
})
