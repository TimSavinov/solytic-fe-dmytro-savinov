import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '/src/views/Login.vue'
import UserPage from '/src/views/User.vue'

const routes = [
    {
        path:'/',
        name:'Login',
        component: LoginPage
    },
    {
        path:'/user',
        name:'UserInfo',
        component:UserPage
    }
]   
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router