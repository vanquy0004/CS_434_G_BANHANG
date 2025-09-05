import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Product from "../pages/Product.vue";

const routes = [
  { path: "/about", component: About },
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/product", component: Product },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
