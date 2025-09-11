<template>
  <div class="min-vh-100 d-flex align-items-center justify-content-center position-relative overflow-hidden" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
    <!-- Background decorative elements -->
    <div class="position-absolute top-0 start-0 w-100 h-100">
      <div class="lego-brick lego-brick-1"></div>
      <div class="lego-brick lego-brick-2"></div>
      <div class="lego-brick lego-brick-3"></div>
      <div class="lego-brick lego-brick-4"></div>
      <div class="lego-brick lego-brick-5"></div>
    </div>

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6 col-lg-4">
          <div class="login-card position-relative">
            <!-- LEGO Brand Header -->
            <div class="text-center mb-4">
              <div class="lego-logo mb-3">
                <div class="lego-brick-logo">
                  <div class="brick-dot"></div>
                  <div class="brick-dot"></div>
                  <div class="brick-dot"></div>
                  <div class="brick-dot"></div>
                </div>
              </div>
              <h1 class="lego-title">LEGO STORE</h1>
              <p class="login-subtitle">Đăng nhập để khám phá thế giới LEGO</p>
            </div>

            <form @submit.prevent="onSubmit" novalidate>
              <!-- Email Input -->
              <div class="form-group mb-4">
                <label for="email" class="form-label">Email</label>
                <div class="input-wrapper">
                  <input
                    id="email"
                    v-model.trim="form.email"
                    type="email"
                    placeholder="you@example.com"
                    class="form-control lego-input"
                    :class="{ 'is-invalid': errors.email }"
                  />
                  <i class="input-icon fas fa-envelope"></i>
                </div>
                <div v-if="errors.email" class="error-message">{{ errors.email }}</div>
              </div>

              <!-- Password Input -->
              <div class="form-group mb-4">
                <label for="password" class="form-label">Mật khẩu</label>
                <div class="input-wrapper">
                  <input
                    id="password"
                    v-model="form.password"
                    :type="showPassword ? 'text' : 'password'"
                    placeholder="Mật khẩu"
                    class="form-control lego-input password-input"
                    :class="{ 'is-invalid': errors.password }"
                  />
                  <i class="input-icon fas fa-lock"></i>
                  <button 
                    type="button" 
                    class="password-toggle"
                    @click="showPassword = !showPassword"
                  >
                    <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                  </button>
                </div>
                <div v-if="errors.password" class="error-message">{{ errors.password }}</div>
              </div>

              <!-- Remember & Submit -->
              <div class="d-flex justify-content-between align-items-center mb-4">
                <div class="form-check lego-checkbox">
                  <input 
                    class="form-check-input" 
                    type="checkbox" 
                    id="remember" 
                    v-model="form.remember" 
                  />
                  <label class="form-check-label" for="remember">Ghi nhớ tôi</label>
                </div>
                <a href="#" class="forgot-password">Quên mật khẩu?</a>
              </div>

              <button 
                type="submit" 
                class="btn lego-btn w-100 mb-3"
                :disabled="loading"
              >
                <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
                {{ loading ? 'Đang đăng nhập...' : 'Đăng nhập' }}
              </button>

              <div v-if="serverError" class="alert lego-alert">
                <i class="fas fa-exclamation-triangle me-2"></i>
                {{ serverError }}
              </div>
            </form>

            <div class="text-center mt-4">
              <p class="register-text">
                Chưa có tài khoản? 
                <router-link to="/register" class="register-link">Đăng ký ngay</router-link>
              </p>
            </div>

            <!-- Social Login -->
            <div class="social-login mt-4">
              <div class="divider">
                <span>hoặc</span>
              </div>
              <div class="social-buttons">
                <button class="social-btn google-btn">
                  <i class="fab fa-google"></i>
                  Google
                </button>
                <button class="social-btn facebook-btn">
                  <i class="fab fa-facebook-f"></i>
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  email: '',
  password: '',
  remember: false,
})

const errors = reactive({
  email: null,
  password: null,
})

const serverError = ref(null)
const loading = ref(false)
const showPassword = ref(false)

function validate() {
  errors.email = null
  errors.password = null
  serverError.value = null

  let ok = true
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

  return ok
}

async function onSubmit() {
  if (!validate()) return

  loading.value = true
  serverError.value = null

  try {
    const res = await axios.post('/api/auth/login', {
      email: form.email,
      password: form.password,
    })

    const { token, user } = res.data

    if (form.remember) localStorage.setItem('token', token)
    else sessionStorage.setItem('token', token)

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

<style scoped>
/* Import Font Awesome for icons */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Libertinus+Keyboard&family=Quicksand:wght@300..700&display=swap');

/* Main Container */
.min-vh-150 {
  font-family: 'Quicksand', sans-serif;
  position: relative;
  overflow: hidden;
}

/* Background LEGO Bricks */
.lego-brick {
  position: absolute;
  width: 60px;
  height: 40px;
  border-radius: 8px;
  opacity: 0.1;
  animation: float 6s ease-in-out infinite;
  
}

.lego-brick::before {
  content: '';
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 16px;
  background: inherit;
  border-radius: 50%;
}

.lego-brick-1 {
  background: #ff6b6b;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.lego-brick-2 {
  background: #4ecdc4;
  top: 20%;
  right: 15%;
  animation-delay: 1s;
}

.lego-brick-3 {
  background: #45b7d1;
  top: 60%;
  left: 5%;
  animation-delay: 2s;
}

.lego-brick-4 {
  background: #f9ca24;
  bottom: 20%;
  right: 10%;
  animation-delay: 3s;
}

.lego-brick-5 {
  background: #6c5ce7;
  bottom: 40%;
  left: 20%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

/* Login Card */
.login-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.1),
    0 8px 25px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  min-width: 100px;
  min-height: 250px;
}

/* LEGO Logo */
.lego-brick-logo {
  position: relative;
  width: 80px;
  height: 50px;
  background: linear-gradient(145deg, #ff6b6b, #e55656);
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 8px;
  box-shadow: 
    0 8px 20px rgba(255, 107, 107, 0.3),
    inset 0 2px 4px rgba(255, 255, 255, 0.3);
}

.brick-dot {
  width: 12px;
  height: 12px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2);
}

.lego-title {
  font-size: 2.2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #ff6b6b, #4ecdc4, #45b7d1, #f9ca24);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 2px;
  margin-bottom: 0;
  font-family: 'Libertinus Keyboard', serif;
}

.login-subtitle {
  color: #666;
  font-weight: 400;
  font-size: 1rem;
  margin-bottom: 0;
}

/* Form Styles */
.form-label {
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.input-wrapper {
  position: relative;
}

.lego-input {
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid #e1e8ed;
  border-radius: 16px;
  padding: 1rem 1rem 1rem 3rem;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  height: auto;
}

.lego-input:focus {
  outline: none;
  border-color: #4ecdc4;
  box-shadow: 0 0 0 3px rgba(78, 205, 196, 0.1);
  background: white;
}

.lego-input.is-invalid {
  border-color: #ff6b6b;
  box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.1);
}

.input-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #999;
  font-size: 1.1rem;
}

.password-input {
  padding-right: 3.5rem;
}

.password-toggle {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.password-toggle:hover {
  color: #4ecdc4;
}

.error-message {
  color: #ff6b6b;
  font-size: 0.85rem;
  font-weight: 500;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
}

.error-message::before {
  content: '⚠';
  margin-right: 0.5rem;
}

/* Checkbox */
.lego-checkbox .form-check-input {
  border-radius: 6px;
  border: 2px solid #ddd;
  width: 1.2rem;
  height: 1.2rem;
}

.lego-checkbox .form-check-input:checked {
  background-color: #4ecdc4;
  border-color: #4ecdc4;
}

.lego-checkbox .form-check-label {
  font-weight: 500;
  color: #666;
  margin-left: 0.5rem;
}

.forgot-password {
  color: #4ecdc4;
  text-decoration: none;
  font-weight: 500;
  font-size: 0.9rem;
  transition: color 0.3s ease;
}

.forgot-password:hover {
  color: #3ba39c;
  text-decoration: underline;
}

/* Login Button */
.lego-btn {
  background: linear-gradient(135deg, #4ecdc4, #44a08d);
  border: none;
  border-radius: 16px;
  padding: 1rem 2rem;
  font-weight: 600;
  font-size: 1.1rem;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.lego-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.lego-btn:hover::before {
  left: 100%;
}

.lego-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(78, 205, 196, 0.4);
}

.lego-btn:disabled {
  opacity: 0.7;
  transform: none;
  cursor: not-allowed;
}

/* Alert */
.lego-alert {
  background: rgba(255, 107, 107, 0.1);
  border: 2px solid rgba(255, 107, 107, 0.3);
  border-radius: 12px;
  color: #d63384;
  padding: 1rem;
  font-weight: 500;
}

/* Register Link */
.register-text {
  color: #666;
  font-weight: 500;
  margin-bottom: 0;
}

.register-link {
  color: #4ecdc4;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.register-link:hover {
  color: #3ba39c;
  text-decoration: underline;
}

/* Social Login */
.divider {
  position: relative;
  text-align: center;
  margin: 1.5rem 0;
}

.divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: #ddd;
}

.divider span {
  background: rgba(255, 255, 255, 0.95);
  padding: 0 1rem;
  color: #999;
  font-weight: 500;
  font-size: 0.9rem;
}

.social-buttons {
  display: flex;
  gap: 1rem;
}

.social-btn {
  flex: 1;
  background: white;
  border: 2px solid #e1e8ed;
  border-radius: 12px;
  padding: 0.8rem;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.google-btn:hover {
  border-color: #db4437;
  color: #db4437;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(219, 68, 55, 0.2);
}

.facebook-btn:hover {
  border-color: #3b5998;
  color: #3b5998;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(59, 89, 152, 0.2);
}

/* Responsive */
@media (max-width: 768px) {
  .login-card {
    margin: 1rem;
    padding: 2rem 1.5rem;
  }
  
  .lego-title {
    font-size: 1.8rem;
  }
  
  .social-buttons {
    flex-direction: column;
  }
}
</style>