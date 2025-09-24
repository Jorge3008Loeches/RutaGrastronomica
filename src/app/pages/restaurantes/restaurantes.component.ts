import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Restaurante, RetrievedRestaurant } from '../../models/restaurante';
import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'app-restaurantes',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './restaurantes.component.html',
  styleUrl: './restaurantes.component.scss',
})
export class RestaurantesComponent {
  restaurantes: RetrievedRestaurant[] = [];

  constructor(private restauranteService: ResultsService) {}

  ngOnInit(): void {
    this.restauranteService
      .getRestaurantes()
      .subscribe((data: RetrievedRestaurant[]) => {
        this.restaurantes = data;
        console.log(this.restaurantes);
      });
  }
}
