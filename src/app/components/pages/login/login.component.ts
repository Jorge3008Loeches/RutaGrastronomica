import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserServiceService } from '../../../services/user-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  nombreUsuario: string = '';
  password: string = '';

  constructor(
    private dialogRef: MatDialogRef<LoginComponent>,
    private userService: UserServiceService
  ) {}

  onLogin() {
    console.log('nombreUsuario', this.nombreUsuario);
    console.log('password', this.password);

    this.userService.login(this.nombreUsuario, this.password).subscribe({
      next: res => {
        console.log('login exitoso', res);
        this.dialogRef.close(true);
      },
      error: err => {
        console.error('error en el login:', err);
        alert('usuario o contrase;a incorrecto');
      },
    });
  }
}
