#!/bin/bash

# Script deploy nhanh lên Vercel
# Sử dụng: ./deploy.sh

echo "🚀 Lux Lady - Deploy Script"
echo "=============================="
echo ""

# Kiểm tra git
if [ ! -d .git ]; then
    echo "📦 Khởi tạo Git repository..."
    git init
    git add .
    git commit -m "Initial commit - Lux Lady website"
    echo "✅ Git repository đã được tạo!"
    echo ""
    echo "📝 Tiếp theo:"
    echo "1. Tạo repository trên GitHub: https://github.com/new"
    echo "2. Chạy lệnh sau (thay YOUR_USERNAME):"
    echo ""
    echo "   git remote add origin https://github.com/YOUR_USERNAME/lux-lady-jewelry.git"
    echo "   git branch -M main"
    echo "   git push -u origin main"
    echo ""
    echo "3. Sau đó deploy trên Vercel: https://vercel.com/new"
else
    echo "📦 Git repository đã tồn tại"
    echo ""
    
    # Kiểm tra thay đổi
    if [[ -n $(git status -s) ]]; then
        echo "📝 Có thay đổi mới, đang commit..."
        git add .
        
        # Hỏi commit message
        read -p "Nhập commit message (Enter để dùng mặc định): " commit_msg
        if [ -z "$commit_msg" ]; then
            commit_msg="Update website - $(date '+%Y-%m-%d %H:%M:%S')"
        fi
        
        git commit -m "$commit_msg"
        echo "✅ Đã commit thay đổi!"
        echo ""
        
        # Push lên GitHub
        echo "📤 Đang push lên GitHub..."
        if git push; then
            echo "✅ Push thành công!"
            echo "🎉 Vercel sẽ tự động deploy trong vài giây!"
        else
            echo "❌ Push thất bại. Kiểm tra remote repository."
            echo ""
            echo "Nếu chưa có remote, chạy:"
            echo "git remote add origin https://github.com/YOUR_USERNAME/lux-lady-jewelry.git"
            echo "git push -u origin main"
        fi
    else
        echo "✅ Không có thay đổi mới"
    fi
fi

echo ""
echo "=============================="
echo "✨ Hoàn thành!"
