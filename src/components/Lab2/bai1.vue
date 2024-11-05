<template>
    <div class="container border">
        <h2 class="text-danger fw-bold fs-5 py-3 text-center">Bảng Thành Phần Dinh Dưỡng</h2>
    <table class="table table-bordered">
        
        <thead class="bg-warning">
            <tr>
                <th scope="col" rowspan="2" class="align-middle">Thành Phần</th>
                <th scope="col" colspan="2" class="text-center">Giá Trị</th>
            </tr>
            <tr>
                <th scope="col" class="text-center">Khối Lượng</th>
                <th scope="col" class="text-center">% DV*</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Calories</td>
                <td class="text-center">200 kcal</td>
                <td class="text-center">20%</td>
            </tr>
            <tr>
                <td>Chất Béo</td>
                <td class="text-center">9 g</td>
                <td class="text-center">14%</td>
            </tr>
            <tr>
                <td>Chất Béo Bão Hòa</td>
                <td class="text-center">4 g</td>
                <td class="text-center">20%</td>
            </tr>
            <tr>
                <td>Chất Đạm</td>
                <td class="text-center">8 g</td>
                <td class="text-center">16%</td>
            </tr>
            <tr>
                <td>Chất Xơ</td>
                <td class="text-center">5 g</td>
                <td class="text-center">20%</td>
            </tr>
            <tr>
                <td>Đường</td>
                <td class="text-center">12 g</td>
                <td class="text-center">-</td>
            </tr>
            <tr>
                <td class="align-middle" rowspan="2">Vitamin</td>
                <td class="text-center">Vitamin C</td>
                <td class="text-center">25%</td>
            </tr>
            <tr>
                <td class="text-center">Vitamin D</td>
                <td class="text-center">10%</td>
            </tr>
        </tbody>
    </table>
    </div>
</template>

<script>
export default {
    name: "Lab2Bai4",
}
</script>
