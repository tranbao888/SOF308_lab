<template>
    <div class="container mt-5 ">
        <div class="row justify-content-center">
            <div class="col-md-6 border">
                <h3 class="text-center mb-4 mt-3">Quản lý công việc</h3>
                <form @submit.prevent="addList" id="taskForm" class="mb-4">
                    <div class="mb-3">
                        <label for="taskName" class="form-label">Tên công việc:</label>
                        <input type="text" class="form-control" id="taskName" v-model="newToDo" placeholder="Nhập tên công việc">
                    </div>
                    <button type="submit" class="btn btn-primary w-100">Thêm công việc</button>
                </form>
                <ul class="list-group" id="taskList">
                    <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(job,index) in jobs"
                        :key="index">
                        {{ job }}
                        <button class="btn btn-danger btn-sm delete-task" @click="removeList">Xóa</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </template>

<script>
export default {
name: "Lab7Bai3",
}
</script>
<script setup>
import { ref } from 'vue';
    const newToDo = ref('');
    const jobs = ref([
        'Ăn sáng',
        'Đi học',
        'Chơi bóng rổ'
    ]);

    const addList = () => {
        if(newToDo.value.trim()) {
            jobs.value.push(newToDo.value.trim());
            newToDo.value = '';
        }
    }

    const removeList = (index) => {
        jobs.value.splice(index, 1);
    }
</script>
<style>

</style>