import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import Home from '../pages/Home.vue'
import Articles from '../pages/Articles.vue'
import Projects from '../pages/Projects.vue'

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        redirect: 'home',
        children: [
            {
                path: '/home',
                name: 'Home',
                component: Home
            },
            {
                path: '/articles',
                name: 'Articles',
                component: Articles
            },
            {
                path: '/projects',
                name: 'Projects',
                component: Projects
            },
        ]
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router