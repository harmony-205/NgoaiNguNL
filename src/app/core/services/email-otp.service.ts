import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailOtpService {
  // Configured Google OAuth 2.0 Client ID provided by user
  readonly GOOGLE_CLIENT_ID = '641790014454-fkoq1mrc904bheld7cht4dmo4pg5tos1.apps.googleusercontent.com';

  // API base URL for local OTP mailer service
  private readonly API_URL = 'http://localhost:3001/api/send-otp';

  /**
   * Send real OTP email to recipient's Gmail via backend SMTP service
   */
  async sendOtpEmail(to: string, otp: string, type: 'register' | 'forgot'): Promise<{ success: boolean; message?: string }> {
    try {
      const response = await fetch(this.API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to: to.trim(), otp: otp.trim(), type })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || errorData.message || 'Không thể gửi email OTP');
      }

      const data = await response.json();
      return { success: true, message: data.messageId };
    } catch (err: any) {
      console.warn('[EmailOtpService] Không thể kết nối tới local mailer:', err?.message);
      // Fallback: Also try relative endpoint /api/send-otp in case running SSR
      try {
        const res2 = await fetch('/api/send-otp', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ to: to.trim(), otp: otp.trim(), type })
        });
        if (res2.ok) {
          return { success: true };
        }
      } catch {
        // ignore fallback failure
      }

      return { success: false, message: err?.message || 'Lỗi kết nối máy chủ gửi thư' };
    }
  }
}

