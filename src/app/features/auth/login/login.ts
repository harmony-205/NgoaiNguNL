import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import { StudentManagementService } from '../../../core/services/student-management.service';

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

  studentService = inject(StudentManagementService);

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
      const { username, password } = this.loginForm.value;
      const lower = (username || '').toLowerCase();
      const role = (lower.includes('admin') || lower.includes('teacher') || lower.includes('linh')) 
        ? 'teacher' 
        : 'student';
      
      let displayName = role === 'teacher' ? 'Cô Nghiêm Linh (Admin)' : (username || 'Học viên');
      let email = role === 'teacher' ? 'admin@nghiemlinh.edu.vn' : `${username}@gmail.com`;

      if (role === 'student') {
        const student = this.studentService.findByEmail(username) || this.studentService.findByName(username);
        if (student) {
          displayName = student.fullName;
          email = student.email;
        }
      }

      this.userService.loginAs(role, displayName, email, false, password);
      
      const returnUrl = this.route.snapshot.queryParams['returnUrl'] || (role === 'teacher' ? '/admin' : '/course/tieng-trung');
      this.router.navigateByUrl(returnUrl);
    }
  }

  onRegisterSubmit() {
    if (this.registerForm.valid) {
      const val = this.registerForm.value;
      
      // Save to StudentManagementService so admin can see and manage
      this.studentService.addStudent({
        fullName: val.fullName,
        email: val.email,
        course: val.course || 'Tiếng Trung',
        isInternal: !!val.hasStudiedBefore,
        classTeacherZalo: val.previousClass || (val.hasStudiedBefore ? 'Học viên Trung tâm' : 'Học viên ngoài TT'),
        registeredDate: new Date().toISOString().split('T')[0],
        hskAdvanceApproved: false,
        status: 'active',
        password: val.password
      });

      this.userService.loginAs('student', val.fullName, val.email, false, val.password);
      this.registerSuccess = true;
      setTimeout(() => {
        this.router.navigate(['/course/tieng-trung']);
      }, 500);
    }
  }

  signUpWithGoogle() {
    const student = this.studentService.findByEmail('viet.duong@gmail.com') || 
                    this.studentService.findByName('Dương Quốc Việt');
    
    if (!student) {
      this.studentService.addStudent({
        fullName: 'Dương Quốc Việt',
        email: 'viet.duong@gmail.com',
        course: 'Tiếng Trung',
        isInternal: false,
        classTeacherZalo: 'Đăng ký qua Google',
        registeredDate: new Date().toISOString().split('T')[0],
        hskAdvanceApproved: false,
        status: 'active',
        isGoogleAuth: true
      });
    }

    this.userService.loginAs('student', 'Dương Quốc Việt', 'viet.duong@gmail.com', true);
    this.router.navigate(['/course/tieng-trung']);
  }
}
