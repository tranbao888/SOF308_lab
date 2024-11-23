<template>
  <div class="container my-5">
    <h2 class="text-center text-primary fw-bold mb-4">Danh Sách Bài Viết</h2>
    <div class="d-flex justify-content-between align-items-center mb-3">
      <!-- Nút thêm bài viết mới -->
      <button class="btn btn-primary fw-semibold px-4 py-2">
        <i class="bi bi-plus-circle me-2"></i>Thêm Bài Viết Mới
      </button>
      <input type="text" class="form-control w-25" placeholder="Tìm kiếm bài viết...">
    </div>

    <ul class="list-group shadow-sm rounded-3">
      <!-- Mỗi bài viết trong danh sách -->
      <li class="list-group-item d-flex justify-content-between align-items-center py-3">
        <div class="d-flex align-items-center">
          <i class="bi bi-file-text me-3 text-primary" style="font-size: 1.5rem;"></i>
          <a href="/ASM/AddEditPost" class="text-decoration-none text-dark fw-semibold">
            Tiêu đề bài viết 1
          </a>
        </div>
        <div>
          <button class="btn btn-warning btn-sm me-2 px-3 fw-semibold">Sửa</button>
          <button class="btn btn-danger btn-sm px-3 fw-semibold">Xóa</button>
        </div>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center py-3">
        <div class="d-flex align-items-center">
          <i class="bi bi-file-text me-3 text-primary" style="font-size: 1.5rem;"></i>
          <a href="/ASM/AddEditPost" class="text-decoration-none text-dark fw-semibold">
            Tiêu đề bài viết 2
          </a>
        </div>
        <div>
          <button class="btn btn-warning btn-sm me-2 px-3 fw-semibold">Sửa</button>
          <button class="btn btn-danger btn-sm px-3 fw-semibold">Xóa</button>
        </div>
      </li>
      <!-- Thêm các bài viết khác tương tự -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "PostList",
};
</script>

<style>
/* Tạo hiệu ứng khi hover vào mỗi bài viết */
.list-group-item:hover {
  background-color: #f8f9fa;
  transition: background-color 0.3s ease;
}

/* Icon bài viết */
.bi-file-text {
  font-size: 1.5rem;
  color: #0d6efd;
}

/* Hiệu ứng cho nút thêm bài viết mới */
.btn-primary:hover {
  background-color: #0056b3;
  transition: background-color 0.3s ease;
}
</style>
