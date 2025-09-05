<script setup>
import { ref } from 'vue'
import './styles/Home.css'
</script>

<template>
  <!-- Header -->
  <header>
    <h1>ShopOnline</h1>
    <nav>
      <a href="#">Trang chủ</a>
      <a href="#">Sản phẩm</a>
      <a href="#">Khuyến mãi</a>
      <a href="#">Liên hệ</a>
    </nav>
  </header>

  <!-- Banner -->
  <div class="banner">
    Chào mừng đến với ShopOnline
  </div>

  <!-- Danh sách sản phẩm -->
  <section class="products">
    <h2>Sản phẩm nổi bật</h2>
    <div class="product-list">
      <div class="product">
        <img src="https://picsum.photos/250/200?random=2" alt="Sản phẩm 1">
        <h3>Áo thun nam</h3>
        <p>200.000 VNĐ</p>
        <button>Thêm vào giỏ</button>
      </div>
      <div class="product">
        <img src="https://picsum.photos/250/200?random=3" alt="Sản phẩm 2">
        <h3>Quần jean nữ</h3>
        <p>350.000 VNĐ</p>
        <button>Thêm vào giỏ</button>
      </div>
      <div class="product">
        <img src="https://picsum.photos/250/200?random=4" alt="Sản phẩm 3">
        <h3>Giày sneaker</h3>
        <p>500.000 VNĐ</p>
        <button>Thêm vào giỏ</button>
      </div>
      <div class="product">
        <img src="https://picsum.photos/250/200?random=5" alt="Sản phẩm 4">
        <h3>Túi xách nữ</h3>
        <p>450.000 VNĐ</p>
        <button>Thêm vào giỏ</button>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    &copy; 2025 ShopOnline. All rights reserved.
  </footer>
</template>
