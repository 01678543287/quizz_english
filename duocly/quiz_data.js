// Dữ liệu gốc
const quizDataRaw = [
  {
    "test_name": "Trắc nghiệm Dược lý Tổng hợp",
    "chapter": "DƯỢC LÝ ĐẠI CƯƠNG & CÁC HỆ CƠ QUAN",
    "questions": [
      {
        "id": 1,
        "question": "Chọn một phát biểu chưa đúng.",
        "option_a": "Hiệp đồng cộng thường xảy ra với các thuốc tác dụng trên một loại receptor",
        "option_b": "Hiệp đồng tăng cường thường xảy ra với các thuốc tác dụng trên những loại receptor khác nhau",
        "option_c": "Tác dụng đối lập có thể do các thuốc tác dụng trên cùng một loại receptor",
        "option_d": "Tác dụng đối lập có thể do các thuốc tác dụng trên các loại receptor khác nhau",
        "answer": "A"
      },
      {
        "id": 2,
        "question": "Thể tích phân bố lớn có ý nghĩa là",
        "option_a": "Thuốc phân tán đều trong dịch cơ thể",
        "option_b": "Thuốc tập trung ở các mô mỡ",
        "option_c": "Thuốc sẽ có tác dụng mạnh",
        "option_d": "Thuốc sẽ có khả năng chuyển hóa nhanh",
        "answer": "A"
      },
      {
        "id": 3,
        "question": "Thuốc kích thích thần kinh trung ương, tác dụng ưu tiên trên hành não",
        "option_a": "Lobelin",
        "option_b": "Amphetamin",
        "option_c": "Strychnine",
        "option_d": "Cafein",
        "answer": "A"
      },
      {
        "id": 4,
        "question": "Tương tác giữa Thiazid với Lithium xảy ra trong quá trình…",
        "option_a": "Hấp thu",
        "option_b": "Phân bố",
        "option_c": "Chuyển hóa",
        "option_d": "Thải trừ",
        "answer": "D"
      },
      {
        "id": 5,
        "question": "Chọn chất ức chế men",
        "option_a": "Cimetidin",
        "option_b": "Metronidazol",
        "option_c": "Chloramphenicol",
        "option_d": "Isoniazid",
        "answer": "A"
      },
      {
        "id": 6,
        "question": "Tác dụng của thuốc có giới hạn nhất định về thời gian là...",
        "option_a": "Tác dụng không hồi phục",
        "option_b": "Tác dụng hồi phục",
        "option_c": "Tác dụng toàn thân",
        "option_d": "Tác dụng tại chỗ",
        "answer": "B"
      },
      {
        "id": 7,
        "question": "Tác dụng gây tê của Procain là",
        "option_a": "Tác dụng không hồi phục",
        "option_b": "Tác dụng hồi phục",
        "option_c": "Tác dụng toàn thân",
        "option_d": "Tác dụng tại chỗ",
        "answer": "B"
      },
      {
        "id": 8,
        "question": "Thuốc mê gây rối loạn tâm thần, ảo giác",
        "option_a": "Ketamin",
        "option_b": "Halothan",
        "option_c": "Thiopental",
        "option_d": "Ether",
        "answer": "A"
      },
      {
        "id": 9,
        "question": "Liều tối đa trong 24 giờ dùng Morphin ống 10mg",
        "option_a": "2 ống",
        "option_b": "3 ống",
        "option_c": "4 ống",
        "option_d": "5 ống",
        "answer": "C"
      },
      {
        "id": 10,
        "question": "Phát biểu không đúng về quá trình bài tiết thuốc qua đường tiêu hóa",
        "option_a": "Tại ruột, các thuốc không hấp thu vào máu được bài tiết ở cuối đường tiêu hóa",
        "option_b": "Sau khi hấp thu vào máu, một số thuốc bài tiết ngược về đường tiêu hóa",
        "option_c": "Các thuốc bài tiết từ mật vào ruột được tái hấp thu trở lại vào máu",
        "option_d": "Trong quá trình hấp thu, thuốc tan trong nước theo ống mật bài tiết qua gan.",
        "answer": "D"
      },
      {
        "id": 11,
        "question": "Hầu hết các thuốc không tan trong nước đều thải trừ qua …",
        "option_a": "Nước tiểu",
        "option_b": "Hô hấp",
        "option_c": "Mồ hôi",
        "option_d": "Phân",
        "answer": "D"
      },
      {
        "id": 12,
        "question": "Thuốc tránh thai dùng chung với Ampicilline xảy ra tương tác trong quá trình...",
        "option_a": "hấp thu",
        "option_b": "phân bố",
        "option_c": "chuyển hóa",
        "option_d": "thải trừ",
        "answer": "C"
      },
      {
        "id": 13,
        "question": "Theophylin khi dùng chung với thuốc nào dưới đây bị giảm chuyển hóa?",
        "option_a": "Cimetidin",
        "option_b": "Omeprazol",
        "option_c": "Lanzoprasol",
        "option_d": "Ranitidin",
        "answer": "A"
      },
      {
        "id": 14,
        "question": "Nhận định sai về đặc điểm của thuốc trong máu",
        "option_a": "Ở dạng liên kết, thuốc gây ra tác dụng sinh học",
        "option_b": "Liên kết thuốc với protein huyết tương có tính thuận nghịch",
        "option_c": "Dạng tự do và dạng liên kết luôn có sự cân bằng động",
        "option_d": "Dạng liên kết là phần dự trữ thuốc trong cơ thể",
        "answer": "A"
      },
      {
        "id": 15,
        "question": "Tác dụng \"giãn đồng tử\" thể hiện khi dùng Atropin bằng đường tiêm gọi là...",
        "option_a": "Tác dụng chính",
        "option_b": "Tác dụng phụ",
        "option_c": "Tác dụng tại chỗ",
        "option_d": "Tác dụng đặc hiệu",
        "answer": "B"
      },
      {
        "id": 16,
        "question": "Phân loại tác dụng kích ứng niêm mạc đường tiêu hóa của NSAID",
        "option_a": "Tác dụng chính",
        "option_b": "Tác dụng phụ",
        "option_c": "Tác dụng tại chỗ",
        "option_d": "Tác dụng đặc hiệu",
        "answer": "B"
      },
      {
        "id": 17,
        "question": "Nguyên nhân chủ yếu làm cho người cao tuổi phải sử dụng một lượng thuốc khá lớn",
        "option_a": "Chức năng sinh lý của các cơ quan giảm",
        "option_b": "Khả năng thích nghi của cơ thể kém",
        "option_c": "Đáp ứng kém với thuốc",
        "option_d": "Mắc nhiều bệnh cùng một lúc",
        "answer": "D"
      },
      {
        "id": 18,
        "question": "Phát biểu đúng về quá trình thải trừ thuốc qua thận",
        "option_a": "Phần liên kết với protein được lọc qua cầu thận",
        "option_b": "Chất tan trong lipid bài tiết theo nước tiểu",
        "option_c": "Chất tan trong nước được tái hấp thu qua ống thận",
        "option_d": "Thuốc bài tiết qua ống thận theo cơ chế vận chuyển tích cực",
        "answer": "D"
      },
      {
        "id": 19,
        "question": "Thuốc làm tăng tác dụng của thuốc khác khi dùng chung gọi là...",
        "option_a": "Tác dụng đối lập",
        "option_b": "Tác dụng chọn lọc",
        "option_c": "Tác dụng đặc hiệu",
        "option_d": "Tác dụng hiệp đồng",
        "answer": "D"
      },
      {
        "id": 20,
        "question": "Khi dùng chung Cimetidin với Theophylin...",
        "option_a": "Cimetidin làm tăng hấp thu Theophylin",
        "option_b": "Theophylin làm tăng phân bố Cimetidin",
        "option_c": "Cimetidin làm giảm chuyển hóa Theophylin",
        "option_d": "Theophylin làm giảm thải trừ Cimetidin",
        "answer": "C"
      },
      {
        "id": 21,
        "question": "Chất trung gian dẫn truyền hệ thần kinh trung ương gắn kết với receptor β2 và ảnh hưởng tới trí nhớ",
        "option_a": "Noradrenalin",
        "option_b": "Endorphin",
        "option_c": "Serotonin",
        "option_d": "Dynorphin",
        "answer": "A"
      },
      {
        "id": 22,
        "question": "Tương tác giữa Omeprazo với Ketoconazol xảy ra trong quá trình",
        "option_a": "hấp thu",
        "option_b": "phân bổ",
        "option_c": "chuyển hóa",
        "option_d": "thải trừ",
        "answer": "A"
      },
      {
        "id": 23,
        "question": "Thuốc mê \"ức chế hô hấp\" mạnh nhất",
        "option_a": "Halothan",
        "option_b": "Nitrogen oxyd",
        "option_c": "Isofluran",
        "option_d": "Ether",
        "answer": "C"
      },
      {
        "id": 24,
        "question": "Enzym sulfotransferase xúc tác cho phản ứng liên hợp thuốc với…",
        "option_a": "Glycin",
        "option_b": "Acid Glucuronic",
        "option_c": "Acetyl",
        "option_d": "Sulfat",
        "answer": "D"
      },
      {
        "id": 25,
        "question": "Thời gian cần thiết để nồng độ thuốc trong huyết tương giảm đi một nửa",
        "option_a": "Thể tích phân bố biểu kiến",
        "option_b": "Độ thanh lọc",
        "option_c": "Diện tích dưới đường cong",
        "option_d": "Thời gian bán thải",
        "answer": "D"
      },
      {
        "id": 26,
        "question": "Morphin giảm đau mạnh, sâu; an thần, gây ngủ; ức chế hô hấp; giảm nhu động ruột và gây…..",
        "option_a": "Sảng khoái",
        "option_b": "Co đồng tử",
        "option_c": "Táo bón",
        "option_d": "Hạ nhiệt",
        "answer": "A"
      },
      {
        "id": 27,
        "question": "Tên phản ứng liên hợp với thuốc trong pha II tại gan cho ra sản phẩm ít phân cực",
        "option_a": "Acid Glucuronic",
        "option_b": "Methyl hóa",
        "option_c": "Glutathion",
        "option_d": "Sulfat",
        "answer": "B"
      },
      {
        "id": 28,
        "question": "Tên Enzym Oxy hóa ethanol có trong dịch bào tương của tế bào gan",
        "option_a": "NADPH",
        "option_b": "H+",
        "option_c": "Dehydrogenase",
        "option_d": "CytP450",
        "answer": "C"
      },
      {
        "id": 29,
        "question": "Phenytoin bị giảm chuyển hóa ở gan khi dùng chung với thuốc nào dưới đây?",
        "option_a": "Cephalexin",
        "option_b": "Ampicilin",
        "option_c": "Ciprofloxacin",
        "option_d": "Chloramphenicol",
        "answer": "D"
      },
      {
        "id": 30,
        "question": "Thuốc liên kết với protein huyết tương ngắn nhất",
        "option_a": "Carbamazepin",
        "option_b": "Thiopental",
        "option_c": "Acid Valproic",
        "option_d": "Amitriptilin",
        "answer": "A"
      },
      {
        "id": 31,
        "question": "Tác dụng chọn lọc của thuốc trên một tác nhân gây bệnh là...",
        "option_a": "Tác dụng chính",
        "option_b": "Tác dụng đặc hiệu",
        "option_c": "Tác dụng toàn thân",
        "option_d": "Tác dụng tại chỗ",
        "answer": "B"
      },
      {
        "id": 32,
        "question": "Tương tác giữa Quinolon với ion sắt xảy ra trong quá trình...",
        "option_a": "hấp thu",
        "option_b": "phân bố",
        "option_c": "chuyển hóa",
        "option_d": "thải trừ",
        "answer": "A"
      },
      {
        "id": 33,
        "question": "Tác dụng gây ra do thuốc làm thay đổi quá trình sinh tổng hợp chất nội sinh là...",
        "option_a": "Tác dụng gián tiếp",
        "option_b": "Tác dụng trực tiếp",
        "option_c": "Tác dụng toàn thân",
        "option_d": "Tác dụng tại chỗ",
        "answer": "A"
      },
      {
        "id": 34,
        "question": "Trong quá trình biến đổi sinh học, hydroxyl hóa các thuốc có cấu trúc mạch thẳng ở gan là phản ứng thuộc loại …….",
        "option_a": "Oxy hóa",
        "option_b": "Khử",
        "option_c": "Thủy phân",
        "option_d": "Liên hợp",
        "answer": "A"
      },
      {
        "id": 35,
        "question": "Đặc điểm các thuốc bài tiết qua mật",
        "option_a": "Thuốc có trọng lượng phân tử cao",
        "option_b": "Thuốc có bản chất acid",
        "option_c": "Thuốc ở dạng tự do",
        "option_d": "Thuốc có tỷ lệ thân nước cao",
        "answer": "A"
      },
      {
        "id": 36,
        "question": "Enzym nitroreductase có trong lưới nội mô gan xúc tác cho các phản ứng…",
        "option_a": "Khử",
        "option_b": "Oxy hóa",
        "option_c": "Thủy phân",
        "option_d": "Liên hợp",
        "answer": "A"
      },
      {
        "id": 37,
        "question": "Tác dụng xảy ra trước khi hấp thu là...",
        "option_a": "Tác dụng chính",
        "option_b": "Tác dụng đặc hiệu",
        "option_c": "Tác dụng toàn thân",
        "option_d": "Tác dụng tại chỗ",
        "answer": "D"
      },
      {
        "id": 38,
        "question": "Gây sảng khoái là tác dụng của Morphin trên receptor",
        "option_a": "Muy (µ)",
        "option_b": "Kappa (k)",
        "option_c": "Delta (δ)",
        "option_d": "Beta (β)",
        "answer": "A"
      },
      {
        "id": 39,
        "question": "Thuốc tránh thai bị mất tác dụng khi dùng chung với thuốc nào dưới đây ?",
        "option_a": "Isoniazid",
        "option_b": "Rifampicin",
        "option_c": "Steptomycin",
        "option_d": "Amikacin",
        "answer": "B"
      },
      {
        "id": 40,
        "question": "Thuốc chống động kinh có thời gian bán thải dài nhất",
        "option_a": "Acid Valproic",
        "option_b": "Lithium",
        "option_c": "Methadon",
        "option_d": "Clopromazin",
        "answer": "D"
      },
      {
        "id": 41,
        "question": "Lựa chọn đường sử dụng để thuốc ít bị biến đổi sinh học.",
        "option_a": "Trực tràng",
        "option_b": "Hô hấp",
        "option_c": "Dưới da",
        "option_d": "Tiêm bắp",
        "answer": "A"
      },
      {
        "id": 42,
        "question": "Không nên dùng Morphin trong trường hợp",
        "option_a": "Tổn thương ở đầu",
        "option_b": "Trong khi đang gây mê",
        "option_c": "Tổn thương ở xương đùi",
        "option_d": "Đau do ung thư",
        "answer": "A"
      },
      {
        "id": 43,
        "question": "Khi pH nước tiểu kiềm, các thuốc có tính acid yếu sẽ…",
        "option_a": "Dễ thải trừ",
        "option_b": "Khó thải trừ",
        "option_c": "Khó hấp thu",
        "option_d": "Dễ hấp thu",
        "answer": "A"
      },
      {
        "id": 44,
        "question": "Phản ứng bất lợi của thuốc gọi là thường gặp khi tần suất xảy ra là:",
        "option_a": "Trên 1/100",
        "option_b": "Từ 1/100 đến 1/1000",
        "option_c": "Từ 1/1000 đến 1/10000",
        "option_d": "Ít hơn 1/10000",
        "answer": "A"
      },
      {
        "id": 45,
        "question": "Chọn biện pháp hạn chế ADR của thuốc phù hợp",
        "option_a": "Hạn chế số thuốc sử dụng khi mắc nhiều bệnh",
        "option_b": "Nắm vững thông tin về thuốc dùng cho người bệnh",
        "option_c": "Nắm vững thông tin về các đối tượng bệnh nhân có nguy cơ cao",
        "option_d": "Hiểu rõ các tương tác thuốc khi cho dùng chung và khai thác tốt tiền sử bệnh",
        "answer": "D"
      },
      {
        "id": 46,
        "question": "Đường thải trừ chủ yếu của Morphin",
        "option_a": "Thận",
        "option_b": "Tiêu hóa",
        "option_c": "Mồ hôi",
        "option_d": "Hô hấp",
        "answer": "A"
      },
      {
        "id": 47,
        "question": "Gọi S là tổng tác dụng của thuốc, a là tác dụng của thuốc A, b là tác dụng của thuốc B; Khái niệm \"hiệp đồng cộng\" ứng với:",
        "option_a": "S = a + b",
        "option_b": "S < a + b",
        "option_c": "S > a + b",
        "option_d": "S ≥ a + b",
        "answer": "A"
      },
      {
        "id": 48,
        "question": "Tetracyclin tạo chelat bền vững với Ca++ được gọi là….",
        "option_a": "Tác dụng không hồi phục",
        "option_b": "Tác dụng hồi phục",
        "option_c": "Tác dụng toàn thân",
        "option_d": "Tác dụng tại chỗ",
        "answer": "A"
      },
      {
        "id": 49,
        "question": "Trong quá trình đào thải, những thuốc có tính chất dễ bay hơi được thải trừ qua…",
        "option_a": "Thận",
        "option_b": "Phổi",
        "option_c": "Da",
        "option_d": "Trực tràng",
        "answer": "B"
      },
      {
        "id": 50,
        "question": "Thuốc dùng chung làm đão ngược tác động của Noradrenalin",
        "option_a": "Diazepam",
        "option_b": "Thiopental",
        "option_c": "Clorpromazin",
        "option_d": "Lidocain",
        "answer": "C"
      },
      {
        "id": 51,
        "question": "Tương tác giữa Isoniazid với Phenyltoin xảy ra trong quá trình...",
        "option_a": "hấp thu",
        "option_b": "phân bố",
        "option_c": "chuyển hóa",
        "option_d": "thải trừ",
        "answer": "C"
      },
      {
        "id": 52,
        "question": "Morphin chống chỉ định cho trẻ em dưới",
        "option_a": "30 tháng",
        "option_b": "36 tháng",
        "option_c": "50 tháng",
        "option_d": "72 tháng",
        "answer": "A"
      },
      {
        "id": 53,
        "question": "Chọn chất cảm ứng men mạnh",
        "option_a": "Phenobarbital",
        "option_b": "Rifampicin",
        "option_c": "Diazepam",
        "option_d": "Griseofulvin",
        "answer": "A"
      },
      {
        "id": 54,
        "question": "Thuốc an thần gây ngủ tác động trên Serotonin",
        "option_a": "Zolpidem",
        "option_b": "Diazepam",
        "option_c": "Buspiron",
        "option_d": "Phenobarbital",
        "answer": "C"
      },
      {
        "id": 55,
        "question": "Tên Enzym xúc tác phản ứng khử nhóm OH trong nhân phenol của thuốc tại gan",
        "option_a": "Alcohol dehydrogenase",
        "option_b": "Nitro phenol reductase",
        "option_c": "Nitro reductase",
        "option_d": "Azo reductase",
        "answer": "B"
      },
      {
        "id": 56,
        "question": "Phân loại tương tác giữa Warfarin với NSAID",
        "option_a": "Tương tác trong quá trình hấp thu",
        "option_b": "Tương tác trong quá trình phân bố",
        "option_c": "Tương tác trong quá trình chuyển hóa",
        "option_d": "Tương tác trong quá trình thải trừ",
        "answer": "B"
      },
      {
        "id": 57,
        "question": "Thuốc làm giảm tác dụng của thuốc khác khi dùng chung gọi là...",
        "option_a": "Tác dụng đối lập",
        "option_b": "Tác dụng chọn lọc",
        "option_c": "Tác dụng đặc hiệu",
        "option_d": "Tác dụng hiệp đồng",
        "answer": "A"
      },
      {
        "id": 58,
        "question": "Gọi S là tổng tác dụng của thuốc, a là tác dụng của thuốc A, b là tác dụng của thuốc B; Khái niệm \"hiệp đồng bội tăng\" ứng với:",
        "option_a": "S = a + b",
        "option_b": "S < a + b",
        "option_c": "S > a + b",
        "option_d": "S ≥ a + b",
        "answer": "C"
      },
      {
        "id": 59,
        "question": "Tác dụng xảy ra sau khi thuốc được hấp thụ, phân bố đến các tổ chức và gây ra đáp ứng là...",
        "option_a": "Tác dụng chính",
        "option_b": "Tác dụng đặc hiệu",
        "option_c": "Tác dụng toàn thân",
        "option_d": "Tác dụng tại chỗ",
        "answer": "C"
      },
      {
        "id": 60,
        "question": "Phát biểu sai về khái niệm \"receptor\"",
        "option_a": "Bản chất receptor là protein",
        "option_b": "Receptor có phân tử lượng nhỏ",
        "option_c": "Receptor tồn tại trên bề mặt tế bào",
        "option_d": "Receptor tồn tại bên trong tế bào",
        "answer": "B"
      },
      {
        "id": 61,
        "question": "Tương tác giữa Digoxin với Kháng sinh có liên quan đến…",
        "option_a": "Sự ức chế hoặc cảm ứng enzym",
        "option_b": "Ái lực của liên kết thuốc",
        "option_c": "Hệ vi khuẩn đường ruột",
        "option_d": "pH nước tiểu",
        "answer": "A"
      },
      {
        "id": 62,
        "question": "Tác dụng của thuốc ở liều điều trị biểu hiện rõ rệt nhất trên một cơ quan là...",
        "option_a": "Tác dụng chính",
        "option_b": "Tác dụng đặc hiệu",
        "option_c": "Tác dụng toàn thân",
        "option_d": "Tác dụng chọn lọc",
        "answer": "D"
      },
      {
        "id": 63,
        "question": "Phản ứng khử azo trong pha giáng hóa tại gan làm cho thuốc biến thành các dẫn chất nào dưới đây?",
        "option_a": "Amin",
        "option_b": "Nitro",
        "option_c": "Hydroxyl",
        "option_d": "Aldehyd",
        "answer": "A"
      },
      {
        "id": 64,
        "question": "Nhận định đúng các tương tác khi dùng Metoclopramid",
        "option_a": "Metoclopamid làm tăng hấp thu Paracetamol",
        "option_b": "Metoclopamid làm tăng phân bố Domperidol",
        "option_c": "Metoclopamid làm chậm chuyển hóa Cycloporin",
        "option_d": "Metoclopamid làm chậm thải trừ Diazepam",
        "answer": "A"
      },
      {
        "id": 65,
        "question": "Thuốc làm tăng chuyển hóa Warfarin?",
        "option_a": "Aminazin",
        "option_b": "Amitriptilin",
        "option_c": "Phenobarbital",
        "option_d": "Phenacetin",
        "answer": "C"
      },
      {
        "id": 66,
        "question": "Thuốc nào dưới đây làm tăng chuyển hóa thuốc tránh thai?",
        "option_a": "Phenobarbital",
        "option_b": "Aminazin",
        "option_c": "Diazepam",
        "option_d": "Ofloxacin",
        "answer": "A"
      },
      {
        "id": 67,
        "question": "Dùng thuốc bôi ngoài da trên vùng da bị tổn thương rộng có thể gây ra..",
        "option_a": "Tác dụng chính và phụ",
        "option_b": "Tác dụng chọn lọc và đặc hiệu",
        "option_c": "Tác dụng tại chỗ và toàn thân",
        "option_d": "Tác dụng hồi phục và không hồi phục",
        "answer": "C"
      },
      {
        "id": 68,
        "question": "Xử trí khi bị ngộ độc cấp Morphin",
        "option_a": "Ngừng thuốc",
        "option_b": "Giảm liều dần",
        "option_c": "Uống naltrexon",
        "option_d": "Tiêm naloxon",
        "answer": "D"
      },
      {
        "id": 69,
        "question": "Tác dụng gây ra do thuốc làm giải phóng chất nội sinh là...",
        "option_a": "Tác dụng gián tiếp",
        "option_b": "Tác dụng trực tiếp",
        "option_c": "Tác dụng toàn thân",
        "option_d": "Tác dụng tại chỗ",
        "answer": "A"
      },
      {
        "id": 70,
        "question": "Halothan không dùng trong gây mê sản khoa là do tác dụng...",
        "option_a": "Giãn cơ trơn",
        "option_b": "Giãn cơ vân",
        "option_c": "Co cơ vân",
        "option_d": "Co cơ trơn",
        "answer": "A"
      },
      {
        "id": 71,
        "question": "Giải thích việc sử dụng Gentamycin cho trẻ sơ sinh với liều cao hơn liều người lớn?*",
        "option_a": "Tỷ lệ nước trong cơ thể và dịch ngoại bào của trẻ cao",
        "option_b": "Nồng độ Bilirubin và acid béo tự do trong máu của trẻ nhiều",
        "option_c": "Nồng độ Albumin và Globulin huyết tương của trẻ ít",
        "option_d": "Độ tan của Gentamycin trong nước và tỷ lệ nước của trẻ cao",
        "answer": "D"
      },
      {
        "id": 72,
        "question": "Để đạt được nồng độ trong huyết tương bằng người lớn, phải dùng liều Gentamycin cho trẻ em tính theo kg cân nặng gấp .... lần so với liều người lớn?*",
        "option_a": "1,5",
        "option_b": "3",
        "option_c": "2",
        "option_d": "4",
        "answer": "C"
      },
      {
        "id": 73,
        "question": "Khi cho trẻ nhỏ hơn 36 tháng tuổi uống thuốc, thuốc nào dưới đây chậm hấp thu?*",
        "option_a": "Penicillin",
        "option_b": "Ampicillin",
        "option_c": "Erythromycin",
        "option_d": "Paracetamol",
        "answer": "D"
      },
      {
        "id": 74,
        "question": "Hướng suy nghỉ nào là không cần thiết khi có một tai biến nghi ngờ là ADR?*",
        "option_a": "Có tác dụng dược lý đã biết nào của thuốc có thể gây ra tai biến đó không",
        "option_b": "Mối liên quan giữa thời gian bắt đầu sử dụng thuốc và các biểu hiện của tai biến có phù hợp với các",
        "option_c": "Tai biến có cải thiện khi ngừng thuốc và xuất hiện trở lại khi dùng lại thuốc",
        "option_d": "ADR đang xảy ra thuộc typ A hay typ B",
        "answer": "D"
      },
      {
        "id": 75,
        "question": "Hoạt tính nội tại = EA/EM (EA là tác dụng của thuốc, EM là tác dụng tối đa của thuốc). Gọi là “chất chủ vận một phần” khi hoạt tính nội tại tối đa của thuốc….?*",
        "option_a": "EA/EM = 1",
        "option_b": "EA/EM > 1",
        "option_c": "EA/EM < 1",
        "option_d": "EA/EM = 0",
        "answer": "C"
      },
      {
        "id": 76,
        "question": "Thời gian tiềm tàng?",
        "option_a": "Thời gian từ khi đưa thuốc vào cơ thể đến khi xuất hiện tác dụng",
        "option_b": "Thời gian từ khi đưa thuốc vào cơ thể đến khi thuốc hấp thu vào máu",
        "option_c": "Thời gian từ khi đưa thuốc vào cơ thể đến khi thuốc phân bố đến mô",
        "option_d": "Thời gian từ khi đưa thuốc vào cơ thể đến khi thuốc bắt đầu thải trừ",
        "answer": "A"
      },
      {
        "id": 77,
        "question": "Phân loại tương tác giữa Phenobarbital với thuốc tránh thai?*",
        "option_a": "Tương tác trong quá trình hấp thu",
        "option_b": "Tương tác trong quá trình phân bố",
        "option_c": "Tương tác trong quá trình chuyển hóa",
        "option_d": "Tương tác trong quá trình thải trừ",
        "answer": "C"
      },
      {
        "id": 78,
        "question": "Enzym uridin diphosphat xúc tác cho phản ứng liên hợp thuốc với…?*",
        "option_a": "Glycin",
        "option_b": "Acid Glucuronic",
        "option_c": "Acetyl",
        "option_d": "Sulfat",
        "answer": "B"
      },
      {
        "id": 79,
        "question": "Tại gan, kết quả của phản ứng khử amin oxy hóa các thuốc sử dụng qua đường tiêu hóa cho ra chất nào dưới đây?*",
        "option_a": "CO2",
        "option_b": "NH3",
        "option_c": "H2O",
        "option_d": "CH3-COOH",
        "answer": "B"
      },
      {
        "id": 80,
        "question": "Thuốc có thể gây ngừng hô hấp đột ngột khi dùng cho trẻ em?*",
        "option_a": "Codein",
        "option_b": "Tramadol",
        "option_c": "Diazepam",
        "option_d": "Phenobarbital",
        "answer": "A"
      },
      {
        "id": 81,
        "question": "Phân bố thuốc qua “hàng rào” máu-não ở trẻ em bằng người lớn khi trẻ được...tuổi?*",
        "option_a": "5",
        "option_b": "6",
        "option_c": "7",
        "option_d": "8",
        "answer": "D"
      },
      {
        "id": 82,
        "question": "Phân loại tác dụng giãn đồng tử của Atropin khi dùng với mục đích chống co thắt cơ trơn?*",
        "option_a": "Tác dụng chính",
        "option_b": "Tác dụng phụ",
        "option_c": "Tác dụng tại chổ",
        "option_d": "Tác dụng đặc hiệu",
        "answer": "B"
      },
      {
        "id": 83,
        "question": "Phản ứng liên hợp với methyl được thực hiện đối với thuốc có chứa…?*",
        "option_a": "Dẫn chất hydrazid",
        "option_b": "Dẫn chất carbonyl",
        "option_c": "Dẫn chất hydroxyl",
        "option_d": "Dẫn chất sulfur",
        "answer": "D"
      },
      {
        "id": 84,
        "question": "Phát biểu nào dưới đây về sinh lý của trẻ em liên quan đến sử dụng thuốc là chưa đúng?*",
        "option_a": "Tỷ lệ nước trong cơ thể và dịch ngoại bào cao",
        "option_b": "Nồng độ Bilirubin và acid béo tự do trong máu cao",
        "option_c": "Nồng độ Albumin và Globulin huyết tương ít",
        "option_d": "Hàm lượng nước trong não ít",
        "answer": "D"
      },
      {
        "id": 85,
        "question": "Nguyên nhân chủ yếu làm cho quá trình hấp thu thuốc ở người cao tuổi bị giảm?*",
        "option_a": "Tốc độ “rỗng” của dạ dày giảm",
        "option_b": "Sự bài tiết dịch vị giảm",
        "option_c": "Bề mặt hấp thu của niêm mạc ruột non giảm",
        "option_d": "Cơ chế vận chuyển tích cực giảm",
        "answer": "C"
      },
      {
        "id": 86,
        "question": "Đối với người cao tuổi, mức độ chuyển hóa thuốc giảm từ…?",
        "option_a": "20 – 30%",
        "option_b": "30 – 40%",
        "option_c": "40 – 50%",
        "option_d": "50 – 60%",
        "answer": "B"
      },
      {
        "id": 87,
        "question": "Phân loại tương tác giữa Diazepam với Pentobarbital?*",
        "option_a": "Tương tác trong quá trình hấp thu",
        "option_b": "Tương tác trong quá trình phân bố",
        "option_c": "Tương tác trong quá trình chuyển hóa",
        "option_d": "Tương tác trong quá trình thải trừ",
        "answer": "C"
      },
      {
        "id": 88,
        "question": "Phân loại tương tác giữa Griseofulvin với Warfarin?*",
        "option_a": "Tương tác trong quá trình hấp thu",
        "option_b": "Tương tác trong quá trình phân bố",
        "option_c": "Tương tác trong quá trình chuyển hóa",
        "option_d": "Tương tác trong quá trình thải trừ",
        "answer": "C"
      },
      {
        "id": 89,
        "question": "Mức độ hấp thu thuốc qua đường tiêu hóa của trẻ em nhỏ hơn 8 tháng tuổi kém là do...?*",
        "option_a": "Tốc độ làm rỗng dạ dày",
        "option_b": "Mức độ bài tiết dịch vị",
        "option_c": "Chức năng gan",
        "option_d": "Chức năng bài tiết",
        "answer": "A"
      },
      {
        "id": 90,
        "question": "Sử dụng chung chất ức chế bơm proton với Ketoconazol có thể xảy ra tương tác trong quá trình...?",
        "option_a": "hấp thu",
        "option_b": "phân bố",
        "option_c": "chuyển hóa",
        "option_d": "thải trừ",
        "answer": "A"
      },
      {
        "id": 91,
        "question": "Tương tác giữa Digoxin với Kháng sinh có liên quan đến…?*",
        "option_a": "Enzyme ở gan",
        "option_b": "Ái lực của liên kết thuốc",
        "option_c": "Hệ vi khuẩn đường ruột",
        "option_d": "pH nước tiểu",
        "answer": "A"
      },
      {
        "id": 92,
        "question": "Thuốc có bản chất base yếu vận chuyển qua sữa phụ thuộc vào….?*",
        "option_a": "Tính chất lý hoá của thuốc",
        "option_b": "Sự chênh lệch giữa pH huyết tương và pH của sữa",
        "option_c": "Trạng thái bệnh lý của người mẹ",
        "option_d": "Liều lượng, thời gian uống thuốc của người mẹ",
        "answer": "B"
      },
      {
        "id": 93,
        "question": "Phát biểu không đúng về hậu quả đối với trẻ khi \"mẹ cho con bú\" dùng thuốc?*",
        "option_a": "Dùng Isoniazid cho mẹ gây thiếu hụt pyridoxin cho đứa trẻ",
        "option_b": "Dùng Tetracyclin cho mẹ ảnh hưởng đến sự phát triển xương ở trẻ",
        "option_c": "Dùng Propylthiouracil cho mẹ ảnh hưởng đến phát triển tuyến thượng thận của trẻ",
        "option_d": "Dùng Phenobarbital cho mẹ làm giảm phản xạ mút ở trẻ",
        "answer": "C"
      },
      {
        "id": 94,
        "question": "Phát biểu không đúng về dùng thuốc trong thời kỳ cho con bú?*",
        "option_a": "Thuốc được bài tiết vào sữa có thể ảnh hưởng đến trẻ đang bú",
        "option_b": "Thuốc sau khi hấp thu một phần qua sữa theo cơ chế khuếch tán thụ động",
        "option_c": "Thuốc sau khi hấp thu một phần qua sữa theo cơ chế vận chuyển chủ động",
        "option_d": "Thuốc được bài tiết vào sữa theo cơ chế lọc",
        "answer": "D"
      },
      {
        "id": 95,
        "question": "Dùng thuốc trong khoảng thời gian nào dưới đây có thể ảnh hưởng đến vòm miệng của thai nhi?*",
        "option_a": "Từ ½ tuần thứ 4 – 2/3 tuần thứ 8",
        "option_b": "Từ ½ tuần thứ 4 – cuối tuần thứ 7",
        "option_c": "Từ ½ tuần thứ 3 - 2/3 tuần thứ 6",
        "option_d": "Từ ¼ tuần thứ 6 – ¼ tuần thứ 9",
        "answer": "D"
      },
      {
        "id": 96,
        "question": "Tốc độ làm rỗng dạ dày ở trẻ em bằng người lớn khi trẻ được.... tháng tuổi?*",
        "option_a": "5",
        "option_b": "6",
        "option_c": "7",
        "option_d": "8",
        "answer": "B"
      }
    ]
  }
];

// Chuyển đổi sang format phẳng cho app
window.quizData = quizDataRaw[0].questions;