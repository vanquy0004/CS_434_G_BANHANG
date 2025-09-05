<script setup>
import { ref } from 'vue'
import './styles/Login.css'
</script>

<template>
    <div class="login-box background: #fff;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 6px 15px rgba(0,0,0,0.2);
      width: 350px;">
        <h2>Đăng nhập</h2>
        <form action="#" method="post">
            <div class="input-box">
                <label for="username">Tên đăng nhập</label>
                <input type="text" id="username" name="username" placeholder="Nhập tên đăng nhập" required>
            </div>
            <div class="input-box">
                <label for="password">Mật khẩu</label>
                <input type="password" id="password" name="password" placeholder="Nhập mật khẩu" required>
            </div>
            <button type="submit">Đăng nhập</button>
            <div class="extra">
                <a href="#">Quên mật khẩu?</a> |
                <a href="#">Đăng ký</a>
            </div>
        </form>
    </div>
</template>
