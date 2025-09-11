<template>
  <div id="app">
    <!-- Navbar -->
    <header class="navbar">
      <div class="navbar-left">
        <img class="ms-3" src="https://assets.lego.com/logos/v4.5.0/brand-lego.svg" alt="LEGO" width="55" height="55">
        <div class="logo1">LEGO STORE</div>
      </div>
      <nav class="navbar-center">
        <ul>
          <li><a href="#"><i class="fas fa-home"></i> Trang chủ</a></li>
          <li><a href="#"><i class="fas fa-box-open"></i> Sản phẩm</a></li>
          <li><a href="#"><i class="fas fa-tags"></i> Khuyến mãi</a></li>
          <li><a href="#"><i class="fas fa-envelope"></i> Liên hệ</a></li>
        </ul>
      </nav>

      <div class="navbar-right">
        <div class="search-box">
          <i class="fas fa-search"></i>
          <input class="search-input" type="text" placeholder="Tìm kiếm..." />
        </div>
        <div class="cart">🛒 Giỏ hàng</div>
      </div>
    </header>

    <!-- Carousel -->
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div style="height: 530px" class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://zusammengebaut.com/wp-content/uploads/2022/08/brick-tales-2022.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://i.ytimg.com/vi/ZKDardFql_c/maxresdefault.jpg"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://assets.nintendo.com/image/upload/q_auto/f_auto/ncom/software/switch/70010000052111/63a452f1d53d141207afe195f21a064f51e96559ed1406df743582308c515870"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <!-- Banner -->
    <section class="banner">
      <h1>Khám phá thế giới LEGO</h1>
      <p>Xây dựng sáng tạo, thỏa sức tưởng tượng!</p>
      <button class="btn-custom">Mua ngay</button>
    </section>

    <!-- Danh sách sản phẩm -->
    <section class="products">
      <h2>Sản phẩm nổi bật</h2>
      <div class="product-list">
        <div class="product-card">
          <img
            src="https://www.lego.com/cdn/cs/set/assets/blt7d8c39b23e6c2e0b/21336.png"
            alt="LEGO 1"
          />
          <h3>LEGO Bộ Thành Phố</h3>
          <p>1,200,000đ</p>
          <button class="btn-custom">Thêm vào giỏ</button>
        </div>
        <div class="product-card">
          <img
            src="https://www.lego.com/cdn/cs/set/assets/bltf0679ec75a4c8d4b/10302.png"
            alt="LEGO 2"
          />
          <h3>LEGO Xe Cổ Điển</h3>
          <p>2,300,000đ</p>
          <button class="btn-custom">Thêm vào giỏ</button>
        </div>
        <div class="product-card">
          <img
            src="https://www.lego.com/cdn/cs/set/assets/bltad9e48e0c10fc9c0/75341.png"
            alt="LEGO 3"
          />
          <h3>LEGO Star Wars</h3>
          <p>3,500,000đ</p>
          <button class="btn-custom">Thêm vào giỏ</button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <!-- Thông tin cửa hàng -->
        <div class="footer-col">
          <h3>LEGO Store</h3>
          <p>Khám phá thế giới LEGO đầy sáng tạo và màu sắc.</p>
          <p>📍 123 Đường Gạch, TP. Đà Nẵng</p>
          <p>📞 0123 456 789</p>
          <p>✉️ lego@store.com</p>
        </div>

        <!-- Hỗ trợ -->
        <div class="footer-col">
          <h3>Hỗ trợ khách hàng</h3>
          <ul>
            <li><a href="#">Hướng dẫn mua hàng</a></li>
            <li><a href="#">Chính sách đổi trả</a></li>
            <li><a href="#">Câu hỏi thường gặp</a></li>
            <li><a href="#">Liên hệ hỗ trợ</a></li>
          </ul>
        </div>

        <!-- Chính sách -->
        <div class="footer-col">
          <h3>Chính sách</h3>
          <ul>
            <li><a href="#">Chính sách bảo mật</a></li>
            <li><a href="#">Chính sách vận chuyển</a></li>
            <li><a href="#">Điều khoản dịch vụ</a></li>
          </ul>
        </div>

        <!-- Mạng xã hội -->
        <div class="footer-col">
          <h3>Kết nối</h3>
          <div class="social-icons">
            <a href="#">🌐 Facebook</a>
            <a href="#">📷 Instagram</a>
            <a href="#">🎥 YouTube</a>
            <a href="#">🐦 Twitter</a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© 2025 LEGO Store | All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Libertinus+Keyboard&family=Quicksand:wght@300..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');
/* giữ nguyên CSS của bạn */
* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   font-family: "Quicksand", sans-serif;
    }

    /* Navbar */
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #ffcc00;
      padding: 10px 30px;
      
    }

    /* Bên trái */
    .navbar-left {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: bold;
      font-size: 20px;
      background-color: #ffcc00;
    }

    /* Menu giữa */
    .navbar-center ul {
      display: flex;
      list-style: none;
      gap: 25px;
      margin: 0;
      padding: 0;
    }

    .navbar-center a {
      text-decoration: none;
      font-weight: 600;
      color: #333;
      transition: 0.2s;
    }

    .navbar-center a:hover {
      color: #e60000;
    }

    /* Bên phải */
    .navbar-right {
      display: flex;
      align-items: center;
      gap: 90px;
    }

    .search-box {
      position: relative;
    }
     .search-input {
      width: 350px;
      transition: width 0.4s ease-in-out;}
    .search-box input {
      padding: 6px 10px 6px 30px;
      border-radius: 20px;
      border: 1px solid #ccc;
      outline: none;
    }
  .logo1 {
      font-size: 20px;
      font-weight:800;
      color: #333;
      text-align: center;
      cursor: pointer;
      width: 400px;
      font-family: 'Libertinus Keyboard', serif;
      letter-spacing: 2px;
      max-width: min-content;
     
    }
    .search-box i {
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translateY(-50%);
      color: #666;
    }
    .cart {
      font-weight: bold;
      cursor: pointer;
    }

    /* Banner */
    .banner {
      text-align: center;
      padding: 80px 20px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: #fff;
    }

    .banner h1 {
      font-size: 40px;
      margin-bottom: 15px;
    }

    .banner p {
      font-size: 18px;
      margin-bottom: 25px;
    }

    .btn-custom {
      padding: 12px 25px;
      background: #ffcc00;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: bold;
      transition: 0.3s;
    }

    .btn-custom:hover {
      background: #e6b800;
    }

    /* Products */
    .products {
      padding: 50px;
      text-align: center;
    }

    .products h2 {
      margin-bottom: 30px;
      font-size: 28px;
    }

    .product-list {
      display: flex;
      justify-content: center;
      gap: 20px;
      flex-wrap: wrap;
    }

    .product-card {
      background: #fff;
      padding: 20px;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      width: 250px;
      transition: transform 0.3s;
    }

    .product-card:hover {
      transform: translateY(-8px);
    }

    .product-card img {
      width: 100%;
      border-radius: 10px;
      margin-bottom: 15px;
    }

    .product-card h3 {
      font-size: 18px;
      margin-bottom: 10px;
      color: #333;
    }

    .product-card p {
      font-size: 16px;
      margin-bottom: 15px;
      color: #666;
    }

    /* Footer */
    .footer {
      background: #222;
      color: #fff;
      padding: 50px 20px 20px;
      margin-top: 40px;
    }

    .footer-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 30px;
      max-width: 1200px;
      margin: auto;
    }

    .footer-col h3 {
      margin-bottom: 15px;
      font-size: 18px;
      color: #ffcc00;
    }

    .footer-col p {
      font-size: 14px;
      margin-bottom: 8px;
      color: #ddd;
    }

    .footer-col ul {
      list-style: none;
      padding: 0;
    }

    .footer-col ul li {
      margin-bottom: 8px;
    }

    .footer-col ul li a {
      color: #ccc;
      text-decoration: none;
      font-size: 14px;
      transition: 0.3s;
    }

    .footer-col ul li a:hover {
      color: #ffcc00;
    }

    .social-icons a {
      display: block;
      margin-bottom: 8px;
      color: #ccc;
      text-decoration: none;
      font-size: 14px;
      transition: 0.3s;
    }

    .social-icons a:hover {
      color: #ffcc00;
    }

    .footer-bottom {
      text-align: center;
      padding-top: 20px;
      border-top: 1px solid #444;
      margin-top: 30px;
      font-size: 14px;
      color: #aaa;
    }
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css";

/* copy toàn bộ CSS từ file HTML vào đây */
</style>
