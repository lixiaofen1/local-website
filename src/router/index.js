// import Vue from 'vue';
// import VueRouter from 'vue-router';
// import Home from '../components/Home.vue';

import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue';
import LCategory from '../views/Category.vue';
import LHome from '../views/Home.vue';
 
const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: LHome },
    { path: '/category', component: LCategory },
  { path: '/HelloWorld', component: HelloWorld }
];
 
const router = createRouter({
    history: createWebHistory(),
   routes,// 简写，等同于routes: routes
});
 
export default router;