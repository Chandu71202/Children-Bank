import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // this checks both isapproved variable and the sessionstorage value
  // Note: As of now, I'll be using || instead of &&
  if (authService.isapproved || sessionStorage.getItem("id")) {
    return true;
  }
  return router.parseUrl('')
};
