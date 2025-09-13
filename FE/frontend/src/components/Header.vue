<template>
  <header class="navbar">
    <div class="navbar-left">
      <img class="ms-3" src="https://assets.lego.com/logos/v4.5.0/brand-lego.svg" alt="LEGO" width="55" height="55">
      <div class="logo1">LEGO STORE</div>
    </div>
    
    <!-- Mobile menu button -->
    <button class="mobile-menu-btn" @click="toggleMobileMenu">
      <i class="fas fa-bars"></i>
    </button>

    <!-- Navigation menu -->
    <nav class="navbar-center" :class="{ 'mobile-menu-open': isMobileMenuOpen }">
      <ul>
        <li><router-link to="/"><i class="fas fa-home"></i> Trang chủ</router-link></li>
        <li><router-link to="/products"><i class="fas fa-box-open"></i> Sản phẩm</router-link></li>
        <li><router-link to="/promotions"><i class="fas fa-tags"></i> Khuyến mãi</router-link></li>
        <li><router-link to="/contact"><i class="fas fa-envelope"></i> Liên hệ</router-link></li>
      </ul>
    </nav>

    <div class="navbar-right">
      <div class="search-box">
        <i class="fas fa-search"></i>
        <input
          class="search-input"
          type="text"
          placeholder="Tìm kiếm..."
          v-model="searchQuery"
          @keyup.enter="search"
        />
        <button class="search-button" @click="search">Tìm</button>
      </div>
      <div class="user-actions">
        <router-link to="/favorites" class="favorites">🛒 Yêu thích</router-link>
        <router-link to="/cart" class="cart">🛒 Giỏ hàng</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchQuery: "",
      isMobileMenuOpen: false
    };
  },
  methods: {
    search() {
      if (this.searchQuery.trim()) {
        this.$router.push({ path: "/products", query: { q: this.searchQuery } });
      }
    },
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Libertinus+Keyboard&family=Quicksand:wght@300..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffcc00;
  padding: 10px 30px;
  width: 100%;
  height: 100px;
  position: relative;
}

/* Mobile menu button - Hidden by default */
.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  color: #333;
  cursor: pointer;
}

/* Bên trái */
.navbar-left {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  font-size: 25px;
  background-color: #ffcc00;
}

.logo1 {
  font-size: 25px;
  font-weight: 800;
  color: #333;
  text-align: center;
  cursor: pointer;
  width: 400px;
  font-family: 'Libertinus Keyboard', serif;
  letter-spacing: 2px;
  max-width: min-content;
}

/* Menu giữa */
.navbar-center ul {
  display: flex;
  list-style: none;
  gap: 25px;
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 600;
}

.navbar-center a {
  text-decoration: none;
  font-weight: 600;
  color: #333;
  transition: 0.2s;
}

.navbar-center a:hover {
  color: #f47d20;
}

/* Bên phải */
.navbar-right {
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 20px;
}

/* User actions container for favorites and cart */
.user-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.search-box {
  position: relative;
  font-size: 20px;
}

.search-input {
  width: 400px;
  transition: width 0.4s ease-in-out;
  margin-right: 10px;
  padding-right: 5px;
}

.search-box input {
  padding: 10px 15px 10px 40px;
  outline: none;
  border: none;
  border-radius: 2px;
}

.search-box i {
  position: absolute;
  left: 13px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
}

.search-button {
  padding: 8px 15px;
  border-radius: 2px;
  border: none;
  background-color: #f47d20;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 80px;
}

.search-button:hover {
  background-color: #e66d10;
}

.favorites {
  font-weight: bold;
  cursor: pointer;
  color: #333;
  text-decoration: none;
  transition: color 0.2s;
}

.favorites:hover {
  color: #cb3939;
}

.cart {
  font-weight: bold;
  cursor: pointer;
  color: #333;
  text-decoration: none;
  transition: color 0.2s;
}

.cart:hover {
  color: #f47d20;
}

/* MOBILE RESPONSIVE STYLES */

/* Tablet view (768px and below) */
@media (max-width: 768px) {
  .navbar {
    padding: 10px 15px;
    height: auto;
    min-height: 80px;
    flex-wrap: wrap;
  }

  .logo1 {
    font-size: 20px;
    width: auto;
  }

  .navbar-left img {
    width: 45px;
    height: 45px;
  }

  .search-input {
    width: 250px;
  }

  .navbar-center ul {
    gap: 15px;
    font-size: 18px;
  }

  .navbar-right {
    gap: 15px;
    font-size: 18px;
  }
}

/* Mobile view (576px and below) */
@media (max-width: 576px) {
  .navbar {
    padding: 10px;
    height: auto;
    min-height: 70px;
    flex-direction: column;
    gap: 10px;
  }

  /* Show mobile menu button */
  .mobile-menu-btn {
    display: block;
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
  }

  /* Logo adjustments */
  .navbar-left {
    width: 100%;
    justify-content: center;
    font-size: 20px;
  }

  .logo1 {
    font-size: 18px;
    width: auto;
  }

  .navbar-left img {
    width: 40px;
    height: 40px;
  }

  /* Hide navigation by default on mobile */
  .navbar-center {
    display: none;
    width: 100%;
    order: 3;
  }

  .navbar-center.mobile-menu-open {
    display: block;
  }

  .navbar-center ul {
    flex-direction: column;
    gap: 10px;
    padding: 10px 0;
    text-align: center;
    font-size: 16px;
  }

  /* Mobile search and user actions */
  .navbar-right {
    width: 100%;
    flex-direction: column;
    gap: 10px;
    order: 2;
  }

  .search-box {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .search-input {
    width: 200px;
    margin-right: 5px;
  }

  .search-box input {
    padding: 8px 12px 8px 35px;
    font-size: 14px;
  }

  .search-button {
    padding: 6px 12px;
    font-size: 14px;
  }

  .user-actions {
    justify-content: center;
    font-size: 16px;
  }
}

/* Very small screens (400px and below) */
@media (max-width: 400px) {
  .logo1 {
    font-size: 16px;
  }

  .navbar-left img {
    width: 35px;
    height: 35px;
  }

  .search-input {
    width: 150px;
  }

  .user-actions {
    gap: 10px;
    font-size: 14px;
  }

  .favorites, .cart {
    font-size: 14px;
  }
}
</style>