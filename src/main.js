import Vue from 'vue'
import router from './router'
import Vuex from 'vuex'
import Vuetify from 'vuetify'

import 'vuetify/dist/vuetify.min.css'

import './registerServiceWorker'

import store from './store'
import eventBus from './services/eventBus/eventbus'
import App from './App.vue'

Vue.use(Vuex)
Vue.use(Vuetify)

Vue.config.productionTip = false
Vue.prototype.$eventBus = eventBus

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
