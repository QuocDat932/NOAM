// NAM Jewelry - Enhanced JavaScript
const contactZalo = "0382539292";
const formatCurrency = (amount) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);

const categories = [
    { id: 'bo-trang-suc', name: 'Bộ Trang Sức' },
    { id: 'charm-bac', name: 'Charm Bạc' },
    { id: 'day-chuyen-nu', name: 'Dây Chuyền Nữ' },
    { id: 'lac-tay-nam', name: 'Lắc Tay Nam' },
    { id: 'lac-tay-nu', name: 'Lắc Tay Nữ' },
    { id: 'nhan', name: 'Nhẫn' },
    { id: 'vong-co-nu', name: 'Vòng Cổ Nữ' },
    { id: 'vong-tay', name: 'Vòng Tay' }
];

const commonDesc = "Sản phẩm được chế tác thủ công tinh xảo bởi những nghệ nhân hàng đầu tại NAM Jewelry. Sử dụng chất liệu cao cấp, đảm bảo độ sáng bóng và bền đẹp theo thời gian.";

// PRODUCTS DATA with real images from Img folder
const products = [
    // Bộ trang sức
    { id: 101, name: "Bộ Trang Sức Cỏ 4 Lá", price: 8500000, categoryId: "bo-trang-suc", isNew: true, code: "BTS-001", 
      image: "./Img/Bo-trang-suc/bo-trang-suc-co-4-la.jpg", inStock: true, 
      description: "Bộ trang sức cỏ 4 lá may mắn, thiết kế tinh tế mang lại vẻ đẹp sang trọng." },
    { id: 102, name: "Bộ Trang Sức Nhẫn Bông Tai", price: 12500000, categoryId: "bo-trang-suc", isNew: true, code: "BTS-002", 
      image: "./Img/Bo-trang-suc/bo-trang-suc-nhan-bong-tay-001.jpg", inStock: true, description: commonDesc },
    { id: 103, name: "Bộ Trang Sức Nhẫn Dây Chuyền", price: 15000000, categoryId: "bo-trang-suc", isNew: false, code: "BTS-003", 
      image: "./Img/Bo-trang-suc/bo-trang-suc-nhan-day-chuyen.jpg", inStock: true, description: commonDesc },

    // Charm bạc
    { id: 201, name: "Charm Bạc Trái Tim", price: 450000, categoryId: "charm-bac", isNew: true, code: "CB-001", 
      image: "./Img/Charm-bac/charm-bac-001.jpg", inStock: true, description: "Charm bạc 925 cao cấp, thiết kế trái tim dễ thương." },
    { id: 202, name: "Charm Bạc Ngôi Sao", price: 480000, categoryId: "charm-bac", isNew: false, code: "CB-002", 
      image: "./Img/Charm-bac/charm-bac-002.jpg", inStock: true, description: commonDesc },
    { id: 203, name: "Charm Bạc Hoa Cúc", price: 520000, categoryId: "charm-bac", isNew: true, code: "CB-003", 
      image: "./Img/Charm-bac/charm-bac-003.jpg", inStock: true, description: commonDesc },
    { id: 204, name: "Charm Bạc Bướm", price: 550000, categoryId: "charm-bac", isNew: false, code: "CB-004", 
      image: "./Img/Charm-bac/charm-bac-004.jpg", inStock: true, description: commonDesc },
    { id: 205, name: "Charm Bạc Mặt Trăng", price: 490000, categoryId: "charm-bac", isNew: true, code: "CB-005", 
      image: "./Img/Charm-bac/charm-bac-005.jpg", inStock: true, description: commonDesc },
    { id: 206, name: "Charm Bạc Vương Miện", price: 580000, categoryId: "charm-bac", isNew: false, code: "CB-006", 
      image: "./Img/Charm-bac/charm-bac-006.jpg", inStock: true, description: commonDesc },
    { id: 207, name: "Charm Bạc Chìa Khóa", price: 460000, categoryId: "charm-bac", isNew: true, code: "CB-007", 
      image: "./Img/Charm-bac/charm-bac-007.jpg", inStock: true, description: commonDesc },
    { id: 208, name: "Charm Bạc Cỏ 4 Lá", price: 510000, categoryId: "charm-bac", isNew: false, code: "CB-008", 
      image: "./Img/Charm-bac/charm-bac-008.jpg", inStock: true, description: commonDesc },
    { id: 209, name: "Charm Bạc Hình Tròn", price: 440000, categoryId: "charm-bac", isNew: true, code: "CB-009", 
      image: "./Img/Charm-bac/charm-bac-009.jpg", inStock: true, description: commonDesc },
    { id: 210, name: "Charm Bạc Giọt Nước", price: 470000, categoryId: "charm-bac", isNew: false, code: "CB-010", 
      image: "./Img/Charm-bac/charm-bac-010.jpg", inStock: true, description: commonDesc },
    { id: 211, name: "Charm Bạc Hình Vuông", price: 500000, categoryId: "charm-bac", isNew: true, code: "CB-011", 
      image: "./Img/Charm-bac/charm-bac-011.jpg", inStock: true, description: commonDesc },
    { id: 212, name: "Charm Bạc Infinity", price: 530000, categoryId: "charm-bac", isNew: false, code: "CB-012", 
      image: "./Img/Charm-bac/charm-bac-012.jpg", inStock: true, description: commonDesc },

    // Dây chuyền nữ
    { id: 301, name: "Dây Chuyền Nữ Thanh Lịch", price: 3500000, categoryId: "day-chuyen-nu", isNew: true, code: "DCN-001", 
      image: "./Img/Day-chuyen-nu/Day-chuyen-nu-001.jpg", inStock: true, description: "Dây chuyền vàng 18K, thiết kế thanh lịch cho phái đẹp." },
    { id: 302, name: "Dây Chuyền Nữ Sang Trọng", price: 4200000, categoryId: "day-chuyen-nu", isNew: false, code: "DCN-002", 
      image: "./Img/Day-chuyen-nu/Day-chuyen-nu-002.jpg", inStock: true, description: commonDesc },
    { id: 303, name: "Dây Chuyền Nữ Tinh Tế", price: 3800000, categoryId: "day-chuyen-nu", isNew: true, code: "DCN-003", 
      image: "./Img/Day-chuyen-nu/Day-chuyen-nu-003.jpg", inStock: true, description: commonDesc },
    { id: 304, name: "Dây Chuyền Nữ Đính Đá", price: 5500000, categoryId: "day-chuyen-nu", isNew: false, code: "DCN-004", 
      image: "./Img/Day-chuyen-nu/Day-chuyen-nu-004.jpg", inStock: true, description: commonDesc },
    { id: 305, name: "Dây Chuyền Nữ Trái Tim", price: 4000000, categoryId: "day-chuyen-nu", isNew: true, code: "DCN-005", 
      image: "./Img/Day-chuyen-nu/Day-chuyen-nu-005.jpg", inStock: true, description: commonDesc },
    { id: 306, name: "Dây Chuyền Nữ Ngọc Trai", price: 6200000, categoryId: "day-chuyen-nu", isNew: false, code: "DCN-006", 
      image: "./Img/Day-chuyen-nu/Day-chuyen-nu-006.jpg", inStock: true, description: commonDesc },
    { id: 307, name: "Dây Chuyền Nữ Mặt Tròn", price: 3900000, categoryId: "day-chuyen-nu", isNew: true, code: "DCN-007", 
      image: "./Img/Day-chuyen-nu/Day-chuyen-nu-007.jpg", inStock: true, description: commonDesc },
    { id: 308, name: "Dây Chuyền Nữ Cổ Điển", price: 4500000, categoryId: "day-chuyen-nu", isNew: false, code: "DCN-008", 
      image: "./Img/Day-chuyen-nu/Day-chuyen-nu-008.jpg", inStock: true, description: commonDesc },
    { id: 309, name: "Dây Chuyền Nữ Hiện Đại", price: 4800000, categoryId: "day-chuyen-nu", isNew: true, code: "DCN-009", 
      image: "./Img/Day-chuyen-nu/Day-chuyen-nu-009.jpg", inStock: true, description: commonDesc },
    { id: 310, name: "Dây Chuyền Nữ Đơn Giản", price: 3200000, categoryId: "day-chuyen-nu", isNew: false, code: "DCN-010", 
      image: "./Img/Day-chuyen-nu/Day-chuyen-nu-010.jpg", inStock: true, description: commonDesc },
    { id: 311, name: "Dây Chuyền Nữ Dây Xích", price: 3600000, categoryId: "day-chuyen-nu", isNew: true, code: "DCN-011", 
      image: "./Img/Day-chuyen-nu/Day-chuyen-nu-011.jpg", inStock: true, description: commonDesc },
    { id: 312, name: "Dây Chuyền Nữ Mặt Vuông", price: 4100000, categoryId: "day-chuyen-nu", isNew: false, code: "DCN-012", 
      image: "./Img/Day-chuyen-nu/Day-chuyen-nu-012.jpg", inStock: true, description: commonDesc },
    { id: 313, name: "Dây Chuyền Nữ Tourmaline", price: 7500000, categoryId: "day-chuyen-nu", isNew: true, code: "DCN-013", 
      image: "./Img/Day-chuyen-nu/Day-chuyen-nu-013-Tourmaline.jpg", inStock: true, description: "Dây chuyền đính đá Tourmaline thiên nhiên cao cấp." },
    { id: 314, name: "Dây Chuyền Nữ Luxury", price: 5800000, categoryId: "day-chuyen-nu", isNew: false, code: "DCN-014", 
      image: "./Img/Day-chuyen-nu/Day-chuyen-nu-014.jpg", inStock: true, description: commonDesc },

    // Lắc tay nam
    { id: 401, name: "Lắc Tay Nam Mạnh Mẽ", price: 8500000, categoryId: "lac-tay-nam", isNew: true, code: "LTN-001", 
      image: "./Img/Lac-tay-nam/128L16-C02500_c8-Ptsj.jpg", inStock: true, description: "Lắc tay nam vàng 18K, thiết kế mạnh mẽ, nam tính." },
    { id: 402, name: "Lắc Tay Nam Sang Trọng", price: 9200000, categoryId: "lac-tay-nam", isNew: false, code: "LTN-002", 
      image: "./Img/Lac-tay-nam/128L17-C03000_1L3-Ptsj.jpg", inStock: true, description: commonDesc },
    { id: 403, name: "Lắc Tay Nam Cổ Điển", price: 7800000, categoryId: "lac-tay-nam", isNew: true, code: "LTN-003", 
      image: "./Img/Lac-tay-nam/CTL1143-C0700_4c7-Ptsj.jpg", inStock: true, description: commonDesc },
    { id: 404, name: "Lắc Tay Nam Hiện Đại", price: 10500000, categoryId: "lac-tay-nam", isNew: false, code: "LTN-004", 
      image: "./Img/Lac-tay-nam/KL010-C03400_8c-Ptsj.jpg", inStock: true, description: commonDesc },

    // Lắc tay nữ
    { id: 501, name: "Lắc Tay Nữ Tinh Tế", price: 5200000, categoryId: "lac-tay-nu", isNew: true, code: "LTNU-001", 
      image: "./Img/Lac-tay-nu/L005675-09290-Ptsj.jpg", inStock: true, description: "Lắc tay nữ vàng trắng, thiết kế tinh tế, nữ tính." },
    { id: 502, name: "Lắc Tay Nữ Thanh Lịch", price: 6100000, categoryId: "lac-tay-nu", isNew: false, code: "LTNU-002", 
      image: "./Img/Lac-tay-nu/L006294-013040-Ptsj.jpg", inStock: true, description: commonDesc },
    { id: 503, name: "Lắc Tay Nữ Đính Đá", price: 7200000, categoryId: "lac-tay-nu", isNew: true, code: "LTNU-003", 
      image: "./Img/Lac-tay-nu/L006727-010490-Ptsj.jpg", inStock: true, description: commonDesc },
    { id: 504, name: "Lắc Tay Nữ Sang Trọng", price: 5800000, categoryId: "lac-tay-nu", isNew: false, code: "LTNU-004", 
      image: "./Img/Lac-tay-nu/L006767-07680-Ptsj.jpg", inStock: true, description: commonDesc },
    { id: 505, name: "Lắc Tay Nữ Luxury", price: 8500000, categoryId: "lac-tay-nu", isNew: true, code: "LTNU-005", 
      image: "./Img/Lac-tay-nu/L007218-015130-Ptsj.jpg", inStock: true, description: commonDesc },

    // Nhẫn
    { id: 601, name: "Nhẫn Kim Cương Solitaire", price: 25500000, categoryId: "nhan", isNew: true, code: "N-001", 
      image: "./Img/Nhan/nhan-001.jpg", inStock: true, description: "Nhẫn kim cương thiên nhiên, thiết kế Solitaire kinh điển." },

    // Vòng cổ nữ
    { id: 801, name: "Vòng Cổ Nữ Sang Trọng", price: 6800000, categoryId: "vong-co-nu", isNew: true, code: "VCN-001", 
      image: "./Img/Vong-co-nu/vong-co-nu-001.jpg", inStock: true, description: "Vòng cổ nữ vàng 18K, thiết kế sang trọng, quý phái." },

    // Vòng tay
    { id: 701, name: "Vòng Tay Ngọc Trai Nuôi", price: 4500000, categoryId: "vong-tay", isNew: true, code: "VT-001", 
      image: "./Img/Vong-tay/vong-tay-ngoc-trai-nuoi.jpg", inStock: true, description: "Vòng tay ngọc trai nuôi cấy cao cấp, độ bóng hoàn hảo." },
    { id: 702, name: "Vòng Tay Ngọc Trai Topaz", price: 6200000, categoryId: "vong-tay", isNew: false, code: "VT-002", 
      image: "./Img/Vong-tay/vong-tay-ngoc-trai-topaz.jpg", inStock: true, description: "Vòng tay kết hợp ngọc trai và đá Topaz xanh." },
    { id: 703, name: "Vòng Tay Labradorite Moonstone", price: 5800000, categoryId: "vong-tay", isNew: true, code: "VT-003", 
      image: "./Img/Vong-tay/vong-tay-quan-3-LABRADORITE-MOONSTONE.jpg", inStock: true, description: "Vòng tay đá quý Labradorite và Moonstone thiên nhiên." }
];

let currentSort = 'default';
let filteredProducts = [...products];
let isShowingAllNew = false;

// ===== SEARCH FUNCTIONALITY =====
function initSearch() {
    const searchInputs = ['search-input', 'search-input-mobile'];
    searchInputs.forEach(inputId => {
        const input = document.getElementById(inputId);
        const resultsId = inputId.includes('mobile') ? 'search-results-mobile' : 'search-results';
        const resultsContainer = document.getElementById(resultsId);

        if (input) {
            input.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase().trim();
                if (query.length < 2) {
                    resultsContainer.classList.add('hidden');
                    return;
                }

                const results = products.filter(p =>
                    p.name.toLowerCase().includes(query) ||
                    p.code.toLowerCase().includes(query) ||
                    categories.find(c => c.id === p.categoryId)?.name.toLowerCase().includes(query)
                );

                if (results.length > 0) {
                    resultsContainer.innerHTML = results.slice(0, 5).map(p => `
                        <div class="search-result-item flex gap-3" onclick="openModal(${p.id}); document.getElementById('${inputId}').value=''; document.getElementById('${resultsId}').classList.add('hidden');">
                            <img src="${p.image}" alt="${p.name}" class="w-12 h-12 object-cover rounded">
                            <div class="flex-1">
                                <p class="font-medium text-sm">${p.name}</p>
                                <p class="text-xs text-gray-500">${formatCurrency(p.price)}</p>
                            </div>
                        </div>
                    `).join('');
                    resultsContainer.classList.remove('hidden');
                } else {
                    resultsContainer.innerHTML = '<div class="p-4 text-center text-gray-500 text-sm">Không tìm thấy sản phẩm</div>';
                    resultsContainer.classList.remove('hidden');
                }
            });

            // Close search results when clicking outside
            document.addEventListener('click', (e) => {
                if (!input.contains(e.target) && !resultsContainer.contains(e.target)) {
                    resultsContainer.classList.add('hidden');
                }
            });
        }
    });
}

// ===== SORT FUNCTIONALITY =====
function sortProducts() {
    currentSort = document.getElementById('sort-select').value;
    
    // Always show all new products
    filteredProducts = products.filter(p => p.isNew);

    // Sort
    switch (currentSort) {
        case 'price-asc':
            filteredProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filteredProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name-asc':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        default:
            // Default: keep original order (by ID)
            filteredProducts.sort((a, b) => a.id - b.id);
    }

    renderNewArrivals();
}

// ===== LIGHTBOX FUNCTIONALITY =====
function openLightbox() {
    const mainImg = document.getElementById('modal-img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = mainImg.src;
    lightbox.classList.add('active');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

// ===== SCROLL PROGRESS BAR =====
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('scroll-progress').style.width = scrolled + '%';

    // Back to top button
    const backToTop = document.getElementById('back-to-top');
    if (winScroll > 300) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

// ===== BACK TO TOP =====
document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// ===== CATEGORY TABS =====
function initCategoryTabs() {
    const container = document.getElementById('category-tabs-container');
    if (container) {
        container.innerHTML = categories.map(cat => `
            <a href="#section-${cat.id}" class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-brand-500 hover:border-b-2 hover:border-brand-500 transition whitespace-nowrap" onclick="scrollToSection('${cat.id}', event)">
                ${cat.name}
            </a>
        `).join('');
    }
}

// Scroll to section with offset for sticky header
function scrollToSection(sectionId, event) {
    if (event) event.preventDefault();
    const section = document.getElementById(`section-${sectionId}`);
    if (section) {
        const headerHeight = 180; // Height of sticky header + tabs
        const sectionTop = section.offsetTop - headerHeight;
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }
}

// ===== BOTTOM NAV ACTIVE STATE =====
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.bottom-nav-item').forEach(item => {
        item.addEventListener('click', function (e) {
            if (!this.href.includes('zalo.me')) {
                document.querySelectorAll('.bottom-nav-item').forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});

// ===== MODAL POPUP LOGIC =====
function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    // Fill Data
    document.getElementById('modal-name').innerText = product.name;
    document.getElementById('modal-category').innerText = categories.find(c => c.id === product.categoryId)?.name || 'Sản phẩm';
    document.getElementById('modal-price').innerText = formatCurrency(product.price);
    document.getElementById('modal-code').innerText = product.code;
    document.getElementById('modal-desc').innerText = product.description || "Đang cập nhật...";

    const statusEl = document.getElementById('modal-status');
    if (product.inStock) {
        statusEl.className = "text-green-600 font-medium";
        statusEl.innerHTML = '<i class="fas fa-check-circle mr-1"></i>Còn hàng';
    } else {
        statusEl.className = "text-red-500 font-medium";
        statusEl.innerHTML = '<i class="fas fa-times-circle mr-1"></i>Tạm hết hàng';
    }

    const linkZalo = `https://zalo.me/${contactZalo}?text=Tôi quan tâm sản phẩm ${product.name} mã ${product.code}`;
    document.getElementById('modal-zalo-btn').href = linkZalo;

    // Image Gallery Logic
    const mainImg = document.getElementById('modal-img');
    const thumbsContainer = document.getElementById('modal-thumbnails');
    mainImg.src = product.image;
    mainImg.style.opacity = '1';
    thumbsContainer.innerHTML = '';

    const images = [product.image];
    if (product.image1) images.push(product.image1);
    if (product.image2) images.push(product.image2);
    if (product.image3) images.push(product.image3);

    images.forEach((imgSrc, index) => {
        const thumb = document.createElement('img');
        thumb.src = imgSrc;
        thumb.className = `w-12 h-12 md:w-16 md:h-16 object-cover cursor-pointer border-2 border-transparent hover:border-brand-500 rounded-md transition duration-200 flex-shrink-0 ${index === 0 ? 'thumb-active' : 'opacity-60 hover:opacity-100'}`;
        thumb.onclick = () => {
            mainImg.style.opacity = '0.5';
            setTimeout(() => {
                mainImg.src = imgSrc;
                mainImg.style.opacity = '1';
            }, 100);
            Array.from(thumbsContainer.children).forEach(c => c.classList.remove('thumb-active'));
            thumb.classList.add('thumb-active');
        };
        thumbsContainer.appendChild(thumb);
    });

    document.getElementById('product-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('product-modal').classList.add('hidden');
}

// ===== RENDER UI LOGIC =====
const createProductCard = (product, isHidden = false) => {
    const isWishlisted = wishlist.includes(product.id);
    return `
        <article class="product-card group bg-white rounded-lg shadow-sm hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100 flex flex-col h-full animate-fade-in relative ${isHidden ? 'hidden' : ''}">
            <!-- Wishlist Button -->
            <button onclick="toggleWishlist(${product.id}, event)" class="wishlist-btn ${isWishlisted ? 'active' : ''}">
                <i class="fas fa-heart"></i>
            </button>
            
            <!-- Product Image -->
            <div class="relative overflow-hidden aspect-square cursor-pointer" onclick="openModal(${product.id})">
                <img src="${product.image}" alt="${product.name}" class="product-img w-full h-full object-cover">
                ${product.isNew ? '<span class="absolute top-2 left-2 bg-brand-500 text-white text-[8px] md:text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm">New</span>' : ''}
            </div>
            
            <!-- Product Info -->
            <div class="p-3 md:p-4 flex flex-col flex-grow text-center">
                <h3 class="font-serif font-bold text-gray-800 text-xs md:text-lg mb-1 md:mb-2 line-clamp-2 hover:text-brand-500 transition cursor-pointer" onclick="openModal(${product.id})">${product.name}</h3>
                <div class="mt-auto">
                    <p class="text-brand-800 font-bold text-sm md:text-lg mb-2">${formatCurrency(product.price)}</p>
                    
                    <!-- Action Buttons -->
                    <div class="flex gap-2 mt-2">
                        <button onclick="openModal(${product.id})" class="flex-1 bg-brand-500 text-white py-2 px-3 rounded-lg text-xs hover:bg-brand-600 transition ripple">
                            Xem chi tiết
                        </button>
                        <button onclick="shareProduct(${product.id}, event)" class="bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-xs hover:bg-gray-200 transition">
                            <i class="fas fa-share-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    `;
};

// Render New Arrivals
function renderNewArrivals() {
    const container = document.getElementById('new-products-grid');
    const btn = document.getElementById('load-more-new-btn');
    const limit = isShowingAllNew ? filteredProducts.length : 4;

    container.innerHTML = filteredProducts.map((p, index) => createProductCard(p, index >= limit)).join('');

    // Hide button if few products
    if (filteredProducts.length <= 4) btn.classList.add('hidden');
    else btn.classList.remove('hidden');

    btn.innerText = isShowingAllNew ? "Thu gọn" : "Xem tất cả sản phẩm mới";
}

function toggleNewProducts() {
    isShowingAllNew = !isShowingAllNew;
    renderNewArrivals();
}

// Render Collections
function renderCollections() {
    const container = document.getElementById('dynamic-categories-container');
    container.innerHTML = '';

    categories.forEach(cate => {
        const cateProducts = products.filter(p => p.categoryId === cate.id);
        if (cateProducts.length === 0) return;

        const sectionId = `section-${cate.id}`;
        const gridId = `grid-${cate.id}`;
        const btnId = `btn-${cate.id}`;
        const displayCount = window.innerWidth < 768 ? 4 : 5;
        const initialHTML = cateProducts.map((p, idx) => createProductCard(p, idx >= displayCount)).join('');
        const showButton = cateProducts.length > displayCount;

        const sectionHTML = `
            <section class="py-8 md:py-12 container mx-auto px-4 border-b last:border-0" id="${sectionId}">
                <div class="flex items-center justify-between mb-4 md:mb-8">
                    <div>
                        <h3 class="text-xl md:text-3xl font-serif font-bold text-brand-900">${cate.name}</h3>
                        <div class="h-1 w-8 md:w-12 bg-brand-500 mt-2"></div>
                    </div>
                </div>
                <div id="${gridId}" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 transition-all">
                    ${initialHTML}
                </div>
                ${showButton ? `
                    <div class="text-center mt-6 md:mt-8">
                        <button id="${btnId}" onclick="toggleCategory('${cate.id}')" class="text-brand-800 text-xs md:text-base font-medium hover:text-brand-500 transition border-b border-brand-800 pb-1">
                            Xem tất cả <i class="fas fa-chevron-down ml-1"></i>
                        </button>
                    </div>
                ` : ''}
            </section>
        `;
        container.innerHTML += sectionHTML;
    });
}

function toggleCategory(cateId) {
    const grid = document.getElementById(`grid-${cateId}`);
    const btn = document.getElementById(`btn-${cateId}`);
    const cards = grid.children;
    let isExpanded = btn.getAttribute('data-expanded') === 'true';
    const displayCount = window.innerWidth < 768 ? 4 : 5;

    if (!isExpanded) {
        for (let card of cards) card.classList.remove('hidden');
        btn.innerHTML = `Thu gọn <i class="fas fa-chevron-up ml-1"></i>`;
        btn.setAttribute('data-expanded', 'true');
    } else {
        for (let i = 0; i < cards.length; i++) {
            if (i >= displayCount) cards[i].classList.add('hidden');
        }
        btn.innerHTML = `Xem tất cả <i class="fas fa-chevron-down ml-1"></i>`;
        btn.setAttribute('data-expanded', 'false');
        document.getElementById(`section-${cateId}`).scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ===== INIT ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', () => {
    renderNewArrivals();
    renderCollections();
    initSearch();
    initCategoryTabs();
    
    // Fix scroll offset for all anchor links
    document.querySelectorAll('a[href^="#section-"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').replace('#section-', '');
            scrollToSection(sectionId);
        });
    });
    
    // Fix scroll offset for collections link
    document.querySelectorAll('a[href="#collections-section"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const section = document.getElementById('collections-section');
            if (section) {
                const headerHeight = 180;
                const sectionTop = section.offsetTop - headerHeight;
                window.scrollTo({
                    top: sectionTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Re-render on resize
window.addEventListener('resize', () => {
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(() => {
        renderCollections();
    }, 250);
});

// Toggle Mobile Menu
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});


// ===== MỤC 9: MICRO-INTERACTIONS =====

// Toast Notifications
function showToast(message, type = 'success') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icon = type === 'success' ? 'check-circle' : type === 'error' ? 'times-circle' : 'info-circle';
    const color = type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6';
    
    toast.innerHTML = `
        <i class="fas fa-${icon}" style="color: ${color}; font-size: 20px;"></i>
        <span class="flex-1">${message}</span>
        <button onclick="this.parentElement.remove()" class="text-gray-400 hover:text-gray-600">
            <i class="fas fa-times"></i>
        </button>
        <div class="toast-progress" style="color: ${color}"></div>
    `;
    
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideInRight 0.3s ease-out reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Animated Counter
function animateCounter() {
    const counters = document.querySelectorAll('.counter-number');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / speed;
        
        const updateCount = () => {
            const count = +counter.innerText;
            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCount();
    });
}

// Trigger counter animation when scrolling into view
let counterAnimated = false;
window.addEventListener('scroll', () => {
    if (!counterAnimated) {
        const counters = document.querySelector('.counter-number');
        if (counters) {
            const rect = counters.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                animateCounter();
                counterAnimated = true;
            }
        }
    }
});

// ===== MỤC 7: INTERACTIVE ELEMENTS =====

// Wishlist Management
let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');

function toggleWishlist(productId, event) {
    event.stopPropagation();
    
    const index = wishlist.indexOf(productId);
    if (index > -1) {
        wishlist.splice(index, 1);
        showToast('Đã xóa khỏi danh sách yêu thích', 'info');
    } else {
        wishlist.push(productId);
        showToast('Đã thêm vào danh sách yêu thích', 'success');
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    updateWishlistBadge();
    renderNewArrivals();
    renderCollections();
}

function updateWishlistBadge() {
    const badge = document.getElementById('wishlist-badge');
    if (wishlist.length > 0) {
        badge.textContent = wishlist.length;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }
}

// Open Wishlist Modal
document.getElementById('wishlist-toggle')?.addEventListener('click', () => {
    const modal = document.getElementById('wishlist-modal');
    const content = document.getElementById('wishlist-content');
    
    if (wishlist.length === 0) {
        content.innerHTML = `
            <div class="text-center py-12">
                <i class="fas fa-heart text-6xl text-gray-300 mb-4"></i>
                <p class="text-gray-600">Chưa có sản phẩm yêu thích</p>
            </div>
        `;
    } else {
        const wishlistProducts = products.filter(p => wishlist.includes(p.id));
        content.innerHTML = `
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                ${wishlistProducts.map(p => `
                    <div class="border rounded-lg overflow-hidden">
                        <img src="${p.image}" alt="${p.name}" class="w-full aspect-square object-cover cursor-pointer" onclick="openModal(${p.id}); closeWishlistModal();">
                        <div class="p-3">
                            <h4 class="font-bold text-sm mb-1">${p.name}</h4>
                            <p class="text-brand-500 font-bold text-sm">${formatCurrency(p.price)}</p>
                            <button onclick="toggleWishlist(${p.id}, event); document.getElementById('wishlist-toggle').click(); document.getElementById('wishlist-toggle').click();" class="mt-2 w-full text-red-500 border border-red-500 py-1 rounded text-xs hover:bg-red-50 transition">
                                Xóa
                            </button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    modal.classList.remove('hidden');
});

function closeWishlistModal() {
    document.getElementById('wishlist-modal').classList.add('hidden');
}

// Share Product
let currentShareProduct = null;

function shareProduct(productId, event) {
    event.stopPropagation();
    currentShareProduct = products.find(p => p.id === productId);
    document.getElementById('share-modal').classList.add('active');
}

function closeShareModal() {
    document.getElementById('share-modal').classList.remove('active');
}

function shareToFacebook() {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
    showToast('Đang mở Facebook...', 'info');
}

function shareToZalo() {
    const text = currentShareProduct ? `Xem sản phẩm ${currentShareProduct.name} - ${formatCurrency(currentShareProduct.price)}` : '';
    const url = encodeURIComponent(window.location.href);
    window.open(`https://zalo.me/share?url=${url}&text=${encodeURIComponent(text)}`, '_blank');
    showToast('Đang mở Zalo...', 'info');
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href);
    showToast('Đã sao chép link!', 'success');
    closeShareModal();
}

// ===== MỤC 10: ENHANCED MODAL =====

// Add Related Products to Modal
function addRelatedProducts(currentProduct) {
    const relatedProducts = products
        .filter(p => p.categoryId === currentProduct.categoryId && p.id !== currentProduct.id)
        .slice(0, 4);
    
    if (relatedProducts.length > 0) {
        const relatedSection = `
            <div class="mt-6 pt-6 border-t">
                <h4 class="font-bold text-base mb-4">Sản phẩm liên quan</h4>
                <div class="related-products-scroll">
                    ${relatedProducts.map(p => `
                        <div class="min-w-[150px] cursor-pointer" onclick="openModal(${p.id})">
                            <img src="${p.image}" class="w-full aspect-square object-cover rounded-lg mb-2">
                            <p class="text-xs font-medium line-clamp-2">${p.name}</p>
                            <p class="text-sm font-bold text-brand-500">${formatCurrency(p.price)}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        return relatedSection;
    }
    return '';
}

// Update openModal to include related products and quick buy
const originalOpenModal = openModal;
window.openModal = function(productId) {
    originalOpenModal(productId);
    
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    // Add related products
    const modalContent = document.querySelector('.modal-content');
    const relatedHTML = addRelatedProducts(product);
    if (relatedHTML) {
        const existingRelated = modalContent.querySelector('.related-products-scroll');
        if (existingRelated) {
            existingRelated.closest('.mt-6').remove();
        }
        modalContent.insertAdjacentHTML('beforeend', relatedHTML);
    }
    
    // Add Quick Buy section
    const quickBuyHTML = `
        <div class="mt-4 p-4 bg-gray-50 rounded-lg">
            <h4 class="font-bold text-sm mb-3">Mua nhanh</h4>
            <div class="quantity-selector mb-3">
                <button class="quantity-btn" onclick="changeQuantity(-1)">
                    <i class="fas fa-minus"></i>
                </button>
                <span id="quantity-value" class="font-bold">1</span>
                <button class="quantity-btn" onclick="changeQuantity(1)">
                    <i class="fas fa-plus"></i>
                </button>
            </div>
            <button onclick="quickBuy(${productId})" class="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition font-bold">
                <i class="fas fa-shopping-cart mr-2"></i>Mua ngay
            </button>
        </div>
    `;
    
    const existingQuickBuy = modalContent.querySelector('.quantity-selector');
    if (!existingQuickBuy) {
        const actionsDiv = modalContent.querySelector('.flex.flex-col.gap-2');
        actionsDiv.insertAdjacentHTML('beforebegin', quickBuyHTML);
    }
};

let currentQuantity = 1;

function changeQuantity(delta) {
    currentQuantity = Math.max(1, currentQuantity + delta);
    document.getElementById('quantity-value').textContent = currentQuantity;
}

function quickBuy(productId) {
    const product = products.find(p => p.id === productId);
    const message = `Tôi muốn mua ${currentQuantity} ${product.name} (${product.code}) - Tổng: ${formatCurrency(product.price * currentQuantity)}`;
    const zaloLink = `https://zalo.me/${contactZalo}?text=${encodeURIComponent(message)}`;
    window.open(zaloLink, '_blank');
    showToast(`Đang chuyển đến Zalo để đặt ${currentQuantity} sản phẩm...`, 'success');
    currentQuantity = 1;
}

// Fullscreen Modal Toggle
function toggleFullscreen() {
    const modal = document.querySelector('#product-modal > div');
    modal.classList.toggle('modal-fullscreen');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    updateWishlistBadge();
});
