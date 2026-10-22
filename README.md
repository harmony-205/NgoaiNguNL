# 🌟 Ngoại Ngữ Nghiêm Linh (Nghiêm Linh Language Web)

> **Nền tảng học tiếng Trung trực tuyến hiện đại, bài bản và toàn diện.**  
> Dự án ứng dụng thương mại được xây dựng với công nghệ **Angular 22 (SSR)**, thiết kế trải nghiệm học tập tương tác cao, bảo mật nhiều lớp và kiến trúc module hóa chuẩn công nghiệp.

---

## 🎯 Giới thiệu Dự án

**Ngoại Ngữ Nghiêm Linh** là giải pháp phần mềm giáo dục (EdTech) hoàn chỉnh phục vụ giảng dạy và tự học tiếng Trung theo khung chuẩn HSK quốc tế (HSK 1 - HSK 6). Hệ thống tối ưu hóa lộ trình từ khởi động, học từ vựng, tập viết chữ Hán động, học ngữ pháp, hội thoại thực tế, đến luyện nói và làm bài kiểm tra trắc nghiệm tổng hợp.

Dự án được định hướng phát triển sẵn sàng cho mục đích thương mại, kết hợp kiến trúc phân quyền quản trị viên (Admin/Teacher) và học viên (Student), bảo vệ chống bot và mã độc, cùng cơ sở dữ liệu sẵn sàng mở rộng trên nền tảng **PostgreSQL / Supabase**.

---

## 🚀 Tính năng Nổi bật

### 1. Trải nghiệm Học tập Tương tác Toàn diện
* **Khởi động (Warm-up):** Trò chơi nối chữ Hán - nghĩa tiếng Việt bằng thao tác Click & Drag-and-Drop, có âm thanh khen thưởng/cổ vũ và hiển thị đáp án trực quan.
* **Tập viết chữ Hán động (Stroke Order):** Tích hợp công nghệ SVG vẽ nét động tuần tự (*ngang trước sổ sau, trên trước dưới sau, trái trước phải sau*), hỗ trợ chế độ xem mẫu và tập viết theo nét.
* **Luyện phát âm & Chấm điểm (Speech Assessment):** Tích hợp công cụ ghi âm và phân tích âm sắc/thanh điệu, phản hồi thang điểm và nhận xét ngay lập tức.
* **Thẻ nhớ thông minh (Flashcards):** Ôn tập lật thẻ 2 mặt (Mặt 1: Chữ Hán, Phiên âm, Âm Hán Việt; Mặt 2: Nghĩa tiếng Việt và câu ví dụ ngữ cảnh).
* **Ngữ pháp & Luyện tập thứ tự câu:** Hệ thống bài tập sắp xếp từ thành câu chuẩn ngữ pháp, điền từ vào chỗ trống có gợi ý Pinyin, và trắc nghiệm chọn lọc.
* **Văn hóa & Đọc mở rộng (Culture Insights):** Khám phá các mẩu kiến thức văn hóa Trung Quốc gắn với bài học có phiên âm đầy đủ.

### 2. Quản lý Khóa học & Lộ trình Bài học
* **Khóa sơ cấp:** Mở sẵn HSK 1, HSK 2, HSK 3 với bản đồ bài học (Unit Path) trực quan, vòng tròn tiến độ học tập chi tiết.
* **Khóa trung - cao cấp (HSK 4, 5, 6):** Cơ chế khóa linh hoạt, cho phép Admin/Giáo viên phê duyệt quyền truy cập theo từng học viên.

### 3. Cổng Quản trị Viên (Admin Dashboard)
* **Thống kê tổng quan:** Theo dõi số lượng tài khoản đăng ký theo thời gian thực.
* **Phân loại học viên:** 
  * *Học viên tại Trung tâm:* Có thông tin Lớp/Khóa và giáo viên phụ trách (nhóm Zalo).
  * *Học viên ngoài Trung tâm:* Học viên tự do đăng ký trên website.
* **Duyệt mở khóa HSK 4-6:** Công cụ 1-click kích hoạt hoặc khóa cấp độ học viên trực tiếp trên bảng điều khiển.

### 4. Hồ sơ Giảng viên & Kênh Cộng đồng
* Trang giới thiệu chi tiết về **Cô Nghiêm Linh**: học bổng toàn phần chính phủ Trung Quốc, chứng chỉ JLPT N1, HSK6/HSKK Cao cấp, giải thưởng truyền thông, cùng hệ thống liên kết Zalo, Facebook cá nhân, Fanpage và các Group chia sẻ tài liệu.

---

## 🛡️ Kiến trúc Bảo mật (Security Best Practices)

Dự án được chú trọng đặc biệt về các tiêu chuẩn bảo mật cho ứng dụng web thương mại:

1. **Role-Based Access Control (RBAC):**
   * Bảo vệ các route nhạy cảm như `/admin` bằng `adminGuard` ([admin.guard.ts](file:///src/app/core/guards/admin.guard.ts)), ngăn chặn truy cập trái phép từ người dùng phổ thông.
2. **SSR Hardening & HTTP Security Headers:**
   * Server Express ([server.ts](file:///src/server.ts)) được cấu hình ẩn định danh máy chủ (`app.disable('x-powered-by')`).
   * Tự động đính kèm các HTTP Header bảo mật:
     * `X-Content-Type-Options: nosniff` (chống MIME-type sniffing).
     * `X-Frame-Options: SAMEORIGIN` (chống Clickjacking).
     * `X-XSS-Protection: 1; mode=block` (ngăn chặn tấn công Cross-Site Scripting).
     * `Referrer-Policy: strict-origin-when-cross-origin`.
3. **Anti-Bot & Brute-force Prevention:**
   * Form đăng ký tích hợp Captcha toán học động tự sinh, ngăn chặn bot tạo tài khoản rác.
   * Ràng buộc mật khẩu chặt chẽ (tối thiểu 8 ký tự, bao gồm chữ hoa, chữ thường và chữ số).
4. **An toàn Bí mật Môi trường (Zero Secrets Leaked):**
   * Tách biệt cấu hình môi trường ([environment.ts](file:///src/environments/environment.ts), [environment.prod.ts](file:///src/environments/environment.prod.ts)).
   * [`.gitignore`](file:///./.gitignore) được cấu hình chặn toàn bộ `.env`, file chứng chỉ SSL/TLS (`.pem`, `.key`, `.cert`).

---

## 🛠️ Công nghệ Sử dụng (Tech Stack)

| Lớp kiến trúc | Công nghệ | Chi tiết |
| :--- | :--- | :--- |
| **Frontend Framework** | Angular 22 | Standalone Components, Angular Signals, RxJS |
| **Rendering** | Angular SSR + Express 5 | Server-Side Rendering tối ưu SEO và tốc độ tải trang |
| **Styling** | Tailwind CSS + SCSS | Giao diện hiện đại, responsive hoàn hảo trên Mobile & Desktop |
| **Interactive EdTech** | Hanzi Writer | Diễn hoạt SVG nét viết Hán tự động chuẩn quy tắc bút thuận |
| **Backend & Database** | Supabase / PostgreSQL | Tích hợp sẵn `@supabase/supabase-js`, kiến trúc RLS |
| **Testing** | Vitest | Bộ kiểm thử tự động đạt 100% Pass rate |
| **Offline Cache** | IndexedDB Service | Khung lưu trữ offline dữ liệu bài học trên client |

---

## 📂 Cấu trúc Thư mục Dự án

```text
nghiem-linh-language-web/
├── public/                 # Tài nguyên tĩnh công khai (ảnh, avatars, icons)
├── src/
│   ├── app/
│   │   ├── core/           # Core Module (Guards, Services dùng chung)
│   │   │   ├── guards/     # admin.guard.ts, auth.guard.ts (RBAC Security)
│   │   │   └── services/   # user.service.ts, audio.ts, indexed-db.ts
│   │   ├── features/       # Feature Modules
│   │   │   ├── admin/      # Bảng điều khiển quản trị viên
│   │   │   ├── auth/       # Đăng nhập, Đăng ký, Captcha
│   │   │   ├── course/     # Lộ trình học, chi tiết khóa học, chọn HSK
│   │   │   ├── landing/    # Landing page giới thiệu
│   │   │   ├── lesson/     # Không gian học tập (Warm-up, Vocab, Grammar, v.v.)
│   │   │   └── teacher-intro/ # Trang giới thiệu cô Nghiêm Linh
│   │   ├── layout/         # Header, Footer, Sidebar
│   │   └── shared/         # Reusable components, directives (HanziWriter)
│   ├── environments/       # Cấu hình môi trường dev & prod
│   ├── server.ts           # Máy chủ SSR Express với Security Headers
│   └── styles.scss         # Global SCSS & Tailwind Styles
├── .env.example            # Bản mẫu cấu hình biến môi trường
└── angular.json            # Cấu hình Angular Build & Budgets
```

---

## ⚙️ Cài đặt & Khởi chạy

### 1. Yêu cầu hệ thống
* **Node.js:** phiên bản `^20.17` hoặc `^22.12` trở lên
* **NPM:** `10.x` trở lên

### 2. Cài đặt Dependencies
```bash
npm install
```

### 3. Cấu hình Biến môi trường
Tạo file `.env` từ file mẫu:
```bash
cp .env.example .env
```
*(Điền Supabase URL và Public Anon Key nếu muốn kết nối trực tiếp với backend Supabase).*

### 4. Khởi chạy Development Server
```bash
npm start
# Hoặc: npx ng serve --port 4200
```
Mở trình duyệt tại: `http://localhost:4200/`

### 5. Chạy Kiểm thử (Unit Tests)
```bash
npm test
```

### 6. Build Đóng gói Production
```bash
npm run build
```
Thư mục xuất bản tối ưu: `dist/nghiem-linh-language-web`

---

## 👥 Vai trò Demo phục vụ Đánh giá (Portfolio & Testing)

Hệ thống hỗ trợ cơ chế chuyển đổi vai trò nhanh ngay trong Menu Người dùng (Avatar ở góc trên bên phải):
* **Vai trò Giáo viên / Admin (Cô Nghiêm Linh):** Xem được tab **⚙️ Quản trị**, truy cập cổng quản trị danh sách học viên, duyệt quyền HSK 4-6.
* **Vai trò Học viên (Student Demo):** Trải nghiệm giao diện học tập chuẩn, tự động bị chặn nếu cố tình vào `/admin`.

---

## 📄 Bản quyền & Tác giả

* **Dự án:** Ngoại Ngữ Nghiêm Linh (Commercial E-Learning Platform)
* **Repository:** [https://github.com/harmony-205/NgoaiNguNL](https://github.com/harmony-205/NgoaiNguNL)
