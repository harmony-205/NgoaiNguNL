import { Component, OnInit, HostListener, NgZone, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';

export interface Unit {
  id: number;
  title: string;
  totalLessons: number;
  completedLessons: number;
}

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detail.html',
  styleUrl: './course-detail.scss'
})
export class CourseDetailComponent implements OnInit, OnDestroy {
  currentHsk = 'hsk1';
  courseId: string | null = '';

  hskLevels = [
    { id: 'hsk1', name: 'HSK 1', theme: 'theme-pastel-teal', locked: false },
    { id: 'hsk2', name: 'HSK 2', theme: 'theme-pastel-blue', locked: false },
    { id: 'hsk3', name: 'HSK 3', theme: 'theme-pastel-indigo', locked: false },
    { id: 'hsk4', name: 'HSK 4', theme: 'theme-pastel-purple', locked: true, note: 'Khóa / Sắp ra mắt' },
    { id: 'hsk5', name: 'HSK 5', theme: 'theme-pastel-amber', locked: true, note: 'Khóa / Sắp ra mắt' },
    { id: 'hsk6', name: 'HSK 6', theme: 'theme-pastel-rose', locked: true, note: 'Khóa / Sắp ra mắt' }
  ];

  units: Unit[] = [];
  activeUnitId: number | null = null;
  activeTheme = 'theme-pastel-teal';

  // Locked modal state
  isLockedModalOpen = false;
  lockedLevelName = '';

  // Stats
  streakDays = 0;
  monthStudyDays = '0/31 ngày';
  currentDateFormatted = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef,
    public userService: UserService
  ) { }

  ngOnInit() {
    const today = new Date();
    this.currentDateFormatted = `Ngày ${today.getDate()} tháng ${today.getMonth() + 1} năm ${today.getFullYear()}`;

    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('scroll', this.onGlobalScroll, true);
    });

    this.courseId = this.route.snapshot.paramMap.get('id');

    this.route.queryParams.subscribe(params => {
      if (params['sublevel']) {
        this.selectHsk(params['sublevel']);
      } else {
        this.selectHsk('hsk1');
      }
    });
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.onGlobalScroll, true);
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
    if (['hsk1', 'hsk2', 'hsk3'].includes(levelId)) return false;
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
    this.generateUnits(hskId);
  }

  closeLockedModal() {
    this.isLockedModalOpen = false;
  }

  generateUnits(hskId: string) {
    // 15 units for HSK1 and HSK2, 18 for HSK3
    const count = (hskId === 'hsk1' || hskId === 'hsk2') ? 15 : 18;
    this.units = Array.from({ length: count }, (_, i) => {
      let completed = 0;
      if (hskId === 'hsk1') {
        if (i === 0) completed = 12; // Completed
        else if (i === 1) completed = 5; // In progress
        else completed = 0; // Not started
      }
      return {
        id: i + 1,
        title: `Bài ${i + 1}`,
        totalLessons: 12,
        completedLessons: completed
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
    console.log(`Starting unit ${unit.id}`);
    this.router.navigate(['/lesson', unit.id], { queryParams: { theme: this.activeTheme } });
  }
}
