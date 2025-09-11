<template>
  <div class="wrapper">
    <div class="card">
      <div class="logo"></div>
      <h2>Tạo tài khoản</h2>
      <p>Đăng ký để khám phá thế giới LEGO</p>

      <form>
        <div class="input-group">
          <label>Họ và tên</label>
          <input type="text" placeholder="Nguyễn Văn A" required>
        </div>

        <div class="input-group">
          <label>Email</label>
          <input type="email" placeholder="you@example.com" required>
        </div>

        <div class="input-group">
          <label>Mật khẩu</label>
          <input type="password" placeholder="Mật khẩu" required>
        </div>

        <div class="input-group">
          <label>Xác nhận mật khẩu</label>
          <input type="password" placeholder="Nhập lại mật khẩu" required>
        </div>

        <button type="submit" class="btn">Đăng ký</button>

        <div class="signin">
          Đã có tài khoản? <a href="#">Đăng nhập</a>
        </div>

        <div class="divider"><span>hoặc</span></div>

        <div class="social-login">
          <button class="social-btn">Google</button>
          <button class="social-btn">Facebook</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.wrapper {
  height: 100vh;
  display: flex;
  justify-content: center;  /* căn giữa ngang */
  align-items: center;      /* căn giữa dọc */
  background: linear-gradient(135deg, #667eea, #764ba2);
}

.card {
  background: #fff;
  width: 400px;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.logo {
  width: 60px;
  height: 60px;
  background: #ff6b6b;
  border-radius: 15px;
  margin: 0 auto 15px;
}

h2 {
  margin-bottom: 10px;
  color: #333;
}

p {
  color: #666;
  font-size: 14px;
  margin-bottom: 20px;
}

.input-group {
  text-align: left;
  margin-bottom: 18px;
}

.input-group label {
  font-size: 13px;
  font-weight: 600;
  color: #555;
  display: block;
  margin-bottom: 5px;
}

.input-group input {
  width: 100%;
  padding: 12px 15px;
  border: 1.5px solid #ddd;
  border-radius: 10px;
  outline: none;
  font-size: 14px;
  transition: 0.3s;
}

.input-group input:focus {
  border-color: #6a82fb;
  box-shadow: 0 0 6px rgba(106, 130, 251, 0.4);
}

.btn {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(135deg, #56ab2f, #a8e063);
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  margin-bottom: 15px;
  transition: 0.3s;
}

.btn:hover {
  opacity: 0.9;
}

.signin {
  font-size: 14px;
  margin-bottom: 15px;
}

.signin a {
  color: #6a82fb;
  text-decoration: none;
  font-weight: 500;
}

.divider {
  display: flex;
  align-items: center;
  margin: 15px 0;
}

.divider::before,
.divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: #ddd;
}

.divider span {
  margin: 0 10px;
  font-size: 13px;
  color: #666;
}

.social-login {
  display: flex;
  gap: 10px;
}

.social-btn {
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ddd;
  cursor: pointer;
  background: #fff;
  font-size: 14px;
  font-weight: 500;
}

.social-btn:hover {
  background: #f8f8f8;
}
</style>
