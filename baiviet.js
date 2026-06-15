// ============================================================
// NOAM - Shine your Bright - Blog & Articles Controller
// Handles Article List (sorted by date desc) and Article Detail
// ============================================================

const CONFIG = {
    zalo: '0988063617',
    phone: '0988063617',
    email: 'contactnoam.vn@gmail.com',
    defaultLang: 'vi'
};

const i18nBlog = {
    vi: {
        nav: {
            brandStory: 'Câu chuyện thương hiệu',
            products: 'Sản phẩm',
            blog: 'Bài viết',
            knowledge: 'Kiến thức',
            contact: 'Liên hệ'
        },
        footer: {
            tagline: 'Nghệ thuật tạo tác từ thiên nhiên.',
            contactTitle: 'Liên Hệ',
            connectTitle: 'Kết Nối'
        },
        bottomNav: {
            home: 'Trang chủ',
            products: 'Sản phẩm',
            blog: 'Bài viết',
            chat: 'Chat',
            contact: 'Liên hệ'
        },
        blogTitle: 'Kiến Thức & Bài Viết',
        blogSubtitle: 'Nơi chia sẻ những câu chuyện chế tác nghệ thuật, chất liệu thiên nhiên và kinh nghiệm bảo quản trang sức cao cấp.',
        readMore: 'Xem chi tiết',
        backToList: 'Quay lại danh sách',
        postedOn: 'Ngày đăng',
        searchPlaceholder: 'Tìm kiếm sản phẩm...'
    },
    en: {
        nav: {
            brandStory: 'Brand Story',
            products: 'Products',
            blog: 'Articles',
            knowledge: 'Knowledge',
            contact: 'Contact'
        },
        footer: {
            tagline: 'Art crafted from nature.',
            contactTitle: 'Contact',
            connectTitle: 'Connect'
        },
        bottomNav: {
            home: 'Home',
            products: 'Products',
            blog: 'Articles',
            chat: 'Chat',
            contact: 'Contact'
        },
        blogTitle: 'Knowledge & Articles',
        blogSubtitle: 'Sharing stories of artistic craftsmanship, natural materials, and high-end jewelry care experiences.',
        readMore: 'Read details',
        backToList: 'Back to list',
        postedOn: 'Date',
        searchPlaceholder: 'Search products...'
    }
};

let state = {
    lang: localStorage.getItem('lang') || CONFIG.defaultLang,
    currentPage: 1
};

// Get localized text from string or object
const localized = (obj) => {
    if (!obj) return '';
    return obj[state.lang] || obj.vi || '';
};

const t = (path) => {
    const keys = path.split('.');
    let obj = i18nBlog[state.lang];
    for (const k of keys) {
        if (obj === undefined) return path;
        obj = obj[k];
    }
    return obj ?? path;
};

// Format date to local string
const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    if (state.lang === 'vi') {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

// Render Blog content
function renderBlog() {
    const container = document.getElementById('blog-container');
    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');
    const id = urlParams.get('id');

    let currentArticle = null;
    if (slug) {
        currentArticle = data_baiviet.find(p => p.slug === slug);
    } else if (id) {
        currentArticle = data_baiviet.find(p => p.id === parseInt(id));
    }

    if (currentArticle) {
        renderDetailView(container, currentArticle);
    } else {
        renderListView(container);
    }
}

// Render Article List View
function renderListView(container) {
    // Sort articles by date descending
    const sortedArticles = [...data_baiviet].sort((a, b) => new Date(b.date) - new Date(a.date));

    // PAGE_SIZE: set to 2 for testing since we have 3 articles. Change to 6 or more in production.
    const PAGE_SIZE = 2;
    const totalPages = Math.ceil(sortedArticles.length / PAGE_SIZE);

    if (state.currentPage > totalPages) state.currentPage = 1;
    if (state.currentPage < 1) state.currentPage = 1;

    const paginatedArticles = sortedArticles.slice((state.currentPage - 1) * PAGE_SIZE, state.currentPage * PAGE_SIZE);

    let paginationHtml = '';
    if (totalPages > 1) {
        paginationHtml = `
            <div class="flex justify-center items-center gap-2 mt-12 animate-fade-in">
                <button onclick="changePage(${state.currentPage - 1})" ${state.currentPage === 1 ? 'disabled' : ''}
                    class="px-4 py-2 rounded-lg border text-sm font-medium transition duration-200 
                    ${state.currentPage === 1 ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed' : 'bg-white text-brand-900 border-gray-200 hover:border-brand-500 hover:text-brand-500'}">
                    <i class="fas fa-chevron-left"></i>
                </button>
                
                ${Array.from({ length: totalPages }, (_, i) => i + 1).map(pageNum => `
                    <button onclick="changePage(${pageNum})"
                        class="w-10 h-10 rounded-lg text-sm font-bold transition duration-200
                        ${state.currentPage === pageNum ? 'bg-brand-900 text-brand-gold border border-brand-gold shadow-md' : 'bg-white text-gray-700 border border-gray-200 hover:border-brand-500 hover:text-brand-500'}">
                        ${pageNum}
                    </button>
                `).join('')}
                
                <button onclick="changePage(${state.currentPage + 1})" ${state.currentPage === totalPages ? 'disabled' : ''}
                    class="px-4 py-2 rounded-lg border text-sm font-medium transition duration-200 
                    ${state.currentPage === totalPages ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed' : 'bg-white text-brand-900 border-gray-200 hover:border-brand-500 hover:text-brand-500'}">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        `;
    }

    let html = `
        <div class="text-center mb-12 animate-fade-in">
            <span class="text-brand-500 text-xs md:text-sm font-bold tracking-widest uppercase" data-i18n="nav.blog">${t('nav.blog')}</span>
            <h1 class="text-3xl md:text-5xl font-serif font-bold text-brand-900 mt-2" data-i18n="blogTitle">${t('blogTitle')}</h1>
            <p class="text-gray-600 text-sm md:text-base mt-4 max-w-2xl mx-auto" data-i18n="blogSubtitle">${t('blogSubtitle')}</p>
            <div class="w-16 md:w-20 h-1 bg-brand-500 mx-auto mt-6"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${paginatedArticles.map(article => `
                <article class="bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100 flex flex-col h-full group">
                    <div class="relative overflow-hidden aspect-[16/10] cursor-pointer" onclick="navigateToArticle('${article.slug}')">
                        <img src="${article.image}" alt="${localized(article.title)}" class="w-full h-full object-cover transition duration-500 group-hover:scale-105" loading="lazy">
                        <span class="absolute top-3 left-3 bg-brand-900/80 text-brand-gold text-[10px] font-bold px-2.5 py-1 uppercase tracking-wider rounded-md backdrop-blur-sm">
                            ${t('postedOn')}: ${formatDate(article.date)}
                        </span>
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <h2 class="font-serif font-bold text-gray-800 text-lg md:text-xl mb-3 line-clamp-2 hover:text-brand-500 transition cursor-pointer" onclick="navigateToArticle('${article.slug}')">
                            ${localized(article.title)}
                        </h2>
                        <p class="text-gray-500 text-sm line-clamp-3 mb-6 flex-grow">
                            ${localized(article.summary)}
                        </p>
                        <div class="mt-auto">
                            <button onclick="navigateToArticle('${article.slug}')" class="w-full bg-brand-900 text-brand-gold py-2.5 px-4 rounded-lg text-xs font-bold uppercase hover:bg-brand-gold hover:text-brand-900 transition tracking-wider flex items-center justify-center gap-2">
                                <span>${t('readMore')}</span>
                                <i class="fas fa-arrow-right text-[10px]"></i>
                            </button>
                        </div>
                    </div>
                </article>
            `).join('')}
        </div>
        
        ${paginationHtml}
    `;
    container.innerHTML = html;
}

// Render Article Detail View
function renderDetailView(container, article) {
    const contentBlocks = article.content[state.lang] || article.content.vi;

    let html = `
        <!-- Breadcrumb & Back Button -->
        <div class="mb-8 flex items-center justify-between flex-wrap gap-4 animate-fade-in">
            <button onclick="navigateBack()" class="flex items-center gap-2 text-brand-900 hover:text-brand-gold transition font-bold uppercase text-xs tracking-wider">
                <i class="fas fa-arrow-left"></i>
                <span data-i18n="backToList">${t('backToList')}</span>
            </button>
            <div class="text-xs md:text-sm text-gray-500 flex items-center gap-2">
                <a href="index.html" class="hover:text-brand-900">NOAM</a>
                <span>/</span>
                <a href="baiviet.html" class="hover:text-brand-900" data-i18n="nav.blog">${t('nav.blog')}</a>
                <span>/</span>
                <span class="text-gray-400 line-clamp-1 max-w-[200px] md:max-w-xs">${localized(article.title)}</span>
            </div>
        </div>

        <!-- Main Article Container -->
        <article class="bg-white rounded-2xl shadow-sm p-6 md:p-12 border border-gray-100 max-w-4xl mx-auto animate-slide-up">
            <span class="text-xs font-bold text-brand-500 uppercase tracking-widest mb-2 block">
                ${state.lang === 'vi' ? 'Kiến thức & Câu chuyện' : 'Knowledge & Stories'}
            </span>
            <h1 class="text-2xl md:text-4xl font-serif font-bold text-brand-900 mb-4 leading-tight">
                ${localized(article.title)}
            </h1>
            
            <div class="flex items-center gap-4 text-xs md:text-sm text-gray-500 border-b border-gray-100 pb-6 mb-8">
                <span><i class="far fa-calendar-alt mr-2 text-brand-500"></i>${t('postedOn')}: ${formatDate(article.date)}</span>
                <span>|</span>
                <span><i class="far fa-clock mr-2 text-brand-500"></i>${state.lang === 'vi' ? '5 phút đọc' : '5 min read'}</span>
            </div>

            <!-- Content Elements -->
            <div class="article-body">
                ${contentBlocks.map(block => {
        if (block.type === 'heading') {
            return `<h2 class="text-xl md:text-2xl font-serif font-bold text-brand-900 mt-8 mb-4 border-l-4 border-brand-500 pl-3">${block.text}</h2>`;
        } else if (block.type === 'paragraph') {
            return `<p class="text-gray-600 text-sm md:text-base leading-relaxed mb-6 text-justify">${block.text}</p>`;
        } else if (block.type === 'list') {
            return `
                            <ul class="list-none space-y-3 mb-6 pl-4 text-gray-600 text-sm md:text-base">
                                ${block.items.map(item => `
                                    <li class="flex gap-2 items-start">
                                        <i class="fas fa-check text-brand-500 text-xs mt-1.5 flex-shrink-0"></i>
                                        <span>${item}</span>
                                    </li>
                                `).join('')}
                            </ul>`;
        } else if (block.type === 'image') {
            return `
                            <div class="my-8 rounded-xl overflow-hidden shadow-md border border-gray-100 group cursor-zoom-in" onclick="openLightbox('${block.src}')">
                                <img src="${block.src}" alt="${block.alt}" class="w-full h-auto object-cover transition duration-500 group-hover:scale-102">
                                ${block.alt ? `<p class="text-center text-xs md:text-sm text-gray-500 italic py-3 bg-gray-50 border-t border-gray-100">${block.alt}</p>` : ''}
                            </div>`;
        }
        return '';
    }).join('')}
            </div>
        </article>
    `;
    container.innerHTML = html;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Navigation helpers
function navigateToArticle(slug) {
    history.pushState(null, '', `?slug=${slug}`);
    renderBlog();
}

function navigateBack() {
    state.currentPage = 1; // reset current page when returning to list
    history.pushState(null, '', `baiviet.html`);
    renderBlog();
}

window.changePage = (pageNum) => {
    state.currentPage = pageNum;
    renderBlog();
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Global popstate listener for back/forward buttons
window.addEventListener('popstate', renderBlog);

// Lightbox controller
window.openLightbox = (src) => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightbox.classList.add('active');
};

window.closeLightbox = () => {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) lightbox.classList.remove('active');
};

// Render translation nodes on the page
function renderStaticTranslations() {
    // Nav translations
    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.getAttribute('data-i18n'));
    });

    // Language toggle active state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === state.lang);
    });

    // Search bar placeholder
    document.querySelectorAll('.search-input').forEach(input => {
        input.placeholder = t('searchPlaceholder');
    });

    // Footer translations
    const footerTag = document.getElementById('footer-tagline');
    if (footerTag) footerTag.textContent = t('footer.tagline');
    const footerContact = document.getElementById('footer-contact-title');
    if (footerContact) footerContact.textContent = t('footer.contactTitle');
    const footerConnect = document.getElementById('footer-connect-title');
    if (footerConnect) footerConnect.textContent = t('footer.connectTitle');
}

// Set language click handler
function setLang(lang) {
    state.lang = lang;
    localStorage.setItem('lang', lang);
    renderStaticTranslations();
    renderBlog();
    renderBottomNav();
}

// Render dynamic bottom nav for mobile view
function renderBottomNav() {
    const nav = document.getElementById('bottom-nav');
    if (!nav) return;
    const bn = i18nBlog[state.lang].bottomNav;
    nav.innerHTML = `
        <a href="index.html" class="bottom-nav-item"><i class="fas fa-home"></i><span>${bn.home}</span></a>
        <a href="index.html#products-section" class="bottom-nav-item"><i class="fas fa-th-large"></i><span>${bn.products}</span></a>
        <a href="baiviet.html" class="bottom-nav-item active"><i class="fas fa-newspaper"></i><span>${bn.blog}</span></a>
        <a href="https://zalo.me/${CONFIG.zalo}" target="_blank" class="bottom-nav-item"><i class="fas fa-comments"></i><span>${bn.chat}</span></a>`;
}

// Scroll progress and Back to top behavior
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = document.getElementById('scroll-progress');
    if (scrollProgress && height > 0) {
        scrollProgress.style.width = (winScroll / height) * 100 + '%';
    }

    const backToTop = document.getElementById('back-to-top');
    if (backToTop) {
        backToTop.classList.toggle('show', winScroll > 300);
    }
});

// Dom ready initializations
document.addEventListener('DOMContentLoaded', () => {
    renderStaticTranslations();
    renderBlog();
    renderBottomNav();

    // Language toggle clicks
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });

    // Mobile menu toggle
    document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
        document.getElementById('mobile-menu')?.classList.toggle('hidden');
    });

    // Back to top click
    document.getElementById('back-to-top')?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
