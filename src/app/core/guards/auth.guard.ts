import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

/**
 * AuthGuard - Ensures user is logged in before accessing protected learning routes.
 */
export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);
  const user = userService.currentUser();

  if (user) {
    return true;
  }

  router.navigate(['/login'], {
    queryParams: { returnUrl: state.url, mode: 'login' }
  });
  return false;
};
