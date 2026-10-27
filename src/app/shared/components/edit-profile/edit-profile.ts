import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-profile.html',
  styleUrl: './edit-profile.scss',
})
export class EditProfileComponent {
  userService = inject(UserService);
  
  isVisible = signal(false);
  editName = signal('');
  selectedAvatar = signal('');
  userEmail = signal('');
  isGoogleAccount = signal(false);

  // Password fields
  showPasswordSection = signal(false);
  currentPassword = signal('');
  newPassword = signal('');
  confirmPassword = signal('');
  passwordError = signal('');
  passwordSuccess = signal('');
  
  // Available avatars (1 to 12)
  availableAvatars = Array.from({length: 12}, (_, i) => `assets/free_avatar/free_avatar_${i + 1}.png`);

  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('open-edit-profile', () => this.openModal());
    }
  }

  openModal() {
    const user = this.userService.currentUser();
    if (user) {
      this.editName.set(user.name);
      this.selectedAvatar.set(user.avatarUrl);
      this.userEmail.set(user.email);
      this.isGoogleAccount.set(!!user.isGoogleAuth);
      
      // Reset password fields
      this.showPasswordSection.set(false);
      this.currentPassword.set('');
      this.newPassword.set('');
      this.confirmPassword.set('');
      this.passwordError.set('');
      this.passwordSuccess.set('');

      this.isVisible.set(true);
    }
  }

  closeModal() {
    this.isVisible.set(false);
  }

  selectAvatar(url: string) {
    this.selectedAvatar.set(url);
  }

  togglePasswordSection() {
    this.showPasswordSection.set(!this.showPasswordSection());
    this.passwordError.set('');
    this.passwordSuccess.set('');
  }

  save() {
    // 1. Update Profile (Name & Avatar)
    this.userService.updateProfile(this.editName(), this.selectedAvatar());

    // 2. If user filled password fields, validate and change
    if (this.showPasswordSection() && !this.isGoogleAccount()) {
      if (this.newPassword()) {
        if (this.newPassword() !== this.confirmPassword()) {
          this.passwordError.set('Mật khẩu mới và xác nhận mật khẩu không khớp!');
          return;
        }
        if (this.newPassword().length < 6) {
          this.passwordError.set('Mật khẩu mới phải có tối thiểu 6 ký tự!');
          return;
        }
        const res = this.userService.changePassword(this.currentPassword(), this.newPassword());
        if (!res.success) {
          this.passwordError.set(res.message);
          return;
        }
      }
    }

    this.closeModal();
  }
}
