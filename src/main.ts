import { createApp } from 'vue'
import App from './views/App.vue'
import router from './router'
import store from './store'
import '@mdi/font/css/materialdesignicons.css';
import './assets/tailwind.css';
import FontAwesomeIcon from './fontawesome';

const app = createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)

app.use(store).use(router).use(router).mount('#app')
createApp(App).use(store).use(router).mount('#app')
