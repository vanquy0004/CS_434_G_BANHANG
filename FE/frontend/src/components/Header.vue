<template>
  <header class="header">
    <div class="logo">ShopVue</div>
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
      <router-link to="/cart">Cart</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
}

.nav a {
  color: white;
  margin-left: 15px;
  text-decoration: none;
}

.nav a.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
