/* eslint-disable @angular-eslint/prefer-inject */
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../components/pages/login/login.component';
import { RegisterComponent } from '../components/pages/register/register.component';
import { RegisterRestaurantComponent } from '../components/pages/register-restaurant/register-restaurant.component';
import { filterResultsService } from '../services/filter-results.service';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private filterService: filterResultsService
  ) {}

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

  goToSearch(filter?: string) {
    this.router.navigate(['/search']);
    if (filter) {
      this.filtrarPatos(filter);
    }
  }

  filtrarPatos(filter: string) {
    this.filterService.filtrarPlato(filter);
  }
}
