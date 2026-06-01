// ============================================================
// NOAM - Shine your Bright - Main Application
// Cấu trúc: CONFIG → I18N → CATALOG → PRODUCTS → STATE → FUNCTIONS → INIT
// Chỉ cần chỉnh sửa các section CONFIG/CATALOG/PRODUCTS để update nội dung
// ============================================================

// ===== CONFIG =====
const CONFIG = {
    zalo: '0988063617',
    phone: '0988063617',
    email: 'contactnoam.vn@gmail.com',
    facebook: 'https://www.facebook.com/lux.lady.68',
    instagram: 'https://www.instagram.com/contactnoam.vn/',
    defaultLang: 'vi',
    newArrivalsLimit: 4,
};

// ===== I18N (Translations) =====
const i18n = {
    vi: {
        nav: { brandStory: 'Câu chuyện thương hiệu', products: 'Sản phẩm', knowledge: 'Kiến thức', contact: 'Liên hệ' },
        hero: {
            subtitle: 'Bộ sưu tập 2025',
            title: 'Vẻ Đẹp Vĩnh Cửu<br>Của Thời Gian',
            cta: 'Xem Sản Phẩm',
        },
        about: {
            sectionLabel: 'Về chúng tôi',
            sectionTitle: 'NOAM',
            intro: 'NOAM là thương hiệu chuyên cung cấp trang sức cao cấp và phụ kiện thời trang được chế tác tinh xảo. Chúng tôi mang đến những sản phẩm chất lượng, kết hợp giữa nghệ thuật truyền thống và xu hướng hiện đại.',
            visionTitle: 'Tầm nhìn',
            visionText: 'Trở thành thương hiệu trang sức & phụ kiện được yêu thích hàng đầu, nơi mỗi sản phẩm đều mang một câu chuyện và giá trị riêng biệt.',
            services: [
                { icon: 'fa-gem', title: 'Trang sức cao cấp', desc: 'Chế tác thủ công từ ngọc trai, đá quý thiên nhiên và bạc 925.' },
                { icon: 'fa-bag-shopping', title: 'Phụ kiện thời trang', desc: 'Túi xách, ví và balo từ chất liệu thiên nhiên độc đáo.' },
                { icon: 'fa-hand-sparkles', title: 'Thiết kế riêng', desc: 'Nhận thiết kế theo yêu cầu, tạo nên sản phẩm độc bản cho bạn.' },
            ],
        },
        brandStory: {
            sectionLabel: 'Brand Story',
            sectionTitle: 'Câu Chuyện Thương Hiệu',
            nameOrigin: {
                title: 'NOAM',
                subtitle: 'Một cái tên trong tiếng Hebrew mang ý nghĩa tinh tế',
                meaning: 'Pleasant · Delight · Grace',
                desc: 'Sự dịu dàng, thanh nhã, duyên dáng - một năng lượng rất đẹp: dịu dàng, an yên, nhưng vẫn đầy chiều sâu.',
            },
            acronym: {
                title: 'N · O · A · M',
                items: [
                    { letter: 'N', word: 'Nature', desc: 'Thiên nhiên' },
                    { letter: 'O', word: 'Origin', desc: 'Nguyên bản' },
                    { letter: 'A', word: 'Art', desc: 'Nghệ thuật' },
                    { letter: 'M', word: 'Making', desc: 'Thủ công' },
                ],
            },
            story: {
                title: 'Câu Chuyện Của Chúng Tôi',
                paragraphs: [
                    'Trong thế giới của những sản phẩm thủ công, mỗi chất liệu đều mang trong mình một câu chuyện của thời gian.',
                    'NOAM Handmade được sinh ra từ niềm tin rằng: một món đồ không chỉ để sử dụng hay làm đẹp, mà còn là một tác phẩm nghệ thuật mang linh hồn của người chế tác.',
                    'Từ những viên đá quý, sợi cọ, tấm da hay chất liệu thô mộc, qua đôi tay của những người nghệ nhân, từng chi tiết được tạo nên bằng sự tỉ mỉ, kiên nhẫn và tình yêu dành cho nghề. Mỗi sản phẩm của NOAM - dù là trang sức hay túi xách - đều chứa đựng một hành trình sáng tạo riêng biệt.',
                    'Đó không chỉ là thiết kế, mà là sự giao thoa của ánh sáng, chất liệu, văn hóa và cảm xúc.',
                ],
            },
            values: [
                { icon: 'fa-leaf', title: 'Vẻ đẹp nguyên bản', desc: 'Tôn vinh vẻ đẹp tự nhiên của chất liệu' },
                { icon: 'fa-hands', title: 'Nghệ thuật thủ công', desc: 'Chế tác bởi nghệ nhân Việt Nam' },
                { icon: 'fa-fingerprint', title: 'Cá tính riêng', desc: 'Mỗi sản phẩm là một dấu ấn khác biệt' },
            ],
            belief: 'Giá trị đích thực của một sản phẩm không nằm ở sự phô bày, mà ở cảm xúc nó khơi gợi và dấu ấn mà nó để lại.',
            slogan: 'Shine your Bright',
            sloganDesc: 'Tỏa sáng theo cách rất riêng của bạn.',
        },
        badges: [
            { icon: 'fa-medal', text: 'Chất lượng Vàng' },
            { icon: 'fa-gem', text: 'Kim cương GIA' },
            { icon: 'fa-shield-alt', text: 'Bảo hành Trọn đời' },
            { icon: 'fa-shipping-fast', text: 'Giao hàng An toàn' },
        ],
        products: {
            sectionLabel: 'Bộ sưu tập',
            newArrivals: 'Sản Phẩm Mới Về',
            newArrivalsLabel: 'New Arrivals',
            viewAll: 'Xem tất cả sản phẩm mới',
            collapse: 'Thu gọn',
            viewDetail: 'Xem chi tiết',
            allFilter: 'Tất cả',
            sort: 'Sắp xếp',
            sortNameAZ: 'Tên: A-Z',
            sortNameZA: 'Tên: Z-A',
            searchPlaceholder: 'Tìm kiếm sản phẩm...',
            noResult: 'Không tìm thấy sản phẩm',
            contactZalo: 'Liên hệ qua Zalo',
            callHotline: 'Gọi Hotline',
            productCode: 'Mã SP',
            status: 'Tình trạng',
            inStock: 'Còn hàng',
            outOfStock: 'Tạm hết hàng',
            description: 'Mô tả chi tiết',
            related: 'Sản phẩm liên quan',
        },
        reviews: {
            sectionLabel: 'Reviews',
            sectionTitle: 'Khách Hàng Nói Gì',
            basedOn: 'Dựa trên 1,234 đánh giá',
            items: [
                { name: 'Nguyễn Thị Mai', text: '"Sản phẩm rất đẹp, chất lượng vàng tốt. Nhân viên tư vấn nhiệt tình. Sẽ quay lại ủng hộ!"' },
                { name: 'Trần Văn Hùng', text: '"Mua nhẫn cưới ở đây, thiết kế đẹp, giá hợp lý. Vợ rất thích!"' },
                { name: 'Lê Thị Hoa', text: '"Dây chuyền kim cương đẹp lắm, đúng như mô tả. Giao hàng nhanh!"' },
            ],
        },
        stats: [
            { target: 1234, text: 'Khách hàng hài lòng' },
            { target: 5000, text: 'Sản phẩm đã bán' },
            { target: 15, text: 'Năm kinh nghiệm' },
            { target: 98, text: '% Hài lòng' },
        ],
        footer: {
            tagline: 'Nơi tôn vinh vẻ đẹp sang trọng và đẳng cấp.',
            contactTitle: 'Liên Hệ',
            connectTitle: 'Kết Nối',
        },
        wishlist: {
            title: 'Sản phẩm yêu thích',
            empty: 'Chưa có sản phẩm yêu thích',
            remove: 'Xóa',
            added: 'Đã thêm vào danh sách yêu thích',
            removed: 'Đã xóa khỏi danh sách yêu thích',
        },
        knowledge: {
            sectionLabel: 'Knowledge',
            sectionTitle: 'Kiến Thức',
            comingSoon: 'Nội dung đang được cập nhật...',
            items: [
                { icon: 'fa-gem', title: 'Cách nhận biết đá quý thiên nhiên', desc: 'Hướng dẫn phân biệt đá quý thật và đá nhân tạo qua màu sắc, độ cứng và ánh sáng.' },
                { icon: 'fa-ring', title: 'Bảo quản trang sức đúng cách', desc: 'Mẹo giữ cho trang sức luôn sáng bóng và bền đẹp theo thời gian.' },
                { icon: 'fa-leaf', title: 'Chất liệu sợi cọ & sợi cỏ', desc: 'Tìm hiểu về nguồn gốc và đặc tính của các chất liệu tự nhiên trong túi xách NOAM.' },
            ],
        },
        share: { title: 'Chia sẻ sản phẩm', copied: 'Đã sao chép link!' },
        bottomNav: { home: 'Trang chủ', products: 'Sản phẩm', chat: 'Chat', contact: 'Liên hệ' },
    },
    en: {
        nav: { brandStory: 'Brand Story', products: 'Products', knowledge: 'Knowledge', contact: 'Contact' },
        hero: {
            subtitle: 'Collection 2025',
            title: 'Timeless Elegance<br>Beyond Beauty',
            cta: 'View Products',
        },
        about: {
            sectionLabel: 'About Us',
            sectionTitle: 'NOAM',
            intro: 'NOAM is a premium brand specializing in fine jewelry and fashion accessories, meticulously crafted. We bring quality products that blend traditional artistry with modern trends.',
            visionTitle: 'Vision',
            visionText: 'To become the most beloved jewelry & accessories brand, where every product carries its own story and unique value.',
            services: [
                { icon: 'fa-gem', title: 'Fine Jewelry', desc: 'Handcrafted from natural pearls, gemstones, and 925 silver.' },
                { icon: 'fa-bag-shopping', title: 'Fashion Accessories', desc: 'Handbags, wallets, and backpacks from unique natural materials.' },
                { icon: 'fa-hand-sparkles', title: 'Custom Design', desc: 'Bespoke designs to create one-of-a-kind products just for you.' },
            ],
        },
        brandStory: {
            sectionLabel: 'Brand Story',
            sectionTitle: 'Our Brand Story',
            nameOrigin: {
                title: 'NOAM',
                subtitle: 'A Hebrew name with a beautiful and delicate meaning',
                meaning: 'Pleasant · Delight · Grace',
                desc: 'Gentleness, elegance, charm - a beautiful energy: tender, serene, yet full of depth.',
            },
            acronym: {
                title: 'N · O · A · M',
                items: [
                    { letter: 'N', word: 'Nature', desc: 'Natural materials' },
                    { letter: 'O', word: 'Origin', desc: 'Authentic origin' },
                    { letter: 'A', word: 'Art', desc: 'Artistic craft' },
                    { letter: 'M', word: 'Making', desc: 'Handmade' },
                ],
            },
            story: {
                title: 'Our Story',
                paragraphs: [
                    'In the world of handmade products, every material carries within it a story of time.',
                    'NOAM Handmade was born from the belief that an item is not just for use or beauty, but is also a work of art carrying the soul of its maker.',
                    'From precious gemstones, palm fibers, leather to raw materials - through the hands of artisans, every detail is crafted with meticulous care, patience, and love for the craft. Each NOAM product - whether jewelry or handbag - holds a unique creative journey.',
                    'It is not just design, but an intersection of light, material, culture, and emotion.',
                ],
            },
            values: [
                { icon: 'fa-leaf', title: 'Natural Beauty', desc: 'Celebrating the authentic beauty of materials' },
                { icon: 'fa-hands', title: 'Artisan Craft', desc: 'Handcrafted by Vietnamese artisans' },
                { icon: 'fa-fingerprint', title: 'Unique Identity', desc: 'Each product is a distinctive signature' },
            ],
            belief: 'The true value of a product lies not in display, but in the emotions it evokes and the impression it leaves behind.',
            slogan: 'Shine your Bright',
            sloganDesc: 'Shine in your own unique way.',
        },
        badges: [
            { icon: 'fa-medal', text: 'Gold Quality' },
            { icon: 'fa-gem', text: 'GIA Diamond' },
            { icon: 'fa-shield-alt', text: 'Lifetime Warranty' },
            { icon: 'fa-shipping-fast', text: 'Safe Delivery' },
        ],
        products: {
            sectionLabel: 'Collections',
            newArrivals: 'New Arrivals',
            newArrivalsLabel: 'New Arrivals',
            viewAll: 'View all new products',
            collapse: 'Collapse',
            viewDetail: 'View Details',
            allFilter: 'All',
            sort: 'Sort by',
            sortNameAZ: 'Name: A-Z',
            sortNameZA: 'Name: Z-A',
            searchPlaceholder: 'Search products...',
            noResult: 'No products found',
            contactZalo: 'Contact via Zalo',
            callHotline: 'Call Hotline',
            productCode: 'Code',
            status: 'Status',
            inStock: 'In Stock',
            outOfStock: 'Out of Stock',
            description: 'Description',
            related: 'Related Products',
        },
        reviews: {
            sectionLabel: 'Reviews',
            sectionTitle: 'What Customers Say',
            basedOn: 'Based on 1,234 reviews',
            items: [
                { name: 'Nguyen Thi Mai', text: '"Beautiful products, great gold quality. The staff was very helpful. Will come back!"' },
                { name: 'Tran Van Hung', text: '"Bought wedding rings here, beautiful design, reasonable price. My wife loves them!"' },
                { name: 'Le Thi Hoa', text: '"The diamond necklace is gorgeous, exactly as described. Fast delivery!"' },
            ],
        },
        stats: [
            { target: 1234, text: 'Happy Customers' },
            { target: 5000, text: 'Products Sold' },
            { target: 15, text: 'Years Experience' },
            { target: 98, text: '% Satisfaction' },
        ],
        footer: {
            tagline: 'Where luxury and elegance are celebrated.',
            contactTitle: 'Contact',
            connectTitle: 'Connect',
        },
        wishlist: {
            title: 'Wishlist',
            empty: 'No favorite products yet',
            remove: 'Remove',
            added: 'Added to wishlist',
            removed: 'Removed from wishlist',
        },
        knowledge: {
            sectionLabel: 'Knowledge',
            sectionTitle: 'Knowledge',
            comingSoon: 'Content is being updated...',
            items: [
                { icon: 'fa-gem', title: 'How to identify natural gemstones', desc: 'Guide to distinguishing real gemstones from synthetic ones by color, hardness, and light.' },
                { icon: 'fa-ring', title: 'Proper jewelry care', desc: 'Tips to keep your jewelry always shiny and beautiful over time.' },
                { icon: 'fa-leaf', title: 'Palm & grass fiber materials', desc: 'Learn about the origin and characteristics of natural materials in NOAM handbags.' },
            ],
        },
        share: { title: 'Share Product', copied: 'Link copied!' },
        bottomNav: { home: 'Home', products: 'Products', chat: 'Chat', contact: 'Contact' },
    },
};

// ===== CATALOG STRUCTURE =====
// Thêm/sửa/xóa danh mục tại đây. UI tự động render theo list này.
const catalog = [
    {
        id: 'jewelry',
        name: { vi: 'Trang Sức', en: 'Jewelry' },
        icon: 'fa-gem',
        filters: [
            {
                id: 'line',
                name: { vi: 'Dòng hàng', en: 'Product Line' },
                options: [
                    { id: 'ngoc-trai', name: { vi: 'Ngọc Trai', en: 'Pearl' } },
                    { id: 'da-quy', name: { vi: 'Đá Quý', en: 'Gemstone' } },
                    { id: 'bac', name: { vi: 'Bạc', en: 'Silver' } },
                ],
            },
            {
                id: 'type',
                name: { vi: 'Chủng loại', en: 'Type' },
                options: [
                    { id: 'nhan', name: { vi: 'Nhẫn', en: 'Ring' } },
                    { id: 'day-chuyen', name: { vi: 'Dây Chuyền', en: 'Necklace' } },
                    { id: 'lac-tay', name: { vi: 'Lắc Tay', en: 'Bracelet' } },
                    { id: 'vong-tay', name: { vi: 'Vòng Tay', en: 'Bangle' } },
                    { id: 'vong-co', name: { vi: 'Vòng Cổ', en: 'Choker' } },
                    { id: 'bo-trang-suc', name: { vi: 'Bộ Trang Sức', en: 'Jewelry Set' } },
                    { id: 'charm', name: { vi: 'Charm', en: 'Charm' } },
                ],
            },
        ],
    },
    {
        id: 'bag',
        name: { vi: 'Túi & Balo', en: 'Bags & Backpacks' },
        icon: 'fa-bag-shopping',
        filters: [
            {
                id: 'material',
                name: { vi: 'Chất liệu', en: 'Material' },
                options: [
                    { id: 'soi-co', name: { vi: 'Sợi cọ', en: 'Palm Fiber' } },
                    { id: 'soi-co-grass', name: { vi: 'Sợi cỏ', en: 'Grass Fiber' } },
                ],
            },
            {
                id: 'line',
                name: { vi: 'Dòng hàng', en: 'Product Line' },
                options: [
                    { id: 'tui-xach', name: { vi: 'Túi xách', en: 'Handbag' } },
                    { id: 'vi', name: { vi: 'Ví', en: 'Wallet' } },
                    { id: 'balo', name: { vi: 'Balo', en: 'Backpack' } },
                ],
            },
        ],
    },
];

// ===== PRODUCTS =====
// code format: {CATALOG}-{TYPE}-{SEQ}  (vd: JW-CH-001, BG-TX-001)
// catalogId: trỏ tới catalog.id
// tags: object với key = filter.id, value = option.id (match catalog.filters)
// Thêm sản phẩm mới: copy 1 object, đổi thông tin, UI tự render.
const products = [
    // ── JEWELRY: Bộ Trang Sức ──
    {
        id: 1, code: 'JW-BTS-001', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'bo-trang-suc' }, isNew: false, inStock: true,
        name: { vi: 'Bộ Trang Sức Cỏ 4 Lá', en: '4-Leaf Clover Jewelry Set' },
        image: './Img/Bo-trang-suc/bo-trang-suc-co-4-la.jpg',
        description: { vi: 'Bộ trang sức cỏ 4 lá may mắn, thiết kế tinh tế mang lại vẻ đẹp sang trọng.', en: 'Lucky 4-leaf clover jewelry set, exquisitely designed for an elegant look.' }
    },
    {
        id: 2, code: 'JW-BTS-002', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'bo-trang-suc' }, isNew: false, inStock: true,
        name: { vi: 'Bộ Trang Sức Nhẫn Bông Tai', en: 'Ring & Earring Jewelry Set' },
        image: './Img/Bo-trang-suc/bo-trang-suc-nhan-bong-tay-001.jpg',
        description: { vi: 'Bộ trang sức nhẫn kết hợp bông tai, chế tác tinh xảo từ nghệ nhân hàng đầu.', en: 'Ring and earring set, meticulously crafted by top artisans.' }
    },
    {
        id: 3, code: 'JW-BTS-003', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'bo-trang-suc' }, isNew: false, inStock: true,
        name: { vi: 'Bộ Trang Sức Nhẫn Dây Chuyền', en: 'Ring & Necklace Jewelry Set' },
        image: './Img/Bo-trang-suc/bo-trang-suc-nhan-day-chuyen.jpg',
        description: { vi: 'Bộ trang sức nhẫn và dây chuyền đồng bộ, sang trọng và quý phái.', en: 'Matching ring and necklace set, luxurious and sophisticated.' }
    },

    // ── JEWELRY: Charm Bạc ──
    {
        id: 10, code: 'JW-CH-001', catalogId: 'jewelry',
        tags: { line: 'bac', type: 'charm' }, isNew: false, inStock: true,
        name: { vi: 'Charm Bạc Trái Tim', en: 'Silver Heart Charm' },
        image: './Img/Charm-bac/charm-bac-001.jpg',
        description: { vi: 'Charm bạc 925 cao cấp, thiết kế trái tim dễ thương.', en: 'Premium 925 silver charm with cute heart design.' }
    },
    {
        id: 11, code: 'JW-CH-002', catalogId: 'jewelry',
        tags: { line: 'bac', type: 'charm' }, isNew: false, inStock: true,
        name: { vi: 'Charm Bạc Ngôi Sao', en: 'Silver Star Charm' },
        image: './Img/Charm-bac/charm-bac-002.jpg',
        description: { vi: 'Charm bạc ngôi sao lấp lánh, phong cách trẻ trung.', en: 'Sparkling silver star charm, youthful style.' }
    },
    {
        id: 12, code: 'JW-CH-003', catalogId: 'jewelry',
        tags: { line: 'bac', type: 'charm' }, isNew: false, inStock: true,
        name: { vi: 'Charm Bạc Hoa Cúc', en: 'Silver Daisy Charm' },
        image: './Img/Charm-bac/charm-bac-003.jpg',
        description: { vi: 'Charm bạc hoa cúc tinh tế, mang vẻ đẹp tự nhiên.', en: 'Delicate silver daisy charm with natural beauty.' }
    },
    {
        id: 13, code: 'JW-CH-004', catalogId: 'jewelry',
        tags: { line: 'bac', type: 'charm' }, isNew: false, inStock: true,
        name: { vi: 'Charm Bạc Bướm', en: 'Silver Butterfly Charm' },
        image: './Img/Charm-bac/charm-bac-004.jpg',
        description: { vi: 'Charm bạc hình bướm, biểu tượng của sự tự do.', en: 'Silver butterfly charm, symbol of freedom.' }
    },
    {
        id: 14, code: 'JW-CH-005', catalogId: 'jewelry',
        tags: { line: 'bac', type: 'charm' }, isNew: false, inStock: true,
        name: { vi: 'Charm Bạc Mặt Trăng', en: 'Silver Moon Charm' },
        image: './Img/Charm-bac/charm-bac-005.jpg',
        description: { vi: 'Charm bạc mặt trăng huyền bí, phong cách độc đáo.', en: 'Mystical silver moon charm, unique style.' }
    },
    {
        id: 15, code: 'JW-CH-006', catalogId: 'jewelry',
        tags: { line: 'bac', type: 'charm' }, isNew: false, inStock: true,
        name: { vi: 'Charm Bạc Vương Miện', en: 'Silver Crown Charm' },
        image: './Img/Charm-bac/charm-bac-006.jpg',
        description: { vi: 'Charm bạc vương miện, thể hiện đẳng cấp nữ hoàng.', en: 'Silver crown charm, expressing queenly elegance.' }
    },
    {
        id: 16, code: 'JW-CH-007', catalogId: 'jewelry',
        tags: { line: 'bac', type: 'charm' }, isNew: false, inStock: true,
        name: { vi: 'Charm Bạc Chìa Khóa', en: 'Silver Key Charm' },
        image: './Img/Charm-bac/charm-bac-007.jpg',
        description: { vi: 'Charm bạc chìa khóa, biểu tượng mở cánh cửa mới.', en: 'Silver key charm, symbol of new beginnings.' }
    },
    {
        id: 17, code: 'JW-CH-008', catalogId: 'jewelry',
        tags: { line: 'bac', type: 'charm' }, isNew: false, inStock: true,
        name: { vi: 'Charm Bạc Cỏ 4 Lá', en: 'Silver 4-Leaf Clover Charm' },
        image: './Img/Charm-bac/charm-bac-008.jpg',
        description: { vi: 'Charm bạc cỏ 4 lá may mắn, mang lại tài lộc.', en: 'Lucky silver 4-leaf clover charm.' }
    },
    {
        id: 18, code: 'JW-CH-009', catalogId: 'jewelry',
        tags: { line: 'bac', type: 'charm' }, isNew: false, inStock: true,
        name: { vi: 'Charm Bạc Hình Tròn', en: 'Silver Circle Charm' },
        image: './Img/Charm-bac/charm-bac-009.jpg',
        description: { vi: 'Charm bạc hình tròn tối giản, phù hợp mọi phong cách.', en: 'Minimalist silver circle charm, suits any style.' }
    },
    {
        id: 19, code: 'JW-CH-010', catalogId: 'jewelry',
        tags: { line: 'bac', type: 'charm' }, isNew: false, inStock: true,
        name: { vi: 'Charm Bạc Giọt Nước', en: 'Silver Teardrop Charm' },
        image: './Img/Charm-bac/charm-bac-010.jpg',
        description: { vi: 'Charm bạc giọt nước thanh lịch.', en: 'Elegant silver teardrop charm.' }
    },
    {
        id: 20, code: 'JW-CH-011', catalogId: 'jewelry',
        tags: { line: 'bac', type: 'charm' }, isNew: false, inStock: true,
        name: { vi: 'Charm Bạc Hình Vuông', en: 'Silver Square Charm' },
        image: './Img/Charm-bac/charm-bac-011.jpg',
        description: { vi: 'Charm bạc hình vuông hiện đại.', en: 'Modern silver square charm.' }
    },
    {
        id: 21, code: 'JW-CH-012', catalogId: 'jewelry',
        tags: { line: 'bac', type: 'charm' }, isNew: false, inStock: true,
        name: { vi: 'Charm Bạc Infinity', en: 'Silver Infinity Charm' },
        image: './Img/Charm-bac/charm-bac-012.jpg',
        description: { vi: 'Charm bạc infinity, biểu tượng tình yêu vĩnh cửu.', en: 'Silver infinity charm, symbol of eternal love.' }
    },

    // ── JEWELRY: Dây Chuyền Nữ ──
    {
        id: 30, code: 'JW-DC-001', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'day-chuyen' }, isNew: false, inStock: true,
        name: { vi: 'Dây Chuyền Nữ Thanh Lịch', en: 'Elegant Necklace' },
        image: './Img/Day-chuyen-nu/Day-chuyen-nu-001.jpg',
        description: { vi: 'Dây chuyền vàng 18K, thiết kế thanh lịch cho phái đẹp.', en: '18K gold necklace, elegant design for women.' }
    },
    {
        id: 31, code: 'JW-DC-002', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'day-chuyen' }, isNew: false, inStock: true,
        name: { vi: 'Dây Chuyền Nữ Sang Trọng', en: 'Luxurious Necklace' },
        image: './Img/Day-chuyen-nu/Day-chuyen-nu-002.jpg',
        description: { vi: 'Dây chuyền sang trọng, chế tác tinh xảo.', en: 'Luxurious necklace, exquisitely crafted.' }
    },
    {
        id: 32, code: 'JW-DC-003', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'day-chuyen' }, isNew: false, inStock: true,
        name: { vi: 'Dây Chuyền Nữ Tinh Tế', en: 'Delicate Necklace' },
        image: './Img/Day-chuyen-nu/Day-chuyen-nu-003.jpg',
        description: { vi: 'Dây chuyền tinh tế, phù hợp mọi dịp.', en: 'Delicate necklace, perfect for any occasion.' }
    },
    {
        id: 33, code: 'JW-DC-004', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'day-chuyen' }, isNew: false, inStock: true,
        name: { vi: 'Dây Chuyền Nữ Đính Đá', en: 'Gemstone Necklace' },
        image: './Img/Day-chuyen-nu/Day-chuyen-nu-004.jpg',
        description: { vi: 'Dây chuyền đính đá quý lấp lánh.', en: 'Necklace adorned with sparkling gemstones.' }
    },
    {
        id: 34, code: 'JW-DC-005', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'day-chuyen' }, isNew: false, inStock: true,
        name: { vi: 'Dây Chuyền Nữ Trái Tim', en: 'Heart Necklace' },
        image: './Img/Day-chuyen-nu/Day-chuyen-nu-005.jpg',
        description: { vi: 'Dây chuyền trái tim lãng mạn.', en: 'Romantic heart pendant necklace.' }
    },
    {
        id: 35, code: 'JW-DC-006', catalogId: 'jewelry',
        tags: { line: 'ngoc-trai', type: 'day-chuyen' }, isNew: false, inStock: true,
        name: { vi: 'Dây Chuyền Nữ Ngọc Trai', en: 'Pearl Necklace' },
        image: './Img/Day-chuyen-nu/Day-chuyen-nu-006.jpg',
        description: { vi: 'Dây chuyền ngọc trai thiên nhiên cao cấp.', en: 'Premium natural pearl necklace.' }
    },
    {
        id: 36, code: 'JW-DC-007', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'day-chuyen' }, isNew: false, inStock: true,
        name: { vi: 'Dây Chuyền Nữ Mặt Tròn', en: 'Round Pendant Necklace' },
        image: './Img/Day-chuyen-nu/Day-chuyen-nu-007.jpg',
        description: { vi: 'Dây chuyền mặt tròn tối giản, thanh lịch.', en: 'Minimalist round pendant necklace.' }
    },
    {
        id: 37, code: 'JW-DC-008', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'day-chuyen' }, isNew: false, inStock: true,
        name: { vi: 'Dây Chuyền Nữ Cổ Điển', en: 'Classic Necklace' },
        image: './Img/Day-chuyen-nu/Day-chuyen-nu-008.jpg',
        description: { vi: 'Dây chuyền phong cách cổ điển sang trọng.', en: 'Classic style luxury necklace.' }
    },
    {
        id: 38, code: 'JW-DC-009', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'day-chuyen' }, isNew: false, inStock: true,
        name: { vi: 'Dây Chuyền Nữ Hiện Đại', en: 'Modern Necklace' },
        image: './Img/Day-chuyen-nu/Day-chuyen-nu-009.jpg',
        description: { vi: 'Dây chuyền thiết kế hiện đại, trẻ trung.', en: 'Modern design necklace, youthful.' }
    },
    {
        id: 39, code: 'JW-DC-010', catalogId: 'jewelry',
        tags: { line: 'bac', type: 'day-chuyen' }, isNew: false, inStock: true,
        name: { vi: 'Dây Chuyền Nữ Đơn Giản', en: 'Simple Necklace' },
        image: './Img/Day-chuyen-nu/Day-chuyen-nu-010.jpg',
        description: { vi: 'Dây chuyền bạc đơn giản, dễ phối đồ.', en: 'Simple silver necklace, easy to pair.' }
    },
    {
        id: 40, code: 'JW-DC-011', catalogId: 'jewelry',
        tags: { line: 'bac', type: 'day-chuyen' }, isNew: false, inStock: true,
        name: { vi: 'Dây Chuyền Nữ Dây Xích', en: 'Chain Necklace' },
        image: './Img/Day-chuyen-nu/Day-chuyen-nu-011.jpg',
        description: { vi: 'Dây chuyền dây xích phong cách cá tính.', en: 'Chain necklace with edgy style.' }
    },
    {
        id: 41, code: 'JW-DC-012', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'day-chuyen' }, isNew: false, inStock: true,
        name: { vi: 'Dây Chuyền Nữ Mặt Vuông', en: 'Square Pendant Necklace' },
        image: './Img/Day-chuyen-nu/Day-chuyen-nu-012.jpg',
        description: { vi: 'Dây chuyền mặt vuông hiện đại.', en: 'Modern square pendant necklace.' }
    },
    {
        id: 42, code: 'JW-DC-013', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'day-chuyen' }, isNew: false, inStock: true,
        name: { vi: 'Dây Chuyền Nữ Tourmaline', en: 'Tourmaline Necklace' },
        image: './Img/Day-chuyen-nu/Day-chuyen-nu-013-Tourmaline.jpg',
        description: { vi: 'Dây chuyền đính đá Tourmaline thiên nhiên cao cấp.', en: 'Premium natural Tourmaline pendant necklace.' }
    },
    {
        id: 43, code: 'JW-DC-014', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'day-chuyen' }, isNew: false, inStock: true,
        name: { vi: 'Dây Chuyền Nữ Luxury', en: 'Luxury Necklace' },
        image: './Img/Day-chuyen-nu/Day-chuyen-nu-014.jpg',
        description: { vi: 'Dây chuyền cao cấp, đẳng cấp sang trọng.', en: 'High-end luxury necklace.' }
    },

    // ── JEWELRY: Lắc Tay Nam ──
    {
        id: 50, code: 'JW-LT-001', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'lac-tay' }, isNew: false, inStock: true,
        name: { vi: 'Lắc Tay Nam Mạnh Mẽ', en: "Men's Bold Bracelet" },
        image: './Img/Lac-tay-nam/128L16-C02500_c8-Ptsj.jpg',
        description: { vi: 'Lắc tay nam vàng 18K, thiết kế mạnh mẽ, nam tính.', en: "18K gold men's bracelet, bold and masculine design." }
    },
    {
        id: 51, code: 'JW-LT-002', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'lac-tay' }, isNew: false, inStock: true,
        name: { vi: 'Lắc Tay Nam Sang Trọng', en: "Men's Luxury Bracelet" },
        image: './Img/Lac-tay-nam/128L17-C03000_1L3-Ptsj.jpg',
        description: { vi: 'Lắc tay nam sang trọng, phong cách lịch lãm.', en: "Luxury men's bracelet, refined style." }
    },
    {
        id: 52, code: 'JW-LT-003', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'lac-tay' }, isNew: false, inStock: true,
        name: { vi: 'Lắc Tay Nam Cổ Điển', en: "Men's Classic Bracelet" },
        image: './Img/Lac-tay-nam/CTL1143-C0700_4c7-Ptsj.jpg',
        description: { vi: 'Lắc tay nam cổ điển, bền đẹp theo thời gian.', en: "Classic men's bracelet, timeless beauty." }
    },
    {
        id: 53, code: 'JW-LT-004', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'lac-tay' }, isNew: false, inStock: true,
        name: { vi: 'Lắc Tay Nam Hiện Đại', en: "Men's Modern Bracelet" },
        image: './Img/Lac-tay-nam/KL010-C03400_8c-Ptsj.jpg',
        description: { vi: 'Lắc tay nam hiện đại, phong cách trẻ trung.', en: "Modern men's bracelet, youthful style." }
    },

    // ── JEWELRY: Lắc Tay Nữ ──
    {
        id: 60, code: 'JW-LT-005', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'lac-tay' }, isNew: false, inStock: true,
        name: { vi: 'Lắc Tay Nữ Tinh Tế', en: "Women's Delicate Bracelet" },
        image: './Img/Lac-tay-nu/L005675-09290-Ptsj.jpg',
        description: { vi: 'Lắc tay nữ vàng trắng, thiết kế tinh tế, nữ tính.', en: "White gold women's bracelet, delicate and feminine." }
    },
    {
        id: 61, code: 'JW-LT-006', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'lac-tay' }, isNew: false, inStock: true,
        name: { vi: 'Lắc Tay Nữ Thanh Lịch', en: "Women's Elegant Bracelet" },
        image: './Img/Lac-tay-nu/L006294-013040-Ptsj.jpg',
        description: { vi: 'Lắc tay nữ thanh lịch, phù hợp mọi phong cách.', en: "Elegant women's bracelet for any style." }
    },
    {
        id: 62, code: 'JW-LT-007', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'lac-tay' }, isNew: false, inStock: true,
        name: { vi: 'Lắc Tay Nữ Đính Đá', en: "Women's Gemstone Bracelet" },
        image: './Img/Lac-tay-nu/L006727-010490-Ptsj.jpg',
        description: { vi: 'Lắc tay nữ đính đá quý lấp lánh.', en: "Women's bracelet adorned with sparkling gems." }
    },
    {
        id: 63, code: 'JW-LT-008', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'lac-tay' }, isNew: false, inStock: true,
        name: { vi: 'Lắc Tay Nữ Sang Trọng', en: "Women's Luxury Bracelet" },
        image: './Img/Lac-tay-nu/L006767-07680-Ptsj.jpg',
        description: { vi: 'Lắc tay nữ sang trọng cho những dịp đặc biệt.', en: "Luxury women's bracelet for special occasions." }
    },
    {
        id: 64, code: 'JW-LT-009', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'lac-tay' }, isNew: false, inStock: true,
        name: { vi: 'Lắc Tay Nữ Luxury', en: "Women's Premium Bracelet" },
        image: './Img/Lac-tay-nu/L007218-015130-Ptsj.jpg',
        description: { vi: 'Lắc tay nữ cao cấp, đẳng cấp vượt trội.', en: "Premium women's bracelet, superior quality." }
    },

    // ── JEWELRY: Nhẫn ──
    {
        id: 70, code: 'JW-NH-001', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'nhan' }, isNew: false, inStock: true,
        name: { vi: 'Nhẫn Kim Cương Solitaire', en: 'Solitaire Diamond Ring' },
        image: './Img/Nhan/nhan-001.jpg',
        description: { vi: 'Nhẫn kim cương thiên nhiên, thiết kế Solitaire kinh điển.', en: 'Natural diamond ring, classic Solitaire design.' }
    },

    // ── JEWELRY: Vòng Cổ Nữ ──
    {
        id: 80, code: 'JW-VC-001', catalogId: 'jewelry',
        tags: { line: 'da-quy', type: 'vong-co' }, isNew: false, inStock: true,
        name: { vi: 'Vòng Cổ Nữ Sang Trọng', en: 'Luxury Choker' },
        image: './Img/Vong-co-nu/vong-co-nu-001.jpg',
        description: { vi: 'Vòng cổ nữ vàng 18K, thiết kế sang trọng, quý phái.', en: '18K gold choker, luxurious and sophisticated.' }
    },

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

    // ── BAG: (Sản phẩm túi xách sợi cọ SP01 - SP20) ──
    {
        id: 100, code: 'BR001', catalogId: 'bag',
        tags: { material: 'soi-co', line: 'tui-xach' }, isNew: false, inStock: true,
        name: { vi: 'Túi Sợi Cọ BR001', en: 'Palm Fiber Handbag BR001' },
        image: './Img/TuiXach/SP01/LOGO1_1.jpg',
        image1: './Img/TuiXach/SP01/LOGO1_2.jpg',
        description: { vi: 'Kích thước: W29 x H13 x đáy 9cm\nMô tả chi tiết: \n-        Chất liệu: sợi cọ xanh lá đậm\n-        Lót trong túi: vải canvas\n-        Quai xích có phối da bò mềm để đeo vai không bị đau. \nCâu chuyện sản phẩm:  Túi sợi cọ xanh lá đậm với thiết kế thủ công tinh tế, kích thước W29 x H13 x đáy 9cm nhỏ gọn nhưng vẫn đủ không gian cho các vật dụng cần thiết. Lót trong bằng vải canvas bền đẹp, quai xích phối da bò mềm giúp đeo vai êm ái và thoải mái. Một phụ kiện thanh lịch, nổi bật nét đẹp tự nhiên và thời trang cho mọi outfit.', en: 'Size: W29 x H13 x D9 cm\nDetailed description:\n- Material: dark green palm fiber\n- Inner lining: canvas fabric\n- Chain shoulder strap padded with soft cowhide leather.\nAI product description: Exquisite hand-woven dark green palm fiber handbag. Compact size (W29 x H13 x D9 cm) yet spacious enough for essentials. Features durable canvas lining and a leather-padded chain strap for comfortable shoulder wear. A chic, natural fashion accessory.' }
    },
    {
        id: 101, code: 'BR002', catalogId: 'bag',
        tags: { material: 'soi-co', line: 'tui-xach' }, isNew: false, inStock: true,
        name: { vi: 'Túi Sợi Cọ BR002', en: 'Palm Fiber Handbag BR002' },
        image: './Img/TuiXach/SP02/LOGO2_1.jpg',
        image1: './Img/TuiXach/SP02/LOGO2_2.jpg',
        description: { vi: 'Kích thước: W20cm\nMô tả chi tiết: \n-        Chất liệu: sợi cọ \n-        Lót trong túi: vải canvas\n-        Quai xách và nắp túi là da bò nâu\nCâu chuyện sản phẩm:  Túi sợi cọ thủ công kích thước W20cm với thiết kế nhỏ gọn, thanh lịch. Lót trong bằng vải canvas bền đẹp, quai xách và nắp túi bằng da bò nâu cao cấp tạo điểm nhấn sang trọng. Phụ kiện hoàn hảo cho những cô nàng yêu thích phong cách tự nhiên, tinh tế và thời trang.', en: 'Size: W20 cm\nDetailed description:\n- Material: palm fiber\n- Inner lining: canvas fabric\n- Handle and flap: brown cowhide leather\nAI product description: Handcrafted palm fiber bag (W20cm) featuring a compact and elegant silhouette. Built with a durable canvas lining and styled with premium brown cowhide leather handles and flap for a luxurious touch.' }
    },
    {
        id: 102, code: 'BR003', catalogId: 'bag',
        tags: { material: 'soi-co', line: 'tui-xach' }, isNew: false, inStock: true,
        name: { vi: 'Túi Sợi Cọ BR003', en: 'Palm Fiber Handbag BR003' },
        image: './Img/TuiXach/SP03/LOGO3.2.jpg',
        image1: './Img/TuiXach/SP03/LOGO3.3.jpg',
        image2: './Img/TuiXach/SP03/LOGO3.jpg',
        description: { vi: 'Kích thước: W20 x H16 x đáy 9cm\nMô tả chi tiết: \n-        Chất liệu: sợi cọ \n-        Lót trong túi: vải canvas\n-        Quai xách là da bò nâu\nCâu chuyện sản phẩm:  Túi sợi cọ thủ công W20 x H16 x đáy 9cm với lớp lót canvas bền đẹp và quai xách da bò nâu cao cấp. Điểm nhấn phụ kiện kim loại màu bạc tinh tế tạo nét sang trọng, hiện đại, giúp chiếc túi thêm phần nổi bật và cuốn hút trong mọi set đồ.', en: 'Size: W20 x H16 x D9 cm\nDetailed description:\n- Material: palm fiber\n- Inner lining: canvas fabric\n- Handle: brown cowhide leather\nAI product description: Hand-woven palm fiber bag (W20 x H16 x D9 cm) featuring a sturdy canvas lining and high-quality brown cowhide leather handles. Accented with sleek silver-tone hardware for a modern, luxurious look.' }
    },
    {
        id: 103, code: 'BR004', catalogId: 'bag',
        tags: { material: 'soi-co', line: 'tui-xach' }, isNew: false, inStock: true,
        name: { vi: 'Túi Sợi Cọ BR004', en: 'Palm Fiber Handbag BR004' },
        image: './Img/TuiXach/SP04/LOGO4_1.jpg',
        image1: './Img/TuiXach/SP04/LOGO4_2.jpg',
        description: { vi: 'Kích thước: W20 x H16 x đáy 9cm\nMô tả chi tiết: \n-        Chất liệu: sợi cọ \n-        Lót trong túi: vải canvas\n-        Quai xách là da bò nâu\nCâu chuyện sản phẩm:  Túi đan thủ công từ sợi cọ tự nhiên, kích thước W20 x H16 x đáy 9cm, mang vẻ đẹp thanh lịch và gần gũi. Lót trong bằng vải canvas bền chắc, quai xách da bò nâu cao cấp kết hợp phụ kiện kim loại màu vàng sang trọng, tạo điểm nhấn nổi bật cho tổng thể thiết kế. Phù hợp để phối cùng nhiều phong cách từ nữ tính đến hiện đại.', en: 'Size: W20 x H16 x D9 cm\nDetailed description:\n- Material: palm fiber\n- Inner lining: canvas fabric\n- Handle: brown cowhide leather\nAI product description: Natural palm fiber hand-woven bag (W20 x H16 x D9 cm) showcasing natural charm and elegance. Completed with durable canvas lining, premium brown leather handles, and gold-tone metal hardware accents.' }
    },
    {
        id: 104, code: 'BR005', catalogId: 'bag',
        tags: { material: 'soi-co', line: 'tui-xach' }, isNew: false, inStock: true,
        name: { vi: 'Túi Sợi Cọ BR005', en: 'Palm Fiber Handbag BR005' },
        image: './Img/TuiXach/SP05/LOGO5_1.jpg',
        image1: './Img/TuiXach/SP05/LOGO5_2.jpg',
        image2: './Img/TuiXach/SP05/LOGO5_3.jpg',
        description: { vi: 'Kích thước: W20 x H13 x đáy 8cm\nMô tả chi tiết: \n-        Chất liệu: sợi cọ màu cam\n-        Lót trong túi: vải canvas\n-        Quai xích có phối da bò mềm để đeo vai không bị đau.\nCâu chuyện sản phẩm:  Túi sợi cọ màu cam kích thước W20 x H13 x đáy 8cm với thiết kế nhỏ gọn, nổi bật và thời trang. Lót trong bằng vải canvas bền đẹp, quai xích phối da bò mềm giúp đeo vai thoải mái suốt ngày dài. Phụ kiện hoàn hảo để tạo điểm nhấn trẻ trung, cá tính cho mọi outfit.', en: 'Size: W20 x H13 x D8 cm\nDetailed description:\n- Material: orange palm fiber\n- Inner lining: canvas fabric\n- Leather-padded chain shoulder strap\nAI product description: Vibrant orange palm fiber bag (W20 x H13 x D8 cm) in a compact, trendy design. Designed with a canvas lining and a chain strap padded with soft cowhide leather for all-day carrying comfort.' }
    },
    {
        id: 105, code: 'BR006', catalogId: 'bag',
        tags: { material: 'soi-co', line: 'tui-xach' }, isNew: false, inStock: true,
        name: { vi: 'Túi Sợi Cọ BR006', en: 'Palm Fiber Handbag BR006' },
        image: './Img/TuiXach/SP06/LOGO6_1.jpg',
        image1: './Img/TuiXach/SP06/LOGO6_2.jpg',
        description: { vi: 'Kích thước: W20 x H17 x đáy 10cm\nMô tả chi tiết: \n-        Chất liệu: sợi cọ \n-        Lót trong túi: vải canvas\n-        Quai trúc, có quai đeo chéo dây xích phối da bò\nCâu chuyện sản phẩm:  Túi sợi cọ thủ công W20 x H17 x đáy 10cm với thiết kế thanh lịch và tiện dụng. Lót trong bằng vải canvas bền chắc, quai trúc tự nhiên tạo điểm nhấn độc đáo, kết hợp quai đeo chéo dây xích phối da bò sang trọng. Một phụ kiện tinh tế giúp hoàn thiện phong cách thời trang đầy cuốn hút.', en: 'Size: W20 x H17 x D10 cm\nDetailed description:\n- Material: palm fiber\n- Inner lining: canvas fabric\n- Bamboo handle, chain crossbody strap with cowhide details\nAI product description: Handcrafted palm fiber bag (W20 x H17 x D10 cm) combining style and utility. Styled with a natural bamboo handle for a unique organic feel and a leather-trimmed chain crossbody strap.' }
    },
    {
        id: 106, code: 'BR007', catalogId: 'bag',
        tags: { material: 'soi-co', line: 'tui-xach' }, isNew: false, inStock: true,
        name: { vi: 'Túi Sợi Cọ BR007', en: 'Palm Fiber Handbag BR007' },
        image: './Img/TuiXach/SP07/LOGO7_1.jpg',
        image1: './Img/TuiXach/SP07/LOGO7_2.jpg',
        image2: './Img/TuiXach/SP07/LOGO7_3.jpg',
        description: { vi: 'Kích thước: W20 x H18 x đáy 8cm\nMô tả chi tiết: \n-        Chất liệu: sợi cọ \n-        Mặt trước túi đính hồ điệp đính kết từ ngọc trai thật và cườm pha lê.\n-        Lót trong túi: vải canvas\n-        Quai da, có quai đeo chéo dây xích phối da bò\nCâu chuyện sản phẩm:  Túi sợi cọ thủ công W20 x H18 x đáy 8cm nổi bật với họa tiết hồ điệp đính kết từ ngọc trai thật và cườm pha lê tinh xảo. Lót trong bằng vải canvas bền đẹp, quai da cùng dây đeo chéo xích phối da bò mang đến sự tiện dụng và sang trọng. Một thiết kế thanh lịch, nữ tính, giúp bạn tỏa sáng trong mọi khoảnh khắc.', en: 'Size: W20 x H18 x D8 cm\nDetailed description:\n- Material: palm fiber\n- Decorated with real pearls and crystal butterfly beads\n- Inner lining: canvas fabric\n- Leather handle and leather-padded chain crossbody strap\nAI product description: Exquisite palm fiber bag (W20 x H18 x D8 cm) adorned with a hand-beaded real pearl and crystal butterfly motif. Elegant design completed with canvas lining, leather handles, and chain strap.' }
    },
    {
        id: 107, code: 'BR008', catalogId: 'bag',
        tags: { material: 'soi-co', line: 'tui-xach' }, isNew: false, inStock: true,
        name: { vi: 'Túi Sợi Cọ BR008', en: 'Palm Fiber Handbag BR008' },
        image: './Img/TuiXach/SP08/LOGO8_1.jpg',
        image1: './Img/TuiXach/SP08/LOGO8_2.jpg',
        image2: './Img/TuiXach/SP08/LOGO8_3.jpg',
        description: { vi: 'Kích thước: W23xH20x đáy 8cm\nMô tả chi tiết: \n-        Chất liệu: sợi cọ đỏ bóc đô\n-        Lót trong túi: vải canvas\n-        Quai da, có quai đeo chéo dây xích phối da bò\nCâu chuyện sản phẩm:  Túi sợi cọ đỏ bọc đô W23 x H20 x đáy 8cm nổi bật với gam màu sang trọng và thiết kế thủ công tinh tế. Lót trong bằng vải canvas bền chắc, quai da cao cấp kết hợp dây đeo chéo xích phối da bò mang đến sự tiện dụng và thanh lịch. Phụ kiện hoàn hảo dành cho những ai yêu thích phong cách nổi bật, nữ tính và thời trang.', en: 'Size: W23 x H20 x D8 cm\nDetailed description:\n- Material: bordeaux red palm fiber\n- Inner lining: canvas fabric\n- Leather handle and leather-padded chain crossbody strap\nAI product description: Bordeaux red palm fiber bag (W23 x H20 x D8 cm) showing deep luxurious colors and refined hand-weaving. Features a sturdy canvas lining, premium leather handle, and comfortable crossbody chain strap.' }
    },
    {
        id: 108, code: 'BR009', catalogId: 'bag',
        tags: { material: 'soi-co', line: 'tui-xach' }, isNew: false, inStock: true,
        name: { vi: 'Túi Sợi Cọ BR009', en: 'Palm Fiber Handbag BR009' },
        image: './Img/TuiXach/SP09/LOGO9_1.jpg',
        image1: './Img/TuiXach/SP09/LOGO9_2.jpg',
        description: { vi: 'Kích thước: W33xH30x đáy 14cm\nMô tả chi tiết: \n-        Chất liệu: sợi cọ \n-        Lót trong túi: vải canvas\nCâu chuyện sản phẩm:  Túi sợi cọ thủ công W33 x H30 x đáy 14cm với thiết kế rộng rãi, phù hợp cho nhu cầu sử dụng hằng ngày và các chuyến du lịch. Chất liệu sợi cọ tự nhiên kết hợp lớp lót canvas bền chắc mang đến sự tiện dụng và vẻ đẹp mộc mạc, thanh lịch. Một phụ kiện thời trang vừa tinh tế vừa đa năng cho mọi phong cách.', en: 'Size: W33 x H30 x D14 cm\nDetailed description:\n- Material: palm fiber\n- Inner lining: canvas fabric\nAI product description: Spacious hand-woven palm fiber tote bag (W33 x H30 x D14 cm), perfect for daily needs or beach getaways. Natural palm fiber texture combined with canvas lining offers great durability and style.' }
    },
    {
        id: 109, code: 'BR010', catalogId: 'bag',
        tags: { material: 'soi-co', line: 'tui-xach' }, isNew: true, inStock: true,
        name: { vi: 'Túi Sợi Cọ BR010', en: 'Palm Fiber Handbag BR010' },
        image: './Img/TuiXach/SP10/LOGO10_1.jpg',
        image1: './Img/TuiXach/SP10/LOGO10_2.jpg',
        description: { vi: 'Kích thước: W20xH18x đáy 8cm\nMô tả chi tiết: \n-        Chất liệu: sợi cọ \n-        Bên hông túi đính hồ điệp đính kết từ ngọc trai thật và cườm pha lê.\n-        Lót trong túi: vải canvas\n-        Quai da, có quai đeo chéo dây xích phối da bò\nCâu chuyện sản phẩm:  Túi sợi cọ thủ công W20 x H18 x đáy 8cm nổi bật với chi tiết hồ điệp đính bên hông từ ngọc trai thật và cườm pha lê tinh xảo. Lót trong bằng vải canvas bền đẹp, quai da cùng dây đeo chéo xích phối da bò mang lại sự tiện dụng và thanh lịch. Thiết kế nữ tính, sang trọng, giúp tạo điểm nhấn cuốn hút cho mọi trang phục.', en: 'Size: W20 x H18 x D8 cm\nDetailed description:\n- Material: palm fiber\n- Side decorated with real pearls and crystal butterfly beads\n- Inner lining: canvas fabric\n- Leather handle and leather-padded chain crossbody strap\nAI product description: Hand-woven palm fiber bag (W20 x H18 x D8 cm) highlighted by a delicate butterfly beaded with real pearls and crystals on the side. Features durable canvas lining and leather handles.' }
    },
    {
        id: 110, code: 'BR011', catalogId: 'bag',
        tags: { material: 'soi-co', line: 'tui-xach' }, isNew: true, inStock: true,
        name: { vi: 'Túi Sợi Cọ BR011', en: 'Palm Fiber Handbag BR011' },
        image: './Img/TuiXach/SP11/LOGO11_1.jpg',
        image1: './Img/TuiXach/SP11/LOGO11_2.jpg',
        description: { vi: 'Kích thước: W20xH18x đáy 8cm\nMô tả chi tiết: \n-        Chất liệu: sợi cọ \n-        Mặt trước túi đính hoa đính kết từ ngọc trai thật và cườm pha lê.\n-        Lót trong túi: vải canvas\n-        Quai trúc và đai da có thể tháo rời, có quai đeo chéo dây xích phối da bò\nCâu chuyện sản phẩm:  Túi sợi cọ thủ công W20 x H18 x đáy 8cm nổi bật với họa tiết hoa đính kết từ ngọc trai thật và cườm pha lê tinh xảo ở mặt trước. Lót trong bằng vải canvas bền đẹp, quai trúc cùng đai da tháo rời kết hợp dây đeo chéo xích phối da bò mang đến sự tiện dụng và thanh lịch. Một thiết kế sang trọng, nữ tính và đầy cuốn hút cho mọi dịp.', en: 'Size: W20 x H18 x D8 cm\nDetailed description:\n- Material: palm fiber\n- Adorned with real pearls and crystal floral details\n- Inner lining: canvas fabric\n- Detachable bamboo handle, leather band, and chain crossbody strap\nAI product description: Elegant palm fiber bag (W20 x H18 x D8 cm) with hand-beaded pearl and crystal flowers on the front. Features a natural bamboo handle, detachable leather band, and leather-trimmed chain strap.' }
    },
    {
        id: 111, code: 'BR012', catalogId: 'bag',
        tags: { material: 'soi-co', line: 'tui-xach' }, isNew: true, inStock: true,
        name: { vi: 'Túi Sợi Cọ BR012', en: 'Palm Fiber Handbag BR012' },
        image: './Img/TuiXach/SP12/copy_z7886335477562_8f176a4f023a4cc66c6f81cdadd953c9.jpg',
        image1: './Img/TuiXach/SP12/copy_z7886335484544_f0bfceb8327ca51d5308b45d8311bcfc.jpg',
        description: { vi: 'Kích thước: W20xH18x đáy 8cm\nMô tả chi tiết: \n-        Chất liệu: sợi cọ xanh lá\n-        Mặt trước túi đính hoa đính kết từ ngọc trai thật và cườm pha lê.\n-        Lót trong túi: vải canvas\n-        Quai trúc và đai da có thể tháo rời, có quai đeo chéo dây xích phối da bò\nCâu chuyện sản phẩm:  Túi sợi cọ xanh lá W20 x H18 x đáy 8cm nổi bật với hoa đính kết thủ công từ ngọc trai thật và cườm pha lê ở mặt trước. Lót trong bằng vải canvas bền chắc, quai trúc kết hợp đai da tháo rời cùng dây đeo chéo xích phối da bò mang đến sự tiện dụng và tinh tế. Một thiết kế thanh lịch, nổi bật và đầy cuốn hút cho mọi dịp.', en: 'Size: W20 x H18 x D8 cm\nDetailed description:\n- Material: green palm fiber\n- Adorned with real pearls and crystal floral details\n- Inner lining: canvas fabric\n- Detachable bamboo handle, leather band, and chain crossbody strap\nAI product description: Green palm fiber handbag (W20 x H18 x D8 cm) featuring real pearl and crystal floral hand-beading. Set with a natural bamboo handle, detachable leather band, and chain crossbody strap.' }
    },
    {
        id: 112, code: 'BR013', catalogId: 'bag',
        tags: { material: 'soi-co', line: 'tui-xach' }, isNew: false, inStock: true,
        name: { vi: 'Túi Sợi Cọ BR013', en: 'Palm Fiber Handbag BR013' },
        image: './Img/TuiXach/SP13/copy_z7886337848652_549b0dd03cc2fa8f3c0cdfc8879f1ca0.jpg',
        image1: './Img/TuiXach/SP13/copy_z7886337853889_b269a7cc16509508de68c5f874db4ae5.jpg',
        description: { vi: 'Kích thước: W20xH18x đáy 8cm\nMô tả chi tiết: \n-        Chất liệu: sợi cọ xanh lá\n-        Mặt trước túi đính hoa cườm và pha lê.\n-        Lót trong túi: vải canvas\n-        Quai da, có thêm quai đeo chéo dây xích phối da bò\nCâu chuyện sản phẩm:  Tinh tế trong từng chi tiết, túi sợi cọ xanh lá W20 x H18 x đáy 8cm gây ấn tượng với hoa đính cườm và pha lê lấp lánh trên mặt trước. Chất liệu sợi cọ thủ công kết hợp lớp lót canvas bền đẹp, quai da cùng dây đeo chéo xích phối da bò tạo nên sự cân bằng hoàn hảo giữa nét thanh lịch và tính ứng dụng. Một phụ kiện nổi bật dành cho những ai yêu thích vẻ đẹp nhẹ nhàng nhưng đầy cuốn hút.', en: 'Size: W20 x H18 x D8 cm\nDetailed description:\n- Material: green palm fiber\n- Front decorated with beads and crystal flowers\n- Inner lining: canvas fabric\n- Leather handle and chain crossbody strap with leather details\nAI product description: Exquisite green palm fiber bag (W20 x H18 x D8 cm) featuring hand-embroidered beads and sparkling crystal flowers. Beautifully balanced design with canvas lining, leather handles, and chain strap.' }
    },
    {
        id: 113, code: 'BR014', catalogId: 'bag',
        tags: { material: 'soi-co', line: 'tui-xach' }, isNew: true, inStock: true,
        name: { vi: 'Túi Sợi Cọ BR014', en: 'Palm Fiber Handbag BR014' },
        image: './Img/TuiXach/SP14/copy_z7886343026196_2a1a4f0132efbb68a362b420881b40c2.jpg',
        image1: './Img/TuiXach/SP14/copy_z7886343030031_5ab86e238604db26f91416f9c4c08aa2.jpg',
        image2: './Img/TuiXach/SP14/copy_z7886343037370_c51da24536b5210af29da7ce6e4c49c7.jpg',
        description: { vi: 'Kích thước: W20xH18x đáy 8cm\nMô tả chi tiết: \n-        Chất liệu: sợi cọ hồng pastel\n-        Mặt trước túi đính hồ điệp đính kết từ ngọc trai thật và cườm pha lê.\n-        Lót trong túi: vải canvas\n-        Quai trúc và đai da có thể tháo rời, có quai đeo chéo dây xích phối da bò\nCâu chuyện sản phẩm:  Nổi bật với sắc hồng pastel dịu dàng, chiếc túi sợi cọ thủ công W20 x H18 x đáy 8cm được tô điểm bằng hồ điệp đính kết từ ngọc trai thật và cườm pha lê đầy tinh xảo. Quai trúc thanh lịch, đai da tháo rời cùng dây đeo chéo xích phối da bò mang đến vẻ đẹp vừa nữ tính vừa hiện đại. Một thiết kế đầy cảm hứng dành cho những ai yêu thích sự tinh tế và lãng mạn.', en: 'Size: W20 x H18 x D8 cm\nDetailed description:\n- Material: pastel pink palm fiber\n- Front decorated with real pearl and crystal butterfly\n- Inner lining: canvas fabric\n- Detachable bamboo handle, leather band, and chain crossbody strap\nAI product description: Soft pastel pink palm fiber bag (W20 x H18 x D8 cm) featuring an exquisite real pearl and crystal butterfly embellishment. Accented with natural bamboo handle and detachable leather band.' }
    },
    {
        id: 114, code: 'BR015', catalogId: 'bag',
        tags: { material: 'soi-co', line: 'tui-xach' }, isNew: false, inStock: true,
        name: { vi: 'Túi Sợi Cọ BR015', en: 'Palm Fiber Handbag BR015' },
        image: './Img/TuiXach/SP15/copy_z7886347965073_d310c87772073e5c2251634e2e98ffa9.jpg',
        image1: './Img/TuiXach/SP15/copy_z7886347968895_b5e7ea87d730397eff746b29004f67c3.jpg',
        image2: './Img/TuiXach/SP15/copy_z7886347978054_213bf3f9efbf0d2522874ff5c28efe42.jpg',
        description: { vi: 'Kích thước: W25xH18x đáy 10cm\nMô tả chi tiết: \n-        Chất liệu: sợi cọ \n-        Lót trong túi: vải canvas\n-        Quai da, có thêm quai đeo chéo dây xích phối da bò\nCâu chuyện sản phẩm:  Túi sợi cọ W25 x H18 x đáy 10cm nổi bật với họa tiết hoa nổi thủ công phủ khắp thân túi, gợi cảm hứng từ một khu vườn hoa rực rỡ đầy sức sống. Thiết kế kết hợp hài hòa giữa chất liệu thủ công tự nhiên, lớp lót canvas bền chắc cùng quai da thanh lịch và dây đeo chéo xích phối da bò.', en: 'Size: W25 x H18 x D10 cm\nDetailed description:\n- Material: palm fiber\n- Inner lining: canvas fabric\n- Leather handle and chain crossbody strap with leather details\nAI product description: Palm fiber handbag (W25 x H18 x D10 cm) featuring intricate 3D hand-crocheted flowers covering the body, evoking a vibrant blooming garden. Designed with a canvas lining and leather handles.' }
    },
    {
        id: 115, code: 'BR016', catalogId: 'bag',
        tags: { material: 'soi-co', line: 'tui-xach' }, isNew: false, inStock: true,
        name: { vi: 'Túi Sợi Cọ BR016', en: 'Palm Fiber Handbag BR016' },
        image: './Img/TuiXach/SP16/copy_z7886352866493_342653726611572247de6bf31206a302.jpg',
        image1: './Img/TuiXach/SP16/copy_z7886352869813_2b77dd8117bd375b978ecb7ffe17cfe0.jpg',
        description: { vi: 'Kích thước: W25xH18x đáy 10cm\nMô tả chi tiết: \n-        Chất liệu: sợi cọ \n-        Lót trong túi: vải canvas\n-        Quai da, có thêm quai đeo chéo dây xích phối da bò\nCâu chuyện sản phẩm:  Túi sợi cọ W25 x H18 x đáy 10cm nổi bật với những bông hoa đỏ nổi thủ công trên nền sợi cọ tự nhiên, tạo vẻ đẹp rực rỡ và đầy nghệ thuật. Lót canvas bền chắc, quai da cao cấp cùng dây đeo chéo xích phối da bò mang đến sự tiện dụng và thanh lịch. Một thiết kế cuốn hút, giúp bạn nổi bật trong mọi khoảnh khắc.', en: 'Size: W25 x H18 x D10 cm\nDetailed description:\n- Material: palm fiber\n- Inner lining: canvas fabric\n- Leather handle and chain crossbody strap with leather details\nAI product description: Palm fiber bag (W25 x H18 x D10 cm) decorated with vibrant red hand-crocheted flowers on a natural straw background. Sturdy canvas lining, premium leather handle, and crossbody chain strap.' }
    },
    {
        id: 116, code: 'BG017', catalogId: 'bag',
        tags: { material: 'soi-co-grass', line: 'tui-xach' }, isNew: false, inStock: true,
        name: { vi: 'Túi Sợi Cỏ BG017', en: 'Grass Fiber Handbag BG017' },
        image: './Img/TuiXach/SP17/copy_z7886358671193_c6d488ce8227a55506c1a07411bcaf52 (2).jpg',
        image1: './Img/TuiXach/SP17/copy_z7886358676984_81f5e78641790c850ee22b79bb3ce570 (2).jpg',
        image2: './Img/TuiXach/SP17/copy_z7886358681860_9073f4435b3076ae69d94ab92560596f (2).jpg',
        image3: './Img/TuiXach/SP17/copy_z7886358686431_3372ebbc40001ba0a163b68f335d1b0c (2).jpg',
        description: { vi: 'Kích thước: W20cm\nMô tả chi tiết: \n-        Chất liệu: sợi cỏ\n-        Lót trong túi: vải canvas\nCâu chuyện sản phẩm:  Túi sợi cỏ W20cm nổi bật với thiết kế hoa thủ công độc đáo, mang vẻ đẹp mềm mại và đầy tính nghệ thuật. Chất liệu sợi cỏ tự nhiên kết hợp lớp lót canvas bền chắc tạo nên một phụ kiện vừa tinh tế vừa tiện dụng. Một lựa chọn hoàn hảo cho những cô nàng yêu thích phong cách nữ tính, thanh lịch và khác biệt.', en: 'Size: W20 cm\nDetailed description:\n- Material: grass fiber\n- Inner lining: canvas fabric\nAI product description: Woven grass fiber bag (W20cm) featuring unique handcrafted flower details. Natural grass fiber combined with canvas lining creates a soft, artistic, and highly durable daily accessory.' }
    },
    {
        id: 117, code: 'BG018', catalogId: 'bag',
        tags: { material: 'soi-co-grass', line: 'tui-xach' }, isNew: false, inStock: true,
        name: { vi: 'Túi Sợi Cỏ BG018', en: 'Grass Fiber Handbag BG018' },
        image: './Img/TuiXach/SP18/LOGO18_1.jpg',
        image1: './Img/TuiXach/SP18/LOGO18_2.jpg',
        description: { vi: 'Kích thước: W18 x H15 x đáy 12cm\nMô tả chi tiết: \n-        Chất liệu: sợi cỏ\n-      Mặt trước đính hoa hồng móc nổi 3D\n-        Lót trong túi: vải canvas\n-        Quai trúc\nCâu chuyện sản phẩm:  Túi sợi cỏ W18 x H15 x đáy 12cm nổi bật với hoa hồng móc nổi 3D đính ở mặt trước, mang đến vẻ đẹp nữ tính và lãng mạn. Lót canvas bền chắc kết hợp quai trúc tự nhiên tạo nên một thiết kế hài hòa, tinh tế và đậm dấu ấn thủ công. Phụ kiện hoàn hảo để tạo điểm nhấn cho mọi outfit.', en: 'Size: W18 x H15 x D12 cm\nDetailed description:\n- Material: grass fiber\n- Front decorated with 3D crocheted pink roses\n- Inner lining: canvas fabric\n- Bamboo handle\nAI product description: Handcrafted grass fiber bag (W18 x H15 x D12 cm) highlighted by lovely 3D crocheted roses. Perfect blend of natural grass texture and organic bamboo handle for a feminine, rustic look.' }
    },
    {
        id: 118, code: 'BG019', catalogId: 'bag',
        tags: { material: 'soi-co-grass', line: 'tui-xach' }, isNew: false, inStock: true,
        name: { vi: 'Túi Sợi Cỏ BG019', en: 'Grass Fiber Handbag BG019' },
        image: './Img/TuiXach/SP19/LOGO19_1.jpg',
        image1: './Img/TuiXach/SP19/LOGO19_2.jpg',
        description: { vi: 'Kích thước: W25 x H18,5 x đáy 8cm\nMô tả chi tiết: \n-        Chất liệu: sợi cỏ\n-        Lót trong túi: vải canvas\nCâu chuyện sản phẩm:  Túi sợi cỏ W25 x H18,5 x đáy 8cm sở hữu thiết kế thủ công thanh lịch với vẻ đẹp tự nhiên và tinh tế. Lót trong bằng vải canvas bền chắc, mang đến sự tiện dụng cho nhu cầu sử dụng hằng ngày. Một phụ kiện nhẹ nhàng, thời trang và dễ dàng đồng hành cùng nhiều phong cách khác nhau.', en: 'Size: W25 x H18.5 x D8 cm\nDetailed description:\n- Material: grass fiber\n- Inner lining: canvas fabric\nAI product description: Elegant grass fiber shoulder bag (W25 x H18.5 x D8 cm) presenting clean hand-woven details and natural textures. A lightweight and versatile fashion piece lined with durable canvas.' }
    },
    {
        id: 119, code: 'BG020', catalogId: 'bag',
        tags: { material: 'soi-co-grass', line: 'tui-xach' }, isNew: false, inStock: true,
        name: { vi: 'Túi Sợi Cỏ BG020', en: 'Grass Fiber Handbag BG020' },
        image: './Img/TuiXach/SP20/LOGO20_1.jpg',
        image1: './Img/TuiXach/SP20/LOGO20_2.jpg',
        image2: './Img/TuiXach/SP20/LOGO20_3.jpg',
        description: { vi: 'Kích thước: W16xH19x15 cm\nMô tả chi tiết: \n-        Chất liệu: sợi cỏ\n-        Lót trong túi: vải canvas\n-        Quai và đáy túi là da bò\nCâu chuyện sản phẩm:  Túi sợi cỏ W16 x H19 x 15cm nổi bật với thiết kế thủ công từ chất liệu tự nhiên, kết hợp quai xách và đáy túi bằng da bò cao cấp. Lót trong bằng vải canvas bền chắc, mang đến sự tiện dụng và độ bền vượt trội. Một phụ kiện thanh lịch, tinh tế, phù hợp cho nhiều phong cách và dịp sử dụng khác nhau.', en: 'Size: W16 x H19 x D15 cm\nDetailed description:\n- Material: grass fiber\n- Inner lining: canvas fabric\n- Handle and bottom: cowhide leather\nAI product description: Premium grass fiber bag (W16 x H19 x D15 cm) with structure enhanced by high-quality cowhide leather handles and bottom. Durable canvas lining makes it perfect for daily style.' }
    }
];


// ============================================================
// STATE
// ============================================================
let state = {
    lang: localStorage.getItem('lang') || CONFIG.defaultLang,
    sort: 'default',
    showAllNew: false,
    activeCatalog: 'jewelry',
    activeFilters: {},
    wishlist: JSON.parse(localStorage.getItem('wishlist') || '[]'),
    currentShareProduct: null,
};

// ============================================================
// UTILITY
// ============================================================
const t = (path) => {
    const keys = path.split('.');
    let obj = i18n[state.lang];
    for (const k of keys) { if (obj === undefined) return path; obj = obj[k]; }
    return obj ?? path;
};

const localized = (obj) => obj?.[state.lang] ?? obj?.vi ?? '';
const getCatalog = (id) => catalog.find(c => c.id === id);

const getFilteredProducts = (catalogId) => {
    let result = products.filter(p => p.catalogId === catalogId);
    for (const [filterId, optionId] of Object.entries(state.activeFilters)) {
        if (optionId) result = result.filter(p => p.tags[filterId] === optionId);
    }
    return result;
};

const getNewArrivals = () => {
    let result = products.filter(p => p.isNew);
    if (state.sort === 'name-asc') result.sort((a, b) => localized(a.name).localeCompare(localized(b.name)));
    else if (state.sort === 'name-desc') result.sort((a, b) => localized(b.name).localeCompare(localized(a.name)));
    return result;
};

// ============================================================
// RENDER
// ============================================================
function setLang(lang) {
    state.lang = lang;
    localStorage.setItem('lang', lang);
    renderAll();
}

function createProductCard(product, isHidden = false) {
    const isWishlisted = state.wishlist.includes(product.id);
    return `
        <article class="product-card group bg-white rounded-lg shadow-sm hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100 flex flex-col h-full animate-fade-in relative ${isHidden ? 'hidden' : ''}">
            <button onclick="toggleWishlist(${product.id}, event)" class="wishlist-btn ${isWishlisted ? 'active' : ''}">
                <i class="fas fa-heart"></i>
            </button>
            <div class="relative overflow-hidden aspect-square cursor-pointer" onclick="openModal(${product.id})">
                <img src="${product.image}" alt="${localized(product.name)}" class="product-img w-full h-full object-cover" loading="lazy">
                ${product.isNew ? '<span class="absolute top-2 left-2 bg-brand-500 text-white text-[8px] md:text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm">New</span>' : ''}
            </div>
            <div class="p-3 md:p-4 flex flex-col flex-grow text-center">
                <h3 class="font-serif font-bold text-gray-800 text-xs md:text-lg mb-2 md:mb-3 line-clamp-2 hover:text-brand-500 transition cursor-pointer" onclick="openModal(${product.id})">${localized(product.name)}</h3>
                <div class="mt-auto flex gap-2">
                    <button onclick="openModal(${product.id})" class="flex-1 bg-brand-900 text-brand-gold py-2 px-3 rounded-lg text-xs hover:bg-brand-gold hover:text-brand-900 transition ripple">${t('products.viewDetail')}</button>
                    <button onclick="shareProduct(${product.id}, event)" class="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-xs hover:bg-gray-200 transition"><i class="fas fa-share-alt"></i></button>
                </div>
            </div>
        </article>`;
}

function renderTopBar() {
    document.getElementById('top-bar-info').innerHTML = `
        <span><i class="fas fa-phone-alt mr-2"></i>${CONFIG.phone}</span>
        <span><i class="fas fa-envelope mr-2"></i>${CONFIG.email}</span>`;
}

function renderNav() {
    document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.getAttribute('data-i18n')); });
    document.querySelectorAll('.search-input').forEach(input => { input.placeholder = t('products.searchPlaceholder'); });
    document.querySelectorAll('.lang-btn').forEach(btn => { btn.classList.toggle('active', btn.dataset.lang === state.lang); });
}

function renderHero() {
    const hero = document.getElementById('hero-content');
    if (!hero) return;
    hero.innerHTML = `
        <span class="uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm text-brand-gold mb-2 block">${t('hero.subtitle')}</span>
        <h2 class="text-3xl md:text-6xl font-serif font-bold mb-4 md:mb-6 leading-tight">${t('hero.title')}</h2>
        <div class="flex gap-4">
            <a href="#products-section" class="bg-brand-gold text-brand-900 px-6 py-2 md:px-8 md:py-3 font-bold hover:bg-brand-gold/80 transition shadow-lg uppercase text-xs md:text-sm tracking-wider">${t('hero.cta')}</a>
        </div>`;
}

function renderAbout() {
    const container = document.getElementById('about-section');
    if (!container) return;
    const about = t('about');
    container.innerHTML = `
        <div class="container mx-auto px-4">
            <div class="text-center mb-10 md:mb-14">
                <span class="text-brand-500 text-xs md:text-sm font-bold tracking-widest uppercase">${about.sectionLabel}</span>
                <h2 class="text-2xl md:text-4xl font-serif font-bold text-brand-900 mt-2">${about.sectionTitle}</h2>
                <div class="w-16 md:w-20 h-1 bg-brand-500 mx-auto mt-4"></div>
            </div>
            <div class="max-w-3xl mx-auto text-center mb-12">
                <p class="text-gray-600 text-sm md:text-base leading-relaxed mb-6">${about.intro}</p>
                <div class="bg-brand-50 border-l-4 border-brand-500 p-4 md:p-6 rounded-r-lg text-left">
                    <h3 class="font-serif font-bold text-brand-900 text-lg mb-2">${about.visionTitle}</h3>
                    <p class="text-gray-600 text-sm md:text-base">${about.visionText}</p>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                ${about.services.map(s => `
                    <div class="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition border border-gray-100">
                        <div class="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4">
                            <i class="fas ${s.icon} text-2xl text-brand-500"></i>
                        </div>
                        <h4 class="font-bold text-brand-900 mb-2">${s.title}</h4>
                        <p class="text-gray-600 text-sm">${s.desc}</p>
                    </div>`).join('')}
            </div>
        </div>`;
}

function renderBrandStory() {
    const container = document.getElementById('brand-story-content');
    if (!container) return;
    const bs = t('brandStory');

    container.innerHTML = `
        <!-- Section Header -->
        <div class="text-center mb-12 md:mb-16">
            <span class="text-brand-500 text-xs md:text-sm font-bold tracking-widest uppercase">${bs.sectionLabel}</span>
            <h2 class="text-2xl md:text-4xl font-serif font-bold text-brand-900 mt-2">${bs.sectionTitle}</h2>
            <div class="w-16 md:w-20 h-1 bg-brand-500 mx-auto mt-4"></div>
        </div>

        <!-- Name Origin -->
        <div class="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <h3 class="text-3xl md:text-5xl font-serif font-bold text-brand-900 mb-3">${bs.nameOrigin.title}</h3>
            <p class="text-gray-500 text-sm md:text-base mb-4">${bs.nameOrigin.subtitle}</p>
            <p class="text-brand-500 text-lg md:text-xl font-medium italic tracking-wide mb-4">${bs.nameOrigin.meaning}</p>
            <p class="text-gray-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto">${bs.nameOrigin.desc}</p>
        </div>

        <!-- NOAM Acronym -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20 max-w-4xl mx-auto">
            ${bs.acronym.items.map(item => `
                <div class="bg-gray-50 rounded-xl p-6 text-center border border-gray-100 hover:border-brand-500 hover:shadow-lg transition duration-300">
                    <span class="text-4xl md:text-5xl font-serif font-bold text-brand-500">${item.letter}</span>
                    <p class="text-sm md:text-base font-bold text-brand-900 mt-2">${item.word}</p>
                    <p class="text-xs text-gray-500 mt-1">${item.desc}</p>
                </div>
            `).join('')}
        </div>

        <!-- Story -->
        <div class="max-w-3xl mx-auto mb-16 md:mb-20">
            <h3 class="text-xl md:text-2xl font-serif font-bold text-brand-900 text-center mb-8">${bs.story.title}</h3>
            <div class="space-y-4 md:space-y-6">
                ${bs.story.paragraphs.map((p, i) => `
                    <p class="text-gray-600 text-sm md:text-base leading-relaxed text-justify ${i === 0 ? 'text-lg md:text-xl text-gray-700 font-light text-center italic' : ''}">${p}</p>
                `).join('')}
            </div>
        </div>

        <!-- Values -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20 max-w-4xl mx-auto">
            ${bs.values.map(v => `
                <div class="text-center p-6">
                    <div class="w-16 h-16 bg-brand-50 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fas ${v.icon} text-2xl text-brand-500"></i>
                    </div>
                    <h4 class="font-bold text-brand-900 mb-2">${v.title}</h4>
                    <p class="text-gray-500 text-sm">${v.desc}</p>
                </div>
            `).join('')}
        </div>

        <!-- Belief Quote -->
        <div class="max-w-3xl mx-auto text-center mb-12">
            <div class="bg-brand-900 rounded-2xl p-8 md:p-12">
                <i class="fas fa-quote-left text-brand-500 text-2xl md:text-3xl mb-4 block"></i>
                <p class="text-white text-base md:text-lg leading-relaxed italic mb-6">${bs.belief}</p>
                <div class="w-12 h-0.5 bg-brand-500 mx-auto mb-6"></div>
                <p class="text-brand-gold text-2xl md:text-3xl font-serif font-bold tracking-wider">${bs.slogan}</p>
                <p class="text-gray-400 text-sm mt-2">${bs.sloganDesc}</p>
            </div>
        </div>
    `;
}

function renderBadges() {
    const container = document.getElementById('badges-section');
    if (!container) return;
    container.innerHTML = t('badges').map(b => `
        <div class="space-y-2"><i class="fas ${b.icon} text-2xl md:text-3xl text-brand-800"></i>
            <h3 class="font-bold text-xs md:text-sm uppercase">${b.text}</h3>
        </div>`).join('');
}

function renderNewArrivals() {
    const container = document.getElementById('new-products-grid');
    const btn = document.getElementById('load-more-new-btn');
    if (!container || !btn) return;
    const items = getNewArrivals();
    const limit = state.showAllNew ? items.length : CONFIG.newArrivalsLimit;
    container.innerHTML = items.map((p, i) => createProductCard(p, i >= limit)).join('');
    if (items.length <= CONFIG.newArrivalsLimit) btn.classList.add('hidden');
    else btn.classList.remove('hidden');
    btn.textContent = state.showAllNew ? t('products.collapse') : t('products.viewAll');
}

function renderCatalogSection() {
    const tabsContainer = document.getElementById('catalog-tabs');
    const filtersContainer = document.getElementById('catalog-filters');
    const productsContainer = document.getElementById('catalog-products');
    if (!tabsContainer) return;

    tabsContainer.innerHTML = catalog.map(cat => `
        <button onclick="switchCatalog('${cat.id}')"
            class="catalog-tab px-4 md:px-6 py-2 md:py-3 text-sm font-medium rounded-full transition whitespace-nowrap flex items-center gap-2
            ${state.activeCatalog === cat.id ? 'bg-brand-900 text-brand-gold shadow-md border border-brand-gold' : 'bg-white text-gray-700 hover:bg-brand-50 border border-gray-200'}">
            <i class="fas ${cat.icon}"></i> ${localized(cat.name)}
        </button>`).join('');

    const activeCat = getCatalog(state.activeCatalog);
    if (activeCat && filtersContainer) {
        filtersContainer.innerHTML = activeCat.filters.map(filter => `
            <div class="mb-3">
                <span class="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">${localized(filter.name)}</span>
                <div class="flex flex-wrap gap-2">
                    <button onclick="setFilter('${filter.id}', '')"
                        class="filter-btn px-3 py-1 text-xs rounded-full transition ${!state.activeFilters[filter.id] ? 'bg-brand-900 text-brand-gold' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}">${t('products.allFilter')}</button>
                    ${filter.options.map(opt => `
                        <button onclick="setFilter('${filter.id}', '${opt.id}')"
                            class="filter-btn px-3 py-1 text-xs rounded-full transition ${state.activeFilters[filter.id] === opt.id ? 'bg-brand-900 text-brand-gold' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}">${localized(opt.name)}</button>`).join('')}
                </div>
            </div>`).join('');
    }

    if (productsContainer) {
        const filtered = getFilteredProducts(state.activeCatalog);
        if (filtered.length > 0) {
            productsContainer.innerHTML = filtered.map(p => createProductCard(p)).join('');
        } else {
            productsContainer.innerHTML = `<div class="col-span-full text-center py-16"><i class="fas fa-box-open text-5xl text-gray-300 mb-4"></i><p class="text-gray-500">${t('products.noResult')}</p></div>`;
        }
    }
}

function renderCategoryTabs() {
    const container = document.getElementById('category-tabs-container');
    if (!container) return;
    const activeCat = getCatalog(state.activeCatalog);
    if (!activeCat) return;
    const typeFilter = activeCat.filters.find(f => f.id === 'type' || f.id === 'line');
    if (!typeFilter) return;
    container.innerHTML = typeFilter.options.map(opt => `
        <a href="#" class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-brand-500 hover:border-b-2 hover:border-brand-500 transition whitespace-nowrap"
           onclick="event.preventDefault(); setFilter('${typeFilter.id}', '${opt.id}')">${localized(opt.name)}</a>`).join('');
}

function renderReviews() {
    const container = document.getElementById('reviews-content');
    if (!container) return;
    const reviews = t('reviews');
    container.innerHTML = `
        <div class="text-center mb-8 md:mb-10">
            <span class="text-brand-500 text-xs md:text-sm font-bold tracking-widest uppercase">${reviews.sectionLabel}</span>
            <h2 class="text-2xl md:text-4xl font-serif font-bold text-brand-900 mt-2">${reviews.sectionTitle}</h2>
            <div class="w-16 md:w-20 h-1 bg-brand-500 mx-auto mt-4"></div>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <div class="text-center">
                <div class="text-5xl font-bold text-brand-900">4.8</div>
                <div class="star-rating text-2xl my-2"><i class="fas fa-star filled"></i><i class="fas fa-star filled"></i><i class="fas fa-star filled"></i><i class="fas fa-star filled"></i><i class="fas fa-star-half-alt filled"></i></div>
                <div class="text-gray-600">${reviews.basedOn}</div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${reviews.items.map(r => `
                <div class="bg-gray-50 p-6 rounded-lg">
                    <div class="flex items-center gap-4 mb-4">
                        <div class="w-12 h-12 bg-brand-900 rounded-full flex items-center justify-center text-brand-gold font-bold">${r.name[0]}</div>
                        <div>
                            <div class="font-bold">${r.name}</div>
                            <div class="star-rating text-sm"><i class="fas fa-star filled"></i><i class="fas fa-star filled"></i><i class="fas fa-star filled"></i><i class="fas fa-star filled"></i><i class="fas fa-star filled"></i></div>
                        </div>
                    </div>
                    <p class="text-gray-600 text-sm">${r.text}</p>
                </div>`).join('')}
        </div>`;
}

function renderStats() {
    const container = document.getElementById('stats-content');
    if (!container) return;
    container.innerHTML = t('stats').map(s => `
        <div class="space-y-2">
            <div class="counter-number" data-target="${s.target}">0</div>
            <p class="text-gray-600">${s.text}</p>
        </div>`).join('');
    counterAnimated = false;
}

function renderKnowledge() {
    const container = document.getElementById('knowledge-content');
    if (!container) return;
    const kn = t('knowledge');

    container.innerHTML = `
        <div class="text-center mb-8 md:mb-10">
            <span class="text-brand-gold text-xs md:text-sm font-bold tracking-widest uppercase">${kn.sectionLabel}</span>
            <h2 class="text-2xl md:text-4xl font-serif font-bold text-brand-900 mt-2">${kn.sectionTitle}</h2>
            <div class="w-16 md:w-20 h-1 bg-brand-gold mx-auto mt-4"></div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            ${kn.items.map(item => `
                <div class="bg-white rounded-xl p-6 md:p-8 border border-gray-100 hover:shadow-lg transition duration-300 group">
                    <div class="w-14 h-14 bg-brand-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-gold transition duration-300">
                        <i class="fas ${item.icon} text-xl text-brand-gold group-hover:text-brand-900 transition duration-300"></i>
                    </div>
                    <h4 class="font-bold text-brand-900 mb-2 text-base md:text-lg">${item.title}</h4>
                    <p class="text-gray-500 text-sm leading-relaxed">${item.desc}</p>
                </div>
            `).join('')}
        </div>
    `;
}

function renderFooter() {
    const container = document.getElementById('footer-content');
    if (!container) return;
    const footer = t('footer');
    container.innerHTML = `
        <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
                <div class="flex items-center gap-2 mb-4"><img src="./Img/logo/logo-f.jpg" alt="NOAM" class="h-12 w-auto rounded"></div>
                <p class="text-gray-400 text-sm">${footer.tagline}</p>
            </div>
            <div>
                <h4 class="text-lg font-bold mb-4 border-l-4 border-brand-500 pl-3">${footer.contactTitle}</h4>
                <ul class="space-y-3 text-sm text-gray-300">
                    <li><i class="fas fa-phone w-5 text-brand-500"></i> ${CONFIG.phone}</li>
                    <li><i class="fas fa-envelope w-5 text-brand-500"></i> ${CONFIG.email}</li>
                </ul>
            </div>
            <div>
                <h4 class="text-lg font-bold mb-4 border-l-4 border-brand-500 pl-3">${footer.connectTitle}</h4>
                <div class="flex gap-4">
                    <a href="${CONFIG.facebook}" target="_blank" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-900 transition"><i class="fab fa-facebook-f"></i></a>
                    <a href="${CONFIG.instagram}" target="_blank" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-900 transition"><i class="fab fa-instagram"></i></a>
                    <a href="https://zalo.me/${CONFIG.zalo}" target="_blank" class="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-gold hover:text-brand-900 transition"><span class="text-xs font-bold">Zalo</span></a>
                </div>
            </div>
        </div>
        <div class="border-t border-white/10 pt-8 pb-16 md:pb-0 text-center text-xs text-gray-500"><p>&copy; 2025 NOAM. Developed and designed by <a href="https://sunsolutions.vn" target="_blank" rel="noopener noreferrer" class="text-brand-gold hover:text-yellow-300 transition underline">SunSolutions.vn</a></p></div>`;
}

function renderBottomNav() {
    const nav = document.getElementById('bottom-nav');
    if (!nav) return;
    const bn = t('bottomNav');
    nav.innerHTML = `
        <a href="#" class="bottom-nav-item active"><i class="fas fa-home"></i><span>${bn.home}</span></a>
        <a href="#products-section" class="bottom-nav-item"><i class="fas fa-th-large"></i><span>${bn.products}</span></a>
        <a href="https://zalo.me/${CONFIG.zalo}" target="_blank" class="bottom-nav-item"><i class="fas fa-comments"></i><span>${bn.chat}</span></a>
        <a href="#contact" class="bottom-nav-item"><i class="fas fa-phone"></i><span>${bn.contact}</span></a>`;
}

function renderAll() {
    renderTopBar();
    renderNav();
    renderHero();
    renderAbout();
    renderBrandStory();
    renderBadges();
    renderNewArrivals();
    renderCatalogSection();
    renderCategoryTabs();
    renderReviews();
    renderKnowledge();
    renderStats();
    renderFooter();
    renderBottomNav();
    updateWishlistBadge();
}

// ============================================================
// INTERACTIONS
// ============================================================
function switchCatalog(catalogId) {
    state.activeCatalog = catalogId;
    state.activeFilters = {};
    renderCatalogSection();
    renderCategoryTabs();
}

function setFilter(filterId, optionId) {
    if (optionId) state.activeFilters[filterId] = optionId;
    else delete state.activeFilters[filterId];
    renderCatalogSection();
}

function sortProducts() {
    state.sort = document.getElementById('sort-select').value;
    renderNewArrivals();
}

function toggleNewProducts() {
    state.showAllNew = !state.showAllNew;
    renderNewArrivals();
}

function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const cat = getCatalog(product.catalogId);

    document.getElementById('modal-category').innerText = cat ? localized(cat.name) : '';
    document.getElementById('modal-name').innerText = localized(product.name);
    document.getElementById('modal-code-label').innerText = t('products.productCode');
    document.getElementById('modal-code-value').innerText = product.code;
    document.getElementById('modal-status-label').innerText = t('products.status');

    const descLabel = document.getElementById('modal-desc-label');
    const descEl = document.getElementById('modal-desc');
    const descText = localized(product.description);

    // Check if description has a story part
    const storyDividerVi = "Câu chuyện sản phẩm:";
    const storyDividerEn = "AI product description:";

    let splitIdx = descText.indexOf(storyDividerVi);
    let dividerLength = storyDividerVi.length;
    if (splitIdx === -1) {
        splitIdx = descText.indexOf(storyDividerEn);
        dividerLength = storyDividerEn.length;
    }

    if (splitIdx !== -1) {
        descLabel.style.display = 'none';

        const detailPart = descText.substring(0, splitIdx).trim();
        const storyPart = descText.substring(splitIdx + dividerLength).trim();

        const detailTitle = state.lang === 'vi' ? 'Thông số chi tiết' : 'Specifications';
        const storyTitle = state.lang === 'vi' ? 'Câu chuyện sản phẩm' : 'Product Story';

        descEl.innerHTML = `
            <div class="bg-gray-50 p-4 rounded-xl border border-gray-200/60 mb-4 text-gray-700 text-xs md:text-sm leading-relaxed">
                <div class="font-bold text-gray-800 mb-2 flex items-center gap-2">
                    <i class="fas fa-list-ul text-brand-500"></i> ${detailTitle}
                </div>
                <div class="space-y-1">${detailPart.replace(/\n/g, '<br>')}</div>
            </div>
            <div class="bg-brand-900/[0.03] p-4 rounded-xl border border-brand-900/10 text-gray-700 text-xs md:text-sm leading-relaxed">
                <div class="font-bold text-brand-900 mb-2 flex items-center gap-2">
                    <i class="fas fa-feather-alt text-brand-500"></i> ${storyTitle}
                </div>
                <div class="italic text-justify">${storyPart.replace(/\n/g, '<br>')}</div>
            </div>
        `;
    } else {
        descLabel.style.display = 'block';
        descLabel.innerText = t('products.description');
        descEl.innerHTML = descText.replace(/\n/g, '<br>');
    }

    const statusEl = document.getElementById('modal-status-value');
    statusEl.className = product.inStock ? "text-green-600 font-medium" : "text-red-500 font-medium";
    statusEl.innerHTML = product.inStock
        ? `<i class="fas fa-check-circle mr-1"></i>${t('products.inStock')}`
        : `<i class="fas fa-times-circle mr-1"></i>${t('products.outOfStock')}`;

    // Show product tags (material/type) in modal detail
    const tagsContainer = document.getElementById('modal-tags');
    if (tagsContainer && cat) {
        const tagLabels = [];
        Object.entries(product.tags).forEach(([filterId, optionId]) => {
            const filter = cat.filters.find(f => f.id === filterId);
            if (filter) {
                const option = filter.options.find(o => o.id === optionId);
                if (option) tagLabels.push({ filterName: localized(filter.name), optionName: localized(option.name) });
            }
        });
        tagsContainer.innerHTML = tagLabels.map(tag =>
            `<span class="inline-flex items-center gap-1 px-3 py-1 bg-brand-900/5 text-brand-900 text-xs rounded-full border border-brand-900/10">
                <span class="font-medium">${tag.filterName}:</span> ${tag.optionName}
            </span>`
        ).join('');
    }

    document.querySelectorAll('.modal-zalo-btn').forEach(el => {
        el.href = `https://zalo.me/${CONFIG.zalo}?text=${encodeURIComponent('Tôi quan tâm sản phẩm ' + localized(product.name) + ' mã ' + product.code)}`;
    });
    document.querySelectorAll('.modal-zalo-text').forEach(el => {
        el.textContent = t('products.contactZalo');
    });
    document.querySelectorAll('.modal-hotline-text').forEach(el => {
        el.textContent = t('products.callHotline');
    });
    document.querySelectorAll('.modal-hotline-btn').forEach(el => {
        el.href = `tel:${CONFIG.phone}`;
    });

    // Image gallery
    const mainImg = document.getElementById('modal-img');
    const thumbs = document.getElementById('modal-thumbnails');
    mainImg.src = product.image;
    mainImg.style.opacity = '1';
    thumbs.innerHTML = '';

    const images = [product.image, product.image1, product.image2, product.image3].filter(Boolean);
    images.forEach((src, i) => {
        const thumb = document.createElement('img');
        thumb.src = src;
        thumb.className = `w-12 h-12 md:w-16 md:h-16 object-cover cursor-pointer border-2 border-transparent hover:border-brand-500 rounded-md transition duration-200 flex-shrink-0 ${i === 0 ? 'thumb-active' : 'opacity-60 hover:opacity-100'}`;
        thumb.onclick = () => {
            mainImg.style.opacity = '0.5';
            setTimeout(() => { mainImg.src = src; mainImg.style.opacity = '1'; }, 100);
            Array.from(thumbs.children).forEach(c => c.classList.remove('thumb-active'));
            thumb.classList.add('thumb-active');
        };
        thumbs.appendChild(thumb);
    });

    // Related
    const modalContent = document.querySelector('.modal-content');
    modalContent.querySelector('.related-section')?.remove();

    const categoryProducts = products.filter(p => p.catalogId === product.catalogId);
    const currentIndex = categoryProducts.findIndex(p => p.id === product.id);
    const related = [];

    if (currentIndex !== -1 && categoryProducts.length > 1) {
        const N = categoryProducts.length;
        // Nếu là sản phẩm đầu tiên, đề xuất 3 sản phẩm tiếp theo.
        // Ngược lại, đề xuất 1 sản phẩm trước đó và 2 sản phẩm kế tiếp để có thể lùi/tiến.
        const offsets = currentIndex === 0 ? [1, 2, 3] : [-1, 1, 2];

        offsets.forEach(offset => {
            const idx = (currentIndex + offset + N) % N;
            const targetProd = categoryProducts[idx];
            if (targetProd && !related.includes(targetProd) && targetProd.id !== product.id) {
                related.push(targetProd);
            }
        });
    }

    if (related.length > 0) {
        modalContent.insertAdjacentHTML('beforeend', `
            <div class="mt-6 pt-6 border-t related-section">
                <h4 class="font-bold text-base mb-4">${t('products.related')}</h4>
                <div class="related-products-scroll">
                    ${related.map(p => `
                        <div class="min-w-[120px] cursor-pointer" onclick="openModal(${p.id})">
                            <img src="${p.image}" class="w-full aspect-square object-cover rounded-lg mb-2" loading="lazy">
                            <p class="text-xs font-medium line-clamp-2">${localized(p.name)}</p>
                        </div>`).join('')}
                </div>
            </div>`);
    }

    document.getElementById('product-modal').classList.remove('hidden');
}

function closeModal() { document.getElementById('product-modal').classList.add('hidden'); }
function toggleFullscreen() { document.querySelector('#product-modal > div:last-child').classList.toggle('modal-fullscreen'); }
function openLightbox() { document.getElementById('lightbox-img').src = document.getElementById('modal-img').src; document.getElementById('lightbox').classList.add('active'); }
function closeLightbox() { document.getElementById('lightbox').classList.remove('active'); }

function initSearch() {
    document.querySelectorAll('.search-input').forEach(input => {
        const results = input.closest('.search-container').querySelector('.search-results');
        if (!input || !results) return;
        input.addEventListener('input', (e) => {
            const q = e.target.value.toLowerCase().trim();
            if (q.length < 2) { results.classList.add('hidden'); return; }
            const found = products.filter(p => localized(p.name).toLowerCase().includes(q) || p.code.toLowerCase().includes(q));
            results.innerHTML = found.length > 0
                ? found.slice(0, 5).map(p => `
                    <div class="search-result-item flex gap-3" onclick="openModal(${p.id}); this.closest('.search-container').querySelector('.search-input').value=''; this.closest('.search-results').classList.add('hidden');">
                        <img src="${p.image}" alt="${localized(p.name)}" class="w-12 h-12 object-cover rounded">
                        <div class="flex-1"><p class="font-medium text-sm">${localized(p.name)}</p><p class="text-xs text-gray-500">${p.code}</p></div>
                    </div>`).join('')
                : `<div class="p-4 text-center text-gray-500 text-sm">${t('products.noResult')}</div>`;
            results.classList.remove('hidden');
        });
        document.addEventListener('click', (e) => { if (!input.contains(e.target) && !results.contains(e.target)) results.classList.add('hidden'); });
    });
}

// Wishlist
function toggleWishlist(id, event) {
    event.stopPropagation();
    const idx = state.wishlist.indexOf(id);
    if (idx > -1) { state.wishlist.splice(idx, 1); showToast(t('wishlist.removed'), 'info'); }
    else { state.wishlist.push(id); showToast(t('wishlist.added'), 'success'); }
    localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    updateWishlistBadge();
    renderNewArrivals();
    renderCatalogSection();
}

function updateWishlistBadge() {
    const badge = document.getElementById('wishlist-badge');
    badge.textContent = state.wishlist.length;
    badge.classList.toggle('hidden', state.wishlist.length === 0);
}

function openWishlistModal() {
    const content = document.getElementById('wishlist-content');
    document.getElementById('wishlist-title').textContent = t('wishlist.title');
    if (state.wishlist.length === 0) {
        content.innerHTML = `<div class="text-center py-12"><i class="fas fa-heart text-6xl text-gray-300 mb-4"></i><p class="text-gray-600">${t('wishlist.empty')}</p></div>`;
    } else {
        const items = products.filter(p => state.wishlist.includes(p.id));
        content.innerHTML = `<div class="grid grid-cols-2 md:grid-cols-3 gap-4">${items.map(p => `
            <div class="border rounded-lg overflow-hidden">
                <img src="${p.image}" alt="${localized(p.name)}" class="w-full aspect-square object-cover cursor-pointer" onclick="openModal(${p.id}); closeWishlistModal();">
                <div class="p-3"><h4 class="font-bold text-sm mb-2">${localized(p.name)}</h4>
                    <button onclick="toggleWishlist(${p.id}, event); openWishlistModal();" class="w-full text-red-500 border border-red-500 py-1 rounded text-xs hover:bg-red-50 transition">${t('wishlist.remove')}</button>
                </div>
            </div>`).join('')}</div>`;
    }
    document.getElementById('wishlist-modal').classList.remove('hidden');
}

function closeWishlistModal() { document.getElementById('wishlist-modal').classList.add('hidden'); }

// Share
function shareProduct(id, event) {
    event.stopPropagation();
    state.currentShareProduct = products.find(p => p.id === id);
    document.getElementById('share-title').textContent = t('share.title');
    document.getElementById('share-modal').classList.add('active');
}
function closeShareModal() { document.getElementById('share-modal').classList.remove('active'); }
function shareToFacebook() { window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank'); }
function shareToZalo() {
    const text = state.currentShareProduct ? `${localized(state.currentShareProduct.name)} - NOAM` : '';
    window.open(`https://zalo.me/share?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text)}`, '_blank');
}
function copyLink() { navigator.clipboard.writeText(window.location.href); showToast(t('share.copied'), 'success'); closeShareModal(); }

// Toast
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icon = type === 'success' ? 'check-circle' : type === 'error' ? 'times-circle' : 'info-circle';
    const color = type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6';
    toast.innerHTML = `<i class="fas fa-${icon}" style="color: ${color}; font-size: 20px;"></i><span class="flex-1">${message}</span>
        <button onclick="this.parentElement.remove()" class="text-gray-400 hover:text-gray-600"><i class="fas fa-times"></i></button>
        <div class="toast-progress" style="color: ${color}"></div>`;
    container.appendChild(toast);
    setTimeout(() => { toast.style.animation = 'slideInRight 0.3s ease-out reverse'; setTimeout(() => toast.remove(), 300); }, 3000);
}

// Counter
let counterAnimated = false;
function animateCounter() {
    document.querySelectorAll('.counter-number').forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const inc = target / 200;
        const update = () => { const c = +counter.innerText; if (c < target) { counter.innerText = Math.ceil(c + inc); setTimeout(update, 1); } else counter.innerText = target; };
        update();
    });
}

// ============================================================
// SCROLL
// ============================================================
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    document.getElementById('scroll-progress').style.width = (winScroll / height) * 100 + '%';
    document.getElementById('back-to-top').classList.toggle('show', winScroll > 300);
    if (!counterAnimated) {
        const c = document.querySelector('.counter-number');
        if (c) { const r = c.getBoundingClientRect(); if (r.top < window.innerHeight && r.bottom > 0) { animateCounter(); counterAnimated = true; } }
    }
});

// ============================================================
// INIT
// ============================================================
// ===== POSTER / SPLASH SCREEN =====
function initPoster() {
    const poster = document.getElementById('poster-splash');
    const closeBtn = document.getElementById('poster-close');
    if (!poster) return;

    const closePoster = () => {
        poster.classList.add('closing');
        setTimeout(() => poster.classList.add('hidden'), 300);
    };

    closeBtn.addEventListener('click', closePoster);
    poster.addEventListener('click', (e) => { if (e.target === poster) closePoster(); });
}

document.addEventListener('DOMContentLoaded', () => {
    initPoster();
    renderAll();
    initSearch();
    document.getElementById('back-to-top')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    document.getElementById('mobile-menu-btn')?.addEventListener('click', () => document.getElementById('mobile-menu')?.classList.toggle('hidden'));
    // Bottom nav active state is managed by scroll spy - no manual override needed
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').slice(1);
            if (!targetId) return; // href="#" - ignore
            const el = document.getElementById(targetId);
            if (el) {
                e.preventDefault();
                const header = document.querySelector('header');
                const headerH = header ? header.offsetHeight : 80;
                const targetY = el.getBoundingClientRect().top + window.scrollY - headerH - 20;
                window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
                // Close mobile menu if open
                document.getElementById('mobile-menu')?.classList.add('hidden');
            }
        });
    });
    document.getElementById('wishlist-toggle')?.addEventListener('click', openWishlistModal);
    document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => setLang(btn.dataset.lang)));
    initScrollSpy();
});

let resizeTimer;
window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(renderCatalogSection, 250); });

// ===== SCROLL SPY – Highlight active nav on scroll =====
function initScrollSpy() {
    // Sections in page order (top → bottom)
    const sectionIds = ['brand-story', 'products-section', 'knowledge', 'contact'];

    // Cache all nav links (desktop + mobile menu + bottom nav)
    const navSelectors = 'header nav a.nav-link, #mobile-menu nav a';

    let currentActiveHref = null;
    let ticking = false;

    const setActive = (activeHref) => {
        if (currentActiveHref === activeHref) return; // no change, skip DOM work
        currentActiveHref = activeHref;

        // Desktop nav + mobile menu
        document.querySelectorAll(navSelectors).forEach(a => {
            if (a.getAttribute('href') === activeHref) {
                a.classList.add('nav-active');
            } else {
                a.classList.remove('nav-active');
            }
        });

        // Bottom nav (mobile) - "Home" (#) is active when no section matched
        document.querySelectorAll('.bottom-nav-item').forEach(a => {
            const href = a.getAttribute('href');
            if (href?.includes('zalo.me') || href?.includes('tel:')) return; // skip external links
            const isMatch = (href === activeHref) || (activeHref === null && href === '#');
            if (isMatch) {
                a.classList.add('active');
            } else {
                a.classList.remove('active');
            }
        });
    };

    const getDocumentTop = (el) => {
        // getBoundingClientRect().top is viewport-relative
        // Add scrollY to get document-absolute position - ALWAYS accurate
        return el.getBoundingClientRect().top + window.scrollY;
    };

    const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            ticking = false;

            const header = document.querySelector('header');
            const headerH = header ? header.offsetHeight : 80;
            // The "trigger line" - a point just below the header
            const triggerY = window.scrollY + headerH + 60;

            // Also detect if user scrolled near the bottom (for "contact" / footer)
            const nearBottom = (window.innerHeight + window.scrollY) >= (document.body.scrollHeight - 100);
            if (nearBottom) {
                setActive('#contact');
                return;
            }

            // Traverse bottom-up: first section whose top is at or above the trigger line wins
            let matched = null;
            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const el = document.getElementById(sectionIds[i]);
                if (el && getDocumentTop(el) <= triggerY) {
                    matched = '#' + sectionIds[i];
                    break;
                }
            }

            setActive(matched); // null = no section in view → all nav items deactivated
        });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Run after short delay so rendered content has settled
    setTimeout(onScroll, 200);
    // Also run after images/fonts/etc fully loaded
    window.addEventListener('load', () => setTimeout(onScroll, 100));
}
