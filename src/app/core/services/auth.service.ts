import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false; 

  constructor(private router: Router) {}

  
  login(email: string, password: string): boolean {
    
    const validUser = {
      email: 'emiliano@gmail.com',
      password: 'Emiliano'
    };

    if (email === validUser.email && password === validUser.password) {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }
  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // Método para cerrar sesión
  logout(): void {
    this.isAuthenticated = false; // Eliminar el estado de autenticación
    this.router.navigate(['./login'])
  }
}
