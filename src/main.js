import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import './registerServiceWorker'
import store from './store'
import eventBus from './services/eventBus/eventbus'

import 'vuetify/dist/vuetify.min.css'
import Vuetify from 'vuetify'

Vue.use(Vuex)
Vue.use(Vuetify)

Vue.config.productionTip = false
Vue.prototype.$eventBus = eventBus

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
