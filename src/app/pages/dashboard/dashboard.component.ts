import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { LoginComponent } from '../../components/pages/login/login.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RegisterRestaurantComponent } from '../../components/pages/register-restaurant/register-restaurant.component';
import { RegisterComponent } from '../../components/pages/register/register.component';
import { UserService } from '../../services/user-service.service';
import { PlatosService } from '../../services/platos-service.service';
import { PlatosRetrieved } from '../../models/platos';
import { ResultsService } from '../../services/results.service';
import { RetrievedRestaurant } from '../../models/restaurante';
import { PropInfoComponent } from '../../components/prop-info/prop-info.component';
import { SliderPlatosComponent } from '../../components/slider-platos/slider-platos.component';
import { SliderRestaurantesComponent } from '../../components/slider-restaurantes/slider-restaurantes.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    PropInfoComponent,
    SliderPlatosComponent,
    SliderRestaurantesComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  @ViewChild('sliderViewportRes', { static: false })
  sliderViewportRes!: ElementRef;

  loggedIn = false;

  restaurantes: RetrievedRestaurant[] = [];

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private userService: UserService,
    private platosService: PlatosService,
    private restaurnteService: ResultsService
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
