import { Injectable, signal, computed } from '@angular/core';

export interface User {
  id: string;
  name: string;
  email?: string;
  role: 'teacher' | 'student';
  avatarUrl: string;
  hskAdvanceApproved?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
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

  loginAs(role: 'teacher' | 'student', customName?: string, email?: string) {
    let defaultAvatar = '';
    
    if (role === 'teacher') {
      defaultAvatar = 'assets/logo.jpg';
    } else {
      const randomNum = Math.floor(Math.random() * 12) + 1;
      defaultAvatar = `assets/free_avatar/free_avatar_${randomNum}.png`;
    }

    const mockUser: User = {
      id: 'usr_' + Math.random().toString(36).substr(2, 9),
      name: customName || (role === 'teacher' ? 'Cô Nghiêm Linh' : 'Học viên Demo'),
      email: email || (role === 'teacher' ? 'admin@nghiemlinh.edu.vn' : 'hocvien@nghiemlinh.edu.vn'),
      role: role,
      avatarUrl: defaultAvatar,
      hskAdvanceApproved: role === 'teacher' // Teachers always have access
    };

    this.setCurrentUser(mockUser);
  }

  switchRole() {
    const current = this.currentUser();
    if (!current || current.role === 'student') {
      this.loginAs('teacher');
    } else {
      this.loginAs('student');
    }
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
      this.setCurrentUser({
        ...user,
        name: name,
        avatarUrl: avatarUrl
      });
    }
  }
}

