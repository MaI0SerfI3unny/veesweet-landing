import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import VueTypedJs from 'vue-typed-js'


Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueTypedJs)

new Vue({
  render: h => h(App),
  mounted() {
    AOS.init();
  },
}).$mount('#app')
