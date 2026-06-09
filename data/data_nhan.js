const data_nhan = [
    // ── JEWELRY: Nhẫn ──
    {
        id: 2001, code: 'JRP001', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'nhan' }, isNew: false, inStock: true,
        name: { vi: 'Nhẫn ngọc trai vàng', en: 'Nhẫn ngọc trai vàng' },
        image: './Img/rings/01.Nhẫn ngọc trai vàng/mục 1.png',
        image1: './Img/rings/01.Nhẫn ngọc trai vàng/mục 1 (2).png',
        image2: './Img/rings/01.Nhẫn ngọc trai vàng/mục 1 (3).png',
        description: { vi: 'Nhẫn ngọc trai vàng nổi bật với viên ngọc trai tự nhiên kích thước 9–12mm, thiết kế sang trọng và tinh tế. Chế tác theo yêu cầu trên chất liệu vàng hoặc bạc, tôn lên vẻ đẹp thanh lịch và quý phái cho người đeo.', en: 'Nhẫn ngọc trai vàng nổi bật với viên ngọc trai tự nhiên kích thước 9–12mm, thiết kế sang trọng và tinh tế. Chế tác theo yêu cầu trên chất liệu vàng hoặc bạc, tôn lên vẻ đẹp thanh lịch và quý phái cho người đeo.' }
    },
    {
        id: 2002, code: 'JRP002', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'nhan' }, isNew: false, inStock: true,
        name: { vi: 'Nhẫn Queen ngọc trai vàng', en: 'Nhẫn Queen ngọc trai vàng' },
        image: './Img/rings/02.Nhẫn Queen ngọc trai/mục 2.png',
        image1: './Img/rings/02.Nhẫn Queen ngọc trai/mục 2 (2).png',
        description: { vi: 'Mẫu nhẫn Queen đẳng cấp với ngọc trai vàng kích thước 10-15 li. Thiết kế tôn vinh vẻ đẹp quý phái, thích hợp cho những ai yêu thích trang sức nổi bật.', en: 'Mẫu nhẫn Queen đẳng cấp với ngọc trai vàng kích thước 10-15 li. Thiết kế tôn vinh vẻ đẹp quý phái, thích hợp cho những ai yêu thích trang sức nổi bật.' }
    },
    {
        id: 2003, code: 'JRP003', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'nhan' }, isNew: false, inStock: true,
        name: { vi: 'Nhẫn ngọc trai trắng', en: 'Nhẫn ngọc trai trắng' },
        image: './Img/rings/03.Nhẫn ngọc trai trắng/mục 3.png',
        image1: './Img/rings/03.Nhẫn ngọc trai trắng/mục 3 (2).png',
        description: { vi: 'Sở hữu viên ngọc trai trắng từ 10-15 li với độ bóng đẹp tự nhiên. Kiểu dáng thanh lịch, dễ dàng kết hợp cùng nhiều phong cách thời trang.', en: 'Sở hữu viên ngọc trai trắng từ 10-15 li với độ bóng đẹp tự nhiên. Kiểu dáng thanh lịch, dễ dàng kết hợp cùng nhiều phong cách thời trang.' }
    },
    {
        id: 2004, code: 'JRP004', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'nhan' }, isNew: false, inStock: true,
        name: { vi: 'Nhẫn ngọc trai trắng', en: 'Nhẫn ngọc trai trắng' },
        image: './Img/rings/04.Nhẫn ngọc trai trắng/mục 4.png',
        image1: './Img/rings/04.Nhẫn ngọc trai trắng/mục 4 (2).png',
        description: { vi: 'Thiết kế nổi bật với ngọc trai trắng cỡ lớn 10-15 li. Chế tác thủ công theo yêu cầu, mang đến vẻ đẹp sang trọng và cuốn hút.', en: 'Thiết kế nổi bật với ngọc trai trắng cỡ lớn 10-15 li. Chế tác thủ công theo yêu cầu, mang đến vẻ đẹp sang trọng và cuốn hút.' }
    },
    {
        id: 2005, code: 'JRS001', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'nhan' }, isNew: false, inStock: true,
        name: { vi: 'Nhẫn thạch anh tím', en: 'Nhẫn thạch anh tím' },
        image: './Img/rings/05.Nhẫn thạch anh tím/mục 5 (4).png',
        image1: './Img/rings/05.Nhẫn thạch anh tím/mục 5 (3).png',
        image2: './Img/rings/05.Nhẫn thạch anh tím/mục 5 (2).png',
        description: { vi: 'Viên thạch anh tím mang sắc tím huyền bí, được chế tác tinh xảo trên nền vàng hoặc bạc. Phù hợp cho người yêu thích vẻ đẹp nhẹ nhàng và thanh lịch.', en: 'Viên thạch anh tím mang sắc tím huyền bí, được chế tác tinh xảo trên nền vàng hoặc bạc. Phù hợp cho người yêu thích vẻ đẹp nhẹ nhàng và thanh lịch.' }
    },
    {
        id: 2006, code: 'JRS002', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'nhan' }, isNew: false, inStock: true,
        name: { vi: 'Nhẫn đá Nam Phi các màu', en: 'Nhẫn đá Nam Phi các màu' },
        image: './Img/rings/06.Nhẫn đá Nam Phi các màu/mục 6.png',
        image1: './Img/rings/06.Nhẫn đá Nam Phi các màu/mục 6 (2).png',
        description: { vi: 'Kết hợp đá Nam Phi nhiều màu sắc rực rỡ, tạo nên điểm nhấn độc đáo cho người đeo. Chế tác theo yêu cầu, phù hợp nhiều phong cách khác nhau.', en: 'Kết hợp đá Nam Phi nhiều màu sắc rực rỡ, tạo nên điểm nhấn độc đáo cho người đeo. Chế tác theo yêu cầu, phù hợp nhiều phong cách khác nhau.' }
    },
    {
        id: 2007, code: 'JRP005', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'nhan' }, isNew: false, inStock: true,
        name: { vi: 'Nhẫn ngọc trai trắng', en: 'Nhẫn ngọc trai trắng' },
        image: './Img/rings/07.Nhẫn ngọc trai trắng 10-12 li/mục 7 (3).png',
        image1: './Img/rings/07.Nhẫn ngọc trai trắng 10-12 li/mục 7 (2).png',
        image2: './Img/rings/07.Nhẫn ngọc trai trắng 10-12 li/mục 7 (1).png',
        description: { vi: 'Ngọc trai trắng kích thước 10-12 li với độ bóng đẹp tự nhiên. Thiết kế tinh tế giúp tôn lên nét thanh lịch và nữ tính.', en: 'Ngọc trai trắng kích thước 10-12 li với độ bóng đẹp tự nhiên. Thiết kế tinh tế giúp tôn lên nét thanh lịch và nữ tính.' }
    },
    {
        id: 2008, code: 'JRP006', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'nhan' }, isNew: false, inStock: true,
        name: { vi: 'Nhẫn ngọc trai trắng', en: 'Nhẫn ngọc trai trắng' },
        image: './Img/rings/08.Nhẫn ngọc trai trắng 10-15li/mục 8.png',
        image1: './Img/rings/08.Nhẫn ngọc trai trắng 10-15li/mục 8 (2).png',
        description: { vi: 'Mẫu nhẫn nổi bật với viên ngọc trai trắng 10-15 li sang trọng. Phù hợp làm quà tặng hoặc trang sức cho những dịp đặc biệt.', en: 'Mẫu nhẫn nổi bật với viên ngọc trai trắng 10-15 li sang trọng. Phù hợp làm quà tặng hoặc trang sức cho những dịp đặc biệt.' }
    },
    {
        id: 2009, code: 'JRP007', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'nhan' }, isNew: false, inStock: true,
        name: { vi: 'Nhẫn ngọc trai trắng', en: 'Nhẫn ngọc trai trắng' },
        image: './Img/rings/09.Nhẫn ngọc trai trắng 10–12 li(phối đá CZ xanh- ngọc lục bảo xanh)/z7886923472979_31dfe54d602cc72b73e2c243f602c79c.jpg',
        image1: './Img/rings/09.Nhẫn ngọc trai trắng 10–12 li(phối đá CZ xanh- ngọc lục bảo xanh)/z7886923072109_f1d7d49c27ad9a6eed92261a609bc0ac.jpg',
        description: { vi: 'Sự kết hợp hài hòa giữa ngọc trai trắng và đá xanh CZ hoặc ngọc lục bảo xanh. Thiết kế mang vẻ đẹp sang trọng, tinh tế và đầy cuốn hút.', en: 'Sự kết hợp hài hòa giữa ngọc trai trắng và đá xanh CZ hoặc ngọc lục bảo xanh. Thiết kế mang vẻ đẹp sang trọng, tinh tế và đầy cuốn hút.' }
    },
    {
        id: 2010, code: 'JRP008', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'nhan' }, isNew: false, inStock: true,
        name: { vi: 'Nhẫn ngọc trai trắng', en: 'Nhẫn ngọc trai trắng' },
        image: './Img/rings/10.Nhẫn ngọc trai trắng 10 - 12li (phối đá CZ trắng- kim cương lab)/mục 10.png',
        image1: './Img/rings/10.Nhẫn ngọc trai trắng 10 - 12li (phối đá CZ trắng- kim cương lab)/mục 10 (2).png',
        description: { vi: 'Ngọc trai trắng kết hợp đá CZ trắng hoặc kim cương lab lấp lánh, tạo nên tổng thể thanh lịch và hiện đại. Phù hợp cho mọi độ tuổi.', en: 'Ngọc trai trắng kết hợp đá CZ trắng hoặc kim cương lab lấp lánh, tạo nên tổng thể thanh lịch và hiện đại. Phù hợp cho mọi độ tuổi.' }
    },
    {
        id: 2011, code: 'JRP009', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'nhan' }, isNew: false, inStock: true,
        name: { vi: 'Nhẫn ngọc trai trắng', en: 'Nhẫn ngọc trai trắng' },
        image: './Img/rings/11.Nhẫn ngọc trai trắng 10 - 12li (phối đá CZ trắng- kim cương lab)/mục 11.png',
        image1: './Img/rings/11.Nhẫn ngọc trai trắng 10 - 12li (phối đá CZ trắng- kim cương lab)/mục 11 (3).png',
        image2: './Img/rings/11.Nhẫn ngọc trai trắng 10 - 12li (phối đá CZ trắng- kim cương lab)/mục 11 (2).png',
        description: { vi: 'Thiết kế nổi bật với ngọc trai trắng cùng điểm nhấn đá CZ trắng hoặc kim cương lab. Mang đến vẻ đẹp sang trọng cho người đeo.', en: 'Thiết kế nổi bật với ngọc trai trắng cùng điểm nhấn đá CZ trắng hoặc kim cương lab. Mang đến vẻ đẹp sang trọng cho người đeo.' }
    },
    {
        id: 2012, code: 'JRS003', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'nhan' }, isNew: false, inStock: true,
        name: { vi: 'Nhẫn Ruby', en: 'Nhẫn Ruby' },
        image: './Img/rings/12.Nhẫn Ruby (phối đá CZ trắng-kim cương lab)/mục 12.png',
        image1: './Img/rings/12.Nhẫn Ruby (phối đá CZ trắng-kim cương lab)/mục 12 (3).png',
        image2: './Img/rings/12.Nhẫn Ruby (phối đá CZ trắng-kim cương lab)/mục 12 (2).png',
        description: { vi: 'Viên Ruby đỏ rực tượng trưng cho sự may mắn và quyền lực. Thiết kế tinh xảo giúp tôn lên vẻ đẹp nổi bật và đẳng cấp.', en: 'Viên Ruby đỏ rực tượng trưng cho sự may mắn và quyền lực. Thiết kế tinh xảo giúp tôn lên vẻ đẹp nổi bật và đẳng cấp.' }
    },
    {
        id: 2013, code: 'JRS004', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'nhan' }, isNew: false, inStock: true,
        name: { vi: 'Nhẫn đá Nam Phi các màu', en: 'Nhẫn đá Nam Phi các màu' },
        image: './Img/rings/13.Nhẫn đá Nam Phi các màu/mục 13.png',
        image1: './Img/rings/13.Nhẫn đá Nam Phi các màu/mục 13 (2).png',
        description: { vi: 'Mẫu nhẫn sử dụng đá Nam Phi đa sắc màu, tạo điểm nhấn trẻ trung và cá tính. Chế tác theo yêu cầu trên chất liệu vàng hoặc bạc.', en: 'Mẫu nhẫn sử dụng đá Nam Phi đa sắc màu, tạo điểm nhấn trẻ trung và cá tính. Chế tác theo yêu cầu trên chất liệu vàng hoặc bạc.' }
    },
    {
        id: 2014, code: 'JRP010', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'nhan' }, isNew: false, inStock: true,
        name: { vi: 'Nhẫn ngọc trai trắng', en: 'Nhẫn ngọc trai trắng' },
        image: './Img/rings/14.Nhẫn ngọc trai trắng 8-10 li/mục 14.png',
        image1: './Img/rings/14.Nhẫn ngọc trai trắng 8-10 li/mục 14 (2).png',
        description: { vi: 'Thiết kế nhẹ nhàng với ngọc trai trắng kích thước 8-10 ly kết hợp đá CZ trắng hoặc kim cương lab. Phù hợp cho người yêu thích vẻ đẹp thanh lịch và tinh tế.', en: 'Thiết kế nhẹ nhàng với ngọc trai trắng kích thước 8-10 ly kết hợp đá CZ trắng hoặc kim cương lab. Phù hợp cho người yêu thích vẻ đẹp thanh lịch và tinh tế.' }
    },
    {
        id: 2015, code: 'JRP011', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'nhan' }, isNew: false, inStock: true,
        name: { vi: 'Nhẫn ngọc trai vàng', en: 'Nhẫn ngọc trai vàng' },
        image: './Img/rings/15.Nhẫn ngọc trai vàng 9-12 li/mục 15.png',
        image1: './Img/rings/15.Nhẫn ngọc trai vàng 9-12 li/mục 15 (3).png',
        image2: './Img/rings/15.Nhẫn ngọc trai vàng 9-12 li/mục 15 (2).png',
        description: { vi: 'Nhẫn ngọc trai vàng nổi bật với viên ngọc trai tự nhiên kích thước 9–12mm, thiết kế sang trọng và tinh tế. Chế tác theo yêu cầu trên chất liệu vàng hoặc bạc, tôn lên vẻ đẹp thanh lịch và quý phái cho người đeo.', en: 'Nhẫn ngọc trai vàng nổi bật với viên ngọc trai tự nhiên kích thước 9–12mm, thiết kế sang trọng và tinh tế. Chế tác theo yêu cầu trên chất liệu vàng hoặc bạc, tôn lên vẻ đẹp thanh lịch và quý phái cho người đeo.' }
    },
    {
        id: 2016, code: 'JRS005', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'nhan' }, isNew: false, inStock: true,
        name: { vi: 'Nhẫn đá đỏ trái tim', en: 'Red stone heart ring' },
        image: './Img/rings/JRS005/JRS005_03.png',
        image1: './Img/rings/JRS005/JRS005_02.png',
        image2: './Img/rings/JRS005/JRS005_01.png',
        description: { vi: '- Chất liệu: Bạc xi bach kim\n  Câu chuyện sản phẩm:  Thiết kế mặt đá đỏ hình trái tim nổi bật, mang vẻ đẹp ngọt ngào và tinh tế. Chế tác trên nền bạc xi bạch kim, phù hợp làm trang sức hằng ngày hoặc quà tặng ý nghĩa.', en: '- Material: Platinum-plated silver\n Product story: Featuring a striking heart-shaped red stone design, exuding a sweet and delicate beauty. Crafted on a platinum-plated silver base, suitable as everyday jewelry or a meaningful gift.' }
    },
    {
        id: 2017, code: 'JRS006', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'nhan' }, isNew: false, inStock: true,
        name: { vi: 'Nhẫn đá đỏ oval ', en: 'Oval red stone ring' },
        image: './Img/rings/JRS006/JRS006_01.png',
        image1: './Img/rings/JRS006/JRS006_02.png',
        image2: './Img/rings/JRS006/JRS006_03.png',
        image3: './Img/rings/JRS006/JRS006_04.png',
        description: { vi: '- Phối: Đá CZ\n - Chất liệu: Bạc xi bach kim\n  Câu chuyện sản phẩm:  Nhẫn đính đá đỏ dáng oval kết hợp đá CZ lấp lánh, tạo điểm nhấn sang trọng và cuốn hút. Chất liệu bạc xi bạch kim bền đẹp, phù hợp nhiều phong cách.', en: '- Combination: CZ stones\n - Material: Platinum-plated silver\n  Product story: This oval-shaped ring features a red gemstone and sparkling CZ stones, creating a luxurious and captivating focal point. The durable platinum-plated silver material suits many styles.' }
    },
    {
        id: 2018, code: 'JRS007', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'nhan' }, isNew: false, inStock: true,
        name: { vi: 'Nhẫn Ruby đỏ ', en: 'Red Ruby Ring' },
        image: './Img/rings/JRS007/JRS007_01.png',
        image1: './Img/rings/JRS007/JRS007_02.png',
        image2: './Img/rings/JRS007/JRS007_03.png',
        description: { vi: '- Chất liệu: Vàng\n  Câu chuyện sản phẩm:  Nhẫn Ruby đỏ nổi bật với sắc đỏ quyến rũ, chế tác bằng vàng, tôn lên vẻ đẹp sang trọng và đẳng cấp.', en: '- Material: Gold\n  Product Story: This striking red ruby ​​ring, crafted from gold, exudes elegance and sophistication.' }
    },
    {
        id: 2019, code: 'JRS008', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'nhan' }, isNew: false, inStock: true,
        name: { vi: 'Nhẫn Ruby đỏ ', en: 'Red Ruby Ring' },
        image: './Img/Nhan/JRS008/JRS008_01.png',
        image1: './Img/Nhan/JRS008/JRS008_02.png',
        image2: './Img/Nhan/JRS008/JRS008_03.png',
        description: { vi: '- Chất liệu: Vàng\n  Câu chuyện sản phẩm:  Thiết kế Ruby đỏ tinh tế trên nền vàng, mang vẻ đẹp thanh lịch và quý phái cho người đeo.', en: '- Material: Gold\n  Product Story: The exquisite design of the red ruby ​​on a gold background brings an elegant and sophisticated look to the wearer.' }
    },
    {
        id: 2020, code: 'JRS009', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'nhan' }, isNew: false, inStock: true,
        name: { vi: 'Nhẫn kim cương Lab/đá Nam Phi trắng', en: 'White Lab-Grown Diamond Ring' },
        image: './Img/Nhan/JRS009/JRS009_01.png',
        image1: './Img/Nhan/JRS009/JRS009_02.png',
        image2: './Img/Nhan/JRS009/JRS009_03.png',
        image3: './Img/Nhan/JRS009/JRS009_04.png',
        description: { vi: '- Chất liệu: Vàng\n  Câu chuyện sản phẩm: Mẫu nhẫn đính kim cương Lab hoặc đá Nam Phi trắng lấp lánh, chế tác bằng vàng, phù hợp cho nhiều dịp đặc biệt.', en: '- Material: Gold\n  Product Story: This ring, set with a Lab-grown diamond or a sparkling white South African gemstone, is crafted in gold and is suitable for many special occasions.' }
    },
    {
        id: 2021, code: 'JRS010', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'nhan' }, isNew: false, inStock: true,
        name: { vi: 'Nhẫn Moissanite xanh lá', en: 'Green Moissanite Ring' },
        image: './Img/Nhan/JRS0010/JRS0010_01.png',
        image1: './Img/Nhan/JRS0010/JRS0010_02.png',
        image2: './Img/Nhan/JRS0010/JRS0010_03.png',
        description: { vi: '- Chất liệu: Bạc xi bạch kim\n  Câu chuyện sản phẩm:  Đá Moissanite xanh lá nổi bật với độ sáng cao và màu sắc độc đáo, kết hợp cùng bạc xi bạch kim tạo nên vẻ đẹp hiện đại và tinh tế.', en: '- Material: Platinum-plated silver\n  Product Story: The striking green Moissanite, with its high luminosity and unique color, combined with platinum-plated silver, creates a modern and sophisticated look.' }
    },

];
