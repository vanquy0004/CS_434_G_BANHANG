import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/HomePage.vue";
import About from "../pages/AboutPage.vue";
import Login from "../pages/LoginPage.vue";
import Product from "../pages/ProductPage.vue";

const routes = [
  { path: "/about", component: About },
  { path: "/", component: Home },
  { path: "/login", component:Login  },
  { path: "/product", component: Product },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
