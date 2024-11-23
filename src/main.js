import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// Font Awesome setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFileAlt, faVideo, faInfoCircle, faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons'

// Thêm các icon vào thư viện
library.add(faFileAlt, faVideo, faInfoCircle, faCalendarAlt, faUser)

// Tạo ứng dụng Vue
const app = createApp(App);

// Sử dụng router
app.use(router);

// Đăng ký FontAwesomeIcon như một component toàn cục
app.component('font-awesome-icon', FontAwesomeIcon);

// Mount ứng dụng vào #app
app.mount('#app');
