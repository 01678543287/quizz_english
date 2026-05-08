const quizData = [
  {
    "question": "Phương pháp thường dùng điều chế thuốc mỡ với tá dược thân nước là:",
    "option_a": "Hòa tan",
    "option_b": "Trộn đều đơn giản",
    "option_c": "Trộn đều nhũ hóa",
    "option_d": "Nhũ hóa trực tiếp",
    "answer": "A"
  },
  {
    "question": "Trạng thái cảm quan thường thấy của một hỗn dịch thô là:",
    "option_a": "Trong suốt, không màu",
    "option_b": "Trắng đục, không có lắng cặn",
    "option_c": "Đục, có thể có lắng cặn",
    "option_d": "Đục, không chấp nhận sự lắng cặn",
    "answer": "C"
  },
  {
    "question": "Ý nào sau đây là sai khi nói đến ưu điểm của tá dược nhũ tương kiểu D/N?",
    "option_a": "Hoạt chất được dẫn thấm sâu",
    "option_b": "Không cản trở sự trao đổi sinh lý của da",
    "option_c": "Bền vững về mặt vi sinh vật",
    "option_d": "Không gây bẩn da, quần áo, dễ rửa",
    "answer": "C"
  },
  {
    "question": "Chọn chất giữ ẩm cho tá dược gel?",
    "option_a": "Acid béo no",
    "option_b": "Ure",
    "option_c": "Manitol",
    "option_d": "Glycerin",
    "answer": "D"
  },
  {
    "question": "Phương pháp thường dùng điều chế thuốc mỡ với tá dược là dầu, mỡ, sáp là:",
    "option_a": "Dung môi chung",
    "option_b": "Trộn đều đơn giản",
    "option_c": "Trộn đều nhũ hóa",
    "option_d": "Nhũ hóa trực tiếp",
    "answer": "B"
  },
  {
    "question": "Khi có sự chênh lệch tỷ trọng giữa hai tướng lỏng không đồng tan nhỏ thì việc điều chế nhũ tương sẽ như thế nào?",
    "option_a": "Không điều chế được",
    "option_b": "Điều chế dễ dàng",
    "option_c": "Dễ bị tách lớp sau khi điều chế",
    "option_d": "Khó điều chế",
    "answer": "B"
  },
  {
    "question": "Các yếu tố sau là khuyết điểm của hỗn dịch, ngoại trừ:",
    "option_a": "Tác dụng tại chỗ kém",
    "option_b": "Phân liều khó chính xác",
    "option_c": "Chế phẩm ít ổn định",
    "option_d": "Bào chế khó",
    "answer": "A"
  },
  {
    "question": "Các saponin thuộc nhóm chất nhũ hóa nào sau đây?",
    "option_a": "Diện hoạt tổng hợp",
    "option_b": "Bán tổng hợp, nhũ tương D/N và N/D",
    "option_c": "Thiên nhiên, dùng cho nhũ tương D/N",
    "option_d": "Thiên nhiên, dùng cho nhũ tương N/D",
    "answer": "C"
  },
  {
    "question": "Ưu điểm của thuốc tiêm dạng hỗn dịch là:",
    "option_a": "Không gây kích ứng nơi tiêm",
    "option_b": "Cho tác dụng nhanh",
    "option_c": "Thời gian tác dụng dài hơn so với dạng dung dịch",
    "option_d": "Cho tác dụng tại chỗ vì dược chất không khuếch tán được",
    "answer": "C"
  },
  {
    "question": "Với tá dược là CMC, có thể điều chế thuốc mỡ theo phương pháp nào sau đây?",
    "option_a": "Trộn đều nhũ hóa",
    "option_b": "Hòa tan",
    "option_c": "Nhũ hóa trực tiếp",
    "option_d": "Nhũ hóa",
    "answer": "B"
  },
  {
    "question": "Chọn phương pháp điều chế thuốc mỡ có hoạt chất rắn tan trong dung môi trơ nhưng dung môi này không đồng tan trong tá dược:",
    "option_a": "Trộn đều đơn giản",
    "option_b": "Trộn đều nhũ hóa",
    "option_c": "Nhũ hóa trực tiếp",
    "option_d": "Hòa tan",
    "answer": "B"
  },
  {
    "question": "Để một nhũ tương bền thì cần yếu tố nào sau đây?",
    "option_a": "Kích thước tiểu phân tướng nội phải nhỏ",
    "option_b": "Hiệu số tỉ trọng của 2 tướng phải lớn",
    "option_c": "Độ nhớt môi trường phân tán phải nhỏ",
    "option_d": "Phải dùng 2 chất nhũ hóa trở lên",
    "answer": "A"
  },
  {
    "question": "Nhũ tương bị phá vỡ hoàn toàn và không hồi phục được khi có biệu hiện nào dưới đây?",
    "option_a": "Có sự nổi kem",
    "option_b": "Có sự kết bông",
    "option_c": "Có sự kết dính",
    "option_d": "Có cắn không tan",
    "answer": "C"
  },
  {
    "question": "Mục đích của giai đoạn nghiền ướt trong điều chế hỗn dịch là làm cho dược chất…..",
    "option_a": "Đạt độ mịn thích hợp",
    "option_b": "Trộn đều với chất gây thấm",
    "option_c": "Tan hoàn toàn trong chất dẫn",
    "option_d": "Thấm đều chất dẫn",
    "answer": "D"
  },
  {
    "question": "Calci stearat có vai trò gì trong điều chế nhũ tương thuốc?",
    "option_a": "Chất kháng khuẩn cho nhũ tương D/N",
    "option_b": "Chất chống oxy hoá cho nhũ tương N/D",
    "option_c": "Chất nhũ hóa để pha chế nhũ tương D/N",
    "option_d": "Chất nhũ hóa để pha chế nhũ tương N/D",
    "answer": "D"
  },
  {
    "question": "Dạng bào chế nào sau đây có kiểu nhũ tương kiểu N/D?",
    "option_a": "Thuốc mỡ",
    "option_b": "Thuốc tiêm truyền",
    "option_c": "Siro thuốc",
    "option_d": "Thuốc tiêm dung dịch",
    "answer": "A"
  },
  {
    "question": "Khi cần gây tác dụng toàn thân, nên chọn tá dược thuộc nhóm nào sau đây?",
    "option_a": "Các dầu, mỡ, sáp",
    "option_b": "Các nhũ tương khan",
    "option_c": "Các nhũ tương D/N",
    "option_d": "Các nhũ tương N/D",
    "answer": "C"
  },
  {
    "question": "Tween thuộc nhóm chất diện hoạt nào sau đây?",
    "option_a": "Ion hóa cation",
    "option_b": "Ion hóa anion",
    "option_c": "Không ion hóa, dùng cho nhũ tương D/N",
    "option_d": "Không ion hóa, dùng cho nhũ tương N/D",
    "answer": "C"
  },
  {
    "question": "Vai trò BHT (Butyl hydroxytoluen) có trong công thức nhũ tương:",
    "option_a": "Chất kháng khuẩn",
    "option_b": "Chất chống oxy hoá",
    "option_c": "Chất nhũ hoá",
    "option_d": "Chất diện hạt",
    "answer": "B"
  },
  {
    "question": "Dược chất có trong hỗn dịch có tính chất nào sau đây?",
    "option_a": "Là các chất rắng tan trong nước",
    "option_b": "Là các chất rắng tan trong dầu",
    "option_c": "Là các chất rắn không tan trong nước",
    "option_d": "Là các chất lỏng không tan trong dầu",
    "answer": "C"
  },
  {
    "question": "Dược chất có trong nhũ tương D/N dùng tiêm truyền có tính chất nào sau đây?",
    "option_a": "Là các chất rắn không tan trong nước",
    "option_b": "Là các chất lỏng không tan trong dầu",
    "option_c": "Là các chất lỏng không tan trong nước",
    "option_d": "Là các chất lỏng không tan trong dầu",
    "answer": "C"
  },
  {
    "question": "Điều chế hỗn dịch theo phương pháp ngưng kết áp dụng khi hoạt chất rắn có đặc tính nào sau đây?",
    "option_a": "Không tan trong chất dẫn",
    "option_b": "Tạo ra từ phản ứng trao đổi ion",
    "option_c": "Tạo ra từ phản ứng kết tủa, tủa không tan trong chất dẫn",
    "option_d": "Tạo ra từ phản ứng kết tủa, tủa không tan trong dung môi",
    "answer": "C"
  },
  {
    "question": "Kiểu nhũ tương chủ yếu phụ thuộc vào yếu tố chính nào sau đây?",
    "option_a": "Sự khác biệt tỉ trọng 2 tướng",
    "option_b": "Tỉ lệ thể tích giữa 2 tướng",
    "option_c": "Kích thước của tiểu phân pha nội",
    "option_d": "Sự khác biệt sức căng bề mặt giữa 2 tướng",
    "answer": "D"
  },
  {
    "question": "Kiểu nhũ tương N/D, có nghĩa là:",
    "option_a": "Nước là môi trường phân tán",
    "option_b": "Pha ngoại là nước",
    "option_c": "Pha liên tục là dầu",
    "option_d": "Pha nội là dầu",
    "answer": "C"
  },
  {
    "question": "Đường tiêm thích hợp của thuốc tiêm dạng nhũ tương D/N là:",
    "option_a": "Tiêm bắp",
    "option_b": "Tiêm tĩnh mạch",
    "option_c": "Tiêm dưới da",
    "option_d": "Tiêm trong da",
    "answer": "B"
  },
  {
    "question": "Twen có vai trò gì trong điều chế nhũ tương thuốc?",
    "option_a": "Là chất kháng khuẩn",
    "option_b": "Là chất chống oxy hoá",
    "option_c": "Là chất nhũ hoá",
    "option_d": "Là chất diện hoạt",
    "answer": "C"
  },
  {
    "question": "Cholesterol thuộc nhóm chất nhũ hóa nào sau đây?",
    "option_a": "Diện hoạt tổng hợp",
    "option_b": "Diện hoạt bán tổng hợp",
    "option_c": "Thiên nhiên, dùng cho nhũ tương D/N",
    "option_d": "Thiên nhiên, dùng cho nhũ tương N/D",
    "answer": "D"
  },
  {
    "question": "Giai đoạn quyết định đến chất lượng thuốc mỡ điều chế theo phương pháp hòa tan là:",
    "option_a": "Phối hợp tá dược",
    "option_b": "Phối hợp dược chất vào tá dược",
    "option_c": "Điều chế tá dược",
    "option_d": "Làm mịn hoạt chất",
    "answer": "B"
  },
  {
    "question": "Loại tá dược dùng điều chế thuốc mỡ có tác dụng điều trị toàn thân là:",
    "option_a": "Tá dược thân dầu",
    "option_b": "Tá dược nhũ tương N/D",
    "option_c": "Tá dược nhũ tương D/N",
    "option_d": "Tá dược khan",
    "answer": "C"
  },
  {
    "question": "Dầu thực vật không được sử dụng trong nhũ tương thuốc tiêm là:",
    "option_a": "Dầu đỗ tương",
    "option_b": "Dầu vừng",
    "option_c": "Dầu oliu",
    "option_d": "Dầu thầu dầu",
    "answer": "D"
  },
  {
    "question": "Chọn ý không đúng theo định nghĩa thuốc mỡ của DĐVN:",
    "option_a": "Thể chất mềm",
    "option_b": "Hoạt chất phân tán đồng nhất",
    "option_c": "Không chảy ở nhiệt độ thường",
    "option_d": "Để bảo vệ da",
    "answer": "C"
  },
  {
    "question": "Chất nhũ hoá, chất gây thấm cho cả 3 dạng uống, tiêm, dùng ngoài?",
    "option_a": "Các chất phân tử lớn có nhiều nhóm -OH",
    "option_b": "Các dẫn chất ammonium bậc 4",
    "option_c": "Các polysorbat",
    "option_d": "Các dẫn chất cellulose",
    "answer": "C"
  },
  {
    "question": "Giai đoạn quan trọng nhất trong điều chế hỗn dịch bằng phương pháp phân tán cơ học ở qui mô nhỏ là:",
    "option_a": "Nghiền ướt",
    "option_b": "Nghiền khô",
    "option_c": "Phối hợp chất gây thấm",
    "option_d": "Pha loãng hỗn dịch bằng chất dẫn",
    "answer": "A"
  },
  {
    "question": "Tính chất nào sau đây không phải là tính chất của tá dược nhũ hoá dùng trong thuốc mỡ?",
    "option_a": "Có khả năng hút mạnh các chất lỏng phân cực",
    "option_b": "Bền vững với nhiệt độ",
    "option_c": "Dễ bám thành lớp mỏng trên các niêm mạc ướt",
    "option_d": "Trơn nhờn, khó rữa",
    "answer": "D"
  },
  {
    "question": "Hỗn dịch thuốc dầu là cách gọi theo tiêu chí phân loại nào sau đây?",
    "option_a": "Thể chất",
    "option_b": "Dạng dùng",
    "option_c": "Cách sử dụng",
    "option_d": "Kích thước tiểu phân",
    "answer": "A"
  },
  {
    "question": "Ưu điểm nổi bật của các dầu mỡ hydrogen hoá là:",
    "option_a": "Có thể chất đặc hơn, độ chảy cao hơn và bền vững hơn",
    "option_b": "Khả năng nhũ hoá mạnh hơn các chất béo thiên nhiên",
    "option_c": "Bền vững về lý hoá học",
    "option_d": "Dịu với da và niêm mạc",
    "answer": "A"
  },
  {
    "question": "Chọn ý sai khi nói về tính chất của tá dược thuốc mỡ thuộc nhóm hydrocarbon:",
    "option_a": "Dễ phối hợp để điều chỉnh thể chất",
    "option_b": "Dẫn thuốc thấm sâu",
    "option_c": "Không có khả năng nhũ hóa",
    "option_d": "Bền vững về tính chất lý hoá và với vi sinh vật",
    "answer": "B"
  },
  {
    "question": "Giai đoạn quan trọng nhất trong điều chế thuốc mỡ theo phương pháp trộn đều đơn giản là:",
    "option_a": "Làm bột kép",
    "option_b": "Xử lý tá dược",
    "option_c": "Điều chế thuốc mỡ đặc",
    "option_d": "Cán mịn thuốc mỡ",
    "answer": "C"
  },
  {
    "question": "Các yếu tố sau là ưu điểm của hỗn dịch, ngoại trừ:",
    "option_a": "Tác dụng tại chỗ tốt",
    "option_b": "Che dấu mùi vị khó chịu của hoạt chất",
    "option_c": "Ít kích ứng niêm mạc",
    "option_d": "Bào chế dạng lỏng cho chất ít tan",
    "answer": "A"
  },
  {
    "question": "Tá dược gel Carbopol cần thêm các chất kiềm, nhằm mục đích nào sau đây?",
    "option_a": "Tăng khả năng trương nở",
    "option_b": "Tăng độ nhớt",
    "option_c": "Tăng độ tan của hoạt chất",
    "option_d": "Giảm tính đối kháng của lớp sừng",
    "answer": "B"
  },
  {
    "question": "Nipagin có vai trò gì trong điều chế nhũ tương thuốc?",
    "option_a": "Chất kháng khuẩn",
    "option_b": "Chất chống oxy hoá",
    "option_c": "Chất nhũ hoá",
    "option_d": "Chất diện hoạt",
    "answer": "A"
  },
  {
    "question": "Chất nhũ hoá dùng cho cả 3 dạng uống, tiêm, dùng ngoài là:",
    "option_a": "Gôm Arabic",
    "option_b": "Cetrimide",
    "option_c": "Lecithin",
    "option_d": "Methyl cellulose",
    "answer": "C"
  },
  {
    "question": "Yêu cầu nào sau đây không được đặt ra cho thuốc mỡ?",
    "option_a": "Phải là hỗn hợp đồng nhất",
    "option_b": "Thể chất mềm, mịn",
    "option_c": "Không tan chảy ở nhiệt độ thường",
    "option_d": "Không gây kích ứng da và niêm mạc",
    "answer": "C"
  },
  {
    "question": "Vì sao kem bôi da có thể chất mềm, mịn, dễ rữa sạch khi bôi lên da?",
    "option_a": "Chứa tỷ lệ lớn dầu thực vật",
    "option_b": "Chứa tỷ lệ lớn nước",
    "option_c": "Chất nhũ hoá có trị số HLB cao",
    "option_d": "Có cấu trúc là nhũ tương D/N",
    "answer": "D"
  },
  {
    "question": "Hỗn dịch mịn là cách gọi theo tiêu chí phân loại nào sau đây?",
    "option_a": "Thể chất",
    "option_b": "Dạng dùng",
    "option_c": "Cách sử dụng",
    "option_d": "Kích thước tiểu phân",
    "answer": "D"
  },
  {
    "question": "Gôm Arabic thuộc nhóm chất nhũ hóa nào sau đây?",
    "option_a": "Diện hoạt tổng hợp",
    "option_b": "Bán tổng hợp, nhũ tương D/N và N/D",
    "option_c": "Thiên nhiên, dùng cho nhũ tương D/N",
    "option_d": "Thiên nhiên, dùng cho nhũ tương N/D",
    "answer": "C"
  },
  {
    "question": "Bột nhão là dạng thuốc:",
    "option_a": "Có chứa < 40% hoạt chất rắn phân tán đồng đều trong tá dược",
    "option_b": "Có chứa ≥ 40% hoạt chất rắn phân tán đồng đều trong tá dược",
    "option_c": "Có cấu trúc hỗn dịch - nhũ tương",
    "option_d": "Có tá dược thuộc nhóm thân nước",
    "answer": "B"
  },
  {
    "question": "Chọn tá dược thường dùng điều chế thuốc mỡ theo phương pháp trộn đều đơn giản:",
    "option_a": "Thân dầu",
    "option_b": "Khan",
    "option_c": "Nhũ tương hoàn chỉnh",
    "option_d": "Thân nước",
    "answer": "C"
  },
  {
    "question": "Chọn phương pháp thường dùng điều chế thuốc mỡ với tá dược là dầu thực vật:",
    "option_a": "Trộn đều nhũ hóa",
    "option_b": "Trộn đều đơn giản",
    "option_c": "Nhũ hóa trực tiếp",
    "option_d": "Nhũ hóa với tá dược NT hoàn chỉnh",
    "answer": "B"
  },
  {
    "question": "Tá dược dùng cho thuốc mỡ bôi lên vết bỏng không nhất thiết phải đạt yêu cầu nào sau đây?",
    "option_a": "Vô khuẩn",
    "option_b": "Tác dụng kìm khuẩn mạnh",
    "option_c": "Có tác dụng tái sinh mô, làm liền sẹo",
    "option_d": "Dẫn thuốc thấm sâu tuỳ mức độ bỏng",
    "answer": "B"
  },
  {
    "question": "Điều nào không đúng khi nói đến tính chất của gôm arabic?",
    "option_a": "Là chất nhũ hoá ổn định",
    "option_b": "Có tính trương nở trong nước",
    "option_c": "Có tác dụng làm giảm sức căng bề mặt",
    "option_d": "Dùng điều chế nhũ tương dùng ngoài",
    "answer": "D"
  },
  {
    "question": "Về mặt bào chế thuốc mỡ, cần quan tâm đến chức năng nào của da?",
    "option_a": "Bảo vệ, bài tiết",
    "option_b": "Bài tiết, điều hòa thân nhiệt",
    "option_c": "Bảo vệ, dự trữ",
    "option_d": "Dự trữ, hô hấp",
    "answer": "A"
  },
  {
    "question": "Đường tiêm thích hợp của thuốc tiêm dạng hỗn dịch là:",
    "option_a": "Tiêm bắp",
    "option_b": "Tiêm tĩnh mạch",
    "option_c": "Tiêm dưới da",
    "option_d": "Tiêm trong da",
    "answer": "A"
  },
  {
    "question": "Chất diện hoạt thường dùng làm chất nhũ hoá vì có tác dụng nào sau đây?",
    "option_a": "Làm tăng sức căng liên bề mặt",
    "option_b": "Làm tăng độ nhớt của môi trường phân tán",
    "option_c": "Làm giảm sức căng liên bề mặt",
    "option_d": "Làm giảm độ nhớt của môi trường phân tán",
    "answer": "C"
  },
  {
    "question": "Đường dùng của nhũ tương thuốc dùng Natri laurylsulfat làm chất nhũ hoá là:",
    "option_a": "Uống",
    "option_b": "Tiêm",
    "option_c": "Dùng ngoài",
    "option_d": "Tiêm truyền",
    "answer": "C"
  },
  {
    "question": "Chọn ý sai khi nói về ưu, nhược điểm của tá dược thuốc mỡ thuộc nhóm dầu, mỡ, sáp:",
    "option_a": "Có tác dụng nhũ hoá các chất lỏng phân cực",
    "option_b": "Trơn nhờn, kỵ nước, gây bẩn",
    "option_c": "Dễ bị ôi khét do bị oxy hoá",
    "option_d": "Dịu với da",
    "answer": "A"
  },
  {
    "question": "Với tá dược là Vaselin, có thể điều chế thuốc mỡ theo phương pháp nào sau đây?",
    "option_a": "Trộn đều nhũ hóa",
    "option_b": "Hòa tan",
    "option_c": "Nhũ hóa trực tiếp",
    "option_d": "Nhũ hóa",
    "answer": "B"
  },
  {
    "question": "Loại tá dược thuốc mỡ nào sau đây cần thêm đồng thời chất bảo quản và chất hút ẩm?",
    "option_a": "Tá dược dầu mỡ sáp",
    "option_b": "Tá dược nhũ tương khan",
    "option_c": "Tá dược nhũ tương D/N",
    "option_d": "Tá dược nhũ tương N/D",
    "answer": "C"
  },
  {
    "question": "Chọn phương pháp thường dùng điều chế thuốc mỡ với tá dược là dầu khoáng vật:",
    "option_a": "Trộn đều nhũ hóa",
    "option_b": "Trộn đều đơn giản",
    "option_c": "Nhũ hóa trực tiếp",
    "option_d": "Nhũ hóa với tá dược NT hoàn chỉnh",
    "answer": "B"
  },
  {
    "question": "Ưu điểm lớn nhất của tá dược nhũ tương D/N dùng để điều chế thuốc mỡ là:",
    "option_a": "Phóng thích hoạt chất nhanh và hoàn toàn",
    "option_b": "Dẫn thuốc thấm sâu",
    "option_c": "Thể chất mịn màng hấp dẫn",
    "option_d": "Dễ rửa",
    "answer": "D"
  },
  {
    "question": "Độ cồn thích hợp để điều chế cồn thuốc từ dược liệu chứa hoạt chất độc:",
    "option_a": "60 độ",
    "option_b": "70 độ",
    "option_c": "80 độ",
    "option_d": "90 độ",
    "answer": "B"
  },
  {
    "question": "Các yêu cầu sau đây dùng để kiểm tra chất lượng của cồn thuốc, ngoại trừ:",
    "option_a": "Màu sắc, mùi vị",
    "option_b": "Xác định độ vô khuẩn",
    "option_c": "Xác định độ cồn",
    "option_d": "Định tính",
    "answer": "B"
  },
  {
    "question": "Trong điều chế cao thuốc để loại tạp là gôm, nhầy, tanin dùng cách nào sau đây:",
    "option_a": "Nhiệt",
    "option_b": "Chì acetat kiềm",
    "option_c": "Cồn 90 độ",
    "option_d": "Ete",
    "answer": "C"
  },
  {
    "question": "Loại bột dược liệu dùng điều chế cồn thuốc theo phương pháp ngấm kiệt:",
    "option_a": "Thô",
    "option_b": "Nửa thô",
    "option_c": "Nửa mịn",
    "option_d": "Mịn",
    "answer": "B"
  },
  {
    "question": "Tỷ trọng cồn thuốc thường là:",
    "option_a": "0,87 – 1,05",
    "option_b": "0,87 – 0,98",
    "option_c": "0,78 – 0,89",
    "option_d": "1,26 - 1,32",
    "answer": "B"
  },
  {
    "question": "Dùng cao cam thảo để điều chỉnh cao thuốc có tỷ lệ hoạt chất cao hơn qui định, áp dụng đối với cao:",
    "option_a": "Lỏng",
    "option_b": "Mềm",
    "option_c": "Đặc",
    "option_d": "Khô",
    "answer": "B"
  },
  {
    "question": "Khoảng độ cồn dùng điều chế cồn thuốc có hoạt chất trong dược liệu chứa glycosid:",
    "option_a": "30 - 60 độ",
    "option_b": "70 - 80 độ",
    "option_c": "80 - 90 độ",
    "option_d": "90 - 95 độ",
    "answer": "B"
  },
  {
    "question": "Phương pháp điều chế cồn thuốc đối với dược liệu chứa chất độc:",
    "option_a": "Ngấm kiệt",
    "option_b": "Hòa tan",
    "option_c": "Ngâm lạnh",
    "option_d": "Hòa tan đặc biệt",
    "answer": "A"
  },
  {
    "question": "Loại bột dược liệu trong điều chế cồn thuốc có độ cồn thấp độ:",
    "option_a": "Thô",
    "option_b": "Nửa thô",
    "option_c": "Nửa mịn",
    "option_d": "Mịn",
    "answer": "C"
  },
  {
    "question": "Trong điều chế cao thuốc, để loại tạp chất tan trong cồn dùng cách nào sau đây:",
    "option_a": "Nhiệt",
    "option_b": "Chì acetat kiềm",
    "option_c": "Cồn 90 độ",
    "option_d": "Ete",
    "answer": "A"
  },
  {
    "question": "Trong điều chế cao thuốc, để loại tạp là chất béo, nhựa dùng cách nào sau đây:",
    "option_a": "Nhiệt",
    "option_b": "Chì acetat kiềm",
    "option_c": "Cồn 90 độ",
    "option_d": "Ete",
    "answer": "D"
  },
  {
    "question": "Trong quá trình cô đặc cao thuốc các vấn đề sau cần lưu ý, ngoại trừ:",
    "option_a": "Nhiệt độ cô < 50 độ C",
    "option_b": "Thời gian cô ngắn",
    "option_c": "Khuấy liên tục",
    "option_d": "Cô trực tiếp",
    "answer": "D"
  }
]