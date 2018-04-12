// The Vue build version to load with the `import` command (runtime-only or
// standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import API from '../config/httpUrl'
import {fetch, post} from './axios'
import 'lib-flexible'

Vue.config.productionTip = false;
Vue.prototype.API = API;
Vue.prototype.$get = fetch;
Vue.prototype.$post = post;

// const sex = sessionStorage.getItem('userSex');

router.beforeEach((to, from, next) => {
  if (to.path != '/'){
      if (!store.state.sexData && to.path !== '/history'){
        router.push('/')
      }
    next()
  } else {
    next()
  }
});

/* eslint-disable no-new */
new Vue({el: '#app', router, store, components: {
    App
  }, template: '<App/>'})
