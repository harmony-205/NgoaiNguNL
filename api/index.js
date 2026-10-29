import express from 'express';
import nodemailer from 'nodemailer';
import crypto from 'node:crypto';
import rateLimit from 'express-rate-limit';

const app = express();
app.use(express.json());

// Whitelist CORS
const ALLOWED_ORIGINS = [
  'http://localhost:4200',
  'http://127.0.0.1:4200',
  'https://nghiemlinh.edu.vn',
  'https://www.nghiemlinh.edu.vn'
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin) {
    if (ALLOWED_ORIGINS.includes(origin) || origin.endsWith('.vercel.app')) {
      res.setHeader('Access-Control-Allow-Origin', origin);
    }
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// In-memory secure OTP storage
const otpStore = new Map();

// Rate limiting: Maximum 3 OTP requests per 15 minutes per IP (SEC-01)
const otpSendLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 3,
  message: {
    success: false,
    message: 'Bạn đã yêu cầu gửi mã OTP quá nhiều lần (tối đa 3 lần trong 15 phút). Vui lòng thử lại sau!'
  },
  standardHeaders: true,
  legacyHeaders: false
});

function getSmtpTransporter() {
  const user = process.env.SMTP_USER || '';
  const pass = process.env.SMTP_PASS || '';
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user, pass }
  });
}

// 1. Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'NghiemLinh Vercel Serverless API' });
});

// 2. Send OTP
app.post('/api/send-otp', otpSendLimiter, async (req, res) => {
  const { to, type } = req.body || {};
  if (!to || typeof to !== 'string' || !to.includes('@')) {
    return res.status(400).json({ success: false, message: 'Địa chỉ Gmail không hợp lệ!' });
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  if (!smtpUser || !smtpPass) {
    console.warn('[SMTP] Chưa cấu hình biến môi trường SMTP_USER / SMTP_PASS trên Vercel!');
    return res.status(500).json({ success: false, message: 'Máy chủ chưa được thiết lập thông tin gửi email (SMTP_USER/SMTP_PASS).' });
  }

  const cleanEmail = to.trim().toLowerCase();
  const otpType = type === 'forgot' ? 'forgot' : 'register';
  const storeKey = `${cleanEmail}_${otpType}`;

  const existing = otpStore.get(storeKey);
  const now = Date.now();
  if (existing && (now - existing.createdAt < 60 * 1000)) {
    const remainingSec = Math.ceil((60 * 1000 - (now - existing.createdAt)) / 1000);
    return res.status(429).json({
      success: false,
      message: `Vui lòng đợi ${remainingSec} giây trước khi yêu cầu gửi lại mã OTP!`
    });
  }

  const generatedOtp = crypto.randomInt(100000, 1000000).toString();
  otpStore.set(storeKey, {
    otp: generatedOtp,
    expiresAt: now + 5 * 60 * 1000,
    attempts: 0,
    createdAt: now
  });

  const isRegister = otpType === 'register';
  const subject = isRegister
    ? 'Mã OTP xác thực tạo tài khoản - Ngoại Ngữ Nghiêm Linh'
    : 'Mã OTP khôi phục mật khẩu - Ngoại Ngữ Nghiêm Linh';

  const htmlContent = `
    <div style="font-family: 'Segoe UI', Tahoma, Arial, sans-serif; max-width: 540px; margin: 0 auto; padding: 32px 24px; border: 1px solid #e2e8f0; border-radius: 20px; background: #ffffff;">
      <div style="text-align: center; margin-bottom: 24px;">
        <h2 style="color: #edba20; margin: 0 0 6px; font-size: 24px; font-weight: 800;">Ngoại Ngữ Nghiêm Linh</h2>
        <p style="font-style: italic; color: #718096; margin: 0; font-size: 13.5px;">Nỗ lực · Kiên trì · Bứt phá</p>
        <p style="color: #a07e10; margin: 4px 0 0; font-size: 12.5px; font-weight: 700;">Học thêm ngoại ngữ mới · Mở thêm vạn cơ hội</p>
      </div>
      <div style="background: #fffbeb; border: 2px dashed #f59e0b; border-radius: 16px; padding: 24px; text-align: center; margin-bottom: 24px;">
        <p style="margin: 0 0 10px; font-size: 14.5px; color: #4a5568; font-weight: 600;">
          ${isRegister ? 'Mã xác thực OTP đăng ký tài khoản của bạn là:' : 'Mã xác thực OTP đặt lại mật khẩu của bạn là:'}
        </p>
        <div style="font-size: 38px; font-weight: 900; color: #b45309; letter-spacing: 8px; font-family: 'Consolas', Courier, monospace; margin: 12px 0;">
          ${generatedOtp}
        </div>
        <p style="margin: 10px 0 0; font-size: 12px; color: #92400e;">
          ⏱️ Mã có hiệu lực trong vòng <strong>5 phút</strong>. Tuyệt đối không chia sẻ mã này cho người khác.
        </p>
      </div>
      <p style="font-size: 13px; color: #64748b; margin: 0 0 12px; line-height: 1.6;">
        Nếu bạn không thực hiện yêu cầu này, vui lòng bỏ qua thư này hoặc thông báo cho trung tâm qua Zalo: <strong>0385780185</strong> để được hỗ trợ bảo mật tài khoản.
      </p>
      <div style="border-top: 1px solid #edf2f7; padding-top: 16px; text-align: center; font-size: 12px; color: #a0aec0;">
        Trung tâm Ngoại Ngữ Nghiêm Linh · Chuyên đào tạo Tiếng Trung & Tiếng Nhật
      </div>
    </div>
  `;

  try {
    const transporter = getSmtpTransporter();
    await transporter.sendMail({
      from: `"Ngoại Ngữ Nghiêm Linh" <${smtpUser}>`,
      to: cleanEmail,
      subject: subject,
      text: `${subject}: Mã OTP của bạn là ${generatedOtp}. Mã có hiệu lực trong 5 phút.`,
      html: htmlContent
    });

    console.log(`[SMTP] Đã gửi OTP thành công tới: ${cleanEmail}`);
    return res.json({ success: true, message: 'Đã gửi mã OTP đến hòm thư Gmail của bạn!' });
  } catch (err) {
    console.error('[SMTP] Lỗi gửi email:', err);
    otpStore.delete(storeKey);
    return res.status(500).json({ success: false, error: err?.message || 'Lỗi gửi email SMTP' });
  }
});

// 3. Verify OTP
app.post('/api/verify-otp', (req, res) => {
  const { to, otp, type } = req.body || {};
  if (!to || !otp) {
    return res.status(400).json({ success: false, message: 'Vui lòng cung cấp đầy đủ email và mã OTP!' });
  }

  const cleanEmail = to.trim().toLowerCase();
  const otpType = type === 'forgot' ? 'forgot' : 'register';
  const storeKey = `${cleanEmail}_${otpType}`;

  const record = otpStore.get(storeKey);
  if (!record) {
    return res.status(400).json({ success: false, message: 'Mã OTP không tồn tại hoặc đã hết hạn. Vui lòng bấm Gửi mã OTP mới!' });
  }

  if (Date.now() > record.expiresAt) {
    otpStore.delete(storeKey);
    return res.status(400).json({ success: false, message: 'Mã OTP đã hết hiệu lực (quá 5 phút). Vui lòng gửi lại mã mới!' });
  }

  if (record.attempts >= 5) {
    otpStore.delete(storeKey);
    return res.status(429).json({ success: false, message: 'Mã OTP đã bị khóa do nhập sai quá 5 lần. Vui lòng gửi lại mã mới!' });
  }

  if (record.otp !== String(otp).trim()) {
    record.attempts += 1;
    const remaining = 5 - record.attempts;
    return res.status(400).json({
      success: false,
      message: `Mã OTP không chính xác! (Bạn còn ${remaining} lần thử)`
    });
  }

  otpStore.delete(storeKey);
  return res.json({ success: true, message: 'Xác thực mã OTP thành công!' });
});

// 4. Google OAuth Verification (SEC-03)
const GOOGLE_CLIENT_ID = '641790014454-fkoq1mrc904bheld7cht4dmo4pg5tos1.apps.googleusercontent.com';

app.post('/api/auth/google-verify', async (req, res) => {
  const { credential } = req.body || {};
  if (!credential || typeof credential !== 'string') {
    return res.status(400).json({ success: false, message: 'Thiếu Google credential ID token!' });
  }

  try {
    const verifyUrl = `https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(credential)}`;
    const googleResponse = await fetch(verifyUrl);
    if (!googleResponse.ok) {
      throw new Error('Google token không hợp lệ hoặc đã hết hạn');
    }
    const payload = await googleResponse.json();
    if (payload.aud !== GOOGLE_CLIENT_ID) {
      throw new Error('Token không khớp Client ID của hệ thống');
    }

    if (!payload || !payload.email) {
      return res.status(401).json({ success: false, message: 'Không thể xác thực thông tin tài khoản Google!' });
    }

    return res.json({
      success: true,
      user: {
        email: payload.email.trim().toLowerCase(),
        name: payload.name || payload.given_name || 'Học viên Google',
        picture: payload.picture || '',
        emailVerified: payload.email_verified === 'true' || payload.email_verified === true
      }
    });
  } catch (err) {
    console.error('[Google Verify Error]', err?.message || err);
    return res.status(401).json({ success: false, message: 'Xác thực Google OAuth thất bại: ' + (err?.message || 'Token không hợp lệ') });
  }
});

export default app;
