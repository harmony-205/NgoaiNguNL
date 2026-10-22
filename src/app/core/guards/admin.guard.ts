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
  const user = userService.currentUser();

  if (user && user.role === 'teacher') {
    return true;
  }

  // Redirect unauthorized users to login or dashboard
  console.warn('[Security] Unauthorized access attempt to admin portal blocked:', state.url);
  router.navigate(['/dashboard'], {
    queryParams: { error: 'unauthorized_admin' }
  });
  return false;
};
