import { createApp } from 'vue'
import App from '@/App.vue'

import router from '@/router'
import pinia from "@/store/pinia";

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import '@/assets/main.css'

const app = createApp(App);

app.use(router)
app.use(Antd)
app.use(pinia)

app.mount('#app')
