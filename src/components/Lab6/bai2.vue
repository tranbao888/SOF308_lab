<template>
    <div class="container">
        <label for="dtb">Nhập tháng bất kì:</label>
        <input type="number" v-model="step" id="dtb" step="1" min="0" max="12" placeholder="Nhập tháng bất kỳ">
    </div>
    <button class="btn btn-dark" @click="calculateMonth">Gửi</button>
    <!-- <p v-if="step === 1">Xuân</p>
 <p v-else-if="step === 2">Hạ</p>
 <p v-else-if="step === 3">Thu</p>
  <p v-else>Đông</p> -->
  <p v-if="step !== ''">Mùa: {{ month }}</p>

</template>

<script>
export default {
name: "Lab6Bai2",
}
</script>
<script setup>
import { ref } from 'vue';
    const step = ref(null);
    const month = ref("");
const calculateMonth = () => {
    if(step.value < 1 || step.value > 12){
        month.value = "Vui lòng nhập tháng từ 1 đến 12"
    }else if(step.value<=3){
        month.value = "Xuân"
    }else if(step.value<=6){
        month.value = "Hạ"
    }else if(step.value<=9){
        month.value = "Thu"
    }else{
        month.value = "Đông"
    }
}
</script>

<style>

</style>