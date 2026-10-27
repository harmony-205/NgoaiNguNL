import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserService } from '../../core/services/user.service';

export interface StudentRecord {
  id: number;
  fullName: string;
  email: string;
  course: string;
  isInternal: boolean;
  classTeacherZalo?: string;
  registeredDate: string;
  hskAdvanceApproved: boolean; // Duyệt mở khóa HSK 4, 5, 6
  status: 'active' | 'pending' | 'locked';
}

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './admin.html',
  styleUrls: ['./admin.scss']
})
export class AdminComponent implements OnInit {
  userService = inject(UserService);
  currentTime = '';
  activeTab: 'internal' | 'external' = 'internal';
  searchQuery = '';

  // Demo stats
  totalRegisteredUsers = 3900;
  
  // Data for students
  students: StudentRecord[] = [
    {
      id: 1,
      fullName: 'Nguyễn Minh Anh',
      email: 'minhanh.nguyen@gmail.com',
      course: 'Tiếng Trung',
      isInternal: true,
      classTeacherZalo: 'HSK1 - Cô Hạnh',
      registeredDate: '2026-10-18',
      hskAdvanceApproved: true,
      status: 'active'
    },
    {
      id: 2,
      fullName: 'Trần Bảo Long',
      email: 'baolong.tran@outlook.com',
      course: 'Tiếng Trung',
      isInternal: true,
      classTeacherZalo: 'HSK2 - Cô Linh',
      registeredDate: '2026-10-19',
      hskAdvanceApproved: false,
      status: 'pending'
    },
    {
      id: 3,
      fullName: 'Lê Thu Hà',
      email: 'thuha.le@gmail.com',
      course: 'Tiếng Nhật',
      isInternal: true,
      classTeacherZalo: 'N5 Cấp tốc - Thầy Tuấn',
      registeredDate: '2026-10-15',
      hskAdvanceApproved: false,
      status: 'active'
    },
    {
      id: 4,
      fullName: 'Phạm Đức Huy',
      email: 'duchuy.pham@yahoo.com',
      course: 'Tiếng Trung',
      isInternal: true,
      classTeacherZalo: 'HSK3 Ôn thi - Cô Linh',
      registeredDate: '2026-10-20',
      hskAdvanceApproved: true,
      status: 'active'
    },
    {
      id: 5,
      fullName: 'Hoàng Yến Nhi',
      email: 'yennhi.hoang@gmail.com',
      course: 'Tiếng Trung',
      isInternal: false,
      registeredDate: '2026-10-12',
      hskAdvanceApproved: false,
      status: 'active'
    },
    {
      id: 6,
      fullName: 'Vũ Quốc Đạt',
      email: 'dat.vu@hotmail.com',
      course: 'Tiếng Trung',
      isInternal: false,
      registeredDate: '2026-10-16',
      hskAdvanceApproved: false,
      status: 'active'
    },
    {
      id: 7,
      fullName: 'Đặng Mai Phương',
      email: 'maiphuong.dang@gmail.com',
      course: 'Tiếng Nhật',
      isInternal: false,
      registeredDate: '2026-10-21',
      hskAdvanceApproved: false,
      status: 'active'
    }
  ];

  ngOnInit() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    this.currentTime = `${hours}:${minutes} hôm nay`;
  }

  get internalStudents(): StudentRecord[] {
    return this.students.filter(s => s.isInternal && this.matchesSearch(s));
  }

  get externalStudents(): StudentRecord[] {
    return this.students.filter(s => !s.isInternal && this.matchesSearch(s));
  }

  get internalCount(): number {
    return 1250;
  }

  get externalCount(): number {
    return 2650;
  }

  matchesSearch(s: StudentRecord): boolean {
    if (!this.searchQuery) return true;
    const q = this.searchQuery.toLowerCase();
    return s.fullName.toLowerCase().includes(q) ||
           s.email.toLowerCase().includes(q) ||
           (s.classTeacherZalo && s.classTeacherZalo.toLowerCase().includes(q)) ||
           s.course.toLowerCase().includes(q);
  }

  toggleHskApproval(student: StudentRecord) {
    student.hskAdvanceApproved = !student.hskAdvanceApproved;
    const currentUser = this.userService.currentUser();
    if (currentUser && (currentUser.email === student.email || currentUser.name === student.fullName)) {
      this.userService.setHskApproval(student.hskAdvanceApproved);
    }
  }

  exportCSV() {
    if (typeof window === 'undefined') return;
    const list = this.activeTab === 'internal' ? this.internalStudents : this.externalStudents;
    const headers = ['STT', 'Họ và tên', 'Email', 'Khóa học', 'Lớp/GV Zalo', 'Ngày đăng ký', 'Quyền HSK 4-6'];
    const rows = list.map((s, idx) => [
      idx + 1,
      `"${s.fullName}"`,
      `"${s.email}"`,
      `"${s.course}"`,
      `"${s.classTeacherZalo || 'Tự do'}"`,
      `"${s.registeredDate}"`,
      s.hskAdvanceApproved ? 'Đã duyệt' : 'Chưa duyệt'
    ]);
    const csvContent = '\uFEFF' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `danh-sach-hoc-vien-${this.activeTab}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  resetPassword(student: StudentRecord) {
    if (confirm(`Đặt lại mật khẩu của học viên "${student.fullName}" về mặc định "123456"?`)) {
      alert(`Đã đặt lại mật khẩu của ${student.fullName} thành: 123456`);
    }
  }
}
