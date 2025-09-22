import { Component, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../../services/user-service.service';

@Component({
  selector: 'app-register',
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  private _formBuilder = inject(FormBuilder);

  Username: string = '';
  password: string = '';
  password2: string = '';

  constructor(
    private dialogRef: MatDialogRef<RegisterComponent>,
    private usuarioService: UserService
  ) {}

  onRegister() {
    console.log('name', this.Username);
    console.log('password', this.password);

    if (this.password !== this.password2) {
      alert('Las contraseñas no coinciden');
      return;
    }

    const nuevoUsuario = {
      nombre: this.Username,
      password: this.password,
    };

    this.usuarioService.create(nuevoUsuario).subscribe({
      next: usuarioCreado => {
        console.log('Usuario creado:', usuarioCreado);
        alert('Usuario registrado con éxito');
        this.dialogRef.close();
      },
      error: error => {
        console.error('Error al crear usuario:', error);
        alert('Error al registrar usuario');
      },
    });
  }
}
