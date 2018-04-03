// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './vuex/store.js'
import App from './App'
import vueResource from 'vue-resource'
import router from './router'
import Host from './common/js/host'

Vue.use(vueResource);
Vue.use(Vuex);
Vue.config.productionTip = false;
Vue.prototype.HOST = Host;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
