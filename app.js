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
    instagram: 'https://www.instagram.com/noam_by_nancy/',
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
            newArrivals: 'Sản Phẩm Mới',
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
            tagline: 'Nghệ thuật tạo tác từ thiên nhiên.',
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
            tagline: 'Art crafted from nature.',
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
                    { id: 'khuyen-tai', name: { vi: 'Khuyên Tai', en: 'Earring' } },
                    { id: 'day-chuyen', name: { vi: 'Dây Chuyền', en: 'Necklace' } },
                    { id: 'lac-tay', name: { vi: 'Lắc Tay', en: 'Bracelet' } },
                    { id: 'vong-tay', name: { vi: 'Vòng Tay', en: 'Bangle' } },
                    { id: 'chuoi-vong-co-ngoc-trai', name: { vi: 'Chuỗi Vòng Cổ Ngọc Trai', en: 'Pearl Necklaces' } },
                    { id: 'bo-trang-suc', name: { vi: 'Bộ Trang Sức', en: 'Jewelry Set' } },
                    { id: 'charm', name: { vi: 'Charm', en: 'Charm' } },
                    { id: 'kieng', name: { vi: 'Kiềng', en: 'Torc' } },
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
    {
        id: 'collection',
        name: { vi: 'Bộ Sưu Tập', en: 'Collections' },
        icon: 'fa-gift',
        filters: [],
    },
];

// ===== PRODUCTS =====
// code format: {CATALOG}-{TYPE}-{SEQ}  (vd: JW-CH-001, BG-TX-001)
// catalogId: trỏ tới catalog.id
// tags: object với key = filter.id, value = option.id (match catalog.filters)
// Thêm sản phẩm mới: copy 1 object, đổi thông tin, UI tự render.
const products = [
    ...(typeof data_bo_trang_suc !== 'undefined' ? data_bo_trang_suc : []),
    ...(typeof data_charm !== 'undefined' ? data_charm : []),
    ...(typeof data_day_chuyen !== 'undefined' ? data_day_chuyen : []),
    ...(typeof data_lac_tay !== 'undefined' ? data_lac_tay : []),
    ...(typeof data_chuoi_vong_co !== 'undefined' ? data_chuoi_vong_co : []),
    ...(typeof data_nhan !== 'undefined' ? data_nhan : []),
    ...(typeof data_khuyen_tai !== 'undefined' ? data_khuyen_tai : []),
    ...(typeof data_vong_tay !== 'undefined' ? data_vong_tay : []),
    ...(typeof data_kieng !== 'undefined' ? data_kieng : []),
    ...(typeof data_bag !== 'undefined' ? data_bag : []),
    ...(typeof data_collection !== 'undefined' ? data_collection : []),
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
    heroPosterIndex: 0,
    popupPosterIndex: 0,
    heroTimer: null,
    popupTimer: null
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

function renderCollectionSection() {
    const container = document.getElementById('collection-grid');
    if (!container) return;
    const collections = products.filter(p => p.catalogId === 'collection');

    if (collections.length === 0) {
        container.innerHTML = `<div class="col-span-full text-center py-12"><i class="fas fa-box-open text-5xl text-gray-300 mb-4"></i><p class="text-gray-500">${t('products.noResult')}</p></div>`;
        return;
    }

    container.innerHTML = collections.map(product => {
        const isWishlisted = state.wishlist.includes(product.id);
        return `
            <article class="collection-card group bg-white rounded-lg shadow-md hover:shadow-2xl transition duration-300 overflow-hidden border border-gray-100 flex flex-col h-full animate-fade-in relative">
                <button onclick="toggleWishlist(${product.id}, event)" class="wishlist-btn ${isWishlisted ? 'active' : ''} absolute top-3 right-3 z-10">
                    <i class="fas fa-heart"></i>
                </button>
                
                <div class="relative overflow-hidden aspect-square bg-gray-50 cursor-pointer group/carousel" onclick="openModal(${product.id})">
                    <img src="${product.image}" alt="${localized(product.name)}" class="collection-main-img w-full h-full object-cover transition duration-500">
                    ${product.isNew ? '<span class="absolute top-3 left-3 bg-brand-500 text-white text-[9px] md:text-[11px] font-bold px-2.5 py-1 uppercase tracking-wider rounded-full shadow-md">Premium</span>' : ''}
                    <div class="absolute inset-0 bg-black/0 group-hover/carousel:bg-black/10 transition flex items-center justify-center">
                        <i class="fas fa-search-plus text-white text-3xl opacity-0 group-hover/carousel:opacity-100 transition"></i>
                    </div>
                </div>
                
                <div class="p-4 md:p-5 flex flex-col flex-grow">
                    <span class="text-[10px] md:text-xs font-bold text-brand-500 uppercase tracking-widest mb-2 block">Bộ Sưu Tập</span>
                    <h3 class="font-serif font-bold text-gray-800 text-sm md:text-lg mb-3 line-clamp-2 hover:text-brand-500 transition cursor-pointer" onclick="openModal(${product.id})">${localized(product.name)}</h3>
                    
                    <p class="text-gray-600 text-xs md:text-sm line-clamp-2 mb-4 flex-grow">${localized(product.description)?.split('\n')[0]}</p>
                    
                    <div class="flex gap-2">
                        <button onclick="openModal(${product.id})" class="flex-1 bg-brand-900 text-brand-gold py-2 px-3 rounded-lg text-xs hover:bg-brand-gold hover:text-brand-900 transition ripple font-bold uppercase">${t('products.viewDetail')}</button>
                        <button onclick="shareProduct(${product.id}, event)" class="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-xs hover:bg-gray-200 transition"><i class="fas fa-share-alt"></i></button>
                    </div>
                </div>
            </article>`;
    }).join('');
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
    renderCollectionSection();
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

    let imageArray = [];
    if (product.images && Array.isArray(product.images)) {
        imageArray = product.images.filter(Boolean);
    } else {
        imageArray = [
            product.image,
            product.image1,
            product.image2,
            product.image3,
            product.image4,
            product.image5,
            product.image6,
            product.image7,
            product.image8,
            product.image9
        ].filter(Boolean);
    }
    imageArray.forEach((src, i) => {
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
// ===== HERO SLIDESHOW =====
function initHeroSlideshow() {
    const container = document.getElementById('hero-slideshow-container');
    const dotsContainer = document.getElementById('hero-slideshow-dots');
    if (!container || typeof data_poster_page === 'undefined' || data_poster_page.length === 0) return;

    // Render slides
    container.innerHTML = data_poster_page.map((item, index) => `
        <a href="${item.link || '#'}" class="hero-slide-link">
            <img src="${item.image}" alt="Banner ${item.id}" class="hero-slide ${index === 0 ? 'active' : ''}">
        </a>
    `).join('');

    // Clear dots
    if (dotsContainer) dotsContainer.innerHTML = '';

    if (data_poster_page.length <= 1) return;

    // Render dots
    if (dotsContainer) {
        dotsContainer.innerHTML = data_poster_page.map((_, index) => `
            <button class="slideshow-dot ${index === 0 ? 'active' : ''}" onclick="goToHeroSlide(${index})"></button>
        `).join('');
    }

    const startTimer = () => {
        state.heroTimer = setInterval(() => {
            const slides = container.querySelectorAll('.hero-slide');
            const dots = dotsContainer ? dotsContainer.querySelectorAll('.slideshow-dot') : [];
            if (slides.length === 0) return;

            slides[state.heroPosterIndex].classList.remove('active');
            if (dots[state.heroPosterIndex]) dots[state.heroPosterIndex].classList.remove('active');

            state.heroPosterIndex = (state.heroPosterIndex + 1) % slides.length;

            slides[state.heroPosterIndex].classList.add('active');
            if (dots[state.heroPosterIndex]) dots[state.heroPosterIndex].classList.add('active');
        }, 8000);
    };

    window.goToHeroSlide = (index) => {
        clearInterval(state.heroTimer);
        const slides = container.querySelectorAll('.hero-slide');
        const dots = dotsContainer ? dotsContainer.querySelectorAll('.slideshow-dot') : [];
        if (slides.length === 0) return;

        slides[state.heroPosterIndex].classList.remove('active');
        if (dots[state.heroPosterIndex]) dots[state.heroPosterIndex].classList.remove('active');

        state.heroPosterIndex = index;

        slides[state.heroPosterIndex].classList.add('active');
        if (dots[state.heroPosterIndex]) dots[state.heroPosterIndex].classList.add('active');

        startTimer();
    };

    state.heroPosterIndex = 0;
    startTimer();
}

// ===== POSTER / SPLASH SCREEN (POPUP SLIDESHOW) =====
function initPoster() {
    const poster = document.getElementById('poster-splash');
    const closeBtn = document.getElementById('poster-close');
    const container = document.getElementById('popup-slideshow-container');
    const dotsContainer = document.getElementById('popup-slideshow-dots');
    if (!poster || !container || typeof data_poster_popup === 'undefined' || data_poster_popup.length === 0) {
        poster?.classList.add('hidden');
        return;
    }

    // Render slides
    container.innerHTML = data_poster_popup.map((item, index) => {
        const isClickable = item.link && item.link.trim() !== "";
        const imgHtml = `<img src="${item.image}" alt="Popup Poster ${item.id}" class="popup-slide ${index === 0 ? 'active' : ''}">`;
        if (isClickable) {
            return `<a href="${item.link}" target="_blank">${imgHtml}</a>`;
        }
        return imgHtml;
    }).join('');

    // Clear dots
    if (dotsContainer) dotsContainer.innerHTML = '';

    const closePoster = () => {
        if (state.popupTimer) {
            clearInterval(state.popupTimer);
            state.popupTimer = null;
        }
        poster.classList.add('closing');
        setTimeout(() => poster.classList.add('hidden'), 300);
    };

    closeBtn.addEventListener('click', closePoster);
    poster.addEventListener('click', (e) => { if (e.target === poster) closePoster(); });

    if (data_poster_popup.length <= 1) return;

    // Render dots
    if (dotsContainer) {
        dotsContainer.innerHTML = data_poster_popup.map((_, index) => `
            <button class="slideshow-dot ${index === 0 ? 'active' : ''}" onclick="goToPopupSlide(${index})"></button>
        `).join('');
    }

    const startTimer = () => {
        state.popupTimer = setInterval(() => {
            const slides = container.querySelectorAll('.popup-slide');
            const dots = dotsContainer ? dotsContainer.querySelectorAll('.slideshow-dot') : [];
            if (slides.length === 0) return;

            slides[state.popupPosterIndex].classList.remove('active');
            if (dots[state.popupPosterIndex]) dots[state.popupPosterIndex].classList.remove('active');

            state.popupPosterIndex = (state.popupPosterIndex + 1) % slides.length;

            slides[state.popupPosterIndex].classList.add('active');
            if (dots[state.popupPosterIndex]) dots[state.popupPosterIndex].classList.add('active');
        }, 8000);
    };

    window.goToPopupSlide = (index) => {
        clearInterval(state.popupTimer);
        const slides = container.querySelectorAll('.popup-slide');
        const dots = dotsContainer ? dotsContainer.querySelectorAll('.slideshow-dot') : [];
        if (slides.length === 0) return;

        slides[state.popupPosterIndex].classList.remove('active');
        if (dots[state.popupPosterIndex]) dots[state.popupPosterIndex].classList.remove('active');

        state.popupPosterIndex = index;

        slides[state.popupPosterIndex].classList.add('active');
        if (dots[state.popupPosterIndex]) dots[state.popupPosterIndex].classList.add('active');

        startTimer();
    };

    state.popupPosterIndex = 0;
    startTimer();
}

document.addEventListener('DOMContentLoaded', () => {
    initHeroSlideshow();
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
