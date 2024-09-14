import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router); 

  if (authService.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login']); 
    return false;
  }
};

export const UnauthGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isLoggedIn()) {
    return true; // Permite el acceso a la ruta si el usuario NO está autenticado
  } else {
    router.navigate(['/home']); // Redirige al usuario a la página principal si ya está autenticado
    return false;
  }
};
