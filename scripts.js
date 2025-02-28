// ===== JAVASCRIPT CƠ BẢN CHO NGƯỜI MỚI BẮT ĐẦU =====

// Đợi cho trang web tải xong trước khi chạy JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Trang web đã tải xong!');
    
    // ===== 1. CHỌN CÁC PHẦN TỬ HTML =====
    
    // Lấy tiêu đề h1
    const heading = document.querySelector('h1');
    
    // Lấy đoạn văn bản
    const paragraph = document.querySelector('p');
    
    // ===== 2. THAY ĐỔI NỘI DUNG VÀ KIỂU DÁNG =====
    
    // Thêm một sự kiện khi nhấp vào tiêu đề
    heading.addEventListener('click', function() {
        // Thay đổi màu chữ khi click vào tiêu đề
        this.style.color = '#3498db';
        alert('Bạn đã nhấp vào tiêu đề!');
    });
    
    // ===== 3. TẠO VÀ THÊM PHẦN TỬ MỚI =====
    
    // Tạo một nút bấm
    const button = document.createElement('button');
    button.textContent = 'Nhấp vào tôi';
    button.className = 'button'; // Sử dụng lớp CSS đã định nghĩa
    
    // Thêm nút vào cuối body
    document.body.appendChild(button);
    
    // Thêm sự kiện cho nút
    button.addEventListener('click', function() {
        toggleDarkMode();
    });
    
    // ===== 4. TẠO MỘT CHỨC NĂNG ĐƠN GIẢN =====
    
    // Biến để theo dõi chế độ tối
    let isDarkMode = false;
    
    // Hàm chuyển đổi chế độ tối/sáng
    function toggleDarkMode() {
        isDarkMode = !isDarkMode;
        
        if (isDarkMode) {
            document.body.style.backgroundColor = '#2c3e50';
            document.body.style.color = '#ecf0f1';
            button.textContent = 'Chuyển sang chế độ sáng';
        } else {
            document.body.style.backgroundColor = '#f4f4f4';
            document.body.style.color = '#333';
            button.textContent = 'Chuyển sang chế độ tối';
        }
    }
    
    // ===== 5. TẠO ĐỒNG HỒ ĐƠN GIẢN =====
    
    // Tạo phần tử hiển thị thời gian
    const clock = document.createElement('div');
    clock.style.margin = '20px 0';
    clock.style.fontSize = '1.2em';
    document.body.appendChild(clock);
    
    // Cập nhật thời gian
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        clock.textContent = 'Bây giờ là: ' + timeString;
    }
    
    // Cập nhật đồng hồ mỗi giây
    setInterval(updateClock, 1000);
    updateClock(); // Cập nhật ngay lập tức
    
    // ===== 6. TẠO MỘT FORM ĐƠN GIẢN =====
    
    // Tạo container cho form
    const formContainer = document.createElement('div');
    formContainer.className = 'container';
    formContainer.style.marginTop = '30px';
    
    // Tạo tiêu đề cho form
    const formHeading = document.createElement('h2');
    formHeading.textContent = 'Form Liên Hệ Đơn Giản';
    
    // Tạo form
    const form = document.createElement('form');
    form.innerHTML = `
        <div>
            <label for="name">Họ và tên:</label>
            <input type="text" id="name" placeholder="Nhập tên của bạn">
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" placeholder="Nhập email của bạn">
        </div>
        <div>
            <label for="message">Tin nhắn:</label>
            <textarea id="message" placeholder="Nhập tin nhắn"></textarea>
        </div>
        <button type="submit" class="button">Gửi</button>
    `;
    
    // Xử lý sự kiện submit form
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn form gửi đi (reload trang)
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            alert(`Cảm ơn ${name}! Tin nhắn của bạn đã được gửi.`);
            form.reset(); // Xóa nội dung form
        } else {
            alert('Vui lòng điền đầy đủ thông tin!');
        }
    });
    
    // Thêm các phần tử vào DOM
    formContainer.appendChild(formHeading);
    formContainer.appendChild(form);
    document.body.appendChild(formContainer);
});
