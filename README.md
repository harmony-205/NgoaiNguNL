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
* **Bảng quản lý tài khoản gọn gàng:** Tối ưu 9 cột chuẩn, thao tác nút dọc loại bỏ thanh cuộn ngang, hỗ trợ xóa mềm (Soft Delete) và khôi phục tài khoản.

### 4. Hệ thống Xác thực Đa tầng (Authentication & OTP)
* **Đăng ký tài khoản với OTP Gmail:** Điền đầy đủ thông tin -> Nhận mã OTP qua Gmail thực tế -> Nhập OTP xác thực -> Tạo tài khoản an toàn.
* **Đăng nhập một chạm với Google OAuth 2.0:** Tích hợp Google Identity Services (GIS).
* **Quên mật khẩu tiện lợi:** Gộp quy trình nhập Gmail và xác minh OTP, tự động gửi mật khẩu mới bảo mật.

### 5. Hồ sơ Giảng viên & Kênh Cộng đồng
* Trang giới thiệu chi tiết về **Cô Nghiêm Linh**: học bổng toàn phần chính phủ Trung Quốc, chứng chỉ JLPT N1, HSK6/HSKK Cao cấp, giải thưởng truyền thông, cùng hệ thống liên kết Zalo, Facebook cá nhân, Fanpage và các Group chia sẻ tài liệu.

---

## 🛡️ Kiến trúc Bảo mật (Security Best Practices)

Dự án được chú trọng đặc biệt về các tiêu chuẩn bảo mật cho ứng dụng web thương mại:

1. **Role-Based Access Control (RBAC):**
   * Bảo vệ các route nhạy cảm như `/admin` bằng `adminGuard`, ngăn chặn truy cập trái phép từ người dùng phổ thông.
2. **SSR Hardening & HTTP Security Headers:**
   * Server Express (`src/server.ts`) được cấu hình ẩn định danh máy chủ (`app.disable('x-powered-by')`).
   * Tự động đính kèm các HTTP Header bảo mật:
     * `X-Content-Type-Options: nosniff` (chống MIME-type sniffing).
     * `X-Frame-Options: SAMEORIGIN` (chống Clickjacking).
     * `X-XSS-Protection: 1; mode=block` (ngăn chặn tấn công Cross-Site Scripting).
     * `Referrer-Policy: strict-origin-when-cross-origin`.
3. **An toàn Bí mật Môi trường (Zero Secrets Leaked):**
   * Tách biệt cấu hình môi trường giữa dev và production.
   * `.gitignore` được cấu hình nghiêm ngặt loại trừ toàn bộ file chứa secret cá nhân (`otp-server.mjs`, file chứng chỉ `.pem`, `.key`, `.cert`).

---

## 🔑 Hướng dẫn Cấu hình Google OAuth 2.0 & Gmail SMTP OTP

### 1. Hướng dẫn Lấy mã Google OAuth 2.0 Client ID

Để kích hoạt tính năng **Đăng nhập / Đăng ký bằng Google**, bạn cần lấy **Client ID** từ Google Cloud Platform:

1. Truy cập vào **[Google Cloud Console](https://console.cloud.google.com/)** và đăng nhập tài khoản Google của bạn.
2. Tạo một **Project mới** (ví dụ: `NgoaiNguNghiemLinh`) hoặc chọn Project có sẵn.
3. Vào menu **APIs & Services (API & Dịch vụ)** ➜ **OAuth consent screen (Màn hình đồng ý OAuth)**:
   * **User Type:** Chọn **External (Bên ngoài)** ➜ Bấm **Create (Tạo)**.
   * Điền **App name (Tên ứng dụng):** `Ngoại Ngữ Nghiêm Linh`.
   * Điền **User support email (Email hỗ trợ người dùng)** và **Developer contact email**.
   * Ở bước **Test users (Người dùng thử nghiệm):** Thêm địa chỉ Gmail mà bạn dùng để kiểm thử (ví dụ: `your_test_email@gmail.com`).
4. Vào menu **Credentials (Thông tin xác thực)** ➜ Bấm **+ CREATE CREDENTIALS** ➜ Chọn **OAuth client ID**:
   * **Application type (Loại ứng dụng):** Chọn **Web application**.
   * **Name (Tên):** `NgoaiNguNghiemLinh_Client`.
   * **Authorized JavaScript origins (Nguồn JavaScript được phép):**
     * Thêm `http://localhost:4200` (dành cho môi trường phát triển).
     * Thêm domain production của bạn khi deploy (ví dụ: `https://nghiemlinh.edu.vn`).
   * **Authorized redirect URIs (URI chuyển hướng được phép):** Thêm `http://localhost:4200` hoặc domain của bạn.
   * Bấm **CREATE (Tạo)**.
5. Một hộp thoại hiện ra, bạn sao chép chuỗi **Customer ID / Client ID** (có đuôi dạng: `xxxxxxxxxxxx-xxxxxxxxxxxxxxxx.apps.googleusercontent.com`).
6. Dán Client ID vào file cấu hình Frontend tại:  
   `src/app/core/services/email-otp.service.ts`:
   ```typescript
   readonly GOOGLE_CLIENT_ID = 'YOUR_GOOGLE_CLIENT_ID_HERE.apps.googleusercontent.com';
   ```

---

### 2. Hướng dẫn Lấy Mật khẩu Ứng dụng Gmail (Gmail SMTP App Password) cho dịch vụ gửi OTP

Để hệ thống gửi được mã OTP xác thực thực tế về hòm thư Gmail của học viên khi Đăng ký hoặc Quên mật khẩu, bạn cần tạo **Mật khẩu ứng dụng (App Password)** từ Gmail:

1. Truy cập vào trang quản lý tài khoản Google: **[Google Account Security](https://myaccount.google.com/security)**.
2. Tại mục **Cách bạn đăng nhập vào Google (How you sign in to Google)**:
   * Bắt buộc bật **Xác minh 2 bước (2-Step Verification)** (nếu chưa bật).
3. Sau khi bật Xác minh 2 bước, trên thanh tìm kiếm ở đầu trang tài khoản Google, gõ từ khóa: **`Mật khẩu ứng dụng`** (hoặc **`App passwords`**), hoặc truy cập trực tiếp liên kết:  
   👉 **[https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)**.
4. Nhập tên ứng dụng, ví dụ: `NgoaiNguNghiemLinh OTP` ➜ Bấm **Tạo (Create)**.
5. Google sẽ hiển thị một mật khẩu ứng dụng gồm **16 ký tự chữ cái** ngẫu nhiên (ví dụ dạng: `fppp httl onhx icdc`).
6. Sao chép chuỗi 16 ký tự này (viết liền không khoảng trắng).
7. Tạo file `otp-server.mjs` từ file mẫu `otp-server.example.mjs`:
   ```bash
   cp otp-server.example.mjs otp-server.mjs
   ```
8. Mở file `otp-server.mjs` và điền Gmail của bạn cùng Mật khẩu ứng dụng vừa tạo:
   ```javascript
   const transporter = nodemailer.createTransport({
     host: 'smtp.gmail.com',
     port: 465,
     secure: true,
     auth: {
       user: 'dia_chi_gmail_cua_ban@gmail.com',
       pass: 'chuoi_16_ky_tu_mat_khau_ung_dung'
     }
   });
   ```
9. Khởi chạy microservice gửi OTP (chạy tại cổng `3001`):
   ```bash
   node otp-server.mjs
   ```

---

## 🛠️ Công nghệ Sử dụng (Tech Stack)

| Lớp kiến trúc | Công nghệ | Chi tiết |
| :--- | :--- | :--- |
| **Frontend Framework** | Angular 22 | Standalone Components, Angular Signals, RxJS |
| **Rendering** | Angular SSR + Express 5 | Server-Side Rendering tối ưu SEO và tốc độ tải trang |
| **Styling** | Tailwind CSS + SCSS | Giao diện hiện đại, responsive hoàn hảo trên Mobile & Desktop |
| **Interactive EdTech** | Hanzi Writer | Diễn hoạt SVG nét viết Hán tự động chuẩn quy tắc bút thuận |
| **OAuth & Mailer** | Google GIS + Nodemailer | Xác thực tài khoản Google và gửi thư OTP qua SMTP Gmail |
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
│   │   │   └── services/   # user.service.ts, email-otp.service.ts, audio.ts
│   │   ├── features/       # Feature Modules
│   │   │   ├── admin/      # Bảng điều khiển quản trị viên
│   │   │   ├── auth/       # Đăng nhập, Đăng ký, OTP, Quên mật khẩu
│   │   │   ├── course/     # Lộ trình học, chi tiết khóa học, chọn HSK
│   │   │   ├── landing/    # Landing page giới thiệu
│   │   │   ├── lesson/     # Không gian học tập (Warm-up, Vocab, Grammar, v.v.)
│   │   │   └── teacher-intro/ # Trang giới thiệu cô Nghiêm Linh
│   │   ├── layout/         # Header, Footer, Sidebar
│   │   └── shared/         # Reusable components, directives (HanziWriter)
│   ├── environments/       # Cấu hình môi trường dev & prod
│   ├── server.ts           # Máy chủ SSR Express với Security Headers
│   └── styles.scss         # Global SCSS & Tailwind Styles
├── otp-server.example.mjs  # Template máy chủ backend gửi OTP Gmail
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

### 3. Khởi chạy Dịch vụ Gửi mã OTP (Terminal 1)
```bash
# Tạo file otp-server.mjs từ file mẫu và cấu hình Gmail SMTP
cp otp-server.example.mjs otp-server.mjs
node otp-server.mjs
```
Máy chủ gửi OTP sẽ lắng nghe tại `http://localhost:3001`.

### 4. Khởi chạy Development Server (Terminal 2)
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

Hệ thống hỗ trợ tài khoản quản trị mẫu có sẵn để người đánh giá trải nghiệm toàn bộ các tính năng:
* **Tài khoản Quản trị / Giáo viên (Admin):**
  * Email: `admin@nghiemlinh.edu.vn` (hoặc tên đăng nhập `admin`)
  * Mật khẩu: `Admin@123`
  * Quyền hạn: Quản trị danh sách học viên, duyệt mở khóa các khóa học HSK 4-6, xóa/khôi phục tài khoản, đặt lại mật khẩu học viên, xem trước giao diện học viên.

* **Tài khoản Học viên (Student):**
  * Người dùng và người đánh giá có thể tự do tạo tài khoản học viên mới tại tab **"Tạo tài khoản"** trên website với quy trình xác thực mã OTP gửi về Gmail thực tế, hoặc trải nghiệm đăng nhập nhanh một chạm qua **Google OAuth**.

---

## 📄 Bản quyền & Tác giả

* **Dự án:** Ngoại Ngữ Nghiêm Linh (Commercial E-Learning Platform)
* **Repository:** [https://github.com/harmony-205/NgoaiNguNL](https://github.com/harmony-205/NgoaiNguNL)
