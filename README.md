# 💎 Lux Lady - Website Trang Sức Cao Cấp

Website bán trang sức hiện đại với UI/UX được tối ưu hóa, responsive hoàn toàn và nhiều tính năng nâng cao.

## ✨ Tính Năng Đã Triển Khai

### 1️⃣ Animation & Hiệu Ứng Nâng Cao
- ✅ Scroll progress bar (thanh tiến trình cuộn trang)
- ✅ Product card hover effects với 3D transform
- ✅ Smooth animations (fade-in, slide-up)
- ✅ Loading skeleton (sẵn sàng sử dụng)
- ✅ Parallax scrolling support

### 2️⃣ Cải Thiện Product Gallery
- ✅ Image zoom on hover trong modal
- ✅ Lightbox fullscreen khi click ảnh
- ✅ Thumbnail gallery với active state
- ✅ Smooth image transitions
- ✅ Touch-friendly cho mobile

### 3️⃣ Filter & Search System
- ✅ Real-time search với autocomplete
- ✅ Search results dropdown
- ✅ Filter theo danh mục (Tất cả, Nhẫn, Dây chuyền, Vòng tay)
- ✅ Sort options (Giá, Tên A-Z)
- ✅ Responsive search bar (desktop & mobile)

### 4️⃣ Tối Ưu Mobile Experience
- ✅ Bottom navigation bar (sticky)
- ✅ Swipe indicator
- ✅ Mobile-optimized search
- ✅ Touch-friendly buttons
- ✅ Responsive grid (2 cột mobile, 4-5 cột desktop)

### 6️⃣ Cải Thiện Navigation
- ✅ Sticky category tabs
- ✅ Back to top button với smooth scroll
- ✅ Scroll progress indicator
- ✅ Mobile menu toggle
- ✅ Bottom nav active states

## 📁 Cấu Trúc File

```
nam/
├── index.html              # File HTML chính
├── index-backup.html       # Backup file gốc
├── app.js                  # JavaScript logic (tách riêng)
├── tasks.md               # Danh sách tasks phát triển tương lai
├── README.md              # File này
└── Img/                   # Thư mục hình ảnh sản phẩm
    ├── Bộ trang sức/
    ├── Charm bạc/
    ├── Dây chuyền nữ/
    ├── Lắc tay nam/
    ├── Lắc tay nữ/
    ├── Nhẫn/
    └── Vòng tay/
```

## 🚀 Cách Sử Dụng

### 1. Mở Website
```bash
# Mở trực tiếp file index.html trong trình duyệt
open index.html

# Hoặc sử dụng Live Server (VS Code extension)
# Right-click index.html > Open with Live Server
```

### 2. Cấu Hình

#### Thay đổi số điện thoại Zalo:
Mở file `app.js`, tìm dòng:
```javascript
const contactZalo = "0382539292";
```
Thay đổi số điện thoại theo nhu cầu.

#### Thêm/Sửa sản phẩm:
Trong file `app.js`, tìm mảng `products` và thêm/sửa theo format:
```javascript
{
    id: 101,
    name: "Tên sản phẩm",
    price: 8500000,
    categoryId: "bo-trang-suc",
    isNew: true,
    code: "BTS-001",
    image: "./Img/Bộ trang sức/ten-file.jpg",
    inStock: true,
    description: "Mô tả sản phẩm..."
}
```

#### Thêm/Sửa danh mục:
Trong file `app.js`, tìm mảng `categories`:
```javascript
const categories = [
    { id: 'bo-trang-suc', name: 'Bộ Trang Sức' },
    // Thêm danh mục mới ở đây
];
```

## 🎨 Tính Năng Chi Tiết

### Search & Filter
- **Search**: Gõ tên sản phẩm, mã sản phẩm hoặc danh mục
- **Filter**: Click các nút filter để lọc theo danh mục
- **Sort**: Dropdown sắp xếp theo giá hoặc tên

### Product Modal
- Click vào sản phẩm để xem chi tiết
- Click vào ảnh chính để mở lightbox fullscreen
- Swipe/click thumbnails để đổi ảnh
- Nút "Chat Zalo" và "Gọi Hotline" để liên hệ

### Mobile Navigation
- Bottom nav bar với 4 mục: Trang chủ, Sản phẩm, Chat, Liên hệ
- Sticky Zalo button (floating)
- Back to top button (hiện khi scroll xuống)

### Responsive Design
- **Mobile**: 2 cột sản phẩm, bottom nav, compact UI
- **Tablet**: 3-4 cột sản phẩm
- **Desktop**: 4-5 cột sản phẩm, full features

## 📱 Tương Thích

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (iOS & macOS)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## 🔧 Tùy Chỉnh CSS

Các biến màu chính trong Tailwind config (trong `<head>` của index.html):
```javascript
colors: {
    brand: {
        50: '#f0f9ff',
        100: '#e0f2fe',
        500: '#0ea5e9',  // Màu chủ đạo (xanh dương)
        800: '#075985',
        900: '#0c4a6e',
        gold: '#d4af37', // Màu vàng accent
    }
}
```

## 📋 Tasks Tương Lai

Xem file `tasks.md` để biết danh sách đầy đủ các tính năng cần phát triển:
- Social Proof & Trust Elements
- Interactive Elements (Wishlist, Compare)
- Dark Mode & Theme Switcher
- Micro-interactions
- Enhanced Modal/Popup

## 🐛 Troubleshooting

### Ảnh không hiển thị?
- Kiểm tra đường dẫn trong mảng `products` (file `app.js`)
- Đảm bảo file ảnh tồn tại trong thư mục `Img/`

### JavaScript không hoạt động?
- Mở Console (F12) để xem lỗi
- Đảm bảo file `app.js` được link đúng trong `index.html`
- Clear cache và reload (Cmd+Shift+R / Ctrl+Shift+R)

### Mobile menu không đóng?
- Click vào link trong menu để tự động đóng
- Hoặc click nút hamburger lần nữa

## 📞 Liên Hệ

- **Zalo**: 0382539292
- **Email**: contact@namjewelry.vn (cập nhật trong code)

## 📝 License

© 2025 Lux Lady. All rights reserved.

---

**Phát triển bởi**: Kiro AI Assistant  
**Ngày cập nhật**: 22/01/2026
