# Dược học cổ truyền (DHCT)

## Nguồn

- File: `duoc_hoc_co_truyen/DHCT f.docx`
- Bóc bằng `textutil` ngày 2026-10-27.
- Tổng câu thô: **263** (140 câu theo chuyên đề/trang + 123 câu ở PHẦN 1–3).
- Sau dedupe: **217 câu**.

## Phân bố

| Nhóm | Câu |
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
| Phân loại thuốc YHCT & Giải biểu | 13 |
| Lý thuyết YHCT — Phần 1 (Âm dương, Ngũ hành, Tạng phủ) | 35 |
| Lý thuyết YHCT — Phần 2 (Tứ chẩn) | 40 |
| Lý thuyết YHCT — Phần 3 (Bát cương) | 7 |

Tổng: 217.

## Dedupe

- 45 câu trùng khít:
  - 5 câu trong block "Trang 71 – Thuốc thanh nhiệt" bị dán lặp.
  - 40 câu PHẦN 3 lặp lại PHẦN 2 / phần Giải biểu.
- 1 câu gần trùng: PHẦN 2 câu 23 và PHẦN 3 câu 21 (cùng hỏi "dẫn thuốc vào 12 kinh", khác mỗi chữ "của"). Bỏ bản ở PHẦN 3.
- Tổng bỏ 46 → còn 217.

## Lỗi dữ liệu đã sửa

| Vị trí | Lỗi | Cách sửa |
|---|---|---|
| PHẦN 1 câu 18 | Chỉ có A, B, C | Thêm `D. Tâm, Can, Tỳ, Phế, Thận, Tam tiêu`; đáp án A giữ nguyên |
| PHẦN 2 câu 1 | A và C trùng nội dung | Đổi C thành `Vọng (nhìn) - Văn (nghe) - Thiết (sờ) - Vấn (hỏi).` |
| PHẦN 3 câu 21 | Trùng PHẦN 2 câu 23 | Bỏ |

## 6 câu có ghi chú đáp án theo "dấu đỏ" trong hình

Docx không nhúng ảnh, nên không kiểm chứng được vòng đỏ. Quyết định: **giữ nguyên đáp án nguồn** (D8 trong design doc) và ghi bảng đối chiếu dưới đây.

| # | Vị trí | Câu hỏi | Đáp án nguồn | Kiến thức chuẩn | Quyết định |
|---|---|---|---|---|---|
| 1 | Trang 101–102 câu 10 | Vị thuốc thuộc nhóm bổ dương? | C. Đương quy | D. Ba kích | Giữ C |
| 2 | Trang 101–102 câu 18 | Vị thuốc thuộc nhóm bổ huyết? | A. Cẩu tích | D. Thục địa | Giữ A |
| 3 | Trang 166 câu 10 | Thuốc cố sáp thường có vị gì? | A. Cay, đắng | C. Chát, chua | Giữ A |
| 4 | Trang 166 câu 11 | Ba nhóm chính của thuốc cố sáp? | D. Liễm hãn, cố tinh sáp niệu, sáp trường chỉ tả | D | Giữ D (khớp) |
| 5 | Trang 166 câu 18 | Liên tử lấy từ bộ phận nào? | B. Quả chín của cây sơn thù | D. Hạt sen còn màng đỏ | Giữ B |
| 6 | Phần phân loại YHCT & Giải biểu câu 13 | Vị thuốc phát tán phong nhiệt, giải độc, giáng hỏa... | A. Cúc hoa | A. Cúc hoa | Giữ A (khớp nội dung; ghi chú nói dấu đỏ ở Ma hoàng) |

Nếu chủ dự án muốn sửa 4 câu lệch chuẩn (1, 2, 3, 5), đổi `answer` tương ứng trong `quiz_data.js` và cập nhật bảng này.

## Ghi chú khác

- Câu hỏi có số thứ tự reset theo từng trang/PHẦN; khi đưa vào app đánh số lại toàn cục 1..217.
- Nội dung giữ nguyên văn phong nguồn, kể cả một số lỗi chính tả nhỏ.
