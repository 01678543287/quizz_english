# Thêm một môn học mới

Checklist dùng cho môn mới có file `.docx` chứa câu hỏi + đáp án.

## 1. Chuẩn bị thư mục

```bash
mkdir -p <ten-mon>
# đặt file nguồn vào, ví dụ <ten-mon>/nguon.docx
```

Tên thư mục dùng chữ thường, có thể dùng `-` hoặc `_` (repo hiện có cả hai kiểu).

## 2. Bóc nội dung docx

macOS có sẵn `textutil`:

```bash
textutil -convert txt -output /tmp/nguon.txt "<ten-mon>/nguon.docx"
```

Kiểm tra nhanh số câu và số đáp án:

```bash
grep -cE '^(Câu|\*\*Câu|\*\*)[[:space:]]*[0-9]+' /tmp/nguon.txt
grep -c 'Đáp án' /tmp/nguon.txt
```

Nếu hai số lệch nhau, tìm các câu thiếu đáp án trước khi chuyển.

## 3. Chuẩn hoá câu hỏi

- Mỗi câu phải có đúng 4 phương án A–D.
- `answer` chỉ giữ chữ cái; bỏ phần text sau dấu chấm.
- Bỏ ghi chú dạng `*(theo dấu đỏ)*` khỏi đáp án, nhưng ghi lại vào `docs/subjects/<ten-mon>.md` nếu ghi chú ảnh hưởng nội dung.
- Sửa lỗi cơ học: nhãn phương án lặp, thiếu phương án, đáp án chỉ ghi chữ cái.
- Không tự bịa câu mới. Nếu buộc phải thêm phương án bị thiếu, ghi rõ trong docs.

## 4. Dedupe

Chuẩn hoá câu hỏi (chữ thường, bỏ dấu, bỏ ký tự đặc biệt, gộp khoảng trắng) rồi so sánh. Giữ bản xuất hiện đầu tiên.

Lưu ý: hai câu cùng stem nhưng khác phương án/đáp án là **hai câu hợp lệ**, không dedupe máy móc.

## 5. Tạo `quiz_data.js`

```js
const quizData = [
  {
    id: 1,
    question: "...",
    option_a: "...",
    option_b: "...",
    option_c: "...",
    option_d: "...",
    answer: "A"
  }
];
```

- `id` tuần tự 1..N sau dedupe.
- Không dùng `const` trùng tên với file khác trong cùng trang.
- File chỉ chứa mảng dữ liệu, không `console.log`, không `export`.

## 6. Chạy validator

```bash
node scripts/validate-quiz-data.mjs <ten-mon>/quiz_data.js <so-cau>
```

Sửa đến khi pass. Không bỏ qua bước này.

## 7. Tạo trang

Copy từ template mới nhất (`duoc_hoc_co_truyen`):

```bash
cp duoc_hoc_co_truyen/index.html <ten-mon>/index.html
cp duoc_hoc_co_truyen/exam.html <ten-mon>/exam.html
cp duoc_hoc_co_truyen/main.js <ten-mon>/main.js
cp duoc_hoc_co_truyen/exam.js <ten-mon>/exam.js
```

Sau đó:

- Đổi `<title>`, app bar/tên môn, toolbar `Làm kiểm tra 40 câu`, tổng số trang (`Trang 1/N`).
- Đổi `ORDER_KEY`/`ANSWERS_KEY` trong `main.js` thành `quiz_question_order_<slug>_v1` / `quiz_user_answers_<slug>_v1`.
- Đổi 3 storage key trong `exam.html`; giữ popup Reset (`#reset-dialog`) và các nút reset.
- Giữ `shared/mobile.css` + `shared/quiz-core.js`; trang luyện tập dùng 20 câu/trang, toolbar exam, popup Reset.
- Trang kiểm tra giữ 20 câu/trang; danh sách câu trong `<details>` và giữ feedback xanh/đỏ giống practice.

## 8. Đăng ký lobby + README

Lobby render từ registry, không hardcode HTML. Thêm một entry vào `shared/subjects.js`:

```js
{
  id: 'dhct',
  name: 'Dược Học Cổ Truyền',
  path: '../duoc_hoc_co_truyen/index.html',
  icon: 'book-open',
  accent: 'var(--teal)',
  count: 217,
  storageKey: 'quiz_user_answers_dhct_v1'
}
```

- `path` tính từ `shared/menu.html`.
- `count` dùng để hiện "217 câu".
- `storageKey` dùng để tính tiến độ; hỗ trợ cả array (môn cũ) và object (môn mới).
- Các môn đang ẩn không tự bật lại; chỉ thêm khi muốn hiển thị.

Cập nhật danh sách môn trong `README.md` gốc và `docs/README.md`.

## 9. Kiểm tra tay

- Mở trang luyện tập: đủ câu, chọn đáp án, tiến độ/sidebar đổi màu đúng.
- Refresh 3 lần: **thứ tự câu giữ nguyên**, đáp án vẫn đúng câu.
- Bấm "Reset kết quả": đáp án xoá, thứ tự câu đổi, về trang 1.
- Mở trang kiểm tra: đúng 40 câu, refresh không mất đề, "Tạo đề mới" đổi đề.
- Mở lobby: card môn mới hiện đúng tên, số câu, tiến độ; "Tiếp tục học" mở đúng môn.
- Kiểm tra 430×932: không tràn ngang, safe area, nút ≥44px, sheet danh sách câu hoạt động.
- Kiểm tra `git status`: không có file môn cũ bị sửa.

## 10. Ghi tài liệu môn

Tạo `docs/subjects/<ten-mon>.md` gồm:

- File nguồn, ngày bóc.
- Tổng câu thô / sau dedupe.
- Bảng phân bố theo chương/bài.
- Các lỗi dữ liệu đã sửa.
- Các câu cần đối chiếu giáo trình.
