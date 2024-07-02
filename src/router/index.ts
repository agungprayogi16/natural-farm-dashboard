import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import OrdersPage from '../pages/OrdersPage.vue'
import ProductPage from '../pages/ProductsPage.vue'
import CustomersPage from '../pages/CustumerPage.vue'
import SettingsPage from '../pages/SettingsPage.vue'


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
  {
    path: '/products',
    name: 'ProductPage',
    component: ProductPage
  },
  {
    path: '/Customers',
    name: 'CustomersPage',
    component: CustomersPage
  },
  {
    path: '/Settings',
    name: 'SettingsPage',
    component: SettingsPage
  },





]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router