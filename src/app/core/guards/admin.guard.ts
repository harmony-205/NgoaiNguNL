import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

/**
 * AdminGuard - Protects administrative routes (e.g., /admin)
 * Ensures only users with the 'teacher' or 'admin' role can access the portal.
 */
export const adminGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  // 1. If currently teacher/admin
  if (userService.isTeacher()) {
    return true;
  }

  // 2. If an admin is currently in Student Preview Mode, restore admin session and allow
  if (userService.isPreviewStudentMode()) {
    userService.exitStudentPreview();
    return true;
  }

  // 3. Strictly block regular students and unauthenticated users
  console.warn('[Security] Unauthorized access attempt to admin portal blocked for non-admin:', state.url);
  router.navigate(['/dashboard'], {
    queryParams: { error: 'unauthorized_admin' }
  });
  return false;
};
