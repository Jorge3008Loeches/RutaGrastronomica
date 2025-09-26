/* eslint-disable @angular-eslint/prefer-inject */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Usuario } from '../models/usuario';
import { LoginDTO } from '../models/login';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //private apiUrl = 'http://localhost:8082/api/usuarios';
  apiUrl = 'http://gastromadrid.pickmyskills.com:8082/api/';

  //observables de los estados de autenticacion
  private loogedIn = new BehaviorSubject<boolean>(this.hasToken());
  public isLoggedIn$ = this.loogedIn.asObservable();

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  notifyLoginStatus(status: boolean) {
    this.loogedIn.next(status);
  }

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {}

  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(
      'http://gastromadrid.pickmyskills.com:8082/api/usuarios',
      usuario
    );
  }

  // login(nombreUsuario: string, password: string): Observable<string> {
  //   const body: LoginDTO = { nombreUsuario, password };
  //   return this.http.post<{ token: string }>(`${this.apiUrl}/login`, body).pipe(
  //     map(response => {
  //       const token = response.token; // Obtenemos el token desde el objeto
  //       this.authService.setToken(token);
  //       return token; // Devolvemos el token como string
  //     })
  //   );
  // }
  login(nombreUsuario: string, password: string): Observable<string> {
    const body: LoginDTO = { nombreUsuario, password };
    return this.http.post<string>(
      'http://gastromadrid.pickmyskills.com:8082/api/usuarios/login',
      body,
      {
        responseType: 'text' as 'json',
      }
    );
  }

  loginManual(body: { nombre: string; password: string }): Observable<string> {
    return this.http.post<string>(
      'http://gastromadrid.pickmyskills.com:8082/api/usuarios/login',
      body,
      {
        responseType: 'text' as 'json',
      }
    );
  }

  updateUsuario(usuario: Usuario): Observable<Usuario> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.put<Usuario>(`${this.apiUrl}/${usuario.id}`, usuario, {
      headers,
    });
  }

  getUsuario(): Observable<Usuario> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<Usuario>(`${this.apiUrl}/current`, { headers }).pipe(
      catchError(error => {
        // Si el usuario no se encuentra o el token es inválido, lanza un error
        console.error('Error al obtener el usuario:', error);
        return throwError(() => new Error('Usuario no encontrado'));
      })
    );
  }
}
