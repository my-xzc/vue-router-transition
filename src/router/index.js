import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Alert from '@/components/alert'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      meta: { goback: true }
    },
    {
      path: '/alert',
      name: 'Alert',
      component: Alert,
      meta: { goback: true }
    }
  ]
})
