import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        'path': '/',
        component: () => import('../views/Dashboard.vue'),
    },
    {
        'path': '/user-details',
        component: () => import('../views/UserDetails.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router