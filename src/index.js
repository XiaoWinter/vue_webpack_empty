import "../assets/sass/index.sass"
import App from './App'
import Vue from "vue"
import VueRouter from 'vue-router'
import routes from './router'


Vue.use(VueRouter)

const router = new VueRouter({
    routes 
  })

  const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
  }).$mount('#app')