import Vue from 'vue'
import App from './App.vue'
import SuiVue from 'semantic-ui-vue';
import router from './router'
import VueClipboard from 'vue-clipboard2'
Vue.config.productionTip = false
Vue.use(SuiVue)
Vue.use(VueClipboard)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
