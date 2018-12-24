import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import './registerServiceWorker'
import './plugins/vuetify'
import store from './store'

Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
