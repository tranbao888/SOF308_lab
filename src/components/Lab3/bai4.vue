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
  
    <div class="container">
      <section class="row">
        <!-- Nội dung chính bên phải -->
        <article class="col-8 p-2">
          <!-- Main Post -->
          <div class="col-12 mx-2">
            <h5 class="fs-3 text-info text-center mt-2">
              Phương pháp tập Pilates giúp phục hồi chấn thương cột sống
            </h5>
            <img src="/images/tap-pilates1.jpg" alt="" style="width: 850px" />
            <p class="fs-6 fw-lighter">
              Tập Pilates có thể văn còn khá xa lạ với người Việt, nhưng tại các
              nước phương Tây thì đây chinh là phương pháp tập thể dục giúp duy
              trị vớc dáng, tăng cường ý chỉ và cải thiện sự linh hoat, dẻo dai
              cho người tập. Đặc biệt, các bài tập Pilates còn có khả năng trị đau
              lưng, là giải pháp hữu hiệu để phục hồi chấn thương cột sống. Sau
              đây hãy cùng tim hiểu các phương pháp tập luyện này giúp phục hỏi
              chăn thương cột sống nhanh chóng nhé!
            </p>
  
            <h5 class="fs-5 fw-bold mt-2">
              Pilates giúp phục hồi chấn thương cột sống nhanh chóng
            </h5>
            <p class="fs-6 fw-lighter">
              Một trong những căn bệnh ngày càng phố biến, đặc biệt là dẫn văn
              phòng, đó là đau lưng, thoát vị đĩa đệm. Tuy nhiên, nếu điều trị
              không đúng cách có thế dẫn đến nhiều biến chứng nguy hiểm, bao gồm:
              Vị dụ, điều trị bằng laser không đúng cách hoặc tập yoga không đúng
              cách có thể khiến bệnh nhân nằm liệt giường
            </p>
            <img src="/images/tap-piltes.jpg" alt="" style="width: 850px" />
  
            <h5 class="fs-5 fw-bold mt-2">Phương pháp tập Pilates Cat Cow</h5>
            <p class="fs-6 fw-lighter">Các bước thực hiện :</p>
            <ul>
              <li>
                Bắt đầu với tư thế 4 điểm. Vai và cổ tay của bạn phải thẳng hàng
                và vuông góc với thảm, lưng của bạn phải bằng phẳng và xương châu
                của ban phải cản đối.
              </li>
              <li>Hít vào, vòng lưng, nâng cảm lên, mở ròng ngực.</li>
              <li>
                Thở ra, cong xương cut, nâng cong lưng và đưa cẩm vẽ găn khoang
                ngực
              </li>
              <li>Lặp đi lặp lại động tác từ 5-7 làn.</li>
            </ul>
  
            <h5 class="fs-5 fw-bold mt-2">Lời kết</h5>
            <p class="fs-6 fw-lighter">
              Trên đây là phương pháp tập Pilates giúp phục hồi chấn thương cột
              sống nhanh chóng. Để đạt được kết quả tập luyện như mong muốn, bạn
              căn duy trì chế độ tập luyện đều đặn, thực hiện đúng động tác, kết
              hợp cùng chế độ ăn uống khoa học.
            </p>
          </div>
        </article>
  
        <aside class="col-4 p-2 rounded">
          <h5 class="fs-5 fw-bold mt-2">Bình luận bài viết tại đây</h5>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Nhập bình luận của bạn"
          ></textarea>
  
          <!-- View More Button -->
          <div class="mt-2">
            <button class="view-more-btn text-white rounded bg-success">
              Gửi bình luận
            </button>
  
            <h5 class="fs-5 fw-bold mt-3">Danh sách các bình luận:</h5>
            <ul>
              <li class="fs-6 fw-bold mt-2">
                Bình An:
                <h6 class="fs-6 fw-lighter">Bài viết rất hữu ít</h6>
              </li>
              <li class="fs-6 fw-bold mt-2">
                Bình An:
                <h6 class="fs-6 fw-lighter">Cảm ơn những chia sẽ bổ ích</h6>
              </li>
            </ul>
          </div>
        </aside>
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
    name: "Lab3Bai4",
  };
  </script>
  
  <style></style>
  