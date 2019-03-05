import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueRouter from 'vue-router'
import router from './router.js'

Vue.use(VueRouter);
Vue.use(BootstrapVue);

new Vue({
	router,
  el: '#top_page',
  render: h => h(App)
})
