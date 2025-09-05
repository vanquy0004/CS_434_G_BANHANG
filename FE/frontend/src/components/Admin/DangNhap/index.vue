<template>
  <div class="login-container">
    <div class="login-card">
      <!-- Bên trái: ảnh -->
      <div class="login-image"></div>

      <!-- Bên phải: form -->
      <div class="login-form">
        <h2>Login</h2>
        <p class="subtitle">Login Your Account</p>

        <form @submit.prevent="handleLogin">
          <label for="name">NAME</label>
          <input
            type="text"
            id="name"
            v-model="name"
            placeholder="Enter your name"
            required
          />

          <label for="password">PASSWORD</label>
          <div class="password-wrapper">
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              required
            />
            <span class="toggle" @click="showPassword = !showPassword">👁</span>
          </div>

          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DangNhap",
  data() {
    return {
      name: "",
      password: "",
      showPassword: false,
    };
  },
  methods: {
    handleLogin() {
      console.log("Login with:", this.name, this.password);
      // TODO: xử lý login tại đây
    },
  },
};
</script>

<!-- Import file CSS -->
<style src="./style.css"></style>
