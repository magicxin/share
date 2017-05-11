import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import validator from './assets/validate.js'
import format from './assets/formatArticle.js'
import Toast from './components/toast/index.js'
Vue.use(Toast)
Vue.config.productionTip = false
Vue.use(VueAxios,axios)
//动态title
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.innerText
    el.remove()
  }
})
new Vue({
  el: '#app',
  router,
//  template: '<App/>',
//  components: { App }
    render: h => h(App)
})
