import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // this checks both isLoggedIn variable and the sessionstorage value contains the ID
  // Note: As of now, I'll be using || instead of &&
  if (authService.isLoggedInOrNot() && sessionStorage.getItem('id')) {
    return true;
  }

  // else it pushes the user back to homepage
  return router.parseUrl('');
};
