import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Tiezhu',
        component: () => import('@/views/tiezhu.vue')
    },
    {
        path: '/rule',
        name: 'Rule',
        component: () => import('@/views/rule.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router