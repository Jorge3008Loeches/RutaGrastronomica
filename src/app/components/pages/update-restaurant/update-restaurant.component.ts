import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserService } from '../../../services/user-service.service';
import { Router } from '@angular/router';
import { ResultsService } from '../../../services/results.service';
import { Restaurante } from '../../../models/restaurante';

@Component({
  selector: 'app-update-restaurant',
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './update-restaurant.component.html',
  styleUrl: './update-restaurant.component.scss',
})
export class UpdateRestaurantComponent {
  @Input() restaurante!: Restaurante;

  restauranteForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private resultsService: ResultsService
  ) {}

  gOnInit(): void {
    // Inicializar el formulario con los valores actuales del restaurante
    this.restauranteForm = this.fb.group({
      nombre: [this.restaurante?.nombre, Validators.required],
      domicilio: [this.restaurante?.domicilio, Validators.required],
      latitude: [
        this.restaurante?.latitude,
        [Validators.required, Validators.pattern(/^-?\d+(\.\d+)?$/)],
      ],
      longitude: [
        this.restaurante?.longitude,
        [Validators.required, Validators.pattern(/^-?\d+(\.\d+)?$/)],
      ],
      photoreference: [this.restaurante?.photoreference || ''],
    });
  }

  onUpdate(): void {
    if (this.restauranteForm.valid) {
      const datosActualizados: Restaurante = {
        ...this.restaurante,
        ...this.restauranteForm.value,
      };

      this.resultsService.updateRestaurante(datosActualizados).subscribe({
        next: updatedRest => {
          console.log('✅ Restaurante actualizado:', updatedRest);
          // Aquí puedes cerrar un diálogo o emitir un evento al padre si lo necesitas
        },
        error: err => {
          console.error('❌ Error al actualizar restaurante:', err);
        },
      });
    }
  }

  onCancel(): void {
    // Acción al cancelar, por ejemplo cerrar un mat-dialog o volver atrás
    console.log('Edición cancelada');
  }
}
