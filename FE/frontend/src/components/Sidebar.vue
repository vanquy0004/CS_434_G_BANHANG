<template>
  <aside class="sidebar">
    <h3>Categories</h3>
    <ul>
      <li><router-link to="/products?category=clothes">Clothes</router-link></li>
      <li><router-link to="/products?category=shoes">Shoes</router-link></li>
      <li><router-link to="/products?category=accessories">Accessories</router-link></li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style>
.sidebar {
  width: 200px;
  padding: 20px;
  background-color: #fff;
  border-right: 1px solid #ddd;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin-bottom: 10px;
}
</style>
