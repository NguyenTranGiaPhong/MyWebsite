// Script.js

// Định nghĩa hàm khi trang đã tải hoàn thành
document.addEventListener("DOMContentLoaded", function() {
    // Lắng nghe sự kiện click cho nút "Mua ngay"
    var buyButton = document.querySelector("#banner button");
    buyButton.addEventListener("click", function(event) {
        event.preventDefault();
        // Thực hiện các hành động khi người dùng click vào nút "Mua ngay"
        alert("Chức năng đặt hàng đang được phát triển.");
    });

    // Lắng nghe sự kiện click cho nút "Nhận tin"
    var subscribeButton = document.querySelector("#footer form button");
    subscribeButton.addEventListener("click", function(event) {
        event.preventDefault();
        // Thực hiện các hành động khi người dùng click vào nút "Nhận tin"
        alert("Chức năng đăng ký nhận tin đang được phát triển.");
    });

    // Lắng nghe sự kiện click cho nút "Previous"
    var prevButton = document.querySelector("#comment .prev a");
    prevButton.addEventListener("click", function(event) {
        event.preventDefault();
        // Thực hiện các hành động khi người dùng click vào nút "Previous"
        alert("Chức năng xem nhận xét trước đang được phát triển.");
    });

    // Lắng nghe sự kiện click cho nút "Next"
    var nextButton = document.querySelector("#comment .next a");
    nextButton.addEventListener("click", function(event) {
        event.preventDefault();
        // Thực hiện các hành động khi người dùng click vào nút "Next"
        alert("Chức năng xem nhận xét tiếp theo đang được phát triển.");
    });
});

