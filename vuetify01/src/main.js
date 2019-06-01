import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
// これがストアを全体で使えるためのインポート
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
