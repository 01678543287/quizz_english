const quizData = [
    {
        "id": 1,
        "question": "Mục tiêu cơ bản của môn học Dược lâm sàng là gì?",
        "option_a": "Tìm ra thuốc mới",
        "option_b": "Chọn lựa hình thức trình bày đẹp mắt của thuốc",
        "option_c": "Chọn thị trường tốt nhất cho thuốc",
        "option_d": "Tối ưu hóa việc trị liệu bằng thuốc cho từng người bệnh",
        "answer": "D"
    },
    {
        "id": 2,
        "question": "Nhiệm vụ của dược sĩ lâm sàng là:",
        "option_a": "Theo dõi các tác dụng phụ của thuốc",
        "option_b": "Chỉ định liều sử dụng của thuốc",
        "option_c": "Chỉ định chế độ dinh dưỡng cho bệnh nhân",
        "option_d": "Chỉ định đường dùng của thuốc",
        "answer": "A"
    },
    {
        "id": 3,
        "question": "Trong thực hành bệnh viện, dược sĩ có vai trò:",
        "option_a": "Tư vấn về sử dụng thuốc",
        "option_b": "Tiên lượng đúng diễn tiến của bệnh",
        "option_c": "Chẩn đoán đúng bệnh",
        "option_d": "Chọn lựa chủng loại thuốc phù hợp nhu cầu trị liệu",
        "answer": "A"
    },
    {
        "id": 4,
        "question": "Môn học Dược lâm sàng được đưa vào chương trình học tại trường đại học Y Dược TP HCM năm nào?",
        "option_a": "1964",
        "option_b": "1972",
        "option_c": "1984",
        "option_d": "2000",
        "answer": "C"
    },
    {
        "id": 5,
        "question": "Nhiệm vụ nào sau đây không phải của dược sĩ lâm sàng?",
        "option_a": "Tham vấn về chiến lược trị liệu",
        "option_b": "Kiểm tra các chống chỉ định, tương tác thuốc và đề nghị hiệu chỉnh liều nếu cần",
        "option_c": "Hướng dẫn bổ sung kiến thức cho điều dưỡng về cách chăm sóc bệnh nhân",
        "option_d": "Theo dõi các tác dụng phụ của thuốc",
        "answer": "C"
    },
    {
        "id": 6,
        "question": "Dược lâm sàng nghiên cứu gì?",
        "option_a": "Hoạt chất mới",
        "option_b": "Tá dược mới",
        "option_c": "Phản ứng có hại của thuốc",
        "option_d": "Tuổi thọ của thuốc",
        "answer": "C"
    },
    {
        "id": 7,
        "question": "Trong bệnh viện, bệnh nhân sử dụng thuốc theo chỉ định của ai?",
        "option_a": "Bác sĩ điều trị",
        "option_b": "Bác sĩ xét nghiệm",
        "option_c": "Dược sĩ lâm sàng",
        "option_d": "Bác sĩ dinh dưỡng",
        "answer": "A"
    },
    {
        "id": 8,
        "question": "Dược động học nghiên cứu về tác động của…. đối với thuốc",
        "option_a": "Cơ thể",
        "option_b": "Thuốc",
        "option_c": "Thức ăn",
        "option_d": "Thức uống",
        "answer": "A"
    },
    {
        "id": 9,
        "question": "Nghiên cứu dược động học lâm sàng thực hiện trên đối tượng nào?",
        "option_a": "Thú vật và người khỏe mạnh",
        "option_b": "Người già",
        "option_c": "Trẻ em",
        "option_d": "Người bệnh",
        "answer": "D"
    },
    {
        "id": 10,
        "question": "Nghiên cứu dược động học cơ bản thực hiện trên:",
        "option_a": "Người già",
        "option_b": "Thú vật và người khỏe mạnh",
        "option_c": "Trẻ em",
        "option_d": "Người bệnh",
        "answer": "B"
    },
    {
        "id": 11,
        "question": "Thuốc đưa vào cơ thể bằng đường nào sẽ đi thẳng vào hệ tuần hoàn không đi ngang qua “màng sinh học”?",
        "option_a": "Tiêm dưới da",
        "option_b": "Tiêm bắp",
        "option_c": "Tiêm truyền tĩnh mạch",
        "option_d": "Tiêm phúc mạc",
        "answer": "C"
    },
    {
        "id": 12,
        "question": "Sinh khả dụng F được ước lượng bởi tỉ lệ AUC_PO/AUC_IV, gọi là sinh khả dụng:",
        "option_a": "Tương đối",
        "option_b": "Tuyệt đối",
        "option_c": "So sánh",
        "option_d": "Thực tế",
        "answer": "B"
    },
    {
        "id": 13,
        "question": "Thuốc B được sử dụng bằng đường tiêm tĩnh mạch, toàn bộ thuốc B được hấp thu vào máu ở thể nguyên vẹn, vậy F B  là bao nhiêu %?",
        "option_a": "80",
        "option_b": "60",
        "option_c": "50",
        "option_d": "100",
        "answer": "D"
    },
    {
        "id": 14,
        "question": "Đường dùng nào có sinh khả dụng cao nhất?",
        "option_a": "Động mạch",
        "option_b": "Tĩnh mạch",
        "option_c": "Trực tràng",
        "option_d": "Uống",
        "answer": "B"
    },
    {
        "id": 15,
        "question": "Phần hoạt chất nào khi hấp thu vào hệ tuần hoàn cho tác dụng?",
        "option_a": "Gắn với Albumin",
        "option_b": "Tự do",
        "option_c": "Gắn với Globulin",
        "option_d": "Gắn với Lipoprotein",
        "answer": "B"
    },
    {
        "id": 16,
        "question": "Protein huyết tương nào có vai trò chủ yếu trong phản ứng gắn với thuốc?",
        "option_a": "Albumin",
        "option_b": "Globulin",
        "option_c": "Alpha 1- glycoprotein",
        "option_d": "Lipoprotein",
        "answer": "A"
    },
    {
        "id": 17,
        "question": "Trị số nhỏ nhất của thể tích biểu kiến của sự phân bố là:",
        "option_a": "0,5 lít/kg",
        "option_b": "0,04 lít/kg",
        "option_c": "1 lít/kg",
        "option_d": "5 lít/kg",
        "answer": "B"
    },
    {
        "id": 18,
        "question": "Các phản ứng biến đổi sinh học phần lớn diễn ra ở đâu?",
        "option_a": "Thận",
        "option_b": "Phổi",
        "option_c": "Gan",
        "option_d": "Màng nhầy ruột",
        "answer": "C"
    },
    {
        "id": 19,
        "question": "Phần lớn các thuốc trong hệ tuần hoàn bị thải trừ ra khỏi cơ thể chủ yếu qua:",
        "option_a": "Thận",
        "option_b": "Gan",
        "option_c": "Nước bọt",
        "option_d": "Mồ hôi",
        "answer": "A"
    },
    {
        "id": 20,
        "question": "Thuốc bài tiết qua sữa, khi sử dụng chú ý nhất cho đối tượng nào?",
        "option_a": "Phụ nữ đang mang thai",
        "option_b": "Phụ nữ cho con bú",
        "option_c": "Trẻ sơ sinh",
        "option_d": "Trẻ đang bú mẹ",
        "answer": "D"
    },
    {
        "id": 21,
        "question": "Thông số cơ bản của giai đoạn hấp thu là gì?",
        "option_a": "Độ thanh thải",
        "option_b": "Sinh khả dụng",
        "option_c": "Thời gian bán thải",
        "option_d": "Thể tích biểu kiến của sự phân bố",
        "answer": "B"
    },
    {
        "id": 22,
        "question": "Thông số cơ bản của giai đoạn phân bố là gì?",
        "option_a": "Độ thanh thải",
        "option_b": "Sinh khả dụng",
        "option_c": "Thời gian bán thải",
        "option_d": "Thể tích biểu kiến của sự phân bố",
        "answer": "D"
    },
    {
        "id": 23,
        "question": "Thông số cơ bản của giai đoạn thải trừ là gì?",
        "option_a": "Vận tốc hấp thu",
        "option_b": "Sinh khả dụng",
        "option_c": "Thời gian bán thải",
        "option_d": "Thể tích biểu kiến của sự phân bố",
        "answer": "C"
    },
    {
        "id": 24,
        "question": "Độ thanh thải của Theophyllin là 0,65 ml/phút/kg, thải trừ qua gan 90%. Vậy độ thanh thải qua gan là bao nhiêu?",
        "option_a": "0,65     ml/phút/kg",
        "option_b": "0,065   ml/phút/kg",
        "option_c": "0,585   ml/phút/kg",
        "option_d": "0,0585 ml/phút/kg",
        "answer": "C"
    },
    {
        "id": 25,
        "question": "Cephalexin có Clearance toàn bộ là 300ml/phút, chuyển hóa chủ yếu ở thận 91%. Vậy Clearance thận là bao nhiêu?",
        "option_a": "273 ml/phút",
        "option_b": "27   ml/phút",
        "option_c": "300 ml/phút",
        "option_d": "275 ml/phút",
        "answer": "A"
    },
    {
        "id": 26,
        "question": "Thời gian bán thải là thời gian cần thiết để một nửa lượng thuốc đã uống:",
        "option_a": "Gắn kết với Protein huyết tương",
        "option_b": "Được thải ra khỏi cơ thể",
        "option_c": "Gắn kết với mô",
        "option_d": "Được thải qua thận",
        "answer": "B"
    },
    {
        "id": 27,
        "question": "Thuốc A dùng uống, FA = 60% nghĩa là :",
        "option_a": "60% chất A được hấp thu vào máu ở thể nguyên vẹn",
        "option_b": "40% chất A được hấp thu vào máu ở thể nguyên vẹn",
        "option_c": "60%  bị hao hụt, mất mát do tác động của cơ thể",
        "option_d": "40% thuốc A ở dạng tự do",
        "answer": "A"
    },
    {
        "id": 28,
        "question": "Thông số dược động nào được định nghĩa bởi phần của hoạt chất vào đến vòng tuần hoàn ở dạng nguyên vẹn?",
        "option_a": "Thời gian bán thải",
        "option_b": "Sinh khả dụng",
        "option_c": "Độ thanh lọc",
        "option_d": "Thể tích biểu kiến của sự phân bố",
        "answer": "B"
    },
    {
        "id": 29,
        "question": "Thông số dược động nào được định nghĩa là thể tích được tính bằng ml của huyết tương được một cơ quan nào đó của cơ thể loại bỏ hoàn toàn thuốc đó trong một đơn vị thời gian tính bằng phút?",
        "option_a": "Thời gian bán thải",
        "option_b": "Sinh khả dụng",
        "option_c": "Độ thanh lọc",
        "option_d": "Thể tích biểu kiến của sự phân bố",
        "answer": "C"
    },
    {
        "id": 30,
        "question": "Thay đổi yếu tố lý hóa của thuốc khi dùng chung là một hiện tượng tương tác xảy ra trong giai đoạn nào?",
        "option_a": "Hấp thu",
        "option_b": "Phân bố",
        "option_c": "Chuyển hóa",
        "option_d": "Thải trừ",
        "answer": "A"
    },
    {
        "id": 31,
        "question": "Môi trường acid thuận lợi cho việc hấp thu các chất có bản chất:",
        "option_a": "Base yếu",
        "option_b": "Trung tính",
        "option_c": "Acid yếu",
        "option_d": "Lưỡng tính",
        "answer": "C"
    },
    {
        "id": 32,
        "question": "Môi trường kiềm thuận lợi cho việc hấp thu các chất có bản chất:",
        "option_a": "Acid yếu",
        "option_b": "Trung tính",
        "option_c": "Lưỡng tính",
        "option_d": "Base yếu",
        "answer": "D"
    },
    {
        "id": 33,
        "question": "Môi trường acid tại dạ dày quyết định bởi:",
        "option_a": "Hệ thống men",
        "option_b": "pH của dịch vị",
        "option_c": "Hệ vi khuẩn ruột",
        "option_d": "Hệ đệm",
        "answer": "B"
    },
    {
        "id": 34,
        "question": "Phức chất tạo ra giữa ion kim loại Al3+, Mg2+, Fe2+ với thuốc sẽ làm…….. kích thước phân tử, do đó thuốc không qua được màng sinh học",
        "option_a": "Gia tăng",
        "option_b": "Giảm",
        "option_c": "Cố định",
        "option_d": "Thay đổi",
        "answer": "A"
    },
    {
        "id": 35,
        "question": "Khắc phục các tương tác trong quá trình hấp thu khi phải dùng chung các thuốc có tương tác thì nên uống cách xa để tránh tiếp xúc giữa chúng tối thiểu là:",
        "option_a": "1 giờ",
        "option_b": "4 giờ",
        "option_c": "2 giờ",
        "option_d": "15 phút",
        "answer": "C"
    },
    {
        "id": 36,
        "question": "Thuốc lưu giữ lâu ở dạ dày sẽ …… quá trình hấp thu",
        "option_a": "Làm nhanh",
        "option_b": "Không ảnh hưởng",
        "option_c": "Ảnh hưởng rất ít",
        "option_d": "Làm chậm",
        "answer": "D"
    },
    {
        "id": 37,
        "question": "Trong ống tiêu hóa, thuốc được hấp thu chủ yếu ở:",
        "option_a": "Niêm mạc dạ dày",
        "option_b": "Màng nhầy tá tràng và ruột non",
        "option_c": "Niêm mạc ruột già",
        "option_d": "Niêm mạc trực tràng",
        "answer": "B"
    },
    {
        "id": 38,
        "question": "Thuốc làm tăng nhu động ruột sẽ làm…..sự hấp thu của thuốc dùng chung",
        "option_a": "Giảm",
        "option_b": "Tăng",
        "option_c": "Không đổi",
        "option_d": "Ít thay đổi",
        "answer": "A"
    },
    {
        "id": 39,
        "question": "Tương tác do tác dụng trên receptor, gọi là tương tác:",
        "option_a": "Trong quá trình hấp thu",
        "option_b": "Trong quá trình chuyển hóa",
        "option_c": "Trong quá trình phân bố",
        "option_d": "Dược lực học",
        "answer": "D"
    },
    {
        "id": 40,
        "question": "Thay đổi yếu tố lý hóa là thay đổi:",
        "option_a": "Độ ion hóa của thuốc",
        "option_b": "Tốc độ làm rỗng dạ dày",
        "option_c": "Nhu động ruột",
        "option_d": "Hệ vi khuẩn ruột",
        "answer": "A"
    },
    {
        "id": 41,
        "question": "Thay đổi yếu tố dược lý là thay đổi:",
        "option_a": "Tạo phức",
        "option_b": "Ảnh hưởng trên sự vận chuyển tích cực",
        "option_c": "pH của môi trường",
        "option_d": "Độ ion hóa",
        "answer": "B"
    },
    {
        "id": 42,
        "question": "Tương tác xảy ra do thay đổi sự gắn kết vào protein huyết tương hoặc protein mô tế bào của các thuốc dùng chung là tương tác trong giai đoạn:",
        "option_a": "Chuyển hóa",
        "option_b": "Hấp thu",
        "option_c": "Phân bố",
        "option_d": "Thải trừ",
        "answer": "C"
    },
    {
        "id": 43,
        "question": "Tương tác xảy ra trong giai đoạn chuyển hóa chủ yếu ở:",
        "option_a": "Gan",
        "option_b": "Phổi",
        "option_c": "Thận",
        "option_d": "Ruột",
        "answer": "A"
    },
    {
        "id": 44,
        "question": "Tương tác xảy ra trong giai đoạn thải trừ chủ yếu ở:",
        "option_a": "Ruột non",
        "option_b": "Ruột già",
        "option_c": "Thận",
        "option_d": "Trực tràng",
        "answer": "C"
    },
    {
        "id": 45,
        "question": "Hiệp lực bổ sung xảy ra khi hoạt lực 2 thuốc dùng chung:",
        "option_a": "Tăng hơn tổng hoạt lực của 2 thuốc",
        "option_b": "Bằng tổng hoạt lực của 2 thuốc dùng riêng lẻ",
        "option_c": "Yếu hơn tổng hoạt lực của 2 thuốc",
        "option_d": "Yếu hơn hoạt lực của từng thuốc riêng lẻ",
        "answer": "B"
    },
    {
        "id": 46,
        "question": "Uống thuốc lúc đói, thuốc chỉ lưu lại dạ dày từ:",
        "option_a": "30-60 phút",
        "option_b": "1-2 giờ",
        "option_c": "1-4 giờ",
        "option_d": "10-30 phút",
        "answer": "D"
    },
    {
        "id": 47,
        "question": "Uống thuốc sau bữa ăn, thời gian lưu thuốc tại dạ dày có thể từ:",
        "option_a": "1-4 giờ",
        "option_b": "1-2 giờ",
        "option_c": "30-60 phút",
        "option_d": "10-30 phút",
        "answer": "A"
    },
    {
        "id": 48,
        "question": "Thuốc Ampicillin uống sau bữa ăn sẽ:",
        "option_a": "Tăng tác dụng của thuốc",
        "option_b": "Giảm sinh khả dụng",
        "option_c": "Giảm khả năng bị phá hủy thuốc",
        "option_d": "Không thay đổi tác dụng của thuốc",
        "answer": "B"
    },
    {
        "id": 49,
        "question": "Thuốc Spiramycin uống sau bữa ăn sẽ:",
        "option_a": "Tăng tác dụng của thuốc",
        "option_b": "Giảm sinh khả dụng",
        "option_c": "Giảm khả năng bị phá hủy thuốc",
        "option_d": "Không thay đổi tác dụng của thuốc",
        "answer": "C"
    },
    {
        "id": 50,
        "question": "Tương tác thuốc xảy ra có 4 mức độ, biểu hiện nào sau đây là mức độ 1?",
        "option_a": "Tương tác rất nguy hiểm",
        "option_b": "Cân nhắc lợi ích và nguy cơ",
        "option_c": "Cẩn thận, theo dõi bệnh nhân",
        "option_d": "Theo dõi quá trình điều trị",
        "answer": "A"
    },
    {
        "id": 51,
        "question": "Tương tác thuốc xảy ra có 4 mức độ, biểu hiện nào sau đây là mức độ 2?",
        "option_a": "Tương tác rất nguy hiểm",
        "option_b": "Cân nhắc lợi ích và nguy cơ",
        "option_c": "Cẩn thận, theo dõi bệnh nhân",
        "option_d": "Theo dõi quá trình điều trị",
        "answer": "B"
    },
    {
        "id": 52,
        "question": "Tương tác thuốc xảy ra có 4 mức độ, biểu hiện nào sau đây là mức độ 3?",
        "option_a": "Tương tác rất nguy hiểm",
        "option_b": "Cân nhắc lợi ích và nguy cơ",
        "option_c": "Cẩn thận, theo dõi bệnh nhân",
        "option_d": "Theo dõi quá trình điều trị",
        "answer": "C"
    },
    {
        "id": 53,
        "question": "Tương tác thuốc xảy ra có 4 mức độ, biểu hiện nào sau đây là mức độ 4?",
        "option_a": "Tương tác rất nguy hiểm",
        "option_b": "Cân nhắc lợi ích và nguy cơ",
        "option_c": "Cẩn thận, theo dõi bệnh nhân",
        "option_d": "Theo dõi quá trình điều trị",
        "answer": "D"
    },
    {
        "id": 54,
        "question": "Thuốc giải phóng chậm, các thuốc cần tác dụng tại chỗ trong lòng ruột, uống vào thời điểm sau bữa ăn bao lâu là thích hợp?",
        "option_a": "2-4 giờ",
        "option_b": "10- 15phút",
        "option_c": "1-2 giờ",
        "option_d": "15-30 phút",
        "answer": "A"
    },
    {
        "id": 55,
        "question": "Để tăng hấp thu các thuốc tan nhiều trong mỡ như Vitamin A, D, E, K người ta dùng thức ăn có nhiều chất:",
        "option_a": "Béo",
        "option_b": "Đạm",
        "option_c": "Bột",
        "option_d": "Khoáng",
        "answer": "A"
    },
    {
        "id": 56,
        "question": "Những thuốc làm tăng tốc độ làm rỗng dạ dày sẽ gây ảnh hưởng gì cho thuốc dùng chung?",
        "option_a": "Tăng sự hấp thu",
        "option_b": "Giảm sự hấp thu",
        "option_c": "Không đổi sự hấp thu",
        "option_d": "Mất tác dụng",
        "answer": "B"
    },
    {
        "id": 57,
        "question": "Các muối Al 3+ sẽ gây ảnh hưởng gì cho thuốc dùng chung?",
        "option_a": "Tăng sự hấp thu",
        "option_b": "Giảm sự hấp thu",
        "option_c": "Không đổi sự hấp thu",
        "option_d": "Mất tác dụng",
        "answer": "B"
    },
    {
        "id": 58,
        "question": "Những thuốc làm giảm nhu động ruột sẽ gây ảnh hưởng gì cho thuốc dùng chung?",
        "option_a": "Tăng sự hấp thu",
        "option_b": "Giảm sự hấp thu",
        "option_c": "Không đổi sự hấp thu",
        "option_d": "Mất tác dụng",
        "answer": "A"
    },
    {
        "id": 59,
        "question": "Sự hấp thu của digoxin được gia tăng có thể dẫn đến ngộ độc khi dùng chung với thuốc gì?",
        "option_a": "Giảm đau",
        "option_b": "Kháng viêm",
        "option_c": "Kháng sinh",
        "option_d": "Vitamin",
        "answer": "C"
    },
    {
        "id": 60,
        "question": "Thuốc nào đẩy được dicoumarol  ra khỏi phức hợp protein huyết tương và gây chảy máu cho người dùng thuốc?",
        "option_a": "Miconazol",
        "option_b": "Vitamin B1",
        "option_c": "Paracetamol",
        "option_d": "Calcium",
        "answer": "A"
    },
    {
        "id": 61,
        "question": "Thuốc nào ức chế chuyển hóa terfenadin thành sản phẩm hoạt tính, dẫn đến tăng cao nồng độ của terfenadin không chuyển hóa có tác dụng độc",
        "option_a": "Phenobarbital",
        "option_b": "Ketoconazol",
        "option_c": "Rifampicin",
        "option_d": "Meprobamat",
        "answer": "B"
    },
    {
        "id": 62,
        "question": "Các thuốc có tính kiềm yếu sẽ gây ảnh hưởng gì cho việc thải trừ của các thuốc dùng chung?",
        "option_a": "Tăng thải trừ các thuốc có tính acid",
        "option_b": "Giảm thải trừ các thuốc có tính acid",
        "option_c": "Tăng thải trừ các thuốc có tính base",
        "option_d": "Không đổi tính thải trừ của tất cả thuốc",
        "answer": "A"
    },
    {
        "id": 63,
        "question": "Vitamin C liều cao trên 2gam có thể gây ảnh hưởng gì cho việc thải trừ của các thuốc dùng chung?",
        "option_a": "Tăng thải trừ các thuốc có tính acid",
        "option_b": "Giảm thải trừ các thuốc có tính base",
        "option_c": "Tăng thải trừ các thuốc có tính base",
        "option_d": "Không đổi tính thải trừ của tất cả thuốc",
        "answer": "C"
    },
    {
        "id": 64,
        "question": "Thức ăn làm….. sự hấp thu của Clorpropamid",
        "option_a": "Không đổi",
        "option_b": "Chậm",
        "option_c": "Giảm",
        "option_d": "Tăng",
        "answer": "A"
    },
    {
        "id": 65,
        "question": "Thức ăn làm….. sự hấp thu của Diazepam",
        "option_a": "Không đổi",
        "option_b": "Chậm",
        "option_c": "Giảm",
        "option_d": "Tăng",
        "answer": "D"
    },
    {
        "id": 66,
        "question": "Thức ăn làm….. sự hấp thu của Metronidazol",
        "option_a": "Không đổi",
        "option_b": "Chậm",
        "option_c": "Giảm",
        "option_d": "Tăng",
        "answer": "A"
    },
    {
        "id": 67,
        "question": "Thức ăn làm….. sự hấp thu của Digoxin",
        "option_a": "Không đổi",
        "option_b": "Chậm",
        "option_c": "Giảm",
        "option_d": "Tăng",
        "answer": "B"
    },
    {
        "id": 68,
        "question": "Dung môi nào thích hợp nhất cho mọi loại thuốc vì không xảy ra tương kỵ khi hòa tan thuốc?",
        "option_a": "Nước",
        "option_b": "Sữa",
        "option_c": "Trà",
        "option_d": "Rượu",
        "answer": "A"
    },
    {
        "id": 69,
        "question": "Rượu uống cùng với thuốc hạ huyết áp có nguy cơ gì?",
        "option_a": "Tăng huyết áp đột ngột quá mức",
        "option_b": "Gây phản ứng Antabuse",
        "option_c": "Gây tác dụng phụ trên đường tiêu hóa",
        "option_d": "Tụt huyết áp đột ngột quá mức",
        "answer": "D"
    },
    {
        "id": 70,
        "question": "Thuốc corticoid nên uống 1 lần vào lúc nào?",
        "option_a": "Buổi trưa",
        "option_b": "Buổi sáng",
        "option_c": "Buổi chiều",
        "option_d": "Buổi tối",
        "answer": "B"
    },
    {
        "id": 71,
        "question": "Loại thuốc nào nên uống cách xa bữa ăn (1 giờ trước ăn hoặc 1-2 giờ sau ăn) ?",
        "option_a": "Thuốc kích thích tiêu hóa",
        "option_b": "Thuốc kích ứng mạnh đường tiêu hóa",
        "option_c": "Thuốc giảm hấp thu do thức ăn",
        "option_d": "Thuốc tác dụng tại chỗ trong lòng ruột",
        "answer": "C"
    },
    {
        "id": 72,
        "question": "Không nên phối hợp thuốc INH với thuốc nào?",
        "option_a": "Vitamin B1",
        "option_b": "Vitamin B12",
        "option_c": "Vitamin B6",
        "option_d": "Vitamin B5",
        "answer": "C"
    },
    {
        "id": 73,
        "question": "Thuốc nào làm giảm tổng hợp vitamin K khi dùng chung?",
        "option_a": "Vitamin",
        "option_b": "Kháng sinh phổ rộng",
        "option_c": "Kháng sinh phổ hẹp",
        "option_d": "Khoáng vi lượng",
        "answer": "B"
    },
    {
        "id": 74,
        "question": "Về mặt Dược lực học, tương tác thuốc xảy ra ở đâu?",
        "option_a": "Quá trình hấp thu",
        "option_b": "Quá trình phân bố",
        "option_c": "Quá trình chuyển hóa",
        "option_d": "Receptor",
        "answer": "D"
    },
    {
        "id": 75,
        "question": "Tương tác Dược động của thuốc có thể xảy ra ở đâu?",
        "option_a": "Trên cùng 1 receptor",
        "option_b": "Trên 2 receptor",
        "option_c": "Trên nhiều receptor khác nhau",
        "option_d": "Trong quá trình thải trừ",
        "answer": "D"
    },
    {
        "id": 76,
        "question": "Rượu uống cùng với paracetamol sẽ gây hậu quả gì?",
        "option_a": "Tăng nguy cơ viêm gan",
        "option_b": "Thay đổi tâm tính của người bệnh",
        "option_c": "Tăng tác dụng phụ của paracetamol trên đường tiêu hóa",
        "option_d": "Tăng huyết áp",
        "answer": "A"
    },
    {
        "id": 77,
        "question": "Thuốc nào sau đây gây cản trở hấp thu pyridoxin?",
        "option_a": "Sorbitol",
        "option_b": "Phosphalugel",
        "option_c": "INH",
        "option_d": "Cefuroxim",
        "answer": "C"
    },
    {
        "id": 78,
        "question": "Thuốc nào sau đây gây giảm tổng hợp Vitamin K?",
        "option_a": "Thuốc nhuận trường",
        "option_b": "Thuốc antacid",
        "option_c": "Thuốc INH",
        "option_d": "Kháng sinh",
        "answer": "D"
    },
    {
        "id": 79,
        "question": "Cấp tư vấn chính thức cao nhất, có nhiệm vụ trình lên Bộ Y Tế các biện pháp dự phòng hay hạn chế các tai biến do sử dụng thuốc:",
        "option_a": "Hội đồng quốc gia về Dược cảnh giác",
        "option_b": "Cơ quan Dược cảnh giác",
        "option_c": "Trung tâm Dược cảnh giác địa phương",
        "option_d": "Hội đồng dược lý",
        "answer": "A"
    },
    {
        "id": 80,
        "question": "ADR là:",
        "option_a": "Chống chỉ định của thuốc",
        "option_b": "Phản ứng có hại của thuốc",
        "option_c": "Tương tác của thuốc",
        "option_d": "Tác dụng phụ của thuốc",
        "answer": "B"
    },
    {
        "id": 81,
        "question": "Phản ứng phụ gây tử vong, gây nguy hiểm đến tính mạng, gây tàn tật, mất khả năng, phải nhập viện, kéo dài thời gian nằm viện. Gọi là:",
        "option_a": "Phản ứng phụ",
        "option_b": "Phản ứng có hại của thuốc",
        "option_c": "Phản ứng phụ nghiêm trọng",
        "option_d": "Phản ứng quá mẫn",
        "answer": "C"
    },
    {
        "id": 82,
        "question": "Phản ứng có hại của thuốc là phản ứng xuất hiện khi dùng:",
        "option_a": "Thấp hơn liều chỉ định",
        "option_b": "Cao hơn liều chỉ định",
        "option_c": "Sai liều chỉ định",
        "option_d": "Đúng liều chỉ định",
        "answer": "D"
    },
    {
        "id": 83,
        "question": "Dược cảnh giác bao gồm các lĩnh vực sau, ngoại trừ:",
        "option_a": "Phát hiện thuốc mới để đưa vào sản xuất và sử dụng",
        "option_b": "Phát hiện các ADR trong quá trình theo dõi lâm sàng của một thuốc mới",
        "option_c": "Tổng hợp các ADR của từng loại thuốc trong quá trình theo dõi hậu mãi",
        "option_d": "Phát hiện các sai sót trong chỉ định thuốc và các thất bại trong điều trị thông qua việc theo dõi ADR",
        "answer": "A"
    },
    {
        "id": 84,
        "question": "Phản ứng bất lợi của thuốc gọi là hiếm gặp khi xuất hiện với tần suất:",
        "option_a": "< 1/100",
        "option_b": "< 1/1.000",
        "option_c": "> 1/1.000",
        "option_d": ">1/100",
        "answer": "B"
    },
    {
        "id": 85,
        "question": "Phản ứng bất lợi của thuốc gọi là thường gặp khi xuất hiện với tần suất:",
        "option_a": "< 1/100",
        "option_b": "< 1/1.000",
        "option_c": "> 1/1.000",
        "option_d": ">1/100",
        "answer": "D"
    },
    {
        "id": 86,
        "question": "Phản ứng bất lợi của thuốc gọi là ít gặp khi xuất hiện với tần suất:",
        "option_a": "1/1.000<ADR< 1/100",
        "option_b": "ADR< 1/1.000",
        "option_c": "ADR> 1/1.000",
        "option_d": "ADR>1/100",
        "answer": "A"
    },
    {
        "id": 87,
        "question": "Phản ứng bất lợi của thuốc xảy ra mà thầy thuốc yêu cầu cần phải giảm liều hoặc thay thuốc. Gọi là ADR mức độ:",
        "option_a": "Nặng",
        "option_b": "Nhẹ",
        "option_c": "Trung bình",
        "option_d": "Tử vong",
        "answer": "C"
    },
    {
        "id": 88,
        "question": "Phản ứng bất lợi của thuốc xảy ra mà thầy thuốc yêu cầu không cần điều trị, không cần dùng thuốc giải độc, không cần ngừng thuốc. Gọi là ADR mức độ:",
        "option_a": "Nặng",
        "option_b": "Nhẹ",
        "option_c": "Trung bình",
        "option_d": "Tử vong",
        "answer": "B"
    },
    {
        "id": 89,
        "question": "Phản ứng bất lợi của thuốc xảy ra có thể đe dọa tính mạng, phải ngừng thuốc và có biện pháp chống độc đặc hiệu. Gọi là ADR mức độ:",
        "option_a": "Nặng",
        "option_b": "Nhẹ",
        "option_c": "Trung bình",
        "option_d": "Tử vong",
        "answer": "A"
    },
    {
        "id": 90,
        "question": "Phản ứng bất lợi của thuốc xảy ra trực tiếp hoặc gián tiếp liên quan đến tử vong của bệnh nhân. Gọi là ADR mức độ:",
        "option_a": "Nặng",
        "option_b": "Nhẹ",
        "option_c": "Trung bình",
        "option_d": "Tử vong",
        "answer": "D"
    },
    {
        "id": 91,
        "question": "Các ADR typ A có các đặc điểm sau:",
        "option_a": "Tiên lượng được",
        "option_b": "Không tiên lượng được",
        "option_c": "Không liên quan đến đặc tính dược lý của thuốc",
        "option_d": "Liên quan đến yếu tố di truyền",
        "answer": "A"
    },
    {
        "id": 92,
        "question": "Các ADR typ B có các đặc điểm sau:",
        "option_a": "Tiên lượng được",
        "option_b": "Không tiên lượng được",
        "option_c": "Liên quan đến đặc tính dược lý của thuốc",
        "option_d": "Phụ thuộc liều dùng",
        "answer": "B"
    },
    {
        "id": 93,
        "question": "ADR gây chảy máu đường tiêu hóa thường gặp ở bệnh nhân:",
        "option_a": "Mắc bệnh về gan",
        "option_b": "Có tiền sử bệnh dạ dày",
        "option_c": "Mắc bệnh về thận",
        "option_d": "Nhiễm HIV",
        "answer": "B"
    },
    {
        "id": 94,
        "question": "Thuốc mới được đưa ra thị trường, phải báo cáo mọi phản ứng đáng ngờ. Vậy thuốc gọi là mới khi đưa ra thị trường chưa quá bao lâu?",
        "option_a": "5 năm",
        "option_b": "4 năm",
        "option_c": "3 năm",
        "option_d": "2 năm",
        "answer": "A"
    },
    {
        "id": 95,
        "question": "Dị ứng thuốc là một ADR nào?",
        "option_a": "Tiên lượng được",
        "option_b": "Không tiên lượng được",
        "option_c": "Phụ thuộc liều đùng",
        "option_d": "Phụ thuộc đường dùng",
        "answer": "B"
    },
    {
        "id": 96,
        "question": "Một ADR gọi là chắc chắn khi nào?",
        "option_a": "Ngừng thuốc thì bệnh nhân có tiến triển hợp lý và khi dùng lại thuốc thì bệnh nhân có triệu chứng tương tự",
        "option_b": "Thông tin về việc dùng lại thuốc chưa đầy đủ hoặc không có",
        "option_c": "Thông tin về việc ngừng thuốc có thể thiếu hoặc không rõ ràng",
        "option_d": "Mối liên quan về thời gian xảy ra tai biến với việc sử dụng thuốc không rõ ràng",
        "answer": "A"
    },
    {
        "id": 97,
        "question": "Một ADR gọi là không chắc chắn khi nào?",
        "option_a": "Ngừng thuốc thì bệnh nhân có tiến triển hợp lý và khi dùng lại thuốc thì bệnh nhân có triệu chứng tương tự",
        "option_b": "Thông tin về việc dùng lại thuốc chưa đầy đủ hoặc không có",
        "option_c": "Thông tin về việc ngừng thuốc có thể thiếu hoặc không rõ ràng",
        "option_d": "Mối liên quan về thời gian xảy ra tai biến với việc sử dụng thuốc không rõ ràng",
        "answer": "D"
    },
    {
        "id": 98,
        "question": "Ai là người báo cáo ADR?",
        "option_a": "Bệnh nhân",
        "option_b": "Người trực tiếp nuôi bệnh",
        "option_c": "Người nhà bệnh nhân",
        "option_d": "Nhân viên y tế",
        "answer": "D"
    },
    {
        "id": 99,
        "question": "Thiếu máu bất sản do chloramphenicol gặp ở phụ nữ nhiều gấp 2 lần so với nam giới. Vậy ADR của chloramphenicol liên quan đến gì của người dùng thuốc?",
        "option_a": "Tuổi",
        "option_b": "Giới tính",
        "option_c": "Bệnh mắc kèm",
        "option_d": "Tính dị thường vốn có",
        "answer": "B"
    },
    {
        "id": 100,
        "question": "Chảy máu trầm trọng hơn do dùng warfarin, heparin ở người có thiếu hụt yếu tố đông máu. Vậy yếu  tố nào liên quan đến phát sinh ADR này?",
        "option_a": "Tuổi",
        "option_b": "Giới tính",
        "option_c": "Bệnh mắc kèm",
        "option_d": "Tính dị thường vốn có",
        "answer": "C"
    },
    {
        "id": 101,
        "question": "Sốc phản vệ xảy ra khi bệnh nhân sử dụng penicilin. Vậy ADR này liên quan đến yếu tố nào của người dùng thuốc?",
        "option_a": "Tuổi",
        "option_b": "Giới tính",
        "option_c": "Bệnh mắc kèm",
        "option_d": "Tính dị thường vốn có",
        "answer": "D"
    },
    {
        "id": 102,
        "question": "Creatin được tổng hợp ở đâu?",
        "option_a": "Gan",
        "option_b": "Thận",
        "option_c": "Phổi",
        "option_d": "Ruột",
        "answer": "A"
    },
    {
        "id": 103,
        "question": "Sản phẩm cặn bả hình thành do sự biến đổi của Creatin là gì?",
        "option_a": "Phosphocreatin",
        "option_b": "Creatinin",
        "option_c": "Creatinkinase",
        "option_d": "Creatinphosphokinase",
        "answer": "B"
    },
    {
        "id": 104,
        "question": "Sự tạo thành Creatinin phụ thuộc vào:",
        "option_a": "Chế độ ăn",
        "option_b": "Chế độ vận động",
        "option_c": "Khối lượng cơ của mỗi người",
        "option_d": "Các thay đổi sinh lý",
        "answer": "C"
    },
    {
        "id": 105,
        "question": "Creatinin đào thải qua:",
        "option_a": "Gan",
        "option_b": "Phổi",
        "option_c": "Ruột",
        "option_d": "Thận",
        "answer": "D"
    },
    {
        "id": 106,
        "question": "Trị số creatinin huyết thường được sử dụng để đánh giá:",
        "option_a": "Chức năng lọc cầu thận",
        "option_b": "Khả năng chuyển hóa của gan",
        "option_c": "Khả năng thải trừ qua da",
        "option_d": "Khả năng thải trừ qua ruột",
        "answer": "A"
    },
    {
        "id": 107,
        "question": "Dưới tác dụng xúc tác của enzym nào, phosphocreatin lại được chuyển thành creatin?",
        "option_a": "Phosphokinase",
        "option_b": "Creatinkinase",
        "option_c": "Glutamate oxaloacetat transaminase",
        "option_d": "Glutamate pyruvat transaminase",
        "answer": "B"
    },
    {
        "id": 108,
        "question": "Nồng độ creatinin huyết tương tăng khi nào?",
        "option_a": "Vận động tăng",
        "option_b": "Tăng chế độ ăn",
        "option_c": "Chức năng lọc của cầu thận giảm",
        "option_d": "Chức năng lọc của cầu thận tăng",
        "answer": "C"
    },
    {
        "id": 109,
        "question": "Người có hệ số thanh thải creatinin là bao nhiêu thì được gọi là suy thận nặng?",
        "option_a": "<15ml/phút",
        "option_b": "15-50ml/phút",
        "option_c": "50-80ml/phút",
        "option_d": ">80ml/phút",
        "answer": "A"
    },
    {
        "id": 110,
        "question": "Ure là sản phẩm thoái hóa của:",
        "option_a": "Glucogen",
        "option_b": "Protein",
        "option_c": "Creatin",
        "option_d": "Porphyrin",
        "answer": "B"
    },
    {
        "id": 111,
        "question": "Chất nào sau đây làm giảm glucose huyết?",
        "option_a": "Adrenalin",
        "option_b": "Glucagon",
        "option_c": "Insulin",
        "option_d": "Glucocorticoid",
        "answer": "C"
    },
    {
        "id": 112,
        "question": "Nguyên nhân làm tăng ure huyết trước thận?",
        "option_a": "Mất nước",
        "option_b": "Tắt đường tiết niệu",
        "option_c": "Viêm cầu thận cấp",
        "option_d": "Viêm ống thận cấp do nhiễm độc",
        "answer": "A"
    },
    {
        "id": 113,
        "question": "Nguyên nhân làm tăng ure huyết sau thận?",
        "option_a": "Mất nước",
        "option_b": "Tắt đường tiết niệu",
        "option_c": "Viêm cầu thận cấp",
        "option_d": "Viêm ống thận cấp do nhiễm độc",
        "answer": "B"
    },
    {
        "id": 114,
        "question": "Nguyên nhân làm tăng ure huyết tại thận?",
        "option_a": "Mất nước",
        "option_b": "Tắt đường tiết niệu",
        "option_c": "Viêm cầu thận cấp",
        "option_d": "Giảm lưu lượng máu",
        "answer": "C"
    },
    {
        "id": 115,
        "question": "Nồng độ glucose huyết lúc đói bao nhiêu được gọi là bệnh lý?",
        "option_a": ">70mg/dl",
        "option_b": ">110mg/dl",
        "option_c": ">45mg/dl",
        "option_d": ">126mg/dl",
        "answer": "D"
    },
    {
        "id": 116,
        "question": "Hạ đường huyết gặp trong trường hợp nào?",
        "option_a": "U tụy tạng",
        "option_b": "Tăng năng tuyến yên",
        "option_c": "Tăng năng tuyến giáp",
        "option_d": "Tăng năng võ thượng thận",
        "answer": "A"
    },
    {
        "id": 117,
        "question": "Tăng đường huyết gặp trong trường hợp nào?",
        "option_a": "U tụy tạng",
        "option_b": "Thiểu năng tuyến yên",
        "option_c": "Thiểu năng tuyến giáp",
        "option_d": "Tăng năng võ thượng thận",
        "answer": "D"
    },
    {
        "id": 118,
        "question": "Nguyên nhân gây bệnh Gout là do tích đọng....trong sụn, khớp",
        "option_a": "Acid uric",
        "option_b": "Ure",
        "option_c": "Creatinin",
        "option_d": "Bilirubin",
        "answer": "A"
    },
    {
        "id": 119,
        "question": "Nồng độ bão hòa của acid uric trong huyết thanh là bao nhiêu?",
        "option_a": "2mg/dl",
        "option_b": "4mg/dl",
        "option_c": "6mg/dl",
        "option_d": "7mg/dl",
        "answer": "D"
    },
    {
        "id": 120,
        "question": "Acid uric trong máu tăng do ăn chế độ giàu:",
        "option_a": "Glucid",
        "option_b": "Protid",
        "option_c": "Lipid",
        "option_d": "Khoáng",
        "answer": "B"
    },
    {
        "id": 121,
        "question": "Acid uric máu giảm trong trường hợp nào?",
        "option_a": "Suy giảm chức năng thận",
        "option_b": "Dùng thuốc lợi niệu",
        "option_c": "Dùng thuốc điều trị ung thư",
        "option_d": "Tổn thương ống thận",
        "answer": "C"
    },
    {
        "id": 122,
        "question": "Tăng acid uric trong máu do các nguyên nhân sau, ngoại trừ:",
        "option_a": "Ăn chế độ quá nhiều đường",
        "option_b": "Tăng phá hủy nuleoprotein",
        "option_c": "Ăn chế độ giàu protid",
        "option_d": "Suy giảm chức năng thận",
        "answer": "A"
    },
    {
        "id": 123,
        "question": "Bình thường đặc tính phân bố loại creatinkinase ở mô cơ xương là:",
        "option_a": "Gần như 100% MM",
        "option_b": "Khoảng 90% BB và 10% MM",
        "option_c": "Khoảng 40% MB và 60% MM",
        "option_d": "Khoảng 50% MB và 50% MM",
        "answer": "A"
    },
    {
        "id": 124,
        "question": "Chẩn đoán sớm nhồi máu cơ tim, dựa vào creatinkinase tăng sau:",
        "option_a": "24 giờ",
        "option_b": "4 giờ",
        "option_c": "2 ngày",
        "option_d": "4 ngày",
        "answer": "B"
    },
    {
        "id": 125,
        "question": "Trong nhồi máu cơ tim, ASAT tăng sớm sau:",
        "option_a": "24 giờ",
        "option_b": "4 ngày",
        "option_c": "6-8 giờ",
        "option_d": "6 ngày",
        "answer": "C"
    },
    {
        "id": 126,
        "question": "Enzym đặc hiệu để chẩn đoán các bệnh có tổn thương nhu mô gan?",
        "option_a": "ASAT",
        "option_b": "CK",
        "option_c": "CPK",
        "option_d": "ALAT",
        "answer": "D"
    },
    {
        "id": 127,
        "question": "Bilirubin tự do còn gọi là:",
        "option_a": "Bilirubin gián tiếp",
        "option_b": "Bilirubin liên hợp",
        "option_c": "Bilirubin trực tiếp",
        "option_d": "Bilirubin diglucuronic",
        "answer": "A"
    },
    {
        "id": 128,
        "question": "Bình thường đặc tính phân bố loại creatinkinase ở mô não là:",
        "option_a": "Gần như 100% MM",
        "option_b": "Khoảng 90% BB và 10% MM",
        "option_c": "Khoảng 40% MB và 60% MM",
        "option_d": "Khoảng 50% MB và 50% MM",
        "answer": "B"
    },
    {
        "id": 129,
        "question": "Bình thường đặc tính phân bố loại creatinkinase ở mô cơ tim là:",
        "option_a": "Gần như 100% MM",
        "option_b": "Khoảng 90% BB và 10% MM",
        "option_c": "Khoảng 40% MB và 60% MM",
        "option_d": "Khoảng 50% MB và 50% MM",
        "answer": "C"
    },
    {
        "id": 130,
        "question": "Nồng độ bilirubin huyết thanh bao nhiêu thì xuất hiện vàng da?",
        "option_a": ">34 µmol/l",
        "option_b": "<26 µmol/l",
        "option_c": "<8,6 µmol/l",
        "option_d": "<34 µmol/l",
        "answer": "A"
    },
    {
        "id": 131,
        "question": "Tăng bilirubin huyết do phá hủy hồng cầu nhiều vượt quá khả năng liên hợp của gan là nguyên nhân?",
        "option_a": "Tại gan",
        "option_b": "Trước gan",
        "option_c": "Sau gan",
        "option_d": "Tại mô",
        "answer": "B"
    },
    {
        "id": 132,
        "question": "Nguyên nhân gây tăng bilirubin huyết do tổn thương tế bào gan?",
        "option_a": "Tại gan",
        "option_b": "Trước gan",
        "option_c": "Sau gan",
        "option_d": "Tại mô",
        "answer": "A"
    },
    {
        "id": 133,
        "question": "Nguyên nhân gây tăng bilirubin huyết do tắc ống dẫn mật trong gan?",
        "option_a": "Tại gan",
        "option_b": "Trước gan",
        "option_c": "Sau gan",
        "option_d": "Tại mô",
        "answer": "A"
    },
    {
        "id": 134,
        "question": "Nguyên nhân gây tăng bilirubin huyết do tắc ống dẫn mật ngoài gan?",
        "option_a": "Tại gan",
        "option_b": "Trước gan",
        "option_c": "Sau gan",
        "option_d": "Tại mô",
        "answer": "C"
    },
    {
        "id": 135,
        "question": "Hồng cầu tăng trong  trường hợp nào?",
        "option_a": "Thiếu oxy ở mô",
        "option_b": "Suy tủy",
        "option_c": "Mất máu",
        "option_d": "Rối loạn tổng hợp Porphyrin",
        "answer": "A"
    },
    {
        "id": 136,
        "question": "Được coi là thiếu máu khi nồng độ huyết sắc tố là bao nhiêu?",
        "option_a": ">13g/l ở nam và 12g/l ở nữ",
        "option_b": "<13g/l ở nam và 12g/l ở nữ",
        "option_c": "<12g/l ở nam và 13g/l ở nữ",
        "option_d": ">12g/l ở nam và 13g/l ở nữ",
        "answer": "B"
    },
    {
        "id": 137,
        "question": "Hematocrit giảm khi nào?",
        "option_a": "Tiêu chảy",
        "option_b": "Nôn mửa",
        "option_c": "Chảy máu",
        "option_d": "Sốt kéo dài",
        "answer": "C"
    },
    {
        "id": 138,
        "question": "Bạch cầu giảm trong trường hợp nào?",
        "option_a": "Thương tổn tế bào",
        "option_b": "Ung thư dòng bạch cầu",
        "option_c": "Nhiễm khuẩn gây mủ",
        "option_d": "Sốt rét",
        "answer": "D"
    },
    {
        "id": 139,
        "question": "Bạch cầu tăng trong trường hợp nào?",
        "option_a": "Bệnh nhiễm độc",
        "option_b": "Thương hàn",
        "option_c": "Bệnh do virus",
        "option_d": "Suy tủy xương",
        "answer": "A"
    },
    {
        "id": 140,
        "question": "Thuốc nào có khả năng ức chế sự kết dính tiểu cầu?",
        "option_a": "Paracetamol",
        "option_b": "Aspirin",
        "option_c": "Ibuprofen",
        "option_d": "Meloxicam",
        "answer": "B"
    },
    {
        "id": 141,
        "question": "Hồng cầu giảm trong trường hợp nào?",
        "option_a": "Mất máu",
        "option_b": "Sống vùng cao",
        "option_c": "Suy tim",
        "option_d": "Bệnh đường hô hấp",
        "answer": "A"
    },
    {
        "id": 142,
        "question": "Khi bệnh nhân suy thận, kết quả xét nghiệm sinh hóa máu nào thường thấy?",
        "option_a": "Creatinin và ure không thay đổi",
        "option_b": "Creatinin không thay đổi, ure tăng",
        "option_c": "Creatinin tăng, ure không đổi",
        "option_d": "Creatinin tăng, ure tăng",
        "answer": "D"
    },
    {
        "id": 143,
        "question": "Hạ glucose huyết quá mức thường do quá liều thuốc nào?",
        "option_a": "Insulin",
        "option_b": "Probenecid",
        "option_c": "Paracetamol",
        "option_d": "Ibuprofen",
        "answer": "A"
    },
    {
        "id": 144,
        "question": "Bạch cầu nào sau đây không phải là bạch cầu hạt?",
        "option_a": "Bạch cầu đa nhân trung tính",
        "option_b": "Bạch cầu đa nhân ưa base",
        "option_c": "Bạch cầu đa nhân ưa acid",
        "option_d": "Bạch cầu lympho",
        "answer": "D"
    },
    {
        "id": 145,
        "question": "Bạch cầu nào sau đây chứa nhiều enzym thủy phân?",
        "option_a": "Bạch cầu đa nhân trung tính",
        "option_b": "Bạch cầu đa nhân ưa base",
        "option_c": "Bạch cầu đa nhân ưa acid",
        "option_d": "Bạch cầu mono",
        "answer": "A"
    },
    {
        "id": 146,
        "question": "Trong các bệnh nhiễm khuẩn cấp tính, bạch cầu nào tăng cao nhất?",
        "option_a": "Bạch cầu đa nhân trung tính",
        "option_b": "Bạch cầu đa nhân ưa base",
        "option_c": "Bạch cầu đa nhân ưa acid",
        "option_d": "Bạch cầu mono",
        "answer": "A"
    },
    {
        "id": 147,
        "question": "Bạch cầu nào đi vào mô trở thành đại thực bào?",
        "option_a": "Bạch cầu đa nhân trung tính",
        "option_b": "Bạch cầu đa nhân ưa base",
        "option_c": "Bạch cầu đa nhân ưa acid",
        "option_d": "Bạch cầu mono",
        "answer": "D"
    },
    {
        "id": 148,
        "question": "Bạch cầu nào có khả năng miễn dịch?",
        "option_a": "Bạch cầu đa nhân trung tính",
        "option_b": "Bạch cầu đa nhân ưa base",
        "option_c": "Bạch cầu lympho",
        "option_d": "Bạch cầu mono",
        "answer": "C"
    },
    {
        "id": 149,
        "question": "Tin lực bao gồm các yếu tố sau, ngoại trừ:",
        "option_a": "Tài chính",
        "option_b": "Thông tin",
        "option_c": "Giáo dục",
        "option_d": "Truyền thông",
        "answer": "A"
    },
    {
        "id": 150,
        "question": "Ta gọi tài liệu cấp I, tài liệu cấp 2, các tác phẩm kinh điển, các chuyên luận, chuyên khảo là cách phân loại thông tin theo:",
        "option_a": "Lĩnh vực thông tin",
        "option_b": "Nguồn tài liệu chứa đựng thông tin",
        "option_c": "Tính chất của thông tin",
        "option_d": "Mục tiêu dữ liệu",
        "answer": "B"
    },
    {
        "id": 151,
        "question": "Ta gọi thông tin về sức khỏe, thuốc, dân số, kinh tế, thương mại, …là cách phân loại thông tin theo:",
        "option_a": "Nguồn tài liệu chứa đựng thông tin",
        "option_b": "Tính chất của thông tin",
        "option_c": "Lĩnh vực thông tin",
        "option_d": "Mục tiêu dữ liệu",
        "answer": "C"
    },
    {
        "id": 152,
        "question": "Ta gọi thông tin cơ bản, cấu trúc, quá trình, kết quả là cách phân loại theo:",
        "option_a": "Lĩnh vực thông tin",
        "option_b": "Nguồn tài liệu chứa đựng thông tin",
        "option_c": "Mục tiêu dữ liệu",
        "option_d": "Tính chất của thông tin",
        "answer": "D"
    },
    {
        "id": 153,
        "question": "Thông tin về cách sử dụng thuốc trên truyền hình, báo, đài phát thanh là loại thông tin nào?",
        "option_a": "Thông tin nâng cao dân trí",
        "option_b": "Thông tin cho thầy thuốc kê đơn",
        "option_c": "Thông tin cho dược sĩ và nhân viên bán thuốc",
        "option_d": "Các thông tin cơ bản về một thuốc",
        "answer": "A"
    },
    {
        "id": 154,
        "question": "Người sử dụng dịch vụ chăm sóc sức khỏe:",
        "option_a": "Thầy thuốc kê đơn",
        "option_b": "Bệnh nhân",
        "option_c": "Y tá điều dưỡng",
        "option_d": "Dược sĩ bệnh viện",
        "answer": "B"
    },
    {
        "id": 155,
        "question": "Người cung ứng các dịch vụ chăm sóc và bảo vệ sức khoẻ:",
        "option_a": "Thầy thuốc kê đơn",
        "option_b": "Bệnh nhân",
        "option_c": "Người nhà bệnh nhân",
        "option_d": "Người nuôi bệnh",
        "answer": "A"
    },
    {
        "id": 156,
        "question": "Trung tâm thông tin thuốc quốc gia, địa phương, các cơ sở điều trị , cơ sở đào tạo, cơ sở nghiên cứu khoa học y tế là:",
        "option_a": "Phương tiện thông tin thuốc",
        "option_b": "Đối tượng của thông tin thuốc",
        "option_c": "Tổ chức thông tin thuốc",
        "option_d": "Nội dung thông tin thuốc",
        "answer": "C"
    },
    {
        "id": 157,
        "question": "Thông tin về thuốc phải thỏa mãn các điều kiện sau, ngoại trừ:",
        "option_a": "Không được khẳng định điều không thể kiểm tra",
        "option_b": "Không gây hiểu lầm dẫn đến sử dụng không đúng",
        "option_c": "Các dữ liệu khoa học về thuốc sẵn sàng cung cấp cho cán bộ y tế khi có yêu cầu",
        "option_d": "Sử dụng các hoạt động khoa học và giáo dục vào mục đích quảng cáo thuốc",
        "answer": "D"
    },
    {
        "id": 158,
        "question": "Sách, báo, tài liệu là:",
        "option_a": "Phương tiện thông tin thuốc",
        "option_b": "Đối tượng của thông tin thuốc",
        "option_c": "Tổ chức thông tin thuốc",
        "option_d": "Nội dung thông tin thuốc",
        "answer": "A"
    },
    {
        "id": 159,
        "question": "Thầy thuốc, người bệnh, người dân là:",
        "option_a": "Phương tiện thông tin thuốc",
        "option_b": "Đối tượng của thông tin thuốc",
        "option_c": "Tổ chức thông tin thuốc",
        "option_d": "Nội dung thông tin thuốc",
        "answer": "B"
    },
    {
        "id": 160,
        "question": "Cách dùng thuốc hợp lý, an toàn là:",
        "option_a": "Phương tiện thông tin thuốc",
        "option_b": "Đối tượng của thông tin thuốc",
        "option_c": "Tổ chức thông tin thuốc",
        "option_d": "Nội dung thông tin thuốc",
        "answer": "D"
    },
    {
        "id": 161,
        "question": "Tác phong, cách giao tiếp và ứng xử của thầy thuốc với bệnh nhân:",
        "option_a": "Lời nói ân cần, nhẹ nhàng, quan tâm",
        "option_b": "Sử dụng đúng thuật ngữ khoa học",
        "option_c": "Ăn mặc phải đẹp, quí phái",
        "option_d": "Dùng ngôn từ bệnh học đúng với từ chuyên môn",
        "answer": "A"
    },
    {
        "id": 162,
        "question": "Thông tin đối với quần chúng phải?",
        "option_a": "Dùng đúng thuật ngữ khoa học",
        "option_b": "Chứa kiến thức chung đơn giản dễ hiểu, lời nói ví dụ phải dân dã",
        "option_c": "Dùng ngôn từ bệnh học đúng với từ chuyên môn",
        "option_d": "Chứa kiến thức rộng rãi, đầy đủ",
        "answer": "B"
    },
    {
        "id": 163,
        "question": "Yêu cầu thông tin giới thiệu thuốc cho công chúng?",
        "option_a": "Giới thiệu thuốc phải mua theo đơn",
        "option_b": "Xoáy vào mối lo lắng về sức khỏe của người dân",
        "option_c": "Không nên nói hạn chế của thuốc",
        "option_d": "Không được quảng cáo thuốc tới trẻ em",
        "answer": "D"
    },
    {
        "id": 164,
        "question": "Học sinh đến thực hành lâm sàng không nên làm gì?",
        "option_a": "Tự tin, mạnh dạn chủ động, khắc phục tư tưởng tự ti, e ngại",
        "option_b": "Khiêm tốn, hòa mình vào tập thể lâm sàng, với bệnh nhân",
        "option_c": "Phê phán nhân viên y tế trong bệnh viện khi họ sai sót",
        "option_d": "Có phương pháp giao tiếp tốt",
        "answer": "C"
    },
    {
        "id": 165,
        "question": "Động kinh là một bệnh lý của:",
        "option_a": "Não",
        "option_b": "Cơ",
        "option_c": "Xương",
        "option_d": "Máu",
        "answer": "A"
    },
    {
        "id": 166,
        "question": "Yếu tố nào sau đây không phải là nguyên nhân gây ra động kinh ở trẻ sơ sinh?",
        "option_a": "Ngạt lúc sinh",
        "option_b": "Chấn thương sản khoa",
        "option_c": "Suy dinh dưỡng bào thai",
        "option_d": "Hạ đường huyết",
        "answer": "C"
    },
    {
        "id": 167,
        "question": "Nguyên nhân nào sau đây gây động kinh liên quan đến di truyền ở trẻ sơ sinh?",
        "option_a": "Vàng da nhân",
        "option_b": "Thiếu hụt pyridoxin",
        "option_c": "Nhiễm khuẩn hệ thần kinh trung ương",
        "option_d": "Tam bội thể 13 hoặc 15",
        "answer": "D"
    },
    {
        "id": 168,
        "question": "Ở người lớn, nguyên nhân nào gây động kinh bẩm sinh ?",
        "option_a": "Chấn thương",
        "option_b": "Dị dạng mạch máu",
        "option_c": "Tăng huyết áp",
        "option_d": "Nhiễm độc rượu",
        "answer": "B"
    },
    {
        "id": 169,
        "question": "Thuốc nào sử dụng cho đường hô hấp có thể gây co giật ở bệnh nhân động kinh?",
        "option_a": "Salbutamol",
        "option_b": "Theophylin",
        "option_c": "Dextromethorphan",
        "option_d": "Acetylcysteine",
        "answer": "B"
    },
    {
        "id": 170,
        "question": "Nguyên tắc nào sau đây cần tuân thủ khi điều trị bệnh động kinh?",
        "option_a": "Thuốc điều trị sử dụng theo từng đợt ngắn hạn",
        "option_b": "Để tăng hiệu quả điều trị nên kết hợp hai thuốc cùng loại với nhau",
        "option_c": "Không cần xét nghiệm máu định kỳ",
        "option_d": "Không bao giờ kết hợp hai thuốc cùng loại với nhau.",
        "answer": "D"
    },
    {
        "id": 171,
        "question": "Điều trị ngoại khoa đối với bệnh động kinh được đặt ra khi nào?",
        "option_a": "Nguyên nhân động kinh do u màng não",
        "option_b": "Bệnh thoái hóa não",
        "option_c": "Dị dạng bẩm sinh do gien",
        "option_d": "Bại não",
        "answer": "A"
    },
    {
        "id": 172,
        "question": "Trong điều trị động kinh liên tục thuốc nào được ưu tiên lựa chọn?",
        "option_a": "Carmamazepin",
        "option_b": "Valproat",
        "option_c": "Ethosuximid",
        "option_d": "Diazepam",
        "answer": "D"
    },
    {
        "id": 173,
        "question": "Thuốc động kinh nào sau đây không gây ngủ ở liều điều trị?",
        "option_a": "Carbamazepin",
        "option_b": "Phenobarbital",
        "option_c": "Valproat",
        "option_d": "Benzopiazepin",
        "answer": "C"
    },
    {
        "id": 174,
        "question": "Những thuốc nào sau đây không sử dụng cho động kinh cơn vắng?",
        "option_a": "Carbamazepin",
        "option_b": "Valproat",
        "option_c": "Ethosuximid",
        "option_d": "Clonazepam",
        "answer": "A"
    },
    {
        "id": 175,
        "question": "Khi dùng Phenytoin lâu dài để điều trị động kinh nên bổ sung thêm....cho bệnh nhân",
        "option_a": "Vitamin B6",
        "option_b": "Vitamin C",
        "option_c": "Sắt",
        "option_d": "Kẽm",
        "answer": "A"
    },
    {
        "id": 176,
        "question": "Để phòng còi xương cho trẻ em khi điều trị động kinh bằng phenobarbital, phải bổ sung vitamin D2 với liều....đơn vị quốc tế/ngày",
        "option_a": "200-500",
        "option_b": "500-1.000",
        "option_c": "1.000-1.200",
        "option_d": "1.200-2.000",
        "answer": "D"
    },
    {
        "id": 177,
        "question": "Ở thiếu niên có thể phát sinh mụn trứng cá khi sử dụng thuốc kháng động kinh nào sau đây?",
        "option_a": "Diazepam",
        "option_b": "Clonazepam",
        "option_c": "Phenobarbital",
        "option_d": "Nitrazepam",
        "answer": "C"
    },
    {
        "id": 178,
        "question": "Đái tháo đường là tình trạng rối loạn chuyển hóa?",
        "option_a": "Glucid",
        "option_b": "Lipid",
        "option_c": "Protid",
        "option_d": "Khoáng",
        "answer": "A"
    },
    {
        "id": 179,
        "question": "Yếu tố nào sau đây không là yếu tố nguy cơ của đái tháo đường?",
        "option_a": "Béo phì",
        "option_b": "Gầy",
        "option_c": "Rối loạn mỡ máu",
        "option_d": "Tiền sử đẻ con trên 4 kg",
        "answer": "B"
    },
    {
        "id": 180,
        "question": "Triệu chứng lâm sàng không thường gặp của bệnh đái tháo đường?",
        "option_a": "Ăn nhiều",
        "option_b": "Uống nhiều",
        "option_c": "Tiểu nhiều",
        "option_d": "Tăng cân",
        "answer": "D"
    },
    {
        "id": 181,
        "question": "Bệnh nhân được gọi là mắc bệnh đái tháo đường khi xét nghiệm đường huyết lúc đói là:",
        "option_a": "≥ 126mg/dl",
        "option_b": "< 126mg/dl",
        "option_c": "> 80mg/dl",
        "option_d": ">120mg/dl",
        "answer": "A"
    },
    {
        "id": 182,
        "question": "Bệnh nhân được chẩn đoán là ĐTĐ typ 1 khi nào?",
        "option_a": "Kháng isulin phối hợp với giảm bài tiết insulin tương đối",
        "option_b": "Tăng sản xuất glucose nội sinh từ gan do hiện tượng kháng insulin ở tế bào gan",
        "option_c": "Tế bào bêta bị phá hủy dẫn đến thiếu insulin hoàn toàn",
        "option_d": "Giảm sử dụng glucose ở tổ chức ngoại vi",
        "answer": "C"
    },
    {
        "id": 183,
        "question": "Biến chứng mạn tính của đái tháo đường:",
        "option_a": "Hôn mê nhiễm toan ceton",
        "option_b": "Hạ đường huyết",
        "option_c": "Nhiễm trùng",
        "option_d": "Đục thủy tinh thể",
        "answer": "D"
    },
    {
        "id": 184,
        "question": "Trị số huyết áp được xác định bằng đo HA ở tư thế nằm hoặc ngồi, trước đó bệnh nhân được nghỉ ít nhất bao nhiêu lâu?",
        "option_a": "3 phút",
        "option_b": "5 phút",
        "option_c": "2 phút",
        "option_d": "10 phút",
        "answer": "B"
    },
    {
        "id": 185,
        "question": "Trị số huyết áp nào sau đây của bệnh nhân được xếp vào giai đoạn tiền tăng huyết áp theo JNC VII -2003?",
        "option_a": "180/110",
        "option_b": "160/100",
        "option_c": "140/90",
        "option_d": "130/85",
        "answer": "D"
    },
    {
        "id": 186,
        "question": "Trị số huyết áp nào sau đây của bệnh nhân được xếp vào giai đoạn tăng huyết áp độ 2 theo JNC VII -2003?",
        "option_a": "180/110",
        "option_b": "150/90",
        "option_c": "140/90",
        "option_d": "130/85",
        "answer": "A"
    },
    {
        "id": 187,
        "question": "Nguyên tắc điều trị tăng huyết áp nào sau đây là không đúng?",
        "option_a": "Điều trị sớm và lâu dài",
        "option_b": "Điều trị tích cực và kết thúc sớm",
        "option_c": "Kết hợp điều trị thuốc với chế độ sinh hoạt hợp lý",
        "option_d": "Điều trị các yếu tố nguy cơ và bệnh mắc kèm",
        "answer": "B"
    },
    {
        "id": 188,
        "question": "Thuốc trị tăng huyết áp nào sau đây không dùng được cho người suy thận?",
        "option_a": "Diltiazem",
        "option_b": "Hypothiazid",
        "option_c": "Verapamil",
        "option_d": "Nifedipin",
        "answer": "B"
    },
    {
        "id": 189,
        "question": "Thuốc lợi tiểu nào sau đây làm giảm kali máu?",
        "option_a": "Spironolacton",
        "option_b": "Triamteren",
        "option_c": "Furosemid",
        "option_d": "Aldacton",
        "answer": "C"
    },
    {
        "id": 190,
        "question": "Thuốc lợi tiểu nào sau đây giữ kali máu?",
        "option_a": "Hypothiazid",
        "option_b": "Indapamid",
        "option_c": "Furosemid",
        "option_d": "Spironolacton",
        "answer": "D"
    },
    {
        "id": 191,
        "question": "Thuốc lợi tiểu nào sau đây có tác dụng lợi tiểu yếu và chậm?",
        "option_a": "Hydrochlorothiazid",
        "option_b": "Indapamid",
        "option_c": "Triamteren",
        "option_d": "Furosemid",
        "answer": "C"
    },
    {
        "id": 192,
        "question": "Thuốc điều trị tăng huyết áp nào sau đây gây liệt giao cảm?",
        "option_a": "Spironolacton",
        "option_b": "Methyldopa",
        "option_c": "Captopril",
        "option_d": "Nifedipin",
        "answer": "B"
    },
    {
        "id": 193,
        "question": "Các thuốc điều trị tăng huyết áp nào sau đây là thuốc chẹn beta giao cảm?",
        "option_a": "Clonidin",
        "option_b": "Methyldopa",
        "option_c": "Guanethidin",
        "option_d": "Atenolol",
        "answer": "D"
    },
    {
        "id": 194,
        "question": "Thuốc trị tăng huyết áp nào sau đây không được sử dụng cho bệnh nhân thiên đầu thống (Glaucome), u tuyến tiền liệt  ?",
        "option_a": "Guanethidin",
        "option_b": "Captopril",
        "option_c": "Hypothiazid",
        "option_d": "Furosemid",
        "answer": "A"
    },
    {
        "id": 195,
        "question": "Thuốc trị tăng huyết áp nào sau đây không sử dụng được cho bênh nhân tiểu đường?",
        "option_a": "Thuốc ức chế men chuyển",
        "option_b": "Thuốc chẹn beta giao cảm",
        "option_c": "Thuốc chẹn dòng calci",
        "option_d": "Thuốc chẹn thụ thể AT1",
        "answer": "B"
    },
    {
        "id": 196,
        "question": "Thuốc nào không dùng được cho bệnh nhân hen phế quản?",
        "option_a": "Thuốc lợi tiểu",
        "option_b": "Chẹn bêta – giao cảm",
        "option_c": "Ức chế men chuyển",
        "option_d": "Chẹn dòng calci",
        "answer": "B"
    },
    {
        "id": 197,
        "question": "Thuốc nào sau đây chống chỉ định cho bệnh nhân tiểu đường?",
        "option_a": "Captopril",
        "option_b": "Enalapril",
        "option_c": "Propranolol",
        "option_d": "Peridopril",
        "answer": "C"
    },
    {
        "id": 198,
        "question": "Thuốc ức chế men chuyển Angiotensin không chống chỉ định cho bệnh nhân nào?",
        "option_a": "Tăng kali huyết",
        "option_b": "Hẹp động mạch thận 2 bên",
        "option_c": "Có thai",
        "option_d": "Suy tim",
        "answer": "D"
    },
    {
        "id": 199,
        "question": "Thuốc trị tăng huyết áp nào có thể gây ho cho bệnh nhân khi sử dụng?",
        "option_a": "Captopril",
        "option_b": "Losartan",
        "option_c": "Valsartan",
        "option_d": "Irbesartan",
        "answer": "A"
    },
    {
        "id": 200,
        "question": "Thuốc trị tăng huyết áp nào sử dụng tốt cho bệnh nhân đạm niệu?",
        "option_a": "Enalapril",
        "option_b": "Hypothiazid",
        "option_c": "Furosemid",
        "option_d": "Spironolacton",
        "answer": "A"
    },
    {
        "id": 201,
        "question": "Thuốc trị tăng huyết áp nào sử dụng được cho người suy thận do hẹp động mạch thận 2 bên?",
        "option_a": "Captopril",
        "option_b": "Enalapril",
        "option_c": "Amlodipin",
        "option_d": "Peridopril",
        "answer": "C"
    },
    {
        "id": 202,
        "question": "Đặc điểm tăng huyết áp nào của bệnh nhân dưới 12 tuổi?",
        "option_a": "Thường gặp",
        "option_b": "Bệnh thận",
        "option_c": "Chuyển hóa chậm, đào thải chậm",
        "option_d": "Xơ cứng động mạch lớn",
        "answer": "B"
    },
    {
        "id": 203,
        "question": "Thuốc trị tăng huyết áp nào không dùng cho người già khi có nguy cơ tiểu đường, suy tim, viêm phế quản tắc nghẽn?",
        "option_a": "Lợi tiểu",
        "option_b": "Chẹn calci",
        "option_c": "Ức chế men chuyển",
        "option_d": "Chẹn bêta",
        "answer": "D"
    },
    {
        "id": 204,
        "question": "Thuốc trị tăng huyết áp nào sử dụng không gây nguy hại đến thai nhi?",
        "option_a": "Captopril",
        "option_b": "Enalapril",
        "option_c": "Alphamethyldopa",
        "option_d": "Peridopril",
        "answer": "C"
    },
    {
        "id": 205,
        "question": "Thuốc nào có thể gây dị dạng thai nhi khi sử dụng cho mẹ?",
        "option_a": "Lợi tiểu",
        "option_b": "Ức chế men chuyển dạng angiotensin",
        "option_c": "Chống đông vón tiểu cầu",
        "option_d": "Chẹn calci",
        "answer": "B"
    },
    {
        "id": 206,
        "question": "Thuốc ức chế men chuyển dạng angiotesin không được sử dụng cho bệnh nhân tiểu đường khi nào?",
        "option_a": "Giảm kali máu",
        "option_b": "Tăng kali máu",
        "option_c": "Tăng renin",
        "option_d": "Tăng aldosreron",
        "answer": "B"
    },
    {
        "id": 207,
        "question": "Thuốc trị tăng huyết áp nào thích hợp nhất cho người tiểu đường không có tăng kali máu, hẹp động mạch thận 2 bên, giảm renin, giảm aldosteron?",
        "option_a": "Chẹn calci",
        "option_b": "Chẹn alpha giao cảm",
        "option_c": "Lợi tiểu",
        "option_d": "Ức chế men chuyển dạng angiotensin",
        "answer": "D"
    },
    {
        "id": 208,
        "question": "Phosphalugel là thuốc:",
        "option_a": "Kháng acid",
        "option_b": "Kháng Histamin ở thụ thể H2",
        "option_c": "Chống sự tiết dịch vị",
        "option_d": "Ức chế “bơm proton”",
        "answer": "A"
    },
    {
        "id": 209,
        "question": "Famotidin là thuốc:",
        "option_a": "Kháng acid",
        "option_b": "Kháng Histamin ở thụ thể H2",
        "option_c": "Chống sự tiết dịch vị",
        "option_d": "Ức chế “bơm proton”",
        "answer": "B"
    },
    {
        "id": 210,
        "question": "Omeprazol là thuốc:",
        "option_a": "Chống sự tiết dịch vị",
        "option_b": "Kháng Histamin ở thụ thể H2",
        "option_c": "Ức chế “bơm proton”",
        "option_d": "Kháng acid",
        "answer": "C"
    },
    {
        "id": 211,
        "question": "Bệnh lý dạ dày được chỉ định phối hợp kháng sinh khi bệnh nhân có:",
        "option_a": "Đau bụng vùng thượng vị",
        "option_b": "Đầy bụng, chướng hơi",
        "option_c": "Viêm dạ dày có nội soi",
        "option_d": "Xét nghiệm Helicobacter pylori dương tính",
        "answer": "D"
    },
    {
        "id": 212,
        "question": "Thuốc trị viêm dạ dày nào sau đây có tác động lên hệ thần kinh trung ương?",
        "option_a": "Sulpirid",
        "option_b": "Gastropulgite",
        "option_c": "Misoprostol",
        "option_d": "Repamipid",
        "answer": "A"
    },
    {
        "id": 213,
        "question": "Thuốc trị viêm dạ dày nào sau đây có tác động trung hòa acid dịch vị?",
        "option_a": "Diazepam",
        "option_b": "Maalox",
        "option_c": "Cytotec",
        "option_d": "Mucosta",
        "answer": "B"
    },
    {
        "id": 214,
        "question": "Thuốc trị viêm dạ dày nào sau đây có tác động băng bó ổ loét?",
        "option_a": "Atropin",
        "option_b": "Phosphalugel",
        "option_c": "Sucrafat",
        "option_d": "Cimetidin",
        "answer": "C"
    },
    {
        "id": 215,
        "question": "Thuốc trị viêm dạ dày nào sau đây có tác động ức chế thụ thể H2?",
        "option_a": "Actapulgic",
        "option_b": "Ranitidin",
        "option_c": "Omeprazol",
        "option_d": "Phosphalugel",
        "answer": "B"
    },
    {
        "id": 216,
        "question": "Thuốc trị viêm dạ dày nào sau đây có tác động ức chế bơm proton H+.K+ ATPase?",
        "option_a": "Zanitidin",
        "option_b": "Pantoprazol",
        "option_c": "Cytotec",
        "option_d": "Diazepam",
        "answer": "B"
    },
    {
        "id": 217,
        "question": "Kháng sinh điều trị viêm loét dạ dày nào sau đây thuộc nhóm 5-nitro imidazol?",
        "option_a": "Amoxicilin",
        "option_b": "Clarytromycin",
        "option_c": "Tetracyclin",
        "option_d": "Metronidazol",
        "answer": "D"
    },
    {
        "id": 218,
        "question": "Để tránh tương tác xảy ra khi uống thuốc nhóm trung hòa dịch vị và băng bó ổ loét ở dạ dày phối hợp với các thuốc khác thì thuốc phối hợp phải uống cách nhóm này ít nhất bao lâu?",
        "option_a": "2 giờ",
        "option_b": "1 giờ",
        "option_c": "30 phút",
        "option_d": "15 phút",
        "answer": "A"
    },
    {
        "id": 219,
        "question": "Bệnh giun sán không liên quan đến yếu tố nào sau đây?",
        "option_a": "Trình độ dân trí",
        "option_b": "Tập quán canh tác",
        "option_c": "Tăng trưởng kinh tế",
        "option_d": "Thể trạng cơ thể",
        "answer": "C"
    },
    {
        "id": 220,
        "question": "Tỉ lệ mắc bệnh giun sán của dân châu Á trung bình là bao nhiêu %?",
        "option_a": "70",
        "option_b": "50",
        "option_c": "32,3",
        "option_d": "8",
        "answer": "C"
    },
    {
        "id": 221,
        "question": "Tên khoa học của giun đũa?",
        "option_a": "Trichuris trichiura",
        "option_b": "Ascaris lumbricoides",
        "option_c": "Enterobius vermicularis",
        "option_d": "Acylostoma duodenale",
        "answer": "B"
    },
    {
        "id": 222,
        "question": "Ở Việt Nam, vùng miền nào có tỉ lệ bệnh giun đũa cao nhất?",
        "option_a": "Bắc",
        "option_b": "Trung",
        "option_c": "Đông Nam",
        "option_d": "Tây Nam",
        "answer": "A"
    },
    {
        "id": 223,
        "question": "Viêm tụy cấp là biến chứng có thể gây ra bởi giun nào?",
        "option_a": "Kim",
        "option_b": "Đũa",
        "option_c": "Móc",
        "option_d": "Tóc",
        "answer": "B"
    },
    {
        "id": 224,
        "question": "Phương pháp nào sau đây có thể dùng để chẩn đoán nhiễm giun đũa?",
        "option_a": "Nội soi mềm bằng sợi quang",
        "option_b": "X quang ổ bụng có chuẩn bị bằng uống Barit",
        "option_c": "“Giấy bóng kính” dán vào hậu môn rồi xem dưới kính hiển vi",
        "option_d": "Lấy máu ngoại vi về ban đêm để nhuộm xét nghiệm phát hiện ấu trùng",
        "answer": "B"
    },
    {
        "id": 225,
        "question": "Loại giun nào không truyền nhiễm trực tiếp từ người sang người?",
        "option_a": "Đũa",
        "option_b": "Tóc",
        "option_c": "Kim",
        "option_d": "Chỉ",
        "answer": "D"
    },
    {
        "id": 226,
        "question": "Triệu chứng lâm sàng gây ngứa gãi hậu môn vào buổi tối do giun nào gây ra?",
        "option_a": "Đũa",
        "option_b": "Tóc",
        "option_c": "Kim",
        "option_d": "Chỉ",
        "answer": "C"
    },
    {
        "id": 227,
        "question": "Bệnh giun nào có liên quan mất thiết đến vùng hầm mỏ?",
        "option_a": "Đũa",
        "option_b": "Tóc",
        "option_c": "Kim",
        "option_d": "Móc",
        "answer": "D"
    },
    {
        "id": 228,
        "question": "Bệnh giun móc kéo dài có thể dẫn đến triệu chứng nào sau đây?",
        "option_a": "Viêm tụy cấp",
        "option_b": "Suy tủy xương",
        "option_c": "Sa trực tràng",
        "option_d": "Phù chân voi",
        "answer": "B"
    },
    {
        "id": 229,
        "question": "Di chứng của viêm tắc mạch bạch huyết ở nhiều bộ phận do giun chỉ sẽ dẫn đến biểu hiện nào sau đây?",
        "option_a": "Áp xe gan",
        "option_b": "Tiêu chảy kéo dài",
        "option_c": "Phù voi",
        "option_d": "Thiếu máu",
        "answer": "C"
    },
    {
        "id": 230,
        "question": "Thuốc nào lựa chọn ưu tiên cho điều trị bệnh giun tóc?",
        "option_a": "Mebendazol",
        "option_b": "Albendazol",
        "option_c": "Pyrantel palmoat",
        "option_d": "Thiabendazol",
        "answer": "A"
    },
    {
        "id": 231,
        "question": "Phụ nữ bị nhiễm giun kim có thể bị biến chứng gì?",
        "option_a": "Viêm gan mật",
        "option_b": "Viêm nhiễm đường sinh dục",
        "option_c": "Suy tủy xương",
        "option_d": "Viêm tắc mạch bạch huyết",
        "answer": "B"
    },
    {
        "id": 232,
        "question": "Nguyên tắc điều trị loại giun nào phải kết hợp 2 thuốc là thuốc trị giun và thuốc trị thiếu máu?",
        "option_a": "Kim",
        "option_b": "Móc",
        "option_c": "Chỉ",
        "option_d": "Đũa",
        "answer": "B"
    },
    {
        "id": 233,
        "question": "Thuốc nào sau đây có tác dụng diệt giun chỉ trưởng thành?",
        "option_a": "Neostibosan",
        "option_b": "Notezin",
        "option_c": "DEC",
        "option_d": "Ivermectin",
        "answer": "C"
    },
    {
        "id": 234,
        "question": "Thuốc nào sau đây vừa có tác dụng trị bệnh giun vừa có tác dụng chữa bệnh nang sán ấu trùng với liều cao?",
        "option_a": "Piperazin",
        "option_b": "Mebendazol",
        "option_c": "Pyrantel",
        "option_d": "Ivermectin",
        "answer": "B"
    },
    {
        "id": 235,
        "question": "Tên khoa học của sán lá gan nhỏ?",
        "option_a": "Fascilopsis buski",
        "option_b": "Paragonimus ringeri",
        "option_c": "Clonorchis sinensis.",
        "option_d": "Toenia solium",
        "answer": "C"
    },
    {
        "id": 236,
        "question": "Bệnh ấu trùng sán lợn sẽ gây ra triệu chứng nào nếu nang sán có nhiều trong não?",
        "option_a": "Giảm thị lực tiến đến mù",
        "option_b": "Các cơn động kinh",
        "option_c": "Đau nhức cơ",
        "option_d": "Phù nề",
        "answer": "B"
    },
    {
        "id": 237,
        "question": "Bệnh sán ấu trùng gây ra bởi ký sinh trùng nào?",
        "option_a": "Sán lá gan nhỏ",
        "option_b": "Sán lá phổi",
        "option_c": "Sán lá ruột",
        "option_d": "Sán lợn",
        "answer": "D"
    },
    {
        "id": 238,
        "question": "Thuốc dùng để điều trị sán ký sinh ở các mô phải có đặc tính nào?",
        "option_a": "Không hấp thu",
        "option_b": "Hấp thu rất kém",
        "option_c": "Hấp thu kém",
        "option_d": "Hấp thu nhiều",
        "answer": "D"
    },
    {
        "id": 239,
        "question": "Trong điều trị sán dây, thuốc nào được ưu tiên chọn lựa cho phụ nữ đang mang thai và cho con bú?",
        "option_a": "Praziquantel",
        "option_b": "Niclosamid",
        "option_c": "Albendazol",
        "option_d": "Mebendazol",
        "answer": "B"
    },
    {
        "id": 240,
        "question": "Khi dùng thuốc điều trị bệnh về mắt, người ta không cần quan tâm đến gì?",
        "option_a": "Sự phân bố thuốc ở mô mắt",
        "option_b": "Sự ngấm thuốc vào mô mắt",
        "option_c": "Sự tương tác thuốc khi dùng đồng thời",
        "option_d": "Sự phổ biến của thuốc trên thị trường.",
        "answer": "D"
    },
    {
        "id": 241,
        "question": "Việc điều trị bệnh về mắt không đạt kết quả, có thể do:",
        "option_a": "Chọn thuốc thích hợp",
        "option_b": "Thuốc đủ nồng độ ở trong máu, mô và tế bào của mắt",
        "option_c": "Sử dụng thuốc quá dài ngày gây lờn thuốc",
        "option_d": "Thuốc sử dụng bằng đường uống",
        "answer": "C"
    },
    {
        "id": 242,
        "question": "Yếu tố nào không làm tăng hiệu quả điều trị bệnh trong nhãn khoa?",
        "option_a": "Giá thành của thuốc",
        "option_b": "Chẩn đoán đúng và kịp thời",
        "option_c": "Chọn thuốc thích hợp",
        "option_d": "Xác định đúng liều và chọn đường đưa thuốc thích hợp",
        "answer": "A"
    },
    {
        "id": 243,
        "question": "Thuốc nhỏ mắt khi nhỏ vào mắt cương tụ đỏ sẽ có tác dụng gì?",
        "option_a": "Tại chỗ",
        "option_b": "Toàn thân",
        "option_c": "Không tác dụng",
        "option_d": "Lan tỏa",
        "answer": "B"
    },
    {
        "id": 244,
        "question": "Dạng bào chế nào của thuốc tra mắt được hấp thu tốt nhất?",
        "option_a": "Dung dịch",
        "option_b": "Dịch treo",
        "option_c": "Thuốc mỡ",
        "option_d": "Thuốc dầu",
        "answer": "C"
    },
    {
        "id": 245,
        "question": "Trường hợp nào sau đây khi mắt bị tổn hại được chỉ định dùng kháng sinh?",
        "option_a": "Tăng nhãn áp",
        "option_b": "Viêm kết mạc dị ứng",
        "option_c": "Khô mắt",
        "option_d": "Viêm kèm nhiễm trùng",
        "answer": "D"
    },
    {
        "id": 246,
        "question": "Kháng sinh trong thuốc tra mắt phải đạt yêu cầu gì?",
        "option_a": "Không gây kích ứng",
        "option_b": "Phổ kháng khuẩn rộng",
        "option_c": "Phổ kháng khuẩn hẹp",
        "option_d": "Hoạt tính mạnh",
        "answer": "B"
    },
    {
        "id": 247,
        "question": "Điều trị kháng sinh với liều vừa đủ cho bệnh lý nhiễm trùng ở mắt mà không thấy biến chuyển tốt nên chuyển sang kháng sinh khác sau bao lâu?",
        "option_a": "12-24h",
        "option_b": "24-48h",
        "option_c": "48-72h",
        "option_d": "72-96h",
        "answer": "C"
    },
    {
        "id": 248,
        "question": "Các bệnh nhiễm nấm ở mắt xảy ra khi nào?",
        "option_a": "Sử dụng kháng sinh mạnh và corticoid bừa bãi",
        "option_b": "Tra thuốc vào mắt thường xuyên",
        "option_c": "Không dùng thuốc tra mắt khi bị viêm nhiễm ở mắt",
        "option_d": "Dùng kháng sinh uống có hoạt tính mạnh",
        "answer": "A"
    },
    {
        "id": 249,
        "question": "Khi mắt bị nhiễm nấm, người ta có thể dùng thuốc nhỏ mắt nào?",
        "option_a": "Thuốc mỡ Zovirax 3%",
        "option_b": "Thuốc nước Ciprofloxacin 0,3%",
        "option_c": "Thuốc nước Sulfacetamid 10%",
        "option_d": "Dung dịch Nizoral 1-5%",
        "answer": "D"
    },
    {
        "id": 250,
        "question": "Kháng sinh nào sau đây được chỉ định trong bệnh mắt hột?",
        "option_a": "Chloramphenicol",
        "option_b": "Aminoglycosid",
        "option_c": "Polymycin",
        "option_d": "Sulfamid",
        "answer": "D"
    },
    {
        "id": 251,
        "question": "Thuốc nào sau đây ít gây độc cho tế bào chủ hơn khi dùng kéo dài cho bệnh tổn thương  mắt do virus?",
        "option_a": "Idoxuridin",
        "option_b": "Vidarabin",
        "option_c": "Acyclovir",
        "option_d": "Trifluorothymidin",
        "answer": "C"
    },
    {
        "id": 252,
        "question": "Tác nhân nào sau đây gây viêm kết mạc thành dịch?",
        "option_a": "Herpes simplex",
        "option_b": "Adenovirus",
        "option_c": "Herpes zoster",
        "option_d": "Chlamydia trachomatis",
        "answer": "B"
    },
    {
        "id": 253,
        "question": "Tác nhân nào sau đây gây bệnh đau mắt hột?",
        "option_a": "Herpes simplex",
        "option_b": "Adenovirus",
        "option_c": "Herpes zoster",
        "option_d": "Chlamydia trachomatis",
        "answer": "D"
    },
    {
        "id": 254,
        "question": "Trường hợp nào sau đây được chỉ định dùng corticod cho bệnh lý ở mắt?",
        "option_a": "Đau mắt hột",
        "option_b": "Viêm loét giác mạc",
        "option_c": "Viêm kết mạc dị ứng",
        "option_d": "Tăng nhãn áp",
        "answer": "C"
    },
    {
        "id": 255,
        "question": "Thuốc nào sau đây được sử dụng trong mọi hình thái glaucom?",
        "option_a": "Acetazolamid",
        "option_b": "Atropin",
        "option_c": "Pilocarpin",
        "option_d": "Neostigmin",
        "answer": "A"
    },
    {
        "id": 256,
        "question": "Bệnh nào sau đây không liên quan đến bệnh viêm họng?",
        "option_a": "Viêm mũi",
        "option_b": "Viêm thanh quản",
        "option_c": "Viêm xoang",
        "option_d": "Viêm da",
        "answer": "D"
    },
    {
        "id": 257,
        "question": "Yếu tố môi trường nào sau đây không ảnh hưởng đến bệnh lý tai mũi họng?",
        "option_a": "Nhiệt độ",
        "option_b": "Độ ẩm",
        "option_c": "Ánh sáng",
        "option_d": "Bụi",
        "answer": "C"
    },
    {
        "id": 258,
        "question": "Tính chất chung của niêm mạc đường hô hấp trên là hệ thống:",
        "option_a": "Lông nhày",
        "option_b": "Lông chuyển",
        "option_c": "Nhung mao",
        "option_d": "Vi nhung mao",
        "answer": "B"
    },
    {
        "id": 259,
        "question": "Chức năng quan trọng nào của hệ thống tai mũi họng ảnh hưởng đến  sự sống còn của cơ thể?",
        "option_a": "Nghe và nói",
        "option_b": "Thở và ăn",
        "option_c": "Thăng bằng và nói",
        "option_d": "Ngửi và vị giác",
        "answer": "B"
    },
    {
        "id": 260,
        "question": "Nhóm bệnh lý nào sau đây không phải là bệnh của tai mũi họng?",
        "option_a": "Nhiễm khuẩn",
        "option_b": "Dị ứng",
        "option_c": "Khối u",
        "option_d": "Giãn cơ",
        "answer": "D"
    },
    {
        "id": 261,
        "question": "Bệnh tai mũi họng nào sau đây không thể tự khỏi mà phải điều trị tích cực?",
        "option_a": "Viêm amidan cấp tính",
        "option_b": "Viêm mũi xoang dị ứng",
        "option_c": "Chảy mủ tai",
        "option_d": "Viêm mũi họng cấp tính ở trẻ",
        "answer": "C"
    },
    {
        "id": 262,
        "question": "Thuốc nhỏ mũi nào dùng được cho trẻ sơ sinh?",
        "option_a": "Dung dịch Naphtazolin 0,05%",
        "option_b": "Dung dịch Nasolin 0,05%",
        "option_c": "Dung dịch Xylofar 0,05%",
        "option_d": "Dung dịch natriclorid 0,9%",
        "answer": "D"
    },
    {
        "id": 263,
        "question": "Thuốc nhỏ mũi Naphazolin 0,1% không được sử dụng cho đối thượng nào sau đây?",
        "option_a": "Người lớn",
        "option_b": "Phụ nữ có thai",
        "option_c": "Phụ nữ cho con bú",
        "option_d": "Trẻ em dưới 6 tháng tuổi",
        "answer": "D"
    },
    {
        "id": 264,
        "question": "Thuốc nhỏ tai nào sau đây không nên dùng cho phụ nữ mang thai?",
        "option_a": "Cồn boric 5%",
        "option_b": "Glycerin 5%",
        "option_c": "Gentamycin",
        "option_d": "Chloramphenicol",
        "answer": "C"
    },
    {
        "id": 265,
        "question": "Đặc tính nào của thuốc súc họng?",
        "option_a": "Trung tính",
        "option_b": "Kiềm tính nhẹ",
        "option_c": "Acid nhẹ",
        "option_d": "Kiềm tính mạnh",
        "answer": "B"
    },
    {
        "id": 266,
        "question": "Các tác dụng phụ của thuốc như chậm lớn, xám răng vĩnh viễn, làm lồi thóp thấy xuất hiện ở đối tượng nào?",
        "option_a": "Trẻ con",
        "option_b": "Phụ nữ",
        "option_c": "Người già",
        "option_d": "Người suy gan",
        "answer": "A"
    },
    {
        "id": 267,
        "question": "Thuốc có tác dụng phụ làm dậy thì sớm ở đối tượng trẻ con là:",
        "option_a": "Corticoid",
        "option_b": "Androgen",
        "option_c": "Sulfamid",
        "option_d": "Vitamin",
        "answer": "B"
    },
    {
        "id": 268,
        "question": "Thuốc làm xám răng vĩnh viễn cho trẻ con là:",
        "option_a": "Acid Nalidixic",
        "option_b": "Corticoid",
        "option_c": "Tetracyclin",
        "option_d": "Sulfamid",
        "answer": "C"
    },
    {
        "id": 269,
        "question": "Thuốc nào sau đây làm chậm lớn ở trẻ em?",
        "option_a": "Ampicilin",
        "option_b": "Cephalexin",
        "option_c": "Tetracyclin",
        "option_d": "Sulfamid",
        "answer": "C"
    },
    {
        "id": 270,
        "question": "Thuốc nào sau đây làm vàng da ở trẻ em?",
        "option_a": "Amoxcilin",
        "option_b": "Cephalexin",
        "option_c": "Erytromycin",
        "option_d": "Sulfamid",
        "answer": "D"
    },
    {
        "id": 271,
        "question": "Thuốc nào sau đây gây lồi thóp  ở trẻ em khi dùng quá liều?",
        "option_a": "Vitamin B1",
        "option_b": "Vitamin A",
        "option_c": "Vitamin C",
        "option_d": "Vitamin B6",
        "answer": "B"
    },
    {
        "id": 272,
        "question": "Thuốc nào sau đây làm chậm lớn ở trẻ em?",
        "option_a": "Corticoid",
        "option_b": "Vitamin",
        "option_c": "Calcium",
        "option_d": "Sắt",
        "answer": "A"
    },
    {
        "id": 273,
        "question": "Thuốc nào sau đây không được dùng cho trẻ dưới 6 tuổi?",
        "option_a": "Thuốc kháng sinh nhóm cephalosporin",
        "option_b": "Thuốc ho có chứa codein",
        "option_c": "Thuốc bổ có chứa vitamin A",
        "option_d": "Thuốc kháng viêm corticoid",
        "answer": "B"
    },
    {
        "id": 274,
        "question": "Thuốc nào sau đây dùng được cho trẻ dưới 6 tuổi?",
        "option_a": "Tetracyclin",
        "option_b": "Terpin codein",
        "option_c": "Cồn con rồng",
        "option_d": "Cefuroxim",
        "answer": "D"
    },
    {
        "id": 275,
        "question": "Trẻ sơ sinh được dùng thuốc nào?",
        "option_a": "Thuốc nhỏ mũi naphtazolin",
        "option_b": "Thuốc nhỏ mũi natri clorid 0.9%",
        "option_c": "Thuốc sổ mũi phenylephedrin",
        "option_d": "Vitamin A >100.000đv",
        "answer": "B"
    },
    {
        "id": 276,
        "question": "Đối với trẻ dưới 2 tuổi phải dùng loại thuốc dành cho:",
        "option_a": "Trẻ sơ sinh",
        "option_b": "Trẻ em",
        "option_c": "Người lớn nhưng liều phải giảm",
        "option_d": "Người lớn",
        "answer": "B"
    },
    {
        "id": 277,
        "question": "Cách tính liều cho trẻ với thuốc có độc tính cao là:",
        "option_a": "Số mg thuốc/kg cân nặng",
        "option_b": "Số viên thuốc/ngày",
        "option_c": "Số viên thuốc/lần",
        "option_d": "Số mg thuốc/m2 diện tích da",
        "answer": "D"
    },
    {
        "id": 278,
        "question": "Trẻ bao nhiêu tuổi có thể dùng thuốc cho người lớn?",
        "option_a": "< 1 tháng",
        "option_b": "< 2 tuổi",
        "option_c": "2-15 tuổi",
        "option_d": ">15 tuổi",
        "answer": "D"
    },
    {
        "id": 279,
        "question": "Thuốc Paracetamol dùng hạ sốt cho trẻ được tính liều theo:",
        "option_a": "Số mg/tuổi",
        "option_b": "Số gói/ tuổi",
        "option_c": "Số mg/kg cân nặng của trẻ",
        "option_d": "Số viên/tuổi",
        "answer": "C"
    },
    {
        "id": 280,
        "question": "Khi dùng thuốc cao hơn liều chỉ định thì bệnh nhân sẽ:",
        "option_a": "Bị tai biến nguy hiểm",
        "option_b": "Mau khỏi bệnh hơn",
        "option_c": "Không được chữa khỏi",
        "option_d": "Bị tác dụng phụ",
        "answer": "A"
    },
    {
        "id": 281,
        "question": "Nếu dùng vitamin D quá liều sẽ:",
        "option_a": "Ngăn ngừa quá trình lão hóa ở người lớn",
        "option_b": "Ảnh hưởng xấu đến răng và xương của thai nhi",
        "option_c": "Vôi hóa nhau thai ở phụ nữ có thai",
        "option_d": "Độc với cơ quan thính giác và thận của thai nhi",
        "answer": "C"
    },
    {
        "id": 282,
        "question": "Thuốc có tác dụng cản trở ở giai đoạn tượng hình và biệt hóa có thể gây quái thai, dị tật bẩm sinh. Vậy đó là giai đoạn nào của thai kỳ?",
        "option_a": "3 tháng đầu",
        "option_b": "3 tháng giữa",
        "option_c": "3 tháng cuối",
        "option_d": "Suốt thai kỳ",
        "answer": "A"
    },
    {
        "id": 283,
        "question": "Phụ nữ cho con bú dùng thuốc ức chế hệ thần kinh trung ương làm:",
        "option_a": "Mẹ giảm tiết sữa",
        "option_b": "Sữa có vị đắng",
        "option_c": "Trẻ ngầy ngật, bỏ bú",
        "option_d": "Trẻ bị dị ứng",
        "answer": "C"
    },
    {
        "id": 284,
        "question": "Phụ nữ cho con bú dùng thuốc kháng histamin làm:",
        "option_a": "Mẹ giảm tiết sữa",
        "option_b": "Sữa có vị đắng",
        "option_c": "Trẻ ngầy ngật, bỏ bú",
        "option_d": "Trẻ bị dị ứng",
        "answer": "D"
    },
    {
        "id": 285,
        "question": "Phụ nữ cho con bú dùng thuốc metronidazol làm:",
        "option_a": "Mẹ giảm tiết sữa",
        "option_b": "Sữa có vị đắng",
        "option_c": "Trẻ ngầy ngật, bỏ bú",
        "option_d": "Trẻ bị dị ứng",
        "answer": "B"
    },
    {
        "id": 286,
        "question": "Thuốc nào gây quái thai cụt chi giống như hải báo do mẹ sử dụng trong 3 tháng đầu thai kỳ?",
        "option_a": "Tetracyclin",
        "option_b": "Chloramphenicol",
        "option_c": "Streptomycin",
        "option_d": "Thalidomide",
        "answer": "D"
    },
    {
        "id": 287,
        "question": "Thuốc nào gây hội chứng xám ở trẻ do mẹ sử dụng trong thời kỳ mang thai?",
        "option_a": "Tetracyclin",
        "option_b": "Chloramphenicol",
        "option_c": "Streptomycin",
        "option_d": "Thalidomide",
        "answer": "B"
    },
    {
        "id": 288,
        "question": "Thuốc nào gây độc tính với thính giác và thận ở trẻ do mẹ sử dụng trong thời kỳ mang thai?",
        "option_a": "Tetracyclin",
        "option_b": "Chloramphenicol",
        "option_c": "Streptomycin",
        "option_d": "Thalidomide",
        "answer": "C"
    },
    {
        "id": 289,
        "question": "Thuốc nào gây ảnh hưởng xấu với mô xương và răng ở trẻ do mẹ sử dụng trong thời kỳ mang thai?",
        "option_a": "Tetracyclin",
        "option_b": "Chloramphenicol",
        "option_c": "Streptomycin",
        "option_d": "Thalidomide",
        "answer": "A"
    },
    {
        "id": 290,
        "question": "Mẹ cho con bú dùng thuốc gì làm trẻ bú mẹ bị ức chế tuyến giáp?",
        "option_a": "Thuốc chứa dẫn chất Iod",
        "option_b": "Penicilin",
        "option_c": "Estrogen",
        "option_d": "Diazepam",
        "answer": "A"
    },
    {
        "id": 291,
        "question": "Mẹ cho con bú dùng thuốc gì có thể làm trẻ bú mẹ bị dị ứng?",
        "option_a": "Thuốc chứa dẫn chất Iod",
        "option_b": "Penicilin",
        "option_c": "Estrogen",
        "option_d": "Diazepam",
        "answer": "B"
    },
    {
        "id": 292,
        "question": "Mẹ cho con bú dùng thuốc gì có thể làm trẻ bú mẹ ngầy ngật, bỏ bú?",
        "option_a": "Thuốc chứa dẫn chất Iod",
        "option_b": "Penicilin",
        "option_c": "Estrogen",
        "option_d": "Diazepam",
        "answer": "D"
    },
    {
        "id": 293,
        "question": "Mẹ cho con bú dùng thuốc gì có thể làm mẹ giảm tiết sữa?",
        "option_a": "Thuốc chứa dẫn chất Iod",
        "option_b": "Penicilin",
        "option_c": "Estrogen",
        "option_d": "Diazepam",
        "answer": "C"
    },
    {
        "id": 294,
        "question": "Sau đây là một số đặc điểm về tính chất dược động học của thuốc ở người cao tuổi, ngoại trừ:",
        "option_a": "Thuốc được hấp thu chậm",
        "option_b": "Thuốc được phân bố kém",
        "option_c": "Thuốc được thải trừ ra khỏi cơ thể nhanh",
        "option_d": "Thuốc được chuyển hóa kém",
        "answer": "C"
    },
    {
        "id": 295,
        "question": "Nguyên nhân dẫn đến tăng tỷ lệ tai biến ở người cao tuổi khi dùng thuốc, ngoại trừ:",
        "option_a": "Người cao tuổi thường hay đau ốm nên dùng thuốc nhiều hơn người trẻ",
        "option_b": "Do mắc nhiều bệnh mãn tính nên sử dụng nhiều loại thuốc",
        "option_c": "Người lớn tuổi quá lo lắng về sức khoẻ của mình nên dùng thêm thuốc ngoài thuốc được chỉ định",
        "option_d": "Ở người lớn tuổi do dùng thuốc nhiều nên ít nhầm lẫn trong sử dụng thuốc",
        "answer": "D"
    },
    {
        "id": 296,
        "question": "Suy thận ảnh hưởng quan trọng nhất đến sự suy giảm…..thuốc",
        "option_a": "Thải trừ",
        "option_b": "Hấp thu",
        "option_c": "Phân bố",
        "option_d": "Chuyển hóa",
        "answer": "A"
    },
    {
        "id": 297,
        "question": "Người suy thận nên dùng thuốc gì?",
        "option_a": "Chuyển hóa chủ yếu ở thận",
        "option_b": "Chuyển hóa chủ yếu ở gan",
        "option_c": "Chuyển hóa nhiều ở vòng tuần hoàn đầu",
        "option_d": "Thải trừ chủ yếu quá thận",
        "answer": "B"
    },
    {
        "id": 298,
        "question": "Các cách hiệu chỉnh liều dùng thuốc cho bệnh nhân suy thận, ngoại trừ:",
        "option_a": "Vừa giảm liều vừa giảm khoảng cách cho thuốc",
        "option_b": "Giữ nguyên khoảng cách giữa các lần cho thuốc và giảm liều",
        "option_c": "Giữ nguyên liều và nới rộng khoảng cách cho thuốc",
        "option_d": "Vừa giảm liều vừa nới rộng khoảng cách cho thuốc",
        "answer": "A"
    },
    {
        "id": 299,
        "question": "Người suy gan nên dùng thuốc:",
        "option_a": "Chuyển hóa chủ yếu ở gan",
        "option_b": "Chuyển hóa nhiều ở vòng tuần hoàn đầu",
        "option_c": "Chuyển hóa chủ yếu ở thận",
        "option_d": "Độc cho thận",
        "answer": "A"
    },
    {
        "id": 300,
        "question": "Người suy gan khi dùng thuốc sẽ:",
        "option_a": "Tăng tạo protein-huyết tương",
        "option_b": "Giảm khả năng chuyển hóa thuốc",
        "option_c": "Giảm thời gian bán hủy",
        "option_d": "Giảm lượng thuốc tự do trong máu",
        "answer": "B"
    },
    {
        "id": 301,
        "question": "Thuốc nào sau đây dùng được cho phụ nữ cho con bú?",
        "option_a": "Ergotamin",
        "option_b": "Estrogen",
        "option_c": "Paracetamol",
        "option_d": "Phenobarbital",
        "answer": "C"
    },
    {
        "id": 302,
        "question": "Thuốc nào sau đây không dùng được cho trẻ sơ sinh?",
        "option_a": "Dầu xoa",
        "option_b": "Nước muối 0,9%",
        "option_c": "Paracetamol",
        "option_d": "Phấn rôm",
        "answer": "D"
    },
    {
        "id": 303,
        "question": "Thuốc nào được lựa chọn ưu tiên dùng cho phụ nữ có thai?",
        "option_a": "Thuốc mới",
        "option_b": "Thuốc có tác dụng mạnh",
        "option_c": "Thuốc sử dụng rộng rãi trong thai kỳ",
        "option_d": "Thuốc ít nguy hại",
        "answer": "C"
    },
    {
        "id": 304,
        "question": "Tính liều khởi đầu điều trị cho người cao tuổi theo cách nào?",
        "option_a": "Trọng lượng cơ thể",
        "option_b": "Tuổi",
        "option_c": "Bằng 50% liều của người trưởng thành",
        "option_d": "Bằng liều của người trưởng thành",
        "answer": "C"
    },
    {
        "id": 305,
        "question": "Thuốc nào sau đây không nên dùng cho người suy thận?",
        "option_a": "Rovamycin",
        "option_b": "Doxycyclin",
        "option_c": "Minocyclin",
        "option_d": "Tetracyclin",
        "answer": "D"
    }
];
