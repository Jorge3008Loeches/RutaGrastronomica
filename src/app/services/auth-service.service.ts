import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAunthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  constructor() {}
}
