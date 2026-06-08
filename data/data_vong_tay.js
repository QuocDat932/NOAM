const data_vong_tay = [
    // ── JEWELRY: Vòng Tay ──
    {
        id: 90, code: 'JW-VT-001', catalogId: 'jewelry',
        tags: { line: 'ngoc-trai', type: 'vong-tay' }, isNew: false, inStock: true,
        name: { vi: 'Vòng Tay Ngọc Trai Nuôi', en: 'Cultured Pearl Bangle' },
        image: './Img/Vong-tay/vong-tay-ngoc-trai-nuoi.jpg',
        description: { vi: 'Vòng tay ngọc trai nuôi cấy cao cấp, độ bóng hoàn hảo.', en: 'Premium cultured pearl bangle, perfect luster.' }
    },
    {
        id: 91, code: 'JW-VT-002', catalogId: 'jewelry',
        tags: { line: 'ngoc-trai', type: 'vong-tay' }, isNew: false, inStock: true,
        name: { vi: 'Vòng Tay Ngọc Trai Topaz', en: 'Pearl & Topaz Bangle' },
        image: './Img/Vong-tay/vong-tay-ngoc-trai-topaz.jpg',
        description: { vi: 'Vòng tay kết hợp ngọc trai và đá Topaz xanh.', en: 'Bangle combining pearls and blue Topaz.' }
    },
    {
        id: 92, code: 'JW-VT-003', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'vong-tay' }, isNew: false, inStock: true,
        name: { vi: 'Vòng Tay Labradorite Moonstone', en: 'Labradorite Moonstone Bangle' },
        image: './Img/Vong-tay/vong-tay-quan-3-LABRADORITE-MOONSTONE.jpg',
        description: { vi: 'Vòng tay đá quý Labradorite và Moonstone thiên nhiên.', en: 'Natural Labradorite and Moonstone gemstone bangle.' }
    },
    {
        id: 93, code: 'JSB001', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'vong-tay' }, isNew: false, inStock: true,
        name: { vi: 'Vòng tay nơ', en: 'Bow bracelet' },
        image: './Img/Vong-tay/JSB001/JSB001_01.png',
        image1: './Img/Vong-tay/JSB001/JSB001_02.png',
        image2: './Img/Vong-tay/JSB001/JSB001_03.png',
        description: {
            vi: '- Phối: Đá CZ\n - Chất liệu: Bạc xi bạch kim\n  Câu chuyện sản phẩm:  Thiết kế nơ duyên dáng đính đá CZ lấp lánh, mang đến vẻ đẹp nữ tính và thanh lịch.',
            en: '- Accents: CZ stones\n - Material: Platinum-plated silver\n  Product story: The charming bow design adorned with sparkling CZ stones brings a feminine and elegant look.'
        }
    },
    {
        id: 94, code: 'JSB002', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'vong-tay' }, isNew: false, inStock: true,
        name: { vi: 'Vòng tay charm túi xách', en: 'Charm bracelets and handbags' },
        image: './Img/Vong-tay/JSB002/JSB002_01.png',
        image1: './Img/Vong-tay/JSB002/JSB002_02.png',
        description: {
            vi: '- Phối: Đá CZ\n - Chất liệu: Bạc xi bạch kim\n  Câu chuyện sản phẩm:  Điểm nhấn charm túi xách kết hợp đá CZ sáng bóng, tạo phong cách trẻ trung và hiện đại.',
            en: '- Accents: CZ stones\n - Material: Platinum-plated silver\n  Product story: The handbag\'s charm features sparkling CZ stones, creating a youthful and modern style.'
        }
    },
    {
        id: 95, code: 'JSB003', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'vong-tay' }, isNew: false, inStock: true,
        name: { vi: 'Vòng tay một hàng', en: 'Single row bracelet' },
        image: './Img/Vong-tay/JSB003/JSB003_01.png',
        image1: './Img/Vong-tay/JSB003/JSB003_02.png',
        description: {
            vi: '- Phối: Đá CZ\n - Chất liệu: Bạc xi bạch kim\n  Câu chuyện sản phẩm:  Thiết kế tối giản với một hàng đá CZ tinh tế, dễ dàng phối cùng nhiều trang phục.',
            en: '- Accents: CZ stones\n - Material: Platinum-plated silver\n  Product story: The minimalist design, featuring a delicate row of CZ stones, easily complements a variety of outfits.'
        }
    },
    {
        id: 96, code: 'JSB004', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'vong-tay' }, isNew: false, inStock: true,
        name: { vi: 'Vòng tay hai hàng', en: 'Double row bracelet' },
        image: './Img/Vong-tay/JSB004/JSB004_01.png',
        image1: './Img/Vong-tay/JSB004/JSB004_02.png',
        image2: './Img/Vong-tay/JSB004/JSB004_03.png',
        description: {
            vi: '- Phối: Đá CZ\n - Chất liệu: Bạc xi bạch kim\n Câu chuyện sản phẩm: Hai hàng đá CZ lấp lánh tạo hiệu ứng nổi bật, giúp tôn lên vẻ đẹp sang trọng và cuốn hút.',
            en: '- Accents: CZ\n - Material: Platinum-plated silver\n Product story: Two rows of sparkling CZ stones create a striking effect, enhancing a luxurious and captivating beauty.'
        }
    },
    {
        id: 97, code: 'JSB005', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'vong-tay' }, isNew: false, inStock: true,
        name: { vi: 'Vòng tay trái tim', en: 'Heart bracelet' },
        image: './Img/Vong-tay/JSB005/JSB005_01.png',
        image1: './Img/Vong-tay/JSB005/JSB005_02.png',

        description: {
            vi: '- Phối: Đá CZ\n - Chất liệu: Bạc xi bạch kim\n Câu chuyện sản phẩm: Biểu tượng trái tim đính đá CZ mang ý nghĩa yêu thương, là món phụ kiện ngọt ngào và thanh lịch.',
            en: '- Accents: CZ\n - Material: Platinum-plated silver\n Product story: The heart symbol adorned with CZ stones carries the meaning of love, making it a sweet and elegant accessory.'
        }
    },
    {
        id: 98, code: 'JSB006', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'vong-tay' }, isNew: false, inStock: true,
        name: { vi: 'Vòng tay đính đá CZ', en: 'CZ stone bracelet' },
        image: './Img/Vong-tay/JSB006/JSB006_01.png',
        image1: './Img/Vong-tay/JSB006/JSB006_02.png',
        description: {
            vi: '- Phối: Đá CZ\n - Chất liệu: Bạc xi bạch kim\n Câu chuyện sản phẩm: Vòng tay được chế tác tỉ mỉ với những viên đá CZ lấp lánh, mang đến vẻ đẹp tinh tế và sang trọng.',
            en: '- Accents: CZ\n - Material: Platinum-plated silver\n Product story:  The bracelet is intricately crafted with sparkling CZ stones, exuding a refined and luxurious beauty.'
        }
    },
];
