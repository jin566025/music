import Vue from 'vue'
import App from './App.vue'
import './common/stylus/index.styl'
import faseclick from 'fastclick'
import router from './router'

faseclick.attach(document.body)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
