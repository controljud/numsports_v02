require('./bootstrap')

import Vue from 'vue'
import axios from 'axios'
window.axios = axios

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import router from './router'
import App from './components/App.vue'

Vue.component('app', App)
Vue.use(BootstrapVue)

const app = new Vue({
    router,
    el: '#app'
});