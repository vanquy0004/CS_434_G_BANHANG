<template>
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
          <li><router-link to="/guide">Hướng dẫn mua hàng</router-link></li>
          <li><router-link to="/return-policy">Chính sách đổi trả</router-link></li>
          <li><router-link to="/faq">Câu hỏi thường gặp</router-link></li>
          <li><router-link to="/support">Liên hệ hỗ trợ</router-link></li>
        </ul>
      </div>

      <!-- Chính sách -->
      <div class="footer-col">
        <h3>Chính sách</h3>
        <ul>
          <li><router-link to="/privacy">Chính sách bảo mật</router-link></li>
          <li><router-link to="/shipping">Chính sách vận chuyển</router-link></li>
          <li><router-link to="/terms">Điều khoản dịch vụ</router-link></li>
        </ul>
      </div>

      <!-- Mạng xã hội -->
      <div class="footer-col">
        <h3>Kết nối</h3>
        <div class="social-icons">
          <a href="#" target="_blank">🌐 Facebook</a>
          <a href="#" target="_blank">📷 Instagram</a>
          <a href="#" target="_blank">🎥 YouTube</a>
          <a href="#" target="_blank">🐦 Twitter</a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2025 LEGO Store | All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');

/* Footer */
.footer {
  background: #222;
  color: #fff;
  padding: 50px 20px 20px;
  margin-top: 40px;
  font-family: "Quicksand", sans-serif;
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
</style>
