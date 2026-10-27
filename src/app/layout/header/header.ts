import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent {
  userService = inject(UserService);
  router = inject(Router);
  
  isMenuOpen = false;
  isUserMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    if (this.isMenuOpen) this.isUserMenuOpen = false;
  }

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
    if (this.isUserMenuOpen) this.isMenuOpen = false;
  }

  openEditProfile() {
    this.isUserMenuOpen = false;
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-edit-profile'));
    }
  }

  enterStudentPreview() {
    this.isUserMenuOpen = false;
    this.userService.enterStudentPreview();
    this.router.navigateByUrl('/course/tieng-trung');
  }

  exitStudentPreview() {
    this.isUserMenuOpen = false;
    this.userService.exitStudentPreview();
    this.router.navigateByUrl('/admin');
  }

  // Safe fallback alias so no listener or template can throw "switchRole is not a function"
  switchRole() {
    if (this.userService.isPreviewStudentMode()) {
      this.exitStudentPreview();
    } else if (this.userService.isTeacher()) {
      this.enterStudentPreview();
    }
  }

  logout() {
    this.userService.logout();
    this.isUserMenuOpen = false;
    this.router.navigate(['/login']);
  }
}
