import { Component, inject, signal, computed } from '@angular/core';
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

  // Password visibility toggles
  showCurrentPass = signal(false);
  showNewPass = signal(false);
  showConfirmPass = signal(false);

  // Password validation computations
  isMinLength = computed(() => this.newPassword().length >= 6);
  hasNumber = computed(() => /\d/.test(this.newPassword()));
  hasLetter = computed(() => /[a-zA-Z]/.test(this.newPassword()));
  isMatch = computed(() => !!this.newPassword() && this.newPassword() === this.confirmPassword());
  
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
      
      // Reset password state
      this.showPasswordSection.set(false);
      this.currentPassword.set('');
      this.newPassword.set('');
      this.confirmPassword.set('');
      this.passwordError.set('');
      this.passwordSuccess.set('');
      this.showCurrentPass.set(false);
      this.showNewPass.set(false);
      this.showConfirmPass.set(false);

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

  toggleCurrentPassVisibility() {
    this.showCurrentPass.set(!this.showCurrentPass());
  }

  toggleNewPassVisibility() {
    this.showNewPass.set(!this.showNewPass());
  }

  toggleConfirmPassVisibility() {
    this.showConfirmPass.set(!this.showConfirmPass());
  }

  save() {
    // 1. Update Profile (Name & Avatar)
    this.userService.updateProfile(this.editName(), this.selectedAvatar());

    // 2. If user filled password fields, validate and change
    if (this.showPasswordSection() && !this.isGoogleAccount()) {
      if (this.newPassword()) {
        if (!this.currentPassword()) {
          this.passwordError.set('Vui lòng nhập mật khẩu hiện tại!');
          return;
        }
        if (!this.isMinLength()) {
          this.passwordError.set('Mật khẩu mới phải có tối thiểu 6 ký tự!');
          return;
        }
        if (!this.isMatch()) {
          this.passwordError.set('Mật khẩu mới và xác nhận mật khẩu không khớp!');
          return;
        }

        const res = this.userService.changePassword(this.currentPassword(), this.newPassword());
        if (!res.success) {
          this.passwordError.set(res.message);
          return;
        }
        this.passwordSuccess.set('Đổi mật khẩu thành công!');
      }
    }

    setTimeout(() => {
      this.closeModal();
    }, 400);
  }
}
