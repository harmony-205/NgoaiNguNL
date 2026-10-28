import { Component, OnInit, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../core/services/user.service';
import { StudentManagementService, StudentRecord } from '../../core/services/student-management.service';
import { CourseMaterialService, CourseMaterial } from '../../core/services/course-material.service';
import { LessonManagementService } from '../../core/services/lesson-management.service';
import { LessonData } from '../lesson/models/lesson.data';

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
  lessonService = inject(LessonManagementService);

  currentTime = '';
  activeTab: 'internal' | 'external' | 'materials' | 'curriculum' = 'internal';
  accountStatusFilter = signal<'all' | 'active' | 'deleted'>('all');
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

  // Quản lý Giáo trình & Biên soạn Bài tập HSK 1 - 6
  selectedCurriculumLevel = signal<'hsk1' | 'hsk2' | 'hsk3' | 'hsk4' | 'hsk5' | 'hsk6'>('hsk4');
  selectedCurriculumUnit = signal<number>(1);
  isLessonEditorModalOpen = signal(false);
  editorMode = signal<'form' | 'json'>('form');

  lessonHanzi = signal('');
  lessonPinyin = signal('');
  lessonMeaning = signal('');
  lessonJsonContent = signal('');

  curriculumLevels = [
    { id: 'hsk1' as const, name: 'HSK 1', color: '#0d9488' },
    { id: 'hsk2' as const, name: 'HSK 2', color: '#4f46e5' },
    { id: 'hsk3' as const, name: 'HSK 3', color: '#db2777' },
    { id: 'hsk4' as const, name: 'HSK 4', color: '#9333ea' },
    { id: 'hsk5' as const, name: 'HSK 5', color: '#d97706' },
    { id: 'hsk6' as const, name: 'HSK 6', color: '#e11d48' }
  ];

  router = inject(Router);

  ngOnInit() {
    if (!this.userService.isTeacher()) {
      if (this.userService.isPreviewStudentMode()) {
        this.userService.exitStudentPreview();
      } else {
        this.router.navigate(['/dashboard'], { queryParams: { error: 'unauthorized_admin' } });
        return;
      }
    }

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
    return this.studentService.students().filter(s => {
      if (!s.isInternal) return false;
      if (this.accountStatusFilter() === 'active' && s.isDeleted) return false;
      if (this.accountStatusFilter() === 'deleted' && !s.isDeleted) return false;
      return this.matchesSearch(s);
    });
  }

  get externalStudents(): StudentRecord[] {
    return this.studentService.students().filter(s => {
      if (s.isInternal) return false;
      if (this.accountStatusFilter() === 'active' && s.isDeleted) return false;
      if (this.accountStatusFilter() === 'deleted' && !s.isDeleted) return false;
      return this.matchesSearch(s);
    });
  }

  get internalActiveCount(): number {
    return this.studentService.students().filter(s => s.isInternal && !s.isDeleted).length;
  }

  get internalDeletedCount(): number {
    return this.studentService.students().filter(s => s.isInternal && !!s.isDeleted).length;
  }

  get externalActiveCount(): number {
    return this.studentService.students().filter(s => !s.isInternal && !s.isDeleted).length;
  }

  get externalDeletedCount(): number {
    return this.studentService.students().filter(s => !s.isInternal && !!s.isDeleted).length;
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
    const authTypeStr = s.isGoogleAuth || s.authProvider === 'google' ? 'google' : 'mật khẩu gmail password';
    const statusStr = s.isDeleted ? 'đã xóa da xoa locked' : 'hoạt động hoat dong active';
    return s.fullName.toLowerCase().includes(q) ||
           s.email.toLowerCase().includes(q) ||
           (!!s.classTeacherZalo && s.classTeacherZalo.toLowerCase().includes(q)) ||
           s.course.toLowerCase().includes(q) ||
           authTypeStr.includes(q) ||
           statusStr.includes(q);
  }

  toggleHskApproval(student: StudentRecord) {
    const newStatus = this.studentService.toggleHskApproval(student.id);
    const currentUser = this.userService.currentUser();
    if (currentUser && (currentUser.email === student.email || currentUser.name === student.fullName)) {
      this.userService.setHskApproval(newStatus);
    }
  }

  deleteStudent(student: StudentRecord) {
    if (confirm(`Bạn có chắc chắn muốn xóa tài khoản của học viên "${student.fullName}" (${student.email})?\n\n(Lưu ý: Tài khoản sẽ được chuyển sang trạng thái "Đã xóa" và tạm khóa đăng nhập. Dữ liệu học tập vẫn được giữ nguyên an toàn và có thể khôi phục bất kỳ lúc nào).`)) {
      this.studentService.softDeleteStudent(student.id);
    }
  }

  restoreStudent(student: StudentRecord) {
    if (confirm(`Khôi phục tài khoản của học viên "${student.fullName}" (${student.email}) về trạng thái hoạt động bình thường?`)) {
      this.studentService.restoreStudent(student.id);
    }
  }

  exportCSV() {
    if (typeof window === 'undefined') return;
    const list = this.activeTab === 'internal' ? this.internalStudents : this.externalStudents;
    const headers = ['STT', 'Họ và tên', 'Email', 'Phương thức ĐK', 'Khóa học', 'Lớp/GV Zalo', 'Ngày đăng ký', 'Quyền HSK 4-6', 'Trạng thái'];
    const rows = list.map((s, idx) => [
      idx + 1,
      `"${s.fullName}"`,
      `"${s.email}"`,
      s.isGoogleAuth ? 'Google OAuth' : 'Gmail/Mật khẩu',
      `"${s.course}"`,
      `"${s.classTeacherZalo || 'Tự do'}"`,
      `"${s.registeredDate}"`,
      s.hskAdvanceApproved ? 'Đã duyệt' : 'Chưa duyệt',
      s.isDeleted ? 'Đã xóa' : 'Đang hoạt động'
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

  // --- Quản lý Giáo trình & Biên soạn Bài tập HSK ---
  get totalCustomLessonsCount(): number {
    return Object.keys(this.lessonService.customLessonsMap()).length;
  }

  hasLevelData(levelId: string): boolean {
    return this.lessonService.hasDataForLevel(levelId);
  }

  hasUnitData(levelId: string, unitId: number): boolean {
    return !!this.lessonService.getLesson(levelId, unitId);
  }

  isCustomLesson(levelId: string, unitId: number): boolean {
    return this.lessonService.isCustomLesson(levelId, unitId);
  }

  get currentLevelUnits() {
    const level = this.selectedCurriculumLevel();
    const count = level === 'hsk1' ? 15 : (level === 'hsk2' || level === 'hsk3' ? 20 : 15);
    return Array.from({ length: count }, (_, i) => {
      const unit = i + 1;
      const lesson = this.lessonService.getLesson(level, unit);
      const isCustom = this.lessonService.isCustomLesson(level, unit);
      return {
        unit,
        title: lesson?.lessonName?.meaning || (lesson ? `Bài ${unit}` : 'Chưa có dữ liệu bài học'),
        hanzi: lesson?.lessonName?.hanzi || '',
        pinyin: lesson?.lessonName?.pinyin || '',
        hasData: !!lesson,
        isCustom,
        vocabCount: lesson?.vocabulary?.words?.length || 0,
        quizCount: lesson?.quiz?.questions?.length || 0,
        hasMatching: !!lesson?.matching?.pairs?.length,
        hasSentenceOrder: !!lesson?.arranging?.questions?.length
      };
    });
  }

  selectCurriculumLevel(levelId: 'hsk1' | 'hsk2' | 'hsk3' | 'hsk4' | 'hsk5' | 'hsk6') {
    this.selectedCurriculumLevel.set(levelId);
  }

  openCurriculumEditor(unit?: number) {
    const targetUnit = unit || 1;
    this.selectedCurriculumUnit.set(targetUnit);
    const level = this.selectedCurriculumLevel();
    const existing = this.lessonService.getLesson(level, targetUnit);

    if (existing) {
      this.lessonHanzi.set(existing.lessonName?.hanzi || '');
      this.lessonPinyin.set(existing.lessonName?.pinyin || '');
      this.lessonMeaning.set(existing.lessonName?.meaning || '');
      this.lessonJsonContent.set(JSON.stringify(existing, null, 2));
    } else {
      const template = this.lessonService.generateTemplate(level, targetUnit);
      this.lessonHanzi.set(template.lessonName?.hanzi || '');
      this.lessonPinyin.set(template.lessonName?.pinyin || '');
      this.lessonMeaning.set(template.lessonName?.meaning || '');
      this.lessonJsonContent.set(JSON.stringify(template, null, 2));
    }

    this.editorMode.set('form');
    this.isLessonEditorModalOpen.set(true);
  }

  closeCurriculumEditor() {
    this.isLessonEditorModalOpen.set(false);
  }

  loadCurriculumTemplate() {
    const template = this.lessonService.generateTemplate(this.selectedCurriculumLevel(), this.selectedCurriculumUnit());
    this.lessonHanzi.set(template.lessonName?.hanzi || '');
    this.lessonPinyin.set(template.lessonName?.pinyin || '');
    this.lessonMeaning.set(template.lessonName?.meaning || '');
    this.lessonJsonContent.set(JSON.stringify(template, null, 2));
  }

  saveCurriculumLesson() {
    try {
      const level = this.selectedCurriculumLevel();
      const unit = this.selectedCurriculumUnit();
      let dataToSave: LessonData;

      if (this.editorMode() === 'json') {
        dataToSave = JSON.parse(this.lessonJsonContent());
      } else {
        const base = this.lessonService.generateTemplate(level, unit);
        base.lessonName = {
          hanzi: this.lessonHanzi() || (base.lessonName?.hanzi || ''),
          pinyin: this.lessonPinyin() || (base.lessonName?.pinyin || ''),
          meaning: this.lessonMeaning() || (base.lessonName?.meaning || '')
        };
        dataToSave = base;
      }

      this.lessonService.saveLesson(level, unit, dataToSave);
      alert(`Đã lưu thành công Bài ${unit} cho cấp độ ${level.toUpperCase()}!\n\nNhãn "Sắp ra mắt" của ${level.toUpperCase()} đã được tự động gỡ bỏ trên giao diện học viên.`);
      this.closeCurriculumEditor();
    } catch (e: any) {
      alert('Lỗi định dạng dữ liệu: ' + (e.message || 'Không thể lưu bài học'));
    }
  }

  deleteCurriculumLesson(unit: number) {
    const level = this.selectedCurriculumLevel();
    if (confirm(`Bạn có chắc muốn xóa bài tập tùy chỉnh của Bài ${unit} - ${level.toUpperCase()}?`)) {
      this.lessonService.deleteLesson(level, unit);
      alert(`Đã xóa bài tập tùy chỉnh Bài ${unit}.`);
    }
  }

  previewLesson(unit: number) {
    const level = this.selectedCurriculumLevel();
    this.router.navigate(['/lesson', `${level}-${unit}`]);
  }
}
