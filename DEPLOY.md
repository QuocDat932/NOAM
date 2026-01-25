# 🚀 Hướng Dẫn Deploy Lux Lady lên Vercel

## 📋 Yêu Cầu
- Tài khoản GitHub (miễn phí)
- Tài khoản Vercel (miễn phí)

---

## 🎯 Cách 1: Deploy qua GitHub (Recommended)

### Bước 1: Tạo Git Repository

```bash
# Khởi tạo git repository
git init

# Thêm tất cả files
git add .

# Commit lần đầu
git commit -m "Initial commit - Lux Lady website"
```

### Bước 2: Tạo Repository trên GitHub

1. Truy cập: https://github.com/new
2. Điền thông tin:
   - **Repository name**: `lux-lady-jewelry` (hoặc tên bạn muốn)
   - **Description**: "Lux Lady - Website trang sức cao cấp"
   - **Public** hoặc **Private** (tùy chọn)
3. **KHÔNG** chọn "Add a README file"
4. Click **"Create repository"**

### Bước 3: Push Code lên GitHub

```bash
# Thêm remote repository (thay YOUR_USERNAME bằng username GitHub của bạn)
git remote add origin https://github.com/YOUR_USERNAME/lux-lady-jewelry.git

# Push code lên GitHub
git branch -M main
git push -u origin main
```

### Bước 4: Deploy lên Vercel

1. Truy cập: https://vercel.com/signup
2. Đăng nhập bằng tài khoản GitHub
3. Click **"Add New..."** → **"Project"**
4. Chọn repository `lux-lady-jewelry`
5. Click **"Import"**
6. **Framework Preset**: Chọn "Other" (vì đây là static HTML)
7. **Root Directory**: Để mặc định (`.`)
8. Click **"Deploy"**

### Bước 5: Đợi Deploy Hoàn Thành

- Vercel sẽ tự động build và deploy (khoảng 30-60 giây)
- Sau khi xong, bạn sẽ có link dạng: `https://lux-lady-jewelry.vercel.app`

### Bước 6: Custom Domain (Optional)

1. Vào project settings trên Vercel
2. Click **"Domains"**
3. Thêm domain của bạn (nếu có)

---

## 🎯 Cách 2: Deploy Trực Tiếp (Không cần GitHub)

### Bước 1: Cài Vercel CLI

```bash
# Cài đặt Vercel CLI
npm install -g vercel

# Hoặc dùng yarn
yarn global add vercel
```

### Bước 2: Login vào Vercel

```bash
vercel login
```

### Bước 3: Deploy

```bash
# Chạy lệnh deploy trong thư mục project
vercel

# Trả lời các câu hỏi:
# - Set up and deploy? → Y
# - Which scope? → Chọn account của bạn
# - Link to existing project? → N
# - What's your project's name? → lux-lady-jewelry
# - In which directory is your code located? → ./
```

### Bước 4: Deploy Production

```bash
# Deploy lên production
vercel --prod
```

---

## 🎯 Cách 3: Deploy bằng Drag & Drop (Đơn giản nhất)

### Bước 1: Chuẩn bị files

Đảm bảo thư mục có các files sau:
```
lux-lady/
├── index.html
├── styles.css
├── app.js
├── README.md
└── Img/
    └── (tất cả ảnh sản phẩm)
```

### Bước 2: Deploy

1. Truy cập: https://vercel.com/new
2. Đăng nhập bằng GitHub/GitLab/Bitbucket
3. Kéo thả (drag & drop) toàn bộ thư mục vào
4. Đợi upload và deploy hoàn thành
5. Nhận link website!

---

## ⚙️ Cấu Hình Vercel (Optional)

Tạo file `vercel.json` trong thư mục gốc:

```json
{
  "version": 2,
  "name": "lux-lady-jewelry",
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

---

## 🔄 Cập Nhật Website

### Nếu dùng GitHub:
```bash
# Sau khi chỉnh sửa code
git add .
git commit -m "Update: mô tả thay đổi"
git push

# Vercel sẽ tự động deploy lại!
```

### Nếu dùng Vercel CLI:
```bash
# Deploy lại
vercel --prod
```

---

## 🌐 Custom Domain

### Bước 1: Thêm Domain trên Vercel

1. Vào project → Settings → Domains
2. Nhập domain của bạn (vd: `luxlady.vn`)
3. Click "Add"

### Bước 2: Cấu hình DNS

Vercel sẽ cung cấp DNS records, thêm vào nhà cung cấp domain:

**A Record:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME Record:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### Bước 3: Đợi DNS Propagate

- Thường mất 5-30 phút
- Có thể mất đến 24-48 giờ

---

## 📊 Monitoring & Analytics

### Vercel Analytics (Miễn phí)

1. Vào project → Analytics
2. Enable Analytics
3. Xem traffic, performance, visitors

### Google Analytics (Optional)

Thêm vào `<head>` trong `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🐛 Troubleshooting

### Lỗi: "Build Failed"
- Kiểm tra tất cả files có đúng đường dẫn
- Đảm bảo `index.html` ở thư mục gốc

### Lỗi: Ảnh không hiển thị
- Kiểm tra đường dẫn ảnh trong code
- Đảm bảo thư mục `Img/` đã được upload

### Lỗi: CSS/JS không load
- Kiểm tra đường dẫn `styles.css` và `app.js`
- Đảm bảo files này ở cùng thư mục với `index.html`

---

## 📱 Performance Tips

### 1. Optimize Images
```bash
# Nén ảnh trước khi upload (optional)
# Dùng tools như TinyPNG, ImageOptim
```

### 2. Enable Compression
Vercel tự động enable Gzip/Brotli compression

### 3. Cache Headers
Vercel tự động set cache headers cho static files

---

## 🎉 Hoàn Thành!

Website của bạn giờ đã live tại:
- **Vercel URL**: `https://lux-lady-jewelry.vercel.app`
- **Custom Domain**: `https://yourdomain.com` (nếu có)

### Features Vercel Miễn Phí:
- ✅ Unlimited deployments
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Auto-scaling
- ✅ 100GB bandwidth/month
- ✅ Instant rollbacks
- ✅ Preview deployments

---

## 📞 Support

- **Vercel Docs**: https://vercel.com/docs
- **Vercel Community**: https://github.com/vercel/vercel/discussions
- **Contact**: Zalo 0382539292

---

**Chúc bạn deploy thành công! 🚀💎**
