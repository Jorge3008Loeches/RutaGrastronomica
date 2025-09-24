import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../services/user-service.service';
import { RegisterComponent } from '../pages/register/register.component';
import { LoginComponent } from '../pages/login/login.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-prop-info',
  imports: [CommonModule],
  templateUrl: './prop-info.component.html',
  styleUrl: './prop-info.component.scss',
})
export class PropInfoComponent {
  loggedIn = false;

  constructor(
    private dialog: MatDialog,
    private userService: UserService
  ) {
    this.userService.isLoggedIn$.subscribe(status => {
      this.loggedIn = status;
    });
  }

  openRegisterDialog() {
    this.dialog.open(RegisterComponent, {
      width: '400px',
    });
  }

  openLoginDialog() {
    this.dialog.open(LoginComponent, {
      width: '400px',
    });
  }
}
