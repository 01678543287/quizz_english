# Pháp chế dược (PCD)

## Nguồn

- File: `phap_che_duoc/PCD .docx`
- Bóc bằng `textutil` ngày 2026-10-27.
- Tổng câu thô: **468**.
- Sau dedupe: **466 câu**.
- Nguồn ghi đáp án dạng chữ cái (`Đáp án: B`), không kèm nội dung đáp án.

## Phân bố

Nguồn có 14 nhóm bài (một số bài xuất hiện 2 lần với cách viết hoa khác nhau; coi là 2 bộ câu bổ sung):

| Nhóm nguồn | Câu |
|---|---:|
| BÀI 3 — Thuốc gây nghiện, hướng thần, tiền chất | 30 |
| BÀI 4 — Kê đơn thuốc ngoại trú (2 nhóm) | 24 + 18 |
| BÀI 5 — Đăng ký thuốc (2 nhóm) | 40 + 28 |
| BÀI 6 — Nhãn thuốc (2 nhóm) | 41 + 40 |
| BÀI 7 — Quản lý chất lượng thuốc (2 nhóm) | 35 + 29 |
| BÀI 8 — Kinh doanh thuốc phòng/chữa bệnh (2 nhóm) | 43 + 27 |
| BÀI 9 — Cấp chứng chỉ hành nghề dược | 25 |
| BÀI 10 — Thông tin, quảng cáo thuốc (2 nhóm) | 59 + 27 |

Tổng sau dedupe: 466.

## Dedupe

Bỏ 2 câu trùng khít theo nội dung câu (giữ bản đầu):

1. "Định nghĩa đúng về thuốc generic" — xuất hiện ở BÀI 5 (bản đầu, định nghĩa đầy đủ có tương đương sinh học) và BÀI 5 bộ sau (bản rút gọn). Giữ bản đầu.
2. "Ý nghĩa của tiêu chuẩn chất lượng thuốc là gì?" — xuất hiện 2 lần với phương án đảo thứ tự; giữ bản đầu.

Không có câu nào thiếu phương án/đáp án; không có phương án trùng khít sau khi kiểm tra.

## Ghi chú dữ liệu

- 18 câu có chứa chữ "hình/ảnh" nhưng là "hình thức", "hình ảnh trên nhãn" — không phải câu phụ thuộc hình ảnh; docx không nhúng ảnh.
- Đáp án phân bố: A 115, B 118, C 116, D 117.
- Một số câu/đáp án có văn phong nguồn hơi dài; giữ nguyên nội dung, chỉ chuẩn hoá khoảng trắng khi tạo `quiz_data.js`.

## Storage key

- `quiz_question_order_pcd_v1`
- `quiz_user_answers_pcd_v1`
- `quiz_exam_indexes_pcd_v1`, `quiz_exam_shuffled_options_pcd_v1`, `quiz_exam_answers_pcd_v1`
