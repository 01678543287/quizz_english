# Schema dữ liệu câu hỏi

## 1. Kiểu phẳng (dùng cho các môn mới)

```js
const quizData = [
  {
    id: 1,
    question: "Thuốc khử hàn có tác dụng chính nào?",
    option_a: "Thanh nhiệt tả hỏa",
    option_b: "Ôn trung, tán hàn, giảm đau và hồi dương cứu nghịch",
    option_c: "Thu liễm mồ hôi",
    option_d: "Tiêu thực hóa tích",
    answer: "B"
  }
];
```

Quy tắc:

| Field | Kiểu | Bắt buộc | Ghi chú |
|---|---|---|---|
| `id` | number | Có | Duy nhất trong môn, tuần tự 1..N |
| `question` | string | Có | Không chứa HTML |
| `option_a`..`option_d` | string | Có | 4 phương án, khác nội dung |
| `answer` | `"A"`..`"D"` | Có | Key gốc, không kèm text |

- Không có `chapter`/`section` trong kiểu phẳng.
- File kết thúc bằng `];`, không có side effect khác.

## 2. Kiểu theo chương (các môn cũ)

```js
window.quizData = [
  {
    chapter: "01. Thuốc khử hàn",
    questions: [
      { id: 1, question: "...", option_a: "...", option_b: "...", option_c: "...", option_d: "...", answer: "B" }
    ]
  }
];
```

Dùng cho môn có dropdown chọn chương (Dược Liệu, Dược Lý 1, Hóa Sinh, Bào Chế, Bệnh Học). Hai môn mới **không** dùng kiểu này.

## 3. Thứ tự câu và lưu đáp án (trang luyện tập)

- Lần đầu chưa có order: `shared/quiz-core.js` sinh thứ tự ngẫu nhiên bằng Fisher–Yates và lưu mảng `id` vào localStorage.
- Các lần tải sau: giữ nguyên order đã lưu. Refresh **không** đảo lại câu.
- Order không hợp lệ (thiếu/thừa/trùng `id`, sai kiểu) → sinh lại và lưu.
- Chỉ nút **"Reset kết quả"** mới sinh order mới, xoá đáp án và về trang 1.
- Trang luyện tập mới hiển thị **20 câu/trang**; danh sách câu nằm trong bottom sheet (mobile) hoặc sidebar (desktop ≥900px).
- Phương án vẫn được đảo mỗi lần tải (hành vi cũ); đáp án lưu theo key gốc nên không bị lệch.
- Đáp án lưu dạng object, key là `id`, value là **key gốc** của phương án:

```json
{ "1": "B", "2": "A", "3": "D" }
```

- Khi render, so sánh key gốc để biết đúng/sai; hiển thị chữ cái theo vị trí đã đảo.
- Dữ liệu localStorage sai schema hoặc chứa `id` không tồn tại → bỏ qua, không crash.

Storage key:

| Mục đích | DHCT | DLS |
|---|---|---|
| Thứ tự câu | `quiz_question_order_dhct_v1` | `quiz_question_order_dls_v1` |
| Đáp án luyện tập | `quiz_user_answers_dhct_v1` | `quiz_user_answers_dls_v1` |

Order lưu dạng mảng số:

```json
[3, 1, 4, 2]
```

## 4. Trang kiểm tra

- `EXAM_QUESTION_COUNT = 40`.
- Bốc 40 index ngẫu nhiên, lưu `quiz_exam_indexes_<subject>_v1`.
- Lưu thứ tự phương án đã đảo: `quiz_exam_shuffled_options_<subject>_v1`.
- Lưu đáp án đã chọn: `quiz_exam_answers_<subject>_v1`.
- Refresh giữ nguyên đề; nút "Tạo đề mới" xoá 3 key rồi reload.

## 5. Kiểm tra dữ liệu

```bash
node scripts/validate-quiz-data.mjs duoc_hoc_co_truyen/quiz_data.js 217
node scripts/validate-quiz-data.mjs duoc_lam_sang/quiz_data.js 305
```

Validator kiểm tra:

- File load được và expose `quizData`.
- Đúng số câu mong đợi.
- `id` duy nhất, liên tục 1..N.
- Đủ 4 phương án, không rỗng.
- `answer` thuộc A–D.
- Không có câu trùng **hoàn toàn** sau chuẩn hoá: cùng nội dung câu + cùng bộ phương án + cùng đáp án. Hai câu cùng stem nhưng khác phương án/đáp án là hợp lệ (ví dụ cặp "chậm lớn" của DLS).
- Không có 2 phương án trùng nội dung trong cùng câu.
- Validator chỉ hỗ trợ kiểu phẳng `const quizData`; không dùng cho môn theo chương.
