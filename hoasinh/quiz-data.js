const quizDataRaw = [
    {
        "test_name": "Test Hóa Sinh",
        "chapter": "HÓA SINH ĐẠI CƯƠNG & CHUYỂN HÓA",
        "questions": [
            {
                "id": 1,
                "question": "Các nguyên tố chính cấu tạo nên cơ thể người là:",
                "option_a": "C, H, O, N, Ca",
                "option_b": "Na, K, Cl, Fe, Mg",
                "option_c": "C, H, S, P, Fe",
                "option_d": "O, N, K, Na, Cl",
                "answer": "A"
            },
            {
                "id": 2,
                "question": "Các hợp chất vô cơ chiếm bao nhiêu % thân trọng cơ thể người?",
                "option_a": "25%",
                "option_b": "30%",
                "option_c": "45%",
                "option_d": "60%",
                "answer": "C"
            },
            {
                "id": 3,
                "question": "Các hợp chất vô cơ trong cơ thể người tồn tại dưới bao nhiêu dạng?",
                "option_a": "1 dạng",
                "option_b": "2 dạng",
                "option_c": "3 dạng",
                "option_d": "4 dạng",
                "answer": "C"
            },
            {
                "id": 4,
                "question": "Lipid chiếm bao nhiêu % trọng lượng cơ thể người?",
                "option_a": "1–2%",
                "option_b": "3–10%",
                "option_c": "15–20%",
                "option_d": "25–30%",
                "answer": "B"
            },
            {
                "id": 5,
                "question": "Glucid chiếm bao nhiêu % trọng lượng cơ thể người?",
                "option_a": "0,5–1%",
                "option_b": "1–15%",
                "option_c": "20–30%",
                "option_d": "40–50%",
                "answer": "B"
            },
            {
                "id": 6,
                "question": "Protid chiếm bao nhiêu % trọng lượng cơ thể người?",
                "option_a": "5–10%",
                "option_b": "10–14%",
                "option_c": "15–20%",
                "option_d": "25–30%",
                "answer": "C"
            },
            {
                "id": 7,
                "question": "Lipid là hợp chất chứa các nguyên tố chính nào?",
                "option_a": "C, H, O",
                "option_b": "C, H, N",
                "option_c": "C, O, N",
                "option_d": "H, O, N",
                "answer": "A"
            },
            {
                "id": 8,
                "question": "Hóa sinh học acid nucleic là trung tâm của môn học nào?",
                "option_a": "Sinh lý học",
                "option_b": "Di truyền học",
                "option_c": "Hóa phân tích",
                "option_d": "Vi sinh vật học",
                "answer": "B"
            },
            {
                "id": 9,
                "question": "Quá trình đồng hóa và dị hóa được xúc tác bởi:",
                "option_a": "Hormone",
                "option_b": "Vitamin",
                "option_c": "Các enzym đặc hiệu",
                "option_d": "Ion khoáng",
                "answer": "C"
            },
            {
                "id": 10,
                "question": "Chu trình Krebs diễn ra qua bao nhiêu giai đoạn?",
                "option_a": "6",
                "option_b": "7",
                "option_c": "8",
                "option_d": "10",
                "answer": "C"
            },
            {
                "id": 11,
                "question": "Chất được tái tạo sau cùng của chu trình Krebs là:",
                "option_a": "Acid citric",
                "option_b": "Succinyl-CoA",
                "option_c": "Oxaloacetate",
                "option_d": "Acetyl-CoA",
                "answer": "C"
            },
            {
                "id": 12,
                "question": "Thủy phân liên kết phosphate nghèo năng lượng cho khoảng:",
                "option_a": "100–500 calo",
                "option_b": "500–800 calo",
                "option_c": "1000–5000 calo",
                "option_d": "8000–16000 calo",
                "answer": "C"
            },
            {
                "id": 13,
                "question": "Thủy phân liên kết phosphate giàu năng lượng cho khoảng:",
                "option_a": "1000–3000 calo/mol",
                "option_b": "3000–6000 calo/mol",
                "option_c": "8000–16000 calo/mol",
                "option_d": ">20000 calo/mol",
                "answer": "C"
            },
            {
                "id": 14,
                "question": "Chu trình Krebs xảy ra ở đâu trong tế bào nhân thật?",
                "option_a": "Nhân",
                "option_b": "Lưới nội chất",
                "option_c": "Ty thể",
                "option_d": "Ribosome",
                "answer": "C"
            },
            {
                "id": 15,
                "question": "Enzym duy nhất của chu trình Krebs gắn với màng ty thể là:",
                "option_a": "Enzym malat",
                "option_b": "Enzym succinat",
                "option_c": "Enzym citrat",
                "option_d": "Enzym fumarat",
                "answer": "B"
            },
            {
                "id": 16,
                "question": "Một vòng chu trình Krebs cung cấp năng lượng tương đương:",
                "option_a": "6 ATP",
                "option_b": "8 ATP",
                "option_c": "10 ATP",
                "option_d": "12 ATP",
                "answer": "D"
            },
            {
                "id": 17,
                "question": "Hô hấp tế bào là quá trình:",
                "option_a": "Tổng hợp protein",
                "option_b": "Tổng hợp lipid",
                "option_c": "Tạo CO2 và vận chuyển H tới O2 tạo H2O",
                "option_d": "Phân bào",
                "answer": "C"
            },
            {
                "id": 18,
                "question": "Biến các phân tử hữu cơ khác nhau thành chất riêng của cơ thể gọi là:",
                "option_a": "Tiêu hóa",
                "option_b": "Hấp thu",
                "option_c": "Trao đổi chất",
                "option_d": "Bài tiết",
                "answer": "C"
            },
            {
                "id": 19,
                "question": "Phân giải chất hữu cơ và đào thải cặn bã gọi là:",
                "option_a": "Đồng hóa",
                "option_b": "Dị hóa",
                "option_c": "Tiêu hóa",
                "option_d": "Hấp thu",
                "answer": "B"
            },
            {
                "id": 20,
                "question": "Gắn gốc acid phosphoric vào phân tử hữu cơ gọi là:",
                "option_a": "Oxy hóa",
                "option_b": "Khử",
                "option_c": "Phosphoryl hóa",
                "option_d": "Thủy phân",
                "answer": "C"
            },
            {
                "id": 21,
                "question": "Chu trình Krebs giảm khi nồng độ ATP trong tế bào:",
                "option_a": "Thấp",
                "option_b": "Bình thường",
                "option_c": "Cao",
                "option_d": "Không đổi",
                "answer": "C"
            },
            {
                "id": 22,
                "question": "Quá trình đặc trưng cho sự sống của sinh vật là:",
                "option_a": "Trao đổi chất",
                "option_b": "Hô hấp ngoài",
                "option_c": "Tiêu hóa",
                "option_d": "Bài tiết",
                "answer": "A"
            },
            {
                "id": 23,
                "question": "Các giai đoạn của đồng hóa gồm:",
                "option_a": "Hấp thu – bài tiết – tổng hợp",
                "option_b": "Tiêu hóa – hấp thu – tổng hợp",
                "option_c": "Dị hóa – thải trừ – hấp thu",
                "option_d": "Hô hấp – tuần hoàn – bài tiết",
                "answer": "B"
            },
            {
                "id": 24,
                "question": "Hô hấp tế bào gồm các quá trình:",
                "option_a": "Tổng hợp ATP và protein",
                "option_b": "Tạo CO2 và vận chuyển H tạo H2O",
                "option_c": "Thủy phân glucose",
                "option_d": "Phosphoryl hóa trực tiếp",
                "answer": "B"
            },
            {
                "id": 25,
                "question": "Chất có liên kết phosphat giàu năng lượng nhất trong cơ thể là:",
                "option_a": "ADP",
                "option_b": "AMP",
                "option_c": "ATP",
                "option_d": "GTP",
                "answer": "C"
            },
            {
                "id": 26,
                "question": "Chất đầu tiên được tạo thành trong chu trình Krebs là:",
                "option_a": "Oxaloacetate",
                "option_b": "Acid citric",
                "option_c": "Succinyl-CoA",
                "option_d": "Fumarate",
                "answer": "B"
            },
            {
                "id": 27,
                "question": "Cơ thể không đổi cân nặng:",
                "option_a": "Đồng hóa > Dị hóa",
                "option_b": "Đồng hóa = Dị hóa",
                "option_c": "Đồng hóa < Dị hóa",
                "option_d": "Chỉ xảy ra dị hóa",
                "answer": "B"
            },
            {
                "id": 28,
                "question": "Cơ thể đang lớn:",
                "option_a": "Đồng hóa = Dị hóa",
                "option_b": "Đồng hóa < Dị hóa",
                "option_c": "Đồng hóa > Dị hóa",
                "option_d": "Không có dị hóa",
                "answer": "C"
            },
            {
                "id": 29,
                "question": "Cơ thể phục hồi sau bệnh:",
                "option_a": "Đồng hóa = Dị hóa",
                "option_b": "Đồng hóa > Dị hóa",
                "option_c": "Đồng hóa < Dị hóa",
                "option_d": "Chỉ dị hóa",
                "answer": "B"
            },
            {
                "id": 30,
                "question": "Cơ thể đang đói:",
                "option_a": "Đồng hóa > Dị hóa",
                "option_b": "Đồng hóa = Dị hóa",
                "option_c": "Đồng hóa < Dị hóa",
                "option_d": "Không xảy ra chuyển hóa",
                "answer": "C"
            },
            {
                "id": 31,
                "question": "Cơ thể người về già:",
                "option_a": "Đồng hóa > Dị hóa",
                "option_b": "Đồng hóa = Dị hóa",
                "option_c": "Đồng hóa < Dị hóa",
                "option_d": "Chỉ đồng hóa",
                "answer": "C"
            },
            {
                "id": 32,
                "question": "Cơ thể đang sút cân:",
                "option_a": "Đồng hóa = Dị hóa",
                "option_b": "Đồng hóa > Dị hóa",
                "option_c": "Đồng hóa < Dị hóa",
                "option_d": "Không dị hóa",
                "answer": "C"
            },
            {
                "id": 33,
                "question": "Thủy phân 1 liên kết ATP cho năng lượng khoảng:",
                "option_a": "3,5 calo",
                "option_b": "5,0 calo",
                "option_c": "7,3 calo",
                "option_d": "10 calo",
                "answer": "C"
            },
            {
                "id": 34,
                "question": "Thủy phân hoàn toàn tinh bột tạo ra:",
                "option_a": "Fructose",
                "option_b": "Galactose",
                "option_c": "Glucose",
                "option_d": "Sucrose",
                "answer": "C"
            },
            {
                "id": 35,
                "question": "Glucopolysaccharid thuộc nhóm:",
                "option_a": "Monosaccharid",
                "option_b": "Disaccharid",
                "option_c": "Polysaccharid",
                "option_d": "Oligosaccharid",
                "answer": "C"
            },
            {
                "id": 36,
                "question": "Saccharose thuộc nhóm:",
                "option_a": "Monosaccharid",
                "option_b": "Disaccharid",
                "option_c": "Polysaccharid",
                "option_d": "Heterosaccharid",
                "answer": "B"
            },
            {
                "id": 37,
                "question": "Lactose có nhiều trong:",
                "option_a": "Trái cây",
                "option_b": "Ngũ cốc",
                "option_c": "Sữa",
                "option_d": "Thịt",
                "answer": "C"
            },
            {
                "id": 38,
                "question": "Cellulose trong thực vật có nhiều ở:",
                "option_a": "Dịch bào",
                "option_b": "Nhân tế bào",
                "option_c": "Mô nâng đỡ",
                "option_d": "Lục lạp",
                "answer": "C"
            },
            {
                "id": 39,
                "question": "Glucid chiếm bao nhiêu % trọng lượng khô của thực vật?",
                "option_a": "20–30%",
                "option_b": "40–60%",
                "option_c": "80–90%",
                "option_d": "95–100%",
                "answer": "C"
            },
            {
                "id": 40,
                "question": "Ngưỡng thận glucose ở người trưởng thành bình thường là:",
                "option_a": "≈ 5 mmol/L",
                "option_b": "≈ 7 mmol/L",
                "option_c": "≈ 10 mmol/L",
                "option_d": "≈ 15 mmol/L",
                "answer": "C"
            },
            {
                "id": 41,
                "question": "Đặc điểm của người đái đường tụy là:",
                "option_a": "Giảm glucose máu",
                "option_b": "Tăng glucose máu, tăng thể ceton, mất muối, đa niệu, mô đói năng lượng",
                "option_c": "Giảm thể ceton máu",
                "option_d": "Không rối loạn chuyển hóa lipid",
                "answer": "B"
            },
            {
                "id": 42,
                "question": "Glucid chiếm bao nhiêu % trọng lượng khô ở người và động vật?",
                "option_a": "0,5%",
                "option_b": "1%",
                "option_c": "2%",
                "option_d": "10%",
                "answer": "C"
            },
            {
                "id": 43,
                "question": "Amylospectin chiếm bao nhiêu % phân tử tinh bột?",
                "option_a": "20–25%",
                "option_b": "30–40%",
                "option_c": "50–60%",
                "option_d": "75–80%",
                "answer": "D"
            },
            {
                "id": 44,
                "question": "Tổng hợp glycogen từ glucose nhờ enzym nào?",
                "option_a": "Hexokinase và phosphatase",
                "option_b": "Glycogen synthetase và branching enzyme",
                "option_c": "Amylase và maltase",
                "option_d": "Phosphorylase và debranching enzyme",
                "answer": "B"
            },
            {
                "id": 45,
                "question": "Phân hủy glycogen nhờ enzym nào?",
                "option_a": "Glycogen synthetase và branching enzyme",
                "option_b": "Amylase và maltase",
                "option_c": "Glycogen phosphorylase và debranching enzyme",
                "option_d": "Hexokinase và glucokinase",
                "answer": "C"
            },
            {
                "id": 46,
                "question": "Glucid là hợp chất hữu cơ chứa các nguyên tố:",
                "option_a": "C, H, N",
                "option_b": "C, H, O",
                "option_c": "H, O, N",
                "option_d": "C, O, P",
                "answer": "B"
            },
            {
                "id": 47,
                "question": "Tinh bột thuộc nhóm:",
                "option_a": "Monosaccharid",
                "option_b": "Disaccharid",
                "option_c": "Polysaccharid",
                "option_d": "Oligosaccharid",
                "answer": "C"
            },
            {
                "id": 48,
                "question": "Vai trò chính của glucid là:",
                "option_a": "Dự trữ vitamin",
                "option_b": "Cung cấp năng lượng",
                "option_c": "Điều hòa thân nhiệt",
                "option_d": "Bảo vệ cơ quan",
                "answer": "B"
            },
            {
                "id": 49,
                "question": "Monosaccharid hay gặp nhất là:",
                "option_a": "Fructose",
                "option_b": "Galactose",
                "option_c": "Ribose",
                "option_d": "Glucose",
                "answer": "D"
            },
            {
                "id": 50,
                "question": "Tiêu hóa glucid hoàn toàn nhờ enzym nào?",
                "option_a": "Pepsin",
                "option_b": "Lipase",
                "option_c": "Amylase và các disaccharidase ruột non",
                "option_d": "Trypsin",
                "answer": "C"
            },
            {
                "id": 51,
                "question": "Con đường Hexose diphosphat gồm mấy giai đoạn?",
                "option_a": "2",
                "option_b": "3",
                "option_c": "4",
                "option_d": "5",
                "answer": "B"
            },
            {
                "id": 52,
                "question": "Con đường Hexose diphosphat gồm mấy phản ứng?",
                "option_a": "8",
                "option_b": "9",
                "option_c": "10",
                "option_d": "12",
                "answer": "C"
            },
            {
                "id": 53,
                "question": "Con đường Hexose diphosphat xảy ra ở:",
                "option_a": "Ty thể",
                "option_b": "Nhân",
                "option_c": "Bào tương",
                "option_d": "Lưới nội sinh chất",
                "answer": "C"
            },
            {
                "id": 54,
                "question": "Hiếu khí: 1 glucose → bao nhiêu ATP?",
                "option_a": "30",
                "option_b": "36",
                "option_c": "38",
                "option_d": "42",
                "answer": "C"
            },
            {
                "id": 55,
                "question": "Yếm khí: 1 glucose → bao nhiêu ATP?",
                "option_a": "1",
                "option_b": "2",
                "option_c": "4",
                "option_d": "6",
                "answer": "B"
            },
            {
                "id": 56,
                "question": "Hormon điều khiển chính chuyển hóa glucid:",
                "option_a": "Glucagon",
                "option_b": "Insulin",
                "option_c": "Cortisol",
                "option_d": "Adrenalin",
                "answer": "B"
            },
            {
                "id": 57,
                "question": "Lúc đói, hormon điều chỉnh glucose là:",
                "option_a": "Insulin",
                "option_b": "Thyroxin",
                "option_c": "Glucagon",
                "option_d": "Estrogen",
                "answer": "C"
            },
            {
                "id": 58,
                "question": "Glucid chia làm mấy loại?",
                "option_a": "2",
                "option_b": "3",
                "option_c": "4",
                "option_d": "5",
                "answer": "B"
            },
            {
                "id": 59,
                "question": "Chất cung cấp năng lượng chủ yếu:",
                "option_a": "Lipid",
                "option_b": "Protein",
                "option_c": "Glucid",
                "option_d": "Vitamin",
                "answer": "C"
            },
            {
                "id": 60,
                "question": "Con đường Hexose monophosphat xảy ra ở:",
                "option_a": "Ty thể",
                "option_b": "Nhân",
                "option_c": "Bào tương",
                "option_d": "Ribosome",
                "answer": "C"
            },
            {
                "id": 61,
                "question": "Nguồn nội sinh cung cấp glucose máu:",
                "option_a": "Ruột",
                "option_b": "Thận",
                "option_c": "Gan",
                "option_d": "Phổi",
                "answer": "C"
            },
            {
                "id": 62,
                "question": "Hormon làm hạ glucose máu:",
                "option_a": "Glucagon",
                "option_b": "Insulin",
                "option_c": "Adrenalin",
                "option_d": "Cortisol",
                "answer": "B"
            },
            {
                "id": 63,
                "question": "Nơi tiêu hóa glucid mạnh và hoàn toàn nhất:",
                "option_a": "Miệng",
                "option_b": "Dạ dày",
                "option_c": "Ruột non",
                "option_d": "Đại tràng",
                "answer": "C"
            },
            {
                "id": 64,
                "question": "Có bao nhiêu loại acid béo?",
                "option_a": "1",
                "option_b": "2",
                "option_c": "3",
                "option_d": "4",
                "answer": "B"
            },
            {
                "id": 65,
                "question": "Cerid có ở đâu?",
                "option_a": "Máu",
                "option_b": "Gan",
                "option_c": "Lông, da, sáp tai",
                "option_d": "Não",
                "answer": "C"
            },
            {
                "id": 66,
                "question": "Sterid là ester của acid béo với:",
                "option_a": "Glycerol",
                "option_b": "Sterol",
                "option_c": "Ethanol",
                "option_d": "Amino acid",
                "answer": "B"
            },
            {
                "id": 67,
                "question": "Sterol quan trọng nhất:",
                "option_a": "Ergosterol",
                "option_b": "Sitosterol",
                "option_c": "Cholesterol",
                "option_d": "Campesterol",
                "answer": "C"
            },
            {
                "id": 68,
                "question": "Vai trò chính của cholesterol:",
                "option_a": "Dự trữ năng lượng",
                "option_b": "Cấu tạo màng tế bào",
                "option_c": "Vận chuyển oxy",
                "option_d": "Đông máu",
                "answer": "B"
            },
            {
                "id": 69,
                "question": "Acid palmitic thuộc nhóm:",
                "option_a": "Acid béo không no",
                "option_b": "Acid béo no",
                "option_c": "Acid amin",
                "option_d": "Acid ceton",
                "answer": "B"
            },
            {
                "id": 70,
                "question": "Lecithin thuộc nhóm:",
                "option_a": "Glycerid",
                "option_b": "Sterid",
                "option_c": "Phospholipid",
                "option_d": "Glycolipid",
                "answer": "C"
            },
            {
                "id": 71,
                "question": "Acid béo thường có số carbon:",
                "option_a": "6–10",
                "option_b": "8–12",
                "option_c": "12–24",
                "option_d": ">30",
                "answer": "C"
            },
            {
                "id": 72,
                "question": "Glycerid thuộc nhóm:",
                "option_a": "Lipid phức tạp",
                "option_b": "Lipid đơn giản",
                "option_c": "Sterol",
                "option_d": "Sáp",
                "answer": "B"
            },
            {
                "id": 73,
                "question": "Cholesterol máu giảm trong:",
                "option_a": "Xơ vữa",
                "option_b": "Đái tháo đường",
                "option_c": "Cường giáp, suy gan",
                "option_d": "Béo phì",
                "answer": "C"
            },
            {
                "id": 74,
                "question": "Cholesterol máu tăng trong:",
                "option_a": "Suy gan",
                "option_b": "Cường giáp",
                "option_c": "Xơ vữa, ĐTĐ",
                "option_d": "Suy dinh dưỡng",
                "answer": "C"
            },
            {
                "id": 75,
                "question": "Thoái hóa cholesterol ở gan tạo:",
                "option_a": "Acid mật",
                "option_b": "Muối mật",
                "option_c": "Hormone",
                "option_d": "Vitamin D",
                "answer": "B"
            },
            {
                "id": 76,
                "question": "Tổng hợp acid béo no mạnh nhất ở:",
                "option_a": "Tim",
                "option_b": "Gan",
                "option_c": "Não",
                "option_d": "Phổi",
                "answer": "B"
            },
            {
                "id": 77,
                "question": "Lipid cung cấp năng lượng gấp mấy lần glucid?",
                "option_a": "1,5",
                "option_b": "2",
                "option_c": "2,25",
                "option_d": "3",
                "answer": "C"
            },
            {
                "id": 78,
                "question": "Lipid tạp còn có nhóm:",
                "option_a": "Sulfur",
                "option_b": "Phosphat, amin, đường",
                "option_c": "Halogen",
                "option_d": "Kim loại",
                "answer": "B"
            },
            {
                "id": 79,
                "question": "Lipid trong máu tồn tại dưới dạng:",
                "option_a": "Acid béo tự do",
                "option_b": "Glycerid",
                "option_c": "Lipoprotein",
                "option_d": "Phospholipid",
                "answer": "C"
            },
            {
                "id": 80,
                "question": "Glycerid phổ biến nhất:",
                "option_a": "Monoglycerid",
                "option_b": "Diglycerid",
                "option_c": "Triglycerid",
                "option_d": "Tetraglycerid",
                "answer": "C"
            },
            {
                "id": 81,
                "question": "Quá trình sinh tổng hợp acid béo phụ thuộc vào chất nào?",
                "option_a": "Pyruvat",
                "option_b": "Acetyl-CoA",
                "option_c": "Lactat",
                "option_d": "Glucose",
                "answer": "B"
            },
            {
                "id": 82,
                "question": "Sinh tổng hợp triglycerid xảy ra mạnh ở đâu?",
                "option_a": "Não",
                "option_b": "Tim",
                "option_c": "Gan và mô mỡ",
                "option_d": "Phổi",
                "answer": "C"
            },
            {
                "id": 83,
                "question": "Thoái hóa cholesterol ở vỏ thượng thận tạo ra:",
                "option_a": "Muối mật",
                "option_b": "Vitamin D",
                "option_c": "Hormon steroid",
                "option_d": "Acid béo",
                "answer": "C"
            },
            {
                "id": 84,
                "question": "Thoái hóa cholesterol ở tinh hoàn tạo ra:",
                "option_a": "Estrogen",
                "option_b": "Progesteron",
                "option_c": "Testosteron",
                "option_d": "Cortisol",
                "answer": "C"
            },
            {
                "id": 85,
                "question": "Thoái hóa cholesterol ở buồng trứng tạo ra:",
                "option_a": "Cortisol",
                "option_b": "Androgen",
                "option_c": "Estrogen và Progesteron",
                "option_d": "Aldosteron",
                "answer": "C"
            },
            {
                "id": 86,
                "question": "Lipoprotein có kích thước lớn nhất, giàu triglycerid nhất:",
                "option_a": "LDL",
                "option_b": "HDL",
                "option_c": "VLDL",
                "option_d": "Chylomicron",
                "answer": "D"
            },
            {
                "id": 87,
                "question": "Cholesterol “xấu” là:",
                "option_a": "HDL",
                "option_b": "LDL",
                "option_c": "VLDL",
                "option_d": "Chylomicron",
                "answer": "B"
            },
            {
                "id": 88,
                "question": "Cholesterol “tốt” là:",
                "option_a": "LDL",
                "option_b": "VLDL",
                "option_c": "HDL",
                "option_d": "IDL",
                "answer": "C"
            },
            {
                "id": 89,
                "question": "Ý nghĩa β-oxy hóa acid béo carbon chẵn là cung cấp:",
                "option_a": "Glucose",
                "option_b": "Acid béo",
                "option_c": "Acetyl-CoA",
                "option_d": "Lactat",
                "answer": "C"
            },
            {
                "id": 90,
                "question": "HDL được tạo thành ở:",
                "option_a": "Gan",
                "option_b": "Ruột non",
                "option_c": "Gan và ruột non",
                "option_d": "Mô mỡ",
                "answer": "C"
            },
            {
                "id": 91,
                "question": "VLDL được tạo thành ở:",
                "option_a": "Ruột",
                "option_b": "Gan",
                "option_c": "Mô mỡ",
                "option_d": "Phổi",
                "answer": "B"
            },
            {
                "id": 92,
                "question": "Chylomicron được tổng hợp ở:",
                "option_a": "Gan",
                "option_b": "Tế bào cơ",
                "option_c": "Tế bào niêm mạc ruột",
                "option_d": "Tế bào mỡ",
                "answer": "C"
            },
            {
                "id": 93,
                "question": "Chất giữ vai trò hòa tan vitamin tan trong dầu và cấu tạo màng:",
                "option_a": "Glucid",
                "option_b": "Protid",
                "option_c": "Lipid",
                "option_d": "Muối khoáng",
                "answer": "C"
            },
            {
                "id": 94,
                "question": "β-oxy hóa acid béo carbon chẵn tạo thành:",
                "option_a": "Pyruvat",
                "option_b": "Acetyl-CoA",
                "option_c": "Lactat",
                "option_d": "Oxaloacetat",
                "answer": "B"
            },
            {
                "id": 95,
                "question": "Thể ceton được tổng hợp trong ty thể của tế bào:",
                "option_a": "Não",
                "option_b": "Cơ",
                "option_c": "Gan",
                "option_d": "Thận",
                "answer": "C"
            },
            {
                "id": 96,
                "question": "Nhịn đói kéo dài làm thể ceton máu:",
                "option_a": "Giảm",
                "option_b": "Không đổi",
                "option_c": "Tăng",
                "option_d": "Mất hoàn toàn",
                "answer": "C"
            },
            {
                "id": 97,
                "question": "Đái tháo đường nặng làm thể ceton máu:",
                "option_a": "Giảm",
                "option_b": "Bình thường",
                "option_c": "Tăng nhẹ",
                "option_d": "Tăng rất cao",
                "answer": "D"
            },
            {
                "id": 98,
                "question": "Nguyên nhân không bệnh lý làm tăng thể ceton:",
                "option_a": "Suy gan",
                "option_b": "Nhịn đói, vận động nhiều",
                "option_c": "Suy thận",
                "option_d": "Thiếu insulin",
                "answer": "B"
            },
            {
                "id": 99,
                "question": "Chất cách nhiệt, chống rét, bảo vệ cơ thể:",
                "option_a": "Protein",
                "option_b": "Glucid",
                "option_c": "Mỡ",
                "option_d": "Muối khoáng",
                "answer": "C"
            },
            {
                "id": 100,
                "question": "Chất có nhiều trong lòng trắng trứng, não, gan:",
                "option_a": "Cholesterol",
                "option_b": "Lecithin",
                "option_c": "Sphingomyelin",
                "option_d": "Cephalin",
                "answer": "B"
            },
            {
                "id": 101,
                "question": "Có nhiều ở chất trắng thần kinh:",
                "option_a": "Lecithin",
                "option_b": "Cholesterol",
                "option_c": "Sphingomyelin",
                "option_d": "Triglycerid",
                "answer": "C"
            },
            {
                "id": 102,
                "question": "Enzym tiêu hóa lipid ở ruột:",
                "option_a": "Pepsin",
                "option_b": "Amylase",
                "option_c": "Lipase tụy",
                "option_d": "Trypsin",
                "answer": "C"
            },
            {
                "id": 103,
                "question": "β-oxy hóa acid béo carbon chẵn xảy ra ở:",
                "option_a": "Bào tương",
                "option_b": "Nhân",
                "option_c": "Ty thể",
                "option_d": "Ribosome",
                "answer": "C"
            },
            {
                "id": 104,
                "question": "Protein thuần gồm:",
                "option_a": "Albumin, globulin, histon, protamin",
                "option_b": "Hemoglobin",
                "option_c": "Casein",
                "option_d": "Glycoprotein",
                "answer": "A"
            },
            {
                "id": 105,
                "question": "Protamin có trong nucleoprotein của:",
                "option_a": "Tế bào gan",
                "option_b": "Tế bào thần kinh",
                "option_c": "Tế bào sinh dục cá",
                "option_d": "Tế bào cơ",
                "answer": "C"
            },
            {
                "id": 106,
                "question": "Hemoglobin gồm bao nhiêu tiểu đơn vị?",
                "option_a": "2",
                "option_b": "3",
                "option_c": "4",
                "option_d": "6",
                "answer": "C"
            },
            {
                "id": 107,
                "question": "Phần protein của hemoglobin là:",
                "option_a": "Heme",
                "option_b": "Globin",
                "option_c": "Sắt",
                "option_d": "Porphyrin",
                "answer": "B"
            },
            {
                "id": 108,
                "question": "Một Hb vận chuyển được bao nhiêu O2?",
                "option_a": "1",
                "option_b": "2",
                "option_c": "3",
                "option_d": "4",
                "answer": "D"
            },
            {
                "id": 109,
                "question": "Cơ quan tạo hem nhiều nhất:",
                "option_a": "Gan và tủy xương",
                "option_b": "Thận",
                "option_c": "Phổi",
                "option_d": "Tim",
                "answer": "A"
            },
            {
                "id": 110,
                "question": "Rối loạn Hb và bilirubin gây:",
                "option_a": "Thiếu máu",
                "option_b": "Phù",
                "option_c": "Vàng da",
                "option_d": "Tím tái",
                "answer": "C"
            },
            {
                "id": 111,
                "question": "Protid bảo vệ cơ thể là:",
                "option_a": "Enzym",
                "option_b": "Hormone",
                "option_c": "Kháng thể",
                "option_d": "Albumin",
                "answer": "C"
            },
            {
                "id": 112,
                "question": "Protid gồm 2–vài chục aa gọi là:",
                "option_a": "Protein",
                "option_b": "Polypeptid",
                "option_c": "Peptid",
                "option_d": "Amin",
                "answer": "C"
            },
            {
                "id": 113,
                "question": "Protid gồm hàng trăm aa gọi là:",
                "option_a": "Peptid",
                "option_b": "Protein",
                "option_c": "Amin",
                "option_d": "Polysaccharid",
                "answer": "B"
            },
            {
                "id": 114,
                "question": "Tác dụng của vasopressin:",
                "option_a": "Tăng tiểu",
                "option_b": "Giảm huyết áp",
                "option_c": "Giảm tiểu, tăng HA",
                "option_d": "Giảm hấp thu nước",
                "answer": "C"
            },
            {
                "id": 115,
                "question": "Transferrin vận chuyển:",
                "option_a": "Đồng",
                "option_b": "Canxi",
                "option_c": "Sắt",
                "option_d": "Kẽm",
                "answer": "C"
            },
            {
                "id": 116,
                "question": "Ceruloplasmin vận chuyển:",
                "option_a": "Sắt",
                "option_b": "Đồng",
                "option_c": "Kẽm",
                "option_d": "Magie",
                "answer": "B"
            },
            {
                "id": 117,
                "question": "Protid gồm các nguyên tố chính:",
                "option_a": "C, H, O",
                "option_b": "C, H, O, N",
                "option_c": "C, H, N",
                "option_d": "H, O, N",
                "answer": "B"
            },
            {
                "id": 118,
                "question": "Bradykinin gây:",
                "option_a": "Co mạch",
                "option_b": "Giãn mạch",
                "option_c": "Tăng đông",
                "option_d": "Co cơ",
                "answer": "B"
            },
            {
                "id": 119,
                "question": "Enzym phân cắt gọi là:",
                "option_a": "Oxidase",
                "option_b": "Transferase",
                "option_c": "Lyase",
                "option_d": "Ligase",
                "answer": "C"
            },
            {
                "id": 120,
                "question": "Enzym thủy phân gọi là:",
                "option_a": "Hydrolase",
                "option_b": "Lyase",
                "option_c": "Ligase",
                "option_d": "Isomerase",
                "answer": "A"
            },
            {
                "id": 121,
                "question": "Enzym mất hoạt tính khi:",
                "option_a": "<10°C",
                "option_b": "20°C",
                "option_c": "40°C",
                "option_d": ">60–70°C",
                "answer": "D"
            },
            {
                "id": 122,
                "question": "Tăng nhiệt độ 10°C, tốc độ phản ứng tăng:",
                "option_a": "2 lần",
                "option_b": "5 lần",
                "option_c": "10 lần",
                "option_d": "~20 lần",
                "answer": "D"
            },
            {
                "id": 123,
                "question": "pH thích hợp của trypsin:",
                "option_a": "2–3",
                "option_b": "5–6",
                "option_c": "8–9",
                "option_d": "10–11",
                "answer": "C"
            },
            {
                "id": 124,
                "question": "pH thích hợp của pepsin:",
                "option_a": "6–7",
                "option_b": "4–5",
                "option_c": "1,5–2,5",
                "option_d": "8–9",
                "answer": "C"
            },
            {
                "id": 125,
                "question": "Nhiệt độ tối ưu của đa số enzym:",
                "option_a": "25°C",
                "option_b": "30°C",
                "option_c": "40°C",
                "option_d": "60°C",
                "answer": "C"
            },
            {
                "id": 126,
                "question": "pH tối ưu của đa số enzym:",
                "option_a": "Acid",
                "option_b": "Kiềm",
                "option_c": "Trung tính",
                "option_d": "Không phụ thuộc",
                "answer": "C"
            },
            {
                "id": 127,
                "question": "Glutamin synthetase thuộc loại:",
                "option_a": "Hydrolase",
                "option_b": "Oxidoreductase",
                "option_c": "Ligase",
                "option_d": "Lyase",
                "answer": "C"
            },
            {
                "id": 128,
                "question": "LDH có bao nhiêu isoenzyme?",
                "option_a": "3",
                "option_b": "4",
                "option_c": "5",
                "option_d": "6",
                "answer": "C"
            },
            {
                "id": 129,
                "question": "Nhiều enzym liên quan cùng quá trình gọi là:",
                "option_a": "Isoenzyme",
                "option_b": "Hệ enzyme",
                "option_c": "Apoenzyme",
                "option_d": "Coenzyme",
                "answer": "B"
            },
            {
                "id": 130,
                "question": "Tên enzym quốc tế gồm:",
                "option_a": "Tên + số",
                "option_b": "Tên cơ chất + loại phản ứng + ase",
                "option_c": "Tên người",
                "option_d": "Tên bệnh",
                "answer": "B"
            },
            {
                "id": 131,
                "question": "Enzym chia làm bao nhiêu nhóm?",
                "option_a": "4",
                "option_b": "5",
                "option_c": "6",
                "option_d": "7",
                "answer": "C"
            },
            {
                "id": 132,
                "question": "Enzym xúc tác cùng phản ứng gọi là:",
                "option_a": "Zymogen",
                "option_b": "Isoenzyme",
                "option_c": "Apoenzyme",
                "option_d": "Coenzyme",
                "answer": "B"
            },
            {
                "id": 133,
                "question": "Enzym tiêu hóa tồn tại dạng:",
                "option_a": "Hoạt động",
                "option_b": "Zymogen",
                "option_c": "Hormone",
                "option_d": "Vitamin",
                "answer": "B"
            },
            {
                "id": 134,
                "question": "Tốc độ enzym đo ở:",
                "option_a": "0°C",
                "option_b": "15°C",
                "option_c": "25°C",
                "option_d": "40°C",
                "answer": "C"
            },
            {
                "id": 135,
                "question": "Hoạt độ enzym đo chính xác trong:",
                "option_a": "10–15 phút",
                "option_b": "5–10 phút",
                "option_c": "1–5 phút",
                "option_d": ">20 phút",
                "answer": "C"
            },
            {
                "id": 136,
                "question": "Tốc độ tối đa khi:",
                "option_a": "Enzym dư",
                "option_b": "Cơ chất bão hòa",
                "option_c": "pH thấp",
                "option_d": "Nhiệt độ thấp",
                "answer": "B"
            },
            {
                "id": 137,
                "question": "Michaelis–Menten nói về vai trò:",
                "option_a": "Enzym",
                "option_b": "pH",
                "option_c": "Cơ chất",
                "option_d": "Nhiệt độ",
                "answer": "C"
            },
            {
                "id": 138,
                "question": "[S] << Km thì tốc độ phụ thuộc:",
                "option_a": "Enzym",
                "option_b": "Cơ chất",
                "option_c": "Nhiệt độ",
                "option_d": "pH",
                "answer": "B"
            },
            {
                "id": 139,
                "question": "[S] >> Km thì tốc độ phụ thuộc:",
                "option_a": "Cơ chất",
                "option_b": "Enzym",
                "option_c": "pH",
                "option_d": "Nhiệt độ",
                "answer": "B"
            },
            {
                "id": 140,
                "question": "Bản chất enzym là:",
                "option_a": "Lipid",
                "option_b": "Glucid",
                "option_c": "Protein",
                "option_d": "Vitamin",
                "answer": "C"
            },
            {
                "id": 141,
                "question": "V = ? khi [S] = Km:",
                "option_a": "Vmax",
                "option_b": "1/4 Vmax",
                "option_c": "1/2 Vmax",
                "option_d": "2Vmax",
                "answer": "C"
            },
            {
                "id": 142,
                "question": "Phương pháp tinh chế enzym:",
                "option_a": "Điện di",
                "option_b": "Ly tâm",
                "option_c": "Sắc ký",
                "option_d": "Lọc",
                "answer": "C"
            },
            {
                "id": 143,
                "question": "Hydroxylase thuộc nhóm:",
                "option_a": "Transferase",
                "option_b": "Hydrolase",
                "option_c": "Oxidoreductase",
                "option_d": "Ligase",
                "answer": "C"
            },
            {
                "id": 144,
                "question": "Thiếu vitamin ảnh hưởng sinh sản:",
                "option_a": "A",
                "option_b": "C",
                "option_c": "D",
                "option_d": "E",
                "answer": "D"
            },
            {
                "id": 145,
                "question": "Vitamin tăng hấp thu Ca, P:",
                "option_a": "A",
                "option_b": "B",
                "option_c": "D",
                "option_d": "E",
                "answer": "C"
            },
            {
                "id": 146,
                "question": "Thiếu vitamin làm khô biểu mô:",
                "option_a": "B",
                "option_b": "C",
                "option_c": "A",
                "option_d": "D",
                "answer": "C"
            },
            {
                "id": 147,
                "question": "Còi xương trẻ em do thiếu:",
                "option_a": "A",
                "option_b": "C",
                "option_c": "D",
                "option_d": "E",
                "answer": "C"
            },
            {
                "id": 148,
                "question": "Vitamin giúp mắt nhạy sáng:",
                "option_a": "B",
                "option_b": "C",
                "option_c": "A",
                "option_d": "D",
                "answer": "C"
            },
            {
                "id": 149,
                "question": "Quáng gà do thiếu:",
                "option_a": "B",
                "option_b": "A",
                "option_c": "C",
                "option_d": "D",
                "answer": "B"
            },
            {
                "id": 150,
                "question": "Vitamin tăng sức đề kháng:",
                "option_a": "A",
                "option_b": "B",
                "option_c": "D",
                "option_d": "C",
                "answer": "C"
            },
            {
                "id": 151,
                "question": "Tổng hợp collagen nhờ vitamin:",
                "option_a": "A",
                "option_b": "B",
                "option_c": "C",
                "option_d": "D",
                "answer": "C"
            },
            {
                "id": 152,
                "question": "Vitamin chống oxy hóa:",
                "option_a": "A",
                "option_b": "C",
                "option_c": "D",
                "option_d": "E",
                "answer": "D"
            },
            {
                "id": 153,
                "question": "Chất chống oxy hóa tự nhiên quan trọng nhất:",
                "option_a": "Vitamin A",
                "option_b": "Vitamin B",
                "option_c": "Vitamin C",
                "option_d": "Vitamin E",
                "answer": "D"
            },
            {
                "id": 154,
                "question": "Hormon amin trọng lượng thấp:",
                "option_a": "Insulin",
                "option_b": "Thyroxin",
                "option_c": "Epinephrin",
                "option_d": "Cortisol",
                "answer": "C"
            },
            {
                "id": 155,
                "question": "Hormon tăng glucose máu:",
                "option_a": "Insulin",
                "option_b": "Glucagon",
                "option_c": "Estrogen",
                "option_d": "Progesteron",
                "answer": "B"
            },
            {
                "id": 156,
                "question": "Hormon gây co bóp tử cung:",
                "option_a": "ADH",
                "option_b": "Oxytocin",
                "option_c": "Prolactin",
                "option_d": "GH",
                "answer": "B"
            },
            {
                "id": 157,
                "question": "Hormon sinh dục nữ:",
                "option_a": "Androgen",
                "option_b": "Cortisol",
                "option_c": "Estrogen & Progesteron",
                "option_d": "Testosteron",
                "answer": "C"
            },
            {
                "id": 158,
                "question": "Thùy sau yên tiết:",
                "option_a": "GH, TSH",
                "option_b": "ACTH",
                "option_c": "Oxytocin & ADH",
                "option_d": "Prolactin",
                "answer": "C"
            },
            {
                "id": 159,
                "question": "Somatostatin do tuyến nào tiết?",
                "option_a": "Yên",
                "option_b": "Giáp",
                "option_c": "Tụy",
                "option_d": "Thượng thận",
                "answer": "C"
            },
            {
                "id": 160,
                "question": "Hormon chống stress:",
                "option_a": "Insulin",
                "option_b": "Aldosteron",
                "option_c": "Cortisol",
                "option_d": "Thyroxin",
                "answer": "C"
            },
            {
                "id": 161,
                "question": "Somatostatin ức chế:",
                "option_a": "GH",
                "option_b": "Insulin & Glucagon",
                "option_c": "Cortisol",
                "option_d": "Adrenalin",
                "answer": "B"
            },
            {
                "id": 162,
                "question": "Tiêm hormon gây thâm da:",
                "option_a": "ACTH",
                "option_b": "TSH",
                "option_c": "MSH",
                "option_d": "GH",
                "answer": "C"
            },
            {
                "id": 163,
                "question": "Nơi hormon tác dụng gọi là:",
                "option_a": "Tuyến",
                "option_b": "Máu",
                "option_c": "Cơ quan đích",
                "option_d": "Thụ thể",
                "answer": "C"
            },
            {
                "id": 164,
                "question": "Tuyến nội tiết có nguồn gốc:",
                "option_a": "Ngoại bì",
                "option_b": "Trung bì",
                "option_c": "Nội bì",
                "option_d": "Trung mô",
                "answer": "C"
            },
            {
                "id": 165,
                "question": "Thụ thể hormon có bản chất:",
                "option_a": "Lipid",
                "option_b": "Glucid",
                "option_c": "Protein",
                "option_d": "Ion",
                "answer": "C"
            },
            {
                "id": 166,
                "question": "Cảm xúc kích thích tiết:",
                "option_a": "Insulin",
                "option_b": "Adrenalin",
                "option_c": "Estrogen",
                "option_d": "GH",
                "answer": "B"
            },
            {
                "id": 167,
                "question": "Hormon kích thích thoái hóa lipid:",
                "option_a": "Insulin",
                "option_b": "Glucagon",
                "option_c": "Adrenalin",
                "option_d": "Thyroxin",
                "answer": "C"
            },
            {
                "id": 168,
                "question": "Hormon kích thích tăng trưởng:",
                "option_a": "Prolactin",
                "option_b": "Thyroxin",
                "option_c": "Somatotropin (GH)",
                "option_d": "ACTH",
                "answer": "C"
            }
        ]
    }
];

// Chuyển đổi sang format phẳng cho app
window.quizData = quizDataRaw[0].questions;