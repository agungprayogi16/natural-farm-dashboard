import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage.vue'
import OrdersPage from '@/pages/OrdersPage.vue'


const routes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage
    },
    {
        path: '/orders',
        name: 'OrdersPage',
        component: OrdersPage  
    },
    
   



]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
