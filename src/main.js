import { createApp } from 'vue'
import App from './App.vue'
import routes from './router';
import "./assets/scss/main.scss"
import store from './store';
import cookies from 'vue-cookies';

createApp(App).use(routes).use(cookies).use(store).mount('#app')
