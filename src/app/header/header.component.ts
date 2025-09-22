import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../components/pages/login/login.component';
import { RegisterComponent } from '../components/pages/register/register.component';
import { RegisterRestaurantComponent } from '../components/pages/register-restaurant/register-restaurant.component';
import { AuthService } from '../services/auth-service.service';
import { NgIf } from '@angular/common';
import { UserService } from '../services/user-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, RouterModule, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.userService.isLoggedIn$.subscribe(status => {
      this.loggedIn = status;
    });
  }

  loggedIn = false;

  openRegisterRestaurantDialog() {
    // Aquí puedes abrir un diálogo o redirigir a una página de registro de restaurante
    this.dialog.open(RegisterRestaurantComponent, {
      width: '400px',
    });
  }

  openLoginDialog() {
    this.dialog.open(LoginComponent, {
      width: '400px',
    });
  }

  openRegisterDialog() {
    this.dialog.open(RegisterComponent, {
      width: '400px',
    });
  }

  goToSearch() {
    // Aquí puedes capturar el valor del input si quieres
    // Por ejemplo: const query = this.searchInputValue;

    this.router.navigate(['/search']);
  }

  goPlatos() {
    if (this.loggedIn) {
      this.router.navigate(['/Misplatos']);
    } else {
      this.router.navigate(['/platos']);
    }
  }

  goRestaurantes() {
    if (this.loggedIn) {
      this.router.navigate(['/Misrestaurantes']);
    } else {
      this.router.navigate(['/restaurantes']);
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.userService.notifyLoginStatus(false);
    this.router.navigate(['/']);
  }
}
