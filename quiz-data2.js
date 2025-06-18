const quizData = [
    {
        "question": "Câu 1: Công thức tổng quát của ankan là",
        "option_a": "A. CnHn+2",
        "option_b": "B. CnH2n+2",
        "option_c": "C. CnH2n",
        "option_d": "D. CnH2n-2",
        "answer": "B"
    },
    {
        "question": "Câu 2: Số đồng phân cấu tạo ứng với công thức phân tử C5H12 là",
        "option_a": "A. 6",
        "option_b": "B. 4",
        "option_c": "C. 5",
        "option_d": "D. 3",
        "answer": "D"
    },
    {
        "question": "Câu 3: Số đồng phân cấu tạo ứng với công thức phân tử C6H14 là",
        "option_a": "A. 3",
        "option_b": "B. 4",
        "option_c": "C. 5",
        "option_d": "D. 6",
        "answer": "C"
    },
    {
        "question": "Câu 4: Hợp chất (CH3)2CHCH2CH2CH3 có tên gọi là",
        "option_a": "A. neopentan",
        "option_b": "B. 2-metylpentan",
        "option_c": "C. isopentan",
        "option_d": "D. 1,1- đimetylbutan.",
        "answer": "B"
    },
    {
        "question": "Câu 5: Ankan (CH3)2CHCH2C(CH3)3 có tên gọi là",
        "option_a": "A. 2,2,4-trimetylpentan",
        "option_b": "B. 2,2,4,4-tetrametybutan",
        "option_c": "C. 2,4,4-trimetylpentan",
        "option_d": "D. 2,4,4,4-tetrametylbutan",
        "answer": "A"
    },
    {
        "question": "Câu 6: Ankan X có công thức phân tử C5H12. Clo hóa X, thu được 4 sản phẩm dẫn xuất monoclo. Tên gọi của X là",
        "option_a": "A. 2,2-đimetylpropan",
        "option_b": "B. 2-metylbutan",
        "option_c": "C. pentan",
        "option_d": "D. 2- đimetylpropan",
        "answer": "B"
    },
    {
        "question": "Câu 7: Ankan X có công thức phân tử C6H14. Clo hóa X, thu được 4 sản phẩm dẫn xuất monoclo. Tên gọi của X là",
        "option_a": "A. 2,2-đimetylbutan",
        "option_b": "B. 3-metylpentan",
        "option_c": "C. hexan",
        "option_d": "D. 2,3-đimetylbutan",
        "answer": "B"
    },
    {
        "question": "Câu 8: Chất X có công thức CH3 – CH(CH3) – CH = CH2. Tên thay thế của X là",
        "option_a": "A. 2-metylbut-3-en",
        "option_b": "B. 3-metylbut-1-in.",
        "option_c": "C. 3-metylbut-1-en",
        "option_d": "D. 2-metylbut-3-in",
        "answer": "C"
    },
    {
        "question": "Câu 9: Chất nào sau đây có đồng phân hình học?",
        "option_a": "A. but-1-en",
        "option_b": "B. but-2-en.",
        "option_c": "C. 1,2-dicloetan",
        "option_d": "D. 2-clopropen",
        "answer": "B"
    },
    {
        "question": "Câu 10: Chất nào sau đây có đồng phân hình học?",
        "option_a": "A. CH2 = CH – CH2 – CH3",
        "option_b": "B. CH3 – CH – C(CH3)2.",
        "option_c": "C. CH3 – CH = CH – CH2 – CH3",
        "option_d": "D. (CH3)2 – CH – CH = CH2",
        "answer": "C"
    },
    {
        "question": "Câu 11: Ứng với công thức phân tử C4H8 có bao nhiêu đồng phân cấu tạo mạch hở?",
        "option_a": "A. 2",
        "option_b": "B. 4",
        "option_c": "C. 3",
        "option_d": "D. 5",
        "answer": "C"
    },
    {
        "question": "Câu 12: Ứng với công thức phân tử C4H10 có bao nhiêu đồng phân cấu tạo mạch hở?",
        "option_a": "A. 4",
        "option_b": "B. 5",
        "option_c": "C. 6",
        "option_d": "D. 3",
        "answer": "B"
    },
    {
        "question": "Câu 13: Số liên kết σ có trong một phân tử But-1-en là",
        "option_a": "A. 13",
        "option_b": "B. 10",
        "option_c": "C. 12",
        "option_d": "D. 11",
        "answer": "D"
    },
    {
        "question": "Câu 14: Hiđrocacbon nào sau đây khi phản ứng với dung dịch brom thu được 1,2- đibromtoluen?",
        "option_a": "A. But-1-en",
        "option_b": "B. butan",
        "option_c": "C. But-2-en",
        "option_d": "D. 2-metylpropen",
        "answer": "A"
    },
    {
        "question": "Câu 15: Anken X hợp nước tạo thành 3-etylpentan-3-ol. Tên của X là",
        "option_a": "A. 3-etylpent-2-en",
        "option_b": "B. 3-etylpent-3-en",
        "option_c": "C. 3-etylpent-2-en",
        "option_d": "D. 2-etylpent-2-en",
        "answer": "A"
    },
    {
        "question": "Câu 16: Chất X có công thức: CH3 – CH(CH3) – C≡CH. Tên thay thế của X là",
        "option_a": "A. 2-metylbut-2-en",
        "option_b": "B. 3-metylbut-1-in",
        "option_c": "C. 3-metylbut-1-en",
        "option_d": "D. 2-metylbut-3-in",
        "answer": "B"
    },
    {
        "question": "Câu 17: Số liên kết σ trong mỗi phân tử etilen; axetilen; buta-1,2- đien lần lượt là",
        "option_a": "A. 3; 5; 9",
        "option_b": "B. 5; 3; 9",
        "option_c": "C. 4; 2; 6",
        "option_d": "D. 4; 3; 6",
        "answer": "B"
    },
    {
        "question": "Câu 18: Chất nào sau đây tác dụng với dung dịch AgNO3 trong NH3 tạo kết tủa?",
        "option_a": "A. CH3 – CH = CH2",
        "option_b": "B. CH2 = CH – CH = CH2",
        "option_c": "C. CH3 – C≡C – CH3",
        "option_d": "D. CH3 – CH2 – C≡CH",
        "answer": "D"
    },
    {
        "question": "Câu 19: Có bao nhiêu đồng phân ankin C5H8 tác dụng với dung dịch AgNO3 trong NH3 ?",
        "option_a": "A. 3",
        "option_b": "B. 2",
        "option_c": "C. 4",
        "option_d": "D. 1",
        "answer": "B"
    },
    {
        "question": "Câu 20: Để tách riêng rẽ etilen và axetilen, các hoá chất cần sử dụng là:",
        "option_a": "A. nước vôi trong và dd HCl",
        "option_b": "B. AgNO3 trong NH3 và dd KOH",
        "option_c": "C. dd Br2 và dd KOH",
        "option_d": "D. AgNO3 trong NH3 và dd HCl",
        "answer": "D"
    },
    {
        "question": "Câu 21: Số liên kết σ trong 1 phân tử buta-1,2- đien là",
        "option_a": "A. 8",
        "option_b": "B. 7",
        "option_c": "C. 6",
        "option_d": "D. 9",
        "answer": "D"
    },
    {
        "question": "Câu 22: Chất nào sau đây có đồng phân hình học?",
        "option_a": "A. CH2 = CH – CH2 – CH3",
        "option_b": "B. CH3 – CH – C(CH3)2",
        "option_c": "C. CH3 – CH = CH – CH = CH2",
        "option_d": "D. CH2 = CH – CH = CH2",
        "answer": "C"
    },
    {
        "question": "Câu 23: Cho but-1,3-đien phản ứng cộng với Br2 theo tỷ lệ mol 1 : 1. Số dẫn xuất đibrom (đồng phân cấu tạo và đồng phân hình học) thu được là",
        "option_a": "A. 3",
        "option_b": "B. 1",
        "option_c": "C. 2",
        "option_d": "D. 4",
        "answer": "A"
    },
    {
        "question": "Câu 24: Cho isopren phản ứng cộng với Br2 theo tỷ lệ mol 1 : 1. Số sản phẩm tối đa thu được có công thức phân tử C5H8Br2 là",
        "option_a": "A. 5",
        "option_b": "B. 2",
        "option_c": "C. 3",
        "option_d": "D. 4",
        "answer": "D"
    },
    {
        "question": "Câu 25: Hiđro hóa hoàn toàn buta-1,3-đien, thu được",
        "option_a": "A. butan",
        "option_b": "B. isobutan",
        "option_c": "C. isopentan",
        "option_d": "D. pentan",
        "answer": "A"
    },
    {
        "question": "Câu 26: Hiđro hóa hoàn toàn isopren, thu được",
        "option_a": "A. pentan",
        "option_b": "B. isobutan",
        "option_c": "C. isopentan",
        "option_d": "D. neopentan",
        "answer": "C"
    },
    {
        "question": "Câu 27: Arene hay còn gọi là hydrocarbon thơm là những hydrocarbon trong phân tử có chứa một hay nhiều",
        "option_a": "A. vòng benzene.",
        "option_b": "B. liên kết đơn.",
        "option_c": "C. liên kết đôi.",
        "option_d": "D. liên kết ba.",
        "answer": "A"
    },
    {
        "question": "Câu 28: Các ankylbenzene hợp thành dãy đồng đẳng của benzene có công thức chung là",
        "option_a": "A. CnH2n-6 (n ≥ 2).",
        "option_b": "B. CnH2n+2 (n ≥ 6).",
        "option_c": "C. CnH2n-2 (n ≥ 2).",
        "option_d": "D. CnH2n-6 (n ≥ 6).",
        "answer": "D"
    },
    {
        "question": "Câu 29: Công thức phân tử nào sau đây có thể là công thức của hợp chất thuộc dãy đồng đẳng của benzene?",
        "option_a": "A. C8H16.",
        "option_b": "B. C8H14.",
        "option_c": "C. C8H12.",
        "option_d": "D. C8H10.",
        "answer": "D"
    },
    {
        "question": "Câu 30: Cho hai hydrocarbon thơm có cùng công thức phân tử C9H12: propylbenzene và isopropylbenzene. Hai hợp chất trên là",
        "option_a": "A. Đồng phân không gian.",
        "option_b": "B. Đồng phân vị trí nhóm thế trong vòng benzene.",
        "option_c": "C. Đồng phân mạch carbon.",
        "option_d": "D. Đồng phân vị trí liên kết đôi.",
        "answer": "C"
    },
    {
        "question": "Câu 31: Công thức của toluene (hay methylbenzene) là",
        "option_a": "A. C6H5-CH2CH2CH3",
        "option_b": "B. C6H5-CH3",
        "option_c": "C. C6H5-CH(CH3)2",
        "option_d": "D. C6H5-CH2CH3",
        "answer": "B"
    },
    {
        "question": "Câu 32: Công thức của cumene (isopropylbenzene) là",
        "option_a": "A. C6H5-CH2CH2CH3",
        "option_b": "B. C6H5-CH3",
        "option_c": "C. C6H5-CH(CH3)2",
        "option_d": "D. C6H5-CH2CH3",
        "answer": "C"
    },
    {
        "question": "Câu 33: Hydrocarbon X có công thức cấu tạo là 1,3-dimethylbenzene (m-xylene). Tên gọi là:",
        "option_a": "A. dimethylbenzene.",
        "option_b": "B. o-diethylbenzene.",
        "option_c": "C. m-dimethylbenzene.",
        "option_d": "D. m-diethylbenzene.",
        "answer": "C"
    },
    {
        "question": "Câu 34: Công thức cấu tạo thu gọn của toluene là",
        "option_a": "A. C6H5-CH3.",
        "option_b": "B. C6H5-CH2CH3.",
        "option_c": "C. C6H5-CH=CH2.",
        "option_d": "D. C6H5-CH(CH3)2.",
        "answer": "A"
    },
    {
        "question": "Câu 35: Hợp chất nào sau đây là m-xylene?",
        "option_a": "A. p-xylene (1,4-dimethylbenzene)",
        "option_b": "B. m-xylene (1,3-dimethylbenzene)",
        "option_c": "C. ethylbenzene",
        "option_d": "D. o-xylene (1,2-dimethylbenzene)",
        "answer": "B"
    },
    {
        "question": "Câu 36: Khi được chiếu sáng, benzene có thể phản ứng với Cl2 tạo thành sản phẩm nào?",
        "option_a": "A. C6H5Cl.",
        "option_b": "B. C6H11Cl.",
        "option_c": "C. C6H6Cl6.",
        "option_d": "D. C6H12Cl6.",
        "answer": "C"
    },
    {
        "question": "Câu 37: Số đồng phân hydrocarbon thơm ứng với công thức phân tử C8H10 là",
        "option_a": "A. 2.",
        "option_b": "B. 4.",
        "option_c": "C. 3.",
        "option_d": "D. 5.",
        "answer": "B"
    },
    {
        "question": "Câu 38: Gọi tên arene sau theo danh pháp thay thế? (1-ethyl-2-methylbenzene)",
        "option_a": "A. 1-methyl-2-ethylbenzene.",
        "option_b": "B. 1-ethyl-2-methylbenzene.",
        "option_c": "C. 2-methyl-1-ethylbenzene.",
        "option_d": "D. 1-ethyl-6-methylbenzene.",
        "answer": "B"
    },
    {
        "question": "Câu 39: Hợp chất nào dưới đây được dùng để tổng hợp ra PVC:",
        "option_a": "A. CH2=CHCH2Cl",
        "option_b": "B. CH2=CHBr",
        "option_c": "C. C6H5Cl",
        "option_d": "D. CH2=CHCl",
        "answer": "D"
    },
    {
        "question": "Câu 40: Đồng phân dẫn xuất hydrocarbon gồm",
        "option_a": "A. Đồng phân vị trí nhóm chức và đồng phân cấu tạo.",
        "option_b": "B. Đồng phân mạch cacbon và đồng phân vị trí nhóm chức.",
        "option_c": "C. Đồng phân hình học và đồng phân cấu tạo.",
        "option_d": "D. Đồng phân nhóm chức và đồng phân cấu tạo.",
        "answer": "B"
    },
    {
        "question": "Câu 41: Sản phẩm chính của phản ứng tách HBr của CH3CH(CH3)CHBrCH3 là :",
        "option_a": "A. 2-methylbut-2-en.",
        "option_b": "B. 3-methylbut-2-en.",
        "option_c": "C. 3-methyl-but-1-en.",
        "option_d": "D. 2-methylbut-1-en.",
        "answer": "A"
    },
    {
        "question": "Câu 42: Để phân biệt ethyl alcohol nguyên chất và ethyl alcohol có lẫn nước, người ta thường dùng thuốc thử là chất nào sau đây ?",
        "option_a": "A. CuSO4 khan.",
        "option_b": "B. Na kim loại.",
        "option_c": "C. benzene.",
        "option_d": "D. CuO.",
        "answer": "A"
    },
    {
        "question": "Câu 43: Tên thay thế của C2H5OH là",
        "option_a": "A. ethyl alcohol",
        "option_b": "B. methyl alcohol",
        "option_c": "C. ethanol",
        "option_d": "D. methanol.",
        "answer": "C"
    },
    {
        "question": "Câu 44: Phenol không phản ứng với chất nào sau đây?",
        "option_a": "A. Na.",
        "option_b": "B. NaOH.",
        "option_c": "C. NaHCO3.",
        "option_d": "D. Br2.",
        "answer": "C"
    },
    {
        "question": "Câu 45: Chất nào là dẫn xuất halogen của hydrocarbon?",
        "option_a": "A. Cl – CH2 – COOH",
        "option_b": "B. C6H5 – CH2 – Cl",
        "option_c": "C. CH3 – CH2 – Mg – Br",
        "option_d": "D. CH3 – CO – Cl",
        "answer": "B"
    },
    {
        "question": "Câu 46: Công thức tổng quát của ancol không no có một nối đôi, đơn chức là:",
        "option_a": "A. CnH2n+2O",
        "option_b": "B. CnH2nO",
        "option_c": "C. CnH2n-2O",
        "option_d": "D. CnH2n+2O2.",
        "answer": "B"
    },
    {
        "question": "Câu 47: Cả phenol và ethyl alcohol đều phản ứng được với",
        "option_a": "A. Na",
        "option_b": "B. NaOH",
        "option_c": "C. Br2",
        "option_d": "D. NaHCO3.",
        "answer": "A"
    },
    {
        "question": "Câu 48: Tên gọi của hợp chất sau là: H₂C=CH–CH₂–CH(CH₃)–CH(OH)–C₂H₅",
        "option_a": "A. 3-methyl-hept-6-en-3-ol.",
        "option_b": "B. 4-methyl-hept-1-en-5-ol.",
        "option_c": "C. 3-methyl-hept-4-en-3-ol.",
        "option_d": "D. 4-methyl-hept-6-en-3-ol.",
        "answer": "D"
    },
    {
        "question": "Câu 49: Sản phẩm chính tạo thành khi cho 2-brombutan tác dụng với dung dịch KOH/ancol, đun nóng là :",
        "option_a": "A. Metylxiclopropan.",
        "option_b": "B. But-2-ol.",
        "option_c": "C. But-1-en.",
        "option_d": "D. But-2-en.",
        "answer": "D"
    },
    {
        "question": "Câu 50: Khi đun nóng ethylic alcohol với H2SO4 đặc ở 140°C thì sẽ tạo ra",
        "option_a": "A. C2H4.",
        "option_b": "B. CH3CHO.",
        "option_c": "C. C2H5OC2H5.",
        "option_d": "D. CH3COOH.",
        "answer": "C"
    },
    {
        "question": "Câu 51: Danh pháp IUPAC của dẫn xuất halogen có công thức cấu tạo: ClCH2CH(CH3)CHClCH3 là",
        "option_a": "A. 1,3-điclo-2-methylbutan.",
        "option_b": "B. 2,4-điclo-3-methylbutan.",
        "option_c": "C. 1,3-điclopentan.",
        "option_d": "D. 2,4-điclo-2-methylbutan.",
        "answer": "A"
    },
    {
        "question": "Câu 52: Nhỏ từ từ từng giọt brom vào ống nghiệm chứa dung dịch phenol hiện tượng quan sát được là:",
        "option_a": "A. nước brom bị mất màu.",
        "option_b": "B. xuất hiện kết tủa trắng.",
        "option_c": "C. xuất hiện kết tủa trắng sau tan dần.",
        "option_d": "D. xuất hiện kết tủa trắng và nước brom bị mất màu.",
        "answer": "D"
    },
    {
        "question": "Câu 53: Số đồng phân cấu tạo của C4H10O là",
        "option_a": "A. 3",
        "option_b": "B. 4",
        "option_c": "C. 6",
        "option_d": "D. 7.",
        "answer": "D"
    },
    {
        "question": "Câu 54: Công thức tổng quát của ancol no 2 chức là:",
        "option_a": "A. CnH2n+2O2",
        "option_b": "B. CnH2nO2",
        "option_c": "C. CnH2n-2O2",
        "option_d": "D. CnH2n+2O",
        "answer": "A"
    },
    {
        "question": "Câu 55: Chất nào sau đây là dẫn xuất halogen của hydrocarbon ?",
        "option_a": "A. Cl-CH2-COOH.",
        "option_b": "B. C6H5-CH2-Cl.",
        "option_c": "C. CH3-CH2-Mg-Br.",
        "option_d": "D. CH3–CO–Cl.",
        "answer": "B"
    },
    {
        "question": "Câu 57: Dẫn xuất halogen không có đồng phân cis-trans là:",
        "option_a": "A. CHCl=CHCl.",
        "option_b": "B. CH2=CH-CH2F.",
        "option_c": "C. CH3CH=CBrCH3.",
        "option_d": "D. Not available.",
        "answer": "B"
    },
    {
        "question": "Câu 58: Oxi hóa ancol nào sau đây không tạo anđehit ?",
        "option_a": "A. CH3OH.",
        "option_b": "B. (CH3)2CHCH2OH.",
        "option_c": "C. C2H5CH2OH",
        "option_d": "D. CH3CH(OH)CH3.",
        "answer": "D"
    },
    {
        "question": "Câu 59: Hiđrat hóa 2 anken chỉ tạo thành 2 ancol. Hai anken đó là",
        "option_a": "A. 2-metylpropen và but-1-en.",
        "option_b": "B. propen và but-2-en.",
        "option_c": "C. eten và but-2-en",
        "option_d": "D. eten và but-1-en.",
        "answer": "C"
    },
    {
        "question": "Câu 60: Hai ancol nào sau đây cùng bậc ?",
        "option_a": "A. propan-2-ol và 1-phenyletan-1-ol",
        "option_b": "B. propan-1-ol và phenyletan-1-ol",
        "option_c": "C. etanol và propan-2-ol",
        "option_d": "D. propan-2-ol và 2-metylpropan-2-ol.",
        "answer": "A"
    },
    {
        "question": "Câu 61: Trong các loại ancol no, đơn chức có số nguyên tử cacbon lớn hơn 1 sau đây, ancol nào khi tách nước (xt H2SO4 đặc, 170°C) luôn thu được 1 anken duy nhất",
        "option_a": "A. ancol bậc III.",
        "option_b": "B. ancol bậc I",
        "option_c": "C. ancol bậc II.",
        "option_d": "D. ancol bậc I và bậc III",
        "answer": "B"
    },
    {
        "question": "Câu 62: Ancol nào sau đây phản ứng với CuO không tạo thành anđehit ?",
        "option_a": "A. metanol.",
        "option_b": "B. etanol",
        "option_c": "C. 2-metylpropanol-1.",
        "option_d": "D. propanol-2.",
        "answer": "D"
    },
    {
        "question": "Câu 63: Các đồng phân anđehit của C5H10O là",
        "option_a": "A. 2.",
        "option_b": "B. 3.",
        "option_c": "C. 4.",
        "option_d": "D. 5.",
        "answer": "C"
    },
    {
        "question": "Câu 64: Cho các nhận định sau: (a) Anđehit là hợp chất chỉ có tính khử. (b) Anđehit cộng hiđro thành ancol bậc một. (c) Anđehit tác dụng với AgNO3/NH3 tạo thành Ag. (d) Anđehit no, đơn chức, mạch hở có công thức tổng quát CnH2nO. Số nhận định đúng là",
        "option_a": "A. 1.",
        "option_b": "B. 2.",
        "option_c": "C. 3.",
        "option_d": "D. 4.",
        "answer": "C"
    },
    {
        "question": "Câu 65: Anđehit axetic không tác dụng được với",
        "option_a": "A. Na.",
        "option_b": "B. H2.",
        "option_c": "C. O2.",
        "option_d": "D. dung dịch AgNO3/NH3 .",
        "answer": "A"
    }
]