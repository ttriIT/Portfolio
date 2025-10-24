# FuturNet — Blog cá nhân về lập trình mạng (Java & JavaScript)

Website tĩnh phong cách futuristic, 3D, hiện đại, sử dụng HTML/CSS/JS + Three.js. Trang Home có Hero 3D, About (timeline + counters), Skills, Projects (carousel + modal), Testimonials; trang Blog có ít nhất 9 bài viết tiếng Việt.

## Chạy cục bộ
- Yêu cầu có Node.js. Sau đó chạy:
```bash
npx http-server . -p 5173
```
Mở `http://localhost:5173/`.

## Triển khai GitHub Pages
1. Tạo repository GitHub (ví dụ: `futurnet-blog`).
2. Push mã nguồn:
```bash
git init
git add .
git commit -m "feat: FuturNet v1"
git branch -M main
git remote add origin https://github.com/<username>/futurnet-blog.git
git push -u origin main
```
3. Vào `Settings` → `Pages` → `Branch: main` → `/root` → `Save`. Trang sẽ có dạng `https://<username>.github.io/futurnet-blog/`.

## Tích hợp Publii (tuỳ chọn)
- Publii là app desktop tạo blog tĩnh. Cách dùng cùng dự án:
  - Dùng Publii để viết bài và xuất ra HTML.
  - Sao chép thư mục xuất (assets, posts) vào repo này, giữ cấu trúc `index.html`, `blog.html` hoặc tạo `posts/` riêng.
  - Nhúng stylesheet và scripts của dự án này vào theme Publii để đồng bộ phong cách (neon glow, glassmorphism, Three.js cho Hero).

## Tuỳ biến
- Font: Orbitron (tiêu đề), Poppins (nội dung).
- Màu: gradient xanh tím, neon glow.
- 3D: Three.js tạo khối Icosahedron xoay, ánh sáng phát.
- Hiệu ứng: reveal on scroll, counters, carousel, modal, quotes auto.

## Bản quyền
- Hình ảnh avatar dùng ảnh stock (Unsplash). Khi deploy public, hãy thay bằng ảnh cá nhân hoặc asset tự sở hữu.