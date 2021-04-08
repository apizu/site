
import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/index'
import PrivacyPolicy from '@/pages/privacy-policy'

Vue.use(Router)

export function createRouter() {
  return new Router({
    mode: "history",
    routes: [
      {
        path: '/',
        name: 'Index',
        component: Index
      },
      {
        path: '/privacy',
        name: 'PrivacyPolicy',
        component: PrivacyPolicy
      }
    ]
  });
}