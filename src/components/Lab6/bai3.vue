<template>
    <div class="container mt-5">
      <h1 class="text-center">Kiến thức sức khỏe cộng đồng</h1>
      <div class="row">
        <div
          class="col-sm-4 mb-4"
          v-for="(item, index) in items"
          :key="index"
        >
          <div class="card">
            <!-- Hình ảnh -->
            <img
              :src="item.image"
              class="img-fluid"
              alt="Hình ảnh"
            />
            <!-- Nội dung thẻ -->
            <div class="card-body">
              <h3 class="card-title">{{ item.title }}</h3>
              <p class="card-text">{{ item.content }}</p>
              <button class="btn btn-info">Xem chi tiết</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
name: "Lab6Bai3",
data() {
    return {
      items: [
        {
          image: "/images/orange_300x300.jpg",
          title: "8 loại rau củ quả giàu canxi",
          content:
            "Cải xoăn, cải bó xôi và các loại rau xanh khác chứa lượng lớn canxi cần thiết cho cơ thể.",
        },
        {
          image: "/images/sesameoil_300x300.jpg",
          title: "Các loại gia vị tốt cho sức khỏe",
          content:
            "Hành, tỏi và các loại gia vị tự nhiên giúp tăng cường sức khỏe và hỗ trợ hệ tiêu hóa.",
        },
        {
          image: "/images/spinach_300x300.jpg",
          title: "9 loại đậu bổ dưỡng nên dùng nhiều",
          content:
            "Đậu đỏ, đậu xanh và đậu đen cung cấp dinh dưỡng quan trọng và hỗ trợ tim mạch.",
        },
      ],
    };
  },
}
</script>

<style>

</style>