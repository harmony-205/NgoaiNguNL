import { Injectable, signal, computed } from '@angular/core';

export interface StudentRecord {
  id: string;
  fullName: string;
  email: string;
  course: string;
  isInternal: boolean;
  classTeacherZalo?: string;
  registeredDate: string;
  hskAdvanceApproved: boolean;
  status: 'active' | 'pending' | 'locked';
  avatarUrl?: string;
  password?: string;
  isGoogleAuth?: boolean;
  authProvider?: 'google' | 'password';
  isDeleted?: boolean;
  deletedAt?: string;
}

const DEFAULT_STUDENTS: StudentRecord[] = [
  {
    id: 'std_viet',
    fullName: 'Dương Quốc Việt',
    email: 'duongvietkp2005@gmail.com',
    course: 'Tiếng Trung',
    isInternal: false,
    classTeacherZalo: 'Học viên ngoài TT',
    registeredDate: '2026-10-27',
    hskAdvanceApproved: false,
    status: 'active',
    password: 'Password123',
    isGoogleAuth: false,
    authProvider: 'password',
    isDeleted: false
  },
  {
    id: 'std_viet_google',
    fullName: 'Dương Quốc Việt (Google)',
    email: 'vietdq.google@gmail.com',
    course: 'Tiếng Trung',
    isInternal: false,
    classTeacherZalo: 'Đăng nhập Google',
    registeredDate: '2026-10-28',
    hskAdvanceApproved: true,
    status: 'active',
    isGoogleAuth: true,
    authProvider: 'google',
    avatarUrl: 'https://lh3.googleusercontent.com/a/default-user=s96-c',
    isDeleted: false
  },
  {
    id: 'std_1',
    fullName: 'Nguyễn Minh Anh',
    email: 'minhanh.nguyen@gmail.com',
    course: 'Tiếng Trung',
    isInternal: true,
    classTeacherZalo: 'HSK1 - Cô Hạnh',
    registeredDate: '2026-10-18',
    hskAdvanceApproved: true,
    status: 'active',
    password: 'Password123',
    isGoogleAuth: false,
    authProvider: 'password',
    isDeleted: false
  },
  {
    id: 'std_2',
    fullName: 'Trần Bảo Long',
    email: 'baolong.tran@outlook.com',
    course: 'Tiếng Trung',
    isInternal: true,
    classTeacherZalo: 'HSK2 - Cô Linh',
    registeredDate: '2026-10-19',
    hskAdvanceApproved: false,
    status: 'pending',
    password: 'Password123',
    isGoogleAuth: false,
    authProvider: 'password',
    isDeleted: false
  },
  {
    id: 'std_3',
    fullName: 'Lê Thu Hà',
    email: 'thuha.le@gmail.com',
    course: 'Tiếng Nhật',
    isInternal: true,
    classTeacherZalo: 'N5 Cấp tốc - Thầy Tuấn',
    registeredDate: '2026-10-15',
    hskAdvanceApproved: false,
    status: 'active',
    password: 'Password123',
    isGoogleAuth: false,
    authProvider: 'password',
    isDeleted: false
  },
  {
    id: 'std_4',
    fullName: 'Phạm Đức Huy',
    email: 'duchuy.pham@yahoo.com',
    course: 'Tiếng Trung',
    isInternal: true,
    classTeacherZalo: 'HSK3 Ôn thi - Cô Linh',
    registeredDate: '2026-10-20',
    hskAdvanceApproved: true,
    status: 'active',
    password: 'Password123',
    isGoogleAuth: false,
    authProvider: 'password',
    isDeleted: false
  },
  {
    id: 'std_5',
    fullName: 'Hoàng Yến Nhi',
    email: 'yennhi.hoang@gmail.com',
    course: 'Tiếng Trung',
    isInternal: false,
    classTeacherZalo: 'Học viên ngoài TT',
    registeredDate: '2026-10-12',
    hskAdvanceApproved: false,
    status: 'active',
    password: 'Password123',
    isGoogleAuth: false,
    authProvider: 'password',
    isDeleted: false
  },
  {
    id: 'std_6',
    fullName: 'Vũ Quốc Đạt',
    email: 'dat.vu@hotmail.com',
    course: 'Tiếng Trung',
    isInternal: false,
    classTeacherZalo: 'Học viên ngoài TT',
    registeredDate: '2026-10-16',
    hskAdvanceApproved: false,
    status: 'active',
    password: 'Password123',
    isGoogleAuth: false,
    authProvider: 'password',
    isDeleted: false
  },
  {
    id: 'std_7',
    fullName: 'Đặng Mai Phương',
    email: 'maiphuong.dang@gmail.com',
    course: 'Tiếng Nhật',
    isInternal: false,
    classTeacherZalo: 'Học viên ngoài TT',
    registeredDate: '2026-10-21',
    hskAdvanceApproved: false,
    status: 'active',
    password: 'Password123',
    isGoogleAuth: false,
    authProvider: 'password',
    isDeleted: false
  }
];

@Injectable({
  providedIn: 'root'
})
export class StudentManagementService {
  private readonly STORAGE_KEY = 'nl_registered_students';

  students = signal<StudentRecord[]>([]);

  internalCount = computed(() => this.students().filter(s => s.isInternal && !s.isDeleted).length);
  externalCount = computed(() => this.students().filter(s => !s.isInternal && !s.isDeleted).length);
  deletedCount = computed(() => this.students().filter(s => !!s.isDeleted).length);
  totalCount = computed(() => this.students().filter(s => !s.isDeleted).length);

  constructor() {
    this.loadStudents();
  }

  private loadStudents() {
    let list: StudentRecord[] = [];
    if (typeof window !== 'undefined' && window.localStorage) {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved) {
        try {
          list = JSON.parse(saved);
        } catch {
          list = [];
        }
      }
    }

    if (!list || list.length === 0) {
      list = [...DEFAULT_STUDENTS];
    }

    // Strictly clean and filter out any Admin or Preview accounts that might have been saved!
    list = list.filter(s => 
      s.email !== 'admin@nghiemlinh.edu.vn' && 
      !s.fullName.includes('Chế độ xem') &&
      !s.fullName.includes('Giáo viên')
    );

    // Make sure both Duong Quoc Viet (Password) and Duong Quoc Viet (Google) exist
    const hasVietPass = list.some(s => s.email.toLowerCase() === 'duongvietkp2005@gmail.com');
    if (!hasVietPass) {
      list.unshift({ ...DEFAULT_STUDENTS[0] });
    } else {
      const idx = list.findIndex(s => s.email.toLowerCase() === 'duongvietkp2005@gmail.com');
      if (idx !== -1) {
        list[idx].isGoogleAuth = false;
        list[idx].authProvider = 'password';
        if (list[idx].isDeleted === undefined) list[idx].isDeleted = false;
      }
    }

    const hasVietGoogle = list.some(s => s.email.toLowerCase() === 'vietdq.google@gmail.com');
    if (!hasVietGoogle) {
      list.splice(1, 0, { ...DEFAULT_STUDENTS[1] });
    }

    // Default missing properties for all records
    list = list.map(s => ({
      ...s,
      isDeleted: !!s.isDeleted,
      authProvider: s.authProvider || (s.isGoogleAuth ? 'google' : 'password')
    }));

    this.students.set(list);
    this.saveToStorage(list);
  }

  private saveToStorage(list: StudentRecord[]) {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list));
    }
  }

  addStudent(studentData: Omit<StudentRecord, 'id'>): StudentRecord {
    // Strictly prevent admin or preview mode from being added as a student
    if (studentData.email === 'admin@nghiemlinh.edu.vn' || studentData.fullName.includes('Chế độ xem')) {
      return {} as any;
    }

    const newStudent: StudentRecord = {
      ...studentData,
      id: 'std_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6),
      isDeleted: false,
      authProvider: studentData.authProvider || (studentData.isGoogleAuth ? 'google' : 'password')
    };

    const currentList = [newStudent, ...this.students()];
    this.students.set(currentList);
    this.saveToStorage(currentList);
    return newStudent;
  }

  softDeleteStudent(studentId: string): void {
    const updated = this.students().map(s => {
      if (s.id === studentId) {
        return {
          ...s,
          isDeleted: true,
          status: 'locked' as const,
          deletedAt: new Date().toISOString()
        };
      }
      return s;
    });
    this.students.set(updated);
    this.saveToStorage(updated);
  }

  restoreStudent(studentId: string): void {
    const updated = this.students().map(s => {
      if (s.id === studentId) {
        return {
          ...s,
          isDeleted: false,
          status: 'active' as const,
          deletedAt: undefined
        };
      }
      return s;
    });
    this.students.set(updated);
    this.saveToStorage(updated);
  }

  updateStudent(id: string, updates: Partial<StudentRecord>) {
    const updated = this.students().map(s => {
      if (s.id === id) {
        return { ...s, ...updates };
      }
      return s;
    });
    this.students.set(updated);
    this.saveToStorage(updated);
  }

  toggleHskApproval(studentId: string): boolean {
    let newStatus = false;
    const updated = this.students().map(s => {
      if (s.id === studentId) {
        newStatus = !s.hskAdvanceApproved;
        return { ...s, hskAdvanceApproved: newStatus };
      }
      return s;
    });
    this.students.set(updated);
    this.saveToStorage(updated);
    return newStatus;
  }

  resetPassword(studentId: string, newPass = '123456'): boolean {
    const updated = this.students().map(s => {
      if (s.id === studentId) {
        return { ...s, password: newPass };
      }
      return s;
    });
    this.students.set(updated);
    this.saveToStorage(updated);
    return true;
  }

  updatePasswordByEmail(email: string, newPass: string): boolean {
    const student = this.findByEmail(email);
    if (!student) return false;
    return this.resetPassword(student.id, newPass);
  }

  findByEmail(email: string): StudentRecord | undefined {
    return this.students().find(s => s.email.toLowerCase() === email.toLowerCase());
  }

  findByName(name: string): StudentRecord | undefined {
    return this.students().find(s => s.fullName.toLowerCase() === name.toLowerCase());
  }
}
