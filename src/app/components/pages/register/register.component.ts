import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  password2: string = '';
  telefono: string = '';
  username: string = '';

  constructor(private dialogRef: MatDialogRef<RegisterComponent>) {}

  onLogin() {
    console.log('email', this.email);
    console.log('password', this.password);
    this.dialogRef.close();
  }
}
