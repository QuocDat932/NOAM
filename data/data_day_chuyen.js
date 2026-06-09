const data_day_chuyen = [
    // ── JEWELRY: Dây Chuyền Nữ ──
    {
        id: 4001, code: 'JNG001', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'day-chuyen' }, isNew: false, inStock: true,
        name: { vi: 'Dây chuyền cỏ 4 lá may mắn', en: 'Four-leaf clover necklace luck' },
        image: './Img/Day-chuyen-nu/JNG001/JNG001_01.png',
        image2: './Img/Day-chuyen-nu/JNG001/JNG001_02.png', description: {
            vi: 'Mặt dây chuyền cỏ 4 lá kết hợp vỏ trai màu xám đen độc đáo, tượng trưng cho may mắn và hạnh phúc. Chất liệu bạc xi bạch kim mang đến vẻ đẹp tinh tế và hiện đại.',
            en: 'Four-leaf clover necklace with unique grey-black shell, symbolizing luck and happiness. Platinum plated silver material brings refined and modern beauty.'
        }
    },
    {
        id: 4002, code: 'JNP001', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'day-chuyen' }, isNew: false, inStock: true,
        name: { vi: 'Dây chuyền ngọc trai vàng', en: 'Gold pearl necklace' },
        image: './Img/Day-chuyen-nu/JNP001/JNP001_01.png',
        image1: './Img/Day-chuyen-nu/JNP001/JNP001_03.png',
        image2: './Img/Day-chuyen-nu/JNP001/JNP001_02.png',
        description: {
            vi: 'Nổi bật với viên ngọc trai vàng chủ 9–12 li có ánh sắc sang trọng tự nhiên. Chế tác từ vàng hoặc bạc theo yêu cầu, tạo nên vẻ đẹp quý phái và thanh lịch cho người đeo.',
            en: 'Features a main 9–12mm gold pearl with natural luxurious luster. Crafted from gold or silver upon request, creating a noble and elegant beauty for the wearer.'
        }
    },
    {
        id: 4003, code: 'JNP002', catalogId: 'jewelry',
        tags: { line: 'ngoc-trai', type: 'day-chuyen' }, isNew: false, inStock: true,
        name: { vi: 'Dây chuyền ngọc trai 3 màu', en: 'Three-Color Pearl Necklace' },
        image: './Img/Day-chuyen-nu/JNP002/JNP002_01.png',
        image1: './Img/Day-chuyen-nu/JNP002/JNP002_02.png',
        description: {
            vi: '- Viên chủ: 9-10 li\n- Chất liệu: Vàng/bạc\n- Lưu ý: Màu sắc có thể thay đổi tùy theo ngọc trai tự nhiên từng đợt\nCâu chuyện sản phẩm: Sự kết hợp hài hòa giữa ngọc trai trắng, vàng mỡ gà và xám vàng với kích thước viên chủ 9–10 li. Chế tác từ vàng hoặc bạc theo yêu cầu, mang đến vẻ đẹp độc đáo và nổi bật. Màu sắc có thể thay đổi đôi chút tùy theo màu ngọc trai tự nhiên của từng đợt.',
            en: '- Center pearl: 9-10mm\n- Material: Gold/silver\n- Note: Colors may vary slightly due to natural pearl characteristics\nAI product description: A harmonious combination of white, cream-yellow, and grey-yellow pearls with a center pearl size of 9–10mm. Crafted from gold or silver upon request, bringing a unique and outstanding beauty. Colors may vary slightly depending on the natural pearls of each batch.'
        }
    },
    {
        id: 4004, code: 'JNS002', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'day-chuyen' }, isNew: false, inStock: true,
        name: { vi: 'Dây chuyền đá Moissanite', en: 'Moissanite Pendant Necklace' },
        image: './Img/Day-chuyen-nu/JNS002/JNS002_01.png',
        image1: './Img/Day-chuyen-nu/JNS002/JNS002_02.png',
        description: {
            vi: '- Đá: Đá Moissanite\n- Chất liệu: Bạc xi bạch kim\nCâu chuyện sản phẩm: Nổi bật với đá Moissanite có độ lấp lánh vượt trội, thiết kế thanh lịch trên nền bạc xi bạch kim, phù hợp cho mọi phong cách.',
            en: '- Stones: Moissanite\n- Material: Platinum-plated silver\nAI product description: Featuring Moissanite with exceptional brilliance, this elegant design in platinum-plated silver is suitable for all styles.'
        }
    },
    {
        id: 4005, code: 'JNS003', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'day-chuyen' }, isNew: false, inStock: true,
        name: { vi: 'Dây chuyền bạc xi bạch kim Moissanite Topaz', en: 'Moissanite & Blue Topaz Necklace' },
        image: './Img/Day-chuyen-nu/JNS003/JNS003_01.png',
        image1: './Img/Day-chuyen-nu/JNS003/JNS003_02.png',
        image2: './Img/Day-chuyen-nu/JNS003/JNS003_03.png',
        description: {
            vi: '- Đá: Đính các viên Moissanite và mặt đá Topaz xanh\n- Chất liệu: Bạc xi bạch kim\nCâu chuyện sản phẩm: Sự kết hợp hài hòa giữa các viên Moissanite lấp lánh và mặt đá Topaz xanh nổi bật, mang đến vẻ đẹp sang trọng và cuốn hút.',
            en: '- Stones: Moissanite and blue Topaz\n- Material: Platinum-plated silver\nAI product description: A harmonious combination of sparkling Moissanite stones and a prominent blue Topaz center, bringing a luxurious and captivating beauty.'
        }
    },
    {
        id: 4006, code: 'JNS004', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'day-chuyen' }, isNew: false, inStock: true,
        name: { vi: 'Dây chuyền Hoa đá Topaz xanh', en: 'Floral Blue Topaz Necklace' },
        image: './Img/Day-chuyen-nu/JNS004/JNS004_01.png',
        image1: './Img/Day-chuyen-nu/JNS004/JNS004_02.png',
        image2: './Img/Day-chuyen-nu/JNS004/JNS004_03.png',
        image3: './Img/Day-chuyen-nu/JNS004/JNS004_04.png',
        description: {
            vi: '- Đá: Mặt đá Topaz xanh\n- Chất liệu: Bạc xi bạch kim\n- Tính năng: Đeo được 2 kiểu (Kiểu 1: Đeo làm dây chuyền; Kiểu 2: Tháo mặt hình cành hoa để làm cài áo)\nCâu chuyện sản phẩm: Thiết kế tinh xảo với mặt hoa đính đá Topaz xanh, có thể đeo như dây chuyền hoặc tháo rời làm cài áo, tiện dụng và đầy phong cách.',
            en: '- Stones: Blue Topaz\n- Material: Platinum-plated silver\n- Versatility: Dual-wear style (Style 1: Wear as a necklace; Style 2: Detach the floral pendant to use as a brooch)\nAI product description: Exquisitely designed floral pendant with blue Topaz, which can be worn as a necklace or detached to serve as a brooch, versatile and full of style.'
        }
    },
];
