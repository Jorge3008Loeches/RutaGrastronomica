import { Component, inject, ViewEncapsulation } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';

@Component({
  selector: 'app-register-restaurant',
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatStepperModule,
    ReactiveFormsModule,
  ],
  templateUrl: './register-restaurant.component.html',
  styleUrl: './register-restaurant.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class RegisterRestaurantComponent {
  private _formBuilder = inject(FormBuilder);

  email: string = '';
  direccion: string = '';
  telefono: string = '';
  password: string = '';
  password2: string = '';
  name: string = '';
  descripcion: string = '';
  ubicacion: string = '';
  imagen: string = '';

  constructor(private dialogRef: MatDialogRef<RegisterRestaurantComponent>) {}

  firstFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    telefono: ['', Validators.required],
    password: ['', Validators.required],
    password2: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    descripcion: ['', Validators.required],
    direccion: ['', Validators.required],
    ubicacion: ['', Validators.required],
    imagen: ['', Validators.required],
  });

  onLogin() {
    console.log('email', this.email);
    console.log('name', this.name);
    this.dialogRef.close();
  }
  isLinear = false;
}
