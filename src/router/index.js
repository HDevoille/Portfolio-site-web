import { createRouter, createWebHistory } from "vue-router"
import Home from '../views/Home.vue'
import Project1 from '../views/Project1.vue'
import Project2 from '../views/Project2.vue'
import Project3 from '../views/Project3.vue'
import Project4 from '../views/Project4.vue'
import.meta.env.BASE_URL

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/hybrid_BCI',
        name: 'hybrid_BCI',
        component: Project1
    },
    {
        path: '/EMG_game',
        name: 'EMG_game',
        component: Project2
    },
    {
        path: '/Odolux',
        name: 'Odolux',
        component: Project3
    },
    {
        path: '/Muse2',
        name: 'Muse2',
        component: Project4
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router