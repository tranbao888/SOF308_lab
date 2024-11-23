<template>
    <nav class="navbar navbar-expand-lg" style="background-color: #e3f2fd;">
       <div class="container">
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
   
     <div class="container mt-3">
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
  </div>
   <div class="container mt-4">
    <!-- Section Về Tôi -->
    <div class="row mb-4">
      <div class="col-md-3">
        <h5 class="text-info"><b>Về tôi</b></h5>
        <div class="card">
          <img src="/images/avatar.png" class="card-img-top" alt="Profile Image" />
          <div class="card-body">
            <p class="card-text"><b>Giới thiệu bản thân</b></p>
            <p class="card-text">
              T.S. Trần Hoàng, Tổ chức Tư vấn sức khỏe quốc tế đắc lực
              <br />
              Châm ngôn: Ta không được chọn nơi mình sinh ra, nhưng ta được chọn cách mình sẽ sống.
            </p>
          </div>
        </div>
      </div>

      <!-- Section Blog của tôi -->
      <div class="col-md-9">
        <h5 class="text-info"><b>Blog của tôi</b></h5>
        <div class="container">
            <div class="row">
            <div class="col-md-6 mb-3">
  <div class="card">
    <div class="card-body border bg-light">
      <h6 class="card-title">
        <b>Phương pháp tập Pilates giúp phục hồi chấn thương cột sống</b>
      </h6>
    </div>
    <div class="card-body">
      <p class="card-text">
        <img src="../../assets/tap-piltes.jpg" class="card-img-top mb-3" alt="Main Blog Image" />
        Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt, Pilates giúp cơ bắp và các khớp mạnh mẽ hơn.
      </p>
    </div>
  </div>
</div>

<div class="col-md-6">
  <ul class="list-group">
    <li class="list-group-item d-flex align-items-center">
      <img src="/images/corevalue.jpg" alt="Post Image" style="width: 100px; height: 95px; object-fit: cover;" class="me-3">
      <div>
        <p class="mb-1"><b>Biết ơn đời, đời sẽ thương ta</b></p>
        <span class="text-muted">💬 30</span>
      </div>
    </li>
    <li class="list-group-item d-flex align-items-center">
      <img src="/images/orange_300x300.jpg" alt="Post Image" style="width: 100px; height: 100px; object-fit: cover;" class="me-3">
      <div>
        <p class="mb-1"><b>9 tác dụng tuyệt vời của quả cam</b></p>
        <span class="text-muted">💬 28</span>
      </div>
    </li>
    <li class="list-group-item d-flex align-items-center">
      <img src="/images/sesameoil_300x300.jpg" alt="Post Image" style="width: 100px; height: 100px; object-fit: cover;" class="me-3">
      <div>
        <p class="mb-1"><b>10 công dụng bất ngờ từ đâu dứa</b></p>
        <span class="text-muted">💬 15</span>
      </div>
    </li>
    <li class="list-group-item d-flex align-items-center">
      <img src="/images/spinach_300x300.jpg" alt="Post Image" style="width: 100px; height: 100px; object-fit: cover;" class="me-3">
      <div>
        <p class="mb-1"><b>Lợi ích khi ăn rau mỗi ngày</b></p>
        <span class="text-muted">💬 12</span>
      </div>
    </li>
  </ul>
</div>

        </div>
        <div class="text-center mt-3 ">
    <button class="btn btn-info">Xem thêm</button>
  </div>
        </div>
      </div>
    </div>
    <div class="container mt-4">
    <div class="row mb-4">
      <!-- Tabs for "Đọc nhiều" and "Xem nhiều" on the left side -->
      <div class="col-md-3">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <a class="nav-link text-info active" id="read-tab" data-bs-toggle="tab" href="#read" role="tab" aria-controls="read" aria-selected="true"><b>Đọc nhiều</b></a>
          </li>
          <li class="nav-item" role="presentation">
            <a class="nav-link text-info" id="watch-tab" data-bs-toggle="tab" href="#watch" role="tab" aria-controls="watch" aria-selected="false"><b>Xem nhiều</b></a>
          </li>
        </ul>

        <div class="tab-content" id="myTabContent">
          <!-- Nội dung Đọc nhiều -->
          <div class="tab-pane fade show active" id="read" role="tabpanel" aria-labelledby="read-tab">
            <ul class="list-group list-group-flush mt-3">
              <li class="list-group-item d-flex align-items-center">
                <img src="/images/corevalue.jpg" alt="Image 1" style="width: 50px; height: 50px; object-fit: cover;" class="me-3">
                <div>Biết ơn đời, đời sẽ thương ta</div>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <img src="/images/orange_300x300.jpg" alt="Image 2" style="width: 50px; height: 50px; object-fit: cover;" class="me-3">
                <div>10 công dụng bất ngờ từ dưa dứa</div>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <img src="/images/spinach_300x300.jpg" alt="Image 3" style="width: 50px; height: 50px; object-fit: cover;" class="me-3">
                <div>Lợi ích khi ăn rau mỗi ngày</div>
              </li>
            </ul>
          </div>

          <!-- Nội dung Xem nhiều -->
          <div class="tab-pane fade" id="watch" role="tabpanel" aria-labelledby="watch-tab">
            <ul class="list-group list-group-flush mt-3">
              <li class="list-group-item d-flex align-items-center">
                <img src="/images/video1.jpg" alt="Video 1" style="width: 50px; height: 50px; object-fit: cover;" class="me-3">
                <div>Đi xa hơn để trưởng thành hơn</div>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <img src="/images/video2.jpg" alt="Video 2" style="width: 50px; height: 50px; object-fit: cover;" class="me-3">
                <div>Chút tâm tư những ngày cuối năm</div>
              </li>
              <li class="list-group-item d-flex align-items-center">
                <img src="/images/video3.jpg" alt="Video 3" style="width: 50px; height: 50px; object-fit: cover;" class="me-3">
                <div>Ước gì được trở về tuổi thơ</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Section Video - Đừng bỏ lỡ on the right side -->
      <div class="col-md-9">
        <h5 class="text-info text-center"><b>VIDEO - ĐỪNG BỎ LỠ</b></h5>
      <div class="row">
        <!-- Vòng lặp hiển thị video -->
        <div class="col-md-6 mb-3" v-for="video in videos" :key="video.id">
          <div class="card h-100">
            <iframe
              :src="video.url"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              class="card-img-top"
              style="width: 100%; height: 200px;"
            ></iframe>
            <div class="card-body">
              <h6 class="card-title">{{ video.title }}</h6>
              <p class="card-text">{{ video.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Button Xem thêm dưới cùng -->
    <div class="text-center mt-3">
      <button class="btn btn-info">Xem thêm</button>
    </div>
      </div>
    </div>

    
  </div>


    </div>
    <footer class="bg-dark text-center text-lg-start mt-5">
    <div class="text-center text-light p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2024 PY00168
    </div>
  </footer>
   </template>
   
   <script>
   export default {
  name: "Lab3Bai2",
  data() {
    return {
      videos: [
        {
          id: 1,
          url: "https://www.youtube.com/embed/iy53wPnNCYU",
          title: "Đi xa hơn để trưởng thành hơn",
          description: "Tuổi trẻ chỉ nghĩ đến những chuyến đi...",
        },
        {
          id: 2,
          url: "https://www.youtube.com/embed/-Q1e9ky_wsA",
          title: "Chút tâm tư những ngày cuối năm",
          description: "Guồng quay cuộc sống dẫn lối...",
        },
        {
          id: 3,
          url: "https://www.youtube.com/embed/c7asCTKi7RQ",
          title: "Ước gì được trở về tuổi thơ",
          description: "Tuổi thơ là một miền ký ức...",
        },
        {
          id: 4,
          url: "https://www.youtube.com/embed/yWLVmnXMb8Q",
          title: "Ba người thầy vĩ đại",
          description: "Học hỏi từ ba người thầy lớn...",
        },
      ],
    };
  },
};
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