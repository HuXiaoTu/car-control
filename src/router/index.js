
import { createRouter, createWebHashHistory } from 'vue-router';
/**
 * 创建 vue-router 实例
 */
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            id: 'home',	// 唯一标识
            title: 'Home page',    // 标题
            path: '/',	// 页面地址
            component: () => import('@/view/homePage.vue'),
        }
    ],
});

// 导出
export default router;