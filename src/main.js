import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueStatic from 'vue-static'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import VuePageTitle from 'vue-page-title'
 
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VuePageTitle, {
  // prefix: 'My App - ',
  suffix: ''
})
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueStatic);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
