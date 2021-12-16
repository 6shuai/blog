import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/tiezhu',
        name: 'Tiezhu',
        component: () => import('@/views/tiezhu.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

export default router