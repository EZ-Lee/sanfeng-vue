import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueRouter from 'vue-router'
import routers from './router.js'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({
  routers
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
