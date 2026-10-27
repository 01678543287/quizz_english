# Dược lâm sàng (DLS)

## Nguồn

- File: `duoc_lam_sang/DLS.docx`
- Bóc bằng `textutil` ngày 2026-10-27.
- Tổng câu: **305** (giữ nguyên, không dedupe).
- Cấu trúc nguồn: 14 bài, số câu reset theo từng bài.

## Phân bố

| Bài | Câu | Bài | Câu |
|---|---:|---|---:|
| 1. Đại cương môn học Dược lâm sàng | 7 | 8. Thuốc điều trị đái tháo đường | 6 |
| 2. Dược động học lâm sàng | 22 | 9. Tăng huyết áp | 24 |
| 3. Tương tác thuốc | 49 | 10. Loét dạ dày – tá tràng | 11 |
| 4. Phản ứng bất lợi của thuốc | 23 | 11. Bệnh giun – sán | 21 |
| 5. Xét nghiệm lâm sàng và nhận định kết quả | 47 | 12. Bệnh về mắt | 16 |
| 6. Thông tin về thuốc | 16 | 13. Tai mũi họng | 10 |
| 7. Động kinh | 13 | 14. Đối tượng đặc biệt | 40 |

Tổng: 305.

## Vì sao không dedupe

Có 2 câu cùng stem:

- Bài 14 câu 4: "Thuốc nào sau đây làm chậm lớn ở trẻ em?" — A. Ampicilin, B. Cephalexin, C. Tetracyclin, D. Sulfamid; đáp án C.
- Bài 14 câu 7: cùng stem — A. Corticoid, B. Vitamin, C. Calcium, D. Sắt; đáp án A.

Hai câu kiểm tra hai nhóm thuốc khác nhau, phương án và đáp án khác nhau → giữ cả hai.

## Lỗi dữ liệu đã sửa

| Vị trí | Lỗi | Cách sửa |
|---|---|---|
| Bài 8 câu 1 | Đáp án chỉ ghi `A`, thiếu nội dung | `A. Glucid` |
| Bài 8 câu 4 | A và B cùng `126mg/dl` | A → `≥ 126mg/dl`; B → `< 126mg/dl`; đáp án A giữ nguyên |

## Ghi chú

- "Câu 3" của Bài 8 là câu thật ("Triệu chứng lâm sàng không thường gặp của bệnh đái tháo đường?"), không phải placeholder trống.
- Một số tiêu đề bài trong nguồn viết sai chính tả ("ĐIẾU TRỊ", "LÂM SÀNGVÀ"). Không dùng tiêu đề làm dữ liệu, nên không ảnh hưởng app; giữ nguyên trong docs để dễ đối chiếu.
- Nội dung câu hỏi giữ nguyên văn phong nguồn, kể cả lỗi chính tả nhỏ ("isulin", "Amoxcilin").
- Đáp án phân bố: A 81, B 82, C 71, D 71.
