
import { createRouter, createWebHashHistory } from 'vue-router';
/**
 * 创建 vue-router 实例
 */
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            id: 'head',
            path: '/',
            redirect: '/home',
            children: [
                {
                    id: 'home',
                    path: '/home',
                    component: () => import('@/view/homePage.vue'),
                },
                {
                    id: 'wifi',
                    path: '/wifi',
                    component: () => import('@/view/wifi/index.vue'),
                },
                {
                    id: 'controlHome',
                    path: '/controlHome',
                    component: () => import('@/view/control/index.vue'),
                },
                {
                    id: 'control',
                    path: '/control',
                    component: () => import('@/view/control/control.vue'),
                },
            ]
        }
    ],
});

// 导出
export default router;