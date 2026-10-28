import { Component, OnInit, HostListener, NgZone, ChangeDetectorRef, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import { UserProgressService } from '../../../core/services/user-progress.service';
import { CourseMaterialService, CourseMaterial } from '../../../core/services/course-material.service';
import { LessonManagementService } from '../../../core/services/lesson-management.service';
import { LessonData } from '../../lesson/models/lesson.data';

export interface Unit {
  id: number;
  title: string;
  totalLessons: number;
  completedLessons: number;
}

export interface LevelConfig {
  id: string;
  name: string;
  theme: string;
  locked: boolean;
  unitCount: number;
  note?: string;
}

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.scss'
})
export class CourseDetailComponent implements OnInit, OnDestroy {
  userService = inject(UserService);
  userProgressService = inject(UserProgressService);
  materialService = inject(CourseMaterialService);
  lessonManagementService = inject(LessonManagementService);

  courseId = 'tieng-trung';
  courseTitle = 'Khóa tiếng Trung';
  currentHsk = 'hsk1';

  hskLevels: LevelConfig[] = [];
  units: Unit[] = [];
  activeUnitId: number | null = null;
  activeTheme = 'theme-pastel-teal';

  // Locked modal state
  isLockedModalOpen = false;
  lockedLevelName = '';

  // Stats
  streakDays = 0;
  monthStudyDays = '0/30 ngày';
  currentDateFormatted = '';

  // Materials & Upload Modal
  isUploadModalOpen = signal(false);
  newMatTitle = signal('');
  newMatDesc = signal('');
  newMatType = signal<'pdf' | 'doc' | 'mp3' | 'zip' | 'drive'>('pdf');
  newMatUrl = signal('');
  newMatSize = signal('');

  // Admin Add / Edit Lesson Modal State
  isAddLessonModalOpen = signal(false);
  editingUnit = signal<number>(1);
  editingLevel = signal<string>('hsk4');
  lessonHanzi = signal<string>('');
  lessonPinyin = signal<string>('');
  lessonMeaning = signal<string>('');
  showJsonEditor = signal<boolean>(false);
  lessonJsonContent = signal<string>('');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    const today = new Date();
    this.currentDateFormatted = `Ngày ${today.getDate()} tháng ${today.getMonth() + 1} năm ${today.getFullYear()}`;

    if (typeof window !== 'undefined') {
      this.ngZone.runOutsideAngular(() => {
        window.addEventListener('scroll', this.onGlobalScroll, true);
      });
    }

    this.route.paramMap.subscribe(params => {
      const id = params.get('id') || 'tieng-trung';
      this.courseId = id;
      this.setupCourseLevels(id);
    });

    this.route.queryParams.subscribe(params => {
      const sublevel = params['sublevel'];
      if (sublevel) {
        this.selectHsk(sublevel);
      } else if (this.hskLevels.length > 0) {
        this.selectHsk(this.hskLevels[0].id);
      }
    });
  }

  setupCourseLevels(courseId: string) {
    if (courseId === 'tieng-nhat') {
      this.courseTitle = 'Khóa tiếng Nhật';
      this.hskLevels = [
        { id: 'n5', name: 'JLPT N5', theme: 'theme-pastel-teal', locked: false, unitCount: 25 },
        { id: 'n4', name: 'JLPT N4', theme: 'theme-pastel-blue', locked: false, unitCount: 25 },
        { id: 'n3', name: 'JLPT N3', theme: 'theme-pastel-indigo', locked: false, unitCount: 20 },
        { id: 'n2', name: 'JLPT N2', theme: 'theme-pastel-purple', locked: true, unitCount: 20 },
        { id: 'n1', name: 'JLPT N1', theme: 'theme-pastel-rose', locked: true, unitCount: 20 }
      ];
    } else if (courseId === 'on-tap') {
      this.courseTitle = 'Khóa Ôn tập & Luyện thi';
      this.hskLevels = [
        { id: 'on-thi', name: 'Ôn thi CSCA (Toán-Lý)', theme: 'theme-pastel-amber', locked: false, unitCount: 15 },
        { id: 'hskk', name: 'Luyện thi HSKK', theme: 'theme-pastel-teal', locked: false, unitCount: 15 },
        { id: 'hoc-bong', name: 'Chinh phục Học bổng TQ', theme: 'theme-pastel-rose', locked: false, unitCount: 12 }
      ];
    } else {
      // Default: tieng-trung
      this.courseTitle = 'Khóa tiếng Trung';
      this.hskLevels = [
        { id: 'hsk1', name: 'HSK 1', theme: 'theme-pastel-teal', locked: false, unitCount: 15 },
        { id: 'hsk2', name: 'HSK 2', theme: 'theme-pastel-blue', locked: false, unitCount: 15 },
        { id: 'hsk3', name: 'HSK 3', theme: 'theme-pastel-indigo', locked: false, unitCount: 18 },
        { id: 'hsk4', name: 'HSK 4', theme: 'theme-pastel-purple', locked: true, unitCount: 20 },
        { id: 'hsk5', name: 'HSK 5', theme: 'theme-pastel-amber', locked: true, unitCount: 36 },
        { id: 'hsk6', name: 'HSK 6', theme: 'theme-pastel-rose', locked: true, unitCount: 40 }
      ];
    }
  }

  ngOnDestroy() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this.onGlobalScroll, true);
    }
  }

  onGlobalScroll = (event: Event) => {
    if (this.activeUnitId !== null) {
      this.ngZone.run(() => {
        this.activeUnitId = null;
        this.cdr.detectChanges();
      });
    }
  }

  hasLevelData(levelId: string): boolean {
    return this.lessonManagementService.hasDataForLevel(levelId);
  }

  hasUnitData(unitId: number): boolean {
    return !!this.lessonManagementService.getLesson(this.currentHsk, unitId);
  }

  isLevelLocked(levelId: string): boolean {
    // 1. Teachers/Admins always have FULL ACCESS to all levels!
    if (this.userService.isTeacher()) return false;

    // 2. Sơ cấp levels are open to everyone
    if (['hsk1', 'hsk2', 'hsk3', 'n5', 'n4', 'n3', 'on-thi', 'hskk', 'hoc-bong'].includes(levelId)) return false;

    // 3. For HSK 4, 5, 6:
    // If level doesn't even have data yet: it is locked with "Sắp ra mắt" for students
    if (!this.lessonManagementService.hasDataForLevel(levelId)) return true;

    // 4. If it has data, check if student has approval from admin
    return !this.userService.hasHskAdvanceAccess();
  }

  selectHsk(hskId: string) {
    const level = this.hskLevels.find(l => l.id === hskId);
    if (!level) return;

    // Always update currentHsk and activeTheme so button lights up with active color!
    this.currentHsk = hskId;
    this.activeTheme = level.theme;
    this.activeUnitId = null;
    this.generateUnits(hskId, level.unitCount);

    if (this.isLevelLocked(hskId)) {
      this.lockedLevelName = level.name;
      this.isLockedModalOpen = true;
    }
  }

  closeLockedModal() {
    this.isLockedModalOpen = false;
  }

  generateUnits(hskId: string, count: number) {
    const user = this.userService.currentUser();
    const userEmail = user?.email || 'guest';

    this.units = Array.from({ length: count }, (_, i) => {
      const unitId = i + 1;
      // Authentic progress per user: newly registered user starts at 0!
      const progress = this.userProgressService.getUnitProgress(userEmail, hskId, unitId);

      return {
        id: unitId,
        title: `Bài ${unitId}`,
        totalLessons: progress.totalLessons || 12,
        completedLessons: progress.completedLessons || 0
      };
    });
  }

  toggleUnit(event: Event, unitId: number) {
    event.stopPropagation();
    if (this.activeUnitId === unitId) {
      this.activeUnitId = null;
    } else {
      this.activeUnitId = unitId;
    }
  }

  @HostListener('document:click')
  onDocumentClick() {
    this.activeUnitId = null;
  }

  getUnitActionText(unit: Unit): string {
    const hasData = ['hsk1', 'hsk2', 'hsk3'].includes(this.currentHsk) || this.hasUnitData(unit.id);
    if (!hasData && this.userService.isTeacher()) return '✏️ Soạn bài học & bài tập';
    if (!hasData) return 'Sắp ra mắt';
    if (unit.completedLessons === 0) return 'Bắt đầu học';
    if (unit.completedLessons < unit.totalLessons) return 'Tiếp tục học';
    return 'Luyện tập lại';
  }

  startUnit(event: Event, unit: Unit) {
    event.stopPropagation();
    const hasLesson = ['hsk1', 'hsk2', 'hsk3'].includes(this.currentHsk) || this.hasUnitData(unit.id);
    
    if (hasLesson) {
      this.router.navigate(['/lesson', `${this.currentHsk}-${unit.id}`], {
        queryParams: {
          theme: this.activeTheme,
          level: this.currentHsk,
          unit: unit.id
        }
      });
    } else if (this.userService.isTeacher()) {
      // For Admin: open lesson composer directly!
      this.openAddLessonModal(unit.id);
    } else {
      // For Student: show upcoming modal
      this.lockedLevelName = `${this.currentHsk.toUpperCase()} - Bài ${unit.id}`;
      this.isLockedModalOpen = true;
    }
  }

  // --- Admin Add / Edit Lesson Modal Operations ---
  openAddLessonModal(unitId?: number) {
    const targetUnit = unitId || 1;
    this.editingLevel.set(this.currentHsk);
    this.editingUnit.set(targetUnit);

    const existing = this.lessonManagementService.getLesson(this.currentHsk, targetUnit);
    if (existing) {
      this.lessonHanzi.set(existing.lessonName?.hanzi || '');
      this.lessonPinyin.set(existing.lessonName?.pinyin || '');
      this.lessonMeaning.set(existing.lessonName?.meaning || '');
      this.lessonJsonContent.set(JSON.stringify(existing, null, 2));
    } else {
      const template = this.lessonManagementService.generateTemplate(this.currentHsk, targetUnit);
      this.lessonHanzi.set(template.lessonName?.hanzi || '');
      this.lessonPinyin.set(template.lessonName?.pinyin || '');
      this.lessonMeaning.set(template.lessonName?.meaning || '');
      this.lessonJsonContent.set(JSON.stringify(template, null, 2));
    }

    this.showJsonEditor.set(false);
    this.isAddLessonModalOpen.set(true);
  }

  closeAddLessonModal() {
    this.isAddLessonModalOpen.set(false);
  }

  loadDefaultLessonTemplate() {
    const template = this.lessonManagementService.generateTemplate(this.editingLevel(), this.editingUnit());
    this.lessonHanzi.set(template.lessonName?.hanzi || '');
    this.lessonPinyin.set(template.lessonName?.pinyin || '');
    this.lessonMeaning.set(template.lessonName?.meaning || '');
    this.lessonJsonContent.set(JSON.stringify(template, null, 2));
  }

  saveCustomLesson() {
    try {
      let dataToSave: LessonData;
      if (this.showJsonEditor()) {
        dataToSave = JSON.parse(this.lessonJsonContent());
      } else {
        const base = this.lessonManagementService.generateTemplate(this.editingLevel(), this.editingUnit());
        base.lessonName = {
          hanzi: this.lessonHanzi() || (base.lessonName?.hanzi || ''),
          pinyin: this.lessonPinyin() || (base.lessonName?.pinyin || ''),
          meaning: this.lessonMeaning() || (base.lessonName?.meaning || '')
        };
        dataToSave = base;
      }

      this.lessonManagementService.saveLesson(this.editingLevel(), this.editingUnit(), dataToSave);
      alert(`Đã lưu bài học Bài ${this.editingUnit()} cho cấp độ ${this.editingLevel().toUpperCase()} thành công! Nhãn "Sắp ra mắt" của cấp độ này đã được tự động loại bỏ cho học viên.`);
      this.closeAddLessonModal();
      this.generateUnits(this.currentHsk, this.units.length);
    } catch (e: any) {
      alert('Lỗi định dạng dữ liệu: ' + (e.message || 'Không thể lưu bài học'));
    }
  }

  get materialsForCurrentLevel(): CourseMaterial[] {
    const category = (this.courseId === 'tieng-nhat' || this.courseId === 'on-tap') ? this.courseId : 'tieng-trung';
    return this.materialService.getMaterials(category, this.currentHsk);
  }

  openUploadModal() {
    this.newMatTitle.set('');
    this.newMatDesc.set('');
    this.newMatType.set('pdf');
    this.newMatUrl.set('');
    this.newMatSize.set('');
    this.isUploadModalOpen.set(true);
  }

  closeUploadModal() {
    this.isUploadModalOpen.set(false);
  }

  saveUploadedMaterial() {
    if (!this.newMatTitle() || !this.newMatUrl()) {
      alert('Vui lòng nhập tên tài liệu và đường dẫn liên kết tải về!');
      return;
    }

    const category = (this.courseId === 'tieng-nhat' || this.courseId === 'on-tap') 
      ? (this.courseId as 'tieng-nhat' | 'on-tap')
      : 'tieng-trung';

    this.materialService.addMaterial({
      title: this.newMatTitle(),
      description: this.newMatDesc(),
      courseCategory: category,
      level: this.currentHsk,
      fileType: this.newMatType(),
      fileUrl: this.newMatUrl(),
      fileSize: this.newMatSize() || '15 MB',
      author: 'Cô Nghiêm Linh (Admin)'
    });

    alert(`Đã tải lên tài liệu mới cho cấp độ ${this.currentHsk.toUpperCase()} thành công!`);
    this.closeUploadModal();
  }

  downloadMaterial(mat: CourseMaterial) {
    this.materialService.incrementDownload(mat.id);
    if (typeof window !== 'undefined') {
      window.open(mat.fileUrl, '_blank');
    }
  }

  deleteMaterial(mat: CourseMaterial) {
    if (confirm(`Bạn có chắc chắn muốn xóa tài liệu "${mat.title}"?`)) {
      this.materialService.deleteMaterial(mat.id);
    }
  }
}
