<template>


      <ul class="navbar-nav ms-auto">
          <li>
                <router-link to="/">Lab1</router-link>
                <ul>
                    <li><router-link to="/Lab1/bai1">Bài 1</router-link></li>
                    <li><router-link to="/Lab1/bai2">Bài 2</router-link></li>
                    <li><router-link to="/Lab1/bai3">Bài 3</router-link></li>
                    <li><router-link to="/Lab1/bai4">Bài 4</router-link></li>
                </ul>
            </li>
            <li>
                <router-link to="/about">Lab2</router-link>
                <ul>
                    <li><router-link to="/Lab2/bai1">Bài 1</router-link></li>
                    <li><router-link to="/Lab2/bai2">Bài 23</router-link></li>
                    <li><router-link to="/Lab2/bai4">Bài 4</router-link></li>
                </ul>
            </li>
            <li>
                <router-link to="/blog">Lab3</router-link>
                <ul>
                    <li><router-link to="/Lab3/bai1">Bài 1</router-link></li>
                    <li><router-link to="/Lab3/bai2">Bài 2</router-link></li>
                    <li><router-link to="/Lab3/bai3">Bài 3</router-link></li>
                    <li><router-link to="/Lab3/bai4">Bài 4</router-link></li>
                </ul>
            </li>
            <li>
                <router-link to="/lab5">Lab5</router-link>
                <ul>
                    <li><router-link to="/Lab5/bai1">Bài 1</router-link></li>
                    <li><router-link to="/Lab5/bai2">Bài 2</router-link></li>
                    <li><router-link to="/Lab5/bai3">Bài 3</router-link></li>
                    <li><router-link to="/Lab5/bai4">Bài 4</router-link></li>
                </ul>
            </li>
            <li>
                <router-link to="/nav">Lab6</router-link>
                <ul>
                    <li><router-link to="/Lab6/bai1">Bài 1</router-link></li>
                    <li><router-link to="/Lab6/bai2">Bài 2</router-link></li>
                    <li><router-link to="/Lab6/bai3">Bài 3</router-link></li>
                    <li><router-link to="/Lab6/bai4">Bài 4</router-link></li>
                </ul>
            </li>
            <li>
                <router-link to="/lab7">Lab7</router-link>
                <ul>
                    <li><router-link to="/Lab7/bai1">Bài 1</router-link></li>
                    <li><router-link to="/Lab7/bai2">Bài 2</router-link></li>
                    <li><router-link to="/Lab7/bai3">Bài 3</router-link></li>
                    <li><router-link to="/Lab7/bai4">Bài 4</router-link></li>
                </ul>
            </li>
      </ul>

  
      <nav class="navbar navbar-expand-lg navbar-dark bg-gradient-custom py-3 shadow-lg">
    <div class="container">
      <img src="https://topdev.vn/blog/wp-content/uploads/2020/08/logo-new-1.png" alt="" style="width: 150px;">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">

          <!-- ASM Menu -->
          <li class="nav-item">
            <router-link to="/ASM/home" class="nav-link text-dark px-3 fw-semibold link-hover">ASM Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ASM/PostDetail" class="nav-link text-dark px-3 fw-semibold link-hover">ASM Chi tiết bài đăng</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ASM/Login" class="nav-link text-dark px-3 fw-semibold link-hover">ASM Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ASM/Register" class="nav-link text-dark px-3 fw-semibold link-hover">ASM Đăng ký</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ASM/PostList" class="nav-link text-dark px-3 fw-semibold link-hover">ASM Danh sách bài viết</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/ASM/AddEditPost" class="nav-link text-dark px-3 fw-semibold link-hover">ASM Edit bài</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
/* Nền gradient đa màu cho navbar */
.bg-gradient-custom {
  background: linear-gradient(90deg, #ff6f61, #ff9966, #ffcc33);
  background-size: 200% 200%;
  animation: gradientShift 6s ease infinite;
}

/* Hiệu ứng chuyển động nền gradient */
@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Chữ gradient cho tên thương hiệu */
.text-gradient {
  background: linear-gradient(45deg, #ff6f61, #ff9966, #ffcc33);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  font-size: 1.75rem;
  animation: textGradientShift 5s ease infinite;
}

/* Hiệu ứng chuyển động gradient cho chữ */
@keyframes textGradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* Hiệu ứng hover gradient cho các mục menu */
.navbar-nav .nav-link {
  position: relative;
  transition: color 0.4s ease;
  color: #2c3e50;
  font-weight: 600;
}

.navbar-nav .nav-link.link-hover::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #ff6f61, #ff9966, #ffcc33);
  border-radius: 10px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.navbar-nav .nav-link.link-hover:hover::after {
  transform: scaleX(1);
}

/* Toggler icon custom màu gradient */
.navbar-toggler {
  border-color: rgba(255, 105, 97, 0.5);
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23FF6F61' viewBox='0 0 30 30'%3E%3Cpath stroke='rgba%28255, 105, 97, 0.5%29' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
}
</style>
