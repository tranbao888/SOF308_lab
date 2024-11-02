<template>
  <!-- <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Bài viết</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Video</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Giới Thiệu</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sự kiện</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tài khoản</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Đăng nhập</a></li>
                <li><a class="dropdown-item" href="#">Quên Mật khẩu</a></li>
                <li><a class="dropdown-item" href="#">Đăng kí thành viên</a></li>
              </ul>
            </li>
          </ul>
          
          <ul class="navbar-nav d-flex">
            <li class="nav-item">
                <a class="nav-link">Tiếng Việt</a>
            </li>
            <li class="nav-item">
                <a class="nav-link">Tiếng Anh</a>
            </li>
        </ul>
      </div> 
    </div>
    </nav>

    <div class="col-sm-4">
      <h2 class="text-info mb-3">Về tôi</h2>
      <div class="card blog">
        <img src="images/avatar-png" class="card-img-top" aLt="..">
        <div class="card-body">
          <h5 class="card-title">Giới thiệu bản thân</h5>
          <p class="card-text">TS. Trần Hoàng, Tổ chức Tư vấn sức khe quốc tế độc lập <br>
              Châm ngôn: Ta không được chọn nơi mình sinh ra, nhưng ta được chọn cách mình sẽ sống
          </p>
        </div>
      </div>

      <h3 class="text-info mt-2">Chuyên mục</h3>
      <ul class="list-group">
        <li class="list-group-item active bg-info d-flex justify-content-between align-items-center">
          <a class="nav-link" href="#">Chế độ tập</a>
          <span cLass="badge bg-primary rounded-pill">12</span>
        </li>

        <li class="list-group-item d-flex justify-content-between align-items-center">
          <a class="nav-link" href="#">Chế độ dinh dưỡng</a>
          <span class="badge bg-primary rounded-pill">15</span>
        </li>

        <li class="list-group-item d-flex justify-content-between align-items-center">
          <a class="nav-link" href="#">Cẩm nang cuộc sống</a>
          <span class="badge bg-primary rounded-pill">99</span>
        </li>
      </ul>
    </div> -->



    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
            <img src="/images/logo-energy-pilates.png" alt="" style="width: 150px;">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Bài viết</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Video</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Giới Thiệu</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sự kiện</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tài khoản
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Đăng nhập</a></li>
                <li><a class="dropdown-item" href="#">Quên Mật khẩu</a></li>
                <li><a class="dropdown-item" href="#">Đăng kí thành viên</a></li>
              </ul>
            </li>
          </ul>
          
          <ul class="navbar-nav d-flex">
            <li class="nav-item">
                <a class="nav-link">Tiếng Việt</a>
            </li>
            <li class="nav-item">
                <a class="nav-link">Tiếng Anh</a>
            </li>
        </ul>
      </div> 
    </div>
    </nav>

  <div class="container">
  <section class="row">
    <!-- Sidebar thông tin cá nhân bên trái -->
    <aside class="col-sm-4 bg-light p-3 border rounded">
      <!-- <div class="col-sm-4"> -->
      <h2 class="text-info mb-4">Về tôi</h2>
      <div class="card blog">
        <img src="/images/avatar.png" class="card-img-top" aLt="..">
        <div class="card-body">
          <h5 class="card-title">Giới thiệu bản thân</h5>
          <p class="card-text">TS. Trần Hoàng, Tổ chức Tư vấn sức khe quốc tế độc lập <br>
              Châm ngôn: Ta không được chọn nơi mình sinh ra, nhưng ta được chọn cách mình sẽ sống
          </p>
        </div>
      </div>

      <h3 class="text-info mt-2">Chuyên mục</h3>
      <ul class="list-group">
        <li class="list-group-item active bg-info d-flex justify-content-between align-items-center">
          <a class="nav-link" href="#">Chế độ tập</a>
          <span cLass="badge bg-primary rounded-pill">12</span>
        </li>

        <li class="list-group-item d-flex justify-content-between align-items-center">
          <a class="nav-link" href="#">Chế độ dinh dưỡng</a>
          <span class="badge bg-primary rounded-pill">15</span>
        </li>

        <li class="list-group-item d-flex justify-content-between align-items-center">
          <a class="nav-link" href="#">Cẩm nang cuộc sống</a>
          <span class="badge bg-primary rounded-pill">99</span>
        </li>
      </ul>
    <!-- </div> -->
    </aside>

    <!-- Nội dung chính bên phải -->
    <article class="col-md-8 p-3">
      <h1>Nội dung chính</h1>
      <p>Đây là khu vực chứa nội dung chính của trang web.</p>
    </article>
  </section>
</div>

    </template>
    
    <script>
    export default {
      name: "Lab1Bai3",
    }
    </script>
    
    <style>
    
    </style>