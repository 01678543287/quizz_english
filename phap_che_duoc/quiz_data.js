const quizData = [
    {
        "id": 1,
        "question": "Theo quy định quản lý thuốc gây nghiện, trường hợp nào dưới đây không phải là thuốc gây nghiện:",
        "option_a": "Thuốc thành phẩm có chứa hoạt chất gây nghiện ở dạng đơn chất",
        "option_b": "Thuốc thành phẩm có chứa hoạt chất gây nghiện ở dạng phối hợp",
        "option_c": "Thuốc có dược chất gây nghiện thuộc danh mục do Bộ Y tế ban hành",
        "option_d": "Thuốc thành phẩm gây nghiện ở dạng đơn chất dùng đường tiêm",
        "answer": "B"
    },
    {
        "id": 2,
        "question": "Thuốc hướng thần là loại thuốc chứa:",
        "option_a": "Thuốc thành phẩm có chứa hoạt chất gây nghiện ở dạng đơn chất",
        "option_b": "Thuốc thành phẩm có chứa tiền chất dùng làm thuốc ở dạng đơn chất",
        "option_c": "Thuốc thành phẩm có chứa hoạt chất hướng thần ở dạng phối hợp",
        "option_d": "Thuốc thành phẩm có chứa hoạt chất kháng sinh ở dạng phối hợp",
        "answer": "C"
    },
    {
        "id": 3,
        "question": "Thuốc tiền chất là thuốc chứa?",
        "option_a": "Một hoặc nhiều chất gây nghiện dùng làm thuốc",
        "option_b": "Một hoặc nhiều chất hướng thần dùng làm thuốc",
        "option_c": "Một hoặc nhiều chất phóng xạ dùng làm thuốc",
        "option_d": "Một hoặc nhiều tiền chất dùng làm thuốc",
        "answer": "D"
    },
    {
        "id": 4,
        "question": "Khi bảo quản thuốc gây nghiện cơ sở phải đáp ứng yêu cầu nào sau đây?",
        "option_a": "Kho có tường rào thấp, cửa gỗ thông thường, khóa cài đơn giản",
        "option_b": "Kho bảo quản chung với các loại thuốc thông thường khác",
        "option_c": "Kho có mái che, thông thoáng, không cần cửa và khóa riêng",
        "option_d": "Kho có tường và trần kiên cố, có cửa, có khóa chắc chắn",
        "answer": "D"
    },
    {
        "id": 5,
        "question": "Theo quy định, người quản lý chuyên môn thuốc phải kiểm soát đặc biệt cần có bằng cấp:",
        "option_a": "Bằng cao đẳng ngành dược",
        "option_b": "Bằng đại học ngành dược",
        "option_c": "Bằng trung cấp ngành dược",
        "option_d": "Bằng cử nhân ngành kế toán",
        "answer": "B"
    },
    {
        "id": 6,
        "question": "Người chịu trách nhiệm ghi chép và báo cáo về việc bán thuốc gây nghiện là:",
        "option_a": "Nhân viên bán hàng trực tiếp tại quầy",
        "option_b": "Nhân viên kế toán của cơ sở bán thuốc",
        "option_c": "Người chịu trách nhiệm cơ sở bán thuốc",
        "option_d": "Cán bộ thanh tra của Sở Y tế địa phương",
        "answer": "C"
    },
    {
        "id": 7,
        "question": "Đối với cơ sở thuốc gây nghiện, thuốc hướng thần, người chịu trách nhiệm là ai?",
        "option_a": "Người có bằng trung cấp ngành dược",
        "option_b": "Người có bằng đại học ngành kinh tế",
        "option_c": "Người có bằng cao đẳng ngành điều dưỡng",
        "option_d": "Người có bằng đại học ngành dược",
        "answer": "D"
    },
    {
        "id": 8,
        "question": "Theo quy định về cấp phát, sử dụng thuốc, cơ sở nào phải tuân thủ các yêu cầu cấp phát thuốc cho người bệnh?",
        "option_a": "Cơ sở bán buôn thuốc",
        "option_b": "Cơ sở khám bệnh, chữa bệnh",
        "option_c": "Cơ sở kiểm nghiệm thuốc",
        "option_d": "Cơ sở nhập khẩu nguyên liệu",
        "answer": "B"
    },
    {
        "id": 9,
        "question": "Theo quy định, khi giao nhận thuốc, người nhận thuốc phải làm nhiệm vụ:",
        "option_a": "Chỉ kiểm tra số lượng thuốc; bỏ qua việc ghi sổ sách và thủ tục hành chính; không cần kiểm tra nguồn gốc thuốc",
        "option_b": "Chỉ ký xác nhận vào phiếu giao nhận; việc kiểm tra số lượng, chất lượng thuốc do bên giao thuốc đảm nhiệm",
        "option_c": "Kiểm tra giá bán của thuốc; ghi sổ theo dõi doanh thu; kiểm tra hợp đồng mua bán với bên giao thuốc",
        "option_d": "Kiểm tra số lượng, chất lượng thuốc; ghi sổ sách và thực hiện các thủ tục hành chính; tiến hành kiểm tra nguồn gốc thuốc",
        "answer": "D"
    },
    {
        "id": 10,
        "question": "Để mua bán thuốc gây nghiện, thuốc hướng thần, cơ sở phải đảm bảo yêu cầu gì về giấy phép?",
        "option_a": "Có giấy phép kinh doanh thuốc; có giấy phép nhập khẩu thuốc; có giấy phép bán thuốc của Bộ Y tế",
        "option_b": "Chỉ cần có giấy đăng ký kinh doanh của cơ quan thuế; không cần các giấy phép chuyên ngành khác",
        "option_c": "Có giấy phép xuất khẩu thuốc; có giấy phép quảng cáo thuốc; có giấy phép bán thuốc của Sở Y tế",
        "option_d": "Có giấy phép kinh doanh thuốc; có giấy phép sản xuất thuốc; có giấy phép bán thuốc của Bộ Công an",
        "answer": "A"
    },
    {
        "id": 11,
        "question": "Mục đích cơ sở sản xuất thuốc chỉ được nhập nguyên liệu:",
        "option_a": "Để bán lại cho các cơ sở sản xuất khác có nhu cầu",
        "option_b": "Để phục vụ hoạt động sản xuất thuốc của chính cơ sở",
        "option_c": "Để xuất khẩu sang nước ngoài theo hợp đồng thương mại",
        "option_d": "Để dự trữ tồn kho phục vụ mục đích kinh doanh chung",
        "answer": "B"
    },
    {
        "id": 12,
        "question": "Cơ sở nhập khẩu chỉ được bán nguyên liệu nhập khẩu cho đối tượng sau đây:",
        "option_a": "Cơ sở bán lẻ thuốc, nhà thuốc, quầy thuốc, cơ sở bán buôn thuốc và cơ sở phân phối thuốc trên thị trường",
        "option_b": "Cơ sở sản xuất thuốc thành phẩm, cơ sở khám bệnh, chữa bệnh, cơ sở nghiên cứu, kiểm nghiệm, cơ sở cai nghiện bắt buộc",
        "option_c": "Mọi tổ chức, cá nhân có nhu cầu mua nguyên liệu làm thuốc, kể cả cơ sở chưa có giấy phép kinh doanh",
        "option_d": "Cơ sở sản xuất thực phẩm chức năng, cơ sở sản xuất mỹ phẩm, cơ sở nghiên cứu, cơ sở khám bệnh tư nhân",
        "answer": "B"
    },
    {
        "id": 13,
        "question": "Khi cơ sở sản xuất thuốc mua nguyên liệu mà không sử dụng hết, muốn nhượng lại cho cơ sở khác thì cần điều kiện sau:",
        "option_a": "Chỉ cần thông báo bằng lời nói cho Sở Y tế địa phương",
        "option_b": "Chỉ cần ký hợp đồng mua bán giữa hai cơ sở với nhau",
        "option_c": "Không cần điều kiện gì, được tự do nhượng lại cho nhau",
        "option_d": "Phải có sự đồng ý bằng văn bản của Bộ Y tế",
        "answer": "D"
    },
    {
        "id": 14,
        "question": "Số lượng hồ sơ đề nghị mua thuốc gây nghiện, thuốc hướng thần, thuốc tiền chất được quy định như sau:",
        "option_a": "01 bộ",
        "option_b": "02 bộ",
        "option_c": "03 bộ",
        "option_d": "05 bộ",
        "answer": "A"
    },
    {
        "id": 15,
        "question": "Hồ sơ đề nghị mua thuốc gồm những tài liệu nào sau đây?",
        "option_a": "Văn bản giải thích lý do khi số lượng đề nghị mua vượt quá 110% so với lần trước",
        "option_b": "Bản sao hợp đồng lao động của toàn bộ nhân viên đang làm việc tại cơ sở mua thuốc",
        "option_c": "Văn bản giải thích lý do khi số lượng đề nghị mua vượt quá 150% so với lần trước",
        "option_d": "Biên lai nộp thuế thu nhập doanh nghiệp của cơ sở trong năm gần nhất trước đó",
        "answer": "C"
    },
    {
        "id": 16,
        "question": "Lập báo cáo xuất, nhập khẩu thuốc, nguyên liệu làm thuốc gửi về Bộ Y tế và Bộ Công an trong vòng bao nhiêu ngày?",
        "option_a": "05 ngày",
        "option_b": "15 ngày",
        "option_c": "30 ngày",
        "option_d": "10 ngày",
        "answer": "D"
    },
    {
        "id": 17,
        "question": "Cơ sở kinh doanh thuốc cần đáp ứng các quy định về cơ sở vật chất nào sau đây?",
        "option_a": "Có kho dùng chung với hàng hóa khác, tường trần thông thoáng; không cần camera; theo dõi hồ sơ bằng sổ tay thông thường",
        "option_b": "Có kho riêng, tường trần làm bằng vật liệu tạm; có nhân viên bảo vệ trực đêm; hồ sơ được lưu bằng bản giấy rời rạc",
        "option_c": "Có kho riêng hoặc khu vực riêng, có tường trần kiên cố; có hệ thống camera theo dõi; có hệ thống quản lý và phần mềm theo dõi hồ sơ",
        "option_d": "Chỉ cần có khu vực trưng bày thuốc thuận tiện cho khách hàng; không cần kho riêng, camera hay phần mềm quản lý hồ sơ",
        "answer": "C"
    },
    {
        "id": 18,
        "question": "Hồ sơ, sổ sách liên quan đến thuốc, nguyên liệu làm thuốc được lưu giữ bao lâu kể từ ngày thuốc, nguyên liệu làm thuốc hết hạn dùng?",
        "option_a": "Ít nhất 1 năm",
        "option_b": "Ít nhất 2 năm",
        "option_c": "Ít nhất 3 năm",
        "option_d": "Ít nhất 5 năm",
        "answer": "B"
    },
    {
        "id": 19,
        "question": "Theo thông tư 20/2017/TT-BYT, danh mục dược chất gây nghiện được quy định ở phụ lục nào?",
        "option_a": "Phụ lục II",
        "option_b": "Phụ lục I",
        "option_c": "Phụ lục III",
        "option_d": "Phụ lục IV",
        "answer": "B"
    },
    {
        "id": 20,
        "question": "Các loại thuốc phải được kiểm soát đặc biệt, ngoại trừ?",
        "option_a": "Thuốc kê đơn",
        "option_b": "Thuốc gây nghiện",
        "option_c": "Thuốc hướng thần",
        "option_d": "Thuốc tiền chất",
        "answer": "A"
    },
    {
        "id": 21,
        "question": "Thời hạn cơ quan tiếp nhận hồ sơ phản hồi yêu cầu sửa đổi, bổ sung hồ sơ đề nghị hủy thuốc là bao lâu kể từ ngày ghi trên Phiếu tiếp nhận hồ sơ?",
        "option_a": "30 ngày",
        "option_b": "10 ngày",
        "option_c": "15 ngày",
        "option_d": "45 ngày",
        "answer": "A"
    },
    {
        "id": 22,
        "question": "Sau khi hủy thuốc, trong vòng bao nhiêu ngày cơ sở phải gửi báo cáo kèm biên bản về Bộ Y tế hoặc Sở Y tế?",
        "option_a": "10 ngày",
        "option_b": "05 ngày",
        "option_c": "15 ngày",
        "option_d": "30 ngày",
        "answer": "A"
    },
    {
        "id": 23,
        "question": "Hội đồng hủy thuốc có trách nhiệm nào sau đây?",
        "option_a": "Chỉ giám sát việc hủy thuốc; không tham gia quyết định phương pháp hủy hay tổ chức việc hủy",
        "option_b": "Mua sắm vật tư phục vụ việc hủy thuốc; thanh toán chi phí hủy; bảo quản thuốc chờ hủy",
        "option_c": "Lập hồ sơ đề nghị hủy thuốc; nộp phí hủy thuốc; nhận lại thuốc đã hủy để tái chế sử dụng",
        "option_d": "Tổ chức việc hủy thuốc; quyết định phương pháp hủy; giám sát việc hủy thuốc của cơ sở",
        "answer": "D"
    },
    {
        "id": 24,
        "question": "Sau khi nhận được hồ sơ đề nghị cấp phép xuất khẩu thuốc, Bộ Y tế sẽ cấp phép xuất khẩu trong thời hạn bao lâu nếu hồ sơ hợp lệ và không yêu cầu sửa đổi, bổ sung?",
        "option_a": "10 ngày làm việc",
        "option_b": "05 ngày làm việc",
        "option_c": "15 ngày làm việc",
        "option_d": "20 ngày làm việc",
        "answer": "A"
    },
    {
        "id": 25,
        "question": "Một cơ sở dược nộp hồ sơ xin cấp phép xuất khẩu thuốc vào ngày 01/9. Hồ sơ không yêu cầu sửa đổi, bổ sung. Hạn cuối cùng Bộ Y tế phải cấp phép xuất khẩu là ngày nào?",
        "option_a": "10/9",
        "option_b": "14/9",
        "option_c": "11/9",
        "option_d": "21/9",
        "answer": "C"
    },
    {
        "id": 26,
        "question": "Thuốc chỉ được cấp phép xuất khẩu khi đáp ứng tiêu chí nào sau đây?",
        "option_a": "Được sản xuất tại Việt Nam nhưng chưa có giấy đăng ký lưu hành thuốc hoặc giấy phép nhập khẩu do cơ quan có thẩm quyền cấp",
        "option_b": "Được sản xuất tại Việt Nam và có giấy đăng ký lưu hành thuốc tại Việt Nam hoặc giấy phép nhập khẩu do cơ quan có thẩm quyền cấp",
        "option_c": "Chỉ cần có hóa đơn mua bán hợp lệ của cơ sở sản xuất, không cần giấy đăng ký lưu hành hay giấy phép nhập khẩu thuốc",
        "option_d": "Chỉ cần được sản xuất tại Việt Nam và đạt tiêu chuẩn chất lượng của cơ sở, không cần giấy đăng ký lưu hành thuốc",
        "answer": "B"
    },
    {
        "id": 27,
        "question": "Nguyên liệu làm thuốc chỉ được cấp phép xuất khẩu khi:",
        "option_a": "Được sản xuất tại Việt Nam có hoặc chưa có giấy đăng ký lưu hành, hoặc được sản xuất tại nước ngoài có giấy phép nhập khẩu do cơ quan thẩm quyền cấp",
        "option_b": "Chỉ được sản xuất tại Việt Nam và bắt buộc phải có giấy đăng ký lưu hành, không áp dụng cho nguyên liệu sản xuất tại nước ngoài nhập về",
        "option_c": "Được sản xuất tại nước ngoài và chưa có giấy phép nhập khẩu, nhưng đã có giấy đăng ký lưu hành của cơ quan quản lý nước sở tại cấp",
        "option_d": "Được sản xuất tại Việt Nam hoặc nước ngoài, miễn là cơ sở xuất khẩu có hợp đồng mua bán hợp lệ với đối tác nước ngoài",
        "answer": "A"
    },
    {
        "id": 28,
        "question": "Theo quy định, cơ sở xuất khẩu, nhập khẩu thuốc gây nghiện, thuốc hướng thần, thuốc tiền chất phải có yêu cầu gì đối với kho bảo quản?",
        "option_a": "Có kho dùng chung với hàng hóa khác, tường trần bằng vật liệu tạm, cửa lưới, khóa thông thường",
        "option_b": "Có khu vực riêng nhưng không cần kiên cố, chỉ cần có biển báo và người trông coi",
        "option_c": "Có kho lạnh chuyên dụng, tường và trần bằng vật liệu cách nhiệt, không bắt buộc có khóa",
        "option_d": "Có kho riêng, kiên cố, tường và trần làm bằng vật liệu chắc chắn, có cửa, khóa an toàn",
        "answer": "D"
    },
    {
        "id": 29,
        "question": "Cơ sở bán buôn thuốc gây nghiện, thuốc hướng thần, thuốc tiền chất bắt buộc phải có thêm điều kiện nào ngoài kho riêng hoặc khu vực riêng kiên cố, có khóa chắc chắn?",
        "option_a": "Có nhân viên bảo vệ trực 24/24 tại khu vực bảo quản",
        "option_b": "Có hệ thống điều hòa không khí tại khu vực bảo quản",
        "option_c": "Có biển hiệu cảnh báo tại khu vực bảo quản thuốc",
        "option_d": "Có hệ thống camera tại khu vực bảo quản thuốc",
        "answer": "D"
    },
    {
        "id": 30,
        "question": "Đối với cơ sở xuất khẩu, nhập khẩu, cơ sở kinh doanh dịch vụ bảo quản thuốc gây nghiện, thuốc hướng thần, thuốc tiền chất, ngoài hồ sơ sổ sách theo dõi theo quy định Bộ Y tế còn phải có gì?",
        "option_a": "Hệ thống phần mềm theo dõi quản lý xuất, nhập, tồn kho",
        "option_b": "Hệ thống kho lạnh bảo quản thuốc ở nhiệt độ dưới 8°C",
        "option_c": "Hệ thống báo cáo tài chính hằng quý gửi cơ quan thuế",
        "option_d": "Hệ thống xe vận chuyển chuyên dụng có gắn thiết bị định vị",
        "answer": "A"
    },
    {
        "id": 31,
        "question": "Thời hạn lưu đơn thuốc gây nghiện, thuốc hướng thần, thuốc tiền chất tại cơ sở khám chữa bệnh là:",
        "option_a": "1 năm",
        "option_b": "3 năm",
        "option_c": "2 năm",
        "option_d": "5 năm",
        "answer": "C"
    },
    {
        "id": 32,
        "question": "Đối với bệnh mạn tính, kê đơn thuốc theo hướng dẫn của Bộ Y tế hoặc kê tối đa:",
        "option_a": "07 ngày",
        "option_b": "10 ngày",
        "option_c": "60 ngày",
        "option_d": "30 ngày",
        "answer": "D"
    },
    {
        "id": 33,
        "question": "Người có thẩm quyền kê đơn thuốc tại cơ sở khám chữa bệnh là:",
        "option_a": "Dược sĩ có chứng chỉ hành nghề dược và công tác tại khoa dược của cơ sở",
        "option_b": "Bác sĩ có chứng chỉ hành nghề và đăng ký hành nghề tại cơ sở khám chữa bệnh",
        "option_c": "Điều dưỡng viên có chứng chỉ hành nghề và đăng ký hành nghề tại cơ sở",
        "option_d": "Nhân viên y tế bất kỳ được giám đốc cơ sở khám chữa bệnh ủy quyền",
        "answer": "B"
    },
    {
        "id": 34,
        "question": "Đơn thuốc gây nghiện phải được lập thành mấy bản và phân phối thế nào?",
        "option_a": "3 bản (01 lưu cơ sở, 01 lưu sổ, 01 giao người bệnh)",
        "option_b": "2 bản (01 lưu tại cơ sở, 01 giao cho người bệnh)",
        "option_c": "1 bản duy nhất giao cho người bệnh, cơ sở không lưu",
        "option_d": "4 bản (01 lưu cơ sở, 01 lưu sổ, 01 giao người bệnh, 01 nộp Sở)",
        "answer": "A"
    },
    {
        "id": 35,
        "question": "Nội dung bắt buộc trong đơn thuốc gồm:",
        "option_a": "Họ tên, nghề nghiệp, thu nhập của bệnh nhân; tên thuốc, giá thuốc, nơi bán thuốc; chữ ký của bệnh nhân",
        "option_b": "Họ tên, tuổi, giới tính, địa chỉ bệnh nhân; tên thuốc, hàm lượng, số lượng, cách dùng; chữ ký, họ tên người kê đơn",
        "option_c": "Họ tên, tuổi, giới tính bệnh nhân; tên thuốc, số lô, hạn dùng; chữ ký, họ tên người bán thuốc",
        "option_d": "Họ tên, số điện thoại, email bệnh nhân; tên thuốc, nhà sản xuất, giá bán; con dấu của nhà thuốc",
        "answer": "B"
    },
    {
        "id": 36,
        "question": "Trong đơn thuốc, tên thuốc được ghi thế nào?",
        "option_a": "Chỉ ghi tên thương mại, không được ghi tên chung quốc tế",
        "option_b": "Tên viết tắt do bác sĩ tự quy ước và thống nhất trong khoa",
        "option_c": "Tên chung quốc tế hoặc tên thương mại trong ngoặc đơn",
        "option_d": "Tên hãng sản xuất hoặc tên nhà phân phối trong ngoặc đơn",
        "answer": "C"
    },
    {
        "id": 37,
        "question": "Khi lưu đơn thuốc, cơ sở phải lưu ở đâu?",
        "option_a": "Lưu tại phòng kế toán cùng với các hóa đơn thu tiền viện phí",
        "option_b": "Lưu tại kho thuốc, kèm theo phiếu xuất kho thuốc hằng ngày",
        "option_c": "Giao toàn bộ cho người bệnh tự lưu giữ, cơ sở không lưu bản nào",
        "option_d": "Lưu tại sổ khám bệnh hoặc bệnh án, kèm theo sổ cấp phát thuốc",
        "answer": "D"
    },
    {
        "id": 38,
        "question": "Thuốc gây nghiện, thuốc hướng thần sau khi thu hồi, cơ sở phải xử lý thế nào?",
        "option_a": "Tái sử dụng cấp phát cho người bệnh khác nếu thuốc còn hạn dùng",
        "option_b": "Bán thanh lý lại cho cơ sở kinh doanh dược khác với giá ưu đãi",
        "option_c": "Trả lại cho cơ sở sản xuất mà không cần lập biên bản giao nhận",
        "option_d": "Hủy theo quy định pháp luật về quản lý thuốc gây nghiện, hướng thần",
        "answer": "D"
    },
    {
        "id": 39,
        "question": "Hồ sơ, sổ sách, đơn thuốc liên quan đến thuốc gây nghiện, hướng thần phải được:",
        "option_a": "Lưu bản chính hoặc bản sao đơn thuốc",
        "option_b": "Hủy ngay sau khi người bệnh dùng hết thuốc",
        "option_c": "Giao toàn bộ cho cơ quan thuế quản lý, lưu giữ",
        "option_d": "Chỉ lưu dạng ảnh chụp trong điện thoại cá nhân",
        "answer": "A"
    },
    {
        "id": 40,
        "question": "Khi trả lại thuốc gây nghiện, thuốc hướng thần, thuốc tiền chất, cơ sở cấp phát phải lập:",
        "option_a": "Phiếu xuất kho thuốc",
        "option_b": "Hóa đơn hoàn trả tiền",
        "option_c": "Biên bản nhận lại thuốc",
        "option_d": "Biên bản kiểm nghiệm thuốc",
        "answer": "C"
    },
    {
        "id": 41,
        "question": "Biên bản nhận lại thuốc gây nghiện, thuốc hướng thần phải lập mấy bản?",
        "option_a": "01 bản",
        "option_b": "03 bản",
        "option_c": "04 bản",
        "option_d": "02 bản",
        "answer": "D"
    },
    {
        "id": 42,
        "question": "Một bản biên bản nhận lại thuốc được lưu tại cơ sở bán thuốc, bản còn lại:",
        "option_a": "Gửi cho người bệnh/người đại diện nộp lại thuốc",
        "option_b": "Gửi cho Sở Y tế nơi cơ sở bán thuốc đặt trụ sở",
        "option_c": "Gửi cho Bộ Công an để theo dõi và quản lý",
        "option_d": "Gửi cho nhà sản xuất thuốc để làm hồ sơ thu hồi",
        "answer": "A"
    },
    {
        "id": 43,
        "question": "Theo quy định trong tài liệu, đơn thuốc dùng thuốc gây nghiện có thời hạn là bao lâu kể từ ngày kê đơn?",
        "option_a": "10 ngày",
        "option_b": "05 ngày",
        "option_c": "07 ngày",
        "option_d": "30 ngày",
        "answer": "A"
    },
    {
        "id": 44,
        "question": "Theo tài liệu, người bệnh hoặc người đại diện của người bệnh phải trả lại thuốc gây nghiện, thuốc hướng thần và thuốc tiền chất không sử dụng ở đâu?",
        "option_a": "Tại cơ sở đã cấp, bán thuốc",
        "option_b": "Tại Sở Y tế nơi cư trú",
        "option_c": "Tại cơ sở sản xuất thuốc",
        "option_d": "Tại nhà thuốc bất kỳ gần nhất",
        "answer": "A"
    },
    {
        "id": 45,
        "question": "Thời gian lưu đơn thuốc “N” (đối với cơ sở khám bệnh) là bao lâu kể từ ngày kê đơn?",
        "option_a": "03 tháng",
        "option_b": "01 năm",
        "option_c": "06 tháng",
        "option_d": "03 năm",
        "answer": "B"
    },
    {
        "id": 46,
        "question": "Theo quy định, hồ sơ lưu trữ về đơn thuốc bao gồm những thông tin gì?",
        "option_a": "Tên người kê đơn, tên cơ sở khám bệnh, tên người bệnh, nghề nghiệp, tên thuốc kháng sinh, giá bán, nhà sản xuất, nơi mua thuốc",
        "option_b": "Tên người kê đơn, tên và địa chỉ cơ sở khám bệnh, tên người bệnh, địa chỉ thường trú, tên thuốc kháng sinh, hàm lượng, liều dùng, đường dùng",
        "option_c": "Chỉ gồm tên người bệnh, tên thuốc kháng sinh và số lượng thuốc, không cần thông tin về người kê đơn hay cơ sở khám bệnh",
        "option_d": "Tên người bán thuốc, địa chỉ nhà thuốc, tên người bệnh, số căn cước công dân, tên thuốc, số lô, hạn dùng, giá bán thuốc",
        "answer": "B"
    },
    {
        "id": 47,
        "question": "Theo quy định về kê đơn thuốc điều trị ngoại trú, thời gian lưu Đơn thuốc “N” như sau:",
        "option_a": "2 năm kể từ ngày thuốc hết hạn dùng",
        "option_b": "1 năm kể từ ngày thuốc hết hạn dùng",
        "option_c": "3 tháng kể từ ngày bác sĩ kê đơn",
        "option_d": "5 năm kể từ ngày bác sĩ kê đơn",
        "answer": "A"
    },
    {
        "id": 48,
        "question": "Theo quy định về kê đơn thuốc trong điều trị ngoại trú, số lượng thuốc được ghi trong đơn thuốc như sau:",
        "option_a": "Phải viết thêm số 0 phía sau nếu số lượng chỉ có một chữ số",
        "option_b": "Phải viết thêm số 0 phía trước nếu số lượng chỉ có một chữ số",
        "option_c": "Phải ghi số lượng bằng chữ số La Mã để tránh sửa chữa trong đơn",
        "option_d": "Được viết tắt số lượng thuốc, không cần ghi cụ thể đơn vị tính",
        "answer": "B"
    },
    {
        "id": 49,
        "question": "Thuốc được định nghĩa là gì?",
        "option_a": "Là chế phẩm chứa dược chất hoặc dược liệu dùng cho người và động vật nhằm phòng bệnh, chữa bệnh, tăng cường sức khỏe, làm đẹp cơ thể người dùng.",
        "option_b": "Là sản phẩm chứa vitamin, khoáng chất hoặc dược liệu dùng hằng ngày nhằm bổ sung dinh dưỡng, làm đẹp, hỗ trợ sinh lý cơ thể cho người khỏe mạnh.",
        "option_c": "Là chế phẩm chứa dược chất hoặc dược liệu dùng cho người nhằm phòng bệnh, chẩn đoán, chữa bệnh, điều trị, giảm nhẹ bệnh, điều chỉnh chức năng sinh lý cơ thể.",
        "option_d": "Là chế phẩm chứa hóa chất tổng hợp dùng cho người nhằm chẩn đoán, phẫu thuật, thay thế bộ phận cơ thể và hỗ trợ điều trị bệnh cho người bệnh.",
        "answer": "C"
    },
    {
        "id": 50,
        "question": "Điểm khác biệt cơ bản giữa thuốc dược liệu và thuốc cổ truyền là gì?",
        "option_a": "Thuốc dược liệu chỉ dùng đường uống và do bác sĩ y học hiện đại kê đơn, trong khi thuốc cổ truyền chỉ được dùng ngoài da và không phải đăng ký lưu hành thuốc.",
        "option_b": "Thuốc dược liệu được bào chế hoàn toàn từ hóa chất tổng hợp theo công nghệ hiện đại, trong khi thuốc cổ truyền được bào chế từ dược liệu theo lý luận y học cổ truyền hoặc kinh nghiệm dân gian.",
        "option_c": "Thuốc dược liệu có thành phần từ dược liệu và tác dụng được chứng minh bằng khoa học hiện đại, trong khi thuốc cổ truyền được bào chế theo lý luận, phương pháp y học cổ truyền hoặc kinh nghiệm dân gian.",
        "option_d": "Thuốc dược liệu có tác dụng chưa được chứng minh bằng khoa học hiện đại nên không được cấp số đăng ký, trong khi thuốc cổ truyền luôn được cấp số đăng ký lưu hành thuốc.",
        "answer": "C"
    },
    {
        "id": 51,
        "question": "Nguyên liệu làm thuốc không phải đăng ký trước khi lưu hành tại Việt Nam, trừ trường hợp sau đây:",
        "option_a": "Để phục vụ giảng dạy, đào tạo tại các trường đại học y dược.",
        "option_b": "Để bán lẻ trực tiếp cho người tiêu dùng tại các nhà thuốc.",
        "option_c": "Để sản xuất thuốc thành phẩm bán trên thị trường trong nước.",
        "option_d": "Để phân phối cho các cơ sở bán buôn thuốc trên toàn quốc.",
        "answer": "A"
    },
    {
        "id": 52,
        "question": "Cho tới ngày 2/7/2021 có bao nhiêu thành viên ICH?",
        "option_a": "16 thành viên",
        "option_b": "20 thành viên",
        "option_c": "23 thành viên",
        "option_d": "18 thành viên",
        "answer": "D"
    },
    {
        "id": 53,
        "question": "Định nghĩa đúng về thuốc generic:",
        "option_a": "Là thuốc có dược chất, hàm lượng, dạng bào chế khác với biệt dược gốc nhưng được cho là có tác dụng điều trị tương tự biệt dược gốc.",
        "option_b": "Là thuốc có cùng tên thương mại, cùng nhà sản xuất với biệt dược gốc nhưng được bán với giá rẻ hơn nhiều lần so với biệt dược gốc.",
        "option_c": "Là thuốc có cùng dược chất, hàm lượng, dạng bào chế, đường dùng với biệt dược gốc và tương đương sinh học với biệt dược gốc.",
        "option_d": "Là thuốc được nghiên cứu lần đầu, có bằng sáng chế độc quyền và chưa có bất kỳ thuốc nào tương đương được lưu hành trên thị trường.",
        "answer": "C"
    },
    {
        "id": 54,
        "question": "Có bao nhiêu hình thức quy định hồ sơ đăng ký thuốc?",
        "option_a": "02 hình thức",
        "option_b": "03 hình thức",
        "option_c": "06 hình thức",
        "option_d": "04 hình thức",
        "answer": "D"
    },
    {
        "id": 55,
        "question": "Đăng ký thuốc lần đầu áp dụng cho các trường hợp sau đây:",
        "option_a": "Thuốc đã được cấp số đăng ký nhưng số đăng ký đã hết hiệu lực.",
        "option_b": "Thuốc đã được cấp số đăng ký và đang còn hiệu lực lưu hành.",
        "option_c": "Thuốc đã được cấp số đăng ký có thay đổi nhỏ về nhãn thuốc.",
        "option_d": "Thuốc chưa được cấp số đăng ký lưu hành tại Việt Nam.",
        "answer": "D"
    },
    {
        "id": 56,
        "question": "Yêu cầu chung về thông tin sản phẩm đối với các tài liệu phải nộp trong hồ sơ đăng ký thuốc, ngoại trừ?",
        "option_a": "Thông tin sản phẩm phải được trình bày rõ ràng, đầy đủ theo hướng dẫn của Bộ Y tế",
        "option_b": "Phải nộp lại thông tin sản phẩm nếu không có thay đổi so với đăng ký lần đầu",
        "option_c": "Thông tin sản phẩm phải trùng khớp với nội dung ghi trong các tài liệu khác của hồ sơ",
        "option_d": "Thông tin sản phẩm phải do cơ sở đăng ký chịu trách nhiệm về tính chính xác của nội dung",
        "answer": "B"
    },
    {
        "id": 57,
        "question": "Tên thương mại của thuốc có thể được đặt dựa theo nguyên tắc nào?",
        "option_a": "Không ghi sai tác dụng điều trị và tác dụng dược lý của thuốc.",
        "option_b": "Được ghi cam kết về hiệu quả điều trị tuyệt đối của thuốc.",
        "option_c": "Được gây nhầm lẫn với tên của các thuốc đang lưu hành khác.",
        "option_d": "Được ghi tên người nổi tiếng làm quảng cáo cho thuốc đó.",
        "answer": "A"
    },
    {
        "id": 58,
        "question": "Thời gian Quyết định cấp số đăng ký hoặc gia hạn số đăng ký là bao nhiêu năm?",
        "option_a": "03 năm",
        "option_b": "07 năm",
        "option_c": "05 năm",
        "option_d": "10 năm",
        "answer": "C"
    },
    {
        "id": 59,
        "question": "Cơ quan Quản lý Dược chặt chẽ (SRA), ngoại trừ?",
        "option_a": "Cơ quan Quản lý Dược phẩm châu Âu (EMA)",
        "option_b": "Cơ quan Quản lý Dược phẩm Nhật Bản (PMDA)",
        "option_c": "Cơ quan Quản lý Dược và thực phẩm Hoa Kỳ",
        "option_d": "Cơ quan Quản lý Dược phẩm Thụy Sĩ (Swissmedic)",
        "answer": "C"
    },
    {
        "id": 60,
        "question": "Những thay đổi của thuốc có ảnh hưởng rõ rệt, trực tiếp đến chất lượng, an toàn và hiệu quả của thuốc là định nghĩa của thay đổi?",
        "option_a": "Thay đổi nhỏ",
        "option_b": "Thay đổi lớn",
        "option_c": "Thay đổi bổ sung",
        "option_d": "Thay đổi tạm thời",
        "answer": "B"
    },
    {
        "id": 61,
        "question": "Từ viết tắt của thay đổi lớn là?",
        "option_a": "MiV",
        "option_b": "MaV",
        "option_c": "MiV-1",
        "option_d": "MiV-2",
        "answer": "B"
    },
    {
        "id": 62,
        "question": "Thời hạn ngừng tiếp nhận, cấp số đăng ký lưu hành thuốc tối đa bao lâu nếu thuốc đăng ký không phải do chính cơ sở nghiên cứu hoặc sản xuất ghi trong hồ sơ đăng ký sản xuất?",
        "option_a": "3 tháng",
        "option_b": "6 tháng",
        "option_c": "1 năm",
        "option_d": "2 năm",
        "answer": "C"
    },
    {
        "id": 63,
        "question": "Sở Y tế thẩm định và cấp số đăng ký của thuốc dùng ngoài trong thời gian tối đa là bao lâu?",
        "option_a": "1 tháng",
        "option_b": "6 tháng",
        "option_c": "3 tháng",
        "option_d": "9 tháng",
        "answer": "C"
    },
    {
        "id": 64,
        "question": "Cục Quản lý Dược xem xét cấp đăng ký thuốc đối với trường hợp “đăng ký thay đổi lớn và thay đổi nhỏ có thay đổi 2 nội dung trở lên” trong thời hạn tối đa là:",
        "option_a": "90 ngày",
        "option_b": "30 ngày",
        "option_c": "45 ngày",
        "option_d": "120 ngày",
        "answer": "A"
    },
    {
        "id": 65,
        "question": "Cục Quản lý Dược xem xét cấp đăng ký thuốc đối với trường hợp “thay đổi nhỏ có 1 nội dung thay đổi” trong thời hạn tối đa là:",
        "option_a": "15 ngày",
        "option_b": "30 ngày",
        "option_c": "60 ngày",
        "option_d": "120 ngày",
        "answer": "C"
    },
    {
        "id": 66,
        "question": "Ai có quyền đưa ra quyết định rút số đăng ký lưu hành, tạm ngừng nhận hồ sơ và tạm ngừng cấp số đăng ký thuốc?",
        "option_a": "Giám đốc Sở Y tế",
        "option_b": "Thủ tướng Chính phủ",
        "option_c": "Bộ trưởng Bộ Y tế",
        "option_d": "Chủ tịch Ủy ban nhân dân",
        "answer": "C"
    },
    {
        "id": 67,
        "question": "Giấy phép gia công cho thương nhân nước ngoài quy định tại khoản mấy Điều 38 Nghị định số 69/2018/NĐ-CP?",
        "option_a": "Khoản 1",
        "option_b": "Khoản 4",
        "option_c": "Khoản 3",
        "option_d": "Khoản 5",
        "answer": "B"
    },
    {
        "id": 68,
        "question": "Cơ sở đăng ký thuốc chuyển giao công nghệ thông báo bằng văn bản cho Cục Quản lý Dược trong thời hạn bao nhiêu ngày kể từ ngày có quyết định thu hồi giấy đăng ký lưu hành thuốc?",
        "option_a": "07 ngày",
        "option_b": "10 ngày",
        "option_c": "15 ngày",
        "option_d": "30 ngày",
        "answer": "C"
    },
    {
        "id": 69,
        "question": "Một hồ sơ đăng ký thuốc bao gồm những thành phần chính nào?",
        "option_a": "Hồ sơ hành chính, hồ sơ chất lượng, hồ sơ kinh doanh, hồ sơ nhân sự",
        "option_b": "Hồ sơ hành chính, hồ sơ chất lượng, hồ sơ tiền lâm sàng, hồ sơ lâm sàng",
        "option_c": "Hồ sơ pháp lý, hồ sơ sản xuất, hồ sơ tài chính, hồ sơ lâm sàng",
        "option_d": "Hồ sơ hành chính, hồ sơ quảng bá, hồ sơ giá thuốc, hồ sơ bảo hiểm",
        "answer": "B"
    },
    {
        "id": 70,
        "question": "Thủ tục gia hạn giấy đăng ký lưu hành thuốc phải được thực hiện khi:",
        "option_a": "Sau khi giấy đăng ký đã hết hiệu lực 12 tháng",
        "option_b": "Ngay khi thuốc được cấp giấy đăng ký lần đầu",
        "option_c": "Khi cơ sở đăng ký có nhu cầu đổi tên thuốc",
        "option_d": "Trước khi giấy đăng ký hết hiệu lực",
        "answer": "D"
    },
    {
        "id": 71,
        "question": "Việc đăng ký lại thuốc được thực hiện trong trường hợp nào sau đây?",
        "option_a": "Thuốc còn hiệu lực của giấy đăng ký trên 12 tháng nữa",
        "option_b": "Thuốc có sự thay đổi lớn về công thức hoặc quy trình sản xuất",
        "option_c": "Thuốc chỉ thay đổi nhà phân phối hoặc địa chỉ liên hệ",
        "option_d": "Thuốc có thay đổi nhỏ về bao bì hoặc kích thước nhãn",
        "answer": "B"
    },
    {
        "id": 72,
        "question": "Khi nộp hồ sơ đăng ký thuốc, các tài liệu phải được trình bày bằng ngôn ngữ nào?",
        "option_a": "Tiếng Anh, các tài liệu tiếng Việt phải có bản dịch công chứng sang tiếng Anh",
        "option_b": "Bất kỳ ngôn ngữ nào, không cần dịch sang tiếng Việt khi nộp hồ sơ",
        "option_c": "Tiếng Việt, các tài liệu nước ngoài phải có bản dịch công chứng sang tiếng Việt",
        "option_d": "Tiếng Việt hoặc tiếng Anh, tài liệu bằng tiếng khác không cần bản dịch",
        "answer": "C"
    },
    {
        "id": 73,
        "question": "Văn bản nào quy định về việc đăng ký thuốc đang được thi hành?",
        "option_a": "Thông tư 08/2022/TT-BYT",
        "option_b": "Thông tư 01/2018/TT-BYT",
        "option_c": "Thông tư 12/2025/TT-BYT",
        "option_d": "Thông tư 20/2017/TT-BYT",
        "answer": "C"
    },
    {
        "id": 74,
        "question": "Thông tư 12/2025/TT-BYT quy định việc đăng ký thuốc được ban hành vào ngày nào?",
        "option_a": "15/05/2025",
        "option_b": "16/05/2025",
        "option_c": "16/06/2025",
        "option_d": "01/07/2025",
        "answer": "B"
    },
    {
        "id": 75,
        "question": "Điểm khác biệt của Thông tư 12/2025/TT-BYT so với Thông tư 08/2022/TT-BYT?",
        "option_a": "Cho phép lưu hành thuốc mà không cần số đăng ký.",
        "option_b": "Bãi bỏ toàn bộ quy định về hồ sơ đăng ký thuốc.",
        "option_c": "Có nguyên tắc phân loại thuốc không kê đơn.",
        "option_d": "Giảm hiệu lực số đăng ký thuốc xuống còn 01 năm.",
        "answer": "C"
    },
    {
        "id": 76,
        "question": "Luật số 44/2024/QH15 sửa đổi, bổ sung một số điều của Luật Dược số 105/2016/QH13 được ban hành ngày nào?",
        "option_a": "21/10/2024",
        "option_b": "12/11/2024",
        "option_c": "21/11/2024",
        "option_d": "01/07/2025",
        "answer": "C"
    },
    {
        "id": 77,
        "question": "Cục Quản lý Dược xem xét cấp số đăng ký khi có đề nghị của cơ sở đăng ký nêu trong Đơn đăng ký đối với thuốc trong nước sản xuất trên những dây chuyền mới đạt tiêu chuẩn GMP trong thời hạn bao lâu?",
        "option_a": "Không quá 18 tháng",
        "option_b": "Không quá 06 tháng",
        "option_c": "Không quá 12 tháng",
        "option_d": "Không quá 24 tháng",
        "answer": "A"
    },
    {
        "id": 78,
        "question": "Khối lượng nguyên liệu làm thuốc phải nộp đủ cho mấy lần kiểm nghiệm đối với hồ sơ đăng ký thuốc lần đầu?",
        "option_a": "01 lần",
        "option_b": "02 lần",
        "option_c": "05 lần",
        "option_d": "03 lần",
        "answer": "D"
    },
    {
        "id": 79,
        "question": "Các trường hợp thuốc sẽ bị rút số đăng ký, ngoại trừ?",
        "option_a": "Thuốc bị thu hồi do vi phạm mức độ 1",
        "option_b": "Ngừng hoạt động không đăng ký sau 1 tháng",
        "option_c": "Thuốc không an toàn, không hiệu quả",
        "option_d": "Cơ sở đăng ký giả mạo hồ sơ đăng ký",
        "answer": "B"
    },
    {
        "id": 80,
        "question": "Các hình thức đăng ký thuốc, ngoại trừ?",
        "option_a": "Đăng ký thay đổi khác",
        "option_b": "Đăng ký thuốc lần đầu",
        "option_c": "Đăng ký lại thuốc",
        "option_d": "Đăng ký gia hạn thuốc",
        "answer": "A"
    },
    {
        "id": 81,
        "question": "Hồ sơ tiền lâm sàng được quy định tại Điều mấy của Thông tư 12/2025/TT-BYT?",
        "option_a": "Điều 26",
        "option_b": "Điều 30",
        "option_c": "Điều 28",
        "option_d": "Điều 32",
        "answer": "C"
    },
    {
        "id": 82,
        "question": "Trách nhiệm của cơ sở chuyển giao công nghệ sản xuất thuốc, ngoại trừ:",
        "option_a": "Thực hiện thủ tục đăng ký nhận chuyển giao công nghệ theo quy định",
        "option_b": "Chuyển giao đầy đủ hồ sơ, tài liệu kỹ thuật cho cơ sở nhận",
        "option_c": "Hỗ trợ đào tạo nhân lực cho cơ sở nhận chuyển giao công nghệ",
        "option_d": "Chịu trách nhiệm về chất lượng của công nghệ được chuyển giao",
        "answer": "A"
    },
    {
        "id": 83,
        "question": "Bảng so sánh giữa thuốc đặt gia công và thuốc gia công cần nộp trong hồ sơ chất lượng theo Mẫu mấy được ban hành kèm theo Thông tư 12/2025/TT-BYT?",
        "option_a": "Mẫu 01/TT",
        "option_b": "Mẫu 02/TT",
        "option_c": "Mẫu 04/TT",
        "option_d": "Mẫu 05/TT",
        "answer": "A"
    },
    {
        "id": 84,
        "question": "Mẫu 03/TT ban hành kèm theo Thông tư 12/2025/TT-BYT là?",
        "option_a": "Kế hoạch quản lý nguy cơ",
        "option_b": "Báo cáo an toàn định kỳ",
        "option_c": "Đơn đăng ký thuốc lần đầu",
        "option_d": "Bảng so sánh thuốc gia công",
        "answer": "A"
    },
    {
        "id": 85,
        "question": "Cơ quan nào tiếp nhận hồ sơ đăng ký sinh phẩm chẩn đoán in vitro?",
        "option_a": "Cục Quản lý Dược thuộc Bộ Y tế",
        "option_b": "Sở Y tế tỉnh nơi cơ sở đặt trụ sở",
        "option_c": "Viện Kiểm nghiệm thuốc Trung ương",
        "option_d": "Vụ Trang thiết bị và Công trình y tế",
        "answer": "D"
    },
    {
        "id": 86,
        "question": "Thuốc đã được cấp số đăng ký lại nhưng hết hiệu lực được đăng ký gia hạn khi đáp ứng yêu cầu sau đây:",
        "option_a": "Đã được cấp số đăng ký có hiệu lực 5 năm khi đăng ký lại và có lưu hành trên thị trường sau khi được cấp",
        "option_b": "Đã được cấp số đăng ký có hiệu lực 5 năm khi đăng ký lại nhưng chưa từng lưu hành trên thị trường sau khi được cấp",
        "option_c": "Đã được cấp số đăng ký lần đầu có hiệu lực 3 năm và có lưu hành trên thị trường sau khi được cấp",
        "option_d": "Chưa từng được cấp số đăng ký nhưng đã có giấy phép nhập khẩu thuốc để lưu hành trên thị trường",
        "answer": "A"
    },
    {
        "id": 87,
        "question": "Trách nhiệm của cơ sở đăng ký thuốc, ngoại trừ?",
        "option_a": "Cập nhật thông tin, tài liệu liên quan đến thay đổi của thuốc theo quy định của pháp luật",
        "option_b": "Chịu trách nhiệm về tính chính xác của toàn bộ hồ sơ đã nộp cho Bộ Y tế theo quy định",
        "option_c": "Đề nghị thu hồi giấy đăng ký lưu hành thuốc, nguyên liệu làm thuốc do cơ sở đăng ký",
        "option_d": "Thực hiện đầy đủ cam kết về cảnh giác dược sau khi thuốc được lưu hành",
        "answer": "C"
    },
    {
        "id": 88,
        "question": "Định nghĩa thuốc sinh học không bao gồm các chất, ngoại trừ?",
        "option_a": "Được tổng hợp hoàn toàn bằng phương pháp hóa học",
        "option_b": "Được sản xuất bằng công nghệ sinh học",
        "option_c": "Được chiết xuất trực tiếp từ dược liệu thực vật",
        "option_d": "Được pha chế thủ công theo bài thuốc gia truyền",
        "answer": "B"
    },
    {
        "id": 89,
        "question": "Nhãn thuốc phải được gắn trên bao bì thương phẩm của thuốc ở vị trí như sau:",
        "option_a": "Có thể nhận biết được dễ dàng, đầy đủ các nội dung quy định của nhãn mà không phải tháo rời các chi tiết, các phần của thuốc.",
        "option_b": "Chỉ cần gắn ở mặt trong của bao bì, người dùng phải tháo rời các chi tiết mới đọc được đầy đủ nội dung của nhãn thuốc.",
        "option_c": "Có thể gắn ở bất kỳ vị trí nào, kể cả bị che khuất bởi các chi tiết của thuốc, miễn là có đầy đủ nội dung bắt buộc.",
        "option_d": "Chỉ gắn trên các thùng carton vận chuyển, không cần gắn trên bao bì trực tiếp tiếp xúc với thuốc của sản phẩm.",
        "answer": "A"
    },
    {
        "id": 90,
        "question": "Theo quy định ghi nhãn thuốc, “tdd” là cách viết tắt của đường tiêm nào?",
        "option_a": "Tiêm bắp.",
        "option_b": "Tiêm dưới da.",
        "option_c": "Tiêm tĩnh mạch.",
        "option_d": "Tiêm trong da.",
        "answer": "B"
    },
    {
        "id": 91,
        "question": "Nội dung nào sau đây không bắt buộc phải ghi trên nhãn thuốc pha chế thuốc theo đơn trong cơ sở khám, chữa bệnh?",
        "option_a": "Hạn dùng của thuốc.",
        "option_b": "Tên người bệnh có đơn thuốc.",
        "option_c": "Giá bán của thuốc.",
        "option_d": "Điều kiện bảo quản thuốc.",
        "answer": "C"
    },
    {
        "id": 92,
        "question": "Phản ứng có hại được phân theo tần suất “thường gặp”?",
        "option_a": "1/100 ≤ ADR < 1/10",
        "option_b": "1/1000 ≤ ADR < 1/100",
        "option_c": "ADR ≥ 1/10",
        "option_d": "1/10000 ≤ ADR < 1/1000",
        "answer": "A"
    },
    {
        "id": 93,
        "question": "Phản ứng có hại được phân theo tần suất “rất thường gặp”?",
        "option_a": "ADR ≥ 1/10",
        "option_b": "ADR ≥ 1/100",
        "option_c": "ADR ≥ 1/1000",
        "option_d": "ADR ≥ 1/10000",
        "answer": "A"
    },
    {
        "id": 94,
        "question": "Phản ứng có hại được phân theo tần suất “hiếm gặp”?",
        "option_a": "1/1000 ≤ ADR < 1/100",
        "option_b": "1/100 ≤ ADR < 1/10",
        "option_c": "1/10000 ≤ ADR < 1/1000",
        "option_d": "ADR < 1/10000",
        "answer": "C"
    },
    {
        "id": 95,
        "question": "Phản ứng có hại được phân theo tần suất “rất hiếm gặp”?",
        "option_a": "ADR < 1/1000",
        "option_b": "ADR < 1/100",
        "option_c": "ADR < 1/10",
        "option_d": "ADR < 1/10000",
        "answer": "D"
    },
    {
        "id": 96,
        "question": "Phản ứng có hại được phân theo tần suất “ít gặp”?",
        "option_a": "1/100 ≤ ADR < 1/10",
        "option_b": "1/10000 ≤ ADR < 1/1000",
        "option_c": "ADR < 1/10000",
        "option_d": "1/1000 ≤ ADR < 1/100",
        "answer": "D"
    },
    {
        "id": 97,
        "question": "Theo quy định ghi nhãn thuốc, trên nhãn lọ thuốc nhỏ mắt phải ghi dòng chữ lưu ý?",
        "option_a": "“Thuốc dùng ngoài”",
        "option_b": "“Thuốc nhỏ mắt”",
        "option_c": "“Thuốc nhỏ mũi”",
        "option_d": "“Thuốc nhỏ tai”",
        "answer": "B"
    },
    {
        "id": 98,
        "question": "Theo quy định ghi nhãn thuốc, đối với thuốc hỗn dịch phải ghi rõ thêm dòng chữ lưu ý nào dưới đây?",
        "option_a": "Lắc kỹ trước khi dùng",
        "option_b": "Không lắc trước khi dùng",
        "option_c": "Tránh ánh sáng khi bảo quản",
        "option_d": "Đun nóng trước khi dùng",
        "answer": "A"
    },
    {
        "id": 99,
        "question": "Nhãn bao bì trung gian của thuốc không bắt buộc phải ghi nội dung nào?",
        "option_a": "Tên thuốc và dạng bào chế",
        "option_b": "Số lô sản xuất của thuốc",
        "option_c": "Điều kiện bảo quản thuốc",
        "option_d": "Hạn dùng của thuốc",
        "answer": "C"
    },
    {
        "id": 100,
        "question": "Đối với dạng bào chế là dạng bột, cốm pha uống, đơn vị đóng gói nhỏ nhất là?",
        "option_a": "Viên, vỉ, hộp, thùng",
        "option_b": "Gói, chai, lọ, túi",
        "option_c": "Ống, tuýp, vỉ, hộp",
        "option_d": "Hộp, thùng, kiện, pallet",
        "answer": "B"
    },
    {
        "id": 101,
        "question": "Tên thương mại của thuốc phải đảm bảo các nguyên tắc sau, ngoại trừ?",
        "option_a": "Mang tính chất quảng cáo",
        "option_b": "Dễ đọc, không gây nhầm lẫn",
        "option_c": "Không ghi sai tác dụng thuốc",
        "option_d": "Không vi phạm sở hữu trí tuệ",
        "answer": "A"
    },
    {
        "id": 102,
        "question": "Đối với nhãn nguyên liệu làm thuốc phải kiểm soát đặc biệt, các chữ “Nguyên liệu gây nghiện”, “Nguyên liệu hướng thần”,... phải được in như sau:",
        "option_a": "In nghiêng, không cần khung, đặt ở mặt sau của nhãn có ghi tên nhà sản xuất",
        "option_b": "In đậm trong khung, đặt ở mặt chính của nhãn có ghi tên nguyên liệu",
        "option_c": "In màu nhạt trong khung, đặt ở cạnh bên của nhãn có ghi hạn dùng nguyên liệu",
        "option_d": "In bằng chữ nhỏ nhất, đặt ở cuối nhãn dưới phần ghi số lô sản xuất nguyên liệu",
        "answer": "B"
    },
    {
        "id": 103,
        "question": "Theo quy định ghi nhãn thuốc, mốc thời gian được ấn định cho một lô thuốc mà sau thời hạn này thuốc không được phép sử dụng, được gọi là:",
        "option_a": "Hạn dùng của thuốc",
        "option_b": "Ngày sản xuất của thuốc",
        "option_c": "Số lô sản xuất của thuốc",
        "option_d": "Ngày xuất xưởng của thuốc",
        "answer": "A"
    },
    {
        "id": 104,
        "question": "Các dấu hiệu lưu ý và khuyến cáo khi dùng thuốc đối với thuốc kê đơn trên nhãn bao bì ngoài?",
        "option_a": "Phải ghi ký hiệu “Rx” tại góc trên bên trái của tên thuốc, và dòng chữ “Thuốc kê đơn”",
        "option_b": "Phải ghi ký hiệu “OTC” tại góc dưới bên phải của tên thuốc, và dòng chữ “Thuốc không kê đơn”",
        "option_c": "Phải ghi ký hiệu “Rx” tại góc trên bên phải của tên thuốc, nhưng không cần ghi dòng chữ nào khác",
        "option_d": "Chỉ cần ghi dòng chữ “Bán theo đơn” ở mặt sau của bao bì, không cần ghi ký hiệu “Rx” trên nhãn",
        "answer": "A"
    },
    {
        "id": 105,
        "question": "Nhãn phụ đối với thuốc, nguyên liệu làm thuốc nhập khẩu vào Việt Nam được sử dụng trong trường hợp nào?",
        "option_a": "Khi nhãn gốc đã thể hiện đầy đủ nội dung so với nhãn đã được Bộ Y tế phê duyệt",
        "option_b": "Khi cơ sở nhập khẩu muốn thay đổi tên thương mại của thuốc đã được cấp số đăng ký",
        "option_c": "Khi thuốc sắp hết hạn dùng và cơ sở muốn gia hạn thêm thời gian sử dụng của thuốc",
        "option_d": "Khi nhãn gốc chưa thể hiện đầy đủ nội dung so với nhãn đã được Bộ Y tế phê duyệt",
        "answer": "D"
    },
    {
        "id": 106,
        "question": "Cách ghi ngày, tháng, năm trên nhãn thuốc có thể được phân cách bằng ký hiệu nào?",
        "option_a": "Chỉ dùng dấu “:” (ví dụ: 01:01:2025) hoặc dấu “,” (ví dụ: 01,01,2025) để phân cách",
        "option_b": "Chỉ được dùng dấu “/” (ví dụ: 01/01/2025), không được dùng dấu “.” hay dấu “-”",
        "option_c": "Dấu “*” (ví dụ: 01*01*2025), dấu “#” (ví dụ: 01#01#2025) hoặc dấu “~” (ví dụ: 01~01~2025)",
        "option_d": "Dấu “/” (ví dụ: 01/01/2025), dấu “.” (ví dụ: 01.01.2025) hoặc dấu “-” (ví dụ: 01-01-2025)",
        "answer": "D"
    },
    {
        "id": 107,
        "question": "Trường hợp thuốc chứa nhiều thành phần, hạn dùng của nhãn bao bì ngoài được ghi theo nguyên tắc nào?",
        "option_a": "Theo hạn dùng dài nhất trong các thành phần",
        "option_b": "Theo hạn dùng của thành phần có hàm lượng lớn nhất",
        "option_c": "Theo hạn dùng của thành phần đầu tiên trong công thức",
        "option_d": "Theo hạn dùng ngắn nhất trong các thành phần",
        "answer": "D"
    },
    {
        "id": 108,
        "question": "Khi có nhiều cơ sở tham gia vào sản xuất thuốc, trên nhãn phải ghi như thế nào?",
        "option_a": "Chỉ ghi tên cơ sở đứng tên đăng ký thuốc, không cần ghi vai trò của các cơ sở còn lại tham gia",
        "option_b": "Chỉ ghi tên cơ sở sản xuất bán thành phẩm vì đây là công đoạn quan trọng nhất của quy trình",
        "option_c": "Ghi tên tất cả cơ sở theo thứ tự bảng chữ cái mà không cần ghi rõ vai trò từng cơ sở tham gia",
        "option_d": "Ghi rõ vai trò từng cơ sở (sản xuất bán thành phẩm, đóng gói cấp 1, chịu trách nhiệm xuất xưởng...)",
        "answer": "D"
    },
    {
        "id": 109,
        "question": "Báo cáo bổ sung hoặc thay thế tờ hướng dẫn sử dụng thuốc phải được gửi trong thời hạn bao lâu kể từ khi kết thúc việc bổ sung hoặc thay thế?",
        "option_a": "15 ngày",
        "option_b": "1 tháng",
        "option_c": "3 tháng",
        "option_d": "6 tháng",
        "answer": "B"
    },
    {
        "id": 110,
        "question": "Theo Thông tư 01/2018/TT-BYT, nội dung nào bắt buộc phải có trên nhãn thuốc?",
        "option_a": "Giá bán lẻ, tên nhà phân phối, địa chỉ website",
        "option_b": "Tên bác sĩ kê đơn, tên người bệnh, ngày kê đơn",
        "option_c": "Tên thuốc, dạng bào chế, thành phần, hàm lượng",
        "option_d": "Số lượng bán ra, doanh thu, tên cửa hàng bán lẻ",
        "answer": "C"
    },
    {
        "id": 111,
        "question": "Thuốc nhập khẩu có nhãn gốc bằng tiếng nước ngoài thì phải kèm theo:",
        "option_a": "Nhãn phụ bằng tiếng Anh",
        "option_b": "Nhãn phụ bằng tiếng Việt",
        "option_c": "Tờ rơi quảng cáo tiếng Việt",
        "option_d": "Nhãn gốc in thêm lần nữa",
        "answer": "B"
    },
    {
        "id": 112,
        "question": "Cách ghi hạn dùng thuốc trên nhãn đúng quy định là:",
        "option_a": "MM-DD-YYYY hoặc DD-YYYY",
        "option_b": "YYYY-DD-MM hoặc DD-MM",
        "option_c": "YY-MM-DD hoặc DD-YY",
        "option_d": "DD-MM-YYYY hoặc MM-YYYY",
        "answer": "D"
    },
    {
        "id": 113,
        "question": "Ngoài ký hiệu “Rx” trên nhãn bao bì ngoài của thuốc kê đơn cần có thêm dòng chữ nào?",
        "option_a": "Thuốc nhập khẩu",
        "option_b": "Thuốc dùng ngoài",
        "option_c": "Thuốc không kê đơn",
        "option_d": "Thuốc kê đơn",
        "answer": "D"
    },
    {
        "id": 114,
        "question": "Trong tờ hướng dẫn sử dụng thuốc kê đơn phải có dòng chữ?",
        "option_a": "Thuốc này chỉ dùng theo đơn thuốc",
        "option_b": "Thuốc này không cần dùng theo đơn",
        "option_c": "Thuốc này chỉ dùng cho trẻ dưới 5 tuổi",
        "option_d": "Thuốc này chỉ bán tại bệnh viện công",
        "answer": "A"
    },
    {
        "id": 115,
        "question": "Các xét nghiệm hoặc tình trạng của người bệnh cần được đánh giá trước khi dùng thuốc nhằm mục đích gì?",
        "option_a": "Tăng giá bán của thuốc khi lưu hành trên thị trường",
        "option_b": "Kéo dài thời gian sử dụng của thuốc sau khi mở nắp",
        "option_c": "Thay thế hoàn toàn việc thăm khám của bác sĩ điều trị",
        "option_d": "Giảm thiểu nguy cơ phản ứng có hại cho người bệnh",
        "answer": "D"
    },
    {
        "id": 116,
        "question": "Các phản ứng có hại nghiêm trọng cần được?",
        "option_a": "Giữ bí mật nội bộ cơ sở sản xuất",
        "option_b": "Ghi nhỏ ở mặt sau của hộp thuốc",
        "option_c": "Bỏ qua nếu chưa có báo cáo ca bệnh",
        "option_d": "Cảnh báo cho nhân viên y tế",
        "answer": "D"
    },
    {
        "id": 117,
        "question": "Đơn vị hoạt lực đo lường cho một số chất đặc biệt được quốc tế hóa và dùng thông dụng trong ngành y tế là?",
        "option_a": "mg",
        "option_b": "mEq",
        "option_c": "IU",
        "option_d": "mmol",
        "answer": "C"
    },
    {
        "id": 118,
        "question": "Quy cách đóng gói thuốc được ghi theo các yếu tố nào?",
        "option_a": "Màu sắc, mùi vị, hình dạng thuốc",
        "option_b": "Giá bán, thuế, mức chiết khấu",
        "option_c": "Số lượng, khối lượng, thể tích",
        "option_d": "Nhà sản xuất, số lô, hạn dùng",
        "answer": "C"
    },
    {
        "id": 119,
        "question": "Tên thuốc, tên nguyên liệu làm thuốc phải được ghi ở vị trí như thế nào trên nhãn?",
        "option_a": "Ở vị trí khuất, nhỏ hơn so với tên của nhà sản xuất và các nội dung bắt buộc khác",
        "option_b": "Ở vị trí bất kỳ trên nhãn và có kích thước tương đương với các nội dung bắt buộc khác",
        "option_c": "Ở vị trí dễ thấy, dễ đọc và phải có kích thước lớn nhất so với nội dung bắt buộc khác",
        "option_d": "Ở vị trí dễ thấy nhưng kích thước phải nhỏ nhất so với các nội dung bắt buộc khác",
        "answer": "C"
    },
    {
        "id": 120,
        "question": "Thuốc nhập khẩu để lưu hành trên thị trường Việt Nam, thực hiện việc ghi nhãn theo quy định sau:",
        "option_a": "Ghi nhãn gốc bằng tiếng Việt với đầy đủ nội dung bắt buộc",
        "option_b": "Chỉ ghi nhãn gốc bằng tiếng nước ngoài, không cần nội dung bắt buộc",
        "option_c": "Không cần ghi nhãn gốc, chỉ ghi nhãn phụ bằng tiếng Anh của hãng",
        "option_d": "Chỉ cần ghi tên thuốc và số lô bằng tiếng Việt trên nhãn gốc",
        "answer": "A"
    },
    {
        "id": 121,
        "question": "Ghi địa chỉ cơ sở sản xuất như sau?",
        "option_a": "Tỉnh (thành phố trực thuộc trung ương) → huyện (quận, thị xã, thành phố thuộc tỉnh) → xã (phường, thị trấn) → số nhà, đường phố (thôn, xóm)",
        "option_b": "Số nhà, đường phố (thôn, xóm) → huyện (quận, thị xã, thành phố thuộc tỉnh) → xã (phường, thị trấn) → tỉnh (thành phố trực thuộc trung ương)",
        "option_c": "Số nhà, đường phố (thôn, xóm) → xã (phường, thị trấn) → huyện (quận, thị xã, thành phố thuộc tỉnh) → tỉnh (thành phố trực thuộc trung ương)",
        "option_d": "Xã (phường, thị trấn) → số nhà, đường phố (thôn, xóm) → tỉnh (thành phố trực thuộc trung ương) → huyện (quận, thị xã, thành phố thuộc tỉnh)",
        "answer": "C"
    },
    {
        "id": 122,
        "question": "Mục đích của việc ghi xuất xứ thuốc là gì?",
        "option_a": "Tăng giá bán và quảng bá hình ảnh của nước sản xuất thuốc",
        "option_b": "Giúp cơ sở được miễn kiểm nghiệm chất lượng khi nhập khẩu thuốc",
        "option_c": "Giúp người bệnh tự chẩn đoán và tự điều trị bệnh tại nhà",
        "option_d": "Đảm bảo tính minh bạch, rõ ràng và tuân thủ pháp luật",
        "answer": "D"
    },
    {
        "id": 123,
        "question": "Nhãn thuốc pha chế theo đơn dùng trong các cơ sở khám bệnh, chữa bệnh phải có các nội dung nào sau đây?",
        "option_a": "Tên thuốc, dạng bào chế, hoạt chất, giá bán lẻ; ngày pha chế, số lô, điều kiện bảo quản thuốc; tên bác sĩ kê đơn; số điện thoại của người bệnh có đơn thuốc",
        "option_b": "Tên thuốc, dạng bào chế, hoạt chất, nồng độ hoặc hàm lượng; ngày pha chế, hạn dùng, điều kiện bảo quản thuốc; tên, địa chỉ cơ sở pha chế thuốc; tên người bệnh có đơn thuốc",
        "option_c": "Tên thuốc, hãng sản xuất, nước sản xuất, số đăng ký; ngày xuất xưởng, hạn dùng, giá bán; tên người bán thuốc; tên người bệnh có đơn thuốc",
        "option_d": "Tên thuốc, dạng bào chế, hoạt chất, nồng độ; ngày pha chế, giá thuốc; địa chỉ nhà người bệnh; tên bác sĩ điều trị; con dấu của cơ sở pha chế",
        "answer": "B"
    },
    {
        "id": 124,
        "question": "Các phản ứng có hại của thuốc được phân nhóm theo?",
        "option_a": "Tần suất xảy ra (rất thường gặp, thường gặp, ít gặp, hiếm gặp, rất hiếm gặp)",
        "option_b": "Mức độ nặng nhẹ (rất nặng, nặng, trung bình, nhẹ, rất nhẹ) của phản ứng",
        "option_c": "Độ tuổi người bệnh (trẻ sơ sinh, trẻ em, người lớn, người cao tuổi)",
        "option_d": "Thời điểm xảy ra (ngay lập tức, sau vài giờ, sau vài ngày, sau vài tuần)",
        "answer": "A"
    },
    {
        "id": 125,
        "question": "Nhãn bao bì trung gian của thuốc phải có tối thiểu nội dung nào?",
        "option_a": "Tên thuốc, giá bán, địa chỉ nhà phân phối.",
        "option_b": "Số đăng ký, giá bán lẻ, tên người bán thuốc.",
        "option_c": "Tên thuốc, số lô sản xuất, hạn dùng.",
        "option_d": "Chỉ cần ghi tên thuốc và hình ảnh minh họa.",
        "answer": "C"
    },
    {
        "id": 126,
        "question": "Dạng thuốc lỏng, dạng bán rắn có quy cách đóng gói đa liều, công thức hàm lượng hoạt chất được ghi theo:",
        "option_a": "Số viên thuốc có trong mỗi đơn vị đóng gói của sản phẩm.",
        "option_b": "Chỉ ghi tổng khối lượng thuốc, không cần ghi hàm lượng hoạt chất.",
        "option_c": "Tỷ lệ phần triệu (ppm số mol/thể tích hoặc số mol/khối lượng).",
        "option_d": "Tỷ lệ phần trăm (% khối lượng/khối lượng hoặc khối lượng/thể tích).",
        "answer": "D"
    },
    {
        "id": 127,
        "question": "Yêu cầu về màu sắc, chữ, kí hiệu, hình ảnh trên nhãn thuốc so với màu nền của nhãn thì màu sắc phải:",
        "option_a": "Hòa lẫn màu nền",
        "option_b": "Giống màu nền",
        "option_c": "Nhạt hơn màu nền",
        "option_d": "Tương phản",
        "answer": "D"
    },
    {
        "id": 128,
        "question": "Cách ghi vai trò của cơ sở có liên quan đến thuốc đối với cơ sở nhập khẩu ghi là?",
        "option_a": "Doanh nghiệp nhập khẩu",
        "option_b": "Cơ sở sản xuất thuốc",
        "option_c": "Nhà phân phối thuốc",
        "option_d": "Cơ sở bán buôn thuốc",
        "answer": "A"
    },
    {
        "id": 129,
        "question": "Theo Luật Dược 2016, cơ quan nào chịu trách nhiệm quản lý nhà nước về chất lượng thuốc tại Việt Nam?",
        "option_a": "Bộ Công Thương",
        "option_b": "Bộ Y tế",
        "option_c": "Bộ Tài chính",
        "option_d": "Bộ Công an",
        "answer": "B"
    },
    {
        "id": 130,
        "question": "Thuốc sẽ bị đình chỉ lưu hành trong trường hợp nào sau đây?",
        "option_a": "Thuốc hết hạn sử dụng",
        "option_b": "Thuốc còn hạn sử dụng",
        "option_c": "Thuốc đạt tiêu chuẩn",
        "option_d": "Thuốc có số đăng ký",
        "answer": "A"
    },
    {
        "id": 131,
        "question": "Bộ tiêu chuẩn quốc gia về thuốc tại Việt Nam được thể hiện trong:",
        "option_a": "Danh mục thuốc thiết yếu",
        "option_b": "Luật Dược năm 2016",
        "option_c": "Dược thư quốc gia Việt Nam",
        "option_d": "Dược điển Việt Nam",
        "answer": "D"
    },
    {
        "id": 132,
        "question": "Thời gian tối đa để thu hồi thuốc mức độ 3 là:",
        "option_a": "10 ngày",
        "option_b": "15 ngày",
        "option_c": "60 ngày",
        "option_d": "30 ngày",
        "answer": "D"
    },
    {
        "id": 133,
        "question": "Khi phát hiện thuốc kém chất lượng trên thị trường, cơ quan quản lý sẽ tiến hành biện pháp nào đầu tiên?",
        "option_a": "Tiêu hủy toàn bộ thuốc của cơ sở vi phạm ngay lập tức",
        "option_b": "Cho phép cơ sở vi phạm tiếp tục kinh doanh bình thường",
        "option_c": "Tạm dừng hoạt động kinh doanh của cơ sở vi phạm",
        "option_d": "Chuyển toàn bộ hồ sơ vụ việc sang cơ quan công an điều tra",
        "answer": "C"
    },
    {
        "id": 134,
        "question": "Hình thức thu hồi thuốc gồm có:",
        "option_a": "Tạm thời và vĩnh viễn",
        "option_b": "Toàn phần và một phần",
        "option_c": "Tự nguyện và bắt buộc",
        "option_d": "Cục bộ và toàn quốc",
        "answer": "C"
    },
    {
        "id": 135,
        "question": "Một trong các Cơ sở Kiểm nghiệm của Nhà nước về thuốc ở Trung ương là:",
        "option_a": "Trung tâm Kiểm nghiệm Đồng Nai",
        "option_b": "Viện Dược liệu Trung ương",
        "option_c": "Khoa Dược Bệnh viện Chợ Rẫy",
        "option_d": "Viện Kiểm nghiệm thuốc TP.HCM",
        "answer": "D"
    },
    {
        "id": 136,
        "question": "Cơ quan kiểm nghiệm phải lưu mẫu trong thời gian ít nhất bao lâu kể từ ngày lấy mẫu hoặc nhận mẫu?",
        "option_a": "1 năm",
        "option_b": "2 năm",
        "option_c": "3 năm",
        "option_d": "5 năm",
        "answer": "B"
    },
    {
        "id": 137,
        "question": "Khi thuốc bị thu hồi, cơ sở kinh doanh phải báo cáo kết quả thu hồi cho cơ quan nào?",
        "option_a": "Cục Y tế dự phòng",
        "option_b": "Cục Quản lý Khám, chữa bệnh",
        "option_c": "Cục Quản lý Dược",
        "option_d": "Cục An toàn thực phẩm",
        "answer": "C"
    },
    {
        "id": 138,
        "question": "Thẩm quyền ra quyết định thu hồi thuốc bắt buộc thuộc về cơ quan sau đây:",
        "option_a": "Sở Y tế",
        "option_b": "Bộ Công an",
        "option_c": "Ủy ban nhân dân xã",
        "option_d": "Bộ Y tế",
        "answer": "D"
    },
    {
        "id": 139,
        "question": "Thuốc và nguyên liệu làm thuốc trước khi xuất xưởng phải đạt điều kiện gì?",
        "option_a": "Được cơ sở bán lẻ kiểm nghiệm lại, đạt tiêu chuẩn do cơ sở tự xây dựng",
        "option_b": "Chỉ cần có hóa đơn mua bán và bao bì nguyên vẹn, không cần kiểm nghiệm",
        "option_c": "Được cơ sở sản xuất tiến hành kiểm nghiệm, bảo đảm đạt tiêu chuẩn chất lượng",
        "option_d": "Được Bộ Công an kiểm nghiệm từng lô trước khi cơ sở xuất xưởng",
        "answer": "C"
    },
    {
        "id": 140,
        "question": "Ý nghĩa của tiêu chuẩn chất lượng thuốc là gì?",
        "option_a": "Là căn cứ để xác định giá bán thuốc; là bản cam kết của cơ sở về doanh thu; là điều kiện để thuốc được quảng cáo rộng rãi trên các phương tiện truyền thông",
        "option_b": "Chỉ là tài liệu tham khảo cho cơ sở sản xuất; không có giá trị pháp lý đối với cơ quan quản lý; không bắt buộc áp dụng khi thuốc lưu hành trên thị trường",
        "option_c": "Là căn cứ để cấp giấy chứng nhận đủ điều kiện kinh doanh dược; là hồ sơ nhân sự của cơ sở; là cơ sở để thu thuế đối với thuốc nhập khẩu vào Việt Nam",
        "option_d": "Là căn cứ để cơ quan quản lý, kiểm tra xác định chất lượng thuốc; là bản cam kết của cơ sở sản xuất, kinh doanh về chất lượng thuốc; là yêu cầu để thuốc được lưu hành và sử dụng",
        "answer": "D"
    },
    {
        "id": 141,
        "question": "Khi phát hiện thuốc giả, cơ sở kinh doanh phải làm gì?",
        "option_a": "Ngừng bán, cách ly, báo cơ quan quản lý",
        "option_b": "Tiếp tục bán nhưng thông báo rõ cho người mua",
        "option_c": "Tự ý tiêu hủy ngay, không cần báo cơ quan nào",
        "option_d": "Trả lại nhà cung cấp, không cần báo cơ quan nào",
        "answer": "A"
    },
    {
        "id": 142,
        "question": "Thuốc giả không bao gồm trường hợp nào sau đây?",
        "option_a": "Thuốc hết hạn sử dụng",
        "option_b": "Thuốc không có dược chất",
        "option_c": "Thuốc có dược chất khác nhãn",
        "option_d": "Thuốc mạo nhãn hiệu thuốc khác",
        "answer": "A"
    },
    {
        "id": 143,
        "question": "Trong trường hợp thuốc vi phạm mức độ 3, việc thu hồi phải hoàn thành trong thời gian tối đa:",
        "option_a": "10 ngày",
        "option_b": "15 ngày",
        "option_c": "60 ngày",
        "option_d": "30 ngày",
        "answer": "D"
    },
    {
        "id": 144,
        "question": "Đối tượng phải áp dụng quy định về quản lý chất lượng thuốc tại Việt Nam là:",
        "option_a": "Chỉ các cơ sở sản xuất thuốc có vốn đầu tư nước ngoài hoạt động tại Việt Nam",
        "option_b": "Chỉ các cơ quan quản lý nhà nước về dược, không áp dụng với cơ sở kinh doanh",
        "option_c": "Các tổ chức, cá nhân kinh doanh thuốc và các cơ quan, tổ chức, cá nhân liên quan",
        "option_d": "Chỉ các cơ sở bán lẻ thuốc và người trực tiếp sử dụng thuốc cho bản thân",
        "answer": "C"
    },
    {
        "id": 145,
        "question": "Phạm vi thu hồi đối với thuốc mức độ 1 là:",
        "option_a": "Chỉ các cơ sở bán buôn và cơ sở sản xuất thuốc",
        "option_b": "Chỉ các cơ sở khám bệnh, chữa bệnh sử dụng thuốc",
        "option_c": "Chỉ các cơ sở bán lẻ thuốc trên địa bàn tỉnh",
        "option_d": "Toàn bộ cơ sở kinh doanh và người sử dụng",
        "answer": "D"
    },
    {
        "id": 146,
        "question": "Trong thời gian không quá 5 ngày làm việc, kể từ ngày có quyết định thu hồi, cơ sở sản xuất hoặc nhập khẩu nguyên liệu làm thuốc phải:",
        "option_a": "Chỉ thông báo cho cơ sở đã mua, không cần tiếp nhận hàng trả lại",
        "option_b": "Tiêu hủy ngay toàn bộ nguyên liệu còn tồn kho tại cơ sở sản xuất",
        "option_c": "Thu hồi đến các cơ sở đã mua nguyên liệu, đồng thời tiếp nhận trả lại",
        "option_d": "Báo cáo kết quả thu hồi cho Bộ Công an rồi mới bắt đầu thu hồi",
        "answer": "C"
    },
    {
        "id": 147,
        "question": "GSP (Good Storage Practice) là nguyên tắc thực hành tốt trong lĩnh vực sau đây:",
        "option_a": "Sản xuất thuốc tại các nhà máy đạt tiêu chuẩn",
        "option_b": "Bảo quản thuốc tại kho và trong quá trình phân phối",
        "option_c": "Kiểm nghiệm thuốc tại các phòng thí nghiệm",
        "option_d": "Thử nghiệm lâm sàng thuốc trên người tình nguyện",
        "answer": "B"
    },
    {
        "id": 148,
        "question": "Ngoài việc được cơ sở sản xuất kiểm nghiệm còn phải định kỳ lấy mẫu kiểm tra bởi cơ quan nhà nước có thẩm quyền, là những loại thuốc sau:",
        "option_a": "Thuốc kháng sinh, thuốc giảm đau và các thuốc khác do Sở Y tế quy định",
        "option_b": "Vắc xin, sinh phẩm huyết thanh chứa kháng thể và thuốc khác do Bộ Y tế quy định",
        "option_c": "Thuốc không kê đơn, thực phẩm chức năng và mỹ phẩm do Bộ Công Thương quy định",
        "option_d": "Thuốc cổ truyền, dược liệu thô và các loại trà thảo dược bán lẻ trên thị trường",
        "answer": "B"
    },
    {
        "id": 149,
        "question": "Những loại cơ sở nào được phép kiểm nghiệm thuốc và nguyên liệu làm thuốc?",
        "option_a": "Chỉ cơ sở nhà nước; cơ sở kinh doanh dịch vụ không được tham gia kiểm nghiệm",
        "option_b": "Cơ sở nhà nước; cơ sở kinh doanh dịch vụ kiểm nghiệm thuốc, nguyên liệu làm thuốc",
        "option_c": "Cơ sở bán lẻ thuốc; cơ sở khám bệnh, chữa bệnh tư nhân có phòng xét nghiệm",
        "option_d": "Chỉ cơ sở sản xuất thuốc có nhu cầu tự kiểm nghiệm sản phẩm của chính mình",
        "answer": "B"
    },
    {
        "id": 150,
        "question": "Trách nhiệm bồi thường thiệt hại khi có lỗi trong việc thu hồi nguyên liệu làm thuốc thuộc về ai?",
        "option_a": "Cơ sở sản xuất và cơ sở phân phối",
        "option_b": "Chỉ cơ sở bán lẻ và người sử dụng",
        "option_c": "Chỉ Cục Quản lý Dược và Sở Y tế",
        "option_d": "Chỉ người bệnh đã mua thuốc",
        "answer": "A"
    },
    {
        "id": 151,
        "question": "Ai là người phải chịu chi phí cho việc thu hồi và xử lý thuốc bị thu hồi?",
        "option_a": "Cơ sở bán lẻ",
        "option_b": "Cơ sở sản xuất",
        "option_c": "Người bệnh",
        "option_d": "Sở Y tế",
        "answer": "B"
    },
    {
        "id": 152,
        "question": "Những loại thuốc sau đây ngoài việc được cơ sở sản xuất kiểm nghiệm còn phải định kỳ lấy mẫu kiểm tra bởi cơ quan nhà nước có thẩm quyền:",
        "option_a": "Thuốc kháng sinh, thuốc giảm đau và các thuốc khác do Sở Y tế quy định",
        "option_b": "Thuốc không kê đơn, thực phẩm chức năng và mỹ phẩm do Bộ Công Thương quy định",
        "option_c": "Thuốc cổ truyền, dược liệu thô và các loại trà thảo dược bán lẻ trên thị trường",
        "option_d": "Vắc xin, sinh phẩm huyết thanh chứa kháng thể và thuốc khác do Bộ Y tế quy định",
        "answer": "D"
    },
    {
        "id": 153,
        "question": "Bộ trưởng Bộ Y tế ban hành văn bản nào liên quan đến tiêu chuẩn chất lượng thuốc trên toàn quốc?",
        "option_a": "Danh mục thuốc thiết yếu",
        "option_b": "Thông tư về kê đơn thuốc",
        "option_c": "Luật Dược số 105/2016/QH13",
        "option_d": "Dược thư quốc gia Việt Nam",
        "answer": "D"
    },
    {
        "id": 154,
        "question": "GDP (Good Distribution Practice) có mục đích chính là gì?",
        "option_a": "Đảm bảo thuốc được sản xuất đúng công thức, quy trình và đạt tiêu chuẩn chất lượng",
        "option_b": "Đảm bảo thuốc được phân phối và vận chuyển an toàn, chất lượng không bị thay đổi",
        "option_c": "Đảm bảo thuốc được kiểm nghiệm đầy đủ bởi cơ quan kiểm nghiệm nhà nước định kỳ",
        "option_d": "Đảm bảo thuốc được quảng cáo đúng nội dung đã được Bộ Y tế xác nhận trước đó",
        "answer": "B"
    },
    {
        "id": 155,
        "question": "“Thuốc giả” được hiểu là:",
        "option_a": "Thuốc không chứa dược chất đã công bố; thuốc có dược chất khác với nhãn ghi; thuốc có hàm lượng dược chất thấp hơn ≥ 70% so với mức tối thiểu cho phép",
        "option_b": "Thuốc còn nguyên bao bì nhưng đã hết hạn dùng; thuốc được bảo quản sai điều kiện quy định; thuốc có nhãn bị mờ chữ do vận chuyển",
        "option_c": "Thuốc không chứa dược chất đã công bố; thuốc có dược chất khác với nhãn ghi; thuốc có số lô bị in sai lệch nhẹ so với hồ sơ đăng ký",
        "option_d": "Thuốc có hàm lượng dược chất thấp hơn 5% so với mức tối thiểu cho phép; thuốc có bao bì bị móp méo; thuốc có tờ hướng dẫn bị thiếu",
        "answer": "A"
    },
    {
        "id": 156,
        "question": "GMP (Good Manufacturing Practice) là một trong các nguyên tắc thực hành tốt, có vai trò chính là gì?",
        "option_a": "Đảm bảo thuốc được bảo quản tại kho đạt tiêu chuẩn chất lượng, an toàn và hiệu quả",
        "option_b": "Đảm bảo thuốc được sản xuất đạt tiêu chuẩn chất lượng, an toàn và hiệu quả",
        "option_c": "Đảm bảo thuốc được phân phối đúng thời hạn, đúng địa điểm và đúng đối tượng",
        "option_d": "Đảm bảo thuốc được bán lẻ đúng giá niêm yết và đúng quy định của pháp luật",
        "answer": "B"
    },
    {
        "id": 157,
        "question": "Việc lấy mẫu thuốc để kiểm tra chất lượng phải tuân thủ theo văn bản nào?",
        "option_a": "Thông tư hướng dẫn kê đơn thuốc trong điều trị ngoại trú",
        "option_b": "Thông tư hướng dẫn việc ghi nhãn thuốc và nguyên liệu",
        "option_c": "Thông tư hướng dẫn lấy mẫu thuốc để xác định chất lượng",
        "option_d": "Nghị định quy định xử phạt vi phạm hành chính về y tế",
        "answer": "C"
    },
    {
        "id": 158,
        "question": "Cơ sở y tế của lực lượng vũ trang nhân dân cần Giấy chứng nhận đủ điều kiện kinh doanh dược khi cấp phát thuốc cho cán bộ, chiến sĩ không?",
        "option_a": "Cần phải có Giấy chứng nhận đủ điều kiện kinh doanh dược, giấy phép hoạt động để đảm bảo an toàn.",
        "option_b": "Không cần, vì đây là cơ sở y tế nội bộ không kinh doanh, không phải xin giấy phép hoạt động.",
        "option_c": "Chỉ cần có giấy phép hoạt động, không cần Giấy chứng nhận đủ điều kiện kinh doanh dược.",
        "option_d": "Chỉ cần có quyết định thành lập của đơn vị quân đội, không cần giấy phép nào khác.",
        "answer": "A"
    },
    {
        "id": 159,
        "question": "Khi bán lẻ thuốc không đựng trong bao bì ngoài của thuốc, cơ sở kinh doanh dược cần ghi rõ thông tin sau đây:",
        "option_a": "Tên thuốc, hàm lượng, hạn dùng, liều dùng, cách dùng.",
        "option_b": "Tên thuốc, giá nhập, nhà cung cấp, số lô sản xuất.",
        "option_c": "Tên người bán, địa chỉ nhà thuốc, giá bán, khuyến mại.",
        "option_d": "Tên thuốc, nước sản xuất, giá bán, số điện thoại nhà thuốc.",
        "answer": "A"
    },
    {
        "id": 160,
        "question": "Kể từ ngày Sở Y tế có văn bản yêu cầu sửa đổi, bổ sung hồ sơ, cơ sở phải nộp hồ sơ sửa đổi, bổ sung theo yêu cầu trong thời gian bao lâu?",
        "option_a": "01 tháng",
        "option_b": "03 tháng",
        "option_c": "06 tháng",
        "option_d": "12 tháng",
        "answer": "C"
    },
    {
        "id": 161,
        "question": "Cơ quan sau đây có thẩm quyền cấp Giấy chứng nhận cho cơ sở sản xuất thuốc, nguyên liệu làm thuốc:",
        "option_a": "Giám đốc Sở Y tế",
        "option_b": "Cục trưởng Cục Quản lý Dược",
        "option_c": "Bộ trưởng Bộ Y tế",
        "option_d": "Thủ tướng Chính phủ",
        "answer": "C"
    },
    {
        "id": 162,
        "question": "Tủ thuốc trạm y tế xã được phép bán các loại thuốc sau:",
        "option_a": "Chỉ thuốc kê đơn và thuốc kiểm soát đặc biệt các loại.",
        "option_b": "Mọi loại thuốc hóa dược, sinh phẩm và vắc xin phòng bệnh.",
        "option_c": "Chỉ thực phẩm chức năng, mỹ phẩm và các dụng cụ y tế thông thường.",
        "option_d": "Thuốc thiết yếu, thuốc kiểm soát đặc biệt, thuốc hạn chế bán lẻ.",
        "answer": "D"
    },
    {
        "id": 163,
        "question": "Quầy thuốc được phép bán những loại thuốc nào?",
        "option_a": "Thuốc gây nghiện, thuốc hướng thần, thuốc tiền chất các loại.",
        "option_b": "Chỉ thuốc kê đơn và vắc xin, sinh phẩm y tế các loại.",
        "option_c": "Mọi loại thuốc kể cả thuốc phải kiểm soát đặc biệt.",
        "option_d": "Thuốc thiết yếu, thuốc hạn chế bán lẻ, thuốc không kê đơn.",
        "answer": "D"
    },
    {
        "id": 164,
        "question": "Cơ sở tổ chức chuỗi nhà thuốc được phân phối thuốc như sau:",
        "option_a": "Chỉ được phân phối khi có giấy phép phân phối riêng cho từng nhà thuốc thuộc chuỗi.",
        "option_b": "Không được phân phối thuốc cho bất kỳ nhà thuốc nào, kể cả nhà thuốc trong chuỗi.",
        "option_c": "Được phân phối thuốc cho các nhà thuốc trong chuỗi mà không cần giấy phép phân phối riêng.",
        "option_d": "Được phân phối thuốc cho mọi cơ sở bán lẻ trên cả nước mà không cần giấy phép nào.",
        "answer": "C"
    },
    {
        "id": 165,
        "question": "Sau đây là trách nhiệm của cơ sở kinh doanh dược:",
        "option_a": "Bảo đảm lợi nhuận tối đa cho cơ sở trong mọi điều kiện kinh doanh.",
        "option_b": "Bảo đảm thuốc lưu hành đúng chất lượng, hợp lý, an toàn, hiệu quả.",
        "option_c": "Bảo đảm thuốc luôn có giá bán thấp nhất so với các cơ sở khác.",
        "option_d": "Chỉ chịu trách nhiệm về thuốc do chính cơ sở mình sản xuất ra.",
        "answer": "B"
    },
    {
        "id": 166,
        "question": "Trường hợp nào sau đây là trường hợp bị thu hồi Giấy chứng nhận đủ điều kiện kinh doanh dược?",
        "option_a": "Cơ sở thay đổi tên thương mại và biểu tượng nhưng vẫn giữ nguyên địa điểm kinh doanh.",
        "option_b": "Cơ sở bán thuốc có chương trình khuyến mại theo đúng quy định của pháp luật.",
        "option_c": "Cơ sở giả mạo hồ sơ, tài liệu để được cấp Giấy chứng nhận đủ điều kiện kinh doanh dược.",
        "option_d": "Cơ sở đề nghị bổ sung thêm phạm vi kinh doanh trong Giấy chứng nhận đã được cấp.",
        "answer": "C"
    },
    {
        "id": 167,
        "question": "Điều kiện về cơ sở vật chất, kỹ thuật và nhân sự của cơ sở sản xuất thuốc bao gồm:",
        "option_a": "Có địa điểm kinh doanh, quầy bán thuốc, tủ trưng bày, kho tạm, hệ thống ghi chép doanh thu và nhân viên bán hàng đủ số lượng theo quy định.",
        "option_b": "Có địa điểm, nhà xưởng sản xuất, phòng kiểm nghiệm, kho bảo quản, hệ thống quản lý chất lượng và nhân sự đáp ứng thực hành tốt sản xuất thuốc.",
        "option_c": "Có địa điểm, nhà xưởng sản xuất, kho bảo quản, hệ thống bán hàng trực tuyến, không bắt buộc có phòng kiểm nghiệm và hệ thống quản lý chất lượng.",
        "option_d": "Chỉ cần có địa điểm sản xuất và nhân sự có bằng cấp chuyên môn, không bắt buộc có kho bảo quản hay hệ thống quản lý chất lượng nào.",
        "answer": "B"
    },
    {
        "id": 168,
        "question": "Theo nội dung trong văn bản, đối tượng được cấp Giấy chứng nhận đủ điều kiện kinh doanh dược là:",
        "option_a": "Các cơ sở khám bệnh, chữa bệnh",
        "option_b": "Các cơ sở đào tạo nhân lực y tế",
        "option_c": "Các cơ sở sản xuất thực phẩm",
        "option_d": "Các cơ sở kinh doanh dược",
        "answer": "D"
    },
    {
        "id": 169,
        "question": "Chứng từ, tài liệu liên quan đến từng lô thuốc, nguyên liệu làm thuốc đối với cơ sở kinh doanh dược được lưu giữ:",
        "option_a": "03 năm kể từ ngày thuốc hết hạn dùng.",
        "option_b": "01 năm kể từ ngày thuốc hết hạn dùng.",
        "option_c": "06 tháng kể từ ngày thuốc hết hạn dùng.",
        "option_d": "05 năm kể từ ngày thuốc được nhập kho.",
        "answer": "B"
    },
    {
        "id": 170,
        "question": "Cơ sở kinh doanh dược có trách nhiệm đối với chất lượng thuốc như sau:",
        "option_a": "Chỉ chịu trách nhiệm về chất lượng thuốc khi bị cơ quan nhà nước kiểm tra.",
        "option_b": "Chịu trách nhiệm về bảo đảm chất lượng của cơ sở sản xuất và nguyên liệu.",
        "option_c": "Không chịu trách nhiệm vì chất lượng thuốc do cơ sở sản xuất thuốc đảm bảo.",
        "option_d": "Chỉ chịu trách nhiệm về chất lượng thuốc đã bán ra trong vòng 30 ngày.",
        "answer": "B"
    },
    {
        "id": 171,
        "question": "Hoạt động kinh doanh dược gồm bao nhiêu hoạt động?",
        "option_a": "3 hoạt động",
        "option_b": "4 hoạt động",
        "option_c": "5 hoạt động",
        "option_d": "7 hoạt động",
        "answer": "C"
    },
    {
        "id": 172,
        "question": "Khi bán lẻ thuốc không còn bao bì ngoài, cơ sở phải ghi đầy đủ thông tin ngoại trừ:",
        "option_a": "Hàm lượng thuốc",
        "option_b": "Liều dùng, cách dùng",
        "option_c": "Hạn dùng của thuốc",
        "option_d": "Giá nhập thuốc",
        "answer": "D"
    },
    {
        "id": 173,
        "question": "Thuốc, nguyên liệu làm thuốc sau đây bị nghiêm cấm kinh doanh:",
        "option_a": "Thuốc, nguyên liệu là thuốc đã có thông báo thu hồi của cơ quan nhà nước có thẩm quyền.",
        "option_b": "Thuốc, nguyên liệu làm thuốc đã được cấp số đăng ký còn hiệu lực lưu hành tại Việt Nam.",
        "option_c": "Thuốc, nguyên liệu còn hạn dùng, bảo quản đúng quy định và có nguồn gốc xuất xứ rõ ràng.",
        "option_d": "Thuốc không kê đơn có tờ hướng dẫn sử dụng bằng tiếng Việt và có đầy đủ nhãn thuốc.",
        "answer": "A"
    },
    {
        "id": 174,
        "question": "Theo quy định, Nhà thuốc có quyền hoạt động kinh doanh các thuốc sau đây:",
        "option_a": "Bán buôn thuốc cho các nhà thuốc, quầy thuốc khác trên địa bàn tỉnh, thành phố.",
        "option_b": "Mua và bán lẻ vắc xin, sinh phẩm y tế mà không cần điều kiện bảo quản riêng.",
        "option_c": "Mua nguyên liệu làm thuốc để pha chế thuốc theo đơn và bán tại cơ sở.",
        "option_d": "Xuất khẩu, nhập khẩu thuốc trực tiếp mà không cần giấy phép của Bộ Y tế.",
        "answer": "C"
    },
    {
        "id": 175,
        "question": "Hành vi quảng cáo thuốc sau đây bị cấm:",
        "option_a": "Quảng cáo thuốc đúng nội dung đã được xác nhận.",
        "option_b": "Quảng cáo thuốc khi chưa có xác nhận nội dung.",
        "option_c": "Quảng cáo thuốc có ghi số giấy xác nhận quảng cáo.",
        "option_d": "Quảng cáo thuốc theo tờ hướng dẫn sử dụng đã duyệt.",
        "answer": "B"
    },
    {
        "id": 176,
        "question": "Chọn phát biểu đúng về Giấy chứng nhận đủ điều kiện kinh doanh dược: có thời hạn bao lâu?",
        "option_a": "Có thời hạn 5 năm kể từ ngày được cấp.",
        "option_b": "Có thời hạn 3 năm kể từ ngày được cấp.",
        "option_c": "Không quy định thời gian hiệu lực.",
        "option_d": "Có thời hạn 10 năm kể từ ngày được cấp.",
        "answer": "C"
    },
    {
        "id": 177,
        "question": "Cơ sở kinh doanh dược có quyền nào sau đây?",
        "option_a": "Được tự ý quảng cáo thuốc mà không cần xác nhận nội dung của cơ quan có thẩm quyền; được bán thuốc đã hết hạn dùng với giá ưu đãi cho người dân có nhu cầu; được tự quyết định giá thuốc mà không chịu sự quản lý, kiểm soát nào của nhà nước trong mọi trường hợp",
        "option_b": "Hưởng chính sách ưu đãi khi thực hiện hoạt động kinh doanh dược theo quy định của pháp luật; không được thông tin, quảng cáo thuốc dưới bất kỳ hình thức nào; không được thực hiện chương trình hỗ trợ thuốc miễn phí cho cơ sở khám bệnh, chữa bệnh để điều trị cho bệnh nhân",
        "option_c": "Hưởng chính sách ưu đãi khi thực hiện hoạt động kinh doanh dược theo quy định của pháp luật; được thông tin, quảng cáo thuốc theo quy định của pháp luật; thực hiện chương trình hỗ trợ thuốc miễn phí cho cơ sở khám bệnh, chữa bệnh để điều trị cho bệnh nhân theo quy định của Bộ trưởng Bộ Y tế",
        "option_d": "Được miễn toàn bộ các loại thuế khi kinh doanh dược theo quy định của pháp luật; được ưu tiên xuất khẩu, nhập khẩu thuốc mà không cần giấy phép của Bộ Y tế; được cấp phát thuốc miễn phí cho mọi người dân không cần có đơn thuốc của cơ sở khám bệnh, chữa bệnh",
        "answer": "C"
    },
    {
        "id": 178,
        "question": "Theo quy định cơ sở chuyên bán lẻ dược liệu, thuốc dược liệu, thuốc cổ truyền không được phép kinh doanh:",
        "option_a": "Dược liệu.",
        "option_b": "Thuốc cổ truyền.",
        "option_c": "Thuốc dược liệu.",
        "option_d": "Thuốc hóa dược.",
        "answer": "D"
    },
    {
        "id": 179,
        "question": "Giấy chứng nhận đủ điều kiện kinh doanh dược của cơ sở bán lẻ thuốc phải được cấp bởi cơ quan sau:",
        "option_a": "Bộ Y tế",
        "option_b": "Cục Quản lý Dược",
        "option_c": "Ủy ban nhân dân xã",
        "option_d": "Sở Y tế",
        "answer": "D"
    },
    {
        "id": 180,
        "question": "Các hoạt động nào sau đây không thuộc kinh doanh dược?",
        "option_a": "Nghiên cứu khoa học về thuốc.",
        "option_b": "Bán lẻ thuốc cho người tiêu dùng.",
        "option_c": "Xuất khẩu nguyên liệu làm thuốc.",
        "option_d": "Bảo quản thuốc theo hợp đồng.",
        "answer": "A"
    },
    {
        "id": 181,
        "question": "Trong các cơ sở sau, cơ sở nào không thuộc hệ thống kinh doanh dược?",
        "option_a": "Nhà thuốc bán lẻ",
        "option_b": "Quầy thuốc bán lẻ",
        "option_c": "Cơ sở bán buôn thuốc",
        "option_d": "Phòng khám đa khoa",
        "answer": "D"
    },
    {
        "id": 182,
        "question": "Người hành nghề dược có đạo đức nghề nghiệp kém, cố tình bán thuốc giả sẽ bị xử lý:",
        "option_a": "Thu hồi chứng chỉ hành nghề, có thể truy cứu trách nhiệm hình sự.",
        "option_b": "Chỉ nhắc nhở bằng văn bản, không bị thu hồi chứng chỉ hành nghề.",
        "option_c": "Chỉ phạt cảnh cáo và cho tiếp tục hành nghề dược tại cơ sở khác.",
        "option_d": "Chỉ bị phạt tiền, không bị thu hồi chứng chỉ, không bị truy cứu.",
        "answer": "A"
    },
    {
        "id": 183,
        "question": "Cơ sở sau thuộc nhóm cơ sở kinh doanh dược:",
        "option_a": "Cơ sở đào tạo nhân lực ngành dược, y tế",
        "option_b": "Cơ sở bán buôn thuốc, nguyên liệu làm thuốc",
        "option_c": "Cơ sở khám bệnh, chữa bệnh có giường bệnh",
        "option_d": "Cơ sở sản xuất thực phẩm chức năng, mỹ phẩm",
        "answer": "B"
    },
    {
        "id": 184,
        "question": "Trường hợp không có yêu cầu sửa đổi, bổ sung hồ sơ, Sở Y tế có văn bản cho phép cơ sở bán lẻ thuốc thuộc danh mục thuốc hạn chế bán lẻ trong thời gian bao nhiêu ngày kể từ ngày ghi trên phiếu tiếp nhận hồ sơ?",
        "option_a": "7 ngày",
        "option_b": "5 ngày",
        "option_c": "10 ngày",
        "option_d": "15 ngày",
        "answer": "A"
    },
    {
        "id": 185,
        "question": "Người chịu trách nhiệm chuyên môn về dược của cơ sở kiểm nghiệm thuốc, nguyên liệu làm thuốc cần có tối thiểu bao nhiêu năm thực hành chuyên môn tại cơ sở phù hợp?",
        "option_a": "2 năm",
        "option_b": "3 năm",
        "option_c": "5 năm",
        "option_d": "10 năm",
        "answer": "C"
    },
    {
        "id": 186,
        "question": "Mức phạt tiền từ 5.000.000 đồng đến 10.000.000 đồng áp dụng cho hành vi nào sau đây?",
        "option_a": "Cho thuê, cho mượn Chứng chỉ hành nghề dược để kinh doanh thuốc tại cơ sở khác.",
        "option_b": "Hành nghề dược không đúng phạm vi chuyên môn ghi trong Chứng chỉ hành nghề dược.",
        "option_c": "Kinh doanh thuốc chưa được cấp số đăng ký lưu hành trên thị trường Việt Nam.",
        "option_d": "Quảng cáo thuốc chưa có giấy xác nhận nội dung quảng cáo của Bộ Y tế cấp.",
        "answer": "B"
    },
    {
        "id": 187,
        "question": "Ngoài hình thức phạt tiền, hành vi sử dụng Chứng chỉ hành nghề dược giả có thể bị xử phạt bổ sung như thế nào?",
        "option_a": "Tước quyền sử dụng Chứng chỉ hành nghề dược trong thời hạn từ 06 đến 12 tháng.",
        "option_b": "Tước quyền sử dụng Chứng chỉ hành nghề dược trong thời hạn từ 12 đến 24 tháng.",
        "option_c": "Chỉ tịch thu Chứng chỉ giả, không áp dụng hình thức xử phạt bổ sung nào khác.",
        "option_d": "Tước quyền sử dụng Chứng chỉ hành nghề dược trong thời hạn từ 01 đến 03 tháng.",
        "answer": "D"
    },
    {
        "id": 188,
        "question": "Khi Chứng chỉ hành nghề dược bị mất hoặc hư hỏng, hồ sơ đề nghị cấp lại KHÔNG bắt buộc phải có giấy tờ nào sau đây?",
        "option_a": "Đơn đề nghị cấp lại Chứng chỉ hành nghề dược theo mẫu quy định",
        "option_b": "Hai ảnh chân dung cỡ 4 cm x 6 cm chụp trong thời gian gần đây",
        "option_c": "Văn bằng chuyên môn tương ứng với nội dung đề nghị thay đổi",
        "option_d": "Chứng chỉ hành nghề dược cũ đã bị hư hỏng (nếu có thể nộp)",
        "answer": "C"
    },
    {
        "id": 189,
        "question": "Trong trường hợp điều chỉnh nội dung Chứng chỉ hành nghề dược, hồ sơ phải có thêm loại giấy tờ nào?",
        "option_a": "Chỉ cần đơn đề nghị, không cần bất kỳ giấy tờ chứng minh nào khác",
        "option_b": "Giấy xác nhận của UBND xã về nơi cư trú trong 05 năm gần nhất",
        "option_c": "Hợp đồng lao động ký với một cơ sở kinh doanh dược bất kỳ",
        "option_d": "Bản sao có chứng thực các giấy tờ chứng minh nội dung thay đổi",
        "answer": "D"
    },
    {
        "id": 190,
        "question": "Người lao động được cấp chứng chỉ hành nghề khi nào?",
        "option_a": "Khi có hộ khẩu thường trú tại địa phương nơi dự định hành nghề dược.",
        "option_b": "Khi có văn bằng, chứng chỉ phù hợp và đủ điều kiện theo quy định pháp luật.",
        "option_c": "Khi có thư giới thiệu của cơ sở kinh doanh dược đã nhận vào làm việc.",
        "option_d": "Khi làm việc tại cơ sở bất kỳ từ 10 năm trở lên mà không cần văn bằng.",
        "answer": "B"
    },
    {
        "id": 191,
        "question": "Điều kiện nào sau đây không phải là điều kiện để được cấp chứng chỉ hành nghề xây dựng?",
        "option_a": "Có năng lực hành vi dân sự đầy đủ.",
        "option_b": "Có trình độ chuyên môn phù hợp.",
        "option_c": "Đã qua sát hạch kinh nghiệm nghề nghiệp.",
        "option_d": "Có hộ khẩu thường trú tại nơi hành nghề.",
        "answer": "D"
    },
    {
        "id": 192,
        "question": "Chứng chỉ hành nghề có thời hạn bao lâu (theo quy định pháp luật về xây dựng hiện hành)?",
        "option_a": "2 năm",
        "option_b": "3 năm",
        "option_c": "10 năm",
        "option_d": "5 năm",
        "answer": "D"
    },
    {
        "id": 193,
        "question": "Người chịu trách nhiệm chuyên môn về dược tại cơ sở sản xuất thuốc phải có:",
        "option_a": "Đại học Dược + 05 năm thực hành",
        "option_b": "Đại học Dược + 02 năm thực hành",
        "option_c": "Trung cấp Dược + 05 năm thực hành",
        "option_d": "Cao đẳng Dược + 03 năm thực hành",
        "answer": "A"
    },
    {
        "id": 194,
        "question": "Trong trường hợp nào người đề nghị cấp Chứng chỉ hành nghề dược chỉ cần nộp Đơn đề nghị, không cần các giấy tờ khác?",
        "option_a": "Khi chứng chỉ bị thu hồi do người hành nghề cho mượn",
        "option_b": "Khi người hành nghề thay đổi họ tên trên chứng chỉ",
        "option_c": "Khi chứng chỉ bị thu hồi do lỗi của cơ quan cấp",
        "option_d": "Khi chứng chỉ hết hạn sau 5 năm kể từ ngày cấp",
        "answer": "C"
    },
    {
        "id": 195,
        "question": "Người đã có Chứng chỉ hành nghề dược nhưng bị thu hồi, muốn xin cấp lại thì phải chờ ít nhất bao lâu kể từ ngày bị thu hồi?",
        "option_a": "12 tháng",
        "option_b": "06 tháng",
        "option_c": "18 tháng",
        "option_d": "24 tháng",
        "answer": "A"
    },
    {
        "id": 196,
        "question": "Trong thời hạn bao lâu kể từ ngày nhận được quyết định thu hồi, Bộ Y tế và các Sở Y tế phải cập nhật thông tin thu hồi chứng chỉ hành nghề dược trên Cổng thông tin điện tử?",
        "option_a": "03 ngày làm việc",
        "option_b": "10 ngày làm việc",
        "option_c": "15 ngày làm việc",
        "option_d": "05 ngày làm việc",
        "answer": "D"
    },
    {
        "id": 197,
        "question": "Chứng chỉ hành nghề dược bị thu hồi nếu người hành nghề:",
        "option_a": "Chuyển nơi cư trú sang tỉnh, thành phố khác.",
        "option_b": "Không hành nghề trong 12 tháng liên tục.",
        "option_c": "Thay đổi vị trí chuyên môn tại cùng một cơ sở.",
        "option_d": "Nghỉ phép hằng năm theo quy định của pháp luật.",
        "answer": "B"
    },
    {
        "id": 198,
        "question": "Thời hạn cấp Chứng chỉ hành nghề dược lần đầu kể từ ngày ghi trên Phiếu tiếp nhận hồ sơ là bao lâu?",
        "option_a": "20 ngày",
        "option_b": "10 ngày",
        "option_c": "30 ngày",
        "option_d": "45 ngày",
        "answer": "A"
    },
    {
        "id": 199,
        "question": "Trong thời hạn bao lâu kể từ ngày cơ quan tiếp nhận hồ sơ có văn bản thông báo sửa đổi, bổ sung mà người đề nghị không nộp hồ sơ sửa đổi, bổ sung, thì hồ sơ không còn giá trị?",
        "option_a": "03 tháng",
        "option_b": "06 tháng",
        "option_c": "12 tháng",
        "option_d": "24 tháng",
        "answer": "B"
    },
    {
        "id": 200,
        "question": "Người phụ trách công tác dược lâm sàng của cơ sở khám bệnh, chữa bệnh phải đáp ứng điều kiện nào sau đây?",
        "option_a": "Có bằng đại học dược hoặc y học cổ truyền/dược cổ truyền và ít nhất 5 năm thực hành tại cơ sở phù hợp",
        "option_b": "Có bằng đại học dược hoặc y học cổ truyền/dược cổ truyền và ít nhất 2 năm thực hành tại cơ sở phù hợp",
        "option_c": "Có bằng trung cấp dược và ít nhất 02 năm thực hành tại cơ sở khám bệnh, chữa bệnh phù hợp",
        "option_d": "Chỉ cần có bằng đại học bất kỳ ngành nào và có chứng chỉ tin học, ngoại ngữ theo quy định",
        "answer": "B"
    },
    {
        "id": 201,
        "question": "Người có bằng thạc sĩ hoặc chuyên khoa I phù hợp chuyên môn được giảm thời gian thực hành còn:",
        "option_a": "6 tháng",
        "option_b": "3 tháng",
        "option_c": "12 tháng",
        "option_d": "24 tháng",
        "answer": "A"
    },
    {
        "id": 202,
        "question": "Văn bằng nào sau đây không được chấp nhận để cấp Chứng chỉ hành nghề dược?",
        "option_a": "Bằng đại học ngành dược",
        "option_b": "Bằng trung cấp kế toán",
        "option_c": "Bằng cao đẳng ngành dược",
        "option_d": "Bằng trung cấp ngành dược",
        "answer": "B"
    },
    {
        "id": 203,
        "question": "Trong thành phần hồ sơ cấp chứng chỉ, giấy tờ nào chứng minh tình trạng pháp lý, tiền án tiền sự của người xin cấp?",
        "option_a": "Giấy khám sức khỏe",
        "option_b": "Giấy xác nhận thực hành",
        "option_c": "Phiếu lý lịch tư pháp",
        "option_d": "Căn cước công dân",
        "answer": "C"
    },
    {
        "id": 204,
        "question": "Người vi phạm đạo đức nghề nghiệp gây hậu quả nghiêm trọng sẽ bị:",
        "option_a": "Chỉ bị khiển trách nội bộ",
        "option_b": "Chỉ bị phạt cảnh cáo",
        "option_c": "Chuyển công tác sang nơi khác",
        "option_d": "Thu hồi chứng chỉ hành nghề",
        "answer": "D"
    },
    {
        "id": 205,
        "question": "Một trong các lý do bị thu hồi chứng chỉ hành nghề dược là gì?",
        "option_a": "Thay đổi nơi hành nghề trong cùng tỉnh",
        "option_b": "Đổi họ tên theo quyết định hành chính",
        "option_c": "Cho thuê hoặc cho mượn chứng chỉ hành nghề",
        "option_d": "Nghỉ việc có báo trước cho cơ sở kinh doanh",
        "answer": "C"
    },
    {
        "id": 206,
        "question": "Trường hợp nào không cần đủ 8 loại giấy tờ trong hồ sơ cấp chứng chỉ?",
        "option_a": "Chứng chỉ bị mất hoặc bị hư hỏng nặng",
        "option_b": "Chứng chỉ cấp lần đầu cho người mới tốt nghiệp",
        "option_c": "Chứng chỉ bị thu hồi do người hành nghề vi phạm",
        "option_d": "Chứng chỉ bị thu hồi do lỗi của cơ quan cấp",
        "answer": "D"
    },
    {
        "id": 207,
        "question": "Hồ sơ xin cấp Chứng chỉ hành nghề dược lần đầu gồm bao nhiêu loại giấy tờ cơ bản?",
        "option_a": "5 loại",
        "option_b": "8 loại",
        "option_c": "6 loại",
        "option_d": "10 loại",
        "answer": "B"
    },
    {
        "id": 208,
        "question": "Người có bằng Sơ cấp Dược có thể xin cấp CCHND cho vị trí nào?",
        "option_a": "Người chịu trách nhiệm chuyên môn tại nhà thuốc bán lẻ",
        "option_b": "Người chịu trách nhiệm chuyên môn tại tủ thuốc trạm y tế xã",
        "option_c": "Người chịu trách nhiệm chuyên môn tại cơ sở bán buôn thuốc",
        "option_d": "Người chịu trách nhiệm chuyên môn tại cơ sở sản xuất thuốc",
        "answer": "B"
    },
    {
        "id": 209,
        "question": "Người có giấy chứng nhận lương y, bài thuốc gia truyền được cấp trước 2016 có thể:",
        "option_a": "Xin cấp chứng chỉ hành nghề dược",
        "option_b": "Tự bán thuốc mà không cần chứng chỉ",
        "option_c": "Chỉ được cấp giấy phép bán thuốc",
        "option_d": "Không được cấp chứng chỉ hành nghề",
        "answer": "A"
    },
    {
        "id": 210,
        "question": "Quy định việc thông tin thuốc, người hành nghề khám bệnh, chữa bệnh được thực hiện theo các hình thức sau, ngoại trừ:",
        "option_a": "Quảng cáo thuốc trên mạng xã hội cá nhân",
        "option_b": "Hội thảo giới thiệu thuốc cho nhân viên y tế",
        "option_c": "Tài liệu thông tin thuốc dạng văn bản chính thức",
        "option_d": "Báo cáo, tư vấn thông tin thuốc trong bệnh viện",
        "answer": "A"
    },
    {
        "id": 211,
        "question": "Người của cơ sở kinh doanh dược giới thiệu thuốc cho người hành nghề khám bệnh, chữa bệnh theo quy định của cơ quan sau:",
        "option_a": "Giám đốc Sở Y tế",
        "option_b": "Bộ trưởng Bộ Y tế",
        "option_c": "Cục trưởng Cục Quản lý Dược",
        "option_d": "Thủ tướng Chính phủ",
        "answer": "B"
    },
    {
        "id": 212,
        "question": "Kể từ ngày nhận đủ hồ sơ đề nghị xác nhận nội dung quảng cáo thuốc, Bộ Y tế thẩm định và cấp giấy xác nhận nội dung quảng cáo thuốc trong thời hạn sau:",
        "option_a": "15 ngày",
        "option_b": "10 ngày",
        "option_c": "20 ngày",
        "option_d": "30 ngày",
        "answer": "A"
    },
    {
        "id": 213,
        "question": "Chọn phát biểu đúng về thông tin thuốc:",
        "option_a": "Giới thiệu thuốc đến công chúng nhằm tăng doanh số bán và lợi nhuận cho cơ sở kinh doanh dược.",
        "option_b": "Giới thiệu, cung cấp kiến thức khoa học về thuốc nhằm hướng dẫn sử dụng an toàn, hợp lý, hiệu quả.",
        "option_c": "Chỉ là hoạt động ghi chép số liệu bán hàng của cơ sở kinh doanh dược để phục vụ công tác kế toán.",
        "option_d": "Chỉ cung cấp thông tin về giá thuốc và chương trình khuyến mại cho người bệnh khi mua thuốc.",
        "answer": "B"
    },
    {
        "id": 214,
        "question": "Nội dung sau đây được phép sử dụng trong quảng cáo thuốc không kê đơn:",
        "option_a": "Thông tin chính xác, phù hợp với tờ hướng dẫn sử dụng đã được phê duyệt.",
        "option_b": "So sánh hiệu quả với thuốc cùng loại của cơ sở khác để thu hút người mua thuốc.",
        "option_c": "Cam kết thuốc chữa khỏi hoàn toàn bệnh trong thời gian ngắn, không có tác dụng phụ.",
        "option_d": "Hình ảnh bác sĩ, dược sĩ khuyên dùng để tăng độ tin cậy cho người tiêu dùng thuốc.",
        "answer": "A"
    },
    {
        "id": 215,
        "question": "Mục tiêu chính của quy định về thông tin, quảng cáo thuốc là:",
        "option_a": "Tăng doanh số bán thuốc cho các cơ sở kinh doanh dược.",
        "option_b": "Khuyến khích người dân tự dùng thuốc không cần tư vấn.",
        "option_c": "Đảm bảo an toàn, hiệu quả, sử dụng thuốc hợp lý.",
        "option_d": "Hạn chế việc tiếp cận thuốc của người dân trên cả nước.",
        "answer": "C"
    },
    {
        "id": 216,
        "question": "Hành vi dưới đây bị nghiêm cấm trong quảng cáo thuốc:",
        "option_a": "Quảng cáo thuốc không kê đơn có xác nhận nội dung.",
        "option_b": "Quảng cáo thuốc kê đơn trực tiếp đến người tiêu dùng.",
        "option_c": "Giới thiệu thuốc kê đơn cho người hành nghề y tế.",
        "option_d": "Cung cấp thông tin thuốc cho cán bộ y tế tại hội thảo.",
        "answer": "B"
    },
    {
        "id": 217,
        "question": "Thẩm quyền cấp phép quảng cáo thuốc thuộc cơ quan sau:",
        "option_a": "Bộ Y tế.",
        "option_b": "Sở Y tế.",
        "option_c": "Bộ Công Thương.",
        "option_d": "Bộ Công an.",
        "answer": "A"
    },
    {
        "id": 218,
        "question": "Nội dung quảng cáo thuốc phải dựa trên:",
        "option_a": "Kinh nghiệm cá nhân của người bán thuốc.",
        "option_b": "Tờ hướng dẫn sử dụng đã được phê duyệt.",
        "option_c": "Ý kiến phản hồi của khách hàng đã dùng thuốc.",
        "option_d": "Ý kiến của người nổi tiếng đã dùng thuốc.",
        "answer": "B"
    },
    {
        "id": 219,
        "question": "Quy định về quảng cáo thuốc nhằm mục đích:",
        "option_a": "Đảm bảo thông tin chính xác, an toàn, bảo vệ sức khỏe cộng đồng.",
        "option_b": "Tăng tối đa doanh thu cho cơ sở sản xuất, kinh doanh thuốc.",
        "option_c": "Hạn chế mọi hoạt động giới thiệu thuốc trên toàn quốc.",
        "option_d": "Giúp người dân tự chẩn đoán, tự điều trị không cần thầy thuốc.",
        "answer": "A"
    },
    {
        "id": 220,
        "question": "Theo quy định về cảnh giác dược, trách nhiệm chính trong việc báo cáo kịp thời thông tin xuất hiện dấu hiệu nghi ngờ về một phản ứng có hại nghiêm trọng chưa được ghi nhận trước đây cho cơ quan quản lý nhà nước thuộc về đối tượng sau:",
        "option_a": "Cơ sở bán lẻ thuốc đã bán thuốc đó.",
        "option_b": "Người bệnh trực tiếp sử dụng thuốc đó.",
        "option_c": "Cơ sở sản xuất/đăng ký lưu hành thuốc đó.",
        "option_d": "Cơ quan quản lý nhà nước về dược.",
        "answer": "C"
    },
    {
        "id": 221,
        "question": "Khi “Người giới thiệu thuốc” có hành vi tặng quà có giá trị cho bác sĩ nhằm mục đích tác động đến việc kê đơn thì trách nhiệm của người đứng đầu cơ sở khám bệnh, chữa bệnh là:",
        "option_a": "Nhắc nhở bằng lời và cho phép tiếp tục hoạt động giới thiệu thuốc tại cơ sở.",
        "option_b": "Chỉ báo cáo bằng văn bản cho công ty dược mà người đó đang làm việc.",
        "option_c": "Giữ kín vụ việc và không cần xử lý với người giới thiệu thuốc đó.",
        "option_d": "Đình chỉ ngay hoạt động của người giới thiệu thuốc đó trong phạm vi cơ sở mình.",
        "answer": "D"
    },
    {
        "id": 222,
        "question": "Theo quy định, nội dung quảng cáo thuốc phải đảm bảo những yêu cầu cơ bản sau:",
        "option_a": "Chỉ cần ghi tên thuốc và giá bán, không cần ghi chỉ định, chống chỉ định hay khuyến cáo nào khác.",
        "option_b": "Phải ghi rõ tên thuốc, giá bán, khuyến mại và khuyến cáo “Thuốc có tác dụng nhanh, an toàn tuyệt đối”.",
        "option_c": "Phải ghi rõ tên thuốc, hoạt chất và cam kết hiệu quả điều trị khỏi bệnh hoàn toàn cho người dùng.",
        "option_d": "Phải ghi rõ tên thuốc, hoạt chất, chỉ định, chống chỉ định và khuyến cáo “Đọc kỹ hướng dẫn sử dụng trước khi dùng”.",
        "answer": "D"
    },
    {
        "id": 223,
        "question": "Trong các hình thức sau, hình thức không được phép quảng cáo thuốc là:",
        "option_a": "Áp phích dán ở cột điện",
        "option_b": "Báo in, tạp chí chuyên ngành",
        "option_c": "Truyền hình, phát thanh",
        "option_d": "Website của cơ sở kinh doanh",
        "answer": "A"
    },
    {
        "id": 224,
        "question": "Cơ quan chịu trách nhiệm phê duyệt nội dung quảng cáo thuốc:",
        "option_a": "Sở Y tế hoặc Sở Văn hóa (tùy loại thuốc)",
        "option_b": "Bộ Công an hoặc Cục Quản lý Thị trường (tùy loại)",
        "option_c": "Bộ Y tế hoặc Cục Quản lý Dược (tùy loại thuốc)",
        "option_d": "Cơ sở sản xuất tự phê duyệt nội dung quảng cáo",
        "answer": "C"
    },
    {
        "id": 225,
        "question": "Khi quảng cáo thuốc trên phương tiện truyền thông đại chúng, bắt buộc phải có nội dung sau đây:",
        "option_a": "Câu khuyến cáo: “Đọc kỹ hướng dẫn sử dụng trước khi dùng”",
        "option_b": "Câu cam kết: “Thuốc có hiệu quả điều trị khỏi hoàn toàn”",
        "option_c": "Câu quảng cáo: “Thuốc tốt nhất, không có tác dụng phụ nào”",
        "option_d": "Câu khuyến cáo: “Dùng thuốc theo lời khuyên của người quen”",
        "answer": "A"
    },
    {
        "id": 226,
        "question": "Thông tin quảng cáo thuốc, phải đọc từng hoạt chất hoặc đọc tên chung các nhóm vitamin, khoáng chất, dược liệu khi thành phần thuốc có từ ............. hoạt chất trở lên.",
        "option_a": "02 hoạt chất",
        "option_b": "04 hoạt chất",
        "option_c": "05 hoạt chất",
        "option_d": "03 hoạt chất",
        "answer": "D"
    },
    {
        "id": 227,
        "question": "Người có trách nhiệm quản lý, chỉ đạo hoạt động thông tin thuốc trong bệnh viện là:",
        "option_a": "Điều dưỡng trưởng",
        "option_b": "Trưởng phòng Tài chính",
        "option_c": "Giám đốc bệnh viện",
        "option_d": "Trưởng phòng Hành chính",
        "answer": "C"
    },
    {
        "id": 228,
        "question": "Trách nhiệm của người giới thiệu thuốc, ngoại trừ:",
        "option_a": "Cung cấp thông tin thuốc trung thực, chính xác, khoa học cho người hành nghề.",
        "option_b": "Chấp hành đúng quy định về giới thiệu thuốc của pháp luật hiện hành.",
        "option_c": "Báo cáo định kỳ về hoạt động giới thiệu thuốc cho cơ sở kinh doanh dược.",
        "option_d": "Khuyến khích bác sĩ kê đơn vượt phạm vi chỉ định để tăng doanh số.",
        "answer": "D"
    },
    {
        "id": 229,
        "question": "Thẻ của “Người giới thiệu thuốc” có giá trị trong thời gian:",
        "option_a": "1 năm.",
        "option_b": "2 năm.",
        "option_c": "3 năm.",
        "option_d": "5 năm.",
        "answer": "B"
    },
    {
        "id": 230,
        "question": "Cơ quan cấp Thẻ “Người giới thiệu thuốc” là?",
        "option_a": "Bộ Y tế.",
        "option_b": "Sở Y tế.",
        "option_c": "Bộ Công an.",
        "option_d": "Cục Quản lý Dược.",
        "answer": "B"
    },
    {
        "id": 231,
        "question": "Tài liệu về thông tin, quảng cáo thuốc hết giá trị trong các trường hợp sau, ngoại trừ:",
        "option_a": "Thuốc bị thu hồi giấy đăng ký lưu hành.",
        "option_b": "Thay đổi người thông tin, quảng cáo thuốc.",
        "option_c": "Có thay đổi về nội dung tờ hướng dẫn sử dụng.",
        "option_d": "Hết thời hạn hiệu lực của giấy xác nhận nội dung.",
        "answer": "B"
    },
    {
        "id": 232,
        "question": "Các chỉ định không được đưa vào trong quảng cáo thuốc, ngoại trừ:",
        "option_a": "Điều trị bệnh lao phổi",
        "option_b": "Điều trị bệnh ung thư",
        "option_c": "Điều trị bệnh tim mạch",
        "option_d": "Điều trị bệnh đái tháo đường",
        "answer": "C"
    },
    {
        "id": 233,
        "question": "Nơi tiếp nhận và giải quyết hồ sơ đăng ký thông tin giới thiệu thuốc cho cán bộ y tế:",
        "option_a": "Sở Y tế tỉnh, thành phố.",
        "option_b": "Vụ Pháp chế Bộ Y tế.",
        "option_c": "Cục Quản lý Dược.",
        "option_d": "Thanh tra Bộ Y tế.",
        "answer": "C"
    },
    {
        "id": 234,
        "question": "Một nội dung vi phạm trong quảng cáo thuốc là:",
        "option_a": "Quảng cáo thuốc chưa được cấp số lưu hành",
        "option_b": "Quảng cáo thuốc theo đúng tờ hướng dẫn sử dụng",
        "option_c": "Quảng cáo thuốc có giấy xác nhận nội dung hợp lệ",
        "option_d": "Quảng cáo thuốc đã được cấp số đăng ký lưu hành",
        "answer": "A"
    },
    {
        "id": 235,
        "question": "Thuốc được phép quảng cáo trong trường hợp sau đây:",
        "option_a": "Thuốc chỉ mới được cấp phép tại nước xuất xứ",
        "option_b": "Thuốc đã cấp phép lưu hành tại Việt Nam",
        "option_c": "Thuốc đang trong giai đoạn thử nghiệm lâm sàng",
        "option_d": "Thuốc đã hết hạn và bị thu hồi khỏi thị trường",
        "answer": "B"
    },
    {
        "id": 236,
        "question": "Trách nhiệm của cơ sở bán lẻ thuốc trong hoạt động cảnh giác dược là:",
        "option_a": "Chỉ bán thuốc theo yêu cầu, không cần tư vấn hay theo dõi người dùng thuốc",
        "option_b": "Tự quyết định chẩn đoán và thay đổi liều thuốc kê đơn cho người bệnh",
        "option_c": "Chỉ báo cáo khi có yêu cầu của cơ quan công an địa phương",
        "option_d": "Tư vấn, xử lý khi có dấu hiệu bất thường trong quá trình dùng thuốc",
        "answer": "D"
    },
    {
        "id": 237,
        "question": "Trường hợp quảng cáo thuốc trên báo chí, tờ rơi, áp phích, pano, bảng điện tử... thì bắt buộc phải ghi rõ thông tin nào?",
        "option_a": "Số giấy xác nhận nội dung quảng cáo của Bộ Y tế",
        "option_b": "Số điện thoại tư vấn miễn phí của cơ sở sản xuất",
        "option_c": "Giá bán lẻ tối đa của thuốc được quảng cáo",
        "option_d": "Số lô sản xuất và hạn dùng của thuốc quảng cáo",
        "answer": "A"
    },
    {
        "id": 238,
        "question": "Thông tin “Đọc kỹ hướng dẫn sử dụng trước khi dùng” là bắt buộc trong nội dung quảng cáo thuốc ở trường hợp sau:",
        "option_a": "Chỉ quảng cáo trên truyền hình",
        "option_b": "Tất cả các hình thức quảng cáo thuốc",
        "option_c": "Chỉ quảng cáo trên báo in, tạp chí",
        "option_d": "Chỉ quảng cáo thuốc kê đơn trên tờ rơi",
        "answer": "B"
    },
    {
        "id": 239,
        "question": "Khi quảng cáo thuốc trên phương tiện phát thanh, truyền hình, nội dung bắt buộc phải có:",
        "option_a": "Số giấy đăng ký kinh doanh của cơ sở quảng cáo",
        "option_b": "Số điện thoại đường dây nóng của Bộ Y tế",
        "option_c": "Số giấy xác nhận nội dung quảng cáo do Bộ Y tế cấp",
        "option_d": "Số lô sản xuất của thuốc được quảng cáo",
        "answer": "C"
    },
    {
        "id": 240,
        "question": "Thuốc sản xuất tại Việt Nam được cấp phép xuất khẩu trong trường hợp sau:",
        "option_a": "Có giấy phép sản xuất GMP và hợp đồng xuất khẩu với đối tác nước ngoài",
        "option_b": "Có giấy chứng nhận xuất xứ và đơn đặt hàng từ cơ quan nước nhập khẩu",
        "option_c": "Có chứng nhận chất lượng ISO và giấy phép xuất khẩu từ Bộ Công Thương",
        "option_d": "Có giấy đăng ký lưu hành tại Việt Nam và giấy phép nhập khẩu của nước nhập khẩu",
        "answer": "D"
    },
    {
        "id": 241,
        "question": "Trong hồ sơ xin cấp phép xuất khẩu, nếu giấy phép nhập khẩu không thể hiện bằng tiếng Việt hoặc tiếng Anh thì phải cần đảm bảo điều kiện sau:",
        "option_a": "Bản dịch công chứng sang tiếng Việt hoặc tiếng Anh",
        "option_b": "Bản dịch có xác nhận của lãnh sự quán nước xuất khẩu",
        "option_c": "Giấy xác nhận của Bộ Ngoại giao về nội dung giấy phép nhập khẩu",
        "option_d": "Bản sao công chứng của giấy phép gốc bằng tiếng nước ngoài",
        "answer": "A"
    },
    {
        "id": 242,
        "question": "Cơ sở sản xuất thuốc gây nghiện, hướng thần, tiền chất chỉ được bán thuốc do mình sản xuất cho các trường hợp sau:",
        "option_a": "Tất cả cơ sở kinh doanh dược có giấy phép và cơ sở nghiên cứu khoa học",
        "option_b": "Cơ sở xuất khẩu, nhập khẩu và các nhà thuốc đạt chuẩn GPP trong tỉnh",
        "option_c": "Cơ sở khám bệnh, chữa bệnh, nghiên cứu, kiểm nghiệm, cai nghiện, đào tạo y dược và 01 cơ sở bán buôn trong 01 tỉnh",
        "option_d": "Cơ sở bán buôn, bán lẻ thuốc trong toàn quốc và cơ sở khám chữa bệnh công lập",
        "answer": "C"
    },
    {
        "id": 243,
        "question": "Cơ sở nhập khẩu thuốc gây nghiện, hướng thần, tiền chất chỉ được bán thuốc do chính cơ sở nhập khẩu cho:",
        "option_a": "Cơ sở bán buôn thuốc trên toàn quốc và các cơ sở sản xuất thuốc trong nước",
        "option_b": "Cơ sở khám chữa bệnh, nghiên cứu, kiểm nghiệm, cai nghiện, đào tạo y dược và 01 cơ sở bán buôn trong 01 tỉnh",
        "option_c": "Cơ sở xuất khẩu thuốc và các cơ sở đào tạo y dược trong khu vực",
        "option_d": "Tất cả nhà thuốc đạt GPP và cơ sở khám chữa bệnh tư nhân",
        "answer": "B"
    },
    {
        "id": 244,
        "question": "Cơ sở bán buôn thuốc gây nghiện, hướng thần, tiền chất được bán thuốc cho:",
        "option_a": "Cơ sở khám bệnh, chữa bệnh, nghiên cứu, kiểm nghiệm, cai nghiện, đào tạo y dược và nhà thuốc chỉ trong tỉnh nơi đặt trụ sở",
        "option_b": "Cơ sở xuất khẩu, nhập khẩu và các cơ sở khám chữa bệnh công lập",
        "option_c": "Tất cả cơ sở bán lẻ thuốc trong toàn quốc và cơ sở sản xuất thuốc",
        "option_d": "Nhà thuốc đạt chuẩn GPP trên toàn quốc và cơ sở nghiên cứu khoa học",
        "answer": "A"
    },
    {
        "id": 245,
        "question": "Công ty dược ở Việt Nam sản xuất thuốc nếu chưa có giấy đăng ký lưu hành trong nước nhưng có giấy phép nhập khẩu do cơ quan quản lý có thẩm quyền nước nhập khẩu cấp thì đạt tiêu chí gì?",
        "option_a": "Sản xuất gia công",
        "option_b": "Kinh doanh tạm nhập tái xuất",
        "option_c": "Xuất khẩu",
        "option_d": "Nhập khẩu",
        "answer": "D"
    },
    {
        "id": 246,
        "question": "Hàng năm, cơ sở bán buôn, cơ sở bán lẻ phải lập báo cáo …….trước ngày 15 tháng 7 và 15 tháng 01",
        "option_a": "Báo cáo đột xuất và báo cáo năm về sử dụng thuốc tiền chất tại cơ sở",
        "option_b": "Báo cáo 6 tháng và báo cáo năm về xuất, nhập, tồn kho, sử dụng thuốc dạng phối hợp",
        "option_c": "Báo cáo quý và báo cáo năm về tình hình kinh doanh thuốc gây nghiện",
        "option_d": "Báo cáo tháng và báo cáo năm về xuất nhập tồn kho thuốc hướng thần",
        "answer": "B"
    },
    {
        "id": 247,
        "question": "Đối với thuốc dạng phối hợp, cơ sở phải lập báo cáo xuất khẩu, nhập khẩu hàng năm chậm nhất vào ngày nào?",
        "option_a": "31/12 năm hiện tại",
        "option_b": "15/02 năm sau",
        "option_c": "15/01 năm sau",
        "option_d": "15/07 năm hiện tại",
        "answer": "C"
    },
    {
        "id": 248,
        "question": "Trong vòng bao nhiêu ngày kể từ ngày xuất khẩu, nhập khẩu, cơ sở phải lập báo cáo gửi Bộ Y tế và Bộ Công an?",
        "option_a": "10 ngày",
        "option_b": "30 ngày",
        "option_c": "15 ngày",
        "option_d": "07 ngày",
        "answer": "A"
    },
    {
        "id": 249,
        "question": "Những loại thuốc dược chất nào khi bị thất thoát, nhầm lẫn phải báo cáo trong 48 giờ?",
        "option_a": "Thuốc tim mạch; Thuốc hạ đường huyết; Thuốc chống đông máu",
        "option_b": "Thuốc corticoid; Thuốc chống dị ứng; Thuốc giãn phế quản",
        "option_c": "Thuốc gây nghiện; Thuốc hướng thần; Thuốc tiền chất, thuốc dạng phối hợp có chứa tiền chất",
        "option_d": "Thuốc kháng sinh; Thuốc kháng virus; Thuốc chống viêm không steroid",
        "answer": "C"
    },
    {
        "id": 250,
        "question": "Trong thời hạn ………… giờ kể từ khi phát hiện nhầm lẫn, thất thoát thuốc gây nghiện, thuốc hướng thần, tiền chất thì cơ sở phải báo cáo?",
        "option_a": "72 giờ",
        "option_b": "12 giờ",
        "option_c": "24 giờ",
        "option_d": "48 giờ",
        "answer": "D"
    },
    {
        "id": 251,
        "question": "Cơ sở bán buôn, cơ sở bán lẻ phải lập báo cáo gửi cơ quan nào?",
        "option_a": "Sở Y tế",
        "option_b": "Bộ Công an",
        "option_c": "Cục Quản lý Dược",
        "option_d": "Bộ Y tế",
        "answer": "A"
    },
    {
        "id": 252,
        "question": "Các chứng từ liên quan đến việc gì bắt buộc phải có ở cơ sở sản xuất thuốc, nguyên liệu làm thuốc?",
        "option_a": "Việc bảo quản thuốc, nguyên liệu làm thuốc",
        "option_b": "Việc mua bán thuốc, nguyên liệu làm thuốc",
        "option_c": "Việc vận chuyển thuốc, nguyên liệu làm thuốc",
        "option_d": "Việc kiểm nghiệm thuốc, nguyên liệu làm thuốc",
        "answer": "B"
    },
    {
        "id": 253,
        "question": "Đối với thuốc, nguyên liệu làm thuốc, ngoài sổ theo dõi, cơ sở phải có thêm chứng từ nào?",
        "option_a": "Phiếu xuất kho thuốc",
        "option_b": "Phiếu nhập kho nguyên liệu",
        "option_c": "Hóa đơn giá trị gia tăng",
        "option_d": "Biên bản bàn giao hàng hóa",
        "answer": "A"
    },
    {
        "id": 254,
        "question": "Nếu hồ sơ có yêu cầu sửa đổi, bổ sung và cơ sở xin hủy hồ sơ thì thời hạn hủy tính trong bao nhiêu ngày kể từ ngày ghi trên Phiếu tiếp nhận hồ sơ?",
        "option_a": "45 ngày",
        "option_b": "60 ngày",
        "option_c": "15 ngày",
        "option_d": "30 ngày",
        "answer": "D"
    },
    {
        "id": 255,
        "question": "Trong trường hợp hồ sơ có yêu cầu sửa đổi, bổ sung và cơ sở đã nộp hồ sơ sửa đổi, bổ sung thì cơ quan tiếp nhận phải làm gì?",
        "option_a": "Yêu cầu cơ sở nộp thêm phí thẩm định hồ sơ sửa đổi",
        "option_b": "Thông báo bằng văn bản về việc chấp nhận hồ sơ sửa đổi",
        "option_c": "Cấp ngay giấy phép sau khi nhận hồ sơ sửa đổi bổ sung",
        "option_d": "Trả cho cơ sở Phiếu tiếp nhận hồ sơ sửa đổi, bổ sung",
        "answer": "D"
    },
    {
        "id": 256,
        "question": "Việc hủy thuốc và nguyên liệu làm thuốc phải thực hiện dưới sự chứng kiến của ai?",
        "option_a": "Đại diện Bộ Y tế và lập biên bản theo mẫu quy định",
        "option_b": "Đại diện cơ quan công an và lập biên bản theo mẫu quy định",
        "option_c": "Đại diện Cục Quản lý Dược và lập biên bản theo mẫu quy định",
        "option_d": "Đại diện Sở Y tế trên địa bàn và lập biên bản theo mẫu quy định",
        "answer": "D"
    },
    {
        "id": 257,
        "question": "Nếu hồ sơ đủ nhưng cần sửa đổi, bổ sung khi xin phép xuất khẩu thuốc, cơ quan cấp phép phải yêu cầu trong bao lâu?",
        "option_a": "5 ngày làm việc",
        "option_b": "7 ngày làm việc",
        "option_c": "10 ngày làm việc",
        "option_d": "15 ngày làm việc",
        "answer": "B"
    },
    {
        "id": 258,
        "question": "Cơ sở sản xuất thuốc được phép nhập khẩu nguyên liệu làm thuốc nhằm mục đích gì?",
        "option_a": "Để phục vụ kinh doanh thương mại hoặc xuất khẩu lại",
        "option_b": "Để phục vụ quảng cáo sản phẩm hoặc thử nghiệm lâm sàng",
        "option_c": "Để phục vụ nghiên cứu khoa học hoặc sản xuất thuốc",
        "option_d": "Để phục vụ đào tạo nhân lực hoặc kiểm nghiệm độc lập",
        "answer": "C"
    },
    {
        "id": 259,
        "question": "Morphin, Fentanyl, Methadone thuộc nhóm thuốc nào?",
        "option_a": "Thuốc tiền chất",
        "option_b": "Thuốc dạng phối hợp",
        "option_c": "Thuốc hướng thần",
        "option_d": "Thuốc gây nghiện",
        "answer": "D"
    },
    {
        "id": 260,
        "question": "Thuốc hướng thần được phép cấp phát tối đa bao nhiêu ngày?",
        "option_a": "7–10 ngày",
        "option_b": "5–7 ngày",
        "option_c": "15–30 ngày",
        "option_d": "10–15 ngày",
        "answer": "D"
    },
    {
        "id": 261,
        "question": "Diazepam, Clonazepam, Zolpidem là ví dụ điển hình của nhóm nào?",
        "option_a": "Thuốc hướng thần",
        "option_b": "Thuốc kháng sinh",
        "option_c": "Thuốc gây nghiện",
        "option_d": "Thuốc tiền chất",
        "answer": "A"
    },
    {
        "id": 262,
        "question": "Theo quy định, khi phát hiện nhầm lẫn, thất thoát thuốc và nguyên liệu làm thuốc phải báo cáo trong thời gian:",
        "option_a": "12 giờ",
        "option_b": "48 giờ",
        "option_c": "72 giờ",
        "option_d": "24 giờ",
        "answer": "B"
    },
    {
        "id": 263,
        "question": "Theo quy định, thời gian báo cáo định kỳ sử dụng thuốc gây nghiện, thuốc hướng thần, thuốc tiền chất, thuốc dạng phối hợp có chứa tiền chất hàng năm là",
        "option_a": "Trước ngày 15 tháng 07 hàng năm",
        "option_b": "Trước ngày 31 tháng 12 hàng năm",
        "option_c": "Trước ngày 15 tháng 01 hàng năm",
        "option_d": "Trước ngày 15 tháng 02 hàng năm",
        "answer": "D"
    },
    {
        "id": 264,
        "question": "Đối với cơ sở xuất khẩu, nhập khẩu thuốc gây nghiện, thuốc hướng thần, tiền chất, nguyên liệu làm thuốc là dược chất gây nghiện, dược chất hướng thần, tiền chất dùng làm thuốc thủ kho bảo quản phải là người có bằng tốt nghiệp",
        "option_a": "Đại học ngành dược",
        "option_b": "Cao đẳng ngành dược",
        "option_c": "Đại học ngành y",
        "option_d": "Trung cấp ngành dược",
        "answer": "A"
    },
    {
        "id": 265,
        "question": "Quy định về người giao, người nhận thuốc và nguyên liệu làm thuốc phải có bằng tốt nghiệp:",
        "option_a": "Đại học ngành dược trở lên",
        "option_b": "Cao đẳng ngành dược trở lên",
        "option_c": "Trung cấp ngành dược trở lên",
        "option_d": "Sơ cấp ngành dược trở lên",
        "answer": "C"
    },
    {
        "id": 266,
        "question": "Theo thông tư 20/2017/TT-BYT, danh mục các chất gây nghiện được quy định trong:",
        "option_a": "Phụ lục II",
        "option_b": "Phụ lục IV",
        "option_c": "Phụ lục III",
        "option_d": "Phụ lục I",
        "answer": "D"
    },
    {
        "id": 267,
        "question": "Theo thông tư 20/2017/TT-BYT, danh mục các dược chất hướng thần được quy định trong:",
        "option_a": "Phụ lục I",
        "option_b": "Phụ lục V",
        "option_c": "Phụ lục IV",
        "option_d": "Phụ lục II",
        "answer": "D"
    },
    {
        "id": 268,
        "question": "Khi số lượng thuốc đề nghị mua vượt quá bao nhiêu % so với lần trước phải có văn bản giải thích rõ lý do?",
        "option_a": "100%",
        "option_b": "150%",
        "option_c": "200%",
        "option_d": "120%",
        "answer": "B"
    },
    {
        "id": 269,
        "question": "Số lượng thuốc gây nghiện được kê cho người bệnh nội trú mỗi lần không được vượt quá bao nhiêu?",
        "option_a": "15 ngày",
        "option_b": "7 ngày",
        "option_c": "10 ngày",
        "option_d": "5 ngày",
        "answer": "B"
    },
    {
        "id": 270,
        "question": "Theo Thông tư 26/2025/TT-BYT, số ngày tối đa mỗi loại thuốc được kê trong đơn đối với bệnh nhân mạn tính ổn định là bao nhiêu ngày?",
        "option_a": "30 ngày",
        "option_b": "120 ngày",
        "option_c": "60 ngày",
        "option_d": "90 ngày",
        "answer": "D"
    },
    {
        "id": 271,
        "question": "Đơn thuốc khám ngoại trú trong trường hợp người bệnh khám nhiều chuyên khoa ghi như thế nào?",
        "option_a": "Chỉ ghi đơn thuốc của chuyên khoa chính",
        "option_b": "Mỗi chuyên khoa một đơn thuốc riêng",
        "option_c": "Tất cả chuyên khoa gộp chung một đơn thuốc",
        "option_d": "Ghi đơn thuốc theo thứ tự ưu tiên chuyên khoa",
        "answer": "B"
    },
    {
        "id": 272,
        "question": "Thông tư 26 yêu cầu đơn thuốc bảo hiểm y tế có hiệu lực lĩnh thuốc tối đa trong bao nhiêu ngày sau khi được cấp (tại nhà thuốc ngoài bệnh viện)?",
        "option_a": "7 ngày",
        "option_b": "10 ngày",
        "option_c": "15 ngày",
        "option_d": "5 ngày",
        "answer": "A"
    },
    {
        "id": 273,
        "question": "Nguyên tắc kê đơn cần đảm bảo",
        "option_a": "Tên thuốc, hoạt chất, dạng bào chế, quy cách, số đăng ký",
        "option_b": "Tên thuốc, hàm lượng, liều dùng, đường dùng, thời gian dùng",
        "option_c": "Tên thuốc, giá bán, nhà sản xuất, hạn dùng, số lô",
        "option_d": "Tên bệnh nhân, tuổi, địa chỉ, chẩn đoán, bác sĩ kê đơn",
        "answer": "B"
    },
    {
        "id": 274,
        "question": "Nguyên tắc kê đơn thuốc phải đảm bảo điều kiện nào sau đây?",
        "option_a": "Đầy đủ, chính xác, kịp thời",
        "option_b": "Hợp lý, an toàn, hiệu quả",
        "option_c": "Rõ ràng, minh bạch, công khai",
        "option_d": "Nhanh chóng, tiện lợi, tiết kiệm",
        "answer": "B"
    },
    {
        "id": 275,
        "question": "Vì sao cần lưu ý đến tuổi, thai kỳ, bệnh nền khi kê đơn?",
        "option_a": "Vì ảnh hưởng đến nhãn mác và hướng dẫn sử dụng; Vì cần ghi chú đặc biệt; Vì có quy định về bao bì",
        "option_b": "Vì ảnh hưởng đến thời gian bảo quản và hạn dùng; Vì cần chọn dạng bào chế phù hợp; Vì có quy định về vận chuyển",
        "option_c": "Vì ảnh hưởng đến giá thành thuốc và khả năng chi trả; Vì cần chọn thuốc rẻ hơn; Vì có chính sách bảo hiểm riêng",
        "option_d": "Vì ảnh hưởng đến dược động học và nguy cơ tác dụng phụ; Vì có thể cần điều chỉnh liều; Vì có chống chỉ định riêng cho từng nhóm bệnh nhân",
        "answer": "D"
    },
    {
        "id": 276,
        "question": "Khi kê đơn thuốc, bác sĩ cần lưu ý thêm yếu tố nào sau đây?",
        "option_a": "Giá thành thuốc; Nhà sản xuất; Hạn sử dụng của thuốc",
        "option_b": "Tương tác thuốc; Chống chỉ định; Đặc thù người bệnh (tuổi, thai kỳ, bệnh nền)",
        "option_c": "Thời gian bảo quản; Điều kiện bảo quản; Cách vận chuyển",
        "option_d": "Hình thức đóng gói; Màu sắc viên thuốc; Mùi vị của thuốc",
        "answer": "B"
    },
    {
        "id": 277,
        "question": "Loại sản phẩm nào sau đây không được kê vào đơn thuốc?",
        "option_a": "Thuốc đông y",
        "option_b": "Thực phẩm chức năng",
        "option_c": "Thuốc kê đơn",
        "option_d": "Thuốc không kê đơn",
        "answer": "B"
    },
    {
        "id": 278,
        "question": "Khi ghi số lượng thuốc gây nghiện trong đơn thuốc, yêu cầu bắt buộc là gì?",
        "option_a": "Ghi rõ bằng số và chữ, viết thường toàn bộ",
        "option_b": "Ghi rõ bằng số Ả Rập và chữ thường",
        "option_c": "Ghi rõ bằng chữ La tinh và số La Mã",
        "option_d": "Ghi rõ bằng số và chữ, viết hoa chữ đầu",
        "answer": "D"
    },
    {
        "id": 279,
        "question": "Việc kê đơn thuốc cho người bệnh sau điều trị nội trú áp dụng cho trường hợp:",
        "option_a": "Người bệnh cần dùng thuốc trên 30 ngày tiếp theo",
        "option_b": "Người bệnh cần dùng thuốc 1–7 ngày tiếp theo",
        "option_c": "Người bệnh cần dùng thuốc 15–30 ngày tiếp theo",
        "option_d": "Người bệnh cần dùng thuốc 7–15 ngày tiếp theo",
        "answer": "B"
    },
    {
        "id": 280,
        "question": "Đơn thuốc sau điều trị nội trú có thể được ghi ở đâu?",
        "option_a": "Chỉ vào Đơn thuốc giấy theo mẫu quy định của Bộ Y tế",
        "option_b": "Chỉ trên phần mềm quản lý và in ra để lưu hồ sơ bệnh án",
        "option_c": "Chỉ vào Sổ khám bệnh và phải có chữ ký của giám đốc bệnh viện",
        "option_d": "Vào Đơn thuốc, Sổ khám bệnh của người bệnh, hoặc phần mềm quản lý",
        "answer": "D"
    },
    {
        "id": 281,
        "question": "Mục đích của việc kê đơn tiếp sau điều trị nội trú là gì?",
        "option_a": "Giảm thiểu thời gian tái khám của người bệnh tại bệnh viện",
        "option_b": "Tăng doanh thu cho nhà thuốc bệnh viện và cơ sở y tế",
        "option_c": "Quản lý và đảm bảo người bệnh tiếp tục điều trị đúng",
        "option_d": "Đáp ứng yêu cầu thống kê của cơ quan bảo hiểm y tế",
        "answer": "C"
    },
    {
        "id": 282,
        "question": "Theo quy định, phần mềm quản lý người bệnh của cơ sở khám chữa bệnh có thể được dùng để:",
        "option_a": "Ghi đơn thuốc sau nội trú",
        "option_b": "Thay thế hoàn toàn đơn thuốc giấy trong mọi trường hợp",
        "option_c": "Bán thuốc trực tiếp cho người bệnh không qua nhà thuốc",
        "option_d": "Tự động kê đơn thuốc không cần bác sĩ duyệt",
        "answer": "A"
    },
    {
        "id": 283,
        "question": "Khi kê đơn thuốc cho người bệnh sau khi kết thúc điều trị nội trú, đơn thuốc được xem là:",
        "option_a": "Đơn thuốc cấp cứu đặc biệt",
        "option_b": "Đơn thuốc ngoại trú thông thường",
        "option_c": "Chỉ định điều trị nội trú kéo dài",
        "option_d": "Chỉ định điều trị tiếp tục",
        "answer": "D"
    },
    {
        "id": 284,
        "question": "Một bản kê đơn thuốc gây nghiện được lưu tại cơ sở khám chữa bệnh, còn bản thứ hai được:",
        "option_a": "Lưu tại nhà thuốc nơi người bệnh lĩnh thuốc",
        "option_b": "Gửi về Sở Y tế để theo dõi và quản lý",
        "option_c": "Giao cho người bệnh hoặc đại diện của người bệnh",
        "option_d": "Gửi về Bộ Y tế để báo cáo định kỳ",
        "answer": "C"
    },
    {
        "id": 285,
        "question": "Khi ghi đơn thuốc hoặc sổ khám bệnh, thông tin nào sau đây bắt buộc phải có?",
        "option_a": "Họ tên, giới tính, cân nặng, chiều cao của người bệnh",
        "option_b": "Họ tên, tuổi, năm sinh, địa chỉ thường trú hoặc tạm trú",
        "option_c": "Họ tên, nghề nghiệp, số điện thoại, địa chỉ email",
        "option_d": "Họ tên, số bảo hiểm y tế, mã bệnh án, chẩn đoán chính",
        "answer": "B"
    },
    {
        "id": 286,
        "question": "Với trẻ em dưới 72 tháng tuổi, ngoài họ tên và địa chỉ, đơn thuốc cần ghi thêm thông tin gì?",
        "option_a": "Số tháng tuổi và số điện thoại của người giám hộ",
        "option_b": "Số cân nặng và địa chỉ nơi sinh của trẻ em",
        "option_c": "Số tháng tuổi và số CMND/CCCD của cha hoặc mẹ",
        "option_d": "Số cân nặng và số CMND/CCCD của ông hoặc bà",
        "answer": "C"
    },
    {
        "id": 287,
        "question": "Đối với thuốc có một hoạt chất, khi ghi đơn thuốc cần ghi theo:",
        "option_a": "Chỉ tên chung quốc tế không kèm tên thương mại",
        "option_b": "Chỉ tên thương mại theo đăng ký lưu hành",
        "option_c": "Tên chung quốc tế (có thể kèm tên thương mại)",
        "option_d": "Tên thương mại (có thể kèm tên chung quốc tế)",
        "answer": "C"
    },
    {
        "id": 288,
        "question": "Đối với thuốc có nhiều hoạt chất hoặc sinh phẩm y tế, khi ghi đơn cần ghi theo:",
        "option_a": "Tên hoạt chất chính",
        "option_b": "Tên theo dược điển Việt Nam",
        "option_c": "Tên thương mại",
        "option_d": "Tên chung quốc tế",
        "answer": "C"
    },
    {
        "id": 289,
        "question": "Thuốc gây nghiện, thuốc hướng thần, thuốc tiền chất sau khi nhận lại phải được:",
        "option_a": "Bảo quản, xử lý theo quy định của pháp luật và có biên bản",
        "option_b": "Chuyển về kho của Sở Y tế để xử lý theo quy định",
        "option_c": "Tiêu hủy ngay tại chỗ dưới sự chứng kiến của người bệnh",
        "option_d": "Bán lại cho nhà thuốc khác có đủ điều kiện kinh doanh",
        "answer": "A"
    },
    {
        "id": 290,
        "question": "Người bệnh hoặc người đại diện khi có thuốc gây nghiện, thuốc hướng thần, thuốc tiền chất không sử dụng hoặc dùng không hết thì phải:",
        "option_a": "Mang đến Sở Y tế để nộp và nhận biên nhận",
        "option_b": "Trả lại cho cơ sở cấp hoặc bán thuốc",
        "option_c": "Gửi trả về nhà sản xuất để xử lý theo quy định",
        "option_d": "Tự tiêu hủy tại nhà theo hướng dẫn của bác sĩ",
        "answer": "B"
    },
    {
        "id": 291,
        "question": "Nếu số lượng thuốc kê đơn dưới 10 thì cách ghi đúng là:",
        "option_a": "Ghi thêm số 0 phía trước",
        "option_b": "Ghi bằng chữ đầy đủ không dùng số",
        "option_c": "Ghi số La Mã tương ứng với số lượng",
        "option_d": "Ghi số Ả Rập bình thường không cần thêm",
        "answer": "A"
    },
    {
        "id": 292,
        "question": "Khi ghi đơn thuốc, trường hợp có thuốc độc thì phải:",
        "option_a": "Ghi trước khi kê các thuốc khác",
        "option_b": "Ghi riêng trên một đơn thuốc khác",
        "option_c": "Ghi sau khi kê các thuốc khác",
        "option_d": "Ghi bằng mực đỏ để dễ nhận biết",
        "answer": "A"
    },
    {
        "id": 293,
        "question": "Thuốc cổ truyền được định nghĩa là gì?",
        "option_a": "Thuốc có nguồn gốc khoáng vật, chế biến theo phương pháp mới",
        "option_b": "Thuốc có nguồn gốc tự nhiên, chế biến theo y học cổ truyền",
        "option_c": "Thuốc có nguồn gốc sinh học, chế biến theo công nghệ cao",
        "option_d": "Thuốc có nguồn gốc hóa học, chế biến theo y học hiện đại",
        "answer": "B"
    },
    {
        "id": 294,
        "question": "Nguyên liệu làm thuốc cổ truyền có thể bao gồm thành phần nào?",
        "option_a": "Protein tái tổ hợp, peptide, oligonucleotide",
        "option_b": "Thực vật, động vật, khoáng vật",
        "option_c": "Vi sinh vật, enzyme, kháng thể đơn dòng",
        "option_d": "Hóa chất tổng hợp, kim loại nặng, dung môi hữu cơ",
        "answer": "B"
    },
    {
        "id": 295,
        "question": "KHOẢNG THỜI GIAN để một cơ sở sản xuất ĐĂNG KÝ GIA HẠN nếu muốn tiếp tục LƯU HÀNH thuốc tại VIỆT NAM là:",
        "option_a": "9 tháng trước khi hết hạn",
        "option_b": "6 tháng trước khi hết hạn",
        "option_c": "12 tháng trước khi hết hạn",
        "option_d": "3 tháng trước khi hết hạn",
        "answer": "B"
    },
    {
        "id": 296,
        "question": "BỘ Y TẾ khuyến khích các cơ sở SẢN XUẤT đặt TÊN THUỐC theo TÊN:",
        "option_a": "Thương mại",
        "option_b": "Thương hiệu",
        "option_c": "Địa phương",
        "option_d": "Quốc tế",
        "answer": "D"
    },
    {
        "id": 297,
        "question": "Hồ sơ đăng ký thuốc phải được nộp cho cơ quan nào?",
        "option_a": "Cục Quản lý Dược",
        "option_b": "Sở Y tế tỉnh/thành phố",
        "option_c": "Viện Kiểm nghiệm thuốc Trung ương",
        "option_d": "Bộ Khoa học và Công nghệ",
        "answer": "A"
    },
    {
        "id": 298,
        "question": "Cơ quan thẩm định và cấp số đăng ký thuốc là",
        "option_a": "Bộ Y tế",
        "option_b": "Cục Quản lý Dược",
        "option_c": "Sở Y tế",
        "option_d": "Hội đồng Dược điển Việt Nam",
        "answer": "A"
    },
    {
        "id": 299,
        "question": "Có mấy hình thức đăng ký thuốc?",
        "option_a": "5 hình thức",
        "option_b": "3 hình thức",
        "option_c": "4 hình thức",
        "option_d": "2 hình thức",
        "answer": "C"
    },
    {
        "id": 300,
        "question": "Thuốc được phép Bộ Y tế cho lưu hành mặc dù chưa có số đăng ký trong các trường hợp đặc biệt sau, ngoại trừ:",
        "option_a": "Thuốc viện trợ, viện trợ nhân đạo theo quy định",
        "option_b": "Thuốc điều trị ung thư có thời hạn sử dụng ngắn",
        "option_c": "Thuốc dùng trong chương trình mục tiêu quốc gia",
        "option_d": "Thuốc phục vụ nhu cầu cấp bách phòng chống dịch bệnh",
        "answer": "B"
    },
    {
        "id": 301,
        "question": "Có các hình thức đăng ký thuốc ngoại trừ:",
        "option_a": "Đăng ký lại",
        "option_b": "Đăng ký gia hạn",
        "option_c": "Đăng ký thay đổi nhỏ",
        "option_d": "Đăng ký lần đầu",
        "answer": "C"
    },
    {
        "id": 302,
        "question": "Thuốc là chế phẩm có chứa dược chất hoặc dược liệu dùng cho người nhằm mục đích:",
        "option_a": "Phòng chống dịch bệnh, tiêm chủng, xét nghiệm nhanh",
        "option_b": "Bổ sung dinh dưỡng, hỗ trợ tiêu hóa, tăng cường miễn dịch",
        "option_c": "Tăng cường sức khỏe, làm đẹp, giảm cân, chống lão hóa",
        "option_d": "Phòng bệnh, chẩn đoán bệnh, chữa bệnh, điều trị bệnh, giảm nhẹ bệnh",
        "answer": "D"
    },
    {
        "id": 303,
        "question": "Đăng ký lần đầu áp dụng trong trường hợp nào?",
        "option_a": "Thuốc cần gia hạn số đăng ký lưu hành sắp hết hạn",
        "option_b": "Thuốc chưa được cấp số đăng ký lưu hành tại Việt Nam",
        "option_c": "Thuốc có thay đổi nhỏ về công thức bào chế",
        "option_d": "Thuốc đã hết hạn số đăng ký lưu hành tại Việt Nam",
        "answer": "B"
    },
    {
        "id": 304,
        "question": "Thời hạn nộp hồ sơ đăng ký lại là bao lâu trước khi số đăng ký hết hiệu lực?",
        "option_a": "6 tháng",
        "option_b": "3 tháng",
        "option_c": "9 tháng",
        "option_d": "12 tháng",
        "answer": "D"
    },
    {
        "id": 305,
        "question": "Hiệu lực của số đăng ký lưu hành thuốc tối đa là bao nhiêu năm?",
        "option_a": "7 năm",
        "option_b": "5 năm",
        "option_c": "10 năm",
        "option_d": "3 năm",
        "answer": "B"
    },
    {
        "id": 306,
        "question": "Hồ sơ đăng ký thuộc nước ngoài bắt buộc phải viết bằng ngôn ngữ nào?",
        "option_a": "Chỉ tiếng Việt",
        "option_b": "Tiếng Việt hoặc tiếng Anh",
        "option_c": "Tiếng Việt và tiếng Pháp",
        "option_d": "Chỉ tiếng Anh",
        "answer": "B"
    },
    {
        "id": 307,
        "question": "Chọn phát biểu đúng về Vắc xin:",
        "option_a": "Thuốc chứa enzyme tạo cho cơ thể khả năng phân hủy mầm bệnh",
        "option_b": "Thuốc chứa kháng thể tạo cho cơ thể khả năng trung hòa độc tố vi khuẩn",
        "option_c": "Thuốc chứa hormone tạo cho cơ thể khả năng điều hòa miễn dịch",
        "option_d": "Thuốc chứa kháng nguyên tạo cho cơ thể khả năng đáp ứng miễn dịch đặc hiệu với mầm bệnh",
        "answer": "D"
    },
    {
        "id": 308,
        "question": "Sinh phẩm không bao gồm nhóm thuốc sau:",
        "option_a": "Vắc xin",
        "option_b": "Kháng thể đơn dòng",
        "option_c": "Huyết thanh",
        "option_d": "Kháng sinh",
        "answer": "D"
    },
    {
        "id": 309,
        "question": "Thuốc biệt dược gốc là thuốc:",
        "option_a": "Có cùng dược chất, hàm lượng, dạng bào chế với thuốc generic",
        "option_b": "Được sản xuất theo công thức cổ truyền của y học dân tộc",
        "option_c": "Có giá thành thấp nhất trong nhóm thuốc cùng hoạt chất",
        "option_d": "Được nghiên cứu, phát triển và lưu hành lần đầu tiên tại Việt Nam hoặc trên thế giới",
        "answer": "D"
    },
    {
        "id": 310,
        "question": "Hồ sơ kỹ thuật chung ASEAN (ACTD) dùng cho:",
        "option_a": "Đăng ký thuốc tại các nước châu Âu",
        "option_b": "Đăng ký thuốc tại các nước ASEAN",
        "option_c": "Đăng ký thuốc tại các nước châu Mỹ",
        "option_d": "Đăng ký thuốc tại các nước châu Phi",
        "answer": "B"
    },
    {
        "id": 311,
        "question": "Hồ sơ đăng ký thuốc khi nộp lần đầu, đăng ký lại, đăng ký gia hạn, đăng ký thay đổi phải có:",
        "option_a": "Mẫu thuốc thành phẩm; Giấy chứng nhận GMP; Hợp đồng phân phối độc quyền",
        "option_b": "Hợp đồng lao động của dược sĩ; Giấy phép kinh doanh; Báo cáo tài chính năm",
        "option_c": "Biên bản họp hội đồng; Ý kiến của Sở Y tế; Xác nhận của Bộ Công an",
        "option_d": "Đơn đăng ký theo mẫu; Tài liệu hành chính và chất lượng; Tài liệu an toàn, hiệu quả hoặc lâm sàng",
        "answer": "D"
    },
    {
        "id": 312,
        "question": "Khi nộp hồ sơ đăng ký thuốc, yêu cầu về nhãn thuốc là:",
        "option_a": "5 bộ nhãn chính và nhãn phụ theo quy định",
        "option_b": "3 bộ nhãn chính và nhãn phụ theo quy định",
        "option_c": "2 bộ nhãn chính và nhãn phụ theo quy định",
        "option_d": "1 bộ nhãn chính và nhãn phụ theo quy định",
        "answer": "C"
    },
    {
        "id": 313,
        "question": "Theo quy định khi đăng ký lại thuốc, có phải nộp mẫu thuốc không?",
        "option_a": "Không, trong mọi trường hợp đều không cần nộp mẫu",
        "option_b": "Có, nhưng chỉ cần nộp mẫu nhãn và tờ hướng dẫn",
        "option_c": "Có, bắt buộc nộp mẫu thuốc trong mọi trường hợp",
        "option_d": "Không, trừ khi có thay đổi thành phần hoặc dạng bào chế",
        "answer": "D"
    },
    {
        "id": 314,
        "question": "Theo quy định, thuốc muốn được lưu hành tại Việt Nam thì cần phải:",
        "option_a": "Có số đăng ký lưu hành do Bộ Y tế cấp",
        "option_b": "Có giấy phép kinh doanh do Sở Y tế cấp",
        "option_c": "Có giấy phép nhập khẩu do Bộ Công Thương cấp",
        "option_d": "Có chứng nhận GMP do tổ chức quốc tế cấp",
        "answer": "A"
    },
    {
        "id": 315,
        "question": "Hồ sơ đăng ký thuốc nhập khẩu cần có thêm giấy tờ gì so với thuốc sản xuất trong nước?",
        "option_a": "Giấy chứng nhận xuất xứ (C/O) do phòng thương mại cấp",
        "option_b": "Hợp đồng đại lý phân phối độc quyền tại Việt Nam",
        "option_c": "Giấy phép xuất khẩu do cơ quan nước sản xuất cấp",
        "option_d": "Giấy chứng nhận sản phẩm dược (CPP) do nước sản xuất cấp",
        "answer": "D"
    },
    {
        "id": 316,
        "question": "Hồ sơ đăng ký lưu hành thuốc không bắt buộc phải có:",
        "option_a": "Đơn đăng ký theo mẫu quy định",
        "option_b": "Hợp đồng lao động của dược sĩ phụ trách",
        "option_c": "Tài liệu an toàn, hiệu quả hoặc lâm sàng",
        "option_d": "Tài liệu hành chính và chất lượng",
        "answer": "B"
    },
    {
        "id": 317,
        "question": "Thuốc được cấp số đăng ký lưu hành khi nào?",
        "option_a": "Sau khi Cục Quản lý Dược thẩm định sơ bộ hồ sơ",
        "option_b": "Sau khi Sở Y tế thẩm định và thấy hồ sơ đầy đủ, hợp lệ",
        "option_c": "Sau khi nộp đủ hồ sơ và đóng phí thẩm định",
        "option_d": "Sau khi Bộ Y tế thẩm định và thấy hồ sơ đầy đủ, hợp lệ",
        "answer": "D"
    },
    {
        "id": 318,
        "question": "Các TRƯỜNG HỢP sau THUỐC sẽ bị RÚT SỐ ĐĂNG KÝ, NGOẠI TRỪ:",
        "option_a": "Thuốc bị phát hiện giả, kém chất lượng nghiêm trọng",
        "option_b": "Thuốc có bằng chứng không đáp ứng yêu cầu về an toàn, hiệu quả",
        "option_c": "Cơ sở sản xuất bị thu hồi giấy chứng nhận đủ điều kiện kinh doanh",
        "option_d": "Có 01 lô không đạt tiêu chuẩn",
        "answer": "D"
    },
    {
        "id": 319,
        "question": "KHOẢNG THỜI GIAN để một cơ sở sản xuất ĐĂNG KÝ LẠI nếu muốn tiếp tục LƯU HÀNH thuốc tại VIỆT NAM là:",
        "option_a": "9 tháng trước khi hết hạn hoặc 12 tháng sau khi hết hạn",
        "option_b": "3 tháng trước khi hết hạn hoặc 6 tháng sau khi hết hạn",
        "option_c": "12 tháng trước khi hết hạn hoặc 6 tháng sau khi hết hạn",
        "option_d": "6 tháng trước khi hết hạn hoặc 3 tháng sau khi hết hạn",
        "answer": "C"
    },
    {
        "id": 320,
        "question": "Cơ sở đăng ký thuốc phải báo cáo phản ứng có hại của thuốc qua cơ quan có thẩm quyền là:",
        "option_a": "Trung tâm DI & ADR Quốc gia",
        "option_b": "Cục Quản lý Dược",
        "option_c": "Sở Y tế tỉnh/thành phố",
        "option_d": "Viện Kiểm nghiệm thuốc Trung ương",
        "answer": "A"
    },
    {
        "id": 321,
        "question": "Thông tư 29/2023/TT-BYT, hướng dẫn cách ghi thành phần, giá trị dinh dưỡng hiệu lực từ thời gian nào?",
        "option_a": "01/01/2026",
        "option_b": "01/01/2024",
        "option_c": "01/07/2025",
        "option_d": "01/01/2025",
        "answer": "A"
    },
    {
        "id": 322,
        "question": "Nội dung nào dưới đây không bắt buộc ghi trên nhãn thuốc?",
        "option_a": "Số lô sản xuất, hạn sử dụng",
        "option_b": "Hướng dẫn sử dụng chi tiết cho từng đối tượng",
        "option_c": "Tên và địa chỉ cơ sở sản xuất",
        "option_d": "Tên thuốc, hoạt chất, hàm lượng",
        "answer": "B"
    },
    {
        "id": 323,
        "question": "Quy định về số lô sản xuất trên nhãn thuốc nhằm mục đích gì?",
        "option_a": "Để quản lý, truy xuất nguồn gốc thuốc",
        "option_b": "Để tính thuế xuất nhập khẩu cho từng lô",
        "option_c": "Để xác định giá bán của từng lô thuốc",
        "option_d": "Để phân biệt thuốc nội và thuốc ngoại",
        "answer": "A"
    },
    {
        "id": 324,
        "question": "Theo quy định, thuốc nhập khẩu ngoài các nội dung bắt buộc bằng tiếng Việt, có thể giữ nguyên ngôn ngữ nước ngoài ở phần nào?",
        "option_a": "Hướng dẫn sử dụng và chống chỉ định",
        "option_b": "Tên và địa chỉ nhà sản xuất, nước sản xuất",
        "option_c": "Tên thuốc và hàm lượng hoạt chất chính",
        "option_d": "Số đăng ký và điều kiện bảo quản",
        "answer": "B"
    },
    {
        "id": 325,
        "question": "Thuốc kê đơn (ETC) khi lưu hành trên thị trường phải có dòng chữ nào bắt buộc trên nhãn?",
        "option_a": "“Thuốc không kê đơn”",
        "option_b": "“Thuốc đặc trị”",
        "option_c": "“Thuốc bán theo đơn”",
        "option_d": "“Chỉ dùng trong bệnh viện”",
        "answer": "C"
    },
    {
        "id": 326,
        "question": "Nội dung bắt buộc phải có trên nhãn thuốc là:",
        "option_a": "Tên thuốc, hình ảnh minh họa, slogan quảng cáo, số hotline tư vấn",
        "option_b": "Tên thuốc, hoạt chất, dạng bào chế, quy cách đóng gói, số lô, NSX, HSD, cơ sở SX",
        "option_c": "Tên thuốc, giá bán lẻ, nhà phân phối, số hóa đơn, ngày nhập kho",
        "option_d": "Tên thuốc, thành phần tá dược, quy trình sản xuất, tiêu chuẩn chất lượng",
        "answer": "B"
    },
    {
        "id": 327,
        "question": "Bao bì tiếp xúc trực tiếp với thuốc có diện tích nhỏ, tối thiểu phải ghi:",
        "option_a": "Tên thuốc, hướng dẫn dùng, số đăng ký, HSD",
        "option_b": "Tên thuốc, hoạt chất, dạng bào chế, số lô",
        "option_c": "Tên thuốc, giá bán, nhà sản xuất, HSD",
        "option_d": "Tên thuốc, hàm lượng, số lô, HSD",
        "answer": "D"
    },
    {
        "id": 328,
        "question": "Ngôn ngữ bắt buộc trên nhãn thuốc lưu hành tại Việt Nam là:",
        "option_a": "Tiếng Việt, có thể kèm thêm ngôn ngữ khác nhưng không mâu thuẫn",
        "option_b": "Chỉ tiếng Việt, không được kèm ngôn ngữ khác",
        "option_c": "Tiếng Anh, có thể kèm thêm tiếng Việt",
        "option_d": "Tiếng Việt và tiếng Anh bắt buộc song ngữ",
        "answer": "A"
    },
    {
        "id": 329,
        "question": "Thuốc nhập khẩu chưa đủ thông tin tiếng Việt trên nhãn phải:",
        "option_a": "Phải có nhãn phụ bằng tiếng Việt",
        "option_b": "Phải xin phép Bộ Y tế để lưu hành không cần nhãn phụ",
        "option_c": "Phải dịch toàn bộ nhãn gốc sang tiếng Việt bằng tay",
        "option_d": "Phải tái xuất về nước sản xuất để dán nhãn lại",
        "answer": "A"
    },
    {
        "id": 330,
        "question": "Trên nhãn thuốc, hạn dùng phải được ghi theo thứ tự nào?",
        "option_a": "Tháng – Ngày – Năm",
        "option_b": "Ngày – Tháng – Năm",
        "option_c": "Năm – Tháng – Ngày",
        "option_d": "Năm – Ngày – Tháng",
        "answer": "B"
    },
    {
        "id": 331,
        "question": "Thuốc nhập khẩu được phép bổ sung nhãn phụ bằng tiếng Việt trong trường hợp nào?",
        "option_a": "Khi nhãn gốc đã đủ nội dung nhưng muốn thêm quảng cáo",
        "option_b": "Khi nhãn gốc chưa đủ nội dung theo quy định",
        "option_c": "Khi cơ sở nhập khẩu muốn ghi thêm giá bán lẻ trên nhãn",
        "option_d": "Khi muốn thay đổi tên thuốc cho phù hợp thị trường Việt Nam",
        "answer": "B"
    },
    {
        "id": 332,
        "question": "Theo quy định việc ghi nhãn, tờ hướng dẫn sử dụng thuốc nhập khẩu là trách nhiệm thuộc về:",
        "option_a": "Cơ sở nhập khẩu hoặc đăng ký lưu hành",
        "option_b": "Cục Quản lý Dược – Bộ Y tế",
        "option_c": "Sở Y tế nơi cơ sở nhập khẩu đặt trụ sở",
        "option_d": "Cơ sở sản xuất tại nước ngoài",
        "answer": "A"
    },
    {
        "id": 333,
        "question": "Trường hợp nào được phép bổ sung hoặc thay thế tờ hướng dẫn sử dụng bằng tiếng Việt?",
        "option_a": "Thuốc không kê đơn muốn thêm thông tin quảng cáo trên tờ hướng dẫn",
        "option_b": "Thuốc nhập khẩu đã có giấy đăng ký lưu hành nhưng hướng dẫn chưa cập nhật tiếng Việt",
        "option_c": "Thuốc hết hạn đăng ký lưu hành muốn gia hạn bằng cách đổi tờ hướng dẫn",
        "option_d": "Thuốc sản xuất trong nước muốn thay đổi nội dung hướng dẫn sử dụng",
        "answer": "B"
    },
    {
        "id": 334,
        "question": "Theo quy định, vị trí nhãn thuốc phải đảm bảo:",
        "option_a": "Gắn ở vị trí mặt sau bao bì để bảo vệ thông tin",
        "option_b": "Gắn ở vị trí đáy hộp để tiết kiệm diện tích mặt trước",
        "option_c": "Gắn ở vị trí dễ quan sát, không bị che khuất",
        "option_d": "Gắn ở vị trí bất kỳ miễn là không bong tróc",
        "answer": "C"
    },
    {
        "id": 335,
        "question": "Theo Thông tư 23/2023/TT-BYT, mã QR hoặc DataMatrix Code trên nhãn thuốc được dùng để làm gì?",
        "option_a": "Đăng ký bảo hành sản phẩm với nhà sản xuất",
        "option_b": "Thanh toán tiền thuốc qua ứng dụng ngân hàng",
        "option_c": "Tải ứng dụng tư vấn sức khỏe của nhà thuốc",
        "option_d": "Truy xuất nguồn gốc thuốc",
        "answer": "D"
    },
    {
        "id": 336,
        "question": "Quy định về đơn vị đo lường trên nhãn thuốc:",
        "option_a": "Phải theo hệ đơn vị đo lường hợp pháp (mg, g, ml...)",
        "option_b": "Được dùng bất kỳ hệ đơn vị nào miễn ghi rõ ràng",
        "option_c": "Phải theo hệ đơn vị đo lường Mỹ (lb, fl oz, cup)",
        "option_d": "Phải theo hệ đơn vị đo lường Anh (grain, ounce, pint)",
        "answer": "A"
    },
    {
        "id": 337,
        "question": "Nhãn thuốc phải được gắn ở vị trí phù hợp sau:",
        "option_a": "Trên bao bì ngoài hoặc bao bì trực tiếp",
        "option_b": "Chỉ trên bao bì ngoài của thùng carton",
        "option_c": "Trên bao bì vận chuyển hoặc container",
        "option_d": "Chỉ trên tờ hướng dẫn sử dụng bên trong",
        "answer": "A"
    },
    {
        "id": 338,
        "question": "Nội dung nào sau đây không bắt buộc phải ghi trên nhãn thuốc?",
        "option_a": "Số lô và hạn sử dụng",
        "option_b": "Tên thuốc và hàm lượng",
        "option_c": "Giá bán lẻ",
        "option_d": "Tên cơ sở sản xuất",
        "answer": "C"
    },
    {
        "id": 339,
        "question": "Trong các yếu tố sau, yếu tố nào là điểm mới trong Thông tư 29/2023/TT-BYT?",
        "option_a": "Ghi giá bán lẻ trên mọi loại nhãn",
        "option_b": "Ghi hình ảnh bác sĩ trên nhãn thuốc",
        "option_c": "Ghi nhãn điện tử, định danh",
        "option_d": "Ghi nhãn bằng tiếng Anh bắt buộc",
        "answer": "C"
    },
    {
        "id": 340,
        "question": "Trên nhãn thuốc kê đơn, ký hiệu \"Rx\" phải ghi ở vị trí:",
        "option_a": "Góc trên bên trái tên thuốc",
        "option_b": "Giữa nhãn thuốc phía dưới hạn dùng",
        "option_c": "Góc dưới bên phải tên thuốc",
        "option_d": "Góc trên bên phải số đăng ký",
        "answer": "A"
    },
    {
        "id": 341,
        "question": "Thuốc sản xuất trong nước lưu hành tại Việt Nam, nhãn có thể dùng ngôn ngữ sau:",
        "option_a": "Tiếng Việt, tiếng Anh và tiếng Trung bắt buộc",
        "option_b": "Tiếng Anh và có thể kèm theo tiếng Việt",
        "option_c": "Chỉ tiếng Việt, không được kèm tiếng Anh",
        "option_d": "Tiếng Việt và có thể kèm theo tiếng Anh",
        "answer": "D"
    },
    {
        "id": 342,
        "question": "Chọn ý đúng về nhãn thuốc:",
        "option_a": "Phần trình bày bằng video, âm thanh trên bao bì thuốc",
        "option_b": "Phần trình bày bằng hình ảnh 3D, hologram trên bao bì thuốc",
        "option_c": "Phần trình bày bằng mã QR, link website trên bao bì thuốc",
        "option_d": "Phần trình bày bằng chữ, hình ảnh, dấu hiệu trên bao bì thuốc",
        "answer": "D"
    },
    {
        "id": 343,
        "question": "Số đăng ký thuốc ghi trên nhãn có dạng:",
        "option_a": "QLD-XXXXXX-YY",
        "option_b": "BYT-XXXXXX-YY",
        "option_c": "VN-XXXXXX-YY",
        "option_d": "VD-XXXXXX-YY",
        "answer": "C"
    },
    {
        "id": 344,
        "question": "Trên nhãn thuốc bắt buộc phải có thành phần nào sau đây?",
        "option_a": "Tên biệt dược",
        "option_b": "Số hợp đồng nhập khẩu",
        "option_c": "Tên nhà phân phối",
        "option_d": "Giá bán buôn",
        "answer": "A"
    },
    {
        "id": 345,
        "question": "Trên nhãn thuốc, bắt buộc phải ghi gì?",
        "option_a": "Tên thuốc, dạng bào chế, hàm lượng/nồng độ",
        "option_b": "Tên thuốc, nhà phân phối, số lô",
        "option_c": "Tên thuốc, hình ảnh, slogan quảng cáo",
        "option_d": "Tên thuốc, giá bán, hạn sử dụng",
        "answer": "A"
    },
    {
        "id": 346,
        "question": "Ngôn ngữ ghi trên nhãn thuốc lưu hành tại Việt Nam là:",
        "option_a": "Chỉ tiếng Việt",
        "option_b": "Chỉ tiếng Anh",
        "option_c": "Tiếng Việt và tiếng Anh bắt buộc",
        "option_d": "Tiếng Việt, có thể kèm tiếng nước ngoài",
        "answer": "D"
    },
    {
        "id": 347,
        "question": "Nội dung nào sau đây không bắt buộc ghi trên nhãn ngoài thuốc?",
        "option_a": "Giá bán lẻ thuốc",
        "option_b": "Tên thuốc và số đăng ký",
        "option_c": "Tên cơ sở sản xuất",
        "option_d": "Số lô và hạn sử dụng",
        "answer": "A"
    },
    {
        "id": 348,
        "question": "Trên bao bì nhỏ (ví dụ: ống tiêm, vỉ thuốc nhỏ), nội dung tối thiểu phải có là:",
        "option_a": "Tên thuốc, hoạt chất, dạng bào chế, số lô",
        "option_b": "Tên thuốc, nhà sản xuất, hướng dẫn dùng, hạn dùng",
        "option_c": "Tên thuốc, giá bán, số đăng ký, hạn dùng",
        "option_d": "Tên thuốc, hàm lượng, số lô, hạn dùng",
        "answer": "D"
    },
    {
        "id": 349,
        "question": "Đối với thuốc tiêm, nhãn phải ghi gì về cách dùng?",
        "option_a": "Phải ghi rõ tương tác thuốc và chống chỉ định chi tiết",
        "option_b": "Phải ghi rõ giá bán, nhà phân phối, số hotline tư vấn",
        "option_c": "Phải ghi rõ thời gian bảo quản sau khi pha và nhiệt độ",
        "option_d": "Phải ghi rõ cách pha chế, đường tiêm (bắp, tĩnh mạch, dưới da)",
        "answer": "D"
    },
    {
        "id": 350,
        "question": "Tác dụng không mong muốn của thuốc được phân loại theo tiêu chí nào?",
        "option_a": "Tần suất xảy ra",
        "option_b": "Mức độ nghiêm trọng",
        "option_c": "Đối tượng sử dụng",
        "option_d": "Thời gian xuất hiện",
        "answer": "A"
    },
    {
        "id": 351,
        "question": "Khi ghi ngày sản xuất, hạn dùng, số lô sản xuất phải dùng ký hiệu nào?",
        "option_a": "SX, HH, SL",
        "option_b": "MFG, EXP, LOT",
        "option_c": "NSX, HD, LSX",
        "option_d": "NS, HSD, Lô",
        "answer": "C"
    },
    {
        "id": 352,
        "question": "Vaccine phải ghi hàm lượng theo đơn vị nào?",
        "option_a": "Phần trăm hoặc tỷ lệ phần trăm",
        "option_b": "Milligram hoặc microgram",
        "option_c": "Đơn vị hoạt tính sinh học hoặc đơn vị quốc tế (IU)",
        "option_d": "Số lượng vi khuẩn hoặc virus",
        "answer": "C"
    },
    {
        "id": 353,
        "question": "Bao bì thương phẩm của thuốc KHÔNG bao gồm loại nào sau đây?",
        "option_a": "Bao bì tiếp xúc trực tiếp",
        "option_b": "Vỉ thuốc, ống tiêm",
        "option_c": "Bao bì ngoài",
        "option_d": "Bao bì vận chuyển",
        "answer": "D"
    },
    {
        "id": 354,
        "question": "Trách nhiệm ghi nhãn thuốc, nguyên liệu làm thuốc sản xuất trong nước thuộc về:",
        "option_a": "Cơ sở nhập khẩu, cơ sở phân phối",
        "option_b": "Cục Quản lý Dược, Sở Y tế",
        "option_c": "Nhà thuốc bán lẻ, người sử dụng",
        "option_d": "Cơ sở sản xuất, cơ sở đăng ký thuốc",
        "answer": "D"
    },
    {
        "id": 355,
        "question": "Thuốc nhập khẩu được phép bổ sung nhãn phụ bằng tiếng Việt sau thông quan trong trường hợp nào?",
        "option_a": "Thuốc có bao bì thương phẩm đã có đầy đủ thông tin tiếng Việt",
        "option_b": "Thuốc có bao bì thương phẩm chưa có tờ hướng dẫn tiếng Việt",
        "option_c": "Thuốc muốn thay đổi tên thương mại sau khi thông quan",
        "option_d": "Thuốc muốn ghi thêm thông tin quảng cáo sau thông quan",
        "answer": "B"
    },
    {
        "id": 356,
        "question": "Theo Thông tư 23/2023/TT-BYT, nhãn thuốc phải được gắn ở đâu?",
        "option_a": "Bao bì vận chuyển",
        "option_b": "Bao bì thương phẩm",
        "option_c": "Tờ hướng dẫn sử dụng",
        "option_d": "Thùng carton lớn",
        "answer": "B"
    },
    {
        "id": 357,
        "question": "Quy định về mã vạch, mã QR, mã DataMatrix Code trên nhãn thuốc nhằm mục đích chính là:",
        "option_a": "Cho phép đăng ký thành viên của chương trình khách hàng thân thiết",
        "option_b": "Cho phép tải nhạc chuông và hình nền điện thoại miễn phí",
        "option_c": "Cho phép thanh toán tiền thuốc qua ứng dụng di động",
        "option_d": "Cho phép truy xuất thông tin thuốc toàn bộ quy trình sản xuất và lưu hành",
        "answer": "D"
    },
    {
        "id": 358,
        "question": "Bao bì ngoài phải có đủ thông tin, trừ khi:",
        "option_a": "Bao bì được sản xuất trước năm 2020",
        "option_b": "Bao bì nhỏ không đủ diện tích",
        "option_c": "Bao bì trong suốt có thể nhìn thấy nhãn trong",
        "option_d": "Bao bì của thuốc không kê đơn",
        "answer": "B"
    },
    {
        "id": 359,
        "question": "Thuốc kê đơn phải có ký hiệu sau:",
        "option_a": "Rx",
        "option_b": "POM",
        "option_c": "OTC",
        "option_d": "ETC",
        "answer": "A"
    },
    {
        "id": 360,
        "question": "Người chịu trách nhiệm với nội dung nhãn phụ là:",
        "option_a": "Sở Y tế địa phương",
        "option_b": "Cơ sở sản xuất nước ngoài",
        "option_c": "Cơ sở nhập khẩu",
        "option_d": "Cục Quản lý Dược",
        "answer": "C"
    },
    {
        "id": 361,
        "question": "Nhãn gốc có ngôn ngữ khác nhưng vẫn được dùng nếu:",
        "option_a": "Dùng chữ Nhật Bản",
        "option_b": "Dùng chữ La-tinh",
        "option_c": "Dùng chữ Ả Rập",
        "option_d": "Dùng chữ Trung Quốc",
        "answer": "B"
    },
    {
        "id": 362,
        "question": "Thuốc nào ngoài việc kiểm nghiệm tại cơ sở sản xuất còn phải được kiểm nghiệm bởi cơ sở kiểm nghiệm thuốc của nhà nước trước khi lưu hành?",
        "option_a": "Thuốc kháng sinh",
        "option_b": "Thuốc giảm đau",
        "option_c": "Vắc xin",
        "option_d": "Thuốc vitamin",
        "answer": "C"
    },
    {
        "id": 363,
        "question": "Hiện có bao nhiêu cấp tiêu chuẩn để kiểm nghiệm thuốc và đó là các tiêu chuẩn nào?",
        "option_a": "2 cấp. Tiêu chuẩn cơ sở và tiêu chuẩn quốc gia",
        "option_b": "4 cấp. Cơ sở, địa phương, quốc gia và ASEAN",
        "option_c": "1 cấp. Chỉ tiêu chuẩn dược điển Việt Nam",
        "option_d": "3 cấp. Tiêu chuẩn cơ sở, quốc gia và quốc tế",
        "answer": "A"
    },
    {
        "id": 364,
        "question": "Thuốc đạt chất lượng là thuốc có tiêu chuẩn chất lượng đã đăng ký theo",
        "option_a": "Tiêu chuẩn ASEAN",
        "option_b": "Tiêu chuẩn châu Âu",
        "option_c": "Tiêu chuẩn quốc tế",
        "option_d": "Tiêu chuẩn cơ sở",
        "answer": "D"
    },
    {
        "id": 365,
        "question": "Đối với mẫu thuốc lấy để kiểm tra chất lượng thời hạn trả lời kết quả phân tích, kiểm nghiệm mẫu thuốc là:",
        "option_a": "Tối đa là 15 ngày làm việc, kể từ ngày cơ sở kiểm nghiệm nhận được mẫu thuốc",
        "option_b": "Tối đa là 60 ngày làm việc, kể từ ngày cơ sở kiểm nghiệm nhận được mẫu thuốc",
        "option_c": "Tối đa là 30 ngày làm việc, kể từ ngày cơ sở kiểm nghiệm nhận được mẫu thuốc",
        "option_d": "Tối đa là 45 ngày làm việc, kể từ ngày cơ sở kiểm nghiệm nhận được mẫu thuốc",
        "answer": "C"
    },
    {
        "id": 366,
        "question": "Cơ quan nào có trách nhiệm xây dựng quy hoạch, kế hoạch về quản lý chất lượng thuốc?",
        "option_a": "Hội đồng Dược điển Việt Nam",
        "option_b": "Cục Quản lý dược - Bộ Y tế",
        "option_c": "Sở Y tế các tỉnh, thành phố",
        "option_d": "Viện Kiểm nghiệm thuốc Trung ương",
        "answer": "B"
    },
    {
        "id": 367,
        "question": "Cơ quan có trách nhiệm tổ chức nghiên cứu biên soạn Bộ tiêu chuẩn quốc gia về thuốc là:",
        "option_a": "Bộ Khoa học và Công nghệ",
        "option_b": "Cục Quản lý Dược",
        "option_c": "Hội đồng Dược điển Việt Nam",
        "option_d": "Viện Kiểm nghiệm thuốc Trung ương",
        "answer": "C"
    },
    {
        "id": 368,
        "question": "Thuốc, nguyên liệu làm thuốc, bao bì tiếp xúc trực tiếp với thuốc phải được kiểm nghiệm đúng quy định sau:",
        "option_a": "Sau khi đưa vào sử dụng hoặc xuất xưởng",
        "option_b": "Chỉ khi có khiếu nại từ người sử dụng",
        "option_c": "Định kỳ mỗi quý một lần theo kế hoạch",
        "option_d": "Trước khi đưa vào sử dụng hoặc xuất xưởng",
        "answer": "D"
    },
    {
        "id": 369,
        "question": "Thời gian lưu mẫu thuốc của cơ sở sản xuất, xuất khẩu, nhập khẩu ít nhất là",
        "option_a": "12 tháng sau khi hết hạn dùng",
        "option_b": "36 tháng sau khi hết hạn dùng",
        "option_c": "24 tháng sau khi hết hạn dùng",
        "option_d": "6 tháng sau khi hết hạn dùng",
        "answer": "A"
    },
    {
        "id": 370,
        "question": "Thuốc vi phạm ở mức độ 3 có thể được xử lý theo hình thức sau:",
        "option_a": "Thu hồi về kho và chờ kiểm nghiệm lại",
        "option_b": "Phạt tiền và cho phép bán hết số lượng còn lại",
        "option_c": "Thu hồi và tiêu hủy hoặc tái xuất nếu không khắc phục được",
        "option_d": "Chỉ cảnh cáo và cho phép tiếp tục lưu hành",
        "answer": "C"
    },
    {
        "id": 371,
        "question": "Hình thức thu hồi thuốc bao gồm",
        "option_a": "Thu hồi trong nước và thu hồi xuất khẩu",
        "option_b": "Thu hồi toàn phần và thu hồi một phần",
        "option_c": "Thu hồi cấp tốc và thu hồi thông thường",
        "option_d": "Thu hồi bắt buộc và thu hồi tự nguyện",
        "answer": "D"
    },
    {
        "id": 372,
        "question": "Bao bì tiếp xúc trực tiếp với thuốc phải được kiểm nghiệm theo tiêu chuẩn:",
        "option_a": "Tiêu chuẩn chất lượng đã đăng ký theo hồ sơ đăng ký lưu hành hoặc giấy phép nhập khẩu",
        "option_b": "Tiêu chuẩn chất lượng của nhà sản xuất bao bì tự công bố",
        "option_c": "Tiêu chuẩn chất lượng do Sở Y tế địa phương quy định",
        "option_d": "Tiêu chuẩn chất lượng theo dược điển nước ngoài",
        "answer": "A"
    },
    {
        "id": 373,
        "question": "Thuốc bị kết luận “thuốc không đạt tiêu chuẩn chất lượng” trong trường hợp:",
        "option_a": "Khi kết quả kiểm nghiệm không phù hợp với tiêu chuẩn chất lượng đã đăng ký",
        "option_b": "Khi nhãn thuốc bị rách hoặc mờ một phần nhỏ",
        "option_c": "Khi giá bán cao hơn mức quy định của Bộ Y tế",
        "option_d": "Khi thuốc còn hạn dùng dưới 6 tháng",
        "answer": "A"
    },
    {
        "id": 374,
        "question": "Giấy đăng ký lưu hành thuốc bị thu hồi trong trường hợp sau đây:",
        "option_a": "Thuốc có thay đổi nhỏ về bao bì đóng gói",
        "option_b": "Thuốc có bằng chứng không đáp ứng yêu cầu về an toàn, hiệu quả",
        "option_c": "Thuốc có tăng giá bán theo quy định thị trường",
        "option_d": "Thuốc thay đổi nhà phân phối độc quyền",
        "answer": "B"
    },
    {
        "id": 375,
        "question": "Nguyên liệu làm thuốc bị thu hồi trong trường hợp nào sau đây?",
        "option_a": "Nguyên liệu còn hạn dùng dưới 12 tháng",
        "option_b": "Nguyên liệu có giá nhập khẩu cao hơn dự kiến",
        "option_c": "Nguyên liệu không đạt yêu cầu tiêu chuẩn chất lượng, an toàn, hiệu quả",
        "option_d": "Nguyên liệu thay đổi nhà cung cấp nước ngoài",
        "answer": "C"
    },
    {
        "id": 376,
        "question": "Nội dung sau đây thuộc quản lý chất lượng thuốc, ngoại trừ:",
        "option_a": "Thu hồi thuốc không đạt chất lượng",
        "option_b": "Kiểm nghiệm chất lượng thuốc trước lưu hành",
        "option_c": "Đánh giá hiệu quả kinh tế của thuốc",
        "option_d": "Thanh tra, kiểm tra cơ sở sản xuất thuốc",
        "answer": "C"
    },
    {
        "id": 377,
        "question": "Thuốc giả là thuốc:",
        "option_a": "Có hoạt chất đúng nhưng hết hạn sử dụng dưới 1 tháng",
        "option_b": "Không có hoạt chất đã đăng ký hoặc có hàm lượng hoạt chất không đúng với tiêu chuẩn đã công bố",
        "option_c": "Có hoạt chất đúng nhưng bao bì bị rách hoặc móp méo",
        "option_d": "Có hoạt chất đúng nhưng giá bán cao hơn quy định",
        "answer": "B"
    },
    {
        "id": 378,
        "question": "Theo quy định, trách nhiệm kiểm tra chất lượng thuốc trong quá trình phân phối và lưu thông?",
        "option_a": "Cả cơ sở kinh doanh, phân phối và cơ quan quản lý nhà nước",
        "option_b": "Chỉ Viện Kiểm nghiệm thuốc Trung ương",
        "option_c": "Chỉ cơ sở kinh doanh, phân phối thuốc",
        "option_d": "Chỉ cơ quan quản lý nhà nước về y tế",
        "answer": "A"
    },
    {
        "id": 379,
        "question": "“Thực hành tốt phòng kiểm nghiệm thuốc” được viết tắt là:",
        "option_a": "GLP",
        "option_b": "GDP",
        "option_c": "GMP",
        "option_d": "GPP",
        "answer": "A"
    },
    {
        "id": 380,
        "question": "GDP (Good Distribution Practice) là yêu cầu đối với:",
        "option_a": "Cơ sở kinh doanh, phân phối thuốc",
        "option_b": "Cơ sở nghiên cứu thuốc",
        "option_c": "Cơ sở kiểm nghiệm thuốc",
        "option_d": "Cơ sở sản xuất thuốc",
        "answer": "A"
    },
    {
        "id": 381,
        "question": "Thuốc thuộc diện “thu hồi cấp 2” là thuốc:",
        "option_a": "Không đạt tiêu chuẩn chất lượng nhưng không gây hại",
        "option_b": "Có sai sót về nhãn nhưng chất lượng đạt yêu cầu",
        "option_c": "Có khả năng gây hại nghiêm trọng hoặc tử vong",
        "option_d": "Có khả năng gây hại tạm thời, chưa nghiêm trọng",
        "answer": "D"
    },
    {
        "id": 382,
        "question": "Khi phát hiện thuốc giả, trách nhiệm đầu tiên của cơ sở kinh doanh là:",
        "option_a": "Tự tiêu hủy lô thuốc giả ngay tại cơ sở",
        "option_b": "Chờ kết quả kiểm nghiệm chính thức rồi mới báo",
        "option_c": "Bán hết số lượng còn lại với giá giảm sâu",
        "option_d": "Báo ngay cho cơ quan quản lý và ngừng kinh doanh lô thuốc đó",
        "answer": "D"
    },
    {
        "id": 383,
        "question": "Hoạt động hậu kiểm chất lượng thuốc chủ yếu được thực hiện bằng:",
        "option_a": "Tự kiểm tra của cơ sở sản xuất theo kế hoạch nội bộ",
        "option_b": "Thanh tra, kiểm tra và lấy mẫu kiểm nghiệm thuốc lưu hành",
        "option_c": "Phân tích dữ liệu bán hàng của các nhà thuốc",
        "option_d": "Khảo sát ý kiến người sử dụng qua điện thoại",
        "answer": "B"
    },
    {
        "id": 384,
        "question": "Đâu là cơ sở kiểm nghiệm của Nhà nước về thuốc ở Trung ương?",
        "option_a": "Trung tâm Kiểm nghiệm thuốc tỉnh Bình Dương",
        "option_b": "Sở Y tế Thành phố Hồ Chí Minh",
        "option_c": "Viện kiểm nghiệm thuốc Thành phố Hồ Chí Minh",
        "option_d": "Cục Quản lý Dược – Bộ Y tế",
        "answer": "C"
    },
    {
        "id": 385,
        "question": "Thông tư số 07/VBHN-BYT được ban hành vào ngày nào?",
        "option_a": "29/07/2024",
        "option_b": "29/08/2024",
        "option_c": "29/08/2023",
        "option_d": "29/08/2025",
        "answer": "B"
    },
    {
        "id": 386,
        "question": "Đối với các cơ quan kiểm nghiệm thuốc, thời gian lưu mẫu không được dưới bao nhiêu tháng kể từ ngày lấy mẫu hoặc cơ sở gửi mẫu tới?",
        "option_a": "36 tháng",
        "option_b": "24 tháng",
        "option_c": "12 tháng",
        "option_d": "18 tháng",
        "answer": "B"
    },
    {
        "id": 387,
        "question": "Cơ sở sản xuất cần thực hiện điều gì để đảm bảo minh bạch về chất lượng thuốc theo Thông tư 07/VBHN-BYT?",
        "option_a": "Công khai giá thành sản xuất và lợi nhuận của từng lô",
        "option_b": "Công khai các chỉ tiêu về thuốc và nguyên liệu làm thuốc",
        "option_c": "Chỉ công bố thông tin khi có yêu cầu của cơ quan quản lý",
        "option_d": "Giấu kín công thức bào chế và quy trình sản xuất",
        "answer": "B"
    },
    {
        "id": 388,
        "question": "Cơ quan nào dưới đây có thẩm quyền ra thông báo đình chỉ lưu hành và thu hồi thuốc trong phạm vi một tỉnh:",
        "option_a": "Sở Y tế",
        "option_b": "Bộ Y tế",
        "option_c": "Cục Quản lý Dược",
        "option_d": "Viện Kiểm nghiệm thuốc Trung ương",
        "answer": "A"
    },
    {
        "id": 389,
        "question": "Dược điển của các quốc gia nào có giá trị để căn cứ vào là:",
        "option_a": "Úc, Canada, New Zealand, Thụy Sĩ, Thụy Điển",
        "option_b": "Hàn Quốc, Singapore, Thái Lan, Malaysia, Indonesia",
        "option_c": "Trung Quốc, Ấn Độ, Nga, Brazil, Mexico",
        "option_d": "Anh, Hoa Kỳ, Nhật, Pháp, Đức",
        "answer": "D"
    },
    {
        "id": 390,
        "question": "Thu hồi bắt buộc là hình thức thu hồi thuốc theo quyết định của",
        "option_a": "Hiệp hội doanh nghiệp dược Việt Nam",
        "option_b": "Tổ chức kiểm nghiệm độc lập quốc tế",
        "option_c": "Cơ quan nhà nước có thẩm quyền",
        "option_d": "Cơ sở sản xuất hoặc nhập khẩu tự quyết định",
        "answer": "C"
    },
    {
        "id": 391,
        "question": "Đối với thuốc vi phạm chất lượng ở mức độ 2, việc thu hồi thuốc phải hoàn thành trong thời hạn bao lâu kể từ ngày có quyết định thu hồi?",
        "option_a": "45 ngày",
        "option_b": "7 ngày",
        "option_c": "15 ngày",
        "option_d": "30 ngày",
        "answer": "C"
    },
    {
        "id": 392,
        "question": "Theo quy định quản lý chất lượng thuốc, nguyên liệu làm thuốc không thuộc trường hợp bị thu hồi và phải tiêu hủy là:",
        "option_a": "Là thuốc giả, thuốc nhập lậu",
        "option_b": "Có bằng chứng không an toàn, không hiệu quả",
        "option_c": "Không đáp ứng yêu cầu về nhãn thuốc",
        "option_d": "Không đạt yêu cầu tiêu chuẩn chất lượng",
        "answer": "C"
    },
    {
        "id": 393,
        "question": "Đơn vị mẫu thuốc do cơ quan kiểm tra chất lượng thuốc gửi tới cơ quan kiểm nghiệm lập, lưu phiếu kiểm nghiệm theo quy định gồm bao nhiêu bản?",
        "option_a": "1 bản duy nhất lưu tại cơ sở kiểm nghiệm",
        "option_b": "2 bản (1 bản lưu ở cơ sở kiểm nghiệm, 1 bản lưu ở cơ quan kiểm tra)",
        "option_c": "3 bản (1 bản lưu ở cơ sở kiểm nghiệm, 1 bản lưu ở cơ quan kiểm tra chất lượng thuốc, 1 bản lưu ở cơ sở sản xuất được lấy mẫu)",
        "option_d": "4 bản (thêm 1 bản gửi về Bộ Y tế)",
        "answer": "C"
    },
    {
        "id": 394,
        "question": "Khi có thông báo thu hồi thuốc, các cơ sở bán buôn, bán lẻ thuốc phải có trách nhiệm sau",
        "option_a": "Chuyển thuốc bị thu hồi sang cơ sở khác để bán",
        "option_b": "Ngừng kinh doanh, cấp phát thuốc bị thu hồi",
        "option_c": "Giữ nguyên thuốc trên kệ và chờ hướng dẫn thêm",
        "option_d": "Tiếp tục bán hết số lượng còn lại với giá giảm",
        "answer": "B"
    },
    {
        "id": 395,
        "question": "Phòng kiểm nghiệm thuốc của các cơ sở sản xuất, kinh doanh thuốc chịu trách nhiệm chính về hoạt động sau:",
        "option_a": "Cấp giấy chứng nhận chất lượng cho thuốc của cơ sở khác",
        "option_b": "Thanh tra các cơ sở sản xuất thuốc trên địa bàn",
        "option_c": "Kiểm tra, phân tích, kiểm nghiệm xác định chất lượng nguyên liệu, phụ liệu làm thuốc",
        "option_d": "Làm dịch vụ kiểm nghiệm thuốc cho các doanh nghiệp độc lập khác",
        "answer": "C"
    },
    {
        "id": 396,
        "question": "Theo tiêu chuẩn chất lượng thuốc, cơ sở sản xuất, pha chế thuốc phải áp dụng:",
        "option_a": "Tiêu chuẩn tự xây dựng không cần tham chiếu",
        "option_b": "Tiêu chuẩn quốc tế cao hơn dược điển Việt Nam",
        "option_c": "Tiêu chuẩn cơ sở phù hợp với tiêu chuẩn dược điển Việt Nam",
        "option_d": "Tiêu chuẩn của nước sản xuất nguyên liệu",
        "answer": "C"
    },
    {
        "id": 397,
        "question": "Giấy chứng nhận đủ điều kiện kinh doanh dược có đặc điểm sau:",
        "option_a": "Không quy định thời hạn hiệu lực",
        "option_b": "Có thời hạn hiệu lực 10 năm",
        "option_c": "Có thời hạn hiệu lực 5 năm",
        "option_d": "Có thời hạn hiệu lực 3 năm",
        "answer": "A"
    },
    {
        "id": 398,
        "question": "Cơ sở sản xuất thuốc, nguyên liệu làm thuốc muốn được cấp Giấy chứng nhận đủ điều kiện kinh doanh dược phải có:",
        "option_a": "Nhà xưởng, kho bảo quản, trang thiết bị đáp ứng Thực hành tốt nhà thuốc",
        "option_b": "Nhà xưởng, kho bảo quản, trang thiết bị, hệ thống quản lý chất lượng và nhân sự đáp ứng Thực hành tốt sản xuất thuốc",
        "option_c": "Nhà xưởng, kho bảo quản, trang thiết bị đáp ứng Thực hành tốt phòng thí nghiệm",
        "option_d": "Nhà xưởng, kho bảo quản, trang thiết bị đáp ứng Thực hành tốt phân phối thuốc",
        "answer": "B"
    },
    {
        "id": 399,
        "question": "Cơ sở bán lẻ thuốc phải đáp ứng điều kiện sau:",
        "option_a": "Có địa điểm, khu vực bảo quản, trang thiết bị bảo quản và nhân sự đáp ứng Thực hành tốt GDP",
        "option_b": "Có địa điểm, khu vực bảo quản, trang thiết bị bảo quản và nhân sự đáp ứng Thực hành tốt GPP",
        "option_c": "Có địa điểm, khu vực bảo quản, trang thiết bị bảo quản và nhân sự đáp ứng Thực hành tốt GMP",
        "option_d": "Có địa điểm, khu vực bảo quản, trang thiết bị bảo quản và nhân sự đáp ứng Thực hành tốt GLP",
        "answer": "B"
    },
    {
        "id": 400,
        "question": "Cơ sở bán lẻ thuốc không được thực hiện quyền nào dưới đây:",
        "option_a": "Bán lẻ thuốc theo đơn và không theo đơn cho người bệnh",
        "option_b": "Thực hiện cung ứng thuốc cho cơ sở khám bệnh, chữa bệnh để điều trị cho bệnh nhân do Bộ Y tế quy định",
        "option_c": "Tư vấn sử dụng thuốc cho người mua thuốc tại cơ sở",
        "option_d": "Bảo quản thuốc theo đúng điều kiện ghi trên nhãn",
        "answer": "B"
    },
    {
        "id": 401,
        "question": "Cơ sở kinh doanh dược có quyền mua nguyên liệu làm thuốc để pha chế và bán tại cơ sở trong trường hợp sau:",
        "option_a": "Khi nhà thuốc có dược sĩ phụ trách chuyên môn trực tiếp quản lý việc pha chế thuốc",
        "option_b": "Khi nhà thuốc có giấy phép kinh doanh của Sở Công Thương",
        "option_c": "Khi nhà thuốc có trung cấp dược phụ trách chuyên môn quản lý việc pha chế",
        "option_d": "Khi nhà thuốc có hợp đồng với cơ sở sản xuất nguyên liệu",
        "answer": "A"
    },
    {
        "id": 402,
        "question": "Hoạt động dược không vì mục đích thương mại bao gồm:",
        "option_a": "Mua bán, xuất khẩu, nhập khẩu, phân phối thuốc và nguyên liệu làm thuốc",
        "option_b": "Quảng cáo, giới thiệu, khuyến mại thuốc và nguyên liệu làm thuốc",
        "option_c": "Nghiên cứu, phát triển, đăng ký thuốc và nguyên liệu làm thuốc",
        "option_d": "Sản xuất, pha chế, chế biến, bảo quản, vận chuyển, cấp phát thuốc và nguyên liệu làm thuốc",
        "answer": "D"
    },
    {
        "id": 403,
        "question": "Cơ sở nào sau đây được xếp vào nhóm hoạt động dược không vì mục đích thương mại?",
        "option_a": "Cơ sở y tế công lập tham gia cung ứng dịch vụ cho người dân",
        "option_b": "Công ty cổ phần dược phẩm niêm yết trên sàn chứng khoán",
        "option_c": "Nhà thuốc tư nhân đạt chuẩn GPP",
        "option_d": "Doanh nghiệp tư nhân sản xuất thuốc generic",
        "answer": "A"
    },
    {
        "id": 404,
        "question": "Hồ sơ đề nghị bán lẻ thuốc thuộc Danh mục thuốc hạn chế bán lẻ đối với cơ sở chưa được cấp Giấy chứng nhận đủ điều kiện kinh doanh dược với phạm vi bán lẻ thuốc bao gồm:",
        "option_a": "Đơn đề nghị bán lẻ thuốc hạn chế + bản sao Giấy chứng nhận đủ điều kiện kinh doanh dược",
        "option_b": "Đơn đề nghị bán lẻ thuốc hạn chế + bản sao Hợp đồng thuê mặt bằng",
        "option_c": "Đơn đề nghị bán lẻ thuốc hạn chế + bản sao Chứng chỉ hành nghề",
        "option_d": "Đơn đề nghị bán lẻ thuốc hạn chế + bản sao Giấy phép kinh doanh",
        "answer": "A"
    },
    {
        "id": 405,
        "question": "Trong bao nhiêu ngày làm việc kể từ ngày nhận hồ sơ hợp lệ, Sở Y tế phải có văn bản cấp phép bán lẻ thuốc hạn chế cho cơ sở?",
        "option_a": "7 ngày làm việc",
        "option_b": "10 ngày làm việc",
        "option_c": "15 ngày làm việc",
        "option_d": "5 ngày làm việc",
        "answer": "A"
    },
    {
        "id": 406,
        "question": "Địa bàn mở quầy thuốc mới được quy định như thế nào?",
        "option_a": "Được mở tại nơi có từ 2.000 dân trở lên và đáp ứng nhu cầu thuốc của cộng đồng",
        "option_b": "Được mở tại nơi có từ 1.000 dân trở lên và đáp ứng nhu cầu thuốc của cộng đồng",
        "option_c": "Được mở tại nơi có từ 5.000 dân trở lên và đáp ứng nhu cầu thuốc của cộng đồng",
        "option_d": "Được mở tại bất kỳ nơi nào có nhu cầu thuốc của cộng đồng",
        "answer": "A"
    },
    {
        "id": 407,
        "question": "Tủ thuốc trạm y tế xã được phép bán thuốc trong trường hợp nào?",
        "option_a": "Bán thuốc gây nghiện, hướng thần theo đơn của bác sĩ",
        "option_b": "Bán tất cả các loại thuốc kê đơn và không kê đơn",
        "option_c": "Bán thuốc nhập khẩu và thuốc biệt dược gốc",
        "option_d": "Bán thuốc trong Danh mục thuốc thiết yếu và Danh mục thuốc do Bộ trưởng Bộ Y tế quy định",
        "answer": "D"
    },
    {
        "id": 408,
        "question": "Hồ sơ đề nghị cấp Giấy chứng nhận đủ điều kiện kinh doanh dược bao gồm:",
        "option_a": "Đơn đề nghị, hợp đồng lao động của nhân viên, báo cáo tài chính năm gần nhất",
        "option_b": "Đơn đề nghị, giấy phép xây dựng, biên bản nghiệm thu công trình",
        "option_c": "Đơn đề nghị, tài liệu pháp lý chứng minh thành lập cơ sở, tài liệu kỹ thuật tương ứng với cơ sở kinh doanh dược",
        "option_d": "Đơn đề nghị, giấy chứng nhận quyền sử dụng đất, hợp đồng thuê kho",
        "answer": "C"
    },
    {
        "id": 409,
        "question": "Hồ sơ đề nghị cấp lại Giấy chứng nhận đủ điều kiện kinh doanh dược được áp dụng trong trường hợp nào?",
        "option_a": "Khi Giấy chứng nhận bị mất, hư hỏng",
        "option_b": "Khi thay đổi người phụ trách chuyên môn",
        "option_c": "Khi thay đổi địa điểm kinh doanh",
        "option_d": "Khi mở rộng phạm vi kinh doanh",
        "answer": "A"
    },
    {
        "id": 410,
        "question": "Trong hồ sơ đề nghị cấp lại Giấy chứng nhận đủ điều kiện kinh doanh dược, bắt buộc phải có:",
        "option_a": "Giấy xác nhận của Sở Y tế về việc giấy còn hiệu lực",
        "option_b": "Bản sao Giấy chứng nhận bị mất có công chứng",
        "option_c": "Đơn đề nghị cấp lại Giấy chứng nhận đủ điều kiện kinh doanh dược",
        "option_d": "Biên bản xác nhận của công an về việc mất giấy",
        "answer": "C"
    },
    {
        "id": 411,
        "question": "Theo quy định, Bộ trưởng Bộ Y tế có thẩm quyền cấp, cấp lại, điều chỉnh, thu hồi Giấy chứng nhận đủ điều kiện kinh doanh dược đối với cơ sở sau đây:",
        "option_a": "Quầy thuốc và tủ thuốc trạm y tế xã",
        "option_b": "Cơ sở bán lẻ thuốc, nhà thuốc",
        "option_c": "Cơ sở sản xuất thuốc, nguyên liệu làm thuốc",
        "option_d": "Cơ sở bán buôn thuốc trong tỉnh",
        "answer": "C"
    },
    {
        "id": 412,
        "question": "Trong bao lâu kể từ ngày ghi trên Phiếu tiếp nhận hồ sơ, cơ quan có thẩm quyền phải cấp Giấy chứng nhận đủ điều kiện kinh doanh dược nếu hồ sơ hợp lệ?",
        "option_a": "15 ngày làm việc",
        "option_b": "60 ngày làm việc",
        "option_c": "45 ngày làm việc",
        "option_d": "30 ngày làm việc",
        "answer": "D"
    },
    {
        "id": 413,
        "question": "Nếu cơ sở nộp hồ sơ nhưng không sửa đổi, bổ sung theo yêu cầu trong thời hạn 6 tháng kể từ ngày có văn bản thông báo thì hồ sơ sẽ:",
        "option_a": "Được trả lại và hoàn phí thẩm định",
        "option_b": "Được chuyển sang hình thức thẩm định nhanh",
        "option_c": "Bị coi là không còn giá trị",
        "option_d": "Được gia hạn thêm 3 tháng để bổ sung",
        "answer": "C"
    },
    {
        "id": 414,
        "question": "Trong trường hợp cấp lại, điều chỉnh Giấy chứng nhận đủ điều kiện kinh doanh dược do bị mất, hư hỏng hoặc thay đổi tên, địa chỉ cơ sở, thời hạn giải quyết là:",
        "option_a": "07 ngày làm việc",
        "option_b": "30 ngày làm việc",
        "option_c": "15 ngày làm việc",
        "option_d": "10 ngày làm việc",
        "answer": "A"
    },
    {
        "id": 415,
        "question": "Một trong những trường hợp bị thu hồi Giấy chứng nhận đủ điều kiện kinh doanh dược là:",
        "option_a": "Không hoạt động trong thời gian 24 tháng liên tục mà không thông báo với cơ quan có thẩm quyền",
        "option_b": "Không hoạt động trong thời gian 6 tháng liên tục mà không thông báo với cơ quan có thẩm quyền",
        "option_c": "Không hoạt động trong thời gian 12 tháng liên tục mà không thông báo với cơ quan có thẩm quyền",
        "option_d": "Không hoạt động trong thời gian 3 tháng liên tục mà không thông báo với cơ quan có thẩm quyền",
        "answer": "C"
    },
    {
        "id": 416,
        "question": "Giấy chứng nhận đủ điều kiện kinh doanh dược có thời hạn hiệu lực:",
        "option_a": "3 năm kể từ ngày cấp",
        "option_b": "10 năm kể từ ngày cấp",
        "option_c": "Không quy định thời hạn",
        "option_d": "5 năm kể từ ngày cấp",
        "answer": "C"
    },
    {
        "id": 417,
        "question": "Cơ quan quy định chi tiết hồ sơ, thủ tục cấp, cấp lại, điều chỉnh, thu hồi giấy chứng nhận đủ điều kiện kinh doanh dược là:",
        "option_a": "Chính phủ",
        "option_b": "Cục Quản lý Dược",
        "option_c": "Bộ Y tế",
        "option_d": "Sở Y tế",
        "answer": "A"
    },
    {
        "id": 418,
        "question": "Địa bàn và phạm vi kinh doanh bán lẻ thuốc áp dụng cho đối tượng sau:",
        "option_a": "Cơ sở bán buôn thuốc",
        "option_b": "Nhà thuốc đạt chuẩn GPP",
        "option_c": "Cơ sở sản xuất thuốc",
        "option_d": "Quầy thuốc, tủ thuốc trạm y tế xã",
        "answer": "D"
    },
    {
        "id": 419,
        "question": "Lộ trình thực hiện “Thực hành tốt” đối với các loại hình cơ sở kinh doanh dược quy định do cơ quan sau:",
        "option_a": "Chính phủ",
        "option_b": "Cục Quản lý Dược",
        "option_c": "Sở Y tế các tỉnh",
        "option_d": "Bộ Y tế",
        "answer": "D"
    },
    {
        "id": 420,
        "question": "Chọn ý đúng về cơ sở kinh doanh dược có quyền:",
        "option_a": "Chỉ được kinh doanh thuốc sản xuất trong nước",
        "option_b": "Chỉ được thực hiện một hoạt động kinh doanh dược duy nhất",
        "option_c": "Được thực hiện mọi hoạt động kinh doanh dược không cần điều kiện",
        "option_d": "Thực hiện một số hoặc tất cả các hoạt động kinh doanh dược nếu đáp ứng điều kiện",
        "answer": "D"
    },
    {
        "id": 421,
        "question": "Quảng cáo thuốc của cơ sở kinh doanh dược phải theo quy định sau:",
        "option_a": "Theo quy định pháp luật và được Sở Y tế duyệt nội dung",
        "option_b": "Theo quy định pháp luật và được Bộ Y tế duyệt nội dung",
        "option_c": "Theo quy định pháp luật và được Hiệp hội Dược duyệt nội dung",
        "option_d": "Theo quy định pháp luật và được tự quyết định nội dung",
        "answer": "B"
    },
    {
        "id": 422,
        "question": "Cơ sở kinh doanh dược phải có đầy đủ các điều kiện sau:",
        "option_a": "Giấy chứng nhận đăng ký đầu tư",
        "option_b": "Giấy phép kinh doanh của Sở Công Thương",
        "option_c": "Giấy chứng nhận đủ điều kiện kinh doanh dược",
        "option_d": "Giấy phép xây dựng nhà xưởng",
        "answer": "C"
    },
    {
        "id": 423,
        "question": "Trong quá trình hoạt động kinh doanh, cơ sở phải đảm bảo:",
        "option_a": "Tăng doanh thu mỗi năm ít nhất 10%",
        "option_b": "Mở rộng mạng lưới phân phối toàn quốc",
        "option_c": "Duy trì điều kiện kinh doanh dược",
        "option_d": "Giảm giá bán thuốc định kỳ mỗi quý",
        "answer": "C"
    },
    {
        "id": 424,
        "question": "Khi gây thiệt hại do lỗi của cơ sở kinh doanh dược, cơ sở phải có trách nhiệm sao:",
        "option_a": "Chỉ bị thu hồi giấy chứng nhận kinh doanh",
        "option_b": "Chỉ xin lỗi công khai trên phương tiện thông tin",
        "option_c": "Chỉ bị phạt hành chính theo quy định",
        "option_d": "Bồi thường theo quy định pháp luật",
        "answer": "D"
    },
    {
        "id": 425,
        "question": "Cơ sở bán lẻ thuốc phải lưu giữ chứng từ liên quan đến thuốc, nguyên liệu thuốc ít nhất:",
        "option_a": "5 năm",
        "option_b": "3 năm",
        "option_c": "1 năm",
        "option_d": "2 năm",
        "answer": "C"
    },
    {
        "id": 426,
        "question": "Giá bán buôn, bán lẻ thuốc phải niêm yết theo quy định sau:",
        "option_a": "Bằng tiếng Anh tại nơi giao dịch hoặc nơi bán",
        "option_b": "Bằng tiếng Việt và tiếng Anh tại nơi giao dịch",
        "option_c": "Bằng tiếng Việt tại nơi giao dịch hoặc nơi bán",
        "option_d": "Không bắt buộc niêm yết giá bán",
        "answer": "C"
    },
    {
        "id": 427,
        "question": "Khi ghi nhãn thuốc bán lẻ không có đơn, phải ghi:",
        "option_a": "Liều dùng; Số lần dùng",
        "option_b": "Số đăng ký; Hạn sử dụng",
        "option_c": "Tên bệnh; Chẩn đoán",
        "option_d": "Giá bán; Nhà sản xuất",
        "answer": "A"
    },
    {
        "id": 428,
        "question": "Cơ sở kinh doanh dược phải báo cáo hằng năm theo yêu cầu của cơ quan sau:",
        "option_a": "Tổ chức kiểm toán độc lập",
        "option_b": "Cơ quan thuế địa phương",
        "option_c": "Hiệp hội doanh nghiệp dược",
        "option_d": "Cơ quan quản lý có thẩm quyền",
        "answer": "D"
    },
    {
        "id": 429,
        "question": "Báo cáo xuất khẩu, nhập khẩu thuốc kiểm soát đặc biệt phải gửi cho:",
        "option_a": "Tổng cục Hải quan",
        "option_b": "Bộ Công Thương",
        "option_c": "Hiệp hội xuất nhập khẩu",
        "option_d": "Cơ quan quản lý có thẩm quyền",
        "answer": "D"
    },
    {
        "id": 430,
        "question": "Theo quy định, bán lẻ thuốc kê đơn trong trường hợp sau bị nghiêm cấm:",
        "option_a": "Bán thuốc có đơn thuốc của bác sĩ",
        "option_b": "Bán thuốc không có đơn thuốc",
        "option_c": "Bán thuốc theo đơn của bác sĩ nước ngoài được công nhận",
        "option_d": "Bán thuốc theo đơn điện tử hợp lệ",
        "answer": "B"
    },
    {
        "id": 431,
        "question": "Theo luật, quảng cáo thuốc trong trường hợp sau bị nghiêm cấm:",
        "option_a": "Quảng cáo thuốc khi chưa được cơ quan quản lý nhà nước có thẩm quyền xác nhận nội dung",
        "option_b": "Quảng cáo thuốc đã được xác nhận nội dung trên báo chí",
        "option_c": "Quảng cáo thuốc đã được xác nhận nội dung trên truyền hình",
        "option_d": "Quảng cáo thuốc đã được xác nhận nội dung tại nhà thuốc",
        "answer": "A"
    },
    {
        "id": 432,
        "question": "Quảng cáo thuốc bằng việc sử dụng kết quả nghiên cứu, thử lâm sàng chưa được Bộ Y tế công nhận là:",
        "option_a": "Hành vi được phép đối với thuốc không kê đơn",
        "option_b": "Hành vi bị nghiêm cấm",
        "option_c": "Hành vi được phép nếu có chú thích rõ nguồn",
        "option_d": "Hành vi được phép nếu có sự đồng ý của nhà nghiên cứu",
        "answer": "B"
    },
    {
        "id": 433,
        "question": "Nguyên liệu làm thuốc hết hạn dùng được phép sử dụng khi:",
        "option_a": "Được gia hạn bởi nhà sản xuất",
        "option_b": "Được sử dụng cho nghiên cứu khoa học",
        "option_c": "Không bao giờ được phép sử dụng",
        "option_d": "Được kiểm nghiệm lại và đạt chất lượng",
        "answer": "C"
    },
    {
        "id": 434,
        "question": "Người phụ trách chuyên môn về dược có thể đồng thời đứng tên phụ trách ở bao nhiêu cơ sở?",
        "option_a": "01 cơ sở theo quy định",
        "option_b": "02 cơ sở theo quy định",
        "option_c": "Không giới hạn số lượng cơ sở",
        "option_d": "03 cơ sở theo quy định",
        "answer": "A"
    },
    {
        "id": 435,
        "question": "Hành vi sau đây không nằm trong nhóm vi phạm về chất lượng thuốc:",
        "option_a": "Kinh doanh thuốc giả, thuốc kém chất lượng",
        "option_b": "Kinh doanh thuốc hết hạn sử dụng",
        "option_c": "Quảng cáo thuốc chưa xác nhận nội dung",
        "option_d": "Kinh doanh thuốc không rõ nguồn gốc",
        "answer": "C"
    },
    {
        "id": 436,
        "question": "Hành vi sau bị cấm, chọn ý đúng:",
        "option_a": "Kinh doanh thuốc sản xuất trong nước đạt chuẩn",
        "option_b": "Kinh doanh thuốc generic có số đăng ký",
        "option_c": "Kinh doanh thuốc nhập khẩu có đầy đủ giấy tờ",
        "option_d": "Kinh doanh thuốc viện trợ với giá ưu đãi ra thị trường",
        "answer": "D"
    },
    {
        "id": 437,
        "question": "Theo quy định, hành vi nào sau đây bị cấm trong kinh doanh dược?",
        "option_a": "Bán thuốc không kê đơn đúng quy định",
        "option_b": "Bán thuốc trong chương trình mục tiêu quốc gia",
        "option_c": "Bán thuốc theo đơn của bác sĩ hợp lệ",
        "option_d": "Bán thuốc thiết yếu theo danh mục",
        "answer": "B"
    },
    {
        "id": 438,
        "question": "Theo Luật Dược, người hành nghề dược được phép hành nghề khi đảm bảo điều kiện sau:",
        "option_a": "Khi có giấy phép kinh doanh và hành nghề đúng phạm vi",
        "option_b": "Khi có chứng chỉ hành nghề và hành nghề đúng phạm vi được cấp",
        "option_c": "Khi có chứng chỉ hành nghề và hành nghề ở nhiều nơi",
        "option_d": "Khi có bằng đại học dược và hành nghề đúng phạm vi",
        "answer": "B"
    },
    {
        "id": 439,
        "question": "Một công ty dược phẩm quảng cáo thuốc mới dựa trên kết quả nghiên cứu lâm sàng chưa được Bộ Y tế công nhận. Hành vi này đã vi phạm trong quảng cáo thuốc như sau:",
        "option_a": "Quảng cáo thuốc đúng quy định pháp luật",
        "option_b": "Quảng cáo thuốc với nội dung khoa học chính xác",
        "option_c": "Quảng cáo thuốc hỗ trợ nghiên cứu khoa học",
        "option_d": "Quảng cáo thuốc khi chưa được xác nhận nội dung",
        "answer": "D"
    },
    {
        "id": 440,
        "question": "Người giới thiệu thuốc cho cán bộ y tế phải có trình độ chuyên môn về y dược từ:",
        "option_a": "Cao đẳng trở lên",
        "option_b": "Đại học trở lên",
        "option_c": "Trung cấp trở lên",
        "option_d": "Sơ cấp trở lên",
        "answer": "A"
    },
    {
        "id": 441,
        "question": "Kể từ ngày nhận hồ sơ hợp lệ, cơ quan có thẩm quyền CẤP giấy xác nhận cho phép được thông tin, quảng cáo thuốc trong vòng:",
        "option_a": "7 ngày",
        "option_b": "10 ngày",
        "option_c": "15 ngày",
        "option_d": "30 ngày",
        "answer": "C"
    },
    {
        "id": 442,
        "question": "Theo quy định, \"Người giới thiệu thuốc\" có trách nhiệm sau:",
        "option_a": "Chịu trách nhiệm về việc kê đơn thuốc của bác sĩ",
        "option_b": "Chịu trách nhiệm về hoạt động và thông tin về thuốc do họ giới thiệu",
        "option_c": "Chịu trách nhiệm về doanh số bán hàng của thuốc được giới thiệu",
        "option_d": "Chịu trách nhiệm về chất lượng thuốc tại nhà thuốc",
        "answer": "B"
    },
    {
        "id": 443,
        "question": "Đơn vị kinh doanh thuốc có trách nhiệm cung cấp thông tin về thuốc cho những đối tượng sau:",
        "option_a": "Cung cấp cho cơ quan thuế và cơ quan hải quan",
        "option_b": "Cung cấp cho nhà phân phối và đại lý bán buôn thuốc",
        "option_c": "Cung cấp cho người hành nghề khám bệnh, chữa bệnh và người sử dụng thuốc",
        "option_d": "Cung cấp cho đối thủ cạnh tranh trong ngành dược",
        "answer": "C"
    },
    {
        "id": 444,
        "question": "Thông tin quảng cáo thuốc phải bao gồm những nội dung bắt buộc sau đây:",
        "option_a": "Tên thuốc, tên hoạt chất và giấy phép lưu hành",
        "option_b": "Tên thuốc, giá bán và nhà phân phối",
        "option_c": "Tên thuốc, khuyến mại và quà tặng kèm theo",
        "option_d": "Tên thuốc, hình ảnh bác sĩ và lời khuyên",
        "answer": "A"
    },
    {
        "id": 445,
        "question": "Theo Thông tư 31/2025/TT-BYT, cơ sở kinh doanh dược chỉ được phép cung cấp thông tin thuốc cho:",
        "option_a": "Người tiêu dùng trực tiếp",
        "option_b": "Nhân viên bán hàng siêu thị",
        "option_c": "Học sinh, sinh viên các trường",
        "option_d": "Người hành nghề khám chữa bệnh",
        "answer": "D"
    },
    {
        "id": 446,
        "question": "Hành vi sau đây bị cấm trong quảng cáo thuốc:",
        "option_a": "Quảng cáo trên báo chí, truyền hình đã được xác nhận nội dung",
        "option_b": "So sánh thuốc do cơ sở mình sản xuất với thuốc của cơ sở sản xuất thuốc khác; Sử dụng hình ảnh cán bộ y tế mặc blouse trắng để khuyên dùng; Khẳng định thuốc an toàn tuyệt đối",
        "option_c": "Ghi tên thuốc, chỉ định, chống chỉ định và khuyến cáo đọc kỹ hướng dẫn",
        "option_d": "Sử dụng thông tin từ tờ hướng dẫn sử dụng đã được duyệt",
        "answer": "B"
    },
    {
        "id": 447,
        "question": "Theo Thông tư 31/2025/TT-BYT, hình ảnh người bệnh chỉ được sử dụng trong thông tin thuốc khi:",
        "option_a": "Được sự đồng ý bằng văn bản của người bệnh",
        "option_b": "Hình ảnh được chỉnh sửa bằng phần mềm đồ họa",
        "option_c": "Người bệnh là người nổi tiếng hoặc người mẫu",
        "option_d": "Phù hợp với tài liệu và hướng dẫn chuyên môn của Bộ Y tế",
        "answer": "D"
    },
    {
        "id": 448,
        "question": "Giấy xác nhận nội dung quảng cáo thuốc sẽ bị thu hồi khi:",
        "option_a": "Doanh nghiệp thay đổi người đại diện pháp luật",
        "option_b": "Quảng cáo sai sự thật; Thuốc hết hiệu lực lưu hành; Có thay đổi trong hồ sơ đăng ký",
        "option_c": "Quảng cáo đúng sự thật; Thuốc còn hiệu lực lưu hành; Không có thay đổi hồ sơ",
        "option_d": "Quảng cáo trên nhiều kênh truyền thông khác nhau",
        "answer": "B"
    },
    {
        "id": 449,
        "question": "Nội dung nào sau đây không được phép xuất hiện trong quảng cáo thuốc:",
        "option_a": "Tên thuốc và chỉ định chính",
        "option_b": "Chống chỉ định và khuyến cáo",
        "option_c": "Cam kết thuốc chữa khỏi hoàn toàn bệnh",
        "option_d": "Khuyến cáo đọc kỹ hướng dẫn sử dụng",
        "answer": "C"
    },
    {
        "id": 450,
        "question": "Theo quy định, quảng cáo thuốc không được thực hiện dưới hình thức sau đây:",
        "option_a": "Thư tín trực tiếp đến người tiêu dùng",
        "option_b": "Quảng cáo trên truyền hình đã được xác nhận nội dung",
        "option_c": "Giới thiệu thuốc cho cán bộ y tế tại cơ sở khám chữa bệnh",
        "option_d": "Quảng cáo trên báo chí đã được xác nhận nội dung",
        "answer": "A"
    },
    {
        "id": 451,
        "question": "Thời hạn của Giấy xác nhận nội dung quảng cáo thuốc là bao lâu?",
        "option_a": "24 tháng",
        "option_b": "36 tháng",
        "option_c": "6 tháng",
        "option_d": "12 tháng",
        "answer": "A"
    },
    {
        "id": 452,
        "question": "Trước khi thực hiện quảng cáo thuốc, doanh nghiệp cần đảm bảo điều kiện sau:",
        "option_a": "Có Giấy phép kinh doanh và đúng nội dung tự biên soạn",
        "option_b": "Có Giấy xác nhận nội dung quảng cáo và đúng nội dung đã được xác nhận",
        "option_c": "Có Chứng chỉ hành nghề và đúng nội dung từ nước ngoài",
        "option_d": "Có Giấy chứng nhận GMP và đúng nội dung từ nhà sản xuất",
        "answer": "B"
    },
    {
        "id": 453,
        "question": "Một trong những điều kiện bắt buộc khi quảng cáo thuốc là:",
        "option_a": "Phải có Giấy xác nhận nội dung quảng cáo do Hiệp hội Dược cấp",
        "option_b": "Phải có Giấy xác nhận nội dung quảng cáo do Sở Y tế cấp",
        "option_c": "Phải có Giấy xác nhận nội dung quảng cáo do Cục Quản lý Dược cấp",
        "option_d": "Phải có Giấy xác nhận nội dung quảng cáo do Bộ Công Thương cấp",
        "answer": "C"
    },
    {
        "id": 454,
        "question": "Theo quy định, cơ quan có thẩm quyền cấp giấy xác nhận nội dung quảng cáo thuốc:",
        "option_a": "Cục Quản lý Dược",
        "option_b": "Bộ Thông tin và Truyền thông",
        "option_c": "Sở Y tế",
        "option_d": "Hội đồng Đạo đức trong nghiên cứu y sinh học",
        "answer": "A"
    },
    {
        "id": 455,
        "question": "Không được phép quảng cáo thuốc với nội dung sau:",
        "option_a": "Tên thuốc, hoạt chất, chỉ định chính",
        "option_b": "Số đăng ký lưu hành và nhà sản xuất",
        "option_c": "Hình ảnh, thư tín của thầy thuốc khuyên dùng thuốc",
        "option_d": "Chống chỉ định và khuyến cáo đọc kỹ hướng dẫn",
        "answer": "C"
    },
    {
        "id": 456,
        "question": "Thuốc sau đây không được quảng cáo đến người tiêu dùng:",
        "option_a": "Thuốc không kê đơn (OTC)",
        "option_b": "Thuốc kê đơn (ETC)",
        "option_c": "Thực phẩm chức năng",
        "option_d": "Mỹ phẩm có thành phần dược liệu",
        "answer": "B"
    },
    {
        "id": 457,
        "question": "Thông tin thuốc của cơ sở kinh doanh được thực hiện bởi:",
        "option_a": "Nhân viên kinh doanh không cần trình độ chuyên môn",
        "option_b": "Người phụ trách chuyên môn về dược hoặc nhân viên được ủy quyền, có trình độ chuyên môn phù hợp",
        "option_c": "Cộng tác viên sinh viên các trường đại học",
        "option_d": "Người nhà của chủ cơ sở kinh doanh dược",
        "answer": "B"
    },
    {
        "id": 458,
        "question": "Trong quảng cáo thuốc, bắt buộc phải có nội dung nào sau đây?",
        "option_a": "Tên thuốc, giá bán, khuyến mại, số điện thoại đặt hàng",
        "option_b": "Tên thuốc, so sánh với đối thủ, cam kết hiệu quả 100%",
        "option_c": "Tên thuốc, công dụng, chống chỉ định, khuyến cáo “Đọc kỹ hướng dẫn sử dụng trước khi dùng”",
        "option_d": "Tên thuốc, hình ảnh người bệnh khỏi bệnh, lời chứng thực",
        "answer": "C"
    },
    {
        "id": 459,
        "question": "Hành vi bị nghiêm cấm:",
        "option_a": "Quảng cáo thuốc OTC trên truyền hình; Giới thiệu thuốc cho bác sĩ; Bán thuốc theo đơn điện tử; Đăng ký hành nghề đúng nơi",
        "option_b": "Cung cấp thông tin thuốc cho cán bộ y tế; Tư vấn sử dụng thuốc tại nhà thuốc; Báo cáo phản ứng có hại; Duy trì điều kiện kinh doanh",
        "option_c": "Thông tin quảng cáo thuốc sai sự thật; Lợi dụng việc kê đơn để trục lợi; Bán lẻ thuốc kê đơn mà không có đơn thuốc; Cho thuê, cho mượn chứng chỉ hành nghề Dược",
        "option_d": "Thông tin quảng cáo thuốc đúng sự thật; Kê đơn thuốc hợp lý; Bán lẻ thuốc kê đơn có đơn thuốc; Sử dụng chứng chỉ hành nghề đúng phạm vi",
        "answer": "C"
    },
    {
        "id": 460,
        "question": "Người đứng đầu cơ sở kinh doanh dược phải cấp loại giấy tờ gì cho người giới thiệu thuốc đủ điều kiện?",
        "option_a": "Giấy chứng nhận hoàn thành khóa đào tạo",
        "option_b": "Hợp đồng lao động có công chứng",
        "option_c": "Thẻ “Người giới thiệu thuốc” theo mẫu quy định",
        "option_d": "Giấy ủy quyền có xác nhận của Sở Y tế",
        "answer": "C"
    },
    {
        "id": 461,
        "question": "Theo quy định, quảng cáo thuốc phải khuyến cáo gì?",
        "option_a": "Đọc kỹ hướng dẫn sử dụng trước khi dùng",
        "option_b": "Tham khảo ý kiến người thân trước khi dùng",
        "option_c": "Mua ngay để nhận ưu đãi giảm giá",
        "option_d": "Sử dụng lâu dài để đạt hiệu quả tốt nhất",
        "answer": "A"
    },
    {
        "id": 462,
        "question": "Nội dung quảng cáo thuốc phải đảm bảo nguyên tắc nào sau đây?",
        "option_a": "Hấp dẫn, sáng tạo, cảm xúc, ấn tượng",
        "option_b": "Trung thực, chính xác, rõ ràng, khoa học",
        "option_c": "Mạnh mẽ, khẳng định, chắc chắn, tuyệt đối",
        "option_d": "Ngắn gọn, hài hước, dễ nhớ, gần gũi",
        "answer": "B"
    },
    {
        "id": 463,
        "question": "Khi quảng cáo thuốc, bắt buộc phải có nội dung nào?",
        "option_a": "Tên thuốc, giá bán, địa chỉ nhà thuốc, số điện thoại",
        "option_b": "Tên thuốc, hình ảnh bác sĩ, lời khuyên dùng thuốc",
        "option_c": "Tên thuốc, hoạt chất, chỉ định chính, khuyến cáo đọc kỹ hướng dẫn sử dụng",
        "option_d": "Tên thuốc, so sánh hiệu quả, cam kết khỏi bệnh",
        "answer": "C"
    },
    {
        "id": 464,
        "question": "Quảng cáo thuốc không được phép:",
        "option_a": "Ghi số đăng ký lưu hành và nhà sản xuất",
        "option_b": "Ghi tên thuốc, chỉ định, chống chỉ định",
        "option_c": "Ghi khuyến cáo đọc kỹ hướng dẫn sử dụng",
        "option_d": "Có hình ảnh, giọng nói của cán bộ y tế giới thiệu thuốc",
        "answer": "D"
    },
    {
        "id": 465,
        "question": "Căn cứ để xây dựng nội dung thông tin thuốc bao gồm các quy định pháp luật nào:",
        "option_a": "Bộ Khoa học và Công nghệ",
        "option_b": "Bộ Y tế",
        "option_c": "Bộ Công Thương",
        "option_d": "Bộ Thông tin và Truyền thông",
        "answer": "B"
    },
    {
        "id": 466,
        "question": "Khái niệm thông tin thuốc được quy định ở đâu?",
        "option_a": "Điều 2, Nghị định 54/2017/NĐ-CP",
        "option_b": "Điều 2, Luật Dược 2016",
        "option_c": "Điều 2, Thông tư 07/VBHN-BYT",
        "option_d": "Điều 2, Nghị định 155/2018/NĐ-CP",
        "answer": "A"
    }
];
