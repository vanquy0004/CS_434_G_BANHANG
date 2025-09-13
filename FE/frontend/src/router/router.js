import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/HomePage.vue";
import About from "../pages/AboutPage.vue";
import Login from "../pages/LoginPage.vue";
// import Product from "../pages/ProductPage.vue";
import Register from "../pages/styles/Register.vue";
import FavoritesPage from "../pages/FavoritesPage.vue";
import CartPage from "../pages/CartPage.vue";
import ProductsPage from "../pages/ProductsPage.vue";

const routes = [
  { path: "/about", component: About },
  { path: "/", component: Home },
  { path: "/login", component: Login },
  // { path: "/product", component: Product },
  { path: "/register", component: Register },
  { path: "/favorites", component: FavoritesPage },
  { path: "/cart", component: CartPage },
  { path: "/products", component: ProductsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
