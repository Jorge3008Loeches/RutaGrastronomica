import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { Restaurante } from '../../models/restaurante';
import { ResultsService } from '../../services/results.service';
import { UserService } from '../../services/user-service.service';
import { AuthService } from '../../services/auth-service.service';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mi-restaurante',
  imports: [
    MatCardHeader,
    MatCard,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    CommonModule,
  ],
  templateUrl: './mi-restaurante.component.html',
  styleUrl: './mi-restaurante.component.scss',
})
export class MiRestauranteComponent {
  usuario: Usuario | null = null;
  restaurante: Restaurante | null = null;

  constructor(
    private usuarioService: UserService,
    private resultsService: ResultsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    console.log(localStorage);
    if (this.authService.isAuthenticated()) {
      // Obtener usuario logueado
      this.usuarioService.getUsuario().subscribe({
        next: usuario => {
          if (usuario) {
            this.usuario = usuario;

            // Obtener restaurante asociado al usuario
            if (usuario.restauranteId) {
              this.resultsService
                .getRestauranteById(usuario.restauranteId)
                .subscribe(restaurante => {
                  this.restaurante = restaurante;
                });
            }
          } else {
            console.log('No se encontró el usuario.');
            // Aquí puedes agregar lógica para manejar el caso cuando no haya usuario (ej. redirigir al login).
          }
        },
        error: err => {
          console.error('Error al obtener el usuario:', err);
          // Aquí puedes manejar el error (por ejemplo, redirigir al login si hay un error en la solicitud).
        },
      });
    } else {
      console.log('Usuario no autenticado');
    }
  }
}
