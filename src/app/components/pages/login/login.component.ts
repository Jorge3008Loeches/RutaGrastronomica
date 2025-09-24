import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../../../services/user-service.service';
import { Router } from '@angular/router';

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
    private userService: UserService,
    private router: Router
  ) {}

  onLogin() {
    console.log('nombreUsuario', this.nombreUsuario);
    console.log('password', this.password);

    this.userService.login(this.nombreUsuario, this.password).subscribe({
      next: (res: string) => {
        console.log('login exitoso', res);

        //guardar el token
        localStorage.setItem('token', res);

        this.dialogRef.close(true);

        //notificar al authservie que el estado cambio
        this.userService.notifyLoginStatus(true);

        this.router.navigate(['/']);
      },
      error: (err: any) => {
        console.error('error en el login:', err);
        alert('usuario o contrase;a incorrecto');
      },
    });
  }
}
