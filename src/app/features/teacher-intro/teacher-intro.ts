import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { TeacherInfoService, TeacherProfile } from '../../core/services/teacher-info.service';

@Component({
  selector: 'app-teacher-intro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './teacher-intro.html',
  styleUrls: ['./teacher-intro.scss']
})
export class TeacherIntroComponent {
  userService = inject(UserService);
  teacherInfoService = inject(TeacherInfoService);

  isTeacher = computed(() => this.userService.isTeacher());
  profile = this.teacherInfoService.profile;

  // Edit Modal State
  isEditModalOpen = signal(false);

  // Edit form state
  editName = signal('');
  editTagline = signal('');
  editZalo = signal('');
  editFacebookUrl = signal('');
  editFacebookName = signal('');
  editAvatarUrl = signal('');
  
  editStatExp = signal('');
  editStatClasses = signal('');
  editStatStudents = signal('');
  editStatScholarships = signal('');

  editActivitiesText = signal('');
  editAwardsText = signal('');

  openEditModal() {
    const p = this.profile();
    this.editName.set(p.name);
    this.editTagline.set(p.tagline);
    this.editZalo.set(p.zalo);
    this.editFacebookUrl.set(p.facebookUrl);
    this.editFacebookName.set(p.facebookName);
    this.editAvatarUrl.set(p.avatarUrl);

    if (p.stats.length >= 4) {
      this.editStatExp.set(p.stats[0].number);
      this.editStatClasses.set(p.stats[1].number);
      this.editStatStudents.set(p.stats[2].number);
      this.editStatScholarships.set(p.stats[3].number);
    }

    this.editActivitiesText.set(p.teachingActivities.join('\n'));
    this.editAwardsText.set(p.awards.join('\n'));

    this.isEditModalOpen.set(true);
  }

  closeEditModal() {
    this.isEditModalOpen.set(false);
  }

  saveProfile() {
    const currentStats = [...this.profile().stats];
    if (currentStats.length >= 4) {
      currentStats[0] = { ...currentStats[0], number: this.editStatExp() };
      currentStats[1] = { ...currentStats[1], number: this.editStatClasses() };
      currentStats[2] = { ...currentStats[2], number: this.editStatStudents() };
      currentStats[3] = { ...currentStats[3], number: this.editStatScholarships() };
    }

    const activities = this.editActivitiesText()
      .split('\n')
      .map(s => s.trim())
      .filter(s => s.length > 0);

    const awards = this.editAwardsText()
      .split('\n')
      .map(s => s.trim())
      .filter(s => s.length > 0);

    const updatedSocialLinks = this.profile().socialLinks.map(s => {
      if (s.title.includes('Zalo')) {
        return { ...s, subtitle: this.editZalo(), link: `https://zalo.me/${this.editZalo()}` };
      }
      if (s.title.includes('Facebook cá nhân')) {
        return { ...s, subtitle: this.editFacebookName(), link: this.editFacebookUrl() };
      }
      return s;
    });

    this.teacherInfoService.updateProfile({
      name: this.editName(),
      tagline: this.editTagline(),
      zalo: this.editZalo(),
      facebookUrl: this.editFacebookUrl(),
      facebookName: this.editFacebookName(),
      avatarUrl: this.editAvatarUrl() || 'assets/nghiem-linh-3-crop.png',
      stats: currentStats,
      teachingActivities: activities,
      awards: awards,
      socialLinks: updatedSocialLinks
    });

    alert('Đã cập nhật thông tin Giảng viên thành công!');
    this.closeEditModal();
  }

  resetDefault() {
    if (confirm('Khôi phục toàn bộ thông tin Giảng viên về mặc định ban đầu?')) {
      this.teacherInfoService.resetToDefault();
      this.closeEditModal();
    }
  }
}
