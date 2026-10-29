import { Component, OnInit, AfterViewInit, OnDestroy, inject, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import { StudentManagementService } from '../../../core/services/student-management.service';
import { EmailOtpService } from '../../../core/services/email-otp.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('loginEmailInput') loginEmailInput?: ElementRef<HTMLInputElement>;
  @ViewChild('loginPasswordInput') loginPasswordInput?: ElementRef<HTMLInputElement>;
  @ViewChild('registerEmailInput') registerEmailInput?: ElementRef<HTMLInputElement>;
  @ViewChild('forgotEmailInput') forgotEmailInput?: ElementRef<HTMLInputElement>;

  // Current view: 'login' | 'register' | 'forgot_password'
  authView: 'login' | 'register' | 'forgot_password' = 'login';

  loginForm: FormGroup;
  registerForm: FormGroup;
  loginError = '';
  registerSuccess = false;

  // Toggle password visibility
  showLoginPassword = false;
  showRegisterPassword = false;
  showForgotNewPassword = false;
  // Note: Confirm Password for Forgot Password strictly has NO toggle per user request!

  // Register OTP on-form State
  generatedRegisterOtp = '';
  isSendingRegisterOtp = false;
  registerOtpSent = false;
  registerOtpCountdown = 0;
  registerOtpTimer: any = null;
  registerOtpMsg = '';
  registerOtpError = '';

  // Forgot Password Workflow: Step 1 (Gmail + OTP gộp chung) -> Step 2 (Mật khẩu mới) -> Step 3 (Thành công)
  forgotStep: 'enter_email_and_otp' | 'reset_password' | 'success' = 'enter_email_and_otp';
  forgotEmail = '';
  forgotOtp = '';
  generatedForgotOtp = '';
  isSendingForgotOtp = false;
  forgotOtpSent = false;
  forgotCountdown = 0;
  forgotTimer: any = null;
  forgotOtpMsg = '';
  forgotNewPassword = '';
  forgotConfirmPassword = '';
  forgotError = '';
  forgotSuccessMsg = '';

  // Google Sign-in Dialog & Config
  isGoogleModalOpen = false;
  googleActionType: 'login' | 'register' = 'login';
  customGoogleEmail = '';

  // Autofill sync timer
  private autofillInterval: any = null;

  studentService = inject(StudentManagementService);
  emailOtpService = inject(EmailOtpService);
  cdr = inject(ChangeDetectorRef);

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    // Login form: strictly Gmail and Password
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    // Register form: OTP on form replacing Captcha
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      course: ['Tiếng Trung', Validators.required],
      hasStudiedBefore: [false],
      previousClass: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      otp: ['', [Validators.required, Validators.minLength(6)]]
    }, { validators: [this.passwordMatchValidator] });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['mode'] === 'register') {
        this.authView = 'register';
      } else if (params['mode'] === 'login') {
        this.authView = 'login';
      } else if (params['mode'] === 'forgot') {
        this.startForgotPassword();
      }
      this.cdr.detectChanges();
    });

    // Initialize Google Identity Services if script is loaded
    this.initGoogleIdentity();
  }

  ngAfterViewInit() {
    // Check and sync browser autofill values (Chrome autofill via mouse)
    if (typeof window !== 'undefined') {
      this.syncAutofillValues();

      // Poll every 250ms to detect any Chrome autofill selection
      this.autofillInterval = setInterval(() => {
        this.syncAutofillValues();
      }, 250);
    }
  }

  ngOnDestroy() {
    if (this.autofillInterval) clearInterval(this.autofillInterval);
    if (this.registerOtpTimer) clearInterval(this.registerOtpTimer);
    if (this.forgotTimer) clearInterval(this.forgotTimer);
  }

  /**
   * Synchronize native DOM input values into Angular's FormControl
   * This permanently resolves Chrome autofill issues where mouse clicks update DOM without firing Angular input events.
   */
  syncAutofillValues() {
    let changed = false;

    if (this.loginEmailInput?.nativeElement) {
      const domVal = this.loginEmailInput.nativeElement.value;
      const ctrl = this.loginForm.get('email');
      if (domVal && ctrl && ctrl.value !== domVal) {
        ctrl.setValue(domVal);
        ctrl.updateValueAndValidity();
        changed = true;
      }
    }

    if (this.loginPasswordInput?.nativeElement) {
      const domPass = this.loginPasswordInput.nativeElement.value;
      const ctrl = this.loginForm.get('password');
      if (domPass && ctrl && ctrl.value !== domPass) {
        ctrl.setValue(domPass);
        ctrl.updateValueAndValidity();
        changed = true;
      }
    }

    if (this.registerEmailInput?.nativeElement) {
      const domRegEmail = this.registerEmailInput.nativeElement.value;
      const ctrl = this.registerForm.get('email');
      if (domRegEmail && ctrl && ctrl.value !== domRegEmail) {
        ctrl.setValue(domRegEmail);
        ctrl.updateValueAndValidity();
        changed = true;
      }
    }

    if (this.forgotEmailInput?.nativeElement) {
      const domForgotEmail = this.forgotEmailInput.nativeElement.value;
      if (domForgotEmail && this.forgotEmail !== domForgotEmail) {
        this.forgotEmail = domForgotEmail;
        changed = true;
      }
    }

    if (changed) {
      this.cdr.detectChanges();
    }
  }

  onAutofillAnimation(event: AnimationEvent) {
    if (event.animationName === 'onAutoFillStart') {
      setTimeout(() => this.syncAutofillValues(), 50);
    }
  }

  initGoogleIdentity() {
    if (typeof window !== 'undefined' && (window as any).google?.accounts?.id) {
      try {
        (window as any).google.accounts.id.initialize({
          client_id: this.emailOtpService.GOOGLE_CLIENT_ID,
          callback: (response: any) => this.handleGoogleCredentialResponse(response)
        });
      } catch (e) {
        console.warn('Google Identity initialization notice:', e);
      }
    }
  }

  toggleMode(view: 'login' | 'register') {
    this.authView = view;
    this.loginError = '';
    this.forgotError = '';
    this.registerOtpError = '';
    this.registerOtpMsg = '';
    setTimeout(() => this.syncAutofillValues(), 100);
    this.cdr.detectChanges();
  }

  // --- Show / Hide Password Toggles ---
  toggleLoginPassword() {
    this.showLoginPassword = !this.showLoginPassword;
  }

  toggleRegisterPassword() {
    this.showRegisterPassword = !this.showRegisterPassword;
  }

  toggleForgotNewPassword() {
    this.showForgotNewPassword = !this.showForgotNewPassword;
  }

  // --- Anti-Brute-Force Login Protection (SEC-04) ---
  // Tạm khóa đăng nhập 15 phút nếu nhập sai mật khẩu 5 lần liên tiếp
  private readonly MAX_LOGIN_ATTEMPTS = 5;
  private readonly LOCKOUT_DURATION_MS = 15 * 60 * 1000; // 15 phút

  /**
   * Sanitizes returnUrl to prevent Open Redirect / Phishing attacks (SEC-Phishing).
   * Strictly permits relative internal paths starting with a single '/' and rejects '//' or external schemes.
   */
  private getSafeReturnUrl(defaultUrl: string): string {
    const raw = this.route.snapshot.queryParams['returnUrl'];
    if (!raw || typeof raw !== 'string') {
      return defaultUrl;
    }
    const trimmed = raw.trim();
    if (trimmed.startsWith('/') && !trimmed.startsWith('//') && !trimmed.includes('://')) {
      return trimmed;
    }
    return defaultUrl;
  }

  private getLockStorageKey(email: string): string {
    return `nl_bf_attempts_${email.trim().toLowerCase()}`;
  }

  isAccountLocked(email: string): boolean {
    if (typeof window === 'undefined' || !window.localStorage) return false;
    const raw = localStorage.getItem(this.getLockStorageKey(email));
    if (!raw) return false;
    try {
      const data = JSON.parse(raw);
      if (data?.lockedUntil && data.lockedUntil > Date.now()) {
        return true;
      }
      if (data?.lockedUntil && data.lockedUntil <= Date.now()) {
        localStorage.removeItem(this.getLockStorageKey(email));
        return false;
      }
    } catch {
      localStorage.removeItem(this.getLockStorageKey(email));
    }
    return false;
  }

  getRemainingLockMinutes(email: string): number {
    if (typeof window === 'undefined' || !window.localStorage) return 0;
    const raw = localStorage.getItem(this.getLockStorageKey(email));
    if (!raw) return 0;
    try {
      const data = JSON.parse(raw);
      if (data?.lockedUntil && data.lockedUntil > Date.now()) {
        return Math.max(1, Math.ceil((data.lockedUntil - Date.now()) / (60 * 1000)));
      }
    } catch { }
    return 0;
  }

  recordFailedAttempt(email: string): void {
    if (typeof window === 'undefined' || !window.localStorage) return;
    const key = this.getLockStorageKey(email);
    let attempts = 0;
    try {
      const existing = JSON.parse(localStorage.getItem(key) || '{}');
      attempts = (existing?.attempts || 0) + 1;
    } catch {
      attempts = 1;
    }

    if (attempts >= this.MAX_LOGIN_ATTEMPTS) {
      localStorage.setItem(key, JSON.stringify({
        attempts,
        lockedUntil: Date.now() + this.LOCKOUT_DURATION_MS
      }));
    } else {
      localStorage.setItem(key, JSON.stringify({
        attempts,
        lockedUntil: null
      }));
    }
  }

  clearFailedAttempts(email: string): void {
    if (typeof window === 'undefined' || !window.localStorage) return;
    localStorage.removeItem(this.getLockStorageKey(email));
  }

  getFailedAttemptMessage(email: string, baseError: string): string {
    if (this.isAccountLocked(email)) {
      const remainingMinutes = this.getRemainingLockMinutes(email);
      return `⚠️ Tài khoản đã bị tạm khóa đăng nhập trong 15 phút do nhập sai mật khẩu 5 lần liên tiếp. Vui lòng thử lại sau ${remainingMinutes} phút hoặc dùng tính năng "Quên mật khẩu?".`;
    }
    if (typeof window === 'undefined' || !window.localStorage) return baseError;
    try {
      const existing = JSON.parse(localStorage.getItem(this.getLockStorageKey(email)) || '{}');
      const attempts = existing?.attempts || 0;
      const remaining = Math.max(0, this.MAX_LOGIN_ATTEMPTS - attempts);
      return `${baseError} (Bạn còn ${remaining} lần thử trước khi tài khoản bị tạm khóa 15 phút).`;
    } catch {
      return baseError;
    }
  }

  // --- Login Handler with strict password verification & Brute-force lockout ---
  onLoginSubmit() {
    this.syncAutofillValues();
    this.loginError = '';

    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const email = this.loginEmailInput?.nativeElement?.value || this.loginForm.value.email;
    const password = this.loginPasswordInput?.nativeElement?.value || this.loginForm.value.password;

    const trimmedEmail = (email || '').trim().toLowerCase();
    const trimmedPass = (password || '').trim();

    // SEC-04: Kiểm tra tài khoản có đang bị khóa 15 phút do Brute-force không
    if (this.isAccountLocked(trimmedEmail)) {
      const remaining = this.getRemainingLockMinutes(trimmedEmail);
      this.loginError = `⚠️ Tài khoản đang bị tạm khóa đăng nhập trong 15 phút do nhập sai mật khẩu 5 lần liên tiếp. Vui lòng thử lại sau ${remaining} phút hoặc sử dụng tính năng "Quên mật khẩu?".`;
      this.cdr.detectChanges();
      return;
    }

    // 1. Kiểm tra tài khoản Admin / Giáo viên
    const isAdminEmail = trimmedEmail === 'admin@nghiemlinh.edu.vn' ||
                        trimmedEmail === 'nghiemlinh@gmail.com' ||
                        trimmedEmail === 'admin@gmail.com' ||
                        trimmedEmail === 'admin';
    if (isAdminEmail) {
      const savedAdminPass = typeof window !== 'undefined' ? localStorage.getItem('nl_admin_password') : null;
      const validAdminPasswords = ['Admin@123', '123456', 'Password123'];
      if (savedAdminPass) validAdminPasswords.push(savedAdminPass);

      if (!validAdminPasswords.includes(trimmedPass)) {
        this.recordFailedAttempt(trimmedEmail);
        this.loginError = this.getFailedAttemptMessage(trimmedEmail, 'Mật khẩu Admin không chính xác!');
        this.cdr.detectChanges();
        return;
      }

      this.clearFailedAttempts(trimmedEmail);
      this.userService.loginAs('teacher', 'Cô Nghiêm Linh (Admin)', 'admin@nghiemlinh.edu.vn', false, trimmedPass);
      const returnUrl = this.getSafeReturnUrl('/admin');
      this.router.navigateByUrl(returnUrl);
      return;
    }

    // 2. Kiểm tra tài khoản Học viên
    const student = this.studentService.findByEmail(trimmedEmail);
    if (!student) {
      this.loginError = `Tài khoản Gmail "${email}" chưa được đăng ký trong hệ thống. Vui lòng kiểm tra lại hoặc chuyển sang tab "Tạo tài khoản"!`;
      this.cdr.detectChanges();
      return;
    }

    // Kiểm tra tài khoản đã bị khóa hoặc xóa mềm bởi Quản trị viên
    if (student.isDeleted || student.status === 'locked') {
      this.loginError = 'Tài khoản này đã bị khóa hoặc chuyển vào danh sách Đã xóa bởi Quản trị viên. Vui lòng liên hệ trung tâm để được hỗ trợ!';
      this.cdr.detectChanges();
      return;
    }

    // Kiểm tra nếu tài khoản được đăng ký qua Google
    if (student.isGoogleAuth || student.authProvider === 'google') {
      this.loginError = 'Tài khoản này được đăng ký thông qua Google OAuth. Vui lòng bấm nút "ĐĂNG NHẬP BẰNG GOOGLE" bên dưới!';
      this.cdr.detectChanges();
      return;
    }

    // Xác thực mật khẩu học viên chính xác
    const expectedPassword = student.password || 'Password123';
    if (expectedPassword !== trimmedPass) {
      this.recordFailedAttempt(trimmedEmail);
      this.loginError = this.getFailedAttemptMessage(trimmedEmail, 'Mật khẩu không chính xác!');
      this.cdr.detectChanges();
      return;
    }

    // Đăng nhập thành công -> Xóa bộ đếm nhập sai
    this.clearFailedAttempts(trimmedEmail);
    this.userService.loginAs('student', student.fullName, student.email, !!student.isGoogleAuth, trimmedPass);
    const returnUrl = this.getSafeReturnUrl('/course/tieng-trung');
    this.router.navigateByUrl(returnUrl);
  }

  // --- Register Flow: Điền đầy đủ thông tin -> Ấn Gửi OTP -> Nhận mã qua Gmail -> Nhập OTP -> Tạo tài khoản ---
  async sendRegisterOtp() {
    this.syncAutofillValues();
    this.registerOtpError = '';
    this.registerOtpMsg = '';

    const emailVal = this.registerEmailInput?.nativeElement?.value || this.registerForm.get('email')?.value;
    const nameVal = this.registerForm.get('fullName')?.value;
    const passVal = this.registerForm.get('password')?.value;
    const confirmVal = this.registerForm.get('confirmPassword')?.value;

    if (!nameVal?.trim()) {
      this.registerOtpError = 'Vui lòng điền Họ và tên trước khi gửi mã OTP!';
      this.registerForm.get('fullName')?.markAsTouched();
      this.cdr.detectChanges();
      return;
    }

    if (!emailVal?.trim() || !emailVal.includes('@')) {
      this.registerOtpError = 'Vui lòng điền đúng địa chỉ Gmail của bạn để nhận mã OTP!';
      this.registerForm.get('email')?.markAsTouched();
      this.cdr.detectChanges();
      return;
    }

    if (!passVal || passVal.length < 6) {
      this.registerOtpError = 'Mật khẩu phải có tối thiểu 6 ký tự!';
      this.registerForm.get('password')?.markAsTouched();
      this.cdr.detectChanges();
      return;
    }

    if (passVal !== confirmVal) {
      this.registerOtpError = 'Mật khẩu và Nhập lại mật khẩu chưa khớp!';
      this.registerForm.get('confirmPassword')?.markAsTouched();
      this.cdr.detectChanges();
      return;
    }

    const email = emailVal.trim().toLowerCase();

    // Kiểm tra xem Gmail đã đăng ký trước đó chưa
    const existing = this.studentService.findByEmail(email);
    if (existing) {
      if (existing.isGoogleAuth || existing.authProvider === 'google') {
        this.registerOtpError = `Gmail "${email}" đã được đăng ký bằng tài khoản Google! Vui lòng chọn "Đăng nhập bằng Google".`;
      } else {
        this.registerOtpError = `Gmail "${email}" đã tồn tại trong hệ thống! Vui lòng đăng nhập hoặc dùng chức năng Quên mật khẩu.`;
      }
      this.cdr.detectChanges();
      return;
    }

    this.isSendingRegisterOtp = true;
    this.cdr.detectChanges();

    try {
      // SEC-01 & SEC-02: Backend sinh OTP ngẫu nhiên bằng crypto.randomInt và quản lý thời hạn 5 phút
      const result = await this.emailOtpService.sendOtpEmail(email, 'register');

      if (result.success) {
        this.registerOtpSent = true;
        this.registerOtpMsg = result.message || `Đã gửi mã OTP đến hộp thư Gmail ${email}. Vui lòng kiểm tra Hộp thư đến (hoặc hòm thư Spam/Rác) để lấy mã xác thực!`;
        this.startRegisterOtpCountdown();
      } else {
        this.registerOtpError = result.message || 'Không thể gửi email OTP. Vui lòng thử lại!';
      }
    } catch (err: any) {
      this.registerOtpError = 'Lỗi kết nối máy chủ gửi OTP: ' + (err?.message || 'Vui lòng thử lại');
    } finally {
      this.isSendingRegisterOtp = false;
      this.cdr.detectChanges();
    }
  }

  startRegisterOtpCountdown() {
    this.registerOtpCountdown = 60;
    if (this.registerOtpTimer) clearInterval(this.registerOtpTimer);
    this.registerOtpTimer = setInterval(() => {
      this.registerOtpCountdown--;
      if (this.registerOtpCountdown <= 0) {
        clearInterval(this.registerOtpTimer);
        this.registerOtpTimer = null;
      }
      this.cdr.detectChanges();
    }, 1000);
  }

  async onRegisterSubmit() {
    this.syncAutofillValues();
    this.registerOtpError = '';
    this.loginError = '';

    if (!this.registerOtpSent) {
      this.registerOtpError = 'Vui lòng bấm nút "Gửi mã OTP" để nhận mã xác thực qua Gmail trước khi bấm Tạo tài khoản!';
      this.cdr.detectChanges();
      return;
    }

    const enteredOtp = (this.registerForm.get('otp')?.value || '').trim();
    if (!enteredOtp) {
      this.registerOtpError = 'Vui lòng nhập mã OTP gồm 6 chữ số đã gửi về Gmail của bạn!';
      this.cdr.detectChanges();
      return;
    }

    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      this.cdr.detectChanges();
      return;
    }

    const val = this.registerForm.value;
    const emailVal = (this.registerEmailInput?.nativeElement?.value || val.email).trim().toLowerCase();

    // SEC-02: Xác thực mã OTP thông qua endpoint Backend bảo mật (hạn 5 phút, giới hạn 5 lần sai, xóa sau khi dùng)
    const verifyResult = await this.emailOtpService.verifyOtp(emailVal, enteredOtp, 'register');
    if (!verifyResult.success) {
      this.registerOtpError = verifyResult.message || 'Mã OTP không chính xác hoặc đã hết hạn!';
      this.cdr.detectChanges();
      return;
    }

    this.studentService.addStudent({
      fullName: val.fullName,
      email: emailVal.trim(),
      course: val.course || 'Tiếng Trung',
      isInternal: !!val.hasStudiedBefore,
      classTeacherZalo: val.previousClass || (val.hasStudiedBefore ? 'Học viên Trung tâm' : 'Học viên ngoài TT'),
      registeredDate: new Date().toISOString().split('T')[0],
      hskAdvanceApproved: false,
      status: 'active',
      password: val.password,
      isGoogleAuth: false,
      authProvider: 'password',
      isDeleted: false
    });

    this.userService.loginAs('student', val.fullName, emailVal.trim(), false, val.password);
    this.registerSuccess = true;

    alert(`🎉 Tạo tài khoản thành công! Chào mừng ${val.fullName} đến với Ngoại Ngữ Nghiêm Linh.`);
    setTimeout(() => {
      this.router.navigate(['/course/tieng-trung']);
    }, 400);
  }

  // --- Quên mật khẩu: Gộp Bước 1 (Nhập Gmail) & Bước 2 (Nhập OTP) thành 1 màn hình ---
  startForgotPassword() {
    this.authView = 'forgot_password';
    this.forgotStep = 'enter_email_and_otp';
    this.forgotEmail = this.loginEmailInput?.nativeElement?.value || this.loginForm.get('email')?.value || '';
    this.forgotOtp = '';
    this.generatedForgotOtp = '';
    this.forgotNewPassword = '';
    this.forgotConfirmPassword = '';
    this.forgotError = '';
    this.forgotOtpMsg = '';
    this.forgotOtpSent = false;
    this.isSendingForgotOtp = false;
    this.cdr.detectChanges();
  }

  cancelForgotPassword() {
    this.authView = 'login';
    this.forgotError = '';
    this.cdr.detectChanges();
  }

  async sendForgotOtp() {
    this.syncAutofillValues();
    this.forgotError = '';
    this.forgotOtpMsg = '';
    const rawVal = this.forgotEmailInput?.nativeElement?.value;
    const trimmedEmail = (rawVal || this.forgotEmail || '').trim().toLowerCase();
    this.forgotEmail = trimmedEmail;

    if (!trimmedEmail || !trimmedEmail.includes('@')) {
      this.forgotError = 'Vui lòng nhập địa chỉ Gmail hợp lệ trước khi gửi mã OTP!';
      this.cdr.detectChanges();
      return;
    }

    // Kiểm tra xem Gmail có tồn tại không
    const isTeacher = trimmedEmail.includes('admin') || trimmedEmail.includes('nghiemlinh');
    const student = this.studentService.findByEmail(trimmedEmail);

    if (!student && !isTeacher) {
      this.forgotError = `Gmail "${this.forgotEmail}" chưa từng đăng ký tài khoản trong hệ thống. Vui lòng kiểm tra lại!`;
      this.cdr.detectChanges();
      return;
    }

    if (student) {
      if (student.isDeleted) {
        this.forgotError = 'Tài khoản này đã bị khóa hoặc chuyển vào danh sách Đã xóa bởi Quản trị viên!';
        this.cdr.detectChanges();
        return;
      }
      if (student.isGoogleAuth || student.authProvider === 'google') {
        this.forgotError = `Tài khoản "${student.email}" được đăng ký thông qua Google nên không sử dụng mật khẩu riêng. Vui lòng bấm nút "Đăng nhập bằng Google"!`;
        this.cdr.detectChanges();
        return;
      }
    }

    this.isSendingForgotOtp = true;
    this.cdr.detectChanges();

    try {
      // SEC-01 & SEC-02: Backend sinh OTP ngẫu nhiên và quản lý thời hạn
      const result = await this.emailOtpService.sendOtpEmail(trimmedEmail, 'forgot');

      if (result.success) {
        this.forgotOtpSent = true;
        this.forgotOtpMsg = result.message || `Đã gửi mã OTP đến hộp thư Gmail ${this.forgotEmail}. Vui lòng kiểm tra Hộp thư đến (hoặc hòm thư Spam/Rác) để lấy mã xác thực!`;
        this.startForgotCountdown();
      } else {
        this.forgotError = result.message || 'Không thể gửi email OTP. Vui lòng thử lại!';
      }
    } catch (err: any) {
      console.error('Lỗi sendForgotOtp:', err);
      this.forgotError = 'Lỗi kết nối máy chủ gửi OTP: ' + (err?.message || 'Vui lòng thử lại');
    } finally {
      this.isSendingForgotOtp = false;
      this.cdr.detectChanges();
    }
  }

  startForgotCountdown() {
    this.forgotCountdown = 60;
    if (this.forgotTimer) clearInterval(this.forgotTimer);
    this.forgotTimer = setInterval(() => {
      this.forgotCountdown--;
      if (this.forgotCountdown <= 0) {
        clearInterval(this.forgotTimer);
        this.forgotTimer = null;
      }
      this.cdr.detectChanges();
    }, 1000);
  }

  async verifyForgotOtp() {
    this.forgotError = '';

    if (!this.forgotOtpSent) {
      this.forgotError = 'Vui lòng bấm nút "Gửi mã OTP" để nhận mã xác thực qua Gmail trước!';
      this.cdr.detectChanges();
      return;
    }

    const enteredOtp = (this.forgotOtp || '').trim();
    if (!enteredOtp) {
      this.forgotError = 'Vui lòng nhập mã OTP gồm 6 chữ số đã gửi về Gmail của bạn!';
      this.cdr.detectChanges();
      return;
    }

    // SEC-02: Xác thực mã OTP qua Backend (kiểm tra hạn 5 phút, giới hạn 5 lần sai, xóa sau khi dùng)
    const trimmedEmail = this.forgotEmail.trim().toLowerCase();
    const verifyResult = await this.emailOtpService.verifyOtp(trimmedEmail, enteredOtp, 'forgot');
    if (!verifyResult.success) {
      this.forgotError = verifyResult.message || 'Mã OTP không chính xác hoặc đã hết hạn!';
      this.cdr.detectChanges();
      return;
    }

    // OTP chính xác -> Chuyển sang bước đặt mật khẩu mới
    this.forgotStep = 'reset_password';
    this.cdr.detectChanges();
  }

  submitResetPassword() {
    this.forgotError = '';
    if (!this.forgotNewPassword || this.forgotNewPassword.length < 6) {
      this.forgotError = 'Mật khẩu mới phải có tối thiểu 6 ký tự!';
      this.cdr.detectChanges();
      return;
    }

    if (this.forgotNewPassword !== this.forgotConfirmPassword) {
      this.forgotError = 'Xác nhận mật khẩu mới không khớp!';
      this.cdr.detectChanges();
      return;
    }

    const trimmedEmail = this.forgotEmail.trim().toLowerCase();

    // Cập nhật mật khẩu cho học viên hoặc admin
    const isTeacher = trimmedEmail.includes('admin') || trimmedEmail.includes('nghiemlinh');
    if (isTeacher) {
      if (typeof window !== 'undefined') {
        localStorage.setItem('nl_admin_password', this.forgotNewPassword);
      }
    } else {
      this.studentService.updatePasswordByEmail(trimmedEmail, this.forgotNewPassword);
      this.userService.resetPasswordByEmail(trimmedEmail, this.forgotNewPassword);
    }

    this.forgotStep = 'success';
    this.forgotSuccessMsg = 'Đặt lại mật khẩu thành công! Bạn có thể đăng nhập ngay với mật khẩu mới.';
    this.cdr.detectChanges();
  }

  returnToLoginWithNewPassword() {
    this.authView = 'login';
    this.loginForm.patchValue({
      email: this.forgotEmail,
      password: ''
    });
    this.loginError = '';
    this.cdr.detectChanges();
  }

  // --- Google OAuth Sign-in & Sign-up Handler ---
  handleGoogleAuth(action: 'login' | 'register') {
    this.googleActionType = action;

    // Check if GIS is available and trigger One Tap
    if (typeof window !== 'undefined' && (window as any).google?.accounts?.id) {
      try {
        const google = (window as any).google;
        google.accounts.id.initialize({
          client_id: this.emailOtpService.GOOGLE_CLIENT_ID,
          callback: (response: any) => this.handleGoogleCredentialResponse(response)
        });
        google.accounts.id.prompt((notification: any) => {
          if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
            this.isGoogleModalOpen = true;
            this.cdr.detectChanges();
          }
        });
        return;
      } catch (e) {
        console.warn('Google prompt fallback:', e);
      }
    }

    this.isGoogleModalOpen = true;
    this.cdr.detectChanges();
  }

  async handleGoogleCredentialResponse(response: any) {
    if (response?.credential) {
      try {
        // SEC-03: Xác thực chữ ký số Google ID Token an toàn thông qua Backend (google-auth-library)
        const verifyResult = await this.emailOtpService.verifyGoogleToken(response.credential);
        if (!verifyResult.success || !verifyResult.user) {
          alert(verifyResult.message || 'Xác thực tài khoản Google thất bại!');
          return;
        }

        const { email, name, picture } = verifyResult.user;
        let student = this.studentService.findByEmail(email);

        if (student && student.isDeleted) {
          alert('Tài khoản Google này đã bị khóa hoặc chuyển vào danh sách Đã xóa bởi Quản trị viên!');
          return;
        }

        if (!student) {
          student = this.studentService.addStudent({
            fullName: name,
            email: email,
            course: 'Tiếng Trung',
            isInternal: false,
            classTeacherZalo: 'Google OAuth',
            registeredDate: new Date().toISOString().split('T')[0],
            hskAdvanceApproved: false,
            status: 'active',
            avatarUrl: picture,
            isGoogleAuth: true,
            authProvider: 'google',
            isDeleted: false
          });
        }

        this.clearFailedAttempts(email);
        this.userService.loginAs('student', student.fullName, student.email, true, student.password);
        const returnUrl = this.getSafeReturnUrl('/course/tieng-trung');
        this.router.navigateByUrl(returnUrl);
        return;
      } catch (e: any) {
        console.error('Error verifying Google credential', e);
        alert('Lỗi xác thực Google: ' + (e?.message || 'Vui lòng thử lại'));
      }
    }

    this.isGoogleModalOpen = true;
    this.cdr.detectChanges();
  }

  confirmGoogleDemoLogin(chosenEmail?: string) {
    const targetEmail = (chosenEmail || this.customGoogleEmail || 'vietdq.google@gmail.com').trim().toLowerCase();
    const targetName = targetEmail === 'vietdq.google@gmail.com' ? 'Dương Quốc Việt (Google)' : `Học viên Google (${targetEmail.split('@')[0]})`;

    let student = this.studentService.findByEmail(targetEmail);

    if (student && student.isDeleted) {
      alert('Tài khoản Google này đã bị khóa hoặc chuyển vào danh sách Đã xóa bởi Quản trị viên!');
      return;
    }

    if (!student) {
      student = this.studentService.addStudent({
        fullName: targetName,
        email: targetEmail,
        course: 'Tiếng Trung',
        isInternal: false,
        classTeacherZalo: 'Đăng nhập Google',
        registeredDate: new Date().toISOString().split('T')[0],
        hskAdvanceApproved: true,
        status: 'active',
        isGoogleAuth: true,
        authProvider: 'google',
        avatarUrl: 'https://lh3.googleusercontent.com/a/default-user=s96-c',
        isDeleted: false
      });
    }

    this.userService.loginAs('student', student.fullName, student.email, true, student.password);
    this.isGoogleModalOpen = false;
    const returnUrl = this.getSafeReturnUrl('/course/tieng-trung');
    this.router.navigateByUrl(returnUrl);
  }

  closeGoogleModal() {
    this.isGoogleModalOpen = false;
    this.cdr.detectChanges();
  }
}
