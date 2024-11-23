<template>
    <div id="app">
    <h1>Xếp loại học sinh</h1>

    <label for="dtb">Nhập điểm trung bình:</label>
    <input type="number" v-model="dtb" id="dtb" step="0.1" min="0" max="10" placeholder="Nhập điểm trung bình">

    <button class="btn btn-dark" @click="calculateGrade">Xếp loại</button>

    <p v-if="grade !== ''">Xếp loại: {{ grade }}</p>
  </div>

</template>

<script>
export default {
name: "Lab5Bai4",
}
</script>
<script setup>
import { ref } from 'vue';
const dtb = ref(null);
const grade = ref("");
const calculateGrade = () => {
    const score = parseFloat(dtb.value);
    if (score < 5.0) {
    grade.value = "Yếu";
  } else if (score < 6.5) {
    grade.value = "Trung bình";
  } else if (score < 8.0) {
    grade.value = "Khá";
  } else if (score < 9.0) {
    grade.value = "Giỏi";
  } else if (score >= 9.0) {
    grade.value = "Xuất sắc";
  } else {
    grade.value = "Điểm không hợp lệ!";
  }
}
</script>

<style>

</style>