import { Component, OnInit, HostListener, NgZone, ChangeDetectorRef, OnDestroy, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import { UserProgressService } from '../../../core/services/user-progress.service';
import { CourseMaterialService, CourseMaterial } from '../../../core/services/course-material.service';

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

  isLevelLocked(levelId: string): boolean {
    // 1. Teachers/Admins always have FULL ACCESS to all levels!
    if (this.userService.isTeacher()) return false;

    // 2. Sơ cấp levels are open to everyone
    if (['hsk1', 'hsk2', 'hsk3', 'n5', 'on-thi', 'hskk', 'hoc-bong'].includes(levelId)) return false;

    // 3. Advanced levels check if student has approval from admin
    return !this.userService.hasHskAdvanceAccess();
  }

  selectHsk(hskId: string) {
    const level = this.hskLevels.find(l => l.id === hskId);
    if (!level) return;

    if (this.isLevelLocked(hskId)) {
      this.lockedLevelName = level.name;
      this.isLockedModalOpen = true;
      return;
    }

    this.currentHsk = hskId;
    this.activeTheme = level.theme;
    this.activeUnitId = null;
    this.generateUnits(hskId, level.unitCount);
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
    if (unit.completedLessons === 0) return 'Bắt đầu học';
    if (unit.completedLessons < unit.totalLessons) return 'Tiếp tục học';
    return 'Luyện tập lại';
  }

  startUnit(event: Event, unit: Unit) {
    event.stopPropagation();
    // For HSK 1, 2, 3, navigate to interactive lesson
    if (['hsk1', 'hsk2', 'hsk3'].includes(this.currentHsk)) {
      this.router.navigate(['/lesson', `${this.currentHsk}-${unit.id}`], {
        queryParams: {
          theme: this.activeTheme,
          level: this.currentHsk,
          unit: unit.id
        }
      });
    } else {
      // For higher levels or other courses, scroll to or open study materials
      const element = document.getElementById('materials-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
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
