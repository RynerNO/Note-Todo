import Vue from 'vue';
import Router from 'vue-router';
import router from './router'
import Main from '@pages/Main.vue'

import 'normalize.css'; // reset css

import '@styles/global.scss' // global styles
Vue.use(Router)
new Vue({
  el: '#app',
  router,
  render: h => h(Main)
})