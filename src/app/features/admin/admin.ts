import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { StudentManagementService, StudentRecord } from '../../core/services/student-management.service';
import { CourseMaterialService, CourseMaterial } from '../../core/services/course-material.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './admin.html',
  styleUrls: ['./admin.scss']
})
export class AdminComponent implements OnInit {
  userService = inject(UserService);
  studentService = inject(StudentManagementService);
  materialService = inject(CourseMaterialService);

  currentTime = '';
  activeTab: 'internal' | 'external' | 'materials' = 'internal';
  searchQuery = '';

  // Modal thêm tài liệu mới
  isAddMaterialModalOpen = signal(false);
  newMaterialTitle = signal('');
  newMaterialDesc = signal('');
  newMaterialCategory = signal<'tieng-trung' | 'tieng-nhat' | 'on-tap'>('tieng-trung');
  newMaterialLevel = signal('hsk4');
  newMaterialType = signal<'pdf' | 'doc' | 'mp3' | 'zip' | 'drive'>('pdf');
  newMaterialUrl = signal('');
  newMaterialSize = signal('');

  ngOnInit() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    this.currentTime = `${hours}:${minutes} hôm nay`;
  }

  get totalRegisteredUsers(): number {
    return this.studentService.totalCount();
  }

  get internalCount(): number {
    return this.studentService.internalCount();
  }

  get externalCount(): number {
    return this.studentService.externalCount();
  }

  get materialsCount(): number {
    return this.materialService.materials().length;
  }

  get internalStudents(): StudentRecord[] {
    return this.studentService.students().filter(s => s.isInternal && this.matchesSearch(s));
  }

  get externalStudents(): StudentRecord[] {
    return this.studentService.students().filter(s => !s.isInternal && this.matchesSearch(s));
  }

  get allMaterials(): CourseMaterial[] {
    const list = this.materialService.materials();
    if (!this.searchQuery) return list;
    const q = this.searchQuery.toLowerCase();
    return list.filter(m => 
      m.title.toLowerCase().includes(q) || 
      m.description.toLowerCase().includes(q) || 
      m.level.toLowerCase().includes(q) ||
      m.courseCategory.toLowerCase().includes(q)
    );
  }

  matchesSearch(s: StudentRecord): boolean {
    if (!this.searchQuery) return true;
    const q = this.searchQuery.toLowerCase();
    return s.fullName.toLowerCase().includes(q) ||
           s.email.toLowerCase().includes(q) ||
           (!!s.classTeacherZalo && s.classTeacherZalo.toLowerCase().includes(q)) ||
           s.course.toLowerCase().includes(q);
  }

  toggleHskApproval(student: StudentRecord) {
    const newStatus = this.studentService.toggleHskApproval(student.id);
    const currentUser = this.userService.currentUser();
    if (currentUser && (currentUser.email === student.email || currentUser.name === student.fullName)) {
      this.userService.setHskApproval(newStatus);
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
      this.studentService.resetPassword(student.id, '123456');
      alert(`Đã đặt lại mật khẩu của ${student.fullName} thành công: 123456`);
    }
  }

  // Quản lý tài liệu học tập
  openAddMaterialModal() {
    this.newMaterialTitle.set('');
    this.newMaterialDesc.set('');
    this.newMaterialCategory.set('tieng-trung');
    this.newMaterialLevel.set('hsk4');
    this.newMaterialType.set('pdf');
    this.newMaterialUrl.set('');
    this.newMaterialSize.set('');
    this.isAddMaterialModalOpen.set(true);
  }

  closeAddMaterialModal() {
    this.isAddMaterialModalOpen.set(false);
  }

  saveNewMaterial() {
    if (!this.newMaterialTitle() || !this.newMaterialUrl()) {
      alert('Vui lòng nhập Tên tài liệu và Đường dẫn liên kết tải về!');
      return;
    }

    this.materialService.addMaterial({
      title: this.newMaterialTitle(),
      description: this.newMaterialDesc(),
      courseCategory: this.newMaterialCategory(),
      level: this.newMaterialLevel(),
      fileType: this.newMaterialType(),
      fileUrl: this.newMaterialUrl(),
      fileSize: this.newMaterialSize() || '15 MB',
      author: 'Cô Nghiêm Linh (Admin)'
    });

    alert('Đã tải lên tài liệu mới thành công cho học viên!');
    this.closeAddMaterialModal();
  }

  deleteMaterial(item: CourseMaterial) {
    if (confirm(`Bạn có chắc chắn muốn xóa tài liệu "${item.title}"?`)) {
      this.materialService.deleteMaterial(item.id);
    }
  }
}
