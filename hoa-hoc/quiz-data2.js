const quizData = [
    {
        "question": "Công thức tổng quát của ankan là",
        "option_a": "CnHn+2",
        "option_b": "CnH2n+2",
        "option_c": "CnH2n",
        "option_d": "CnH2n-2",
        "answer": "B"
    },
    {
        "question": "Số đồng phân cấu tạo ứng với công thức phân tử C5H12 là",
        "option_a": "6",
        "option_b": "4",
        "option_c": "5",
        "option_d": "3",
        "answer": "D"
    },
    {
        "question": "Số đồng phân cấu tạo ứng với công thức phân tử C6H14 là",
        "option_a": "3",
        "option_b": "4",
        "option_c": "5",
        "option_d": "6",
        "answer": "C"
    },
    {
        "question": "Hợp chất (CH3)2CHCH2CH2CH3 có tên gọi là",
        "option_a": "neopentan",
        "option_b": "2-metylpentan",
        "option_c": "isopentan",
        "option_d": "1,1-đimetylbutan",
        "answer": "B"
    },
    {
        "question": "Ankan (CH3)2CHCH2C(CH3)3 có tên gọi là",
        "option_a": "2,2,4-trimetylpentan",
        "option_b": "2,2,4,4-tetrametylbutan",
        "option_c": "2,4,4-trimetylpentan",
        "option_d": "2,4,4,4-tetrametylbutan",
        "answer": "A"
    },
    {
        "question": "Ankan X có công thức phân tử C5H12. Clo hóa X, thu được 4 sản phẩm dẫn xuất monoclo. Tên gọi của X là",
        "option_a": "2,2-đimetylpropan",
        "option_b": "2-metylbutan",
        "option_c": "pentan",
        "option_d": "2-đimetylpropan",
        "answer": "B"
    },
    {
        "question": "Ankan X có công thức phân tử C6H14. Clo hóa X, thu được 4 sản phẩm dẫn xuất monoclo. Tên gọi của X là",
        "option_a": "2,2-đimetylbutan",
        "option_b": "3-metylpentan",
        "option_c": "hexan",
        "option_d": "2,3-đimetylbutan",
        "answer": "B"
    },
    {
        "question": "Chất X có công thức CH3-CH(CH3)-CH=CH2. Tên thay thế của X là",
        "option_a": "2-metylbut-3-en",
        "option_b": "3-metylbut-1-in",
        "option_c": "3-metylbut-1-en",
        "option_d": "2-metylbut-3-in",
        "answer": "C"
    },
    {
        "question": "Chất nào sau đây có đồng phân hình học?",
        "option_a": "but-1-en",
        "option_b": "but-2-en",
        "option_c": "1,2-dicloetan",
        "option_d": "2-clopropen",
        "answer": "B"
    },
    {
        "question": "Chất nào sau đây có đồng phân hình học?",
        "option_a": "CH2=CH-CH2-CH3",
        "option_b": "CH3-CH-C(CH3)2",
        "option_c": "CH3-CH=CH-CH2-CH3",
        "option_d": "(CH3)2-CH-CH=CH2",
        "answer": "C"
    },
    {
        "question": "Ứng với công thức phân tử C4H8 có bao nhiêu đồng phân cấu tạo mạch hở?",
        "option_a": "2",
        "option_b": "4",
        "option_c": "3",
        "option_d": "5",
        "answer": "C"
    },
    {
        "question": "Ứng với công thức phân tử C4H10 có bao nhiêu đồng phân cấu tạo mạch hở?",
        "option_a": "4",
        "option_b": "5",
        "option_c": "6",
        "option_d": "3",
        "answer": "A"
    },
    {
        "question": "Số liên kết σ có trong một phân tử But-1-en là",
        "option_a": "13",
        "option_b": "10",
        "option_c": "12",
        "option_d": "11",
        "answer": "D"
    },
    {
        "question": "Hiđrocacbon nào sau đây khi phản ứng với dung dịch brom thu được 1,2-đibromtoluen?",
        "option_a": "But-1-en",
        "option_b": "butan",
        "option_c": "But-2-en",
        "option_d": "2-metylpropen",
        "answer": "C"
    },
    {
        "question": "Anken X hợp nước tạo thành 3-etylpentan-3-ol. Tên của X là",
        "option_a": "3-etylpent-2-en",
        "option_b": "3-etylpent-3-en",
        "option_c": "3-etylpent-2-en",
        "option_d": "2-etylpent-2-en",
        "answer": "B"
    },
    {
        "question": "Chất X có công thức: CH3-CH(CH3)-CCH. Tên thay thế của X là",
        "option_a": "2-metylbut-2-en",
        "option_b": "3-metylbut-1-in",
        "option_c": "3-metylbut-1-en",
        "option_d": "2-metylbut-3-in",
        "answer": "B"
    },
    {
        "question": "Số liên kết σ trong mỗi phân tử etilen; axetilen; buta-1,2-đien lần lượt là",
        "option_a": "3; 5; 9",
        "option_b": "5; 3; 9",
        "option_c": "4; 2; 6",
        "option_d": "4; 3; 6",
        "answer": "B"
    },
    {
        "question": "Chất nào sau đây tác dụng với dung dịch AgNO3 trong NH3 tạo kết tủa?",
        "option_a": "CH3-CH=CH2",
        "option_b": "CH2-CH-CH=CH2",
        "option_c": "CH3-C≡C-CH3",
        "option_d": "CH3-CH2-C≡CH",
        "answer": "D"
    },
    {
        "question": "Có bao nhiêu đồng phân ankin C5H8 tác dụng với dung dịch AgNO3 trong NH3?",
        "option_a": "3",
        "option_b": "2",
        "option_c": "4",
        "option_d": "1",
        "answer": "B"
    },
    {
        "question": "Để tách riêng rẽ etilen và axetilen, các hoá chất cần sử dụng là:",
        "option_a": "nước vôi trong và dd HCl",
        "option_b": "AgNO3 trong NH3 và dd KOH",
        "option_c": "dd Br2 và dd KOH",
        "option_d": "AgNO3 trong NH3 và dd HCl",
        "answer": "D"
    },
    {
        "question": "Số liên kết σ trong 1 phân tử buta-1,2-đien là",
        "option_a": "8",
        "option_b": "7",
        "option_c": "6",
        "option_d": "9",
        "answer": "D"
    },
    {
        "question": "Chất nào sau đây có đồng phân hình học?",
        "option_a": "CH2=CH-CH2-CH3",
        "option_b": "CH3-CH-C(CH3)2",
        "option_c": "CH3-CH=CH-CH=CH2",
        "option_d": "CH2=CH-CH=CH2",
        "answer": "C"
    },
    {
        "question": "Cho but-1,3-đien phản ứng cộng với Br2 theo tỷ lệ mol 1:1. Số dẫn xuất đibrom (đồng phân cấu tạo và đồng phân hình học) thu được là",
        "option_a": "3",
        "option_b": "1",
        "option_c": "2",
        "option_d": "4",
        "answer": "C"
    },
    {
        "question": "Cho isopren phản ứng cộng với Br2 theo tỷ lệ mol 1:1. Số sản phẩm tối đa thu được có công thức phân tử C5H8Br2 là",
        "option_a": "5",
        "option_b": "2",
        "option_c": "3",
        "option_d": "4",
        "answer": "D"
    },
    {
        "question": "Hiđro hóa hoàn toàn buta-1,3-đien, thu được",
        "option_a": "butan",
        "option_b": "isobutan",
        "option_c": "isopentan",
        "option_d": "pentan",
        "answer": "A"
    },
    {
        "question": "Hiđro hóa hoàn toàn isopren, thu được",
        "option_a": "pentan",
        "option_b": "isobutan",
        "option_c": "isopentan",
        "option_d": "neopentan",
        "answer": "C"
    },
    {
        "question": "Arene hay còn gọi là hydrocarbon thơm là những hydrocarbon trong phân tử có chứa một hay nhiều",
        "option_a": "vòng benzene",
        "option_b": "liên kết đơn",
        "option_c": "liên kết đôi",
        "option_d": "liên kết ba",
        "answer": "A"
    },
    {
        "question": "Các ankylbenzene hợp thành dãy đồng đẳng của benzene có công thức chung là",
        "option_a": "CnH2n-6 (n ≥ 2)",
        "option_b": "CnH2n+2 (n ≥ 6)",
        "option_c": "CnH2n-2 (n ≥ 2)",
        "option_d": "CnH2n-6 (n ≥ 6)",
        "answer": "D"
    },
    {
        "question": "Công thức phân tử nào sau đây có thể là công thức của hợp chất thuộc dãy đồng đẳng của benzene?",
        "option_a": "C8H16",
        "option_b": "C8H14",
        "option_c": "C8H12",
        "option_d": "C8H10",
        "answer": "D"
    },
    {
        "question": "Hai hợp chất trên là",
        "option_a": "Đồng phân không gian",
        "option_b": "Đồng phân vị trí nhóm thế trong vòng benzene",
        "option_c": "Đồng phân mạch carbon",
        "option_d": "Đồng phân vị trí liên kết đôi",
        "answer": "B"
    },
    {
        "question": "Công thức của toluene (hay methylbenzene) là",
        "option_a": "C6H5-CH2CH2CH3",
        "option_b": "C6H5-CH3",
        "option_c": "C6H5-CH(CH3)2",
        "option_d": "C6H5-CH2CH3",
        "answer": "B"
    },
    {
        "question": "Công thức của cumene (isopropylbenzene) là",
        "option_a": "C6H5-CH2CH2CH3",
        "option_b": "C6H5-CH3",
        "option_c": "C6H5-CH(CH3)2",
        "option_d": "C6H5-CH2CH3",
        "answer": "C"
    },
    {
        "question": "Hydrocarbon X có công thức cấu tạo như sau:",
        "option_a": "dimethylbenzene",
        "option_b": "o-diethylbenzene",
        "option_c": "m-dimethylbenzene",
        "option_d": "m-diethylbenzene",
        "answer": "C"
    },
    {
        "question": "Công thức cấu tạo thu gọn của toluene là",
        "option_a": "C6H5-CH3",
        "option_b": "C6H5-CH2CH3",
        "option_c": "C6H5-CH=CH2",
        "option_d": "C6H5-CH(CH3)2",
        "answer": "A"
    },
    {
        "question": "Hợp chất nào sau đây là m-xylene?",
        "option_a": "",
        "option_b": "",
        "option_c": "",
        "option_d": "",
        "answer": "B"
    },
    {
        "question": "Khi được chiếu sáng, benzene có thể phản ứng với Cl2 tạo thành sản phẩm nào?",
        "option_a": "C6H5Cl",
        "option_b": "C6H11Cl",
        "option_c": "C6H6Cl6",
        "option_d": "C6H12Cl6",
        "answer": "A"
    },
    {
        "question": "Số đồng phân hydrocarbon thơm ứng với công thức phân tử C8H10 là",
        "option_a": "2",
        "option_b": "4",
        "option_c": "3",
        "option_d": "5",
        "answer": "B"
    },
    {
        "question": "Gọi tên arene sau theo danh pháp thay thế",
        "option_a": "1-methyl-2-ethylbenzene",
        "option_b": "1-ethyl-2-methylbenzene",
        "option_c": "2-methyl-1-ethylbenzene",
        "option_d": "1-ethyl-6-methylbenzene",
        "answer": "B"
    },
    {
        "question": "Hợp chất nào dưới đây được dùng để tổng hợp ra PVC:",
        "option_a": "CH2=CHCH2Cl",
        "option_b": "CH2=CHBr",
        "option_c": "C6H5Cl",
        "option_d": "CH2=CHCl",
        "answer": "D"
    },
    {
        "question": "Đồng phân dẫn xuất hydrocarbon gồm",
        "option_a": "Đồng phân vị trí nhóm chức và đồng phân cấu tạo",
        "option_b": "Đồng phân mạch cacbon và đồng phân vị trí nhóm chức",
        "option_c": "Đồng phân hình học và đồng phân cấu tạo",
        "option_d": "Đồng phân nhóm chức và đồng phân cấu tạo",
        "answer": "B"
    },
    {
        "question": "Sản phẩm chính của phản ứng tách HBr của CH3CH(CH3)CHBrCH3 là:",
        "option_a": "2-methylbut-2-en",
        "option_b": "3-methylbut-2-en",
        "option_c": "3-methyl-but-1-en",
        "option_d": "2-methylbut-1-en",
        "answer": "A"
    },
    {
        "question": "Để phân biệt ethyl alcohol nguyên chất và ethyl alcohol có lẫn nước, người ta thường dùng thuốc thử là chất nào sau đây?",
        "option_a": "CuSO4 khan",
        "option_b": "Na kim loại",
        "option_c": "benzene",
        "option_d": "CuO",
        "answer": "A"
    },
    {
        "question": "Tên thay thế của C2H5OH là",
        "option_a": "ethyl alcohol",
        "option_b": "methyl alcohol",
        "option_c": "ethanol",
        "option_d": "methanol",
        "answer": "C"
    },
    {
        "question": "Phenol không phản ứng với chất nào sau đây?",
        "option_a": "Na",
        "option_b": "NaOH",
        "option_c": "NaHCO3",
        "option_d": "Br2",
        "answer": "C"
    },
    {
        "question": "Chất nào là dẫn xuất halogen của hydrocarbon?",
        "option_a": "Cl-CH2-COOH",
        "option_b": "C6H5-CH2-Cl",
        "option_c": "CH3-CH2-Mg-Br",
        "option_d": "CH3-CO-Cl",
        "answer": "B"
    },
    {
        "question": "Công thức tổng quát của ancol không no có một nối đôi, đơn chức là:",
        "option_a": "CnH2n+2O",
        "option_b": "CnH2nO",
        "option_c": "CnH2n-2O",
        "option_d": "CnH2n+2O2",
        "answer": "B"
    },
    {
        "question": "Cả phenol và ethyl alcohol đều phản ứng được với",
        "option_a": "Na",
        "option_b": "NaOH",
        "option_c": "Br2",
        "option_d": "NaHCO3",
        "answer": "A"
    },
    {
        "question": "Tên gọi của hợp chất sau là:",
        "option_a": "3-methyl-hept-6-en-3-ol",
        "option_b": "4-methyl-hept-1-en-5-ol",
        "option_c": "3-methyl-hept-4-en-3-ol",
        "option_d": "4-methyl-hept-6-en-3-ol",
        "answer": "C"
    },
    {
        "question": "Sản phẩm chính tạo thành khi cho 2-brombutan tác dụng với dung dịch KOH/ancol, đun nóng là:",
        "option_a": "Metylxiclopropan",
        "option_b": "But-2-ol",
        "option_c": "But-1-en",
        "option_d": "But-2-en",
        "answer": "D"
    },
    {
        "question": "Khi đun nóng ethylic alcohol với H2SO4 đặc ở 140°C thì sẽ tạo ra",
        "option_a": "C2H4",
        "option_b": "CH3CHO",
        "option_c": "C2H5OC2H5",
        "option_d": "CH3COOH",
        "answer": "C"
    },
    {
        "question": "Danh pháp IUPAC của dẫn xuất halogen có công thức cấu tạo: ClCH2CH(CH3)CHClCH3 là",
        "option_a": "1,3-diclo-2-methylbutan",
        "option_b": "2,4-điclo-3-methylbutan",
        "option_c": "1,3-điclopentan",
        "option_d": "2,4-điclo-2-methylbutan",
        "answer": "A"
    },
    {
        "question": "Nhỏ từ từ từng giọt brom vào ống nghiệm chứa dung dịch phenol hiện tượng quan sát được là:",
        "option_a": "nước brom bị mất màu",
        "option_b": "xuất hiện kết tủa trắng",
        "option_c": "xuất hiện kết tủa trắng sau tan dần",
        "option_d": "xuất hiện kết tủa trắng và nước brom bị mất màu",
        "answer": "D"
    },
    {
        "question": "Số đồng phân cấu tạo của C4H10O là",
        "option_a": "3",
        "option_b": "4",
        "option_c": "6",
        "option_d": "7",
        "answer": "D"
    },
    {
        "question": "Công thức tổng quát của ancol no 2 chức là:",
        "option_a": "CnH2n+2O2",
        "option_b": "CnH2nO2",
        "option_c": "CnH2n-2O2",
        "option_d": "CnH2n+2O",
        "answer": "A"
    },
    {
        "question": "Chất nào sau đây là dẫn xuất halogen của hydrocarbon?",
        "option_a": "Cl-CH2-COOH",
        "option_b": "C6H5-CH2-Cl",
        "option_c": "CH3-CH2-Mg-Br",
        "option_d": "CH3-CO-Cl",
        "answer": "B"
    },
    {
        "question": "Dẫn xuất halogen không có đồng phân cis-trans là:",
        "option_a": "CHCl=CHCl",
        "option_b": "CH2=CH-CH2F",
        "option_c": "CH3CH=CBrCH3",
        "answer": "B"
    },
    {
        "question": "Oxi hóa ancol nào sau đây không tạo anđehit?",
        "option_a": "CH3OH",
        "option_b": "(CH3)2CHCH2OH",
        "option_c": "C2H5CH2OH",
        "option_d": "CH3CH(OH)CH3",
        "answer": "D"
    },
    {
        "question": "Hiđrat hóa 2 anken chỉ tạo thành 2 ancol. Hai anken đó là",
        "option_a": "2-metylpropen và but-1-en",
        "option_b": "propen và but-2-en",
        "option_c": "eten và but-2-en",
        "option_d": "eten và but-1-en",
        "answer": "B"
    },
    {
        "question": "Hai ancol nào sau đây cùng bậc?",
        "option_a": "propan-2-ol và 1-phenyletan-1-ol",
        "option_b": "propan-1-ol và phenyletan-1-ol",
        "option_c": "ethanol và propan-2-ol",
        "option_d": "propan-2-ol và 2-metylpropan-2-ol",
        "answer": "D"
    },
    {
        "question": "Trong các loại ancol no, đơn chức có số nguyên tố cacbon lớn hơn 1 sau đây, ancol nào khi tách nước (xt H2SO4 đặc, 170°C) luôn thu được 1 ankan duy nhất",
        "option_a": "ancol bậc III",
        "option_b": "ancol bậc I",
        "option_c": "ancol bậc II",
        "option_d": "ancol bậc I và bậc III",
        "answer": "A"
    },
    {
        "question": "Ancol nào sau đây phản ứng với CuO không tạo thành anđehit?",
        "option_a": "metanol",
        "option_b": "ethanol",
        "option_c": "2-metylpropanol-1",
        "option_d": "propanol-2",
        "answer": "D"
    },
    {
        "question": "Các đồng phân anđehit của C5H10O là",
        "option_a": "2",
        "option_b": "3",
        "option_c": "4",
        "option_d": "5",
        "answer": "C"
    },
    {
        "question": `Cho các nhận định sau:
                    (a) Anđehit là hợp chất chỉ có tính khử.
                    (b) Anđehit cộng hiđro thành ancol bậc một.
                    (c) Anđehit tác dụng với AgNO3/NH3 tạo thành Ag.
                    (d) Anđehit no, đơn chức, mạch hở có công thức tổng quát CnH2nO.
                    Số nhận định đúng là`,
        "option_a": "1",
        "option_b": "2",
        "option_c": "3",
        "option_d": "4",
        "answer": "C"
    },
    {
        "question": "Anđehit axetic không tác dụng được với",
        "option_a": "Na",
        "option_b": "H2",
        "option_c": "O2",
        "option_d": "dung dịch AgNO3/NH3",
        "answer": "A"
    },
    {
        "question": "Phản ứng nào sau đây không tạo anđehit axetic?",
        "option_a": "Cho axetilen phản ứng với nước",
        "option_b": "Oxi hóa không hoàn toàn etilen",
        "option_c": "Oxi hóa không hoàn toàn ancol",
        "option_d": "[Lựa chọn D]",
        "answer": "C"
    }
]