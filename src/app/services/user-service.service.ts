import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { LoginDTO } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private apiUrl = 'http://localhost:8080/api/usuarios';

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
