import { Injectable, signal, computed, inject } from '@angular/core';
import { StudentManagementService } from './student-management.service';

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'teacher' | 'student';
  avatarUrl: string;
  hskAdvanceApproved?: boolean;
  isGoogleAuth?: boolean;
  password?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private studentService = inject(StudentManagementService);

  // Use Angular Signals for reactive state
  currentUser = signal<User | null>(null);

  // Computed helper to check if user has admin/teacher rights
  isTeacher = computed(() => this.currentUser()?.role === 'teacher');
  hasHskAdvanceAccess = computed(() => {
    const user = this.currentUser();
    return user?.role === 'teacher' || !!user?.hskAdvanceApproved;
  });

  constructor() {
    // Check saved session in localStorage if running in browser
    if (typeof window !== 'undefined' && window.localStorage) {
      const savedUser = localStorage.getItem('nl_auth_user');
      if (savedUser) {
        try {
          this.currentUser.set(JSON.parse(savedUser));
          return;
        } catch {
          // ignore parsing error
        }
      }
    }
    // Default demo login as student
    this.loginAs('student');
  }

  loginAs(
    role: 'teacher' | 'student',
    customName?: string,
    email?: string,
    isGoogleAuth = false,
    password?: string
  ) {
    let defaultAvatar = '';
    
    if (role === 'teacher') {
      defaultAvatar = 'assets/logo-nghiem-linh.jpg';
    } else {
      const randomNum = Math.floor(Math.random() * 12) + 1;
      defaultAvatar = `assets/free_avatar/free_avatar_${randomNum}.png`;
    }

    const assignedEmail = email || (role === 'teacher' ? 'admin@nghiemlinh.edu.vn' : 'student@nghiemlinh.edu.vn');
    const assignedName = customName || (role === 'teacher' ? 'Cô Nghiêm Linh (Admin)' : 'Học viên');

    // Check if student record exists in studentService
    let hskApproved = role === 'teacher';
    let storedPassword = password || 'Password123';

    if (role === 'student') {
      const existing = this.studentService.findByEmail(assignedEmail);
      if (existing) {
        hskApproved = existing.hskAdvanceApproved;
        if (existing.password) storedPassword = existing.password;
        if (existing.avatarUrl) defaultAvatar = existing.avatarUrl;
      }
    }

    const user: User = {
      id: 'usr_' + Math.random().toString(36).substring(2, 9),
      name: assignedName,
      email: assignedEmail,
      role: role,
      avatarUrl: defaultAvatar,
      hskAdvanceApproved: hskApproved,
      isGoogleAuth: isGoogleAuth,
      password: storedPassword
    };

    this.setCurrentUser(user);
  }

  // Security: only allow switching role if currently teacher/admin
  switchRole() {
    const current = this.currentUser();
    if (!current) return;
    
    // Students cannot switch role!
    if (current.role === 'student') {
      console.warn('Học viên không có quyền chuyển sang vai trò Giáo viên.');
      return;
    }

    // Teacher can toggle to preview student view
    this.loginAs('student', 'Giáo viên (Chế độ xem Học viên)', current.email);
  }

  setHskApproval(approved: boolean) {
    const user = this.currentUser();
    if (user) {
      this.setCurrentUser({
        ...user,
        hskAdvanceApproved: approved
      });
    }
  }

  private setCurrentUser(user: User | null) {
    this.currentUser.set(user);
    if (typeof window !== 'undefined' && window.localStorage) {
      if (user) {
        localStorage.setItem('nl_auth_user', JSON.stringify(user));
      } else {
        localStorage.removeItem('nl_auth_user');
      }
    }
  }

  logout() {
    this.setCurrentUser(null);
  }

  updateProfile(name: string, avatarUrl: string) {
    const user = this.currentUser();
    if (user) {
      const updatedUser: User = {
        ...user,
        name: name,
        avatarUrl: avatarUrl
      };
      this.setCurrentUser(updatedUser);

      // Also sync with StudentManagementService
      const student = this.studentService.findByEmail(user.email);
      if (student) {
        this.studentService.updateStudent(student.id, {
          fullName: name,
          avatarUrl: avatarUrl
        });
      }
    }
  }

  changePassword(currentPass: string, newPass: string): { success: boolean; message: string } {
    const user = this.currentUser();
    if (!user) {
      return { success: false, message: 'Vui lòng đăng nhập để thực hiện.' };
    }

    if (user.isGoogleAuth) {
      return { success: false, message: 'Tài khoản đăng nhập qua Google không thể đổi mật khẩu tại đây.' };
    }

    if (user.password && user.password !== currentPass) {
      return { success: false, message: 'Mật khẩu hiện tại không đúng.' };
    }

    if (!newPass || newPass.length < 6) {
      return { success: false, message: 'Mật khẩu mới phải có ít nhất 6 ký tự.' };
    }

    // Update current user
    const updatedUser: User = {
      ...user,
      password: newPass
    };
    this.setCurrentUser(updatedUser);

    // Update in student roster
    const student = this.studentService.findByEmail(user.email);
    if (student) {
      this.studentService.resetPassword(student.id, newPass);
    }

    return { success: true, message: 'Đổi mật khẩu thành công!' };
  }
}
