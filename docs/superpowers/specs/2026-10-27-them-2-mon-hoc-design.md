# Thiết kế: Thêm 2 môn Dược học cổ truyền & Dược lâm sàng

**Ngày:** 2026-10-27
**Trạng thái:** Đã qua builder check; đã cập nhật yêu cầu Reset + hướng UI/UX mobile-first — chờ chủ dự án duyệt
**Người viết:** OpenCode (theo yêu cầu của chủ dự án)

## 1. Mục tiêu

Đưa 2 ngân hàng câu hỏi mới vào ứng dụng quiz hiện tại, giữ nguyên trải nghiệm và cấu trúc thư mục cũ:

- `duoc_hoc_co_truyen/DHCT f.docx` — 263 câu thô, sau làm sạch còn **217 câu**.
- `duoc_lam_sang/DLS.docx` — 305 câu, sau làm sạch còn **305 câu** (không bỏ câu nào).

Yêu cầu của chủ dự án:

1. **Không dùng chọn chương/bài** — dữ liệu phẳng giống Dược Lý 2.
2. **Trang luyện tập giữ nguyên thứ tự câu khi tải lại trang; chỉ đảo lại thứ tự khi bấm "Reset kết quả".** Đáp án đã chọn không được mất khi refresh.
3. Áp dụng skill UI/UX trong `.opencode` cho các điểm chạm của người dùng.
4. Tạo bộ tài liệu dự án (`docs/`) theo chuẩn superpowers.
5. **Giao diện mobile-first, tối ưu iPhone 14 Pro Max**: safe area, vùng chạm 44px, 20 câu một trang, sheet danh sách câu.
6. **Lobby menu mới** có cá tính "sổ ôn bài", hiển thị tiến độ và môn đang học.
7. **Motion có mục đích** (stamp, highlight, progress, streak) tạo cảm giác thích thú; vẫn có fallback cho `prefers-reduced-motion`.
8. Tránh giao diện "nhìn như AI": không gradient tím/glassmorphism/emoji icon/card bo 24px hàng loạt.

## 2. Ngoài phạm vi

- Không thêm dropdown chọn chương/bài.
- Không thiết kế lại giao diện các môn cũ; lobby mới là điểm vào chung.
- Không sửa `shared/style.css`; thêm `shared/mobile.css` + `shared/menu.css`.
- Không sửa logic hoặc dữ liệu của các môn cũ.
- Trang kiểm tra giữ logic chấm điểm và 20 câu/trang; chỉ đổi presentation: app bar, option mobile, danh sách câu dạng details grid, lưu đáp án ngay và tắt hiệu ứng bay khi reduced motion.
- Không thêm backend, tài khoản, đồng bộ đám mây, spaced repetition.
- Không giữ cố định thứ tự phương án; phương án vẫn đảo mỗi lần tải.

### Anti-goals (làm sai nghĩa là hỏng)

- Đảo lại thứ tự câu mỗi lần refresh (trái yêu cầu mới).
- Lưu đáp án theo **vị trí mảng** thay vì `id` câu.
- Xoá sạch tiến độ mỗi lần refresh.
- Đảo câu bằng `array.sort(() => Math.random() - 0.5)`.
- Đưa câu trùng vào ngân hàng.
- Tự ý đổi giao diện/màu sắc của các môn đang chạy.
- Gradient tím/xanh, glassmorphism, emoji làm icon điều hướng, card bo 24px + bóng mờ khắp nơi.
- Motion bay toàn màn hình, confetti rực rỡ, parallax vô hạn, animation lặp.

## 3. Quyết định đã chốt

| # | Quyết định | Lý do |
|---|---|---|
| D1 | Dữ liệu phẳng `const quizData = [...]`, không có `chapter` | Chủ dự án trả lời "không cần" chọn chương |
| D2 | Mỗi câu có `id` ổn định; đáp án lưu theo `id` + **key gốc** A–D | Refresh đảo phương án mà vẫn giữ đúng lựa chọn |
| D3 | Sinh thứ tự câu một lần, lưu vào localStorage; chỉ sinh lại khi bấm "Reset kết quả" | Đúng yêu cầu mới: refresh không đảo câu |
| D4 | Trang kiểm tra giữ nguyên: 40 câu ngẫu nhiên, lưu đề đang làm để refresh không mất bài | Tránh phá hành vi "làm dở thì tiếp tục" |
| D5 | Dedupe DHCT theo nội dung câu; giữ bản xuất hiện đầu tiên | Loại 45 câu trùng khít + 1 câu gần trùng |
| D6 | Giữ nguyên `shared/style.css`; thêm `shared/mobile.css`, `shared/menu.css`, `shared/subjects.js`, `shared/menu.js` | Không regression các môn cũ |
| D7 | Tài liệu đặt trong `docs/`; design + plan theo `docs/superpowers/` | Theo chuẩn superpowers |
| D8 | Giữ nguyên đáp án nguồn cho 4 câu có ghi chú "dấu đỏ" dù lệch kiến thức chuẩn | Tôn trọng đáp án của tài liệu gốc; ghi rõ trong `docs/subjects/` |
| D9 | Tách hàm thuần (shuffle, thứ tự câu, chuẩn hoá đáp án) vào `shared/quiz-core.js` | Test được bằng Node, dùng chung cho 2 môn |
| D10 | Hướng thị giác "Sổ ôn bài": giấy ấm, mực đậm, teal/amber, serif + system sans, viền mảnh + bóng offset | Theo E-Ink/Paper + Editorial của ui-ux-pro-max; tránh giao diện AI |
| D11 | Mobile-first, tối ưu 430×932; safe area, `100dvh`, vùng chạm ≥44px | iPhone 14 Pro Max là thiết bị ưu tiên |
| D12 | Luyện tập 20 câu/trang; desktop ≥900px có sidebar grid; mobile dùng bottom sheet | Giữ nhịp 20 câu/trang như các môn cũ |
| D13 | Motion "giấy/con dấu/highlight": press, sweep, stamp, streak chip, progress; không bay toàn màn hình | Tạo cảm giác thích thú nhưng không rối |
| D14 | Lobby mới dùng registry `shared/subjects.js` + tiến độ localStorage, có "Tiếp tục học" | Menu có ích cho học viên, dễ thêm môn |
| D15 | `prefers-reduced-motion`: bỏ translate/shake/confetti, giữ phản hồi màu + icon | Tôn trọng người dùng nhạy cảm chuyển động |

## 4. Dữ liệu

### 4.1 Schema

```js
// duoc_hoc_co_truyen/quiz_data.js
const quizData = [
  {
    id: 1,                         // duy nhất trong môn, 1..N
    question: "Thuốc khử hàn có tác dụng chính nào?",
    option_a: "Thanh nhiệt tả hỏa",
    option_b: "Ôn trung, tán hàn, giảm đau và hồi dương cứu nghịch",
    option_c: "Thu liễm mồ hôi",
    option_d: "Tiêu thực hóa tích",
    answer: "B"                    // key gốc, không kèm nội dung
  }
];
```

Quy tắc:

- `id` tuần tự 1..N sau khi dedupe, không tái sử dụng.
- `answer` luôn là một trong `A|B|C|D`.
- Không nhúng HTML trong câu hỏi/phương án; giữ tiếng Việt có dấu.
- Không có trường `chapter`, `section`, `explanation`.
- File kết thúc bằng `];` và không có mã thực thi khác, để `exam.js` đọc được biến global.

### 4.2 Phân bố câu hỏi

**Dược học cổ truyền — 217 câu**

| Nhóm nguồn | Câu |
|---|---:|
| Thuốc khử hàn (Tr.142–144) | 16 |
| Bình can tức phong, an thần, khai khiếu (Tr.115–118) | 16 |
| Lợi thủy thẩm thấp (Tr.134–135) | 10 |
| Tả hạ (Tr.153–154) | 10 |
| Tiêu đạo (Tr.164–165) | 9 |
| Thanh nhiệt (Tr.71–72) | 10 |
| Lý huyết (Tr.73–74) | 10 |
| Hóa đờm (Tr.82–83) | 10 |
| Bổ (Tr.99; 101–102) | 20 |
| Cố sáp (Tr.166–167) | 11 |
| Phân loại YHCT & Giải biểu | 13 |
| Lý thuyết YHCT — Phần 1 (Âm dương, Ngũ hành, Tạng phủ) | 35 |
| Lý thuyết YHCT — Phần 2 (Tứ chẩn) | 40 |
| Lý thuyết YHCT — Phần 3 (Bát cương, sau dedupe) | 7 |

**Dược lâm sàng — 305 câu**

| Bài | Câu | Bài | Câu |
|---|---:|---|---:|
| 1. Đại cương | 7 | 8. Đái tháo đường | 6 |
| 2. Dược động học lâm sàng | 22 | 9. Tăng huyết áp | 24 |
| 3. Tương tác thuốc | 49 | 10. Loét dạ dày – tá tràng | 11 |
| 4. Phản ứng bất lợi | 23 | 11. Giun – sán | 21 |
| 5. Xét nghiệm lâm sàng | 47 | 12. Bệnh về mắt | 16 |
| 6. Thông tin về thuốc | 16 | 13. Tai mũi họng | 10 |
| 7. Động kinh | 13 | 14. Đối tượng đặc biệt | 40 |

### 4.3 Làm sạch dữ liệu

**Dược học cổ truyền**

- Dedupe khít: bỏ 45 câu (5 câu block "Trang 71" bị dán lặp + 40 câu PHẦN 3 lặp lại phần trước).
- Dedupe gần: bỏ 1 câu PHẦN 3 trùng PHẦN 2 (cùng hỏi "dẫn thuốc vào 12 kinh", chỉ khác chữ "của").
- Tổng bỏ 46 câu → còn **217**.
- PHẦN 1 câu 18 thiếu phương án D: bổ sung `D. Tâm, Can, Tỳ, Phế, Thận, Tam tiêu`; đáp án A giữ nguyên; đánh dấu review.
- PHẦN 2 câu 1 có A và C trùng nội dung: đổi C thành `Vọng (nhìn) - Văn (nghe) - Thiết (sờ) - Vấn (hỏi).`; đáp án A giữ nguyên.
- 6 câu có ghi chú đáp án theo "dấu đỏ/vòng đỏ" trong hình; docx không kèm ảnh:
  - 2 câu đáp án khớp nội dung: giữ nguyên.
  - 4 câu đáp án lệch kiến thức chuẩn: **giữ nguyên đáp án nguồn** theo D8, ghi bảng đối chiếu trong `docs/subjects/duoc-hoc-co-truyen.md`.

**Dược lâm sàng**

- Không dedupe: 2 câu cùng stem "Thuốc nào sau đây làm chậm lớn ở trẻ em?" (Bài 14 câu 4 và 7) có phương án và đáp án khác nhau → là 2 câu hợp lệ, giữ cả hai.
- Bài 8 câu 1 đáp án nguồn chỉ ghi `A`; data dùng `answer: "A"` với `option_a: "Glucid"` (đã có trong nguồn) — ghi chú trong docs.
- Bài 8 câu 4 có A và B cùng `126mg/dl` → sửa A thành `≥ 126mg/dl`, B thành `< 126mg/dl`; đáp án A giữ nguyên.
- Các cặp phương án khác chỉ khác dấu `<`/`>` hoặc đơn vị, không phải trùng.

## 5. Hành vi trang luyện tập

### 5.1 Thứ tự câu

- Lần đầu (chưa có order trong localStorage): sinh thứ tự ngẫu nhiên bằng Fisher–Yates, lưu mảng `id` vào localStorage.
- Các lần tải sau: đọc lại order đã lưu; nếu order không hợp lệ (thiếu/thừa/trùng `id`, sai kiểu) thì sinh lại và lưu.
- Chỉ nút **"Reset kết quả"** mới sinh order mới (đồng thời xoá đáp án đã chọn và đưa về trang 1).
- Trong cùng phiên, chuyển câu/sidebar không đổi order.

### 5.2 Lưu đáp án

- `localStorage["quiz_user_answers_<subject>_v1"]` là object:
  ```json
  { "1": "B", "2": "A", "3": "D" }
  ```
- Key = `id` câu hỏi; value = **key gốc** của phương án đã chọn.
- Phương án vẫn được đảo mỗi lần tải (giữ hành vi cũ), nhưng khi render so sánh theo key gốc nên đáp án luôn gắn đúng nội dung.
- Sidebar hiển thị chữ cái **theo vị trí hiển thị** của phương án đã chọn, không phải key gốc.
- Điểm "Đúng: x / N" tính bằng so sánh key gốc.
- Nút "Reset kết quả": xoá object đáp án + sinh order mới + về trang 1.
- Dữ liệu localStorage hỏng/khác schema → bỏ qua, bắt đầu object rỗng; không làm crash trang.

### 5.3 Giao diện & UX

Chi tiết đầy đủ ở [`docs/design/mobile-ui.md`](../../design/mobile-ui.md). Tóm tắt:

- **Hướng thị giác "Sổ ôn bài"**: nền giấy ấm, mực đậm, teal/amber, serif cho tiêu đề/câu hỏi, system sans cho đáp án, nhãn mono. Không gradient tím, không glass, không emoji icon.
- **Mobile-first**: ưu tiên 430×932; `viewport-fit=cover`, `100dvh`, safe-area top/bottom; vùng chạm ≥44px; nội dung không bị bottom bar che.
- **Luyện tập 20 câu/trang**: app bar (back, tên môn, `Trang x/y`, nút Reset icon, progress line), 20 question cards, option full-width 56px, bottom bar (Trước / Danh sách câu / Sau) chuyển trang.
- **Desktop ≥900px và cao ≥600px**: sidebar grid cố định + nội dung; mobile/landscape thấp dùng bottom sheet "Danh sách câu" (44px ô, focus trap, Esc đóng).
- **Reset luôn thấy**: icon ở app bar, nút trong sheet và nút dưới danh sách câu; xác nhận 2 bước, không dùng `confirm()`.
- **Lobby mới**: wordmark "SỔ ÔN BÀI", greeting "Hôm nay, học gì?", card "Tiếp tục học", danh sách môn có tab màu + tiến độ, tip card. Dữ liệu từ `shared/subjects.js` + `shared/menu.js`.
- **Motion**: press stamp 90ms, card enter 180ms, correct success underline 320ms + check stamp, wrong shake 240ms, streak chip, progress 240ms, sheet 240ms. Confetti giấy 6 mảnh trong card, không phủ màn hình.
- **Reduced motion**: bỏ translate/shake/confetti/stamp; giữ đổi màu + icon + opacity 120ms; sheet/progress hiện ngay.
- **Không dùng** hiệu ứng tim/phân bay cũ; thay bằng phản hồi "giấy/con dấu" gọn.
- **Icon**: inline SVG 24px, stroke 1.75; emoji không dùng cho điều hướng.
- **Trang cũ**: không đổi giao diện; lobby mới là điểm vào chung.

## 6. Trang kiểm tra

- Copy `exam.html` + `exam.js` từ `duocly-2`, chỉ đổi tiêu đề và storage key.
- Giữ `EXAM_QUESTION_COUNT = 40`; giữ 20 câu/trang (không đổi logic chấm điểm).
- Đề được lưu qua refresh (indexes, option order, answers) để làm dở không mất.
- Nút "Tạo đề mới" xoá 3 key và tải lại trang.
- Danh sách câu nằm trong `<details class="exam-nav">`: hàng 6 ô mobile / 10 ô desktop, mỗi ô 44px, một ô/câu, hàng ngang 1..40; mở ra xem score + Reset.
- Đáp án được lưu ngay khi bấm và các option bị disable; không còn delay 600ms chỉ để chạy hiệu ứng.
- Trang exam mới không dùng hiệu ứng tim/phân bay; `prefers-reduced-motion` tắt animation của h1/main-layout/question-block.
- Áp dụng app bar, option full-width, safe-area và typography mobile từ `shared/mobile.css`.

## 7. Cấu trúc file

```
english-quiz/
├── docs/
│   ├── README.md
│   ├── quiz-data-schema.md
│   ├── adding-a-subject.md
│   ├── design/
│   │   └── mobile-ui.md          # tokens, layout, motion, lobby, iPhone QA
│   ├── subjects/
│   │   ├── duoc-hoc-co-truyen.md
│   │   └── duoc-lam-sang.md
│   └── superpowers/
│       ├── specs/2026-10-27-them-2-mon-hoc-design.md
│       └── plans/2026-10-27-them-2-mon-hoc.md
│
├── shared/
│   ├── quiz-core.js         # shuffle, order, chuẩn hoá đáp án (hàm thuần)
│   ├── mobile.css           # practice mobile-first + motion
│   ├── menu.css             # lobby "Sổ ôn bài"
│   ├── subjects.js          # registry môn học + storage key + count
│   ├── menu.js              # render lobby + tiến độ
│   └── menu.html            # lobby mới
│
├── scripts/
│   ├── validate-quiz-data.mjs
│   └── test-quiz-core.mjs
│
├── duoc_hoc_co_truyen/
│   ├── index.html
│   ├── exam.html
│   ├── main.js
│   ├── exam.js
│   ├── quiz_data.js         # 217 câu
│   └── DHCT f.docx
│
├── duoc_lam_sang/
│   ├── index.html
│   ├── exam.html
│   ├── main.js
│   ├── exam.js
│   ├── quiz_data.js         # 305 câu
│   └── DLS.docx
```

Storage key:

| Mục đích | DHCT | DLS |
|---|---|---|
| Thứ tự câu | `quiz_question_order_dhct_v1` | `quiz_question_order_dls_v1` |
| Đáp án luyện tập | `quiz_user_answers_dhct_v1` | `quiz_user_answers_dls_v1` |
| Đề kiểm tra | `quiz_exam_indexes_dhct_v1`, `quiz_exam_shuffled_options_dhct_v1`, `quiz_exam_answers_dhct_v1` | tương tự `dls_v1` |

## 8. Tiêu chí nghiệm thu

1. `duoc_hoc_co_truyen/quiz_data.js` có đúng 217 object; `duoc_lam_sang/quiz_data.js` có đúng 305 object.
2. Mọi câu có 4 phương án khác rỗng, `answer` thuộc A–D, `id` duy nhất và liên tục 1..N.
3. Không còn câu trùng hoàn toàn (cùng câu + cùng bộ phương án + cùng đáp án); DHCT không còn cặp gần trùng đã xác định.
4. Refresh 3 lần: **thứ tự câu không đổi**; đáp án đã chọn vẫn nằm đúng câu và đúng nội dung phương án.
5. Bấm "Reset kết quả": đáp án bị xoá, thứ tự câu đổi, về trang 1; điểm "Đúng" về 0.
6. Trang kiểm tra tạo đúng 40 câu; refresh giữ nguyên đề đang làm; "Tạo đề mới" tạo đề khác.
7. Lobby hiển thị 2 môn mới (DHCT, DLS) + các môn đang bật; card "Tiếp tục học" mở đúng môn; tiến độ khớp localStorage.
8. Trên 430×932: không tràn ngang; app bar không bị Dynamic Island che; bottom bar không bị home indicator che; mọi nút ≥44px.
9. Motion: đúng/sai có phản hồi rõ; bật `prefers-reduced-motion` thì không còn translate/shake/confetti, vẫn thấy đúng/sai.
10. Không file nào của các môn cũ bị sửa (kiểm tra `git status`).
11. Docs mô tả đúng schema, số câu, lỗi dữ liệu đã xử lý, design mobile và cách thêm môn mới.
12. `node --test scripts/test-quiz-core.mjs` và `node scripts/validate-quiz-data.mjs` chạy qua.

## 9. Điểm còn để builder quyết

- Tên hàm/chi tiết triển khai trong `main.js`.
- Có commit script tạo dữ liệu một lần hay không. Mặc định: **không commit** script chuyển đổi; chỉ commit dữ liệu đã tạo và validator.
- Có cập nhật `README.md` gốc hay chỉ `docs/`. Mặc định: cập nhật cả hai.
- Wordmark lobby "SỔ ÔN BÀI" là đề xuất; có thể đổi mà không ảnh hưởng layout.
- Lobby chỉ hiện các môn đang bật (3 môn cũ + 2 môn mới); không tự bật lại 8 môn đang comment.
- Dùng system font (New York/SF Pro trên iPhone) thay Google Fonts để chạy offline.
- Practice 20 câu/trang; exam giữ 20 câu/trang trong phase này.

## 10. Lịch sử thay đổi

| Ngày | Thay đổi |
|---|---|
| 2026-10-27 | Bản đầu: đảo câu mỗi lần refresh |
| 2026-10-27 | Đổi trigger: giữ order khi refresh, chỉ đảo khi bấm "Reset kết quả" |
| 2026-10-27 | Thêm hướng UI/UX mobile-first "Sổ ôn bài", lobby mới, motion + reduced motion |
| 2026-10-27 | Đổi practice sang 20 câu/trang, thêm nút Làm kiểm tra + popup Reset, bỏ nền vàng nửa thân |

## 11. Kết quả builder check (đã xử lý)

| Vấn đề builder nêu | Cách xử lý |
|---|---|
| DLS 304 hay 305? Bài 8 có 5 hay 6 câu? | Xác minh lại: Bài 8 có 6 câu; DLS giữ **305** |
| Cặp "chậm lớn" Bài 14 câu 4/7 | Là 2 câu khác phương án/đáp án → giữ cả hai |
| DHCT PHẦN 2 câu 1 trùng A/C | Sửa C thành phương án khác |
| DLS Bài 8 câu 4 trùng A/B | Sửa thành `≥ 126mg/dl` và `< 126mg/dl` |
| DHCT có 6 ghi chú "dấu đỏ", không phải 2 | Ghi cả 6 vào docs; 4 câu lệch chuẩn giữ nguyên đáp án nguồn (D8) |
| PHẦN 2 câu 23 gần trùng PHẦN 3 câu 21 | Bỏ 1 câu → DHCT còn **217** |
