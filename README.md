# English Quiz App

Ứng dụng trắc nghiệm đa môn học được tổ chức theo cấu trúc rõ ràng.

## Cấu trúc thư mục

```
english-quiz/
├── index.html              # Trang chủ (redirect to menu)
├── README.md               # File này
│
├── shared/                 # Các file dùng chung
│   ├── menu.html          # Menu chọn môn
│   ├── style.css          # CSS chung
│   └── images/            # Hình ảnh
│
├── tieng-anh/             # Quiz Tiếng Anh
│   ├── index.html         # Trang luyện tập
│   ├── exam.html          # Trang kiểm tra
│   ├── main.js            # Logic chính
│   ├── exam.js            # Logic kiểm tra
│   └── quiz-data.js       # Dữ liệu câu hỏi
│
├── hoa-hoc/               # Quiz Hóa học
│   ├── index2.html        # Trang luyện tập
│   ├── exam2.html         # Trang kiểm tra
│   ├── main2.js           # Logic chính
│   ├── exam2.js           # Logic kiểm tra
│   └── quiz-data2.js      # Dữ liệu câu hỏi
│
├── giai-phau-tvd/         # Quiz Giải phẫu TVD
│   ├── index_tvd.html     # Trang luyện tập
│   ├── exam_tvd.html      # Trang kiểm tra
│   ├── main-tvd.js        # Logic chính
│   ├── exam_tvd.js        # Logic kiểm tra
│   ├── main_tvd.js        # Logic phụ
│   └── quizz_tvd.txt      # Dữ liệu text
│
├── giai-phau/             # Quiz Giải phẫu
│   ├── giaiphau.html      # Trang luyện tập
│   ├── main-gp.js         # Logic chính
│   ├── quiz-data-giaiphau.js   # Dữ liệu câu hỏi
│   └── quiz-data-giaiphau.txt  # Dữ liệu text
│
├── duocly/                # Quiz Dược Lý
│   ├── index.html         # Trang luyện tập
│   ├── exam.html          # Trang kiểm tra
│   ├── main.js            # Logic chính
│   ├── exam.js            # Logic kiểm tra
│   ├── quiz_data.js       # Dữ liệu câu hỏi
│   └── DƯỢC LÝ.docx       # Tài liệu gốc
│
├── hoasinh/               # Quiz Hóa Sinh
│   ├── index.html         # Trang luyện tập
│   ├── exam.html          # Trang kiểm tra
│   ├── main.js            # Logic chính
│   ├── exam.js            # Logic kiểm tra
│   ├── quiz-data.js       # Dữ liệu câu hỏi
│   └── HÓA SINH.docx       # Tài liệu gốc
│
└── quiz-app/              # Quiz App riêng (nếu có)
    ├── QuizApp.html
    └── QuizApp.js
```

## Hướng dẫn sử dụng

1. Mở file `index.html` hoặc `shared/menu.html` để bắt đầu
2. Chọn môn học muốn luyện tập
3. Làm bài tập hoặc kiểm tra

## Tính năng

- Luyện tập từng câu với chế độ sidebar
- Kiểm tra với 40 câu ngẫu nhiên
- Lưu tiến độ tự động
- Hỗ trợ nhiều môn học:
  - Tiếng Anh
  - Hóa Học
  - Giải phẫu TVD
  - Giải phẫu
  - Dược Lý (96 câu hỏi)
  - Hóa Sinh (168 câu hỏi)

## Cập nhật

Tất cả các file đã được tổ chức lại theo cấu trúc module hóa để dễ dàng quản lý và mở rộng.
