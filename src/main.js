import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router';

const app = createApp(App);

// 加载路由
app.use(router);

// 引入vant组件样式
import 'vant/lib/index.css';
// vant组件样式复写
import './assets/vantReset.scss';
// 引入iconFont样式
import './assets/iconfont/iconfont.css';

// 安装 vant
// import * as vantEles from 'vant';
// for (const [key, component] of Object.entries(vantEles)) {
//     // app.component(key, component)
//     app.use(component)
// }

import { Icon, Form, Field, CellGroup, Button } from 'vant';
app.use(Icon);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.use(Button);

app.mount('#app')