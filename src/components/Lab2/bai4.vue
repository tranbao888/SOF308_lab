<template>
    <div class="container mt-3">
        <h3>Bài tập ứng dụng Modal cho tài khoản</h3>

        <button class="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#myModal">Tài khoản</button>
    </div>
    <!-- The modal -->
     <div class="modal" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">ĐĂNG NHẬP/ ĐĂNG KÝ</h4>
                    <button class="btn-close" type="button" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body">
                    <div class="container mt-3 border rounded">
    <ul class="nav nav-tabs" role="tablist">
        <li class="nav-item">
            <a href="#register" data-bs-toggle="tab" class="nav-link active">Đăng ký</a>
            
        </li>
        <li class="nav-item">
            <a href="#login" data-bs-toggle="tab" class="nav-link">Đăng nhập</a>

        </li>
        <li class="nav-item">
        </li>
    </ul>

    <!-- Tabs panes -->
     <div class="tab-content">
        <div id="register" class="container tab-pane active">
            <!-- form dang ky-->
             <div class="container border rounded pt-1 mt-3">
                <form>
                <div class="form-group py-2">
                    <label for="name">Họ và tên</label>
                    <input type="name" class="form-control" id="name" placeholder="Nhập họ và tên">
                </div>
                <div class="form-group py-2">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Nhập email">
                </div>
                <div class="form-group py-2">
                    <label for="phone">Số điện thoại</label>
                    <input type="phone" class="form-control" id="phone" placeholder="Nhập số điện thoại">
                </div>
                <div class="form-group py-2">
                    <label for="password">Mật khẩu</label>
                    <input type="password" class="form-control" id="password" placeholder="Nhập mật khẩu">
                </div>
                <div class="form-group py-2">
                    <label for="password-check">Xác nhận mật khẩu</label>
                    <input type="password-check" class="form-control" id="password-check" placeholder="Xác nhận mật khẩu">
                </div>
                    <label class="form-check-label mx-2 py-2 pb-3" for="gridCheck">
                        Giới tính: 
                    </label>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" checked>
                        <label class="form-check-label" for="inlineRadio1">Nam</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                        <label class="form-check-label" for="inlineRadio2">Nữ</label>
                    </div>
                    <div class="form-group py-3">
                        <label for="language">Ngôn ngữ</label>
                        <select class="form-control" id="language">
                        <option>Việt Nam</option>
                        <option>Lào</option>
                        <option>Campuchia</option>
                        <option>Myanmar</option>
                        <option>Mỹ</option>
                        </select>
                    </div>
                    <div class="form-check py-3">
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                        <label class="form-check-label" for="defaultCheck1">
                            Tôi đồng ý với các điều khoản và điều kiện
                        </label>
                    </div>
                    <button type="submit" class="btn btn-primary mb-3">Đăng ký</button>
            </form>
             </div>
            
        </div>
        <div id="login" class="container tab-pane active">
            <!--Form dang nhap-->
            <h3 class="py-3">Form đăng nhập</h3>
            <div class="container border rounded">
                <form>
                <div class="form-group py-3">
                    <label for="exampleInputEmail1">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nhập email">
                </div>
                <div class="form-group py-2">
                    <label for="exampleInputPassword1">Mật khẩu</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Nhập mật khẩu">
                </div>
                <div class="form-group py-3">
                    <button type="submit" class="btn btn-primary">Đăng nhập</button>
                </div>
                
            </form>
            </div>
            
        </div>
     </div>
  </div>
                </div>
            </div>
        </div>
     </div>
</template>
  
  <script>
  export default {
      name: "Lab2Bai4",
  }
  </script>
  
  <style>

  </style>