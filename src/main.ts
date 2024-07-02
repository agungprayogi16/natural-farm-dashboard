import { createApp } from 'vue';
import App from './views/App.vue';
import router from './router';
import store from './store';
import '@mdi/font/css/materialdesignicons.css';
import './assets/tailwind.css';
import FontAwesomeIcon from './fontawesome';

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(store);
app.use(router);

app.mount('#app');
