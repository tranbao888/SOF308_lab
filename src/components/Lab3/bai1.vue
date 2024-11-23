<template>
 <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <!-- Logo -->
      <a class="navbar-brand" href="#">
        <img src="/images/logo-energy-pilates.png" alt="Energy Pilates" style="width: 150px;">
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar Links -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <font-awesome-icon icon="file-alt" /> Bài viết
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <font-awesome-icon icon="video" /> Video
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <font-awesome-icon icon="info-circle" /> Giới thiệu
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <font-awesome-icon icon="calendar-alt" /> Sự kiện
            </a>
          </li>
          <!-- Dropdown for Account -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <font-awesome-icon icon="user" /> Tài khoản
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Đăng nhập</a></li>
              <li><a class="dropdown-item" href="#">Đăng ký</a></li>
            </ul>
          </li>
        </ul>

        <!-- Language Options -->
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Tiếng Việt</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Tiếng Anh</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

<div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../../assets/banner1.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../../assets/banner2.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="../../assets/banner3.jpg" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<script>
export default {
    name: "Lab3Bai1",
}
</script>
<style scoped>
.navbar {
  background-color: #f8f9fa;
}
.nav-link {
  color: #333;
  font-weight: 500;
}
.nav-link:hover {
  color: #28a745;
}
</style>