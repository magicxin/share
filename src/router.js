import Vue from 'vue'
import Router from 'vue-router'
import Share from './components/Share.vue'
import Answer from './components/Answer.vue'
import Ask from './components/Ask.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import Order from './components/Order.vue'
import Pay from './components/Pay.vue'
import Complete from './components/Complete.vue'
import Forgetpwd from './components/Forgetpwd.vue'

Vue.use(Router)

export default new Router({
  routes: [
      {
      path: '/',
      name: 'Share',
      component: Share
    },
      {
      path: '/answer',
      name: 'Answer',
      component: Answer
    },
      {
      path: '/ask',
      name: 'Ask',
      component: Ask
    },
      {
      path: '/register',
      name: 'Register',
      component: Register
    },
      {
      path: '/login',
      name: 'Login',
      component: Login
    },
      {
      path: '/order',
      name: 'Order',
      component: Order
    },
      {
      path: '/pay',
      name: 'Pay',
      component: Pay
    },
      {
      path: '/complete',
      name: 'Complete',
      component: Complete
    },
      {
      path: '/forgetpwd',
      name: 'Forgetpwd',
      component: Forgetpwd
    }
  ]
})
