import {createRouter, createWebHistory} from 'vue-router'
import State from '../pages/State.vue'
import About from '../pages/About.vue'
import Register from '../pages/Regist.vue'
const routes = [
    {
        path: '/',
        name: 'State',
        component: State,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;