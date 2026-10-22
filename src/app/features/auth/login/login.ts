import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class LoginComponent implements OnInit {
  isLoginMode = true;
  loginForm: FormGroup;
  registerForm: FormGroup;
  captchaQuestion = '';
  loginError = '';
  registerSuccess = false;
  private expectedCaptcha = '';

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      course: ['Tiếng Trung', Validators.required],
      hasStudiedBefore: [false],
      previousClass: [''],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]],
      confirmPassword: ['', Validators.required],
      captcha: ['', Validators.required]
    }, { validators: [this.passwordMatchValidator, this.captchaValidator.bind(this)] });

    this.generateCaptcha();
  }

  generateCaptcha() {
    const a = Math.floor(Math.random() * 9) + 1;
    const b = Math.floor(Math.random() * 9) + 1;
    this.captchaQuestion = `${a} + ${b} = ?`;
    this.expectedCaptcha = (a + b).toString();
    this.registerForm?.get('captcha')?.updateValueAndValidity();
  }

  captchaValidator(g: FormGroup) {
    const val = g.get('captcha')?.value;
    if (!val) return null;
    return val.toString().trim() === this.expectedCaptcha ? null : { captchaInvalid: true };
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['mode'] === 'register') {
        this.isLoginMode = false;
      } else if (params['mode'] === 'login') {
        this.isLoginMode = true;
      }
    });
  }

  toggleMode(isLogin: boolean) {
    this.isLoginMode = isLogin;
    this.loginError = '';
    if (!isLogin) {
      this.generateCaptcha();
    }
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      const { username } = this.loginForm.value;
      const lower = (username || '').toLowerCase();
      const role = (lower.includes('admin') || lower.includes('teacher') || lower.includes('linh')) 
        ? 'teacher' 
        : 'student';
      
      const displayName = role === 'teacher' ? 'Cô Nghiêm Linh (Admin)' : (username || 'Học viên');
      this.userService.loginAs(role, displayName);
      
      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || (role === 'teacher' ? '/admin' : '/course/tieng-trung');
      this.router.navigateByUrl(returnUrl);
    }
  }

  onRegisterSubmit() {
    if (this.registerForm.valid) {
      const val = this.registerForm.value;
      this.userService.loginAs('student', val.fullName, val.email);
      this.registerSuccess = true;
      setTimeout(() => {
        this.router.navigate(['/course/tieng-trung']);
      }, 500);
    }
  }

  signUpWithGoogle() {
    // Simulated secure OAuth2 login flow
    this.userService.loginAs('student', 'Google User', 'user@gmail.com');
    this.router.navigate(['/course/tieng-trung']);
  }
}
