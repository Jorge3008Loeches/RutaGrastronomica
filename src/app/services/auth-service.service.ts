import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedInSubject = new BehaviorSubject<boolean>(
    this.isAuthenticated()
  );
  loggedIn$ = this.loggedInSubject.asObservable();

  constructor() {}

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Establece el token en localStorage
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Elimina el token de localStorage (logout)
  logout(): void {
    localStorage.removeItem('token');
    this.loggedInSubject.next(false); // Actualizamos el estado
  }
}
