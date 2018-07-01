import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'
import ShoppingCart from '@/pages/shop-cart/ShoppingCart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/shopping-cart',
      name: 'ShoppingCart',
      component: ShoppingCart
    }
  ]
})
