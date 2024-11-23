<template>
    <div class="container mt-5">
        <div class="row">
            <!-- Form Thêm Học Sinh -->
            <div class="col-md-4">
                <h5>Thêm học sinh</h5>
                <form @submit.prevent="submitForm">
                    <div class="mb-3">
                        <label for="name" class="form-label">Họ tên:</label>
                        <input type="text" class="form-control" id="name" v-model="student.name" placeholder="Nhập họ tên">
                    </div>
                    <div class="mb-3">
                        <label for="score" class="form-label">Điểm:</label>
                        <input type="number" class="form-control" id="score" v-model="student.score" placeholder="Nhập điểm">
                    </div>
                    <div class="mb-3">
                        <label for="dob" class="form-label">Ngày sinh:</label>
                        <input type="date" class="form-control" v-model="student.dob" id="dob">
                    </div>
                    <button type="submit" class="btn btn-success">{{ isEditing ? 'Cập nhật' : 'Thêm' }}</button>
                </form>
            </div>

            <div class="col-md-8">
                <h5>Danh sách học sinh</h5>
                <table class="table table-bordered">
                    <thead class="table-light">
                        <tr>
                            <th>Họ và tên</th>
                            <th>Điểm</th>
                            <th>Ngày sinh</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(stu, index) in students" :key="index">
                            <td>{{ stu.name }}</td>
                            <td>{{ stu.score }}</td>
                            <td>{{ stu.dob }}</td>
                            <td>
                                <button class="btn btn-warning btn-sm" @click="editStudent(index)">Sửa</button>
                                <button class="btn btn-danger btn-sm" @click="deleteStudent(index)">Xóa</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</template>

<script>
export default {
name: "Lab6Bai4",
}
</script>
<script setup>
    import {ref} from 'vue'

    const students =  ref([
        {name: 'Nguyễn Chí Hùng', score: 8, dob:'2006-01-01'},
        {name: 'Phạm Thị Lan', score: 9, dob:'2006-05-15'},
    ]);
    const student = ref({
    name: "",
    score: null,
    dob: ""
    });


    let isEditing = ref(false)
    let editingIndex = ref(null)
    function submitForm() {
    if (isEditing.value) {
        students.value[editingIndex.value] = { ...student.value };
        isEditing.value = false;
        editingIndex.value = null;
    } else {
        students.value.push({ ...student.value });
    }
    resetForm();
    }

    function editStudent(index) {
        student.value = { ...students.value[index] };
        isEditing.value = true;
        editingIndex.value = index;
    }

    function deleteStudent(index) {
    students.value.splice(index, 1);
    }

    function resetForm() {
        student.value = {
            name: "",
            score: null,
            dob: "",
        };
    }
</script>

<style>

</style>