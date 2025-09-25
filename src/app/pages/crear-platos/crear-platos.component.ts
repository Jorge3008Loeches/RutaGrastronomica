import { Component } from '@angular/core';
import { ResultsService } from '../../services/results.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Categoria, PlatosRetrieved } from '../../models/platos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-platos',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crear-platos.component.html',
  styleUrl: './crear-platos.component.scss',
})
export class CrearPlatosComponent {
  platoForm: FormGroup;
  mensaje: string = '';
  mensajeError: boolean = false;
  categorias = ['ENSALADA', 'ENTRADA', 'POSTRE', 'PRINCIPAL', 'SOPA']; // ['ENSALADA', 'ENTRADA', ...]
  constructor(
    private resultsService: ResultsService,
    private fb: FormBuilder
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

  onSubmit() {
    if (this.platoForm.invalid) {
      this.mensaje = 'Por favor completa todos los campos obligatorios.';
      this.mensajeError = true;
      this.platoForm.markAllAsTouched();
      return;
    }

    const nuevoPlato: Omit<PlatosRetrieved, 'id_plato'> = this.platoForm.value;

    this.resultsService.createPlato(nuevoPlato).subscribe({
      next: res => {
        this.mensaje = '✅ Plato guardado correctamente.';
        this.mensajeError = false;
        this.platoForm.reset(); // Limpia el formulario
      },
      error: err => {
        console.error('Error al guardar el plato:', err);
        this.mensaje = '❌ Ocurrió un error al guardar el plato.';
        this.mensajeError = true;
      },
    });
  }
}
