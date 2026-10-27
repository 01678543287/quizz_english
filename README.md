# Sổ Ôn Bài — English Quiz App

Ứng dụng trắc nghiệm tĩnh (HTML/CSS/JS thuần, không build step) cho sinh viên Dược. Lobby mới mang tên **Sổ Ôn Bài**, giao diện mobile-first tối ưu iPhone 14 Pro Max.

## Môn đang mở

| Môn | Số câu | Luyện tập |
|---|---:|---|
| Tiếng Anh 2 | 161 | `tieng-anh-2/index.html` |
| Bào Chế 2 | 72 | `baoche-2/index.html` |
| Dược Lý 2 | 150 | `duocly-2/index.html` |
| Dược Học Cổ Truyền | 217 | `duoc_hoc_co_truyen/index.html` |
| Dược Lâm Sàng | 305 | `duoc_lam_sang/index.html` |
| Pháp Chế Dược | 466 | `phap_che_duoc/index.html` |

Các môn cũ vẫn còn trong repo nhưng không hiển thị trên lobby. Muốn bật lại, thêm entry vào `shared/subjects.js`.

## Cấu trúc chính

```
english-quiz/
├── index.html                 # redirect sang shared/menu.html
├── shared/
│   ├── menu.html              # lobby "Sổ Ôn Bài"
│   ├── menu.css               # style lobby
│   ├── menu.js                # render môn + tiến độ
│   ├── subjects.js            # registry môn học
│   ├── quiz-core.js           # shuffle, order, chuẩn hoá đáp án
│   ├── mobile.css             # practice/exam mobile-first
│   ├── style.css              # style nền cũ (được override ở trang mới)
│   └── images/
├── duoc_hoc_co_truyen/        # DHCT: index/exam/main/exam.js/quiz_data.js
├── duoc_lam_sang/             # DLS: index/exam/main/exam.js/quiz_data.js
├── phap_che_duoc/             # PCD: index/exam/main/exam.js/quiz_data.js
├── duocly-2/                  # Dược Lý 2
├── baoche-2/                  # Bào Chế 2
├── tieng-anh-2/               # Tiếng Anh 2
├── scripts/                   # validator + test Node
└── docs/                      # thiết kế, schema, hướng dẫn
```

## Tính năng

- **Lobby "Sổ Ôn Bài"**: thẻ môn có tab màu, icon SVG, số câu, tiến độ; card "Tiếp tục học" chọn môn có tỉ lệ làm cao nhất.
- **Luyện tập 20 câu/trang** cho các môn mới (DHCT, DLS, PCD): app bar + progress, option 56px, bottom bar, sheet danh sách câu.
- **Giữ thứ tự câu khi refresh**; chỉ đảo khi bấm "Reset kết quả" (popup xác nhận Huỷ/Reset).
- **Làm kiểm tra 40 câu** ngay từ toolbar đầu trang; trang kiểm tra có danh sách câu dạng details grid.
- **Đáp án lưu theo `id` + key gốc**, nên refresh/đảo phương án không làm lệch đáp án.
- **Kiểm tra 40 câu ngẫu nhiên**, giữ đề khi refresh, "Tạo đề mới" đổi đề.
- **Motion có mục đích**: press stamp, success underline, check stamp, shake, streak, sheet; tôn trọng `prefers-reduced-motion`.
- **Mobile-first**: 430×932, safe area, vùng chạm ≥44px, không gradient tím/glass/emoji icon.

## Chạy thử

```bash
cd /Users/dohuynhhongphuc/Personal/english-quiz
python3 -m http.server 8000
# mở http://localhost:8000
```

## Kiểm tra dữ liệu

```bash
node --test scripts/test-quiz-core.mjs
node --test scripts/test-validate-quiz-data.mjs
node scripts/validate-quiz-data.mjs duoc_hoc_co_truyen/quiz_data.js 217
node scripts/validate-quiz-data.mjs duoc_lam_sang/quiz_data.js 305
```

## Tài liệu

- [Mục lục tài liệu](docs/README.md)
- [Schema dữ liệu](docs/quiz-data-schema.md)
- [Thiết kế UI/UX mobile-first](docs/design/mobile-ui.md)
- [Thêm môn mới](docs/adding-a-subject.md)
- [Design doc các môn mới](docs/superpowers/specs/2026-10-27-them-2-mon-hoc-design.md)
- [Kế hoạch triển khai](docs/superpowers/plans/2026-10-27-them-2-mon-hoc.md)
