import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private apiUrl = 'http://localhost:8080/api/usuarios';

  constructor(private http: HttpClient) {}

  postUser(usuario: {
    nombre: string;
    email: string;
    telefono: string;
    descripcion: string;
    direccion: string;
    password: string;
    password2: string;
  }): Observable<any> {
    const backendUrl = 'http://localhost:8080/api/usuarios';
    return this.http.post(backendUrl, usuario);
  }
}
