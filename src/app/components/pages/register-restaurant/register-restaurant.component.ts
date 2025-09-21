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
import { Usuario } from '../../../models/usuario';
import { UserServiceService } from '../../../services/user-service.service';

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

  nuevoUsuario: Usuario = {
    nombre: '',
    descripcion: '',
    domicilio: '',
    email: '',
    latitude: 0,
    longitude: 0,
    rating: 0,
    photoreference: '',
    password: '',
  };

  constructor(
    private dialogRef: MatDialogRef<RegisterRestaurantComponent>,
    private usuarioService: UserServiceService
  ) {}

  firstFormGroup = this._formBuilder.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    photoreference: [''],
  });

  secondFormGroup = this._formBuilder.group({
    descripcion: ['', Validators.required],
    domicilio: ['', Validators.required],
    password: ['', Validators.required],
    password2: ['', Validators.required],
    latitude: [0, Validators.required],
    longitude: [0, Validators.required],
  });

  onLogin() {
    const form1 = this.firstFormGroup.value;
    const form2 = this.secondFormGroup.value;

    if (!form1 || !form2) return;

    const usuario: Usuario = {
      nombre: form1.nombre!,
      email: form1.email!,
      photoreference: form1.photoreference || '',
      domicilio: form2.domicilio!,
      descripcion: form2.descripcion || '',
      latitude: form2.latitude ?? 0,
      longitude: form2.longitude ?? 0,
      rating: 0, // puedes dejarlo fijo por ahora
      password: form2.password!,
    };

    if (form2.password !== form2.password2) {
      alert('Las contraseñas no coinciden');
      return;
    }

    this.usuarioService.create(usuario).subscribe({
      next: res => {
        console.log('usuario registrado', res);
        this.dialogRef.close();
      },
      error: err => {
        console.error('error al registrar', err);
      },
    });
  }
  isLinear = false;
}
