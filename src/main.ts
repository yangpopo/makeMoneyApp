import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'
import { Button } from 'vant';
import 'vant/lib/index.css';
import 'animate.css/animate.min.css' //引入动画





const app = createApp(App)

app.use(createPinia()).use(router).use(Button);

app.mount('#app')
