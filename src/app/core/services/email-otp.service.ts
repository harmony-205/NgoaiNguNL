import { Injectable } from '@angular/core';

export interface VerifiedGoogleUser {
  email: string;
  name: string;
  picture: string;
  emailVerified: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class EmailOtpService {
  // Configured Google OAuth 2.0 Client ID provided by user
  readonly GOOGLE_CLIENT_ID = '641790014454-fkoq1mrc904bheld7cht4dmo4pg5tos1.apps.googleusercontent.com';

  /**
   * Determine the API base URL:
   * - Local dev with `ng serve` on port 4200: routes to `http://localhost:3001`
   * - Production on Vercel / SSR: uses relative path `''` (same origin)
   */
  private get baseApi(): string {
    if (typeof window !== 'undefined') {
      if (window.location.port === '4200') {
        return 'http://localhost:3001';
      }
      return '';
    }
    return '';
  }

  /**
   * Request backend to generate and send OTP email to recipient's Gmail (SEC-01 & SEC-02)
   */
  async sendOtpEmail(to: string, type: 'register' | 'forgot'): Promise<{ success: boolean; message?: string }> {
    try {
      const response = await fetch(`${this.baseApi}/api/send-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to: to.trim(), type })
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        return { success: false, message: data.message || data.error || 'Không thể gửi email OTP' };
      }

      return { success: true, message: data.message || 'Đã gửi mã OTP thành công' };
    } catch (err: any) {
      console.warn('[EmailOtpService] Lỗi kết nối tới mailer server:', err?.message);
      return { success: false, message: err?.message || 'Lỗi kết nối máy chủ gửi thư (vui lòng đảm bảo otp-server đang chạy)' };
    }
  }

  /**
   * SEC-02: Validate OTP with backend (verifies single-use, 5-minute timeout, and attempt limit)
   */
  async verifyOtp(to: string, otp: string, type: 'register' | 'forgot'): Promise<{ success: boolean; message?: string }> {
    try {
      const response = await fetch(`${this.baseApi}/api/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to: to.trim(), otp: otp.trim(), type })
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        return { success: false, message: data.message || 'Mã OTP không hợp lệ' };
      }

      return { success: true, message: data.message || 'Xác thực OTP thành công!' };
    } catch (err: any) {
      console.warn('[EmailOtpService] Lỗi kết nối khi xác thực OTP:', err?.message);
      return { success: false, message: 'Lỗi kết nối máy chủ xác thực OTP' };
    }
  }

  /**
   * SEC-03: Verify Google OAuth credential ID Token with backend cryptographic signature check
   */
  async verifyGoogleToken(credential: string): Promise<{ success: boolean; user?: VerifiedGoogleUser; message?: string }> {
    try {
      const response = await fetch(`${this.baseApi}/api/auth/google-verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ credential })
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || !data.success) {
        return { success: false, message: data.message || 'Xác thực tài khoản Google thất bại' };
      }

      return { success: true, user: data.user };
    } catch (err: any) {
      console.warn('[EmailOtpService] Lỗi xác thực Google token:', err?.message);
      return { success: false, message: 'Lỗi kết nối máy chủ xác thực Google OAuth' };
    }
  }
}
