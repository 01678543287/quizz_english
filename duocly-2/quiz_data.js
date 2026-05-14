const quizData = [
    {
        "question": "Câu 1: Phát biểu nào dưới đây KHÔNG đúng về loratadin?",
        "option_a": "Cloratadin trong huyết tương giảm khi dùng chung ketoconazol",
        "option_b": "Đối kháng cạnh tranh với histamin tại receptor H1",
        "option_c": "Là thuốc được lựa chọn đầu tiên trong điều trị viêm mũi dị ứng",
        "option_d": "Thời gian tác dụng kéo dài hơn 24 giờ, liều dùng 1 lần/ngày",
        "answer": "A"
    },
    {
        "question": "Câu 2: Thuốc kháng histamin H1 KHÔNG có tác dụng nào dưới đây?",
        "option_a": "Mất tác dụng giãn mạch của histamin",
        "option_b": "Ức chế sự bài tiết của nước bọt, nước mắt",
        "option_c": "Giảm co thắt cơ trơn đường tiêu hóa nên giảm đau bụng do dị ứng",
        "option_d": "Giảm co thắt cơ trơn đường hô hấp nên chỉ định bệnh hen phế quản",
        "answer": "D"
    },
    {
        "question": "Câu 3: Phát biểu nào dưới đây KHÔNG đúng về thuốc kháng histamin H1?",
        "option_a": "Diphenhydramin chỉ định say tàu xe",
        "option_b": "Ức chế tác dụng co cơ trơn mạch máu của histamin",
        "option_c": "Thế hệ 2 có tác dụng gây ngủ, an thần",
        "option_d": "Terfenadin, astemizol hiện nay không còn sử dụng",
        "answer": "C"
    },
    {
        "question": "Câu 4: Phát biểu nào dưới đây KHÔNG đúng về dược động học của thuốc kháng histamin H1?",
        "option_a": "Phân bố khắp các tổ chức của cơ thể kể cả thần kinh trung ương",
        "option_b": "Terfenadin chuyển hóa thành fexofenadin không còn tác dụng",
        "option_c": "Phần lớn các chất sau chuyển hóa không có hoạt tính",
        "option_d": "Một số thuốc thuộc thế hệ 2 có thể kéo dài đến 20 giờ",
        "answer": "B"
    },
    {
        "question": "Câu 5: Thuốc kháng histamin H1 nào dưới đây không gây buồn ngủ?",
        "option_a": "Cinarizin",
        "option_b": "Promethazin",
        "option_c": "Clopheniramin",
        "option_d": "Cetirizin",
        "answer": "D"
    },
    {
        "question": "Câu 6: Phát biểu nào dưới đây KHÔNG đúng về acarbose?",
        "option_a": "Kích thích tế bào beta ở đảo tụy tiết insulin",
        "option_b": "Làm chậm hấp thu carbohydrat ở ruột non",
        "option_c": "Ức chế cạnh tranh với alpha-glucosidase ở ruột non",
        "option_d": "Ít hấp thu ở đường tiêu hóa",
        "answer": "A"
    },
    {
        "question": "Câu 7: Chọn phát biểu đúng về chỉ định của glucocorticoid?",
        "option_a": "Dị ứng, sốc phản vệ",
        "option_b": "Loét dạ dày – tá tràng",
        "option_c": "Nhiễm nấm, virus",
        "option_d": "Đái tháo đường",
        "answer": "A"
    },
    {
        "question": "Câu 8: Phát biểu nào dưới đây KHÔNG đúng về chỉ định của oxytocin?",
        "option_a": "Kích thích tiết sữa sau sanh",
        "option_b": "Co hồi và cầm máu tử cung sau sanh",
        "option_c": "Kích thích sanh và gây sanh non",
        "option_d": "Phòng suy tuyến thượng thận cấp",
        "answer": "D"
    },
    {
        "question": "Câu 9: Insulin bị giảm tác dụng khi bảo quản ở nhiệt độ nào dưới đây?",
        "option_a": "> 25°C",
        "option_b": "20 – 30°C",
        "option_c": "> 40°C",
        "option_d": "> 30°C",
        "answer": "D"
    },
    {
        "question": "Câu 10: Chọn một thuốc thuộc nhóm sulfonylurea thế hệ 2?",
        "option_a": "Tolazamid",
        "option_b": "Chlorpropamid",
        "option_c": "Tolbutamid",
        "option_d": "Glipizid",
        "answer": "D"
    },
    {
        "question": "Câu 11: Phát biểu nào dưới đây KHÔNG đúng về (các) đường sử dụng của glucocorticoid?",
        "option_a": "Phun mù, bôi ngoài da",
        "option_b": "Chỉ dùng đường tiêm bắp",
        "option_c": "Tiêm dưới da, phun mù",
        "option_d": "Uống, tiêm tĩnh mạch",
        "answer": "B"
    },
    {
        "question": "Câu 12: Glucocorticoid có thời gian tác dụng dài (36 – 72 giờ) là:",
        "option_a": "Methylprednisolon",
        "option_b": "Hydrocortison",
        "option_c": "Dexamethason",
        "option_d": "Triamcinolon",
        "answer": "C"
    },
    {
        "question": "Câu 13: Phát biểu nào dưới đây KHÔNG đúng về insulin?",
        "option_a": "Có thể chiết từ tuyến tụy của bò hay lợn",
        "option_b": "Khi phá vỡ cầu disulfid thì tác dụng của insulin sẽ bị mất",
        "option_c": "Do tế bào alpha và beta đảo Langerhans tiết ra",
        "option_d": "Chuỗi A và chuỗi B được nối với nhau bằng 2 cầu disulfid",
        "answer": "C"
    },
    {
        "question": "Câu 14: Liều thường dùng (mg/24 giờ) của glipizid là:",
        "option_a": "250 – 500",
        "option_b": "500 – 1000",
        "option_c": "0,5 – 1",
        "option_d": "5 – 40",
        "answer": "D"
    },
    {
        "question": "Câu 15: Phát biểu nào dưới đây KHÔNG đúng về tác dụng không mong muốn của thuốc nhóm sulfonylurea?",
        "option_a": "Vàng da ứ mật",
        "option_b": "Dị cảm, mỏi cơ",
        "option_c": "Tăng đường huyết",
        "option_d": "Rối loạn tâm thần",
        "answer": "C"
    },
    {
        "question": "Câu 16: Phát biểu nào dưới đây KHÔNG đúng về hormon?",
        "option_a": "Mỗi hormon tác dụng trên nhiều loại tế bào đích",
        "option_b": "Dùng thay thế hoặc bổ sung khi cơ thể thiếu hormon",
        "option_c": "Dùng chẩn đoán bệnh của tuyến nội tiết",
        "option_d": "Hormon bài tiết theo nhịp sinh học",
        "answer": "A"
    },
    {
        "question": "Câu 17: ACTH được phối hợp với kẽm phosphat nhằm mục đích:",
        "option_a": "Giảm đau khi tiêm",
        "option_b": "Tăng thời gian tác dụng",
        "option_c": "Thời gian bán thải ngắn hơn",
        "option_d": "Xuất hiện tác dụng nhanh hơn",
        "answer": "B"
    },
    {
        "question": "Câu 18: (Các) tác dụng chính của glucocorticoid, NGOẠI TRỪ:",
        "option_a": "Chống dị ứng",
        "option_b": "Chống huyết khối",
        "option_c": "Chống viêm",
        "option_d": "Ức chế miễn dịch",
        "answer": "B"
    },
    {
        "question": "Câu 19: Thuốc nào dưới đây thuốc nhóm thuốc ức chế alpha-glucosidase?",
        "option_a": "Liraglutid",
        "option_b": "Pioglitazon",
        "option_c": "Buformin",
        "option_d": "Voglibose",
        "answer": "D"
    },
    {
        "question": "Câu 20: Vai trò của parathyroid hormon (PTH) là:",
        "option_a": "Điều hòa nồng độ Ca2+ trong máu",
        "option_b": "Ức chế phân hủy glycogen thành glucose",
        "option_c": "Ức chế hấp thu calci ở ruột non",
        "option_d": "Kích thích tuyến tụy tiết glucagon",
        "answer": "A"
    },
    {
        "question": "Câu 21: Chỉ định của glibenclamid là:",
        "option_a": "Đái tháo đường typ 1",
        "option_b": "Rối loạn lipid huyết",
        "option_c": "Đái tháo đường typ 2",
        "option_d": "Tăng huyết áp",
        "answer": "C"
    },
    {
        "question": "Câu 22: Phát biểu nào dưới đây KHÔNG đúng về cơ chế và tác dụng của insulin?",
        "option_a": "Ngăn GLUT hòa nhập vào màng tế bào",
        "option_b": "Thúc đẩy tổng hợp glycogen",
        "option_c": "Giúp glucose dễ xâm nhập vào tế bào",
        "option_d": "Ức chế phân hủy glycogen",
        "answer": "A"
    },
    {
        "question": "Câu 23: Phát biểu nào dưới đây KHÔNG đúng về glyburid?",
        "option_a": "Chỉ định: đái tháo đường typ 2",
        "option_b": "Có thể dùng đường uống và tiêm",
        "option_c": "Thuộc nhóm sulfonylurea thế hệ 2",
        "option_d": "Tác dụng phụ: hạ đường huyết",
        "answer": "B"
    },
    {
        "question": "Câu 24: Thuốc nào dưới đây làm giảm tác dụng của thuốc nhóm sulfonylurea?",
        "option_a": "Rifampicin",
        "option_b": "Phenylbutazol",
        "option_c": "Probenecid",
        "option_d": "Ức chế MAO",
        "answer": "A"
    },
    {
        "question": "Câu 25: Liều khởi đầu thông thường (được khuyên dùng) của metformin là:",
        "option_a": "2000 mg",
        "option_b": "1500 mg",
        "option_c": "1000 mg hoặc 1500 mg",
        "option_d": "500 mg hoặc 850 mg",
        "answer": "D"
    },
    {
        "question": "Câu 26: Glucocorticoid tự nhiên bao gồm:",
        "option_a": "Dexamethason",
        "option_b": "Prednisolon",
        "option_c": "Prednison",
        "option_d": "Cortison",
        "answer": "D"
    },
    {
        "question": "Câu 27: Phát biểu nào dưới đây KHÔNG đúng về cơ chế và tác dụng của thuốc nhóm sulfonylurea?",
        "option_a": "Có tác dụng khi cơ thể không còn khả năng tăng tiết insulin",
        "option_b": "Tăng số lượng receptor của insulin ở tế bào mỡ, hồng cầu",
        "option_c": "Ức chế nhẹ tác dụng của glucagon",
        "option_d": "Kích thích trực tiếp tế bào beta tuyến tụy",
        "answer": "A"
    },
    {
        "question": "Câu 28: Phát biểu nào dưới đây KHÔNG đúng về prednisolon?",
        "option_a": "Gây hạ huyết áp khi dùng thuốc kéo dài",
        "option_b": "Tác dụng chống viêm mạnh hơn hydrocortison 4 – 5 lần",
        "option_c": "Chủ yếu dùng làm thuốc chống viêm",
        "option_d": "Thuộc nhóm glucocorticoid có tác dụng trung bình",
        "answer": "A"
    },
    {
        "question": "Câu 29: Phát biểu nào dưới đây KHÔNG đúng về cơ chế và tác dụng của glucocorticoid trên chuyển hóa glucid?",
        "option_a": "Tăng tạo glycogen ở gan",
        "option_b": "Giảm tổng hợp glucagon",
        "option_c": "Tăng tạo glucose từ protein",
        "option_d": "Giảm tổng hợp insulin",
        "answer": "B"
    },
    {
        "question": "Câu 30: Phát biểu nào dưới đây KHÔNG đúng về dược động học của insulin?",
        "option_a": "Các đường sử dụng như uống, tiêm bắp, tiêm dưới da",
        "option_b": "Insulin bị thủy phân ở đường tiêu hóa làm mất tác dụng",
        "option_c": "Phối hợp với kẽm, protamin để duy trì tác dụng kéo dài",
        "option_d": "Chuyển hóa ở gan bằng phản ứng thủy phân dây nối peptid",
        "answer": "A"
    },
    {
        "question": "Câu 31: Phát biểu nào dưới đây KHÔNG đúng về tác dụng không mong muốn của metformin là:",
        "option_a": "Tăng acid lactic gây toan máu",
        "option_b": "Thèm ăn, tăng cân",
        "option_c": "Miệng có vị kim loại",
        "option_d": "Buồn nôn, tiêu chảy",
        "answer": "B"
    },
    {
        "question": "Câu 32: Chỉ định của hormon ADH là?",
        "option_a": "Kích thích sanh",
        "option_b": "Đái tháo nhạt",
        "option_c": "Suy tuyến giáp",
        "option_d": "Đái tháo đường",
        "answer": "B"
    },
    {
        "question": "Câu 33: Phát biểu nào dưới đây KHÔNG đúng về cơ chế tác dụng của propylthiouracil?",
        "option_a": "Ức chế quá trình oxy hóa iodid thành iod tự do",
        "option_b": "Ức chế sự gắn phân tử iod vào tiền chất của tuyến giáp",
        "option_c": "Ức chế quá trình chuyển T4 thành T3 ở ngoại vi",
        "option_d": "Ức chế sự hấp thu và phân bố iodid vào tuyến giáp",
        "answer": "D"
    },
    {
        "question": "Câu 34: Oxytocin có (các) cách sử dụng sau đây, NGOẠI TRỪ:",
        "option_a": "Tiêm bắp",
        "option_b": "Tiêm tĩnh mạch",
        "option_c": "Tiêm truyền tĩnh mạch",
        "option_d": "Uống",
        "answer": "D"
    },
    {
        "question": "Câu 35: Phát biểu KHÔNG đúng về đặc điểm và cơ chế của hầu hết hormon có cấu trúc protein hoặc acid amin?",
        "option_a": "Là các hormon tan trong nước",
        "option_b": "Phần lớn có M > 10.000 dalton",
        "option_c": "Hormon kết hợp với receptor sau khi qua màng tế bào",
        "option_d": "Phức hợp hormon-receptor hoạt hóa adenylcyclase",
        "answer": "C"
    },
    {
        "question": "Câu 36: Thuốc nào dưới đây thuộc nhóm biguanid?",
        "option_a": "Biperiden",
        "option_b": "Bezafibrat",
        "option_c": "Buformin",
        "option_d": "Bromocriptin",
        "answer": "C"
    },
    {
        "question": "Câu 37: Thuốc nào dưới đây có thể làm TĂNG tác dụng của insulin?",
        "option_a": "Adrenalin",
        "option_b": "Propranolol",
        "option_c": "Phenytoin",
        "option_d": "Glucagon",
        "answer": "B"
    },
    {
        "question": "Câu 38: Nhiệt độ tốt nhất bảo quản insulin là:",
        "option_a": "<= 0°C",
        "option_b": "25 – 30°C",
        "option_c": "2 – 8°C",
        "option_d": "10 – 20°C",
        "answer": "C"
    },
    {
        "question": "Câu 39: (Các) tác dụng của hormon ADH?",
        "option_a": "Giãn cơ trơn tử cung",
        "option_b": "Co mạch, chống bài niệu",
        "option_c": "Co mạch, giảm bài tiết sữa",
        "option_d": "Đối kháng tác dụng T3, T4",
        "answer": "B"
    },
    {
        "question": "Câu 40: Thuốc nào dưới đây có chỉ định đái tháo đường typ 1?",
        "option_a": "Glimepirid",
        "option_b": "Insulin",
        "option_c": "Pioglitazon",
        "option_d": "Metformin",
        "answer": "B"
    },
    {
        "question": "Câu 41: Chọn một thuốc thuộc nhóm thuốc kháng giáp?",
        "option_a": "Calcitonin",
        "option_b": "Liothyronin",
        "option_c": "Levothyroxin",
        "option_d": "Methimazol",
        "answer": "D"
    },
    {
        "question": "Câu 42: Tác dụng của oxytocin trên cơ quan đích là?",
        "option_a": "Tăng tiết insulin",
        "option_b": "Tăng co bóp tử cung",
        "option_c": "Ngăn cản hấp thu I-",
        "option_d": "Giảm tiết estrogen",
        "answer": "B"
    },
    {
        "question": "Câu 43: Phát biểu KHÔNG đúng về các trường hợp chống chỉ định – thận trọng khi sử dụng glucocorticoid?",
        "option_a": "Loét dạ dày",
        "option_b": "Cao huyết áp",
        "option_c": "Loãng xương",
        "option_d": "Hen phế quản",
        "answer": "D"
    },
    {
        "question": "Câu 44: Hormon kích thích vỏ thượng thận tiết hormon vỏ thượng thận là:",
        "option_a": "Adrenalin",
        "option_b": "ADH",
        "option_c": "ACTH",
        "option_d": "Prolactin",
        "answer": "C"
    },
    {
        "question": "Câu 45: Phát biểu nào dưới đây KHÔNG đúng về chỉ định của glucocorticoid?",
        "option_a": "Chẩn đoán khối u thượng thận",
        "option_b": "Viêm khớp dạng thấp",
        "option_c": "Lupus ban đỏ hệ thống",
        "option_d": "Hen phế quản, viêm da tiếp xúc",
        "answer": "A"
    },
    {
        "question": "Câu 46: Glucocorticoid có thời gian tác dụng ngắn (8 – 12 giờ) là:",
        "option_a": "Betamethason",
        "option_b": "Hydrocortison",
        "option_c": "Dexamethson",
        "option_d": "Triamcinolon",
        "answer": "B"
    },
    {
        "question": "Câu 47: Nguyên tắc điều trị lao KHÔNG bao gồm nội dung nào dưới đây?",
        "option_a": "Phải dùng thuốc đúng liều và đủ thời gian quy định",
        "option_b": "Ưu tiên trong phác đồ có một kháng sinh phổ rộng",
        "option_c": "Phải dùng thuốc liên tục, đều đặn",
        "option_d": "Tăng cường sức đề kháng của cơ thể",
        "answer": "B"
    },
    {
        "question": "Câu 48: Thuốc kháng nấm thuộc nhóm kháng nấm azol là:",
        "option_a": "Clopidogrel",
        "option_b": "Clotrimazol",
        "option_c": "Clofazimin",
        "option_d": "Clofibrat",
        "answer": "B"
    },
    {
        "question": "Câu 49: Chọn phát biểu đúng về trường hợp “kháng thuốc thật” của vi khuẩn đối với kháng sinh:",
        "option_a": "Vi khuẩn mang gen kháng thuốc do đột biến gen",
        "option_b": "Do kháng sinh không thấm được vào ổ viêm",
        "option_c": "Vi khuẩn tạo vỏ bọc không sinh sản và phát triển",
        "option_d": "Hệ thống miễn dịch của bệnh nhân bị suy giảm",
        "answer": "A"
    },
    {
        "question": "Câu 50: Phát biểu nào dưới đây KHÔNG đúng về methicilin?",
        "option_a": "Tác dụng tốt với những vi khuẩn tiết ra penicilinase",
        "option_b": "Là một thuốc trong nhóm penicilin kháng penicilinase",
        "option_c": "Do gây độc với thận nhiều nên hiện nay không dùng",
        "option_d": "Thuốc bền với acid dạ dày và hấp thu tốt qua đường tiêu hóa",
        "answer": "D"
    },
    {
        "question": "Câu 51: Loại penicilin nào dưới đây bền với acid và có thể dùng đường uống?",
        "option_a": "Penicilin G",
        "option_b": "Penicilin V",
        "option_c": "Methicilin",
        "option_d": "Nafcilin",
        "answer": "B"
    },
    {
        "question": "Câu 52: Thuốc nào dưới đây thuộc nhóm penicilin phổ rộng?",
        "option_a": "Oxacilin",
        "option_b": "Amoxicilin",
        "option_c": "Penicilin G",
        "option_d": "Penicilin V",
        "answer": "B"
    },
    {
        "question": "Câu 53: Cơ chế tác dụng của kháng sinh nhóm Beta-lactam là:",
        "option_a": "Ức chế tổng hợp vách tế bào vi khuẩn",
        "option_b": "Ức chế tổng hợp protein của vi khuẩn",
        "option_c": "Ức chế tổng hợp acid nucleic",
        "option_d": "Thay đổi tính thấm màng tế bào",
        "answer": "A"
    },
    {
        "question": "Câu 54: Kháng sinh nào dưới đây thuộc nhóm Cephalosporin thế hệ 3?",
        "option_a": "Cephalexin",
        "option_b": "Cefuroxim",
        "option_c": "Cefotaxim",
        "option_d": "Cefazolin",
        "answer": "C"
    },
    {
        "question": "Câu 55: Tác dụng không mong muốn đặc trưng nhất của nhóm Aminoglycosid là:",
        "option_a": "Độc với gan và thận",
        "option_b": "Độc với tai và thận",
        "option_c": "Gây tiêu chảy",
        "option_d": "Gây vàng răng ở trẻ em",
        "answer": "B"
    },
    {
        "question": "Câu 56: Kháng sinh nào không được dùng cho trẻ em dưới 8 tuổi do gây hỏng men răng và chậm phát triển xương?",
        "option_a": "Amoxicilin",
        "option_b": "Erythromycin",
        "option_c": "Tetracyclin",
        "option_d": "Ciprofloxacin",
        "answer": "C"
    },
    {
        "question": "Câu 57: Tai biến trầm trọng nhất khi dùng Penicilin là:",
        "option_a": "Rối loạn tiêu hóa",
        "option_b": "Nổi mề đay",
        "option_c": "Sốc phản vệ",
        "option_d": "Viêm thận kẽ",
        "answer": "C"
    },
    {
        "question": "Câu 58: Thuốc nào dưới đây thường được phối hợp với Amoxicilin để chống lại sự bài tiết beta-lactamase của vi khuẩn?",
        "option_a": "Acid clavulanic",
        "option_b": "Sulbactam",
        "option_c": "Tazobactam",
        "option_d": "Probenecid",
        "answer": "A"
    },
    {
        "question": "Câu 59: Kháng sinh nhóm Macrolid có cơ chế tác dụng là:",
        "option_a": "Ức chế tổng hợp vách tế bào",
        "option_b": "Ức chế tổng hợp protein ở tiểu đơn vị 50S của ribosom",
        "option_c": "Ức chế tổng hợp protein ở tiểu đơn vị 30S của ribosom",
        "option_d": "Ức chế DNA gyrase",
        "answer": "B"
    },
    {
        "question": "Câu 60: Thuốc nào là lựa chọn hàng đầu để điều trị lỵ amip ở đại tràng?",
        "option_a": "Metronidazol",
        "option_b": "Chloroquin",
        "option_c": "Emetin",
        "option_d": "Diloxanid",
        "answer": "A"
    },
    {
        "question": "Câu 61: Tác dụng phụ gây 'Hội chứng xám' (Gray syndrome) thường gặp ở trẻ sơ sinh khi dùng:",
        "option_a": "Tetracyclin",
        "option_b": "Chloramphenicol",
        "option_c": "Lincomycin",
        "option_d": "Streptomycin",
        "answer": "B"
    },
    {
        "question": "Câu 62: Nhóm kháng sinh Quinolon (như Ciprofloxacin) chống chỉ định cho trẻ em dưới 18 tuổi vì:",
        "option_a": "Gây điếc vĩnh viễn",
        "option_b": "Gây thoái hóa sụn khớp ở động vật non",
        "option_c": "Gây thiếu máu tán huyết",
        "option_d": "Gây suy gan cấp",
        "answer": "B"
    },
    {
        "question": "Câu 63: Thuốc kháng sinh nào có tác dụng điều trị tốt đối với vi khuẩn kỵ khí?",
        "option_a": "Gentamicin",
        "option_b": "Metronidazol",
        "option_c": "Cotrimoxazol",
        "option_d": "Neomycin",
        "answer": "B"
    },
    {
        "question": "Câu 64: Sulfonamid (Sulfamide) có cơ chế tác dụng là:",
        "option_a": "Ức chế tổng hợp vách",
        "option_b": "Cạnh tranh với PABA làm ngăn cản tổng hợp acid folic",
        "option_c": "Ức chế enzym RNA polymerase",
        "option_d": "Gây rối loạn màng tế bào",
        "answer": "B"
    },
    {
        "question": "Câu 65: Kháng sinh nào thường gây tác dụng phụ là đứt gân gót chân (gân Achilles)?",
        "option_a": "Nhóm Quinolon",
        "option_b": "Nhóm Macrolid",
        "option_c": "Nhóm Lincosamid",
        "option_d": "Nhóm Aminosid",
        "answer": "A"
    },
    {
        "question": "Câu 66: Thuốc phối hợp trong Cotrimoxazol gồm Sulfamethoxazol và:",
        "option_a": "Trimethoprim",
        "option_b": "Pyrimethamin",
        "option_c": "Clavulanic acid",
        "option_d": "Tazobactam",
        "answer": "A"
    },
    {
        "question": "Câu 67: Kháng sinh chống lao thiết yếu nhất, có tác dụng diệt khuẩn cả trong và ngoài tế bào là:",
        "option_a": "Ethambutol",
        "option_b": "Isoniazid (INH)",
        "option_c": "Pyrazinamid",
        "option_d": "Cycloserin",
        "answer": "B"
    },
    {
        "question": "Câu 68: Tác dụng không mong muốn chính của Ethambutol là:",
        "option_a": "Viêm dây thần kinh thị giác",
        "option_b": "Độc với gan",
        "option_c": "Tăng acid uric máu",
        "option_d": "Rối loạn tiền đình",
        "answer": "A"
    },
    {
        "question": "Câu 69: Thuốc nào có tác dụng nhuộm màu đỏ các dịch bài tiết (nước tiểu, mồ hôi, nước mắt)?",
        "option_a": "Rifampicin",
        "option_b": "Isoniazid",
        "option_c": "Streptomycin",
        "option_d": "Ethambutol",
        "answer": "A"
    },
    {
        "question": "Câu 70: Thuốc kháng nấm được lựa chọn ưu tiên trong điều trị nấm Candida miệng (tưa miệng) là:",
        "option_a": "Amphotericin B",
        "option_b": "Nystatin",
        "option_c": "Griseofulvin",
        "option_d": "Ketoconazol",
        "answer": "B"
    },
    {
        "question": "Câu 71: Phát biểu nào dưới đây đúng về cơ chế tác dụng của thuốc lợi tiểu nhóm Thiazid?",
        "option_a": "Ức chế tái hấp thu Na+ và Cl- ở đoạn đầu ống lượn xa",
        "option_b": "Ức chế tái hấp thu Na+ ở nhánh lên quai Henle",
        "option_c": "Đối kháng với aldosteron",
        "option_d": "Ức chế enzym carbonic anhydrase",
        "answer": "A"
    },
    {
        "question": "Câu 72: Thuốc lợi tiểu nào có thể gây tác dụng phụ là vú to ở nam giới?",
        "option_a": "Furosemid",
        "option_b": "Hydroclorothiazid",
        "option_c": "Spironolacton",
        "option_d": "Acetazolamid",
        "answer": "C"
    },
    {
        "question": "Câu 73: Thuốc lợi tiểu quai (như Furosemid) có đặc điểm:",
        "option_a": "Tác dụng yếu nhưng kéo dài",
        "option_b": "Làm tăng nồng độ Ca2+ máu",
        "option_c": "Tác dụng mạnh, nhanh nhưng ngắn",
        "option_d": "Không làm mất kali",
        "answer": "C"
    },
    {
        "question": "Câu 74: Nhóm thuốc đầu tay trong điều trị tăng huyết áp ở bệnh nhân đái tháo đường vì giúp bảo vệ thận là:",
        "option_a": "Chẹn kênh calci",
        "option_b": "Ức chế men chuyển (ACEI)",
        "option_c": "Chẹn beta-adrenergic",
        "option_d": "Lợi tiểu Thiazid",
        "answer": "B"
    },
    {
        "question": "Câu 75: Tác dụng không mong muốn điển hình của thuốc ức chế men chuyển (như Captopril) là:",
        "option_a": "Phù chân",
        "option_b": "Ho khan kéo dài",
        "option_c": "Nhịp chậm",
        "option_d": "Tăng đường huyết",
        "answer": "B"
    },
    {
        "question": "Câu 76: Thuốc chẹn kênh calci nhóm Dihydropyridin (DHP) như Amlodipin có tác dụng ưu tiên trên:",
        "option_a": "Cơ tim",
        "option_b": "Cơ trơn mạch máu",
        "option_c": "Hệ thống dẫn truyền",
        "option_d": "Thận",
        "answer": "B"
    },
    {
        "question": "Câu 77: Cơ chế tác dụng của Nitroglycerin trong điều trị đau thắt ngực là:",
        "option_a": "Chỉ làm tăng nhịp tim",
        "option_b": "Giãn tĩnh mạch, giảm tiền gánh và giãn mạch vành",
        "option_c": "Ức chế trực tiếp trung tâm đau ở não",
        "option_d": "Co mạch ngoại vi để dồn máu về tim",
        "answer": "B"
    },
    {
        "question": "Câu 78: Thuốc điều trị tăng huyết áp nào có thể gây hiện tượng 'tăng huyết áp dội ngược' nếu ngừng thuốc đột ngột?",
        "option_a": "Clonidin",
        "option_b": "Enalapril",
        "option_c": "Amlodipin",
        "option_d": "Indapamid",
        "answer": "A"
    },
    {
        "question": "Câu 79: Digoxin có tác dụng chính trên tim là:",
        "option_a": "Tăng nhịp tim, tăng sức co bóp",
        "option_b": "Giảm nhịp tim, giảm sức co bóp",
        "option_c": "Giảm nhịp tim, tăng sức co bóp cơ tim",
        "option_d": "Tăng nhịp tim, giảm dẫn truyền",
        "answer": "C"
    },
    {
        "question": "Câu 80: Khi ngộ độc Digoxin, dấu hiệu rối loạn thị giác thường gặp là:",
        "option_a": "Mù màu",
        "option_b": "Nhìn vật thấy màu vàng hoặc xanh lá cây",
        "option_c": "Sợ ánh sáng",
        "option_d": "Tăng nhãn áp",
        "answer": "B"
    },
    {
        "question": "Câu 81: Nhóm thuốc Statins (như Atorvastatin) có cơ chế là:",
        "option_a": "Ức chế enzym HMG-CoA reductase",
        "option_b": "Tăng cường bài tiết acid mật",
        "option_c": "Ức chế hấp thu cholesterol ở ruột",
        "option_d": "Kích thích lipoprotein lipase",
        "answer": "A"
    },
    {
        "question": "Câu 82: Tác dụng không mong muốn cần theo dõi sát khi dùng Statin là:",
        "option_a": "Viêm loét dạ dày",
        "option_b": "Đau cơ, tiêu cơ vân",
        "option_c": "Mất ngủ",
        "option_d": "Hạ huyết áp tư thế",
        "answer": "B"
    },
    {
        "question": "Câu 83: Vitamin K được dùng để xử trí khi quá liều thuốc chống đông máu nào?",
        "option_a": "Heparin",
        "option_b": "Warfarin",
        "option_c": "Aspirin",
        "option_d": "Clopidogrel",
        "answer": "B"
    },
    {
        "question": "Câu 84: Thuốc giải độc đặc hiệu khi quá liều Heparin là:",
        "option_a": "Vitamin K1",
        "option_b": "Protamin sulfat",
        "option_c": "Acetylcystein",
        "option_d": "Atropin",
        "answer": "B"
    },
    {
        "question": "Câu 85: Aspirin liều thấp (75-100mg) được dùng để:",
        "option_a": "Hạ sốt mạnh",
        "option_b": "Chống kết tập tiểu cầu, phòng huyết khối",
        "option_c": "Giảm đau răng",
        "option_d": "Điều trị loét dạ dày",
        "answer": "B"
    },
    {
        "question": "Câu 86: Thuốc nào dưới đây là thuốc chống viêm không steroid (NSAID) ức chế chọn lọc trên COX-2?",
        "option_a": "Diclofenac",
        "option_b": "Celecoxib",
        "option_c": "Ibuprofen",
        "option_d": "Naproxen",
        "answer": "B"
    },
    {
        "question": "Câu 87: Tác dụng phụ thường gặp nhất của các NSAID không chọn lọc là:",
        "option_a": "Gây buồn ngủ",
        "option_b": "Loét dạ dày - tá tràng",
        "option_c": "Tăng huyết áp",
        "option_d": "Suy tủy",
        "answer": "B"
    },
    {
        "question": "Câu 88: Liều tối đa của Paracetamol trong 24 giờ đối với người lớn bình thường là khoảng:",
        "option_a": "2g",
        "option_b": "4g",
        "option_c": "6g",
        "option_d": "10g",
        "answer": "B"
    },
    {
        "question": "Câu 89: Thuốc giải độc khi quá liều Paracetamol gây độc cho gan là:",
        "option_a": "Atropin",
        "option_b": "N-acetylcystein",
        "option_c": "Naloxon",
        "option_d": "Ethanol",
        "answer": "B"
    },
    {
        "question": "Câu 90: Morphine chống chỉ định trong trường hợp nào dưới đây?",
        "option_a": "Đau do ung thư giai đoạn cuối",
        "option_b": "Suy hô hấp",
        "option_c": "Phù phổi cấp",
        "option_d": "Sau phẫu thuật lớn",
        "answer": "B"
    },
    {
        "question": "Câu 91: Thuốc đối kháng đặc hiệu khi ngộ độc các thuốc phiện (opioid) là:",
        "option_a": "Morphin",
        "option_b": "Naloxon",
        "option_c": "Codein",
        "option_d": "Pethidin",
        "answer": "B"
    },
    {
        "question": "Câu 92: Salbutamol (Albuterol) là thuốc cường beta-2 có tác dụng:",
        "option_a": "Co thắt phế quản",
        "option_b": "Giãn cơ trơn phế quản",
        "option_c": "Ức chế trung tâm ho",
        "option_d": "Làm loãng đờm",
        "answer": "B"
    },
    {
        "question": "Câu 93: Thuốc nào dưới đây thuộc nhóm thuốc long đờm (tiêu chất nhầy)?",
        "option_a": "Dextromethorphan",
        "option_b": "Bromhexin",
        "option_c": "Codein",
        "option_d": "Terpin hydrat",
        "answer": "B"
    },
    {
        "question": "Câu 94: Cơ chế tác dụng của thuốc kháng acid (Antacid) là:",
        "option_a": "Ức chế bơm proton",
        "option_b": "Trung hòa trực tiếp acid dịch vị",
        "option_c": "Phong bế receptor H2",
        "option_d": "Bao phủ niêm mạc dạ dày",
        "answer": "B"
    },
    {
        "question": "Câu 95: Omeprazol thuộc nhóm thuốc nào?",
        "option_a": "Kháng receptor H2",
        "option_b": "Ức chế bơm proton (PPI)",
        "option_c": "Kháng gastrin",
        "option_d": "Hồi phục tế bào niêm mạc",
        "answer": "B"
    },
    {
        "question": "Câu 96: Thời điểm uống PPI tốt nhất để đạt hiệu quả tối ưu là:",
        "option_a": "Ngay sau khi ăn no",
        "option_b": "Trước bữa ăn sáng 30 - 60 phút",
        "option_c": "Trước khi đi ngủ",
        "option_d": "Lúc nào cũng được",
        "answer": "B"
    },
    {
        "question": "Câu 97: Thuốc nào có tác dụng nhuộm màu đen lưỡi và phân khi điều trị viêm loét dạ dày?",
        "option_a": "Sucralfat",
        "option_b": "Bismuth",
        "option_c": "Misoprostol",
        "option_d": "Maalox",
        "answer": "B"
    },
    {
        "question": "Câu 98: Nhóm thuốc nào dưới đây có tác dụng nhuận tràng do làm tăng thể tích phân?",
        "option_a": "Dầu thầu dầu",
        "option_b": "Hạt mã đề (Psyllium)",
        "option_c": "Bisacodyl",
        "option_d": "Glycerin",
        "answer": "B"
    },
    {
        "question": "Câu 99: Loperamid được dùng trong trường hợp nào?",
        "option_a": "Táo bón kinh niên",
        "option_b": "Tiêu chảy cấp không nhiễm khuẩn",
        "option_c": "Đầy hơi, chướng bụng",
        "option_d": "Viêm loét đại tràng",
        "answer": "B"
    },
    {
        "question": "Câu 100: Vitamin B1 còn có tên gọi khác là:",
        "option_a": "Riboflavin",
        "option_b": "Thiamin",
        "option_c": "Niacin",
        "option_d": "Pyridoxin",
        "answer": "B"
    },
    {
        "question": "Câu 101: Phát biểu nào dưới đây KHÔNG đúng về Colestipol?",
        "option_a": "Thuộc nhóm thuốc các resin chelat hóa",
        "option_b": "Tạo chelat với acid mật, cản trở việc nhũ hóa các lipid ở ruột",
        "option_c": "Giảm hoạt tính của enzym HMG – CoA reductase",
        "option_d": "Ức chế chu kỳ gan – ruột của acid mật",
        "answer": "C"
    },
    {
        "question": "Câu 102: Phát biểu nào dưới đây KHÔNG đúng về Cholestyramin?",
        "option_a": "Không tan trong nước, hấp thu tốt qua đường tiêu hóa",
        "option_b": "Chỉ định cho bệnh nhân tăng lipoprotein máu typ IIa (LDL)",
        "option_c": "Tác dụng xuất hiện chậm (4 – 7 ngày sau uống)",
        "option_d": "Làm hạ nồng độ cao cholesterol máu",
        "answer": "A"
    },
    {
        "question": "Câu 103: Thuốc nào dưới đây thuộc nhóm ức chế tổng hợp lipid?",
        "option_a": "Cholestyramin",
        "option_b": "Dioparin",
        "option_c": "Colestipol",
        "option_d": "Fenofibrat",
        "answer": "D"
    },
    {
        "question": "Câu 104: Chọn phát biểu đúng về cơ chế tác dụng của Atorvastatin:",
        "option_a": "Ức chế sản xuất gonadotropin tuyến yên gây giảm tiết estrogen",
        "option_b": "Ức chế cạnh tranh với enzym H+/K+ ATPase",
        "option_c": "Ức chế cạnh tranh với enzym HMG – CoA reductase",
        "option_d": "Tạo chelat với acid mật, cản trở nhũ hóa lipid",
        "answer": "C"
    },
    {
        "question": "Câu 105: Tác dụng chính của glycosid trợ tim loại digitalis là:",
        "option_a": "Giảm sức co bóp cơ tim",
        "option_b": "Giảm tiền tải, giảm hậu tải",
        "option_c": "Làm tâm thu mạnh và ngắn",
        "option_d": "Rút ngắn thời kỳ tâm trương",
        "answer": "C"
    },
    {
        "question": "Câu 106: Dopamin có tác dụng kích thích receptor β1-adrenergic trên tim ở mức liều nào dưới đây?",
        "option_a": "2-5 µg/kg/phút",
        "option_b": "1-7 µg/kg/phút",
        "option_c": "3-7 µg/kg/phút",
        "option_d": "1-3 µg/kg/phút",
        "answer": "C"
    },
    {
        "question": "Câu 107: Phát biểu nào dưới đây KHÔNG đúng về glycosid trợ tim loại strophantus?",
        "option_a": "Không hấp thu qua đường tiêu hóa",
        "option_b": "Cấp cứu khi suy tim cấp",
        "option_c": "Gây rối loạn hệ tạo máu",
        "option_d": "Thuốc còn có tác dụng lợi niệu",
        "answer": "C"
    },
    {
        "question": "Câu 108: Chọn phát biểu đúng về tác dụng của dobutamin là:",
        "option_a": "Tác dụng không chọn lọc trên α và β-adrenergic",
        "option_b": "Tác dụng chọn lọc trên α1-adrenergic",
        "option_c": "Tác dụng chọn lọc trên β1-adrenergic",
        "option_d": "Tác dụng không chọn lọc trên β-adrenergic",
        "answer": "C"
    },
    {
        "question": "Câu 109: Chỉ định của dobutamin là:",
        "option_a": "Rung nhĩ, cuồng nhĩ",
        "option_b": "Suy tim cấp tính",
        "option_c": "Loạn nhịp tim",
        "option_d": "Đau thắt ngực",
        "answer": "B"
    },
    {
        "question": "Câu 110: Dopamin có tác dụng kích thích receptor dopaminergic trên thận ở mức liều nào dưới đây?",
        "option_a": "1-3 µg/kg/phút",
        "option_b": "2-5 µg/kg/phút",
        "option_c": "1-5 µg/kg/phút",
        "option_d": "5-10 µg/kg/phút",
        "answer": "A"
    },
    {
        "question": "Câu 111: Tên gọi khác của ouabain là:",
        "option_a": "G. Strophantin",
        "option_b": "Digoxin",
        "option_c": "Digitoxin",
        "option_d": "K. Strophantin",
        "answer": "A"
    },
    {
        "question": "Câu 112: Thuốc nào dưới đây có chỉ định suy tim?",
        "option_a": "Nifedipin",
        "option_b": "Trimetazidin",
        "option_c": "Lisinopril",
        "option_d": "Felodipin",
        "answer": "C"
    },
    {
        "question": "Câu 113: Phát biểu nào dưới đây KHÔNG đúng về isoproterenol?",
        "option_a": "Cường β2 – adrenergic: giãn mạch, giảm sức cản ngoại biên",
        "option_b": "Giảm cAMP ở màng tế bào cơ tim",
        "option_c": "Cường β1 – adrenergic: làm tim đập nhanh, mạnh",
        "option_d": "Tăng glucose máu, tăng hủy lipid",
        "answer": "B"
    },
    {
        "question": "Câu 114: Phát biểu nào dưới đây KHÔNG đúng về sự khác nhau giữa digitoxin so với digoxin?",
        "option_a": "Sinh khả dụng thấp hơn",
        "option_b": "Mức độ tan trong lipid cao hơn",
        "option_c": "Thời gian bán thải dài hơn",
        "option_d": "Tỷ lệ gắn với protein huyết tương cao hơn",
        "answer": "A"
    },
    {
        "question": "Câu 115: Chọn phát biểu đúng về chỉ định của nitroprussiat?",
        "option_a": "Nhiễm khuẩn đường tiết niệu",
        "option_b": "Cấp cứu trong cơn tăng huyết áp",
        "option_c": "Sau nhồi máu cơ tim",
        "option_d": "Rối loạn nhịp tim",
        "answer": "B"
    },
    {
        "question": "Câu 116: ƯU ĐIỂM của thuốc ức chế chọn lọc β1-adrenergic khi sử dụng ở liều điều trị so với thuốc ức chế β không chọn lọc là:",
        "option_a": "Làm giảm tiết renin",
        "option_b": "Giãn cơ trơn tử cung",
        "option_c": "Tăng lưu lượng tim",
        "option_d": "Ít gây co thắt phế quản",
        "answer": "D"
    },
    {
        "question": "Câu 117: Phát biểu nào dưới đây KHÔNG đúng khi sử dụng clonidin?",
        "option_a": "Thận trọng với người tăng huyết áp",
        "option_b": "Thận trọng với người bệnh Raynaud",
        "option_c": "Thận trọng với người bệnh tiểu đường",
        "option_d": "Tránh việc ngừng thuốc đột ngột",
        "answer": "A"
    },
    {
        "question": "Câu 118: Phát biểu nào dưới đây KHÔNG đúng về đặc điểm dược động học của nitroprussiat?",
        "option_a": "Tác dụng của thuốc kéo dài > 24 giờ",
        "option_b": "Thời gian bán thải rất ngắn",
        "option_c": "Hấp thu kém qua đường uống",
        "option_d": "Chuyển hóa qua gan thành thiocyanat",
        "answer": "A"
    },
    {
        "question": "Câu 119: Chọn phát biểu đúng về trường hợp chống chỉ định của methyldopa?",
        "option_a": "Suy tim trái",
        "option_b": "Suy thận",
        "option_c": "Phụ nữ đang mang thai",
        "option_d": "Viêm gan, suy gan",
        "answer": "D"
    },
    {
        "question": "Câu 120: Phát biểu nào dưới đây KHÔNG đúng về tác dụng không mong muốn của trimethaphan?",
        "option_a": "Bí tiểu",
        "option_b": "Liệt ruột gây táo bón",
        "option_c": "Tăng tiết dịch vị",
        "option_d": "Khô miệng",
        "answer": "C"
    },
    {
        "question": "Câu 121: Phát biểu nào dưới đây KHÔNG đúng về thuốc ức chế men chuyển?",
        "option_a": "Làm giảm sự phì đại và xơ hóa tâm thất, vách liên thất",
        "option_b": "Captopril thải trừ chủ yếu qua thận dưới dạng chuyển hóa",
        "option_c": "Chỉ định tăng huyết áp, suy tim sung huyết mạn tính",
        "option_d": "Lisinopril sau chuyển hóa mới trở thành chất có hoạt tính",
        "answer": "D"
    },
    {
        "question": "Câu 122: Chọn phát biểu đúng về cường độ tác dụng giãn mạch ngoại vi của các thuốc chẹn kênh calci?",
        "option_a": "Felodipin < nitrendipin < diltiazem",
        "option_b": "Verapamil > amlodipin > nifedipin",
        "option_c": "Amlodipin > nifedipin > diltiazem",
        "option_d": "Nisodipin < nifedipin < verapamil",
        "answer": "C"
    },
    {
        "question": "Câu 123: Phát biểu nào dưới đây KHÔNG đúng về diltiazem?",
        "option_a": "Ức chế nút xoang trên tim tốt hơn verapamil",
        "option_b": "Tác dụng chọn lọc trên tim cao hơn động mạch",
        "option_c": "Chỉ định cơn đau thắt ngực thể Prinzmetal",
        "option_d": "Chỉ định tăng huyết áp, đau thắt ngực",
        "answer": "B"
    },
    {
        "question": "Câu 124: Chọn một thuốc chẹn β-adrenergic có tác dụng cường giao cảm nội tại?",
        "option_a": "Amlodipin",
        "option_b": "Atenolol",
        "option_c": "Acebutolol",
        "option_d": "Acyclovir",
        "answer": "C"
    },
    {
        "question": "Câu 125: Ưu điểm của nhóm thuốc ARB so với ACEI là:",
        "option_a": "Tăng co bóp cơ tim",
        "option_b": "Gây hạ huyết áp ở liều đầu tiên",
        "option_c": "Tăng trương lực giao cảm",
        "option_d": "Không làm bất hoạt bradykinin",
        "answer": "D"
    },
    {
        "question": "Câu 126: Cơ chế tác dụng CHỦ YẾU của thuốc chẹn kênh calci là:",
        "option_a": "Chẹn thụ thể angiotensin (AT1)",
        "option_b": "Tăng lưu lượng máu tới thận, tăng sức lọc cầu thận",
        "option_c": "Gắn đặc hiệu vào kênh Ca2+ ở cơ trơn thành mạch",
        "option_d": "Ức chế carbonic anhydrase (CA)",
        "answer": "C"
    },
    {
        "question": "Câu 127: Phát biểu nào dưới đây KHÔNG đúng về tác dụng và cơ chế tác dụng của clonidin?",
        "option_a": "Giảm giải phóng norepinephrin ở hành não",
        "option_b": "Ức chế receptor α2 – adrenergic trung ương",
        "option_c": "Giảm nhịp tim, giảm trương lực giao cảm ngoại biên",
        "option_d": "Giảm lưu lượng máu ở não, tạng, thận và mạch vành",
        "answer": "B"
    },
    {
        "question": "Câu 128: Hai hoạt chất (amilorid và hydroclorothiazid) được phối hợp trong một thuốc thành phẩm nhằm mục đích gì?",
        "option_a": "Khắc phục tác dụng tăng/giảm K+ huyết của hai hoạt chất",
        "option_b": "Giảm tác dụng gây ho khan của amilorid",
        "option_c": "Chủ yếu chỉ định cho bệnh nhân tăng nhãn áp",
        "option_d": "Tăng tốc độ lọc cầu thận, tăng tác dụng giãn mạch trực tiếp",
        "answer": "A"
    },
    {
        "question": "Câu 129: Phát biểu nào dưới đây KHÔNG đúng về minoxidil?",
        "option_a": "Phản xạ bù nặng hơn hydralazin",
        "option_b": "Làm giãn mạch nhanh hơn verapamil",
        "option_c": "Nên phối hợp với thuốc chẹn β-adrenergic",
        "option_d": "Gây tăng cân, rậm lông (dùng trên 4 tuần)",
        "answer": "B"
    },
    {
        "question": "Câu 130: Minoxidil là một lựa chọn thay thế cho thuốc nào trong cùng nhóm ở bệnh nhân bị suy thận hoặc không đáp ứng điều trị với thuốc đó?",
        "option_a": "Nitroprussiat",
        "option_b": "Verapamil",
        "option_c": "Diazoxid",
        "option_d": "Hydralazin",
        "answer": "D"
    },
    {
        "question": "Câu 131: Chọn phát biểu đúng về chỉ định của clonidin:",
        "option_a": "Đái tháo đường",
        "option_b": "Tăng huyết áp",
        "option_c": "Sốt rét",
        "option_d": "Trầm cảm",
        "answer": "B"
    },
    {
        "question": "Câu 132: Phát biểu nào dưới đây KHÔNG đúng?",
        "option_a": "Prazocin không bị chuyển hóa qua gan lần đầu",
        "option_b": "Bufeniod gây giãn mạch, giảm sức cản ngoại biên",
        "option_c": "Terazocin ức chế chọn lọc receptor α1-adrenergic",
        "option_d": "Terazocin, prazocin chỉ định tăng huyết áp",
        "answer": "A"
    },
    {
        "question": "Câu 133: Tác dụng của thuốc lợi tiểu BỊ HẠN CHẾ ở bệnh nhân có đặc điểm nào dưới đây?",
        "option_a": "Người cao tuổi, người da đen",
        "option_b": "Người có tăng thể tích huyết tương",
        "option_c": "Người béo phì, người cao tuổi",
        "option_d": "Người có hoạt tính renin cao",
        "answer": "D"
    },
    {
        "question": "Câu 134: Chọn thuốc có chỉ định tăng huyết áp ở phụ nữ mang thai:",
        "option_a": "Methyldopa",
        "option_b": "Felodipin",
        "option_c": "Diltiazem",
        "option_d": "Pilocarpin",
        "answer": "A"
    },
    {
        "question": "Câu 135: Thuốc điều trị tăng huyết áp, KHÔNG bao gồm nhóm thuốc nào dưới đây?",
        "option_a": "Giãn mạch trực tiếp",
        "option_b": "Lợi tiểu",
        "option_c": "Chẹn thụ thể angiotensin",
        "option_d": "Cường β-adrenergic",
        "answer": "D"
    },
    {
        "question": "Câu 136: Chỉ định của nhóm thuốc chẹn kênh calci là:",
        "option_a": "Tăng huyết áp, đau thắt ngực",
        "option_b": "Suy tim, đau thắt ngực",
        "option_c": "Tăng huyết áp, suy tim",
        "option_d": "Rối loạn nhịp trên thất, bí tiểu",
        "answer": "A"
    },
    {
        "question": "Câu 137: Cơ chế tác dụng của nitroprussiat là?",
        "option_a": "Cạnh tranh phosphodiesterase",
        "option_b": "Hoạt hóa adenylcyclase",
        "option_c": "Tăng cGMP",
        "option_d": "Giảm cAMP",
        "answer": "C"
    },
    {
        "question": "Câu 138: Phát biểu nào dưới đây KHÔNG đúng về tác dụng phụ của nitroprussiat?",
        "option_a": "Gây methemoglobin",
        "option_b": "Giảm huyết áp quá độ",
        "option_c": "Ù tai, rối loạn thị giác",
        "option_d": "Cường tuyến giáp",
        "answer": "D"
    },
    {
        "question": "Câu 139: Tác dụng không mong muốn nặng nhất của reserpin là:",
        "option_a": "Gây tình trạng trầm cảm",
        "option_b": "Suy tuyến thượng thận",
        "option_c": "Giảm tiết insulin",
        "option_d": "Gây tăng triglycerid huyết",
        "answer": "A"
    },
    {
        "question": "Câu 140: Tác dụng của nitroprussiat là:",
        "option_a": "Ức chế giao cảm nên nhịp tim tăng",
        "option_b": "Làm tốc độ lọc cầu thận giảm",
        "option_c": "Giãn cả tĩnh mạch và động mạch",
        "option_d": "Giãn cơ trơn phế quản mạnh",
        "answer": "C"
    },
    {
        "question": "Câu 141: Phát biểu nào dưới đây KHÔNG đúng về tác dụng và cơ chế của reserpin?",
        "option_a": "Trước khi hạ huyết áp có cơn tăng huyết áp",
        "option_b": "Giảm huyết áp tâm thu nhiều hơn huyết áp tâm trương",
        "option_c": "Ức chế thu hồi, tăng giải phóng catecholamin",
        "option_d": "Kích thích receptor α2 – adrenergic trung ương",
        "answer": "D"
    },
    {
        "question": "Câu 142: Chọn một thuốc chẹn β1-adrenergic KHÔNG chọn lọc?",
        "option_a": "Atenolol",
        "option_b": "Bufeniod",
        "option_c": "Propranolol",
        "option_d": "Doxazocin",
        "answer": "C"
    },
    {
        "question": "Câu 143: Các tác dụng không mong muốn của thuốc ức chế men chuyển, NGOẠI TRỪ:",
        "option_a": "Tăng K+ máu nhất là khi chức năng thận kém",
        "option_b": "Ho khan liên quan đến liều sử dụng",
        "option_c": "Phù niêm mạc mũi, họng, thanh quản",
        "option_d": "Thay đổi vị giác, hay gặp khi dùng captopril",
        "answer": "B"
    },
    {
        "question": "Câu 144: Chọn phát biểu đúng về cơ chế và tác dụng của methyldopa?",
        "option_a": "Ức chế receptor β1 – adrenergic ở tim",
        "option_b": "Kích thích receptor α2 – adrenergic trung ương",
        "option_c": "Dùng lâu dài làm tăng giải phóng noradrenalin",
        "option_d": "Giãn mạch trực tiếp do phóng thích NO",
        "answer": "B"
    },
    {
        "question": "Câu 145: Phát biểu nào dưới đây KHÔNG đúng về vitamin C?",
        "option_a": "Hấp thu dễ dàng qua niêm mạc ruột non",
        "option_b": "Chủ yếu có trong thịt động vật",
        "option_c": "Không bền bới nhiệt độ, ánh sáng",
        "option_d": "Không gây tích lũy trong cơ thể",
        "answer": "B"
    },
    {
        "question": "Câu 146: Tên gọi khác của vitamin A là:",
        "option_a": "Thiamin",
        "option_b": "Pyridoxin",
        "option_c": "Calciferol",
        "option_d": "Retinol",
        "answer": "D"
    },
    {
        "question": "Câu 147: Phát biểu nào dưới đây KHÔNG đúng về vitamin?",
        "option_a": "Có 2 nhóm vitamin tan trong nước và vitamin tan trong dầu",
        "option_b": "Làm tăng sức đề kháng, chống oxy hóa",
        "option_c": "Có vai trò tác động qua lại với các hormon",
        "option_d": "Phần lớn được cơ thể tổng hợp, nhu cầu hàng ngày rất lớn",
        "answer": "D"
    },
    {
        "question": "Câu 148: Khi thiếu vitamin D sẽ gây hậu quả gì ở trẻ em?",
        "option_a": "Chân vòng kiềng, chậm biết đi, chậm kín thóp",
        "option_b": "Khả năng nhìn trong bóng tối giảm gây bệnh quáng gà",
        "option_c": "Tăng áp lực nội sọ, ù tai, ngừng phát triển xương dài",
        "option_d": "Tổn thương cơ quan sinh dục, gây vô sinh",
        "answer": "A"
    },
    {
        "question": "Câu 149: Phát biểu nào dưới đây KHÔNG đúng về chỉ định của vitamin B1?",
        "option_a": "Phòng và điều trị bệnh Beri-beri",
        "option_b": "Đau nhức dây thần kinh lưng, hông",
        "option_c": "Mệt mỏi, kén ăn, suy dinh dưỡng",
        "option_d": "Tăng sức đề kháng của cơ thể",
        "answer": "D"
    },
    {
        "question": "Câu 150: Trường hợp thiếu nặng vitamin B6 có thể gây tình trạng hay bệnh lý gì?",
        "option_a": "Trẻ em chậm lớn, bệnh quáng gà",
        "option_b": "Viêm dây thần kinh ngoại biên",
        "option_c": "Loãng xương, còi xương",
        "option_d": "Chảy máu nướu răng",
        "answer": "B"
    }
];