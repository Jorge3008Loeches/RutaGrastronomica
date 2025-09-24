import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
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
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-update-restaurant',
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './update-restaurant.component.html',
  styleUrl: './update-restaurant.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class UpdateRestaurantComponent {
  // @Input() restaurante!: Restaurante;

  restauranteForm!: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<UpdateRestaurantComponent>,
    private fb: FormBuilder,
    private resultsService: ResultsService,
    @Inject(MAT_DIALOG_DATA) public restaurante: Restaurante // ✅ ahora recibes los datos aquí
  ) {}

  ngOnInit(): void {
    if (this.restaurante) {
      this.restauranteForm = this.fb.group({
        nombre: [this.restaurante.nombre, Validators.required],
        domicilio: [this.restaurante.domicilio, Validators.required],
        latitude: [
          this.restaurante.latitude,
          [Validators.required, Validators.pattern(/^-?\d+(\.\d+)?$/)],
        ],
        longitude: [
          this.restaurante.longitude,
          [Validators.required, Validators.pattern(/^-?\d+(\.\d+)?$/)],
        ],
        photoreference: [this.restaurante.photoreference || ''],
      });
    }
  }

  onUpdate(): void {
    if (this.restauranteForm.valid) {
      const datosActualizados: Restaurante = {
        id: (this.restaurante as any).id_restaurante,
        nombre: this.restauranteForm.value.nombre,
        domicilio: this.restauranteForm.value.domicilio,
        latitude: this.restauranteForm.value.latitude,
        longitude: this.restauranteForm.value.longitude,
        photoreference: this.restauranteForm.value.photoreference,
      };

      console.log('Datos a enviar al backend:', datosActualizados);

      this.resultsService.updateRestaurante(datosActualizados).subscribe({
        next: updatedRest => {
          console.log('✅ Restaurante actualizado:', updatedRest);
          // Aquí puedes cerrar un diálogo o emitir un evento al padre si lo necesitas
          window.location.reload();
          this.dialogRef.close();
        },
        error: err => {
          console.error('❌ Error al actualizar restaurante:', err);
        },
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
    console.log('Edición cancelada');
  }
}
