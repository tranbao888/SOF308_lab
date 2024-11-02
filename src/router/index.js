import { createRouter, createWebHistory } from 'vue-router';
import About from '../components/About.vue';
import Lab1 from '../components/Lab1/Lab1Component.vue'
import Bai1 from '../components/Lab1/bai1.vue' 
import Bai2 from '../components/Lab1/bai2.vue'
import Bai3 from '../components/Lab1/bai3.vue' 
import Bai4 from '../components/Lab1/bai4.vue'
import BlogPage from '../components/Blog.vue'


const routes = [
    { path: '/', component: Lab1 },
    { path: '/Lab1/bai1', component: Bai1 },
    { path: '/Lab1/bai2', component: Bai2 },
    { path: '/Lab1/bai3', component: Bai3 },
    { path: '/Lab1/bai4', component: Bai4 },
    { path: '/blog', component: BlogPage },
    { path: '/about', component: About }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;