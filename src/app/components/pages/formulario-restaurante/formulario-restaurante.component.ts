import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ResultsService } from '../../../services/results.service';
import { Restaurante } from '../../../models/restaurante';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../services/user-service.service';
import { Usuario } from '../../../models/usuario';

@Component({
  selector: 'app-formulario-restaurante',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './formulario-restaurante.component.html',
  styleUrl: './formulario-restaurante.component.scss',
})
export class FormularioRestauranteComponent implements OnInit {
  restauranteForm!: FormGroup; // ✅ Solo declarada aquí

  constructor(
    private fb: FormBuilder,
    private resultsService: ResultsService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // ✅ Aquí sí puedes usar this.fb porque ya fue inicializado por el constructor
    this.restauranteForm = this.fb.group({
      nombre: ['', Validators.required],
      domicilio: ['', Validators.required],
      latitude: [
        null,
        [Validators.required, Validators.pattern(/^-?\d+(\.\d+)?$/)],
      ],
      longitude: [
        null,
        [Validators.required, Validators.pattern(/^-?\d+(\.\d+)?$/)],
      ],
      rating: [null],
      photoreference: [''],
    });
  }

  onSubmit() {
    if (this.restauranteForm.valid) {
      const nuevoRestaurante: Restaurante = this.restauranteForm.value;

      // 1. Crear el restaurante
      this.resultsService.createRestaurante(nuevoRestaurante).subscribe({
        next: restauranteCreado => {
          console.log('✅ Restaurante creado:', restauranteCreado);

          // 2. Obtener el usuario actual logueado
          this.userService.getUsuario().subscribe({
            next: usuario => {
              console.log('👤 Usuario actual:', usuario);

              // 3. Actualizar el usuario con el ID del restaurante
              const usuarioActualizado: Usuario = {
                ...usuario,
                restauranteId: restauranteCreado.id_restaurante,
                // 👈 Asignamos el ID del restaurante recién creado
              };

              this.userService.updateUsuario(usuarioActualizado).subscribe({
                next: updatedUser => {
                  console.log(
                    '✅ Usuario actualizado con restaurante:',
                    updatedUser
                  );
                  this.restauranteForm.reset(); // Limpiar formulario
                },
                error: err => {
                  console.error('❌ Error al actualizar el usuario:', err);
                },
              });
              window.location.reload();
            },
            error: err => {
              console.error('❌ Error al obtener el usuario:', err);
            },
          });
        },
        error: err => {
          console.error('❌ Error al crear el restaurante:', err);
        },
      });
    }
  }
}
