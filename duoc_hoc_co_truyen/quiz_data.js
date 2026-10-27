const quizData = [
    {
        "id": 1,
        "question": "Thuốc khử hàn có tác dụng chính nào?",
        "option_a": "Thanh nhiệt tả hỏa",
        "option_b": "Ôn trung, tán hàn, giảm đau và hồi dương cứu nghịch",
        "option_c": "Thu liễm mồ hôi",
        "option_d": "Tiêu thực hóa tích",
        "answer": "B"
    },
    {
        "id": 2,
        "question": "Thuốc khử hàn thường được dùng trong trường hợp nào?",
        "option_a": "Dương khí suy giảm, hàn tà nhập lý, tỳ thận dương hư",
        "option_b": "Thực nhiệt thịnh, sốt cao do nhiệt kết",
        "option_c": "Âm hư nội nhiệt đơn thuần",
        "option_d": "Thấp nhiệt ở bàng quang",
        "answer": "A"
    },
    {
        "id": 3,
        "question": "Thuốc khử hàn được chia thành mấy nhóm chính theo tài liệu?",
        "option_a": "1 nhóm",
        "option_b": "3 nhóm",
        "option_c": "2 nhóm",
        "option_d": "4 nhóm",
        "answer": "C"
    },
    {
        "id": 4,
        "question": "Hai nhóm chính của thuốc khử hàn là gì?",
        "option_a": "Công hạ và nhuận hạ",
        "option_b": "Bổ khí và bổ huyết",
        "option_c": "Thanh nhiệt và giải độc",
        "option_d": "Ôn trung và hồi dương cứu nghịch",
        "answer": "D"
    },
    {
        "id": 5,
        "question": "Thuốc ôn trung có tác dụng nào?",
        "option_a": "Làm ấm cơ thể, giảm đau, kiện tỳ, hành khí",
        "option_b": "Chỉ dùng để lợi tiểu",
        "option_c": "Chỉ dùng để cầm máu",
        "option_d": "Làm mát cơ thể, dưỡng âm",
        "answer": "A"
    },
    {
        "id": 6,
        "question": "Nhóm thuốc hồi dương cứu nghịch gồm những vị nào theo tài liệu?",
        "option_a": "Mật ong, Ma nhân",
        "option_b": "Sơn tra, Mạch nha",
        "option_c": "Ngũ vị tử, Kim anh",
        "option_d": "Phụ tử, Nhục quế",
        "answer": "D"
    },
    {
        "id": 7,
        "question": "Đặc điểm chung thường gặp của thuốc khử hàn là gì?",
        "option_a": "Tính hàn, vị đắng, quy kinh tâm",
        "option_b": "Tính bình, vị ngọt, quy kinh phế",
        "option_c": "Tính ôn hoặc nhiệt, vị cay, thường quy kinh tỳ và thận",
        "option_d": "Tính mát, vị chua, quy kinh can",
        "answer": "C"
    },
    {
        "id": 8,
        "question": "Vị thuốc nào sau đây thuộc nhóm ôn trung tán hàn?",
        "option_a": "Can khương",
        "option_b": "Đại hoàng",
        "option_c": "Phan tả diệp",
        "option_d": "Kha tử",
        "answer": "A"
    },
    {
        "id": 9,
        "question": "Bộ phận dùng của Can khương là gì?",
        "option_a": "Quả chín",
        "option_b": "Nhân hạt",
        "option_c": "Thân rễ phơi khô",
        "option_d": "Vỏ thân",
        "answer": "C"
    },
    {
        "id": 10,
        "question": "Bộ phận dùng của Đại hồi là gì?",
        "option_a": "Thân rễ",
        "option_b": "Nhân hạt",
        "option_c": "Quả chín thường có 8 cánh",
        "option_d": "Vỏ thân",
        "answer": "C"
    },
    {
        "id": 11,
        "question": "Nhục đậu khấu có công năng nào theo tài liệu?",
        "option_a": "Hồi dương cứu nghịch là tác dụng duy nhất",
        "option_b": "Thanh nhiệt giải độc",
        "option_c": "Phát hãn giải biểu",
        "option_d": "Ôn tỳ tiêu thực, hóa thấp",
        "answer": "D"
    },
    {
        "id": 12,
        "question": "Ngô thù du có tác dụng nào?",
        "option_a": "Ôn trung giáng nghịch, tán hàn, táo thấp, chỉ thống",
        "option_b": "Chỉ bổ huyết dưỡng âm",
        "option_c": "Chỉ nhuận tràng",
        "option_d": "Chỉ thanh nhiệt",
        "answer": "A"
    },
    {
        "id": 13,
        "question": "Bộ phận dùng của Phụ tử là gì?",
        "option_a": "Quả chín",
        "option_b": "Vỏ thân",
        "option_c": "Củ con hoặc củ nhánh của cây Ô đầu đã qua chế biến",
        "option_d": "Thân rễ gừng phơi khô",
        "answer": "C"
    },
    {
        "id": 14,
        "question": "Thành phần hóa học có độc tính nổi bật của Phụ tử là gì?",
        "option_a": "Aconitin",
        "option_b": "Anethol",
        "option_c": "Aloin",
        "option_d": "Zingiberen",
        "answer": "A"
    },
    {
        "id": 15,
        "question": "Dấu hiệu nào có thể gặp khi ngộ độc Phụ tử theo tài liệu?",
        "option_a": "Táo bón nhẹ đơn thuần",
        "option_b": "Tê bì, nôn mửa, khó thở, tụt huyết áp, loạn nhịp tim",
        "option_c": "Chỉ tăng cảm giác ngon miệng",
        "option_d": "Chỉ ra mồ hôi trộm",
        "answer": "B"
    },
    {
        "id": 16,
        "question": "Bộ phận dùng của Nhục quế là gì?",
        "option_a": "Quả chín",
        "option_b": "Nhân hạt",
        "option_c": "Củ nhánh",
        "option_d": "Vỏ thân cây quế, cạo bỏ lớp bần",
        "answer": "D"
    },
    {
        "id": 17,
        "question": "Thuốc bình can tức phong, an thần, khai khiếu có tác dụng chủ yếu nào sau đây?",
        "option_a": "Bổ khí, kiện tỳ, thăng dương",
        "option_b": "Trấn tâm, bình can, tiềm dương, chỉ kinh",
        "option_c": "Ôn trung, tán hàn, hồi dương",
        "option_d": "Hoạt huyết, hóa ứ, tiêu tích",
        "answer": "B"
    },
    {
        "id": 18,
        "question": "Theo YHCT, nhóm thuốc bình can tức phong, an thần, khai khiếu được chia thành mấy loại chính?",
        "option_a": "2 loại",
        "option_b": "4 loại",
        "option_c": "3 loại",
        "option_d": "5 loại",
        "answer": "C"
    },
    {
        "id": 19,
        "question": "Thuốc bình can tức phong thích hợp sử dụng trong trường hợp nào?",
        "option_a": "Can dương cường thịnh, can phong nội động",
        "option_b": "Tỳ vị hư hàn gây tiêu chảy",
        "option_c": "Phế khí hư gây ho kéo dài",
        "option_d": "Thận dương hư gây tiểu nhiều",
        "answer": "A"
    },
    {
        "id": 20,
        "question": "Thuốc bình can tức phong có tác dụng chỉ kinh nghĩa là gì?",
        "option_a": "Làm tăng tiết mồ hôi",
        "option_b": "Làm giảm tiết nước tiểu",
        "option_c": "Giúp ngừng co giật, kinh giật theo quan niệm YHCT",
        "option_d": "Giúp tăng nhu động ruột",
        "answer": "C"
    },
    {
        "id": 21,
        "question": "Thuốc dưỡng tâm an thần thường được dùng trong trường hợp nào?",
        "option_a": "Thực nhiệt tích trệ ở đại trường",
        "option_b": "Hư chứng do âm hư, huyết hư hoặc tỳ hư không nuôi dưỡng được tâm",
        "option_c": "Phù thũng do thủy thấp",
        "option_d": "Ngoại cảm phong hàn mới mắc",
        "answer": "B"
    },
    {
        "id": 22,
        "question": "Nhóm nào sau đây gồm toàn các vị thuốc dưỡng tâm an thần theo tài liệu?",
        "option_a": "Toan táo nhân, Bá tử nhân, Lạc tiên",
        "option_b": "Chu sa, Thần sa, Long cốt",
        "option_c": "Xạ hương, Băng phiến, An tức hương",
        "option_d": "Kim tiền thảo, Trạch tả, Phục linh",
        "answer": "A"
    },
    {
        "id": 23,
        "question": "Thuốc phương hương khai khiếu có tác dụng chủ yếu nào?",
        "option_a": "Bổ khí, sinh huyết",
        "option_b": "Ôn thận, tráng dương",
        "option_c": "Thu liễm, cố sáp",
        "option_d": "Khai thông các khiếu, tỉnh thần",
        "answer": "D"
    },
    {
        "id": 24,
        "question": "Vị thuốc nào sau đây thuộc nhóm phương hương khai khiếu?",
        "option_a": "Toan táo nhân",
        "option_b": "Bá tử nhân",
        "option_c": "Băng phiến",
        "option_d": "Long nhãn",
        "answer": "C"
    },
    {
        "id": 25,
        "question": "Bộ phận dùng làm thuốc của Toan táo nhân là gì?",
        "option_a": "Lá non",
        "option_b": "Rễ cây",
        "option_c": "Vỏ thân",
        "option_d": "Nhân hạt táo ta",
        "answer": "D"
    },
    {
        "id": 26,
        "question": "Theo tài liệu, Toan táo nhân có tác dụng nào?",
        "option_a": "Thanh nhiệt, lợi mật",
        "option_b": "Dưỡng tâm an thần, sinh tân chỉ khát",
        "option_c": "Khai khiếu, tỉnh thần",
        "option_d": "Bình can, trấn kinh, thanh nhiệt",
        "answer": "B"
    },
    {
        "id": 27,
        "question": "Viễn chí có tác dụng được lý nào được nêu trong tài liệu?",
        "option_a": "Bổ tâm, thận, an thần, hóa đờm",
        "option_b": "Lợi thủy, tiêu phù",
        "option_c": "Thanh nhiệt, giải độc, lợi mật",
        "option_d": "Phát hãn, giải biểu",
        "answer": "A"
    },
    {
        "id": 28,
        "question": "Bạch cương tàm được mô tả là bộ phận nào?",
        "option_a": "Nhân hạt táo ta",
        "option_b": "Con tằm nhà tơ bị chết cứng, màu trắng như vôi",
        "option_c": "Lá sen còn xanh",
        "option_d": "Thân rễ có nhiều mắt",
        "answer": "B"
    },
    {
        "id": 29,
        "question": "Tác dụng nào sau đây phù hợp với Bạch cương tàm?",
        "option_a": "Bổ huyết, kiện tỳ, an thần",
        "option_b": "Khai khiếu, hành khí, kiện vị",
        "option_c": "Khử phong, hóa đờm, tiêu độc, chỉ kinh",
        "option_d": "Dưỡng tâm, sinh tân chỉ khát",
        "answer": "C"
    },
    {
        "id": 30,
        "question": "Theo tài liệu, Quyết minh tử có thể được sử dụng trong trường hợp nào?",
        "option_a": "Chỉ dùng để ôn trung tán hàn",
        "option_b": "Đau mắt đỏ, sợ ánh sáng, chảy nước mắt; khi dùng sống còn có tác dụng nhuận tràng theo tài liệu",
        "option_c": "Chỉ dùng để bổ khí",
        "option_d": "Chỉ dùng để khai khiếu khi hôn mê",
        "answer": "B"
    },
    {
        "id": 31,
        "question": "Bộ phận dùng của Câu đằng là gì?",
        "option_a": "Nhân hạt có nhiều dầu béo",
        "option_b": "Lá bánh tẻ phơi mát",
        "option_c": "Đoạn thân ngắn 2–3 cm mang gai móc câu",
        "option_d": "Cơm quả nhãn phơi khô",
        "answer": "C"
    },
    {
        "id": 32,
        "question": "Theo tài liệu, Lạc tiên có tác dụng chính nào?",
        "option_a": "Dưỡng tâm an thần",
        "option_b": "Lợi thủy thông lâm",
        "option_c": "Bình can, thanh nhiệt",
        "option_d": "Khai khiếu, tỉnh thần",
        "answer": "A"
    },
    {
        "id": 33,
        "question": "Thuốc lợi thủy thẩm thấp có tác dụng chủ yếu nào sau đây?",
        "option_a": "Làm ra mồ hôi để giải biểu",
        "option_b": "Bài trừ thủy thấp ứ đọng qua đường nước tiểu",
        "option_c": "Gây nôn để loại bỏ đờm thấp",
        "option_d": "Tăng nhu động ruột để tống chất tích trệ",
        "answer": "B"
    },
    {
        "id": 34,
        "question": "Đa số các vị thuốc lợi thủy thẩm thấp có đặc điểm tính vị nào?",
        "option_a": "Tính bình, vị đạm",
        "option_b": "Tính đại nhiệt, vị cay",
        "option_c": "Tính đại hàn, vị mặn",
        "option_d": "Tính ôn, vị chua",
        "answer": "A"
    },
    {
        "id": 35,
        "question": "Tác dụng nào sau đây phù hợp nhất với nhóm thuốc lợi thủy thẩm thấp?",
        "option_a": "Bổ huyết, điều kinh",
        "option_b": "Cố biểu, liễm hãn",
        "option_c": "Ôn trung, tán hàn",
        "option_d": "Lợi niệu, tiêu phù",
        "answer": "D"
    },
    {
        "id": 36,
        "question": "Theo lý luận YHCT, tạng nào chủ vận hóa thủy thấp?",
        "option_a": "Tâm",
        "option_b": "Can",
        "option_c": "Phế",
        "option_d": "Tỳ",
        "answer": "D"
    },
    {
        "id": 37,
        "question": "Theo lý luận YHCT, tạng nào có chức năng thông điều thủy đạo?",
        "option_a": "Tâm",
        "option_b": "Phế",
        "option_c": "Can",
        "option_d": "Tỳ",
        "answer": "B"
    },
    {
        "id": 38,
        "question": "Tạng nào chủ khí hóa, có vai trò quan trọng trong chuyển hóa và bài tiết nước tiểu?",
        "option_a": "Tâm",
        "option_b": "Phế",
        "option_c": "Thận",
        "option_d": "Can",
        "answer": "C"
    },
    {
        "id": 39,
        "question": "Bộ phận dùng làm thuốc của Bạch phục linh là gì?",
        "option_a": "Rễ cây",
        "option_b": "Thân dây",
        "option_c": "Thể nấm ký sinh trên cây thông",
        "option_d": "Hạt cây",
        "answer": "C"
    },
    {
        "id": 40,
        "question": "Tác dụng nào sau đây phù hợp với Bạch phục linh?",
        "option_a": "Phát hãn, giải biểu",
        "option_b": "Lợi thủy, thẩm thấp, kiện tỳ, ninh tâm",
        "option_c": "Tả hạ, công tích trệ",
        "option_d": "Ôn thận, tráng dương là tác dụng chính",
        "answer": "B"
    },
    {
        "id": 41,
        "question": "Bộ phận dùng của Kim tiền thảo theo bài học là gì?",
        "option_a": "Rễ cạo bỏ vỏ ngoài",
        "option_b": "Hạt chín đã sao",
        "option_c": "Lõi thân màu trắng",
        "option_d": "Thân và lá phơi khô, cắt ngắn",
        "answer": "C"
    },
    {
        "id": 42,
        "question": "Vị thuốc nào trong bài thường được nhắc đến trong điều trị sỏi tiết niệu và sỏi mật theo YHCT?",
        "option_a": "Phục thần",
        "option_b": "Thông thảo",
        "option_c": "Kim tiền thảo",
        "option_d": "Phòng kỷ",
        "answer": "C"
    },
    {
        "id": 43,
        "question": "Thuốc tả hạ có tác dụng chính là gì?",
        "option_a": "Bổ khí kiện tỳ",
        "option_b": "Làm thông lợi đại tiện",
        "option_c": "Thu liễm mồ hôi",
        "option_d": "Bổ huyết dưỡng âm",
        "answer": "B"
    },
    {
        "id": 44,
        "question": "Thuốc tả hạ thường được dùng trong trường hợp nào?",
        "option_a": "Đại tiện bí táo, táo kết",
        "option_b": "Ra mồ hôi trộm",
        "option_c": "Ăn uống không tiêu đơn thuần",
        "option_d": "Di tinh, hoạt tinh",
        "answer": "A"
    },
    {
        "id": 45,
        "question": "Theo tài liệu, liều thuốc tả hạ thấp thường có tác dụng gì?",
        "option_a": "Trục thủy rất mạnh",
        "option_b": "Gây vong dương",
        "option_c": "Nhuận hạ",
        "option_d": "Cố sáp",
        "answer": "C"
    },
    {
        "id": 46,
        "question": "Thuốc tả hạ được chia thành mấy nhóm chính?",
        "option_a": "2 nhóm",
        "option_b": "3 nhóm",
        "option_c": "4 nhóm",
        "option_d": "5 nhóm",
        "answer": "A"
    },
    {
        "id": 47,
        "question": "Ba nhóm thuốc tả hạ là gì?",
        "option_a": "Công hạ, nhuận hạ, trục thủy",
        "option_b": "Bổ khí, bổ huyết, bổ âm",
        "option_c": "Thanh nhiệt, giải độc, an thần",
        "option_d": "Liễm hãn, cố tinh, sáp trường",
        "answer": "A"
    },
    {
        "id": 48,
        "question": "Thuốc công hạ tính hàn chủ yếu dùng trong trường hợp nào?",
        "option_a": "Táo bón do tân dịch hư đơn thuần",
        "option_b": "Tiêu chảy do tỳ hư",
        "option_c": "Thực nhiệt bí kết ở trường vị",
        "option_d": "Di tinh do thận hư",
        "answer": "C"
    },
    {
        "id": 49,
        "question": "Vị thuốc nào thuộc nhóm công hạ tính hàn?",
        "option_a": "Đại hoàng",
        "option_b": "Ba đậu",
        "option_c": "Lưu hoàng",
        "option_d": "Mật ong",
        "answer": "A"
    },
    {
        "id": 50,
        "question": "Công năng của Mật ong là gì?",
        "option_a": "Bổ trung nhuận táo, chỉ thống, giải độc, nhuận phế",
        "option_b": "Trục thủy tả hạ",
        "option_c": "Công hạ tả hỏa mạnh",
        "option_d": "Sát trùng, trục giun",
        "answer": "A"
    },
    {
        "id": 51,
        "question": "Đại hoàng có tính vị và quy kinh nào?",
        "option_a": "Ngọt, bình; phế, tỳ, đại trường",
        "option_b": "Cay, nóng; phế, thận, đại trường",
        "option_c": "Đắng, hàn; can, tỳ, vị, đại trường",
        "option_d": "Đắng, hàn; tỳ, đại trường",
        "answer": "C"
    },
    {
        "id": 52,
        "question": "Bộ phận dùng của Phan tả diệp là gì?",
        "option_a": "Rễ",
        "option_b": "Thân rễ",
        "option_c": "Quả",
        "option_d": "Lá",
        "answer": "D"
    },
    {
        "id": 53,
        "question": "Thuốc tiêu đạo có tác dụng chính là gì?",
        "option_a": "Bổ khí, dưỡng huyết",
        "option_b": "Tiêu trừ thực tích ở trung tiêu, giúp tiêu hóa thức ăn ứ trệ",
        "option_c": "Thanh nhiệt giải độc",
        "option_d": "Thu liễm mồ hôi",
        "answer": "B"
    },
    {
        "id": 54,
        "question": "Thuốc tiêu đạo thường được dùng khi nào?",
        "option_a": "Ăn uống không tiêu, đầy chướng, buồn nôn",
        "option_b": "Khí huyết hư nhược đơn thuần",
        "option_c": "Ngoại cảm mới mắc",
        "option_d": "Tiểu tiện khó do nhiệt",
        "answer": "C"
    },
    {
        "id": 55,
        "question": "Khi thực tích kèm khí trệ, nên phối hợp thuốc tiêu đạo với nhóm nào?",
        "option_a": "Thuốc bổ huyết",
        "option_b": "Thuốc cố tinh",
        "option_c": "Thuốc lý khí",
        "option_d": "Thuốc liễm hãn",
        "answer": "C"
    },
    {
        "id": 56,
        "question": "Khi tỳ vị hư nhược kèm thực tích, nên phối hợp với nhóm thuốc nào?",
        "option_a": "Thuốc bổ khí kiện tỳ",
        "option_b": "Thuốc thanh nhiệt tả hỏa đơn thuần",
        "option_c": "Thuốc hoạt huyết",
        "option_d": "Thuốc lợi niệu",
        "answer": "A"
    },
    {
        "id": 57,
        "question": "Trường hợp nào không nên dùng thuốc tiêu đạo theo tài liệu?",
        "option_a": "Ăn nhiều gây đầy bụng",
        "option_b": "Thức ăn đình trệ",
        "option_c": "Đầy trướng do ăn uống không tiêu",
        "option_d": "Khí hư, tỳ hư nhưng không có tích trệ",
        "answer": "D"
    },
    {
        "id": 58,
        "question": "Vị thuốc nào sau đây thuộc nhóm tiêu đạo?",
        "option_a": "Ngũ vị tử",
        "option_b": "Sơn tra",
        "option_c": "Kim anh",
        "option_d": "Sơn thù",
        "answer": "B"
    },
    {
        "id": 59,
        "question": "Bộ phận dùng của Sơn tra là gì?",
        "option_a": "Rễ phơi khô",
        "option_b": "Lá bánh tẻ",
        "option_c": "Quả chín phơi khô",
        "option_d": "Hạt già",
        "answer": "C"
    },
    {
        "id": 60,
        "question": "Bộ phận dùng của Kê nội kim là gì?",
        "option_a": "Hạt củ cải già",
        "option_b": "Quả mơ",
        "option_c": "Màng mề gà đã làm sạch và phơi khô",
        "option_d": "Hạt sen còn màng đỏ",
        "answer": "C"
    },
    {
        "id": 61,
        "question": "Thuốc cố sáp có tác dụng chủ yếu nào?",
        "option_a": "Phát tán ngoại tà",
        "option_b": "Thu liễm mồ hôi, máu và tân dịch bị bài tiết quá nhiều",
        "option_c": "Tả hạ tích trệ",
        "option_d": "Hoạt huyết hóa ứ",
        "answer": "B"
    },
    {
        "id": 62,
        "question": "Thuốc thanh nhiệt thường có tính chất nào sau đây?",
        "option_a": "Cay, nóng",
        "option_b": "Hàn, lương",
        "option_c": "Ngọt, ấm",
        "option_d": "Chua, bình",
        "answer": "B"
    },
    {
        "id": 63,
        "question": "Thuốc thanh nhiệt tả hỏa chủ yếu dùng trong trường hợp nào?",
        "option_a": "Huyết hư, sắc mặt nhợt",
        "option_b": "Hàn thấp, đau bụng",
        "option_c": "Thực nhiệt, sốt cao, khát nhiều",
        "option_d": "Khí hư, mệt mỏi",
        "answer": "C"
    },
    {
        "id": 64,
        "question": "Vị thuốc nào sau đây thuộc nhóm thanh nhiệt tả hỏa theo tài liệu?",
        "option_a": "Chi tử",
        "option_b": "Đan sâm",
        "option_c": "Ích mẫu",
        "option_d": "Ngưu tất",
        "answer": "A"
    },
    {
        "id": 65,
        "question": "Bệnh nhân sốt cao, khát nhiều, vật vã, lưỡi vàng khô. Theo nguyên tắc YHCT, nhóm thuốc nào phù hợp nhất?",
        "option_a": "Bổ khí",
        "option_b": "Ôn trung tán hàn",
        "option_c": "Thu liễm cố sáp",
        "option_d": "Thanh nhiệt tả hỏa",
        "answer": "D"
    },
    {
        "id": 66,
        "question": "Nhóm thuốc thanh nhiệt lương huyết chủ yếu điều trị chứng nào?",
        "option_a": "Khí trệ",
        "option_b": "Huyết nhiệt",
        "option_c": "Hàn ngưng",
        "option_d": "Thận dương hư",
        "answer": "B"
    },
    {
        "id": 67,
        "question": "Vị thuốc nào sau đây thuộc nhóm thanh nhiệt lương huyết?",
        "option_a": "Nga truật",
        "option_b": "Xuyên khung",
        "option_c": "Sinh địa",
        "option_d": "Tô mộc",
        "answer": "C"
    },
    {
        "id": 68,
        "question": "Bệnh nhân sốt kéo dài, khô miệng, khát nước do thiếu tân dịch. Vị thuốc nào trong tài liệu có tác dụng thanh nhiệt, lương huyết và nhuận trường?",
        "option_a": "Sinh địa",
        "option_b": "Đào nhân",
        "option_c": "Khương hoàng",
        "option_d": "Xuyên khung",
        "answer": "A"
    },
    {
        "id": 69,
        "question": "Nhóm thuốc thanh nhiệt giải độc thường được dùng nhằm mục đích nào?",
        "option_a": "Bổ huyết, điều kinh",
        "option_b": "Ôn dương, tán hàn",
        "option_c": "Thu liễm mồ hôi",
        "option_d": "Thanh nhiệt, giải độc, hỗ trợ chống viêm nhiễm",
        "answer": "D"
    },
    {
        "id": 70,
        "question": "Vị thuốc nào thuộc nhóm thanh nhiệt giải độc?",
        "option_a": "Ngưu tất",
        "option_b": "Kim ngân hoa",
        "option_c": "Đào nhân",
        "option_d": "Nga truật",
        "answer": "B"
    },
    {
        "id": 71,
        "question": "Thuốc thanh nhiệt táo thấp chủ yếu dùng điều trị chứng bệnh nào?",
        "option_a": "Khí huyết lưỡng hư",
        "option_b": "Phế khí hư",
        "option_c": "Thấp nhiệt",
        "option_d": "Hàn ngưng huyết ứ",
        "answer": "C"
    },
    {
        "id": 72,
        "question": "Theo tài liệu, thuốc lý huyết chủ yếu được dùng để chữa các chứng bệnh do nguyên nhân nào?",
        "option_a": "Huyết ứ",
        "option_b": "Khí hư",
        "option_c": "Dương hư",
        "option_d": "Âm hư",
        "answer": "A"
    },
    {
        "id": 73,
        "question": "Thuốc lý huyết được chia thành hai nhóm chính nào theo tài liệu?",
        "option_a": "Bổ huyết và bổ khí",
        "option_b": "Thanh nhiệt và ôn lý",
        "option_c": "Hành khí và chỉ khái",
        "option_d": "Hoạt huyết và phá huyết",
        "answer": "D"
    },
    {
        "id": 74,
        "question": "Vị thuốc nào thuộc nhóm hoạt huyết?",
        "option_a": "Hoàng liên",
        "option_b": "Đan sâm",
        "option_c": "Hoàng bá",
        "option_d": "Tri mẫu",
        "answer": "B"
    },
    {
        "id": 75,
        "question": "Vị thuốc nào thuộc nhóm phá huyết theo tài liệu?",
        "option_a": "Sinh địa",
        "option_b": "Huyền sâm",
        "option_c": "Nga truật",
        "option_d": "Bạch mao căn",
        "answer": "C"
    },
    {
        "id": 76,
        "question": "Nhóm thuốc hoạt huyết có đặc điểm nào so với nhóm thuốc phá huyết?",
        "option_a": "Tác dụng nhẹ hơn",
        "option_b": "Tác dụng mạnh hơn",
        "option_c": "Chỉ có tác dụng cầm máu",
        "option_d": "Chỉ dùng để thanh nhiệt",
        "answer": "A"
    },
    {
        "id": 77,
        "question": "Theo nguyên tắc phối hợp thuốc lý huyết, khi huyết ứ liên quan đến nhiễm trùng, nên phối hợp nhóm thuốc nào?",
        "option_a": "Bổ khí, ôn dương",
        "option_b": "Thu liễm, cố sáp",
        "option_c": "Ôn trung, tán hàn",
        "option_d": "Thanh nhiệt giải độc, thanh nhiệt táo thấp",
        "answer": "D"
    },
    {
        "id": 78,
        "question": "Khi sử dụng thuốc lý huyết mà bệnh nhân có xuất huyết, theo tài liệu cần nhắc phối hợp nhóm nào?",
        "option_a": "Thuốc bổ dương",
        "option_b": "Thuốc chỉ huyết",
        "option_c": "Thuốc phát hãn",
        "option_d": "Thuốc ôn trung",
        "answer": "B"
    },
    {
        "id": 79,
        "question": "Nguyên tắc “khí hành thì huyết hành” có ý nghĩa gì trong phối hợp thuốc lý huyết?",
        "option_a": "Khí hư thì chỉ dùng thuốc bổ huyết",
        "option_b": "Huyết nhiệt thì chỉ dùng thuốc ôn lý",
        "option_c": "Nên phối hợp thuốc hành khí để hỗ trợ lưu thông huyết",
        "option_d": "Huyết ứ thì không cần dùng thuốc lý huyết",
        "answer": "C"
    },
    {
        "id": 80,
        "question": "Theo tài liệu, đối tượng nào cần kiêng kỵ khi sử dụng thuốc lý huyết?",
        "option_a": "Phụ nữ có thai",
        "option_b": "Người trưởng thành khỏe mạnh",
        "option_c": "Người có thể trạng bình thường",
        "option_d": "Người không có biểu hiện huyết ứ",
        "answer": "A"
    },
    {
        "id": 81,
        "question": "Bệnh nhân đau bụng kinh, kinh nguyệt không đều, có biểu hiện huyết ứ. Vị thuốc nào sau đây thuộc nhóm hoạt huyết, điều kinh theo tài liệu?",
        "option_a": "Hoàng cầm",
        "option_b": "Tri mẫu",
        "option_c": "Hoàng bá",
        "option_d": "Ích mẫu",
        "answer": "D"
    },
    {
        "id": 82,
        "question": "Căn cứ vào tính chất hàn nhiệt của bệnh, thuốc hóa đờm được chia thành mấy loại?",
        "option_a": "2 loại",
        "option_b": "3 loại",
        "option_c": "4 loại",
        "option_d": "5 loại",
        "answer": "C"
    },
    {
        "id": 83,
        "question": "Thuốc thanh nhiệt hóa đờm thích hợp dùng trong trường hợp nào?",
        "option_a": "Hàn đàm do dương hư",
        "option_b": "Khí hư gây mệt mỏi",
        "option_c": "Huyết hư gây chóng mặt",
        "option_d": "Đàm nhiệt",
        "answer": "D"
    },
    {
        "id": 84,
        "question": "Vị thuốc nào sau đây thuộc nhóm thanh nhiệt hóa đờm?",
        "option_a": "Bán hạ",
        "option_b": "Bối mẫu",
        "option_c": "Bạch giới tử",
        "option_d": "Hạnh nhân",
        "answer": "C"
    },
    {
        "id": 85,
        "question": "Vị thuốc nào sau đây thuộc nhóm ôn hóa hàn đàm?",
        "option_a": "Bối mẫu",
        "option_b": "Tang bạch bì",
        "option_c": "Bán hạ",
        "option_d": "Tiền hồ",
        "answer": "B"
    },
    {
        "id": 86,
        "question": "Theo tài liệu, khi điều trị ho bằng YHCT cần lấy tạng nào làm chính?",
        "option_a": "Tâm",
        "option_b": "Can",
        "option_c": "Phế",
        "option_d": "Thận",
        "answer": "C"
    },
    {
        "id": 87,
        "question": "Ho do ngoại cảm phong hàn nên phối hợp thuốc chỉ khái với nhóm thuốc nào?",
        "option_a": "Thuốc bổ huyết",
        "option_b": "Thuốc hoạt huyết",
        "option_c": "Thuốc thanh nhiệt lương huyết",
        "option_d": "Thuốc phát tán phong hàn",
        "answer": "D"
    },
    {
        "id": 88,
        "question": "Khi ho có nguyên nhân liên quan đến đàm thấp, theo tài liệu nên phối hợp thuốc chỉ khái với nhóm thuốc nào?",
        "option_a": "Thuốc bổ huyết",
        "option_b": "Thuốc an thần",
        "option_c": "Thuốc kiện tỳ",
        "option_d": "Thuốc hoạt huyết",
        "answer": "C"
    },
    {
        "id": 89,
        "question": "Bạch giới tử có bộ phận dùng là gì?",
        "option_a": "Nhân hạt táo ta",
        "option_b": "Thân rễ mềm dẻo màu trắng ngà",
        "option_c": "Hạt nhỏ như hạt kê, màu vàng",
        "option_d": "Vỏ rễ cạo bỏ lớp bần",
        "answer": "B"
    },
    {
        "id": 90,
        "question": "Bạch giới tử có tác dụng nào sau đây?",
        "option_a": "Ôn phế trừ đờm, tiêu viêm, chỉ thống",
        "option_b": "Thanh phế, nhuận táo, tán kết",
        "option_c": "Dưỡng tâm an thần",
        "option_d": "Lợi thủy, tiêu phù",
        "answer": "A"
    },
    {
        "id": 91,
        "question": "Vị thuốc nào sau đây thuộc nhóm ôn phế chỉ khái theo tài liệu?",
        "option_a": "Hạnh nhân",
        "option_b": "Bối mẫu",
        "option_c": "Tang bạch bì",
        "option_d": "Tiền hồ",
        "answer": "B"
    },
    {
        "id": 92,
        "question": "Thuốc bổ được dùng chủ yếu để điều trị tình trạng nào?",
        "option_a": "Thực chứng do tà khí thịnh",
        "option_b": "Hư nhược của chính khí cơ thể",
        "option_c": "Bệnh do ngoại cảm mới mắc",
        "option_d": "Bệnh do ứ huyết cấp tính",
        "answer": "B"
    },
    {
        "id": 93,
        "question": "Thuốc bổ được chia thành mấy nhóm chính theo tài liệu?",
        "option_a": "2 nhóm",
        "option_b": "3 nhóm",
        "option_c": "4 nhóm",
        "option_d": "5 nhóm",
        "answer": "C"
    },
    {
        "id": 94,
        "question": "Bốn nhóm thuốc bổ chính là?",
        "option_a": "Bổ âm, bổ dương, bổ khí, bổ huyết",
        "option_b": "Bổ phế, bổ tâm, bổ can, bổ thận",
        "option_c": "Bổ hàn, bổ nhiệt, bổ biểu, bổ lý",
        "option_d": "Bổ tỳ, bổ vị, bổ đờm, bổ tiểu trường",
        "answer": "A"
    },
    {
        "id": 95,
        "question": "Khi sử dụng thuốc bổ, trước hết cần chú ý đến cơ quan nào?",
        "option_a": "Tâm",
        "option_b": "Can",
        "option_c": "Thận",
        "option_d": "Tỳ vị",
        "answer": "D"
    },
    {
        "id": 96,
        "question": "Đối với người có chứng hư lâu ngày, cách dùng thuốc bổ phù hợp là?",
        "option_a": "Dùng liều mạnh ngay từ đầu",
        "option_b": "Dùng thuốc bổ từ từ",
        "option_c": "Chỉ dùng thuốc thanh nhiệt",
        "option_d": "Không được dùng thuốc bổ",
        "answer": "B"
    },
    {
        "id": 97,
        "question": "Triệu chứng nào phù hợp với phế âm hư theo tài liệu?",
        "option_a": "Ăn nhiều, khát nhiều, tiểu nhiều",
        "option_b": "Đau bụng, tiêu chảy cấp",
        "option_c": "Ho lâu ngày, ho ra máu, ra mồ hôi trộm",
        "option_d": "Đau đầu do ngoại cảm phong hàn",
        "answer": "C"
    },
    {
        "id": 98,
        "question": "Triệu chứng nào gợi ý vị âm hư?",
        "option_a": "Chân tay lạnh, tiêu chảy",
        "option_b": "Miệng khát, môi khô, lưỡi khô",
        "option_c": "Ho có đờm trắng loãng",
        "option_d": "Đau bụng do hàn",
        "answer": "B"
    },
    {
        "id": 99,
        "question": "Vị thuốc nào sau đây thuộc nhóm thuốc bổ âm?",
        "option_a": "Ba kích",
        "option_b": "Hoàng kỳ",
        "option_c": "Mạch môn",
        "option_d": "Đảng sâm",
        "answer": "C"
    },
    {
        "id": 100,
        "question": "Triệu chứng nào phù hợp với thận dương hư theo tài liệu?",
        "option_a": "Lưng gối mỏi yếu, lạnh đau, tiểu tiện nhiều lần",
        "option_b": "Miệng khô, lưỡi đỏ, rêu ít",
        "option_c": "Ho khan, ho ra máu, mồ hôi trộm",
        "option_d": "Đau bụng cấp, nôn ói",
        "answer": "A"
    },
    {
        "id": 101,
        "question": "Vị thuốc nào sau đây thuộc nhóm thuốc bổ dương?",
        "option_a": "Mạch môn",
        "option_b": "Sa sâm",
        "option_c": "Đương quy",
        "option_d": "Ba kích",
        "answer": "C"
    },
    {
        "id": 102,
        "question": "Cẩu tích có tác dụng chính nào?",
        "option_a": "Thanh phế, dưỡng âm",
        "option_b": "Ôn dưỡng can thận, trừ phong thấp",
        "option_c": "Bổ trung ích khí",
        "option_d": "Bổ huyết, điều kinh",
        "answer": "B"
    },
    {
        "id": 103,
        "question": "Ba kích có tác dụng nổi bật nào?",
        "option_a": "Dưỡng vị âm",
        "option_b": "Bổ huyết, nhuận trường",
        "option_c": "Ôn thận dương, mạnh gân xương",
        "option_d": "Thanh phế, chỉ khái",
        "answer": "C"
    },
    {
        "id": 104,
        "question": "Khí hư thường gặp ở những tạng nào?",
        "option_a": "Phế và tỳ",
        "option_b": "Can và đởm",
        "option_c": "Tâm và tiểu trường",
        "option_d": "Thận và bàng quang",
        "answer": "A"
    },
    {
        "id": 105,
        "question": "Vị thuốc nào thuộc nhóm thuốc bổ khí?",
        "option_a": "Đảng sâm",
        "option_b": "Sa sâm",
        "option_c": "Ba kích",
        "option_d": "Thục địa",
        "answer": "A"
    },
    {
        "id": 106,
        "question": "Hoài sơn có tác dụng nào theo tài liệu?",
        "option_a": "Phát hãn, giải biểu",
        "option_b": "Tả hạ, công tích",
        "option_c": "Bổ tỳ vị, bổ phế âm, sinh tân",
        "option_d": "Bổ huyết, điều kinh",
        "answer": "C"
    },
    {
        "id": 107,
        "question": "Hoàng kỳ có tác dụng nào sau đây?",
        "option_a": "Bổ huyết, nhuận trường",
        "option_b": "Bổ thận dương, cố tinh",
        "option_c": "Bổ khí, cầm mồ hôi, lợi niệu",
        "option_d": "Thanh phế, hạ sốt",
        "answer": "C"
    },
    {
        "id": 108,
        "question": "Đại táo có vai trò nào trong bài thuốc thang theo tài liệu?",
        "option_a": "Làm thuốc công hạ",
        "option_b": "Làm sứ giả điều vị",
        "option_c": "Làm thuốc phát hãn",
        "option_d": "Làm thuốc trục ứ",
        "answer": "B"
    },
    {
        "id": 109,
        "question": "Vị thuốc nào sau đây thuộc nhóm thuốc bổ huyết?",
        "option_a": "Cẩu tích",
        "option_b": "Hoàng kỳ",
        "option_c": "Mạch môn",
        "option_d": "Thục địa",
        "answer": "A"
    },
    {
        "id": 110,
        "question": "Hà thủ ô đỏ có tác dụng dược lý chính nào theo tài liệu?",
        "option_a": "Thanh phế, dưỡng âm",
        "option_b": "Bổ huyết, cố tinh, bổ thận",
        "option_c": "Bổ khí, lợi niệu",
        "option_d": "Ôn trung, tán hàn",
        "answer": "B"
    },
    {
        "id": 111,
        "question": "Bộ phận dùng của Thục địa là?",
        "option_a": "Rễ củ đã được chế biến từ Sinh địa qua cửu chưng cửu sái",
        "option_b": "Quả chín đỏ",
        "option_c": "Vỏ thân",
        "option_d": "Hạt nhỏ màu đen",
        "answer": "A"
    },
    {
        "id": 112,
        "question": "Thuốc cố sáp thường có vị gì?",
        "option_a": "Cay, đắng",
        "option_b": "Ngọt, nhạt",
        "option_c": "Chát, chua",
        "option_d": "Mặn, cay",
        "answer": "A"
    },
    {
        "id": 113,
        "question": "Ba nhóm chính của thuốc cố sáp là gì?",
        "option_a": "Bổ khí, bổ huyết, bổ âm",
        "option_b": "Thanh nhiệt, giải độc, lợi niệu",
        "option_c": "Lý khí, hoạt huyết, hóa đàm",
        "option_d": "Liễm hãn, cố tinh sáp niệu, sáp trường chỉ tả",
        "answer": "D"
    },
    {
        "id": 114,
        "question": "Thuốc cố tinh sáp niệu thường dùng khi nào?",
        "option_a": "Ho do phế nhiệt",
        "option_b": "Nôn do thực tích",
        "option_c": "Thận hư gây di tinh, hoạt tinh, tiểu tiện nhiều lần",
        "option_d": "Kiết lỵ do thực nhiệt",
        "answer": "C"
    },
    {
        "id": 115,
        "question": "Thuốc sáp trường chỉ tả thường dùng trong trường hợp nào?",
        "option_a": "Tiêu chảy lâu ngày do tỳ hư",
        "option_b": "Tiêu chảy cấp do thực nhiệt chưa giải",
        "option_c": "Táo bón do nhiệt kết",
        "option_d": "Tiểu tiện khó do thấp nhiệt",
        "answer": "A"
    },
    {
        "id": 116,
        "question": "Bộ phận dùng của Ngũ vị tử là gì?",
        "option_a": "Rễ",
        "option_b": "Lá",
        "option_c": "Quả",
        "option_d": "Hạt",
        "answer": "C"
    },
    {
        "id": 117,
        "question": "Công năng chính của Sơn thù là gì?",
        "option_a": "Tiêu thực, hạ khí",
        "option_b": "Bổ thận, cố tinh, sáp niệu",
        "option_c": "Thanh nhiệt, chỉ lỵ",
        "option_d": "Liễm phế, chỉ khái",
        "answer": "B"
    },
    {
        "id": 118,
        "question": "Bộ phận dùng của Kim anh là gì?",
        "option_a": "Lá bánh tẻ",
        "option_b": "Hạt già màu nâu",
        "option_c": "Quả chín bổ đôi, bỏ hạt, phơi khô",
        "option_d": "Màng mề gà",
        "answer": "C"
    },
    {
        "id": 119,
        "question": "Kim anh có công năng nổi bật nào?",
        "option_a": "Thanh nhiệt, giải độc",
        "option_b": "Sáp tinh cố thận, chỉ tả",
        "option_c": "Phát hãn giải biểu",
        "option_d": "Tiêu thực, hồi nhũ",
        "answer": "B"
    },
    {
        "id": 120,
        "question": "Liên tử là vị thuốc được lấy từ bộ phận nào?",
        "option_a": "Quả mơ",
        "option_b": "Quả chín của cây sơn thù",
        "option_c": "Hạt củ cải",
        "option_d": "Hạt sen còn màng đỏ",
        "answer": "B"
    },
    {
        "id": 121,
        "question": "Liên tử có công năng nào sau đây?",
        "option_a": "Chỉ chuyên tiêu thực",
        "option_b": "Chỉ sát trùng",
        "option_c": "Ích thận cố tinh, bổ tỳ, chỉ tả",
        "option_d": "Chỉ thanh nhiệt",
        "answer": "C"
    },
    {
        "id": 122,
        "question": "Kha tử có công năng nào sau đây?",
        "option_a": "Bổ khí, hồi dương",
        "option_b": "Tiêu thực, hồi nhũ",
        "option_c": "Chỉ lợi tiểu",
        "option_d": "Liễm phế, cố thận, sáp trường, chỉ tả",
        "answer": "D"
    },
    {
        "id": 123,
        "question": "Phương pháp phân loại thuốc YHCT theo tính chất, lấy tính độc làm trung tâm chia thuốc thành?",
        "option_a": "Hàn, nhiệt, ôn, lương",
        "option_b": "Thượng phẩm, trung phẩm, hạ phẩm",
        "option_c": "Bổ, tả, hạ, hòa",
        "option_d": "Khí, huyết, âm, dương",
        "answer": "B"
    },
    {
        "id": 124,
        "question": "Đặc điểm chủ yếu của thượng phẩm là?",
        "option_a": "Chữa bệnh nặng, độc tính cao",
        "option_b": "Tác dụng mạnh, thường dùng trong bệnh cấp",
        "option_c": "Chủ yếu bổ dưỡng cơ thể, ít hoặc không độc",
        "option_d": "Chỉ dùng ngoài da",
        "answer": "C"
    },
    {
        "id": 125,
        "question": "Thuốc có vị cay, tính ấm, dùng để phát tán phong hàn được gọi là?",
        "option_a": "Tân lương giải biểu",
        "option_b": "Tân ôn giải biểu",
        "option_c": "Ôn trung",
        "option_d": "Ôn bổ",
        "answer": "B"
    },
    {
        "id": 126,
        "question": "Thuốc có vị cay, tính mát, dùng để phát tán phong nhiệt là?",
        "option_a": "Tân ôn giải biểu",
        "option_b": "Tân lương giải biểu",
        "option_c": "Ôn trung",
        "option_d": "Khử hàn",
        "answer": "B"
    },
    {
        "id": 127,
        "question": "Thuốc giải biểu chủ yếu có tác dụng?",
        "option_a": "Làm tiêu thức ăn",
        "option_b": "Đẩy ngoại tà ra ngoài, chủ yếu qua đường mồ hôi",
        "option_c": "Bổ khí huyết",
        "option_d": "Thu liễm mồ hôi",
        "answer": "B"
    },
    {
        "id": 128,
        "question": "Vị thuốc nào sau đây thuộc nhóm tân ôn giải biểu?",
        "option_a": "Bạc hà",
        "option_b": "Cúc hoa",
        "option_c": "Ma hoàng",
        "option_d": "Tang diệp",
        "answer": "C"
    },
    {
        "id": 129,
        "question": "Vị thuốc nào sau đây thuộc nhóm tân lương giải biểu?",
        "option_a": "Quế chi",
        "option_b": "Sinh khương",
        "option_c": "Ma hoàng",
        "option_d": "Bạc hà",
        "answer": "D"
    },
    {
        "id": 130,
        "question": "Quế chi thường được sử dụng trong trường hợp?",
        "option_a": "Biểu thực phong hàn, không mồ hôi",
        "option_b": "Biểu hư phong hàn, có mồ hôi",
        "option_c": "Phong nhiệt, họng đỏ",
        "option_d": "Âm hư ra mồ hôi trộm",
        "answer": "B"
    },
    {
        "id": 131,
        "question": "Vị thuốc có tác dụng phát hãn mạnh, bình suyễn, lợi niệu, chứa alkaloid ephedrin là?",
        "option_a": "Ma hoàng",
        "option_b": "Tía tô",
        "option_c": "Phòng phong",
        "option_d": "Kinh giới",
        "answer": "A"
    },
    {
        "id": 132,
        "question": "Vị thuốc nào có tác dụng phát tán phong hàn, lý khí, đồng thời được dùng trong nôn mửa và đầy trướng?",
        "option_a": "Tía tô",
        "option_b": "Cúc hoa",
        "option_c": "Cát căn",
        "option_d": "Tang diệp",
        "answer": "A"
    },
    {
        "id": 133,
        "question": "Vị thuốc nào có tác dụng phát tán phong nhiệt, sinh tân chỉ khát?",
        "option_a": "Cát căn",
        "option_b": "Quế chi",
        "option_c": "Tế tân",
        "option_d": "Phòng phong",
        "answer": "A"
    },
    {
        "id": 134,
        "question": "Vị thuốc Bạc hà có tính?",
        "option_a": "Cay, ấm",
        "option_b": "Cay, mát",
        "option_c": "Đắng, nóng",
        "option_d": "Chua, ấm",
        "answer": "B"
    },
    {
        "id": 135,
        "question": "Vị thuốc nào sau đây có tác dụng phát tán phong nhiệt, giải độc, giáng hỏa, thường dùng khi đau đầu, hoa mắt, chóng mặt?",
        "option_a": "Cúc hoa",
        "option_b": "Ma hoàng",
        "option_c": "Quế chi",
        "option_d": "Tế tân",
        "answer": "A"
    },
    {
        "id": 136,
        "question": "Khí hậu bốn mùa thuộc quy luật nào trong học thuyết Âm dương?",
        "option_a": "Hỗ căn.",
        "option_b": "Tiêu trưởng.",
        "option_c": "Đối lập.",
        "option_d": "Bình hành.",
        "answer": "B"
    },
    {
        "id": 137,
        "question": "Theo YHCT, Tạng Can thuộc hành nào?",
        "option_a": "Mộc.",
        "option_b": "Hỏa.",
        "option_c": "Kim.",
        "option_d": "Thổ.",
        "answer": "A"
    },
    {
        "id": 138,
        "question": "Cặp tương sinh, ngoại trừ?",
        "option_a": "Mộc - Hỏa.",
        "option_b": "Hỏa - Thổ.",
        "option_c": "Thổ - Kim.",
        "option_d": "Kim - Mộc.",
        "answer": "D"
    },
    {
        "id": 139,
        "question": "“Hư tà” là gì?",
        "option_a": "Do bản thân tạng phủ ấy có bệnh.",
        "option_b": "Do tạng trước nó gây bệnh cho tạng đó, còn gọi là bệnh từ mẹ truyền sang con.",
        "option_c": "Do tạng sau nó gây bệnh cho tạng đó, còn gọi là bệnh từ con truyền sang mẹ.",
        "option_d": "Do tạng khác tạng đó không khắc được mà gây ra bệnh (tương thừa).",
        "answer": "B"
    },
    {
        "id": 140,
        "question": "Gan khai khiếu?",
        "option_a": "Mắt.",
        "option_b": "Tai.",
        "option_c": "Mũi.",
        "option_d": "Miệng.",
        "answer": "A"
    },
    {
        "id": 141,
        "question": "Quy luật “Âm dương hỗ căn” thể hiện?",
        "option_a": "Hai mặt đối kháng nhau hoàn toàn.",
        "option_b": "Hai mặt nương tựa nhau để tồn tại.",
        "option_c": "Âm chuyển thành dương.",
        "option_d": "Dương chuyển thành âm.",
        "answer": "B"
    },
    {
        "id": 142,
        "question": "Sốt cao kéo dài gây mất nước là biểu hiện?",
        "option_a": "Âm thắng tắc dương bệnh.",
        "option_b": "Dương thắng tắc âm bệnh.",
        "option_c": "Âm hư sinh ngoại hàn.",
        "option_d": "Dương hư sinh nội nhiệt.",
        "answer": "B"
    },
    {
        "id": 143,
        "question": "Người bệnh sợ lạnh, tay chân lạnh, tiêu chảy, tiểu trong thuộc hội chứng?",
        "option_a": "Nhiệt chứng.",
        "option_b": "Âm hư.",
        "option_c": "Hàn chứng.",
        "option_d": "Dương thịnh.",
        "answer": "C"
    },
    {
        "id": 144,
        "question": "Nguyên tắc “Hư thì bổ mẹ” được áp dụng khi?",
        "option_a": "Phế khí hư → kiện Tỳ.",
        "option_b": "Can dương thịnh → tả Tâm.",
        "option_c": "Tâm hỏa vượng → bổ Can.",
        "option_d": "Thận âm hư → tả Thận.",
        "answer": "A"
    },
    {
        "id": 145,
        "question": "Mất ngủ, hồi hộp, di tinh thường gặp khi?",
        "option_a": "Tâm Thận giao hòa.",
        "option_b": "Tâm Thận bất giao.",
        "option_c": "Can Tỳ hòa hợp.",
        "option_d": "Phế Thận tương sinh.",
        "answer": "B"
    },
    {
        "id": 146,
        "question": "Mắt đỏ, cáu gắt, đau đầu thường liên quan đến?",
        "option_a": "Tỳ hư.",
        "option_b": "Can hỏa vượng.",
        "option_c": "Phế khí hư.",
        "option_d": "Thận dương hư.",
        "answer": "B"
    },
    {
        "id": 147,
        "question": "Kinh lạc có tác dụng?",
        "option_a": "Thông hành khí huyết.",
        "option_b": "Liên kết tạng phủ với cơ thể.",
        "option_c": "Chống ngoại tà.",
        "option_d": "Cả A, B, C.",
        "answer": "D"
    },
    {
        "id": 148,
        "question": "Người thường xuyên khuya, căng thẳng, ăn uống thất thường dẫn đến bệnh tật. Học thuyết giải thích phù hợp nhất là:",
        "option_a": "Kinh lạc.",
        "option_b": "Ngũ hành.",
        "option_c": "Tạng tượng.",
        "option_d": "Thiên nhân hợp nhất.",
        "answer": "D"
    },
    {
        "id": 149,
        "question": "Lục khí gồm?",
        "option_a": "Phong, Hàn, Thử, Thấp, Táo, Hỏa.",
        "option_b": "Phong, Hàn, Nhiệt, Hỏa, Đàm, Thấp.",
        "option_c": "Hàn, Thử, Đàm, Hỏa, Táo, Thấp.",
        "option_d": "Phong, Hàn, Huyết, Khí, Táo, Hỏa.",
        "answer": "A"
    },
    {
        "id": 150,
        "question": "Theo YHCT “Tâm” là cơ quan nào?",
        "option_a": "Tim.",
        "option_b": "Gan.",
        "option_c": "Lá lách.",
        "option_d": "Phổi.",
        "answer": "A"
    },
    {
        "id": 151,
        "question": "Tạng thuộc cơ quan nào?",
        "option_a": "Bàng quang.",
        "option_b": "Tiểu trường.",
        "option_c": "Đại trường.",
        "option_d": "Gan.",
        "answer": "D"
    },
    {
        "id": 152,
        "question": "Người có bệnh chóng mặt, da xanh, móng khô là biểu hiện bệnh ở tạng?",
        "option_a": "Can.",
        "option_b": "Tâm.",
        "option_c": "Tỳ.",
        "option_d": "Thận.",
        "answer": "A"
    },
    {
        "id": 153,
        "question": "Ngũ tạng bao gồm có?",
        "option_a": "Tâm, Can, Tỳ, Phế, Thận.",
        "option_b": "Tâm, Can, Tam tiêu, Phế, Đởm.",
        "option_c": "Can, Vị, Phế, Thận, Bàng quang.",
        "option_d": "Tâm, Can, Tỳ, Phế, Thận, Tam tiêu",
        "answer": "A"
    },
    {
        "id": 154,
        "question": "Tạng Can có chức năng?",
        "option_a": "Sự vận hành tuần hoàn của huyết dịch.",
        "option_b": "Điều tiết lượng huyết.",
        "option_c": "Sinh huyết, công dụng thống nhiếp huyết dịch.",
        "option_d": "Các câu trên đều đúng.",
        "answer": "B"
    },
    {
        "id": 155,
        "question": "Chứng bệnh kém phát triển, trí tuệ đần độn thuộc tạng?",
        "option_a": "Tâm.",
        "option_b": "Can.",
        "option_c": "Tỳ.",
        "option_d": "Thận.",
        "answer": "D"
    },
    {
        "id": 156,
        "question": "Cơ thể người có bao nhiêu đường kinh chính?",
        "option_a": "8 đường kinh chính.",
        "option_b": "10 đường kinh chính.",
        "option_c": "12 đường kinh chính.",
        "option_d": "14 đường kinh chính.",
        "answer": "C"
    },
    {
        "id": 157,
        "question": "Theo WHO, số huyệt kinh điển trên 14 kinh mạch được công nhận là?",
        "option_a": "280 huyệt.",
        "option_b": "320 huyệt.",
        "option_c": "361 huyệt.",
        "option_d": "500 huyệt.",
        "answer": "C"
    },
    {
        "id": 158,
        "question": "Kinh nào sau đây thuộc nhóm Thủ Thái âm?",
        "option_a": "Kinh Tâm.",
        "option_b": "Kinh Phế.",
        "option_c": "Kinh Đại trường.",
        "option_d": "Kinh Tâm bào.",
        "answer": "B"
    },
    {
        "id": 159,
        "question": "Kinh Đại trường thuộc nhóm nào?",
        "option_a": "Thủ Dương minh.",
        "option_b": "Thủ Thiếu dương.",
        "option_c": "Túc Dương minh.",
        "option_d": "Túc Thái dương.",
        "answer": "A"
    },
    {
        "id": 160,
        "question": "Theo YHCT, khi gió độc tạng nào bị ảnh hưởng?",
        "option_a": "Can",
        "option_b": "Tâm",
        "option_c": "Tỳ",
        "option_d": "Phế",
        "answer": "A"
    },
    {
        "id": 161,
        "question": "Triệu chứng của “Phong hàn”?",
        "option_a": "Cảm lạnh.",
        "option_b": "Sốt.",
        "option_c": "Nước tiểu vàng.",
        "option_d": "Rêu lưỡi vàng.",
        "answer": "A"
    },
    {
        "id": 162,
        "question": "Thử chủ khí về mùa?",
        "option_a": "Mùa xuân.",
        "option_b": "Mùa hè.",
        "option_c": "Mùa đông.",
        "option_d": "Mùa thu.",
        "answer": "B"
    },
    {
        "id": 163,
        "question": "Theo YHCT, đặc tính của táo?",
        "option_a": "Nóng.",
        "option_b": "Mát.",
        "option_c": "Khô.",
        "option_d": "Lạnh.",
        "answer": "C"
    },
    {
        "id": 164,
        "question": "Theo YHCT, ngoại nhân gây bệnh có bao nhiêu loại?",
        "option_a": "5.",
        "option_b": "6.",
        "option_c": "7.",
        "option_d": "8.",
        "answer": "B"
    },
    {
        "id": 165,
        "question": "Vì sao giận dữ kéo dài dễ gây tăng huyết áp theo YHCT?",
        "option_a": "Làm khí hạ.",
        "option_b": "Làm khí tiêu.",
        "option_c": "Làm khí thăng, Can dương bốc lên.",
        "option_d": "Làm khí kết.",
        "answer": "C"
    },
    {
        "id": 166,
        "question": "Đặc điểm nào sau đây phù hợp với thấp tà?",
        "option_a": "Khô họng, táo bón.",
        "option_b": "Mắt đỏ, sốt cao.",
        "option_c": "Miệng dính nhớt, người nặng nề.",
        "option_d": "Co giật.",
        "answer": "C"
    },
    {
        "id": 167,
        "question": "Người bệnh ho khan, họng khô, ít đờm thường do?",
        "option_a": "Phong.",
        "option_b": "Hàn.",
        "option_c": "Thấp.",
        "option_d": "Táo.",
        "answer": "D"
    },
    {
        "id": 168,
        "question": "Bệnh nhân tiêu chảy kéo dài, sợ lạnh, tay chân lạnh, ăn kém. Chứng bệnh phù hợp là?",
        "option_a": "Tỳ vị hư hàn.",
        "option_b": "Táo nhiệt.",
        "option_c": "Thử nhiệt.",
        "option_d": "Can hỏa.",
        "answer": "A"
    },
    {
        "id": 169,
        "question": "Người bệnh sốt cao, khát nước, mặt đỏ, họng đỏ đau, tiểu vàng, rêu lưỡi vàng thuộc?",
        "option_a": "Hàn chứng.",
        "option_b": "Hư hàn.",
        "option_c": "Nhiệt chứng.",
        "option_d": "Thấp chứng.",
        "answer": "C"
    },
    {
        "id": 170,
        "question": "Khi điều trị chứng thấp nhiệt ở đường tiết niệu theo nguyên tắc YHCT cần?",
        "option_a": "Ôn dương tán hàn.",
        "option_b": "Bổ âm dưỡng huyết.",
        "option_c": "Thanh nhiệt, lợi thấp.",
        "option_d": "Bình can tức phong.",
        "answer": "C"
    },
    {
        "id": 171,
        "question": "Theo YHCT, tứ chẩn là gì?",
        "option_a": "Vọng (nhìn) - Văn (nghe) - Vấn (hỏi) - Thiết (sờ).",
        "option_b": "Vọng (nghe) - Văn (nhìn) - Vấn (hỏi) - Thiết (sờ).",
        "option_c": "Vọng (nhìn) - Văn (nghe) - Thiết (sờ) - Vấn (hỏi).",
        "option_d": "Vọng (nghe) - Văn (nhìn) - Vấn (sờ) - Thiết (hỏi).",
        "answer": "A"
    },
    {
        "id": 172,
        "question": "Theo YHCT, sắc đỏ?",
        "option_a": "Biểu hiện cho sự viêm nhiệt.",
        "option_b": "Do thấp nhiệt, hàn thấp",
        "option_c": "Do hư, hàn, thiếu máu",
        "option_d": "Do thận hư, thận hư tinh suy kiệt",
        "answer": "A"
    },
    {
        "id": 173,
        "question": "Theo YHCT, sắc trắng?",
        "option_a": "Biểu hiện cho sự viêm nhiệt",
        "option_b": "Do thấp nhiệt, hàn thấp",
        "option_c": "Do hư, hàn, thiếu máu.",
        "option_d": "Do thận hư, thận hư tinh suy kiệt",
        "answer": "C"
    },
    {
        "id": 174,
        "question": "Theo YHCT, thiết chẩn dùng để?",
        "option_a": "Xem mạch.",
        "option_b": "Nghe tiếng thở",
        "option_c": "Nhìn sắc mặt.",
        "option_d": "Hỏi tiền sử bệnh",
        "answer": "A"
    },
    {
        "id": 175,
        "question": "Dấu hiệu \"Hư Chứng\"?",
        "option_a": "Tiếng nói nhỏ, hụt hơi, không đủ sức.",
        "option_b": "Tiếng nói to, vang, mạnh.",
        "option_c": "Nói ngọng, khó nói.",
        "option_d": "Hay nói, nói 1 mình.",
        "answer": "A"
    },
    {
        "id": 176,
        "question": "Trong YHCT, tứ chẩn có vai trò gì?",
        "option_a": "Điều trị bệnh.",
        "option_b": "Bào chế thuốc",
        "option_c": "Thu thập triệu chứng để chẩn đoán bệnh",
        "option_d": "Phòng bệnh",
        "answer": "C"
    },
    {
        "id": 177,
        "question": "Bệnh nhân mắt lờ đờ, tinh thần thờ ơ, nói yếu, mệt mỏi kéo dài. Theo vọng chẩn, đây là biểu hiện?",
        "option_a": "Còn thần.",
        "option_b": "Thất thần.",
        "option_c": "Thực nhiệt.",
        "option_d": "Huyết ứ.",
        "answer": "B"
    },
    {
        "id": 178,
        "question": "Trong quá trình khám, thầy thuốc quan sát lưỡi, nghe tiếng nói, hỏi tiền sử bệnh và bắt mạch. Đây là sự vận dụng?",
        "option_a": "Chỉ vọng chẩn.",
        "option_b": "Chỉ văn chẩn.",
        "option_c": "Chỉ thiết chẩn.",
        "option_d": "Kết hợp đầy đủ tứ chẩn",
        "answer": "D"
    },
    {
        "id": 179,
        "question": "Bệnh nhân ho kèm hắt hơi, sổ mũi. Theo văn chẩn có thể nghĩ nhiều đến?",
        "option_a": "Phong hàn.",
        "option_b": "Huyết hư.",
        "option_c": "Thận hư.",
        "option_d": "Huyết ứ.",
        "answer": "A"
    },
    {
        "id": 180,
        "question": "Quan sát lưỡi có giá trị vì?",
        "option_a": "Lưỡi ít thay đổi khi cơ thể bệnh.",
        "option_b": "Lưỡi phản ánh nhanh những thay đổi của cơ thể.",
        "option_c": "Lưỡi chỉ phản ánh bệnh của miệng-",
        "option_d": "Chỉ dùng để xác định nhiệt chứng.",
        "answer": "B"
    },
    {
        "id": 181,
        "question": "Phương pháp thích hợp để chữa bệnh ở biểu là?",
        "option_a": "Phép thanh",
        "option_b": "Phép hạ",
        "option_c": "Phát tán",
        "option_d": "Bổ",
        "answer": "C"
    },
    {
        "id": 182,
        "question": "Hai cương Biểu và lý để đánh giá bệnh?",
        "option_a": "Hai cương để tìm vị trí nông sâu của bệnh tật",
        "option_b": "Hai cương dùng để đánh giá tính chất của bệnh",
        "option_c": "Hai cương dùng để đánh giá trạng thái người bệnh",
        "option_d": "Hai cương tổng quát dùng để đánh giá xu thế chung của bệnh tật",
        "answer": "A"
    },
    {
        "id": 183,
        "question": "Hai cương Hàn và nhiệt đánh giá bệnh?",
        "option_a": "Hai cương để tìm vị trí nông sâu của bệnh tật",
        "option_b": "Hai cương dùng để đánh giá tính chất của bệnh",
        "option_c": "Hai cương dùng để đánh giá trạng thái người bệnh",
        "option_d": "Hai cương tổng quát để đánh giá xu thế chung của bệnh tật",
        "answer": "B"
    },
    {
        "id": 184,
        "question": "Hai cương Âm và dương trong bát cương để nói lên tính chất?",
        "option_a": "Hai cương để tìm vị trí nông sâu của bệnh tật",
        "option_b": "Hai cương dùng để đánh giá tính chất của bệnh",
        "option_c": "Hai cương dùng để đánh giá trạng thái người bệnh",
        "option_d": "Hai cương tổng quát để đánh giá xu thế chung của bệnh tật",
        "answer": "D"
    },
    {
        "id": 185,
        "question": "Làm ra mồ hôi là phương pháp?",
        "option_a": "Hãn.",
        "option_b": "Thổ",
        "option_c": "Hòa.",
        "option_d": "Thanh",
        "answer": "A"
    },
    {
        "id": 186,
        "question": "Bệnh nhân suy nhược cơ thể, ăn uống kém, mệt mỏi kéo dài nên dùng?",
        "option_a": "Hạ pháp.",
        "option_b": "Thanh pháp.",
        "option_c": "Tiêu pháp.",
        "option_d": "Bổ pháp.",
        "answer": "D"
    },
    {
        "id": 187,
        "question": "Bệnh nhân phù do ứ nước nên ưu tiên?",
        "option_a": "Tiêu thũng.",
        "option_b": "Hãn pháp.",
        "option_c": "Thanh pháp.",
        "option_d": "Thổ pháp.",
        "answer": "A"
    },
    {
        "id": 188,
        "question": "Người bệnh chân tay lạnh, sợ lạnh, tiêu lỏng kéo dài nên dùng?",
        "option_a": "Thanh pháp",
        "option_b": "Ôn pháp",
        "option_c": "Hạ pháp",
        "option_d": "Tiêu pháp",
        "answer": "B"
    },
    {
        "id": 189,
        "question": "Người bệnh ngộ độc thức ăn còn ở dạ dày nên dùng?",
        "option_a": "Hòa pháp.",
        "option_b": "Thổ pháp.",
        "option_c": "Ôn pháp.",
        "option_d": "Bổ pháp",
        "answer": "B"
    },
    {
        "id": 190,
        "question": "Người bệnh cảm lạnh, sợ lạnh, đau đầu, không ra mồ hôi nên dùng?",
        "option_a": "Hãn pháp.",
        "option_b": "Thanh pháp.",
        "option_c": "Tiêu pháp.",
        "option_d": "Bổ pháp.",
        "answer": "A"
    },
    {
        "id": 191,
        "question": "Tác dụng của phương thuốc Độc Sâm Thang?",
        "option_a": "Thanh nhiệt, giáng hoá",
        "option_b": "Bổ khí, bổ huyết",
        "option_c": "Bổ thận âm, lợi niệu",
        "option_d": "Tiết nhiệt, dưỡng âm",
        "answer": "B"
    },
    {
        "id": 192,
        "question": "Thành phần trong phương thuốc tuân thủ theo quy ước?",
        "option_a": "Vị trí ngôi thứ của chế độ phong kiến: Quân, Thần, Sứ, Tá",
        "option_b": "Vị trí ngôi thứ của chế độ quân chủ: Thần, Tá, Quân, Sứ",
        "option_c": "Vị trí ngôi thứ của chế độ phong kiến: Quân, Thần, Tá, Sứ",
        "option_d": "Vị trí ngôi thứ của chế độ quân chủ: Quân, Sứ, Thần, Tá",
        "answer": "C"
    },
    {
        "id": 193,
        "question": "Vị thuốc có tác dụng dẫn thuốc vào 12 kinh, hòa hoãn sự mãnh liệt phương thuốc?",
        "option_a": "Quân",
        "option_b": "Thần",
        "option_c": "Tả",
        "option_d": "Sứ",
        "answer": "D"
    },
    {
        "id": 194,
        "question": "Vị thuốc nào thường đóng vai trò Sứ trong phương?",
        "option_a": "Bạch truật",
        "option_b": "Cam thảo",
        "option_c": "Bạch thược",
        "option_d": "Phục linh",
        "answer": "B"
    },
    {
        "id": 195,
        "question": "Trong YHCT một đồng cân tương đương với?",
        "option_a": "3g78",
        "option_b": "37g8",
        "option_c": "38g7",
        "option_d": "378g",
        "answer": "A"
    },
    {
        "id": 196,
        "question": "Trong phương thuốc, vị Thần có vai trò nào sau đây?",
        "option_a": "Chỉ dẫn thuốc vào kinh hỗ trợ vị Quân và giải quyết thêm một khía cạnh của bệnh",
        "option_b": "Hỗ trợ vị Quân và giải quyết thêm một khía cạnh của bệnh",
        "option_c": "Làm giảm độc tính của thuốc",
        "option_d": "Chỉ điều trị triệu chứng phụ",
        "answer": "B"
    },
    {
        "id": 197,
        "question": "Thời điểm uống thuốc YHCT phù hợp nhất trong đa số trường hợp là?",
        "option_a": "Ngay khi quá đói",
        "option_b": "Sau ăn khoảng 1 giờ 30 phút đến 2 giờ",
        "option_c": "Ngay sau ăn no",
        "option_d": "Chỉ uống vào buổi sáng sớm",
        "answer": "B"
    },
    {
        "id": 198,
        "question": "Các vị thuốc chứa nhiều tinh dầu, chất dễ bay hơi thường được sắc?",
        "option_a": "Lâu với lửa lớn",
        "option_b": "Nhanh, thời gian ngắn sau khi sôi",
        "option_c": "Qua đêm trước khi uống",
        "option_d": "Không cần đun sôi",
        "answer": "B"
    },
    {
        "id": 199,
        "question": "Dụng cụ được khuyến khích dùng để sắc thuốc YHCT là?",
        "option_a": "Nồi đồng",
        "option_b": "Nồi gang",
        "option_c": "Siêu đất",
        "option_d": "Nồi sắt",
        "answer": "C"
    },
    {
        "id": 200,
        "question": "Công năng của phương thuốc được xác định chủ yếu dựa vào?",
        "option_a": "Tác dụng riêng của từng vị Tá",
        "option_b": "Mùi vị của các vị thuốc",
        "option_c": "Công năng của Quân và Thần",
        "option_d": "Số lượng vị thuốc trong phương",
        "answer": "C"
    },
    {
        "id": 201,
        "question": "Tương tu?",
        "option_a": "Hai loại thuốc cùng một tác dụng hỗ trợ kết quả cho nhau.",
        "option_b": "Hai loại thuốc trở lên dùng chung, một thứ là chính một thứ là phụ để nâng cao hiệu quả chữa bệnh.",
        "option_c": "Khi một thứ thuốc có tác dụng xấu dùng chung với một vị khác để chế ngự: Thí dụ: Bán hạ sống gây ngứa dùng với Gừng cho hết ngứa.",
        "option_d": "Một vị thuốc có độc, dùng với một vị khác để tiêu trừ độc tính trở lên không độc.",
        "answer": "A"
    },
    {
        "id": 202,
        "question": "Mang tiêu mặn và đen quy kinh?",
        "option_a": "Thận",
        "option_b": "Gan",
        "option_c": "Phế",
        "option_d": "Tâm",
        "answer": "A"
    },
    {
        "id": 203,
        "question": "Vị thuốc có vị cay (tân) có tác dụng?",
        "option_a": "Bổ dưỡng.",
        "option_b": "Tả hạ.",
        "option_c": "Thu liễm, cổ sáp.",
        "option_d": "Phát tán, hành khí, hành huyết",
        "answer": "D"
    },
    {
        "id": 204,
        "question": "Khi uống thuốc thanh nhiệt, người bệnh nên kiêng loại thực phẩm nào?",
        "option_a": "Cháo loãng.",
        "option_b": "Rau xanh",
        "option_c": "Rượu, ớt và thức ăn cay nóng",
        "option_d": "Nước ấm",
        "answer": "C"
    },
    {
        "id": 205,
        "question": "Trong thành phần phương thuốc cổ truyền, vị thuốc giữ vai trò chính để giải quyết triệu chứng chủ yếu?",
        "option_a": "Tá",
        "option_b": "Sứ",
        "option_c": "Quân",
        "option_d": "Thần",
        "answer": "C"
    },
    {
        "id": 206,
        "question": "Bộ phận nào của cây thuốc thường được thu hái vào đầu xuân, cuối thu hoặc mùa đông để đạt hàm lượng hoạt chất cao nhất?",
        "option_a": "Hoa và lá",
        "option_b": "Quả và hạt",
        "option_c": "Gốc, củ, vỏ, rễ",
        "option_d": "Mầm non",
        "answer": "C"
    },
    {
        "id": 207,
        "question": "Trong tứ khí của thuốc YHCT, nhóm nào thuộc dương dược?",
        "option_a": "Hàn - Lương",
        "option_b": "Bình - Hàn",
        "option_c": "Ôn - Nhiệt",
        "option_d": "Lương - Bình",
        "answer": "C"
    },
    {
        "id": 208,
        "question": "Thuốc có tính \"thăng phù\" thường có xu hướng tác dụng như thế nào?",
        "option_a": "Đi xuống và vào trong",
        "option_b": "Phát tán ra ngoài và đi lên",
        "option_c": "Làm mềm khối cứng",
        "option_d": "Thu liễm và cổ sáp",
        "answer": "B"
    },
    {
        "id": 209,
        "question": "Theo nguyên tắc bổ tả trong YHCT, chứng hư thì dùng phương pháp nào?",
        "option_a": "Tả",
        "option_b": "Công hạ",
        "option_c": "Phát tán",
        "option_d": "Bổ",
        "answer": "D"
    },
    {
        "id": 210,
        "question": "Cặp thuốc nào sau đây thuộc nhóm tương phản, không nên phối hợp?",
        "option_a": "Cam thảo - Đại tảo",
        "option_b": "Ô đầu - Bán hạ",
        "option_c": "Sinh khương - Đại táo",
        "option_d": "Hoàng kỳ - Đảng sảm",
        "answer": "B"
    },
    {
        "id": 211,
        "question": "Thuốc khu phong trừ thấp thường được sử dụng để điều trị?",
        "option_a": "Chứng tý, đau khớp, đau xương, đau dây thần kinh",
        "option_b": "Táo bón do tích trệ",
        "option_c": "Mất ngủ đơn thuần",
        "option_d": "Ho do phế âm hư",
        "answer": "A"
    },
    {
        "id": 212,
        "question": "Theo lý luận YHCT, khi điều trị bệnh xương khớp mạn tính, có thể phối hợp thuốc bổ thận vì?",
        "option_a": "Thận chủ huyết",
        "option_b": "Thận chủ cân",
        "option_c": "Thận chủ cốt tủy",
        "option_d": "Thận chủ biểu",
        "answer": "C"
    },
    {
        "id": 213,
        "question": "Vị thuốc nào sau đây có tác dụng bổ can thận, mạnh gân xương, an thai, thường dùng trong đau khớp, đau lưng?",
        "option_a": "Tang ký sinh",
        "option_b": "Thương truật",
        "option_c": "Khương hoạt",
        "option_d": "Ké đầu ngựa",
        "answer": "A"
    },
    {
        "id": 214,
        "question": "Vị thuốc nào sau đây chứa aconitin và có độc tính cao?",
        "option_a": "Ngũ gia bì",
        "option_b": "Ô đầu",
        "option_c": "Mộc qua",
        "option_d": "Thổ phục linh",
        "answer": "B"
    },
    {
        "id": 215,
        "question": "Một người bệnh đau khớp, đau lưng từ thắt lưng trở xuống, do phong hàn thấp. Vị thuốc nào có đặc điểm phù hợp nhất?",
        "option_a": "Độc hoạt",
        "option_b": "Bạc hà",
        "option_c": "Cát căn",
        "option_d": "Cúc hoa",
        "answer": "A"
    },
    {
        "id": 216,
        "question": "Vị thuốc nào vừa có tác dụng trừ phong thấp, lợi niệu, vừa có tác dụng mạnh gân cốt?",
        "option_a": "Ngũ gia bì",
        "option_b": "Cát căn",
        "option_c": "Bạc hà",
        "option_d": "Tang diệp",
        "answer": "A"
    },
    {
        "id": 217,
        "question": "Vị thuốc Khương hoạt có đặc điểm nổi bật nào sau đây?",
        "option_a": "Trừ phong thấp, giảm đau, thường dùng trong đau khớp và đau cơ do lạnh",
        "option_b": "Thanh nhiệt, sinh tân chỉ khát",
        "option_c": "Bổ khí, thăng dương",
        "option_d": "Tả hạ, thông tiện",
        "answer": "A"
    }
];
