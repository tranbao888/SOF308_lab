<template>
  <div class="login-container d-flex justify-content-center align-items-center vh-100">
    <div class="card login-card p-5 shadow-lg border-0 rounded-4" style="max-width: 500px; width: 100%;">
      <!-- Logo hoặc tiêu đề trang -->
      <div class="text-center mb-4">
        <img src="../../assets/avatar.png" alt="Logo" class="img-fluid mb-3 rounded-circle logo-img">
        <h2 class="text-primary fw-bold">Chào Mừng Trở Lại!</h2>
        <p class="text-muted">Đăng nhập để khám phá thế giới của bạn</p>
      </div>

      <!-- Form đăng nhập -->
      <form>
        <div class="mb-3">
          <label for="email" class="form-label fw-semibold">Email</label>
          <input type="email" class="form-control custom-input" id="email" placeholder="Nhập email của bạn" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label fw-semibold">Mật Khẩu</label>
          <input type="password" class="form-control custom-input" id="password" placeholder="Nhập mật khẩu của bạn" required>
        </div>
        <button type="submit" class="btn btn-primary w-100 fw-semibold py-2">Đăng Nhập</button>
      </form>

      <!-- Liên kết Quên mật khẩu -->
      <div class="text-center mt-3">
        <a href="#" class="text-decoration-none text-primary">Quên mật khẩu?</a>
      </div>

      <!-- Liên kết đăng ký -->
      <div class="text-center mt-3">
        <span class="text-muted">Chưa có tài khoản?</span>
        <a href="/ASM/Register" class="text-decoration-none text-primary fw-semibold">Đăng Ký</a>
      </div>

      <!-- Đăng nhập với mạng xã hội -->
      <div class="social-login text-center mt-4">
        <p class="text-muted mb-3">Hoặc đăng nhập bằng</p>
        <div class="d-flex justify-content-center gap-3">
          <button class="btn btn-outline-primary rounded-circle social-btn"><i class="bi bi-facebook fs-4"></i></button>
          <button class="btn btn-outline-info rounded-circle social-btn"><i class="bi bi-twitter fs-4"></i></button>
          <button class="btn btn-outline-danger rounded-circle social-btn"><i class="bi bi-google fs-4"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ASMLogin",
};
</script>

<style>
/* Tổng thể bố cục */
.login-container {
  background: radial-gradient(circle, #6dd5fa, #2980b9);
  animation: backgroundGradient 6s ease infinite;
}

/* Gradient background animation */
@keyframes backgroundGradient {
  0%, 100% {
    background: radial-gradient(circle, #6dd5fa, #2980b9);
  }
  50% {
    background: radial-gradient(circle, #8e2de2, #4a00e0);
  }
}

/* Card login */
.login-card {
  background: rgba(255, 255, 255, 0.95);
  padding: 2.5rem;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
}

.login-card:hover {
  transform: translateY(-10px);
}

/* Logo styling */
.logo-img {
  width: 70px;
  transition: transform 0.3s ease;
}

.logo-img:hover {
  transform: rotate(360deg);
}

/* Hiệu ứng cho nút đăng nhập */
.btn-primary {
  background-color: #2980b9;
  border: none;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-primary:hover {
  background-color: #1c5980;
  transform: translateY(-3px);
  box-shadow: 0px 4px 12px rgba(44, 130, 201, 0.3);
}

/* Tùy chỉnh các nút mạng xã hội */
.social-login button {
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  transition: background-color 0.3s ease, transform 0.3s ease;
  border: none;
}

.social-login button:hover {
  transform: scale(1.15) rotate(15deg);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

/* Tùy chỉnh input */
.custom-input {
  height: 45px;
  border-radius: 0.375rem;
  border: 1px solid #ccc;
  transition: border-color 0.3s ease;
  box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.2);
}

.custom-input:focus {
  border-color: #2980b9;
  box-shadow: 0 0 8px rgba(0, 123, 255, 0.4);
}
</style>
