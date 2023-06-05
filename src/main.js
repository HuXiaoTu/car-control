import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

// 安装 Element-Plus
import 'element-plus/dist/index.css';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn'
app.use(ElementPlus, { locale: zhCn, size: 'large' });
// 安装 Element-Plus 图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
