import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/HomePage.vue";
import About from "../pages/AboutPage.vue";
import Login from "../pages/LoginPage.vue";
import Product from "../pages/ProductPage.vue";
import Register from "../pages/styles/Register.vue";

const routes = [
  { path: "/about", component: About },
  { path: "/", component: Home },
  { path: "/login", component:Login  },
  { path: "/product", component: Product },
  { path: "/register", component: Register },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
