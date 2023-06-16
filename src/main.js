import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router';

const app = createApp(App);

// 加载路由
app.use(router);

// 2. 引入组件样式
import 'vant/lib/index.css';
// 安装 vant
import * as vantEles from 'vant';
for (const [key, component] of Object.entries(vantEles)) {
    // app.component(key, component)
    app.use(component)
}


app.mount('#app')