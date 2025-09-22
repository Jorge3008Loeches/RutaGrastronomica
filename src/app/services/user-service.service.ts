import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { LoginDTO } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/usuarios';

  //observables de los estados de autenticacion
  private loogedIn = new BehaviorSubject<boolean>(this.hasToken());
  public isLoggedIn$ = this.loogedIn.asObservable();

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  notifyLoginStatus(status: boolean) {
    this.loogedIn.next(status);
  }

  constructor(private http: HttpClient) {}

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario);
  }

  login(nombreUsuario: string, password: string): Observable<string> {
    const body: LoginDTO = { nombreUsuario, password };
    return this.http.post<string>(`${this.apiUrl}/login`, body, {
      responseType: 'text' as 'json',
    });
  }
}
