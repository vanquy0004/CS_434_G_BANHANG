<template>
  <div class="wrapper">
    <div class="card">
      <div class="logo"></div>
      <h2>Tạo tài khoản</h2>
      <p>Đăng ký để khám phá thế giới LEGO</p>

      <form @submit.prevent="onSubmit" novalidate>
        <div class="input-group">
          <label>Họ và tên</label>
          <input
            v-model.trim="form.name"
            type="text"
            placeholder="Nguyễn Văn A"
            class="form-control"
            :class="{ 'is-invalid': errors.name }"
            required
          >
          <div v-if="errors.name" class="error-message">{{ errors.name }}</div>
        </div>

        <div class="input-group">
          <label>Email</label>
          <input
            v-model.trim="form.email"
            type="email"
            placeholder="you@example.com"
            class="form-control"
            :class="{ 'is-invalid': errors.email }"
            required
          >
          <div v-if="errors.email" class="error-message">{{ errors.email }}</div>
        </div>

        <div class="input-group">
          <label>Mật khẩu</label>
          <input
            v-model="form.password"
            type="password"
            placeholder="Mật khẩu"
            class="form-control"
            :class="{ 'is-invalid': errors.password }"
            required
          >
          <div v-if="errors.password" class="error-message">{{ errors.password }}</div>
        </div>

        <div class="input-group">
          <label>Xác nhận mật khẩu</label>
          <input
            v-model="form.confirmPassword"
            type="password"
            placeholder="Nhập lại mật khẩu"
            class="form-control"
            :class="{ 'is-invalid': errors.confirmPassword }"
            required
          >
          <div v-if="errors.confirmPassword" class="error-message">{{ errors.confirmPassword }}</div>
        </div>

        <button type="submit" class="btn" :disabled="loading">
          <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
          {{ loading ? 'Đang đăng ký...' : 'Đăng ký' }}
        </button>

        <div v-if="serverError" class="alert alert-danger mt-3">
          {{ serverError }}
        </div>

        <div class="signin">
          Đã có tài khoản? <router-link to="/login">Đăng nhập</router-link>
        </div>

        <div class="divider"><span>hoặc</span></div>

        <div class="social-login">
          <button type="button" class="social-btn">Google</button>
          <button type="button" class="social-btn">Facebook</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
})

const errors = reactive({
  name: null,
  email: null,
  password: null,
  confirmPassword: null,
})

const serverError = ref(null)
const loading = ref(false)

function validate() {
  errors.name = null
  errors.email = null
  errors.password = null
  errors.confirmPassword = null
  serverError.value = null

  let ok = true
  if (!form.name) {
    errors.name = 'Họ và tên không được để trống.'
    ok = false
  }

  if (!form.email) {
    errors.email = 'Email không được để trống.'
    ok = false
  } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
    errors.email = 'Email không hợp lệ.'
    ok = false
  }

  if (!form.password) {
    errors.password = 'Mật khẩu không được để trống.'
    ok = false
  } else if (form.password.length < 6) {
    errors.password = 'Mật khẩu phải ít nhất 6 ký tự.'
    ok = false
  }

  if (!form.confirmPassword) {
    errors.confirmPassword = 'Xác nhận mật khẩu không được để trống.'
    ok = false
  } else if (form.password !== form.confirmPassword) {
    errors.confirmPassword = 'Mật khẩu xác nhận không khớp.'
    ok = false
  }

  return ok
}

async function onSubmit() {
  if (!validate()) return

  loading.value = true
  serverError.value = null

  try {
    const res = await axios.post('http://localhost:8000/auth/register', {
      name: form.name,
      email: form.email,
      password: form.password,
    })

    const { token, user } = res.data

    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))

    router.push('/')
  } catch (err) {
    if (err.response && err.response.data && err.response.data.message) {
      serverError.value = err.response.data.message
    } else {
      serverError.value = 'Lỗi kết nối. Vui lòng thử lại.'
    }
  } finally {
    loading.value = false
  }
}
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

.input-group input.is-invalid {
  border-color: #dc3545;
  box-shadow: 0 0 6px rgba(220, 53, 69, 0.4);
}

.error-message {
  color: #dc3545;
  font-size: 12px;
  margin-top: 5px;
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
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn:hover:not(:disabled) {
  opacity: 0.9;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.alert {
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
}

.alert-danger {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
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

.spinner-border {
  width: 1rem;
  height: 1rem;
  border: 0.25em solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: spinner-border 0.75s linear infinite;
}

@keyframes spinner-border {
  to {
    transform: rotate(360deg);
  }
}
</style>
