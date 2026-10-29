import { Component, inject, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  userService = inject(UserService);
  router = inject(Router);
  cdr = inject(ChangeDetectorRef);
  
  isMenuOpen = false;
  isUserMenuOpen = false;
  private navSub?: Subscription;

  ngOnInit() {
    this.navSub = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(() => {
      this.isMenuOpen = false;
      this.isUserMenuOpen = false;
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy() {
    this.navSub?.unsubscribe();
  }

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
