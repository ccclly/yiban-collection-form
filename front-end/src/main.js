import { createApp } from 'vue'

// 引入element ui
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入字体文件
import './assets/fonts/font.css'

import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
