<template>
  <div class="register-container d-flex justify-content-center align-items-center vh-100">
    <div class="card register-card p-5 shadow-lg border-0 rounded-4" style="max-width: 450px; width: 100%; height: 880px;">
      <!-- Logo hoặc tiêu đề trang -->
      <div class="text-center mb-4 wiggle">
        <img src="https://via.placeholder.com/100" alt="Logo" class="img-fluid mb-3 rounded-circle logo-img bounce">
        <h2 class="text-primary fw-bold rubber-text">Đăng Ký Tài Khoản Mới</h2>
        <p class="text-muted">Khám phá những trải nghiệm tuyệt vời cùng chúng tôi</p>
      </div>

      <!-- Form đăng ký -->
      <form>
        <div class="mb-3">
          <label for="name" class="form-label fw-semibold shake">Tên</label>
          <input type="text" class="form-control custom-input wobble" id="name" placeholder="Nhập tên của bạn" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label fw-semibold shake">Email</label>
          <input type="email" class="form-control custom-input wobble" id="email" placeholder="Nhập email của bạn" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label fw-semibold shake">Mật Khẩu</label>
          <input type="password" class="form-control custom-input wobble" id="password" placeholder="Tạo mật khẩu của bạn" required>
        </div>
        <div class="mb-3">
          <label for="confirm-password" class="form-label fw-semibold shake">Xác Nhận Mật Khẩu</label>
          <input type="password" class="form-control custom-input wobble" id="confirm-password" placeholder="Nhập lại mật khẩu của bạn" required>
        </div>
        <button type="submit" class="btn btn-primary w-100 fw-semibold py-2 jump">Đăng Ký</button>
      </form>

      <!-- Liên kết Đăng Nhập -->
      <div class="text-center mt-3">
        <span class="text-muted">Đã có tài khoản?</span>
        <a href="login.html" class="text-decoration-none text-primary fw-semibold pulse">Đăng Nhập</a>
      </div>

      <!-- Đăng ký với mạng xã hội -->
      <div class="social-login text-center mt-4">
        <p class="text-muted mb-2">Hoặc đăng ký bằng</p>
        <div class="d-flex justify-content-center gap-3">
          <button class="btn btn-outline-primary rounded-circle social-btn rotate"><i class="bi bi-facebook fs-4"></i></button>
          <button class="btn btn-outline-info rounded-circle social-btn rotate"><i class="bi bi-twitter fs-4"></i></button>
          <button class="btn btn-outline-danger rounded-circle social-btn rotate"><i class="bi bi-google fs-4"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ASMRegister",
};
</script>

<style>
/* Tổng thể bố cục */
.register-container {
  background: linear-gradient(145deg, #ffafbd, #ffc3a0);
  animation: backgroundShift 8s infinite alternate;
}

/* Gradient background animation */
@keyframes backgroundShift {
  from {
    background: linear-gradient(145deg, #ffafbd, #ffc3a0);
  }
  to {
    background: linear-gradient(145deg, #e0c3fc, #8ec5fc);
  }
}

/* Card register */
.register-card {
  background: rgba(255, 255, 255, 0.85);
  padding: 2.5rem;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
}

.register-card:hover {
  transform: rotate(-3deg) scale(1.03);
}

/* Logo styling */
.logo-img {
  width: 70px;
  transition: transform 0.3s ease;
}
.logo-img.bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Wiggle and wobble effects */
.wiggle {
  animation: wiggle 3s infinite;
}
@keyframes wiggle {
  0%, 100% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
}

.wobble {
  animation: wobble 0.5s ease-in-out infinite;
}
@keyframes wobble {
  0% { transform: translateX(-2px); }
  50% { transform: translateX(2px); }
  100% { transform: translateX(-2px); }
}

/* Text shake effect */
.shake {
  animation: shake 2s infinite;
}
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-3px); }
  75% { transform: translateX(3px); }
}

/* Button jump effect */
.jump {
  animation: jump 1s infinite;
}
@keyframes jump {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

/* Rubber band effect for text */
.rubber-text {
  animation: rubberBand 2s ease-in-out infinite;
}
@keyframes rubberBand {
  0%, 100% { transform: scale(1); }
  30% { transform: scale(1.25, 0.75); }
  40% { transform: scale(0.75, 1.25); }
  50% { transform: scale(1.15, 0.85); }
  65% { transform: scale(0.95, 1.05); }
  75% { transform: scale(1.05, 0.95); }
}

/* Link pulse effect */
.pulse {
  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

/* Social button rotate effect */
.rotate {
  animation: rotate 4s infinite linear;
}
@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Tùy chỉnh input */
.custom-input {
  height: 45px;
  border-radius: 0.5rem;
  border: 1px solid #ddd;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 0 0 0 rgba(255, 111, 97, 0.2);
}

.custom-input:focus {
  border-color: #ff6f61;
  box-shadow: 0 0 8px rgba(255, 111, 97, 0.4);
}
</style>
