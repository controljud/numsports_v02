require('./bootstrap');

import Vue from 'vue';
import axios from 'axios';
window.axios = axios;

import router from './router';
import App from './components/App.vue';

Vue.component('app', App);

const app = new Vue({
    router,
    el: '#app'
});