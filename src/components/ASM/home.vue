<template>
  <div>

    <!-- Hero Section with Overlay and Parallax Background -->
    <section class="hero-section text-center d-flex align-items-center position-relative">
      <div class="container position-relative z-index-1">
        <h1 class="display-3 fw-bold text-white">Welcome to My Premium Blog</h1>
        <p class="lead text-light">Dive into the world of modern insights, exclusive stories, and cutting-edge trends.</p>
        <a href="#" class="btn btn-outline-light btn-lg mt-4">Explore Now</a>
      </div>
      <div class="overlay"></div>
    </section>

    <!-- Featured Articles Section with Full Background Images -->
    <section class="bg-light text-center py-5">
      <div class="container">
        <h2 class="text-dark fw-bold mb-5 display-5">Công nghệ</h2>
        <div class="row g-4">
          <div class="col-lg-4">
            <div class="card border-0 shadow-lg rounded-lg overflow-hidden position-relative text-white hover-zoom">
              <img src="https://topdev.vn/blog/wp-content/uploads/2024/10/ios-18-co-gi-moi-534x462.jpg" class="card-img-full img-fluid" alt="iOS 18">
              <div class="overlay-content p-4">
                <div class="badge bg-primary text-white mb-2">Tin mới</div>
                <h5 class="card-title fw-bold">iOS 18 có gì mới? Có nên cập nhật iOS 18 cho iPhone của bạn?</h5>
                <p class="card-text">Mỗi bản cập nhật iOS của Apple đều làm dân nghiện táo xôn xao, liệu chiếc iPhone của bạn có còn nằm trong danh sách được “lên đời”...</p>
                <a href="#" class="btn btn-outline-light w-100">Đọc thêm</a>
              </div>
            </div>
          </div>
          <!-- Các thẻ card tiếp theo sẽ giống như thẻ đầu tiên -->
          <div class="col-lg-4">
            <div class="card border-0 shadow-lg rounded-lg overflow-hidden position-relative text-white hover-zoom">
              <img src="https://topdev.vn/blog/wp-content/uploads/2024/10/gamma-ai.jpg" class="card-img-full" alt="Gamma AI">
              <div class="overlay-content p-4">
                <div class="badge bg-success text-white mb-2">Trending</div>
                <h5 class="card-title fw-bold">Gamma AI là gì? Cách tạo slide chuyên nghiệp chỉ trong vài phút</h5>
                <p class="card-text">Bạn đã bao giờ mất hàng giờ đồng hồ để thiết kế một bài thuyết trình mà vẫn chưa hài lòng với kết quả? Việc dành quá nhiều thời gian cho việc...</p>
                <a href="#" class="btn btn-outline-light w-100">Đọc thêm</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card border-0 shadow-lg rounded-lg overflow-hidden position-relative text-white hover-zoom">
              <img src="https://topdev.vn/blog/wp-content/uploads/2024/10/power-bi-la-gi-265x198.jpg" class="card-img-full img-fluid" alt="Power BI">
              <div class="overlay-content p-4">
                <div class="badge bg-warning text-white mb-2">Tác giả chọn cho bạn</div>
                <h5 class="card-title fw-bold">Power BI là gì? Vì sao doanh nghiệp nên sử dụng PBI?</h5>
                <p class="card-text">Power BI nổi lên như một công cụ mạnh mẽ giúp doanh nghiệp không chỉ phân tích dữ liệu mà còn trực quan hóa và báo cáo dễ dàng...</p>
                <a href="#" class="btn btn-outline-light w-100">Đọc thêm</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonial Section with Improved Layout -->
    <section class="testimonials-section bg-primary text-white text-center py-5 position-relative">
      <div class="container position-relative z-index-1">
        <h2 class="fw-bold mb-5 display-5">Tác giả đã nói gì</h2>
        <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <p class="lead">"This blog offers unparalleled insights and quality content!"</p>
              <small>- Alex Johnson</small>
            </div>
            <div class="carousel-item">
              <p class="lead">"A true gem for developers and designers alike."</p>
              <small>- Sarah Williams</small>
            </div>
            <div class="carousel-item">
              <p class="lead">"Incredibly helpful articles that drive my creativity."</p>
              <small>- Mike Brown</small>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="overlay-dark"></div>
    </section>

    <!-- Stylish Newsletter Signup Section -->
    <section class="newsletter-section bg-gradient text-white text-center py-5">
      <div class="container">
        <h2 class="fw-bold display-5">Stay Updated!</h2>
        <p class="mb-4">Subscribe to our newsletter and never miss an update.</p>
        <form class="d-flex justify-content-center">
          <input type="email" class="form-control form-control-lg w-50 shadow-sm" placeholder="Enter your email">
          <button class="btn btn-warning btn-lg ms-2">Đăng ký nhận tin</button>
        </form>
      </div>
    </section>

    <!-- Main Content Section with Enhanced Sidebar -->
    <div class="container my-5">
      <div class="row">
        <!-- Post List -->
        <div class="col-lg-8">
          <h2 class="mb-4 text-center text-primary fw-bold">Bài viết mới nhất</h2>
          <div class="row g-4">
            <div class="col-md-6">
              <div class="card border-0 shadow-lg rounded-lg h-100 hover-effect">
                <div class="overflow-hidden rounded-top">
                  <img src="../../assets/orange_300x300.jpg" class="card-img-top img-fluid hover-zoom" alt="Sample Image">
                </div>
                <div class="card-body">
                  <h5 class="card-title text-dark fw-bold">JavaScript Essentials</h5>
                  <p class="card-text text-muted">Master JavaScript with our comprehensive guide...</p>
                  <router-link to="/ASM/PostDetail" class="btn btn-outline-primary w-100 fw-semibold">Read More</router-link>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card border-0 shadow-lg rounded-lg h-100 hover-effect">
                <div class="overflow-hidden rounded-top">
                  <img src="../../assets/sesameoil_300x300.jpg" class="card-img-top img-fluid hover-zoom" alt="Sample Image">
                </div>
                <div class="card-body">
                  <h5 class="card-title text-dark fw-bold">Design Tools 2024</h5>
                  <p class="card-text text-muted">The ultimate tools for a designer's toolkit...</p>
                  <router-link to="/ASM/PostDetail" class="btn btn-outline-primary w-100 fw-semibold">Read More</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar with a Sleek Look -->
        <div class="col-lg-4">
          <div class="sidebar-section p-4 mb-4 bg-light rounded-lg shadow-sm">
            <h5 class="text-primary fw-bold">About Me</h5>
            <p class="text-muted">I'm a senior developer passionate about sharing knowledge. Discover insights from a pro's perspective.</p>
          </div>
          <div class="sidebar-section p-4 mb-4 bg-white rounded-lg shadow-sm">
            <h5 class="text-primary fw-bold">Categories</h5>
            <ul class="list-unstyled">
              <li><a href="#" class="text-dark">Web Development</a></li>
              <li><a href="#" class="text-dark">Design</a></li>
              <li><a href="#" class="text-dark">Growth Hacks</a></li>
              <li><a href="#" class="text-dark">Tech Innovations</a></li>
            </ul>
          </div>
          <div class="sidebar-section p-4 bg-white rounded-lg shadow-sm">
            <h5 class="text-primary fw-bold">Popular Topics</h5>
            <ul class="list-unstyled">
              <li><a href="#" class="text-dark">AI & ML Trends</a></li>
              <li><a href="#" class="text-dark">Blockchain Insights</a></li>
              <li><a href="#" class="text-dark">Cybersecurity Essentials</a></li>
              <li><a href="#" class="text-dark">Future of Web 3.0</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer with Premium Feel and Social Links -->
    <footer class="footer-section bg-dark text-white py-4">
      <div class="container text-center">
        <p class="text-light mb-0">© 2024 My Premium Blog. All rights reserved.</p>
        <p class="text-light mb-0">Connect with us on <a href="#" class="text-primary">LinkedIn</a>, <a href="#" class="text-primary">Twitter</a>, and <a href="#" class="text-primary">GitHub</a>.</p>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "ASMhome",
};
</script>

<style>


/* Gradient Background */
.bg-gradient {
  background: linear-gradient(135deg, #ff6f61, #ffcc33);
}

/* Hover Effects */
.hover-effect:hover {
  transform: scale(1.03);
  transition: transform 0.3s ease;
}
.hover-zoom:hover {
  transform: scale(1.08);
  transition: transform 0.3s ease;
}

/* Footer Links */
.footer-section a {
  color: #ffcc33;
  text-decoration: underline;
}
.footer-section a:hover {
  color: #ff6f61;
}
/* Hero Section */
.hero-section {
  background-image: url('../../assets/17525.jpg');
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: -1000;
}

/* Full Image Styling for Card */
.card-img-full {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.4); /* Làm tối hình để nổi chữ */
  position: absolute;
  top: 0;
  left: 0;
}

/* Overlay Content */
.overlay-content {
  position: relative;
  z-index: 1;
  background: rgb(0 0 0 / 0%);
  color: #ffffff;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 100%;
}

/* Badge Styling */
.badge {
  font-size: 0.9rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
}

</style>
