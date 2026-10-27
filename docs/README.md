# Tài liệu dự án English Quiz

Ứng dụng trắc nghiệm tĩnh (HTML/CSS/JS thuần, không build step). Mỗi môn là một thư mục độc lập, dùng chung `shared/style.css` và lobby ở `shared/menu.html`; các trang mới dùng thêm `shared/mobile.css` và `shared/quiz-core.js`.

## Mục lục

- [Schema dữ liệu câu hỏi](quiz-data-schema.md)
- [Cách thêm một môn mới](adding-a-subject.md)
- [Thiết kế UI/UX mobile-first](design/mobile-ui.md)
- [Dược học cổ truyền](subjects/duoc-hoc-co-truyen.md)
- [Dược lâm sàng](subjects/duoc-lam-sang.md)
- [Design doc: thêm 2 môn](superpowers/specs/2026-10-27-them-2-mon-hoc-design.md)
- [Kế hoạch triển khai](superpowers/plans/2026-10-27-them-2-mon-hoc.md)

## Cấu trúc một môn

```
<ten-mon>/
├── index.html      # trang luyện tập
├── exam.html       # trang kiểm tra 40 câu
├── main.js         # logic luyện tập
├── exam.js         # logic kiểm tra
└── quiz_data.js    # ngân hàng câu hỏi
```

Một số môn giữ kèm file `.docx` gốc trong cùng thư mục. Không đổi tên file gốc để còn đối chiếu.

## Quy ước

- Mỗi môn có storage key riêng, ví dụ `quiz_user_answers_dhct_v1`.
- `quiz_data.js` phải expose biến global `quizData` (flat) hoặc `window.quizData` (theo chương) để `main.js`/`exam.js` đọc được.
- Không sửa `shared/style.css` cho từng môn; các trang mới dùng `shared/mobile.css`, lobby dùng `shared/menu.css`.
- Trang luyện tập giữ thứ tự câu khi tải lại; chỉ đảo lại khi bấm "Reset kết quả". Đáp án lưu theo `id` câu, không theo vị trí.
- Trang kiểm tra luôn bốc 40 câu ngẫu nhiên và giữ nguyên đề đang làm khi refresh.
- Giao diện mới ưu tiên mobile (iPhone 14 Pro Max 430×932): safe area, vùng chạm ≥44px, một câu/màn hình, motion có fallback `prefers-reduced-motion`.
- Môn mới phải thêm một entry vào `shared/subjects.js` để lobby hiển thị đúng tên, số câu và tiến độ.
- Không dùng gradient tím/glassmorphism/emoji icon cho giao diện mới; xem [design/mobile-ui.md](design/mobile-ui.md).

## Chạy thử

```bash
cd /Users/dohuynhhongphuc/Personal/english-quiz
python3 -m http.server 8000
# mở http://localhost:8000
```

Mở trực tiếp `index.html` cũng được, nhưng chạy server sẽ ổn định hơn với localStorage và đường dẫn tương đối.

## Trạng thái

- 2 môn mới: Dược học cổ truyền (217 câu), Dược lâm sàng (305 câu).
- Lobby "Sổ ôn bài" + giao diện mobile-first + motion đang chờ duyệt design trước khi triển khai.
- Chưa có code sản phẩm nào được tạo cho 2 môn mới.
