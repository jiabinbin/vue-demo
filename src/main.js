import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'reset-css'
import './plugins/ant-design-vue.js'
import './plugins/global-components-loader'
import bootstrap from './utils/bootstrap'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created: bootstrap
}).$mount('#app')
