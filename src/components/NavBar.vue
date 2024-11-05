<template>
    <nav>
        <h1>Nav Bar</h1>
        <ul>
            <li>
                <router-link to="/">Lab1</router-link>
                <ul>
                    <li><router-link to="/Lab1/bai1">Bài 1</router-link></li>
                    <li><router-link to="/Lab1/bai2">Bài 2</router-link></li>
                    <li><router-link to="/Lab1/bai3">Bài 3</router-link></li>
                    <li><router-link to="/Lab1/bai4">Bài 4</router-link></li>
                </ul>
            </li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li>
                <router-link to="/about">Lab2</router-link>
                <ul>
                    <li><router-link to="/Lab2/bai1">Bài 1</router-link></li>
                    <li><router-link to="/Lab2/bai2">Bài 23</router-link></li>
                    <li><router-link to="/Lab2/bai4">Bài 4</router-link></li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style scoped>
/* Bạn có thể thêm style tùy chỉnh ở đây */
</style>
