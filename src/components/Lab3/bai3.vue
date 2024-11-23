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
               <a class="nav-link custom-hover" href="#">
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
    <div class="container">
      <section class="row">
  
        <!-- Sidebar thông tin cá nhân bên trái -->
        <aside class="col-4 p-2 rounded">
          <!-- <div class="col-sm-4"> -->
          <h3 class="text-info mt-2">Chuyên mục</h3>
          <ul class="list-group">
  <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center hover-bg-info">
    <a href="#" class="text-decoration-none text-dark ">Chế độ tập</a>
    <span class="badge bg-primary rounded-pill">12</span>
  </li>

  <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center hover-bg-info">
    <a href="#" class="text-decoration-none text-dark">Chế độ dinh dưỡng</a>
    <span class="badge bg-primary rounded-pill">15</span>
  </li>

  <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-center hover-bg-info">
    <a href="#" class="text-decoration-none text-dark">Cẩm nang cuộc sống</a>
    <span class="badge bg-primary rounded-pill">99</span>
  </li>
</ul>
  
          <div class="card mt-3">
            <div class="border-bottom bg-light">
              <h3 class="text-info m-2">Bài viết nổi bật</h3>
            </div>
            <!-- bài viết 1 -->
            <div class="d-flex align-items-start m-2">
              <img
                src="/images/spinach_300x300.jpg"
                class="rounded-circle me-3"
                alt="Rau xanh"
                style="width: 100px"
              />
              <div>
                <h6 class="fw-bold mb-1">Lợi ích khi ăn rau mỗi ngày</h6>
                <p class="text-muted mb-0">
                  Tiêu thụ rau xanh hàng ngày sẽ giúp tăng cường thể lực, kiểm
                  soát cân nặng, ngăn ngừa ung thư...
                </p>
              </div>
            </div>
  
            <!-- bài viết 2 -->
            <div class="d-flex align-items-start m-2">
              <img
                src="/images/orange_300x300.jpg"
                class="rounded-circle me-3"
                alt="Quả cam"
                style="width: 100px"
              />
              <div>
                <h6 class="fw-bold mb-1">9 tác dụng tuyệt vời của quả cam</h6>
                <p class="text-muted mb-0">
                  Cam tự hào về khả năng chống lão hóa mạnh mẽ nhờ hàm lượng chất
                  chống oxy hóa cao...
                </p>
              </div>
            </div>
  
            <!-- Bài viết 3 -->
            <div class="d-flex align-items-start m-2">
              <img
                src="/images/sesameoil_300x300.jpg"
                class="rounded-circle me-3"
                alt="Dầu dừa"
                style="width: 100px"
              />
              <div>
                <h6 class="fw-bold mb-1">10 công dụng bất ngờ từ dầu dừa</h6>
                <p class="text-muted mb-0">
                  Dầu dừa như một loại kem dưỡng ẩm tự nhiên cho cơ thể, giúp việc
                  sản xuất collagen...
                </p>
              </div>
            </div>
          </div>
          <br />
        </aside>
  
        <article class="col-md-8 p-3 rounded">
  <h2 class="text-info mt-2">Tất cả bài viết</h2>

  <!-- Các mục bài viết trong một hàng -->
  <div class="row g-4"> <!-- Tăng khoảng cách giữa các cột và hàng -->
    <!-- Bài viết 1 -->
    <div class="col-md-6">
      <div class="card h-100 shadow-sm border-0">
        <div class="card-body">
          <h5 class="card-title fs-6 fw-bold mb-2">
            Phương pháp tập Pilates giúp phục hồi chấn thương cột sống
            <span class="text-muted ms-2"><i class="bi bi-chat-fill"></i>💬 16</span>
          </h5>
          <img src="/images/tap-piltes.jpg" alt="Phục hồi chấn thương" class="img-fluid rounded mb-3" />
          <p class="card-text text-muted">
            Ngoài việc giúp duy trì vóc dáng, cải thiện sự linh hoạt, dẻo dai cho người tập, Pilates giúp cơ bắp và các khớp mọc dài hơn, kéo giãn hơn...
          </p>
        </div>
      </div>
    </div>

    <!-- Bài viết 2 -->
    <div class="col-md-6">
      <div class="card h-100 shadow-sm border-0">
        <div class="card-body">
          <h5 class="card-title fs-6 fw-bold mb-2">
            Đây là những gì 1 giờ Tập Pilates có thể làm cho cơ thể của bạn
            <span class="text-muted ms-2"><i class="bi bi-chat-fill"></i>💬 8</span>
          </h5>
          <img src="/images/tap-pilates1.jpg" alt="Tập Pilates" class="img-fluid rounded mb-3" />
          <p class="card-text text-muted">
            Được thiết kế để xây dựng cơ bắp săn chắc, khỏe mạnh hơn, bài tập này đã trở thành một cái tên quen thuộc nhờ nhiều người nổi tiếng theo dõi.
          </p>
        </div>
      </div>
    </div>

    <!-- Bài viết 3 -->
    <div class="col-md-6">
      <div class="card h-100 shadow-sm border-0">
        <div class="card-body">
          <h5 class="card-title fs-6 fw-bold mb-2">
            Tập Pilates có thể cải thiện sức khỏe tim mạch của bạn
            <span class="text-muted ms-2"><i class="bi bi-chat-fill"></i>💬 5</span>
          </h5>
          <img src="/images/tim-mach.jpg" alt="Sức khỏe tim mạch" class="img-fluid rounded mb-3" />
          <p class="card-text text-muted">
            Tập Pilates không chỉ giúp bạn có một cơ thể khỏe mạnh và linh hoạt mà còn có nhiều lợi ích cho sức khỏe tim mạch...
          </p>
        </div>
      </div>
    </div>

    <!-- Bài viết 4 -->
    <div class="col-md-6">
      <div class="card h-100 shadow-sm border-0">
        <div class="card-body">
          <h5 class="card-title fs-6 fw-bold mb-2">
            EAT CLEAN: Nên Và Không Nên Ăn Thực Phẩm Nào?
            <span class="text-muted ms-2"><i class="bi bi-chat-fill"></i>💬 3</span>
          </h5>
          <img src="/images/eat-clean.png" alt="Eat Clean" class="img-fluid rounded mb-3" />
          <p class="card-text text-muted">
            Chế độ ăn Eat Clean nên và không nên ăn gì để cân bằng tháp dinh dưỡng cho cơ thể?
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Nút phân trang -->
  <div class="text-center mt-4">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">&larr;</a>
      </li>
      <li class="page-item active"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">&rarr;</a>
      </li>
    </ul>
  </div>
</article>




      </section>
  
      
    </div>
    <footer class="bg-dark text-center text-lg-start mt-5">
    <div class="text-center text-light p-3" style="background-color: rgba(0, 0, 0, 0.2);">
      © 2024 PY00168
    </div>
  </footer>
  </template>
  
  <script>
  export default {
    name: "Lab3Bai3",
  };
  </script>
  
  <style>
  .custom-hover {
    position: relative;
    color: #333; /* Màu chữ mặc định */
    transition: color 0.3s;
  }
  
  .custom-hover::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -3px; /* Khoảng cách giữa underline và text */
    height: 2px; /* Độ dày của underline */
    background-color: transparent;
    transition: background-color 0.3s;
  }
  
  .custom-hover:hover {
    color: #28a745; /* Màu chữ khi hover */
  }
  
  .custom-hover:hover::after {
    background-color: #28a745; /* Màu underline khi hover */
  }
  .hover-bg-info:hover {
  background-color: cyan;
  color: white; /* Đổi màu chữ để tương phản tốt hơn */
}
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
