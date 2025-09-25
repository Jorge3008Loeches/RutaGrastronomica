/* eslint-disable @angular-eslint/prefer-inject */
import { Component, OnInit } from '@angular/core';
import { ResultsService } from '../../services/results.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PlatosRetrieved } from '../../models/platos';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth-service.service';
import { UserService } from '../../services/user-service.service';

@Component({
  selector: 'app-crear-platos',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crear-platos.component.html',
  styleUrl: './crear-platos.component.scss',
})
export class CrearPlatosComponent implements OnInit {
  platoForm: FormGroup;
  mensaje = '';
  mensajeError = false;
  hasRestaurant = false;
  categorias = ['ENSALADA', 'ENTRADA', 'POSTRE', 'PRINCIPAL', 'SOPA']; // ['ENSALADA', 'ENTRADA', ...]
  constructor(
    private resultsService: ResultsService,
    private fb: FormBuilder,
    private authService: AuthService,
    private usuarioService: UserService
  ) {
    this.platoForm = this.fb.group({
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      descripcion: ['', Validators.required],
      ingredientes: ['', Validators.required],
      receta: ['', Validators.required],
      foto: [''],
    });
  }

  ngOnInit(): void {
    console.log(localStorage);
    if (this.authService.isAuthenticated()) {
      // Obtener usuario logueado
      this.usuarioService.getUsuario().subscribe({
        next: usuario => {
          if (usuario) {
            // Obtener restaurante asociado al usuario
            if (usuario.restauranteId) {
              this.hasRestaurant = true;
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

  onSubmit() {
    if (this.platoForm.invalid) {
      this.mensaje = 'Por favor completa todos los campos obligatorios.';
      this.mensajeError = true;
      this.platoForm.markAllAsTouched();
      return;
    }

    const nuevoPlato: Omit<PlatosRetrieved, 'id_plato'> = this.platoForm.value;

    this.resultsService.createPlato(nuevoPlato).subscribe({
      next: () => {
        this.mensaje = '✅ Plato guardado correctamente.';
        this.mensajeError = false;
        this.platoForm.reset(); // Limpia el formulario
        setTimeout(() => {
          this.mensaje = '';
        }, 5000);
      },
      error: err => {
        console.error('Error al guardar el plato:', err);
        this.mensaje = '❌ Ocurrió un error al guardar el plato.';
        this.mensajeError = true;
      },
    });
  }
}
