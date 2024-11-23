<template>
  <div class="container my-5">
    <div class="card p-5 shadow-lg border-0 rounded-4" style="max-width: 700px; margin: auto;">
      <h2 class="text-center text-primary fw-bold mb-4">Thêm Bài Viết</h2>
      <form>
        <!-- Tiêu Đề -->
        <div class="mb-3">
          <label for="title" class="form-label fw-semibold">Tiêu Đề</label>
          <input type="text" class="form-control" id="title" placeholder="Nhập tiêu đề bài viết" required>
        </div>

        <!-- Nội Dung -->
        <div class="mb-3">
          <label for="content" class="form-label fw-semibold">Nội Dung</label>
          <textarea class="form-control" id="content" rows="5" placeholder="Nhập nội dung bài viết" required></textarea>
          <!-- Công cụ soạn thảo đơn giản -->
          <div class="d-flex gap-2 mt-2">
            <button type="button" class="btn btn-light border fw-semibold px-3" title="Bold"><i class="bi bi-type-bold"></i></button>
            <button type="button" class="btn btn-light border fw-semibold px-3" title="Italic"><i class="bi bi-type-italic"></i></button>
            <button type="button" class="btn btn-light border fw-semibold px-3" title="Underline"><i class="bi bi-type-underline"></i></button>
          </div>
        </div>

        <!-- Hình Ảnh -->
        <div class="mb-3">
          <label for="image" class="form-label fw-semibold">Hình Ảnh</label>
          <input type="file" class="form-control" id="image" @change="previewImage">
          <!-- Xem trước hình ảnh -->
          <div v-if="imageUrl" class="mt-3 text-center">
            <img :src="imageUrl" alt="Image Preview" class="img-fluid rounded" style="max-height: 200px;">
          </div>
        </div>

        <!-- Nút Lưu -->
        <button type="submit" class="btn btn-primary w-100 fw-semibold py-2">Lưu</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddEditPost",
};
</script>

<style>
/* Tạo hiệu ứng khi hover vào nút Lưu */
.btn-primary:hover {
  background-color: #0056b3;
  transition: background-color 0.3s ease;
}

/* Nút công cụ soạn thảo */
.btn-light:hover {
  background-color: #e9ecef;
  transition: background-color 0.3s ease;
}
</style>
