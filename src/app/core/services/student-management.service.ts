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
}

const DEFAULT_STUDENTS: StudentRecord[] = [
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
    password: 'Password123'
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
    password: 'Password123'
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
    password: 'Password123'
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
    password: 'Password123'
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
    password: 'Password123'
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
    password: 'Password123'
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
    password: 'Password123'
  }
];

@Injectable({
  providedIn: 'root'
})
export class StudentManagementService {
  private readonly STORAGE_KEY = 'nl_registered_students';

  students = signal<StudentRecord[]>([]);

  internalCount = computed(() => this.students().filter(s => s.isInternal).length);
  externalCount = computed(() => this.students().filter(s => !s.isInternal).length);
  totalCount = computed(() => this.students().length);

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

    // Auto sync if user in local storage is already "Dương Quốc Việt"
    if (typeof window !== 'undefined' && window.localStorage) {
      const authUserStr = localStorage.getItem('nl_auth_user');
      if (authUserStr) {
        try {
          const authUser = JSON.parse(authUserStr);
          if (authUser && authUser.role === 'student' && authUser.name) {
            const exists = list.some(s => s.email === authUser.email || s.fullName.toLowerCase() === authUser.name.toLowerCase());
            if (!exists) {
              list.unshift({
                id: 'std_' + Date.now(),
                fullName: authUser.name,
                email: authUser.email || 'duongquocviet@gmail.com',
                course: 'Tiếng Trung',
                isInternal: false,
                classTeacherZalo: 'Đăng ký trực tuyến',
                registeredDate: new Date().toISOString().split('T')[0],
                hskAdvanceApproved: !!authUser.hskAdvanceApproved,
                status: 'active',
                avatarUrl: authUser.avatarUrl
              });
            }
          }
        } catch {
          // ignore
        }
      }
    }

    this.students.set(list);
    this.saveToStorage(list);
  }

  private saveToStorage(list: StudentRecord[]) {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(list));
    }
  }

  addStudent(studentData: Omit<StudentRecord, 'id'>): StudentRecord {
    const newStudent: StudentRecord = {
      ...studentData,
      id: 'std_' + Date.now() + '_' + Math.random().toString(36).substring(2, 6)
    };

    const currentList = [newStudent, ...this.students()];
    this.students.set(currentList);
    this.saveToStorage(currentList);
    return newStudent;
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

  findByEmail(email: string): StudentRecord | undefined {
    return this.students().find(s => s.email.toLowerCase() === email.toLowerCase());
  }

  findByName(name: string): StudentRecord | undefined {
    return this.students().find(s => s.fullName.toLowerCase() === name.toLowerCase());
  }
}
