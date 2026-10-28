import express from 'express';
import nodemailer from 'nodemailer';

const app = express();
const PORT = 3001;

// Gmail SMTP configuration (Thay bằng thông tin tài khoản Gmail của bạn)
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER || 'your_email@gmail.com',
    pass: process.env.SMTP_PASS || 'your_app_password'
  }
});

app.use(express.json());

// Enable CORS for Angular frontend
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'NghiemLinh OTP Mailer' });
});

app.post('/api/send-otp', async (req, res) => {
  const { to, otp, type } = req.body || {};
  if (!to || !otp) {
    return res.status(400).json({ success: false, message: 'Thiếu email nhận hoặc mã OTP!' });
  }

  const isRegister = type === 'register';
  const subject = isRegister
    ? 'Mã OTP xác thực tạo tài khoản - Ngoại Ngữ Nghiêm Linh'
    : 'Mã OTP khôi phục mật khẩu - Ngoại Ngữ Nghiêm Linh';

  const htmlContent = `
    <div style="font-family: 'Segoe UI', Tahoma, Arial, sans-serif; max-width: 540px; margin: 0 auto; padding: 32px 24px; border: 1px solid #e2e8f0; border-radius: 20px; background: #ffffff;">
      <div style="text-align: center; margin-bottom: 24px;">
        <h2 style="color: #edba20; margin: 0 0 6px; font-size: 24px; font-weight: 800;">Ngoại Ngữ Nghiêm Linh</h2>
        <p style="font-style: italic; color: #718096; margin: 0; font-size: 13.5px;">Nỗ lực · Kiên trì · Bứt phá</p>
      </div>

      <div style="background: #fffdf5; border: 2px dashed #edba20; border-radius: 16px; padding: 24px; text-align: center; margin-bottom: 24px;">
        <p style="margin: 0 0 12px; font-size: 14.5px; color: #4a5568; font-weight: 600;">
          ${isRegister ? 'Mã xác thực đăng ký tài khoản mới của bạn là:' : 'Mã xác thực đặt lại mật khẩu của bạn là:'}
        </p>
        <div style="font-size: 36px; font-weight: 900; letter-spacing: 8px; color: #b45309; background: #ffffff; padding: 12px 20px; border-radius: 12px; display: inline-block; border: 2px solid #fde68a;">
          ${otp}
        </div>
        <p style="margin: 12px 0 0; font-size: 12.5px; color: #a0aec0;">
          Mã xác thực có hiệu lực trong vòng <strong>5 phút</strong>.
        </p>
      </div>

      <p style="font-size: 13px; color: #718096; line-height: 1.6; margin: 0;">
        ⚠️ Tuyệt đối không chia sẻ mã này cho bất kỳ ai để bảo vệ an toàn cho tài khoản của bạn.
      </p>
    </div>
  `;

  try {
    const info = await transporter.sendMail({
      from: `"Ngoại Ngữ Nghiêm Linh" <${process.env.SMTP_USER || 'your_email@gmail.com'}>`,
      to: to,
      subject: subject,
      html: htmlContent
    });

    console.log(`[OTP] Gửi thành công tới ${to} (MessageID: ${info.messageId})`);
    return res.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('[OTP Error]', error);
    return res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`OTP Mailer Server đang chạy tại http://localhost:${PORT}`);
});

